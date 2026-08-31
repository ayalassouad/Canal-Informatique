import streamlit as st
import pandas as pd
import json
import os
import plotly.express as px
from datetime import datetime

# Configure page
st.set_page_config(page_title="Canal Informatique Dashboard", page_icon="💻", layout="wide")

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, 'backend', 'data')

def load_data(filename):
    filepath = os.path.join(DATA_DIR, filename)
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        return []

st.title("💻 Canal Informatique Dashboard")
st.markdown("Overview of all form submissions and requests.")

# Load Data
contacts = load_data('contacts.json')
devis = load_data('devis.json')

# Stats
st.header("Overview")
col1, col2 = st.columns(2)
with col1:
    st.metric("Total Contacts", len(contacts))
with col2:
    st.metric("Total Devis Requests", len(devis))

st.divider()

if not contacts and not devis:
    st.warning("No data available yet.")
else:
    col_left, col_right = st.columns(2)
    
    with col_left:
        st.subheader("Devis by Service Type")
        if devis:
            df_devis = pd.DataFrame(devis)
            if 'serviceType' in df_devis.columns:
                service_counts = df_devis['serviceType'].value_counts().reset_index()
                service_counts.columns = ['Service', 'Count']
                fig = px.pie(service_counts, values='Count', names='Service', hole=0.3)
                st.plotly_chart(fig, use_container_width=True)
            else:
                st.info("No service types found.")
        else:
            st.info("No devis data.")
            
    with col_right:
        st.subheader("Devis by Urgency")
        if devis:
            df_devis = pd.DataFrame(devis)
            if 'urgency' in df_devis.columns:
                urgency_counts = df_devis['urgency'].value_counts().reset_index()
                urgency_counts.columns = ['Urgency', 'Count']
                fig2 = px.bar(urgency_counts, x='Urgency', y='Count', color='Urgency')
                st.plotly_chart(fig2, use_container_width=True)
            else:
                st.info("No urgency data found.")
        else:
            st.info("No devis data.")
            
    st.divider()
    
    st.subheader("Recent Contact Messages")
    if contacts:
        df_contacts = pd.DataFrame(contacts)
        # Select relevant columns
        cols = [c for c in ['createdAt', 'name', 'email', 'subject', 'message'] if c in df_contacts.columns]
        st.dataframe(df_contacts[cols].head(10), use_container_width=True)
    else:
        st.info("No contact messages.")
