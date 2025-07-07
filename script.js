
// Class - 4 Topics:
// ------------------
// 1) Assigning a LumpSum Cost to a task
// 2)** Creating/Assigning a Baseline
// 3)** Modifying the Bar chart area
// 4) Modifying the Gantt Chart
// -----------------------------------

/*
1) Assigning a LumpSum Cost to a task:
   - It is possible that a task will have a lump sum cost associated without
     any breakdown for resources.
   - For a lump sum cost, there is no need to create any resource(s).
     - Go to the resource sheet.
     - Create a new resource name (ex: Sub-Contract)
       -* Resource Type = Cost
   - Create the task with all the info (ex: duration, successor)
   - In the tabular area, right-click on the task > Information > In the new window:
     - Resources tab > Under 'Resource name' > Select a resource (ex: Sub Contract)
       - For the value of the resource, type in a cost (ex: $5000)
       - OK > Now, a lump cost is assigned to the task and value is visible in
         the budgeted cost column 
*/

/*
2)** Creating/Assigning a Baseline:
   - When the planning is complete:
     - All the relevant components are created:
       - Tasks, successors, calendar, budgeted cost, WBS, groupings etc
   - Now, a baseline can be created and assigned to the project

   a) Always create a copy of the Planned project and save it in a folder

   b) Creating/Assigning a Baseline to the current project
     - Project menu > Set Baseline > Click 'Set Baseline...' > In the new window:
       - Select 'Set Baseline' = 'Baseline' in the list
       - Select 'Entire Project'
       - OK > Now a Baseline is created and assigned to the project

     -** Again go to 'Project' menu > Set Baseline > Set Baseline...
       - Now, in the window, it is mentioned the date/time when
         the baseline was created and assigned to the project
       - Do NOT click OK and Overwrite the existing Baseline
       - Simply cancel the window

   c)** Viewing the Baseline in the Gantt Chart:
     - Task menu > Click down arrow of the 'Gantt Chart' > Click 'Tracking Gantt Chart'
       - Now, the baseline is visible in the bar chart area (two bars fused together)
       - Right-click in the bar chart area > Bar styles
         - In the new window, for Critical, Task, Critical progress,
           task progress bars, assign custom bar sizes
           and the dates on either side of the bars
         - Apply/OK
         - Change the date format on either side of the bars
       - Save the project
*/
