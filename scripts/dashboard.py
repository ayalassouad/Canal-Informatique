import json
import os
from collections import Counter
from datetime import datetime

# Optional rich dependency for a better looking dashboard
try:
    from rich.console import Console
    from rich.table import Table
    from rich.panel import Panel
    from rich import print as rprint
    RICH_AVAILABLE = True
except ImportError:
    RICH_AVAILABLE = False

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, 'backend', 'data')

def load_data(filename):
    filepath = os.path.join(DATA_DIR, filename)
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return []
    except json.JSONDecodeError:
        print(f"Error reading {filename}. It might be empty or corrupted.")
        return []

def get_stats():
    contacts = load_data('contacts.json')
    devis = load_data('devis.json')
    
    # Process contacts
    contact_dates = [datetime.fromisoformat(c['createdAt'].replace('Z', '+00:00')).date() for c in contacts if 'createdAt' in c]
    contact_dates_count = Counter(contact_dates)
    
    # Process devis
    devis_services = Counter([d.get('serviceType', 'Unknown') for d in devis])
    devis_urgency = Counter([d.get('urgency', 'Unknown') for d in devis])
    
    return {
        'total_contacts': len(contacts),
        'total_devis': len(devis),
        'contact_dates': contact_dates_count,
        'devis_services': devis_services,
        'devis_urgency': devis_urgency
    }

def print_rich_dashboard(stats):
    console = Console()
    
    console.print(Panel.fit("[bold blue]Canal Informatique - Data Dashboard[/bold blue]", border_style="blue"))
    
    # Overview Table
    overview = Table(title="Overview", show_header=True, header_style="bold magenta")
    overview.add_column("Metric", style="cyan")
    overview.add_column("Value", justify="right")
    
    overview.add_row("Total Contact Messages", str(stats['total_contacts']))
    overview.add_row("Total Devis Requests", str(stats['total_devis']))
    
    console.print(overview)
    
    # Devis Services Table
    services = Table(title="Devis by Service Type", show_header=True, header_style="bold green")
    services.add_column("Service", style="green")
    services.add_column("Count", justify="right")
    
    for service, count in stats['devis_services'].most_common():
        services.add_row(service, str(count))
        
    console.print(services)
    
    # Devis Urgency Table
    urgency = Table(title="Devis by Urgency", show_header=True, header_style="bold red")
    urgency.add_column("Urgency", style="red")
    urgency.add_column("Count", justify="right")
    
    for urg, count in stats['devis_urgency'].most_common():
        urgency.add_row(urg, str(count))
        
    console.print(urgency)

def print_basic_dashboard(stats):
    print("="*50)
    print(" CANAL INFORMATIQUE - DATA DASHBOARD")
    print("="*50)
    
    print(f"\n[ OVERVIEW ]")
    print(f"Total Contact Messages: {stats['total_contacts']}")
    print(f"Total Devis Requests:   {stats['total_devis']}")
    
    print(f"\n[ DEVIS BY SERVICE ]")
    for service, count in stats['devis_services'].most_common():
        print(f" - {service}: {count}")
        
    print(f"\n[ DEVIS BY URGENCY ]")
    for urg, count in stats['devis_urgency'].most_common():
        print(f" - {urg}: {count}")
    print("\n" + "="*50)
    print("Tip: Install 'rich' for a better looking dashboard: pip install rich")
    print("="*50)

if __name__ == "__main__":
    stats = get_stats()
    if RICH_AVAILABLE:
        print_rich_dashboard(stats)
    else:
        print_basic_dashboard(stats)
