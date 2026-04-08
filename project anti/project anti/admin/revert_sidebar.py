import os
import re

admin_dir = r"c:\Users\dell\Desktop\project anti\project anti\admin"

template = """        <div class="sidebar">
            <div class="sidebar-brand d-flex align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                <div class="clinic-logo-box me-2"><i class="fa-solid fa-heart-pulse"></i></div>
                <div><h5 class="mb-0 text-white fw-bold">MediCare Clinic</h5><small class="text-white-50 opacity-75">Admin Panel</small></div>
            </div>
            <a href="../index.html" class="sidebar-link"><i class="fa-solid fa-desktop"></i> HOME</a>
            <a href="login.html" class="sidebar-link"><i class="fa-solid fa-right-to-bracket"></i> LOG IN</a>
            <div class="nav-title">ADMIN MENU</div>
            <a href="dashboard.html" class="sidebar-link __DASHBOARD_ACTIVE__"><i class="fa-solid fa-chart-pie"></i> Admin Dashboard</a>
            <a href="staff.html" class="sidebar-link __STAFF_ACTIVE__"><i class="fa-solid fa-user-doctor"></i> Staff Management</a>
            <a href="serv_spec.html" class="sidebar-link __SERV_ACTIVE__"><i class="fa-solid fa-hand-holding-medical"></i> Services & Specialties</a>
            <a href="patient.html" class="sidebar-link __PATIENT_ACTIVE__"><i class="fa-solid fa-hospital-user"></i> Patients & Visits</a>
            <a href="financ.html" class="sidebar-link __FINANC_ACTIVE__"><i class="fa-solid fa-money-bill-trend-up"></i> Financial Management</a>
            <a href="system.html" class="sidebar-link __SYSTEM_ACTIVE__"><i class="fa-solid fa-gears"></i> System Settings</a>
        </div>"""

def get_filled_template(filename):
    mapping = {
        ' __DASHBOARD_ACTIVE__': '',
        ' __STAFF_ACTIVE__': '',
        ' __SERV_ACTIVE__': '',
        ' __PATIENT_ACTIVE__': '',
        ' __FINANC_ACTIVE__': '',
        ' __SYSTEM_ACTIVE__': ''
    }

    if filename == 'dashboard.html':
        mapping[' __DASHBOARD_ACTIVE__'] = ' active'
    elif filename.startswith('staff'):
        mapping[' __STAFF_ACTIVE__'] = ' active'
    elif filename in ['serv_spec.html', 'services.html', 'speciality.html']:
        mapping[' __SERV_ACTIVE__'] = ' active'
    elif 'patient' in filename or filename == 'visits.html':
        mapping[' __PATIENT_ACTIVE__'] = ' active'
    elif 'financ' in filename:
        mapping[' __FINANC_ACTIVE__'] = ' active'
    elif filename == 'system.html':
        mapping[' __SYSTEM_ACTIVE__'] = ' active'

    res = template
    for k, v in mapping.items():
        res = res.replace(k, v)
    return res

def replace_sidebar_in_file(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    idx_start = content.find('<div class="sidebar">')
    if idx_start == -1:
        match = re.search(r'<div\s+class="sidebar"[^>]*>', content)
        if match:
            idx_start = match.start()
        else:
            return False

    div_count = 0
    idx = idx_start
    idx_end = -1
    
    while idx < len(content):
        next_open = content.find('<div', idx)
        next_close = content.find('</div', idx)
        
        if next_open != -1 and next_open < next_close:
            div_count += 1
            idx = next_open + 4
        elif next_close != -1:
            div_count -= 1
            idx = next_close + 5
            if div_count == 0:
                closing_bracket = content.find('>', idx-1)
                idx_end = closing_bracket + 1
                break
        else:
            break

    if idx_end != -1:
        new_sidebar = get_filled_template(filename)
        new_content = content[:idx_start] + new_sidebar + content[idx_end:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

for root, dirs, files in os.walk(admin_dir):
    for file in files:
        if file.endswith('.html'):
            path = os.path.join(root, file)
            success = replace_sidebar_in_file(path)
            if success:
                print(f"Reverted: {file}")
            else:
                print(f"Skipped/Failed: {file}")
