function AutoSchedulerController(){
  this.all = [
    {title: 'Contacted Hours', inactive: false, checked: true, reorder: true},
    {title: 'Regularity - Shift length', inactive: false, checked: true, reorder: true},
    {title: 'Regularity - Shift time', inactive: false, checked: true, reorder: true},
    {title: 'Regularity - Shift day', inactive: false, checked: true, reorder: true},
    {title: 'Weekends worked', inactive: false, checked: false, reorder: true},
    {title: 'Weekends worked - Strict', inactive: false, checked: false, reorder: true},
    {title: 'Availablilty - Preferences', inactive: false, checked: false, reorder: true},
    {title: 'Availablilty - Fairness', inactive: false, checked: false, reorder: true},
    {title: 'Cheapest Schedule', inactive: false, checked: false, reorder: true},
    {title: 'Rotation - Shift length', inactive: false, checked: false, reorder: true},
    {title: 'Rotation - Shift time', inactive: false, checked: false, reorder: true},
    {title: 'Rotation - Shift day', inactive: false, checked: false, reorder: true},
    {title: 'Location', inactive: true, checked: true, reorder: false},
    {title: 'Unavailability', inactive: true, checked: true, reorder: false},
    {title: 'EWTD - Fast', inactive: false, checked: false, reorder: false},
    {title: 'EWTD - Comprehensive', inactive: false, checked: false, reorder: false},
    {title: '5 days in 7', inactive: false, checked: true, reorder: false},
    {title: 'Positions', inactive: false, checked: true, reorder: false},
    {title: 'Skills', inactive: false, checked: true, reorder: false},
  ];
  return this;
}
