import os
import re

admin_dir = r"c:\Users\dell\Desktop\project anti\project anti\admin"

template = """        <div class="sidebar">
            <div class="sidebar-brand d-flex align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                <div class="clinic-logo-box me-2">
                    <i class="fa-solid fa-heart-pulse"></i>
                </div>
                <div>
                    <h5 class="mb-0 text-white fw-bold">MediCare Clinic</h5>
                    <small class="text-white-50 opacity-75">Admin Panel</small>
                </div>
            </div>
            
            <a href="../index.html" class="sidebar-link">
                <i class="fa-solid fa-desktop"></i> HOME
            </a>
            <a href="login.html" class="sidebar-link">
                <i class="fa-solid fa-right-to-bracket"></i> LOG IN
            </a>

            <div class="nav-title">ADMIN MENU</div>
            
            <a href="dashboard.html" class="sidebar-link __DASHBOARD_ACTIVE__">
                <i class="fa-solid fa-chart-pie"></i> Admin Dashboard
            </a>

            <!-- Staff Management -->
            <a class="sidebar-link __STAFF_ACTIVE__" data-bs-toggle="collapse" href="#staffMenu" role="button" aria-expanded="__STAFF_BOOL__" aria-controls="staffMenu">
                <i class="fa-solid fa-user-doctor"></i> Staff Management
            </a>
            <div class="collapse __STAFF_SHOW__" id="staffMenu">
                <div class="sidebar-submenu">
                    <a href="staff_doc.html" class="sidebar-sub-link __STAFF_DOC_ACTIVE__"><i class="fa-solid fa-user-md"></i> Doctor</a>
                    <a href="staff_ast.html" class="sidebar-sub-link __STAFF_AST_ACTIVE__"><i class="fa-solid fa-id-badge"></i> Assistants</a>
                </div>
            </div>

            <!-- Services & Specialties -->
            <a class="sidebar-link __SERV_ACTIVE__" data-bs-toggle="collapse" href="#servicesMenu" role="button" aria-expanded="__SERV_BOOL__" aria-controls="servicesMenu">
                <i class="fa-solid fa-hand-holding-medical"></i> Services & Specialties
            </a>
            <div class="collapse __SERV_SHOW__" id="servicesMenu">
                <div class="sidebar-submenu">
                    <a href="speciality.html" class="sidebar-sub-link __SPECIALITY_ACTIVE__"><i class="fa-solid fa-star-of-life"></i> Specialties</a>
                    <a href="services.html" class="sidebar-sub-link __SERVICES_ACTIVE__"><i class="fa-solid fa-pills"></i> Services</a>
                </div>
            </div>

            <!-- Patients & Visits -->
            <a class="sidebar-link __PATIENT_ACTIVE__" data-bs-toggle="collapse" href="#patientsMenu" role="button" aria-expanded="__PATIENT_BOOL__" aria-controls="patientsMenu">
                <i class="fa-solid fa-hospital-user"></i> Patients & Visits
            </a>
            <div class="collapse __PATIENT_SHOW__" id="patientsMenu">
                <div class="sidebar-submenu">
                    <a href="visits.html" class="sidebar-sub-link __VISITS_ACTIVE__"><i class="fa-solid fa-calendar-check"></i> Visits</a>
                    <a href="patients-list.html" class="sidebar-sub-link __PATIENT_LIST_ACTIVE__"><i class="fa-solid fa-users"></i> Patients</a>
                </div>
            </div>

            <!-- Financial Management -->
            <a class="sidebar-link __FINANC_ACTIVE__" data-bs-toggle="collapse" href="#financeMenu" role="button" aria-expanded="__FINANC_BOOL__" aria-controls="financeMenu">
                <i class="fa-solid fa-money-bill-trend-up"></i> Financial Management
            </a>
            <div class="collapse __FINANC_SHOW__" id="financeMenu">
                <div class="sidebar-submenu">
                    <a href="finance_add.html" class="sidebar-sub-link __FIN_ADD_ACTIVE__"><i class="fa-solid fa-plus-circle"></i> Add Expense</a>
                    <a href="finance_list.html" class="sidebar-sub-link __FIN_LIST_ACTIVE__"><i class="fa-solid fa-list-ul"></i> Expenses List</a>
                    <a href="finance_income.html" class="sidebar-sub-link __FIN_INCOME_ACTIVE__"><i class="fa-solid fa-file-invoice-dollar"></i> Income Report</a>
                    <a href="finance_exp_report.html" class="sidebar-sub-link __FIN_EXP_REP_ACTIVE__"><i class="fa-solid fa-chart-pie"></i> Expenses Report</a>
                    <a href="finance_monthly.html" class="sidebar-sub-link __FIN_MONTHLY_ACTIVE__"><i class="fa-solid fa-calendar-alt"></i> Monthly Report</a>
                </div>
            </div>

            <!-- System Settings -->
            <a class="sidebar-link __SYSTEM_ACTIVE__" data-bs-toggle="collapse" href="#systemMenu" role="button" aria-expanded="__SYSTEM_BOOL__" aria-controls="systemMenu">
                <i class="fa-solid fa-gears"></i> System Settings
            </a>
            <div class="collapse __SYSTEM_SHOW__" id="systemMenu">
                <div class="sidebar-submenu">
                    <a href="system.html" class="sidebar-sub-link __SYS_GEN_ACTIVE__"><i class="fa-solid fa-sliders"></i> General Settings</a>
                    <a href="system.html" class="sidebar-sub-link"><i class="fa-solid fa-key"></i> Change Password</a>
                    <a href="system.html" class="sidebar-sub-link"><i class="fa-solid fa-file-contract"></i> Report Settings</a>
                    <a href="system.html" class="sidebar-sub-link"><i class="fa-solid fa-database"></i> Backup</a>
                </div>
            </div>
        </div>"""

def get_filled_template(filename):
    mapping = {
        '__DASHBOARD_ACTIVE__': '',
        
        '__STAFF_ACTIVE__': '',
        '__STAFF_SHOW__': '',
        '__STAFF_BOOL__': 'false',
        '__STAFF_DOC_ACTIVE__': '',
        '__STAFF_AST_ACTIVE__': '',
        
        '__SERV_ACTIVE__': '',
        '__SERV_SHOW__': '',
        '__SERV_BOOL__': 'false',
        '__SPECIALITY_ACTIVE__': '',
        '__SERVICES_ACTIVE__': '',
        
        '__PATIENT_ACTIVE__': '',
        '__PATIENT_SHOW__': '',
        '__PATIENT_BOOL__': 'false',
        '__VISITS_ACTIVE__': '',
        '__PATIENT_LIST_ACTIVE__': '',
        
        '__FINANC_ACTIVE__': '',
        '__FINANC_SHOW__': '',
        '__FINANC_BOOL__': 'false',
        '__FIN_ADD_ACTIVE__': '',
        '__FIN_LIST_ACTIVE__': '',
        '__FIN_INCOME_ACTIVE__': '',
        '__FIN_EXP_REP_ACTIVE__': '',
        '__FIN_MONTHLY_ACTIVE__': '',
        
        '__SYSTEM_ACTIVE__': '',
        '__SYSTEM_SHOW__': '',
        '__SYSTEM_BOOL__': 'false',
        '__SYS_GEN_ACTIVE__': '' # Placeholder
    }

    if filename == 'dashboard.html':
        mapping['__DASHBOARD_ACTIVE__'] = 'active'
    
    elif filename.startswith('staff_doc'):
        mapping['__STAFF_ACTIVE__'] = 'active'
        mapping['__STAFF_SHOW__'] = 'show'
        mapping['__STAFF_BOOL__'] = 'true'
        mapping['__STAFF_DOC_ACTIVE__'] = 'active'
    elif filename.startswith('staff_ast'):
        mapping['__STAFF_ACTIVE__'] = 'active'
        mapping['__STAFF_SHOW__'] = 'show'
        mapping['__STAFF_BOOL__'] = 'true'
        mapping['__STAFF_AST_ACTIVE__'] = 'active'
    elif filename == 'staff.html':
        mapping['__STAFF_ACTIVE__'] = 'active'
        mapping['__STAFF_SHOW__'] = 'show'
        mapping['__STAFF_BOOL__'] = 'true'

    elif filename == 'speciality.html':
        mapping['__SERV_ACTIVE__'] = 'active'
        mapping['__SERV_SHOW__'] = 'show'
        mapping['__SERV_BOOL__'] = 'true'
        mapping['__SPECIALITY_ACTIVE__'] = 'active'
    elif filename == 'services.html':
        mapping['__SERV_ACTIVE__'] = 'active'
        mapping['__SERV_SHOW__'] = 'show'
        mapping['__SERV_BOOL__'] = 'true'
        mapping['__SERVICES_ACTIVE__'] = 'active'
    elif filename == 'serv_spec.html':
        mapping['__SERV_ACTIVE__'] = 'active'
        mapping['__SERV_SHOW__'] = 'show'
        mapping['__SERV_BOOL__'] = 'true'

    elif filename == 'visits.html':
        mapping['__PATIENT_ACTIVE__'] = 'active'
        mapping['__PATIENT_SHOW__'] = 'show'
        mapping['__PATIENT_BOOL__'] = 'true'
        mapping['__VISITS_ACTIVE__'] = 'active'
    elif 'patient' in filename:
        mapping['__PATIENT_ACTIVE__'] = 'active'
        mapping['__PATIENT_SHOW__'] = 'show'
        mapping['__PATIENT_BOOL__'] = 'true'
        if filename in ['patients-list.html', 'patient.html']:
            mapping['__PATIENT_LIST_ACTIVE__'] = 'active'
            
    elif filename == 'finance_add.html':
        mapping['__FINANC_ACTIVE__'] = 'active'
        mapping['__FINANC_SHOW__'] = 'show'
        mapping['__FINANC_BOOL__'] = 'true'
        mapping['__FIN_ADD_ACTIVE__'] = 'active'
    elif filename == 'finance_list.html':
        mapping['__FINANC_ACTIVE__'] = 'active'
        mapping['__FINANC_SHOW__'] = 'show'
        mapping['__FINANC_BOOL__'] = 'true'
        mapping['__FIN_LIST_ACTIVE__'] = 'active'
    elif filename == 'finance_income.html':
        mapping['__FINANC_ACTIVE__'] = 'active'
        mapping['__FINANC_SHOW__'] = 'show'
        mapping['__FINANC_BOOL__'] = 'true'
        mapping['__FIN_INCOME_ACTIVE__'] = 'active'
    elif filename == 'finance_exp_report.html':
        mapping['__FINANC_ACTIVE__'] = 'active'
        mapping['__FINANC_SHOW__'] = 'show'
        mapping['__FINANC_BOOL__'] = 'true'
        mapping['__FIN_EXP_REP_ACTIVE__'] = 'active'
    elif filename == 'finance_monthly.html':
        mapping['__FINANC_ACTIVE__'] = 'active'
        mapping['__FINANC_SHOW__'] = 'show'
        mapping['__FINANC_BOOL__'] = 'true'
        mapping['__FIN_MONTHLY_ACTIVE__'] = 'active'
    elif filename == 'financ.html':
        mapping['__FINANC_ACTIVE__'] = 'active'
        mapping['__FINANC_SHOW__'] = 'show'
        mapping['__FINANC_BOOL__'] = 'true'
        
    elif filename == 'system.html':
        mapping['__SYSTEM_ACTIVE__'] = 'active'
        mapping['__SYSTEM_SHOW__'] = 'show'
        mapping['__SYSTEM_BOOL__'] = 'true'
        mapping['__SYS_GEN_ACTIVE__'] = 'active'

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
                print(f"Updated: {file}")
            else:
                print(f"Skipped/Failed: {file}")
