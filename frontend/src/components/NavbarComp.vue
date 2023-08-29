<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary position-fixed w-100">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">BMX WORLD</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                  <a class="nav-link active" aria-current="page" href="#">Products</a>
                  <a class="nav-link" href="#">About Us</a>
                  <a class="nav-link custom-btn" href="#">Lets Talk</a>
                </div>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

nav{
    z-index: 99999;
}
.custom-btn{
    background-color: var(--thirdColor);
    color: #fff;
    border-radius: 10px;
}
</style>