var database = document.getElementsByClassName("database");
      var database_label = document.getElementsByClassName("database_label");
      var databases = document.getElementsByClassName("databases");
      var database_chosen = document.getElementsByClassName("database_chosen")[0];
      var database_price;

      var backend = document.getElementsByClassName("backend");
      var backend_label = document.getElementsByClassName("backend_label");
      var backends = document.getElementsByClassName("backends");
      var backend_chosen = document.getElementsByClassName("backend_chosen")[0];
      var backend_price=0;

      var frontend = document.getElementsByClassName("frontend");
      var frontend_label = document.getElementsByClassName("frontend_label");
      var frontends = document.getElementsByClassName("frontends");
      var frontend_chosen = document.getElementsByClassName("frontend_chosen")[0];
      var frontend_price=0;
      var total=0;

      var total_estimate = document.getElementsByClassName("total_estimate")[0];

      function total_amount(){
        total = frontend_price + backend_price + database_price;
        total_estimate.value = "$" + JSON.stringify(total);
        console.log(total);
      };
      
      databases[0].onclick = function(){
        database_label[0].style.border = "2px solid #d33847";
        database_chosen.value = database[0].value;
        database_price = 0;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==0)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[1].onclick = function(){
        database_label[1].style.border = "2px solid #d33847";
        database_chosen.value = database[1].value;
        database_price = 1; 
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==1)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[2].onclick = function(){
        database_label[2].style.border = "2px solid #d33847";
        database_chosen.value = database[2].value;
        database_price = 2;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==2)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[3].onclick = function(){
        database_label[3].style.border = "2px solid #d33847";
        database_chosen.value = database[3].value;
        database_price = 3;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==3)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[4].onclick = function(){
        database_label[4].style.border = "2px solid #d33847";
        database_chosen.value = database[4].value;
        database_price = 4;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==4)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[5].onclick = function(){
        database_label[5].style.border = "2px solid #d33847";
        database_chosen.value = database[5].value;
        database_price = 5;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==5)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[6].onclick = function(){
        database_label[6].style.border = "2px solid #d33847";
        database_chosen.value = database[6].value;
        database_price = 6;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==6)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[7].onclick = function(){
        database_label[7].style.border = "2px solid #d33847";
        database_chosen.value = database[7].value;
        database_price = 2; 
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==7)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[8].onclick = function(){
        database_label[8].style.border = "2px solid #d33847";
        database_chosen.value = database[8].value;
        database_price = 8;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==8)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[9].onclick = function(){
        database_label[9].style.border = "2px solid #d33847";
        database_chosen.value = database[9].value;
        database_price = 9;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==9)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[10].onclick = function(){
        database_label[10].style.border = "2px solid #d33847";
        database_chosen.value = database[10].value;
        database_price = 10;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==10)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[11].onclick = function(){
        database_label[11].style.border = "2px solid #d33847";
        database_chosen.value = database[11].value;
        database_price = 11;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==11)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[12].onclick = function(){
        database_label[12].style.border = "2px solid #d33847";
        database_chosen.value = database[12].value;
        database_price = 12;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==12)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[13].onclick = function(){
        database_label[13].style.border = "2px solid #d33847";
        database_chosen.value = database[13].value;
        database_price = 13;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==13)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      databases[14].onclick = function(){
        database_label[14].style.border = "2px solid #d33847";
        database_chosen.value = database[14].value;
        database_price = 14;
        total_amount();
        for(let i=0;i<databases.length;i++){
          if(i!==14)
          {
            database_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };


      backends[0].onclick = function(){
        backend_label[0].style.border = "2px solid #d33847";
        backend_chosen.value = backend[0].value;
        backend_price = 0;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==0)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[1].onclick = function(){
        backend_label[1].style.border = "2px solid #d33847";
        backend_chosen.value = backend[1].value;
        backend_price = 1; 
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==1)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[2].onclick = function(){
        backend_label[2].style.border = "2px solid #d33847";
        backend_chosen.value = backend[2].value;
        backend_price = 2;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==2)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[3].onclick = function(){
        backend_label[3].style.border = "2px solid #d33847";
        backend_chosen.value = backend[3].value;
        backend_price = 3;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==3)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[4].onclick = function(){
        backend_label[4].style.border = "2px solid #d33847";
        backend_chosen.value = backend[4].value;
        backend_price = 4;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==4)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[5].onclick = function(){
        backend_label[5].style.border = "2px solid #d33847";
        backend_chosen.value = backend[5].value;
        backend_price = 5;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==5)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[6].onclick = function(){
        backend_label[6].style.border = "2px solid #d33847";
        backend_chosen.value = backend[6].value;
        backend_price = 6;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==6)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[7].onclick = function(){
        backend_label[7].style.border = "2px solid #d33847";
        backend_chosen.value = backend[7].value;
        backend_price = 2; 
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==7)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[8].onclick = function(){
        backend_label[8].style.border = "2px solid #d33847";
        backend_chosen.value = backend[8].value;
        backend_price = 8;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==8)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[9].onclick = function(){
        backend_label[9].style.border = "2px solid #d33847";
        backend_chosen.value = backend[9].value;
        backend_price = 9;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==9)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[10].onclick = function(){
        backend_label[10].style.border = "2px solid #d33847";
        backend_chosen.value = backend[10].value;
        backend_price = 10;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==10)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[11].onclick = function(){
        backend_label[11].style.border = "2px solid #d33847";
        backend_chosen.value = backend[11].value;
        backend_price = 11;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==11)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[12].onclick = function(){
        backend_label[12].style.border = "2px solid #d33847";
        backend_chosen.value = backend[12].value;
        backend_price = 12;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==12)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[13].onclick = function(){
        backend_label[13].style.border = "2px solid #d33847";
        backend_chosen.value = backend[13].value;
        backend_price = 13;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==13)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[14].onclick = function(){
        backend_label[14].style.border = "2px solid #d33847";
        backend_chosen.value = backend[14].value;
        backend_price = 14;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==14)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[15].onclick = function(){
        backend_label[15].style.border = "2px solid #d33847";
        backend_chosen.value = backend[15].value;
        backend_price = 0;
        total_amount();
        for(let i=15;i<backends.length;i++){
          if(i!==15)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[16].onclick = function(){
        backend_label[16].style.border = "2px solid #d33847";
        backend_chosen.value = backend[16].value;
        backend_price = 16; 
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==16)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[17].onclick = function(){
        backend_label[17].style.border = "2px solid #d33847";
        backend_chosen.value = backend[17].value;
        backend_price = 17;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==17)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[18].onclick = function(){
        backend_label[18].style.border = "2px solid #d33847";
        backend_chosen.value = backend[18].value;
        backend_price = 18;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==18)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[19].onclick = function(){
        backend_label[19].style.border = "2px solid #d33847";
        backend_chosen.value = backend[19].value;
        backend_price = 19;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==19)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[20].onclick = function(){
        backend_label[20].style.border = "2px solid #d33847";
        backend_chosen.value = backend[20].value;
        backend_price = 20;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==20)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      backends[21].onclick = function(){
        backend_label[21].style.border = "2px solid #d33847";
        backend_chosen.value = backend[21].value;
        backend_price = 21;
        total_amount();
        for(let i=0;i<backends.length;i++){
          if(i!==21)
          {
            backend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };



      frontends[0].onclick = function(){
        frontend_label[0].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[0].value;
        frontend_price = 0;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==0)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[1].onclick = function(){
        frontend_label[1].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[1].value;
        frontend_price = 1; 
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==1)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[2].onclick = function(){
        frontend_label[2].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[2].value;
        frontend_price = 2;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==2)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[3].onclick = function(){
        frontend_label[3].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[3].value;
        frontend_price = 3;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==3)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[4].onclick = function(){
        frontend_label[4].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[4].value;
        frontend_price = 4;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==4)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[5].onclick = function(){
        frontend_label[5].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[5].value;
        frontend_price = 5;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==5)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[6].onclick = function(){
        frontend_label[6].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[6].value;
        frontend_price = 6;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==6)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[7].onclick = function(){
        frontend_label[7].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[7].value;
        frontend_price = 2; 
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==7)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[8].onclick = function(){
        frontend_label[8].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[8].value;
        frontend_price = 8;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==8)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[9].onclick = function(){
        frontend_label[9].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[9].value;
        frontend_price = 9;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==9)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[10].onclick = function(){
        frontend_label[10].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[10].value;
        frontend_price = 10;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==10)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[11].onclick = function(){
        frontend_label[11].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[11].value;
        frontend_price = 11;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==11)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[12].onclick = function(){
        frontend_label[12].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[12].value;
        frontend_price = 12;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==12)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[13].onclick = function(){
        frontend_label[13].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[13].value;
        frontend_price = 13;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==13)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[14].onclick = function(){
        frontend_label[14].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[14].value;
        frontend_price = 14;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==14)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[15].onclick = function(){
        frontend_label[15].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[15].value;
        frontend_price = 15;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==15)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[16].onclick = function(){
        frontend_label[16].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[16].value;
        frontend_price = 16; 
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==16)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[17].onclick = function(){
        frontend_label[17].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[17].value;
        frontend_price = 17;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==17)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[18].onclick = function(){
        frontend_label[18].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[18].value;
        frontend_price = 18;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==18)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[19].onclick = function(){
        frontend_label[19].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[19].value;
        frontend_price = 19;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==19)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[20].onclick = function(){
        frontend_label[20].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[20].value;
        frontend_price = 20;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==20)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[21].onclick = function(){
        frontend_label[21].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[21].value;
        frontend_price = 21;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==21)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[22].onclick = function(){
        frontend_label[22].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[22].value;
        frontend_price = 22; 
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==22)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[23].onclick = function(){
        frontend_label[23].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[23].value;
        frontend_price = 23;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==23)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[24].onclick = function(){
        frontend_label[24].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[24].value;
        frontend_price = 24;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==24)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[25].onclick = function(){
        frontend_label[25].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[25].value;
        frontend_price = 25;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==25)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[26].onclick = function(){
        frontend_label[26].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[26].value;
        frontend_price = 26;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==26)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[27].onclick = function(){
        frontend_label[27].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[27].value;
        frontend_price = 27;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==27)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[28].onclick = function(){
        frontend_label[28].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[28].value;
        frontend_price = 28;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==28)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[29].onclick = function(){
        frontend_label[29].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[29].value;
        frontend_price = 29;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==29)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[30].onclick = function(){
        frontend_label[30].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[30].value;
        frontend_price = 30;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==30)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      frontends[31].onclick = function(){
        frontend_label[31].style.border = "2px solid #d33847";
        frontend_chosen.value = frontend[31].value;
        frontend_price = 31;
        total_amount();
        for(let i=0;i<frontends.length;i++){
          if(i!==31)
          {
            frontend_label[i].style.border = "2px solid #e5e7eb";
          }
        }
      };
      