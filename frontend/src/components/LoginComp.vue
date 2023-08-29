<template>
    <div class="home">
        <img src="https://i.postimg.cc/vZrJg15Z/brandon-erlinger-ford-5-IM24x-Ew-Xjs-unsplash.jpg" class="custom-img" alt="">
        <div class="login-container">
            <h1 class="heading">LOGIN</h1>
            <form class="m-5">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn custom-btn">Submit</button>
                </div>
              </form>
              <div class="d-flex justify-content-center">
                  <p>Don't have an account? <a href="#">Create one</a></p>
              </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

img{
    display: block;
    max-width: 100%;
}

.home{
    position: relative;
}

.custom-img{
    width: 100vw;
    height: 100vh;
    max-width: 100%;
}

.login-container{
    position: absolute;
    background-color: #232327d3;
    width: 50vw;
    height: 70vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    color: #fff;
}

.heading{
    text-align: center;
    padding: 2rem;
}

.custom-btn{
    background-color: #D73636;
    color: #fff;
}


</style>