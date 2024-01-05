# TO-DO LIST - App documentation
Developed by Matheus Lopes.

A simple to-do list aplication where the user can keep track of their daily tasks, adding tasks and marking them as done, as well as deleting, editing and vizualizing the items in more detail.


## Technologies used
   - ReactJS;
   - TypeScript;
   - CSS Modules.

## Functionalities
Opening the aplication for the first time will show you a empty list with a blank *"NEW TASK"* field where you can type your first task. To start, type something on that field.

### Once you added your first task, there are 4 main actions to take:
 - ### Mark it as done:
    - Clicking the **green checkmark** icon will mark the task as done, moving it from the *"TO-DO"* field to the *"DONE"* field. Clicking on the **green arrow** will move it back to *"TO-DO"*.
 - ### Delete it:
    - Clicking the **red trashcan** icon will open a confirmation modal asking if you want to delete the task: Click on the checkmark button to confirm and delete.
      - Be aware that this action **can't** be undone and if you delete the wrong task you must add a new one using the *"NEW TASK"* field.
 - ### Open it:
   - Clicking the **yellow eye** icon will open a modal for visualization, where you can see the entire item text. Clicking the X mark on the top-right corner closes the modal.
 - ### Edit it:
   - Clicking the **blue pencil** icon will show a field over the item's task, where you can type to edit it. Pressing Enter submit's the new text and saves the edited item.
### Important:
 - After **nine** items added to either the *"TO-DO"* or the *"DONE"* fields, a scrollbar will appear an the older items can be viewed by scrolling down the list.
 - This aplication was developed with study purposes and is **not** recommended for professional use.

---

## Instalation and execution
To install the app, follow this simple 3-step guide:
   
1. First choose the folder where you want to install it;
2. Once you chose a folder, open a bash terminal and type the following commands:
   
   1. Clone the git repository:

      `git clone https://github.com/Ltheus/todo-app.git`
   
   2. Acess the aplication's directory: 

      `cd todo-app`
   
   3. Installing **NodeJS**'s\* dependencys, using **npm**\*:

      `npm install`

   4. Running the aplication:

      `npm run dev`

3. After running it, click the link that appears on the terminal, or click [here](http://localhost:5173/).
 
 <sub>\* In case you don't have NodeJS installed, click [here](https://nodejs.org/en/download/current) and install the LTS release.</sub>
 
 <sup>\** In case you don't have npm installed, click [here](https://www.npmjs.com/package/npm) and follow the steps to install it.
</sup>