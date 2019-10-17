<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=dev!e-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">
    <title>Space game</title>
  </head>
  <body>
    <div class="container mt-5 p-0 main" id="main">
     
    <?php include('inc/header.php');  ?>   


        <div class="container-fluid position-relative" id="space">
           <div id="z_cont">
              <div class="row">
                <div class="col-8 col-md-6 offset-2 offset-md-3">  
                  <div class="panel panel-default text-info mt-5">
                    <div class="panel-heading ">
                      <h3 class="text-center">Contact</h3>
                    </div>
                    <div class="panel-body">
                      <form>
                      <div class="form-group">
                        <label for="email">Email:</label>
                        <input class="form-control" name="email" type="email" id="email" value="" placholden="Enter your email">
                      </div>
                      <div class="form-group">
                        <label for="title">Title:</label>
                        <input class="form-control" name="title" type="text" id="title" value="" placholden="Enter title">
                      </div>
                      <div class="form-group">
                        <label for="text_s">Message:</label>
                        <textarea class="form-control" id="text_s" rows="3"></textarea> 
                      </div>
                      <button id="send_email" type="button" class="btn btn-info">SEND</button>
                    </div>
                    <div class="container" id="result">
                         
                         </div>
                  </form>
                  </div>
                </div>              
              </div>  
            </div>
        </div>
        
        <?php include('inc/footer.php'); ?> 

    </div>
  </body>
  <script src="js/main.js"></script>
  <script src="js/Game.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <html>
