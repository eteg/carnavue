<template>
  <nav class="navbar navbar-default navbar-static" id="navbar-example">
    <div class="container-fluid">
      <div class="navbar-header"> <button class="collapsed navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-example-js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>        <a href="#" class="navbar-brand">Project Name</a> </div>
      <div class="collapse navbar-collapse bs-example-js-navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="dropdown"> <a href="#" class="dropdown-toggle" id="drop1" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Dropdown <span class="caret"></span> </a>
            <ul class="dropdown-menu" aria-labelledby="drop1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
          <li class="dropdown"> <a href="#" class="dropdown-toggle" id="drop2" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Dropdown <span class="caret"></span> </a>
            <ul class="dropdown-menu" aria-labelledby="drop2">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li id="fat-menu" class="dropdown"> <a href="#" class="dropdown-toggle" id="drop3" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Dropdown <span class="caret"></span> </a>
            <ul class="dropdown-menu" aria-labelledby="drop3">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default { };
</script>
