function AutoSchedulerController(){
  this.all = [
    {title: 'Contacted Hours', active: true, checked: true, reorder: true},
    {title: 'Regularity - Shift length', active: true, checked: true, reorder: true},
    {title: 'Regularity - Shift time', active: true, checked: true, reorder: true},
    {title: 'Regularity - Shift day', active: true, checked: true, reorder: true},
    {title: 'Weekends worked', active: true, checked: false, reorder: true},
    {title: 'Weekends worked - Strict', active: true, checked: false, reorder: true},
    {title: 'Availablilty - Preferences', active: true, checked: false, reorder: true},
    {title: 'Availablilty - Fairness', active: true, checked: false, reorder: true},
    {title: 'Cheapest Schedule', active: true, checked: false, reorder: true},
    {title: 'Rotation - Shift length', active: true, checked: false, reorder: true},
    {title: 'Rotation - Shift time', active: true, checked: false, reorder: true},
    {title: 'Rotation - Shift day', active: true, checked: false, reorder: true},
    {title: 'Location', active: false, checked: true, reorder: false},
    {title: 'Unavailability', active: false, checked: true, reorder: false},
    {title: 'EWTD - Fast', active: true, checked: false, reorder: false},
    {title: 'EWTD - Comprehensive', active: true, checked: false, reorder: false},
    {title: '5 days in 7', active: true, checked: true, reorder: false},
    {title: 'Positions', active: true, checked: true, reorder: false},
    {title: 'Skills', active: true, checked: true, reorder: false},
  ];
  return this;
}
