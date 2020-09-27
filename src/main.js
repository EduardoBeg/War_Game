function start() {

	$("#Start").hide();
	
	$("#gameBackground").append("<div id='player'class='anima1'></div>");
	$("#gameBackground").append("<div id='enemy1'class='anima2'></div>");
	$("#gameBackground").append("<div id='enemy2'></div>");
    $("#gameBackground").append("<div id='ally'class='anima3'></div>");
    $("#gameBackground").append("<div id='score'></div>");
    $("#gameBackground").append("<div id='energy'></div>");
 
        var Game = {};
        
        var fireReady=true;
        var speed=5;
        var positionY = parseInt(Math.random() * 334);
        var gameOver=false;
        var points=0;
        var saved=0;
        var lost=0;
        var actualEnergy=3;
        var somDisparo=document.getElementById("somDisparo");
        var somExplosao=document.getElementById("somExplosao");
        var musica=document.getElementById("musica");
        var somGameover=document.getElementById("somGameover");
        var somPerdido=document.getElementById("somPerdido");
        var somResgate=document.getElementById("somResgate");
       
        musica.addEventListener("ended", function(){ musica.currentTime = 0; musica.play(); }, false);
        musica.play();

        Game.timer = setInterval(loop,30);
        
        function loop() {
        moveback();
        movePlayer();
        moveenemy1();
        moveenemy2();
        moveally();
        collision();
        score();
        energy()
        }

        function moveback() {
            esquerda = parseInt($("#gameBackground").css("background-position"));
            $("#gameBackground").css("background-position",esquerda-2);
            } 

            function movePlayer() {
                
                if (Game.pressed[KEY.W]) {
                    var topo = parseInt($("#player").css("top"));
                    $("#player").css("top",topo-10);
                    if (topo<=0) {
		
                        $("#player").css("top",topo+10);
                    }
                
                }
                
                if (Game.pressed[KEY.S]) {
                    
                    var topo = parseInt($("#player").css("top"));
                    $("#player").css("top",topo+10);	

                    if (topo>=434) {	
                        $("#player").css("top",topo-10);
                }
            }
                if (Game.pressed[KEY.D]) {
 
                    fire();
                }
            }
            var KEY = {
                W: 87,
                S: 83,
                D: 68}          
                Game.pressed = [];          
            
        

                $(document).keydown(function(e){
                Game.pressed[e.which] = true;
                });
                       
                $(document).keyup(function(e){
                    Game.pressed[e.which] = false;
                });        

            function moveenemy1() {

                positionX = parseInt($("#enemy1").css("left"));
                $("#enemy1").css("left",positionX-speed);
                $("#enemy1").css("top",positionY);
                    
                    if (positionX<=0) {
                    positionY = parseInt(Math.random() * 334);
                    $("#enemy1").css("left",694);
                    $("#enemy1").css("top",positionY);
                        
                    }
            }
            function moveenemy2() {
                positionX = parseInt($("#enemy2").css("left"));
            $("#enemy2").css("left",positionX-3);
                        
                if (positionX<=0) {
                    
                $("#enemy2").css("left",775);
                            
                }
            } 
            function moveally() {
	
                positionX = parseInt($("#ally").css("left"));
                $("#ally").css("left",positionX+1);
                            
                    if (positionX>906) {
                        
                    $("#ally").css("left",0);
                                
                    }
            }

           
            
            
            function fire() {
	            
                if (fireReady==true) {
                    somDisparo.play();    
                fireReady=false;
                
                topo = parseInt($("#player").css("top"))
                positionX= parseInt($("#player").css("left"))
                fireX = positionX + 190;
                Firetop=topo+37;
                $("#gameBackground").append("<div id='fire'></div");
                $("#fire").css("top",Firetop);
                $("#fire").css("left",fireX);
                
                var Firetime=window.setInterval(executeShot, 30);
                
                } 
             
                    function executeShot() {
                        positionX = parseInt($("#fire").css("left"));
                        $("#fire").css("left",positionX+15); 
                
                        if (positionX>900) {
                                        
                            window.clearInterval(Firetime);
                            Firetime=null;
                            $("#fire").remove();
                            fireReady=true;
                                    
                        }
                    } 
                    
                   
} 

    
function energy() {
	
    if (actualEnergy==3) {
        
        $("#energy").css("background-image", "url(../img/energy_3.png)");
    }

    if (actualEnergy==2) {
        
        $("#energy").css("background-image", "url(../img/energy_2.png)");
    }

    if (actualEnergy==1) {
        
        $("#energy").css("background-image", "url(../img/energy_1.png)");
    }

    if (actualEnergy==0) {
        
        $("#energy").css("background-image", "url(../img/energy_0.png)");
        gameOver()
        
    }
    function gameOver() {
        gameOver=true;
        musica.pause();
        somGameover.play();
        
        window.clearInterval(Game.timer);
        Game.timer=null;
        
        $("#player").remove();
        $("#enemy1").remove();
        $("#enemy2").remove();
        $("#ally").remove();
        
        $("#gameBackground").append("<div id='end'></div>");
        
        $("#end").html("<h1> Game Over </h1><p>Your score was: " + points + "</p>" + "<div id='restart' onClick=reloadPage()><h3>Restart Game</h3></div>");
        }
}


  
                    function collision() {
                        var collision1 = ($("#player").collision($("#enemy1")));
                        var collision2 = ($("#player").collision($("#enemy2")));
                        var collision3 = ($("#fire").collision($("#enemy1")));
                        var collision4 = ($("#fire").collision($("#enemy2")));
                        var collision5 = ($("#player").collision($("#ally")));
                        var collision6 = ($("#enemy2").collision($("#ally")));
                        console.log(collision1);
                        function repositionally() {
	
                            var allyTime=window.setInterval(reposicion6, 6000);
                            
                                function reposicion6() {
                                window.clearInterval(allyTime);
                                allyTime=null;
                                
                                if (gameOver==false) {
                                
                                $("#gameBackground").append("<div id='ally' class='anima3'></div>");
                                
                                }
                                
                            }
                            
                        } 
                        function repositionenemy2() {
	
                            var collisionTime4=window.setInterval(reposicion4, 5000);
                                
                                function reposicion4() {
                                window.clearInterval(collisionTime4);
                                collisionTime4=null;
                                    
                                    if (gameOver==false) {
                                    
                                    $("#gameBackground").append("<div id=enemy2></div");
                                    
                                    }
                                    
                                }	
                            }
                        if (collision1.length>0) {
                            actualEnergy--;
                            somExplosao.play();
                            enemy1X = parseInt($("#enemy1").css("left"));
                            enemy1Y = parseInt($("#enemy1").css("top"));
                            explosion1(enemy1X,enemy1Y);
                            
                            positionY = parseInt(Math.random() * 334);
                            $("#enemy1").css("left",694);
                            $("#enemy1").css("top",positionY);
                            
                            }
                            
                             if (collision2.length>0) {
                                actualEnergy--;
                                somExplosao.play();
                                enemy2X = parseInt($("#enemy2").css("left"));
                                enemy2Y = parseInt($("#enemy2").css("top"));
                                explosion2(enemy2X,enemy2Y);
                                            
                                 $("#enemy2").remove();
                                        
                                repositionenemy2();
                                
                                    }
                                
                                    
                                    if (collision3.length>0) {
                                        somExplosao.play();
                                        points+=100;
		                                speed+=0.1;
                                        enemy1X = parseInt($("#enemy1").css("left"));
                                        enemy1Y = parseInt($("#enemy1").css("top"));
                                            
                                        explosion1(enemy1X,enemy1Y);
                                        $("#fire").css("left",950);
                                            
                                        positionY = parseInt(Math.random() * 334);
                                        $("#enemy1").css("left",694);
                                        $("#enemy1").css("top",positionY);
                                            
                                        }	       
                                    
                                    if (collision4.length>0) {
                                        somExplosao.play();
                                        points+=50;
                                        speed+=0.1;
                                        enemy2X = parseInt($("#enemy2").css("left"));
                                        enemy2Y = parseInt($("#enemy2").css("top"));
                                        $("#enemy2").remove();
                                        
                                        explosion2(enemy2X,enemy2Y);
                                        $("#fire").css("left",950);
                                            
                                        repositionenemy2();
                                                
                                        }
                                    if (collision5.length>0) {
                                        saved++;
                                        somResgate.play();
                                        repositionally();
                                        $("#ally").remove();
                                        }
                    
                                        if (collision6.length>0) {
                                            lost++;
                                            somPerdido.play();
                                            allyX = parseInt($("#ally").css("left"));
                                            allyY = parseInt($("#ally").css("top"));
                                            explosion3(allyX,allyY);
                                            $("#ally").remove();
                                                    
                                            repositionally();
                                                    
                                            }
                                            
                                    }

                    function explosion1(enemy1X,enemy1Y) {
                        $("#gameBackground").append("<div id='explosion1'></div");
                        $("#explosion1").css("background-image", "url(../img/explosion.png)");
                        var div=$("#explosion1");
                        div.css("top", enemy1Y);
                        div.css("left", enemy1X);
                        div.animate({width:300, opacity:0}, "slow");
                        
                        var explosionTime=window.setInterval(removeExplosion, 1000);
                        
                            function removeExplosion() {
                                
                                div.remove();
                                window.clearInterval(explosionTime);
                                explosionTime=null;
                                
                            }
                    }
                            function explosion2(enemy2X,enemy2Y) {
	
                                $("#gameBackground").append("<div id='explosion2'></div");
                                $("#explosion2").css("background-image", "url(../img/explosion.png)");
                                var div2=$("#explosion2");
                                div2.css("top", enemy2Y);
                                div2.css("left", enemy2X);
                                div2.animate({width:200, opacity:0}, "slow");
                                
                                var explosionTime2=window.setInterval(removeExplosion2, 1000);
                                
                                    function removeExplosion2() {
                                        
                                        div2.remove();
                                        window.clearInterval(explosionTime2);
                                        explosionTime2=null;
                                        
                                    }
                                    
                                    
                                } 
                                function explosion3(allyX,allyY) {
                                    $("#gameBackground").append("<div id='explosion3' class='anima4'></div");
                                    $("#explosion3").css("top",allyY);
                                    $("#explosion3").css("left",allyX);
                                    var explosionTime3=window.setInterval(explosionReset3, 1000);
                                    function explosionReset3() {
                                    $("#explosion3").remove();
                                    window.clearInterval(explosionTime3);
                                    explosionTime3=null;
                                            
                                    }
                                    
                                    } 
                                    function score() {
	
                                        $("#score").html("<h2> Score: " + points + " Saved: " + saved + " Lost: " + lost + "</h2>");
                                        
                                    } 
                            

                            }
                          
                            function reloadPage(){
                                window.location.reload();
                             }