
    function buildMap(x) {
        var z = document.getElementById(x);
        var bullet = document.createElement("ul");
        var listitem = document.createElement("li");
        z.appendChild(bullet);
        
        var linkIndex = document.createElement("A");
        var listItem = document.createElement("li");
        linkIndex.setAttribute("href" , "index.html");
        linkIndex.textContent= "Home";
        listItem.appendChild(linkIndex);
        bullet.appendChild(listItem);
        
        var linkBio = document.createElement("A");
        var listItem = document.createElement("li");
        linkIndex.setAttribute("href" , "index.html");
        linkIndex.textContent= "Bio";
        listItem.appendChild(linkBio);
        bullet.appendChild(listItem);
        
        var linkItem= document.createElement("A");
        listItem.textContent = "Class Projects";
        bullet.appendChild(listItem);
        
        var nestedList = document.createElement("ul");
        listItem.appendChild(nestedList);
        
        var linkBreakout = document.createElement("A");
        var nestedListItem = document.createElement("li");
        linkBreakout.setAttribute("href", "breakout.html");
        linkBreakout.textContent = "Breakout";
        nestedListItem.appendChild(linkBreakout);
        nestedList.appendChild(nestedListItem);
        
        var linkJSevents = document.createElement("A");
        var nestedListItem = document.createElement("li");
        linkJSevents.setAttribute("href", "events.html");
        linkJSevents.textContent = "JavaScript Events";
        nestedListItem.appendChild(linkJSevents);
        nestedList.appendChild(nestedListItem);
        
        var linkPopup = document.createElement("A");
        var nestedListItem = document.createElement("li");
        linkPopup.setAttribute("href", "popup.html");
        linkPopup.textContent = "Pop up";
        nestedListItem.appendChild(linkPopup);
        nestedList.appendChild(nestedListItem);        
        
        var linkTodolist = document.createElement("A");
        var nestedListItem = document.createElement("li");
        linkTodolist.setAttribute("href", "todolist.html");
        linkTodolist.textContent = "To Do List";
        nestedListItem.appendChild(linkTodolist);
        nestedList.appendChild(nestedListItem);
        
        var linkChalkboard = document.createElement("A");
        var nestedListItem = document.createElement("li");
        linkChalkboard.setAttribute("href", "chalkboard.html");
        linkChalkboard.textContent = "Chalkboard";
        nestedListItem.appendChild(linkChalkboard);
        nestedList.appendChild(nestedListItem);
        
        var linkTicTacToe = document.createElement("A");
        var nestedListItem = document.createElement("li");
        linkTicTacToe.setAttribute("href", "todolist.html");
        linkTicTacToe.textContent = "Tic Tac Toe";
        nestedListItem.appendChild(linkTicTacToe);
        nestedList.appendChild(nestedListItem);
        
        var linkMultiplication = document.createElement("A");
        var nestedListItem = document.createElement("li");
        linkMultiplication.setAttribute("href", "multiplicationtable.html");
        linkMultiplication.textContent = "Multuplication";
        nestedListItem.appendChild(linkMultiplication);
        nestedList.appendChild(nestedListItem);
        
        var linkMoreMultiplicaiton = document.createElement("A");
        var nestedListItem = document.createElement("li");
        linkMoreMultiplicaiton.setAttribute("href", "usertimestable.html");
        linkMoreMultiplicaiton.textContent = "User Times Table";
        nestedListItem.appendChild(linkMoreMultiplicaiton);
        nestedList.appendChild(nestedListItem);

    }

