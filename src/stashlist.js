// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Task List</title>
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <link rel="stylesheet" href="style.css" />
//   </head>

//   <body>
    <div>
      <div>
    <header className="center">
        <h1>Stash List</h1>
    </header>
      </div>

    {/* <!--taskList--> */}
    <ul className = "center">
      <div className="container">
        <form className="form" >
        
        <input autofocus type="text" placeholder="Add new task..." required/>

      </form>

        {/* <!-- Save and Submit Button */}
        <button type="button" id="save" value="save" onclick="saveTask()"> Save and Submit </button>-->

        {/* <!--Reset Button--> */}
        {/* <!--<button name="button" type="reset" class="resetTask" id="resetTask" value="reset" onclick="resetTask()"> Reset Task List </button> --> */}
        
    </ul>
      </div>
    </div>

  <script src="script.js"></script>
//   </body>
// </html>
