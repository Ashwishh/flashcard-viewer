body {
  margin: 0;
  font-family: monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease;
}

[data-theme="light"] body {
    background-image: url(Dark-theme.jpg);
}
[data-theme="dark"] body {
    background-image: url(Light-theme.png);
}
.container {
    position: relative;
  text-align: center;
  right: 200px;
  
}
.theme {
    position: relative;
    left: 900px;
    bottom: 245px;
}

#theme-toggle:checked + .slider {
    background-color: #0fbcf9;
}
#theme-toggle:checked + .slider::before{
    transform: translateX(26px);
}
.slider {
  position: absolute;
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: #ccc;
  border-radius: 34px;
  transition: background-color 0.4s;
  cursor: pointer;
}

.slider::after {
    content: "🌙";
    position: absolute;
    left: 4px;
    top: 46%;
    transform: translateY(-50%);
    font-size: 18px;
    opacity: 1;
    transition: 0.4s;
}
#theme-toggle:checked + .slider::after {
    content: "☀️";
    left: 31px;
    top: 16px;
    opacity: 1;
}

.progress {
    position: relative;
  margin-bottom: 20px;
  font-size: 19px;
  color: #fff;
  right: 423px;
  bottom: 40px;
}

.cardlist {
  position: relative;
  width: 600px;
  height: 300px;
  transform-style: preserve-3d;
  perspective: 1000px;
  margin: 0 auto;
}

.card {
  position: absolute;
  width: 200px;
  height: 150px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: transform 0.6s ease, opacity 0.6s ease, filter 0.6s ease;
  top: 75px; 
  left: 200px; 
}
.card .inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card.flipped .inner {
    transform: rotateY(180deg);

}
.card .front, .card .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-sizing: border-box;
    padding: 10px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
}
.card .front {
    background: linear-gradient(135deg, #fff, #f0f0f0);

}
.card .back {
    background: linear-gradient(135deg, #e0e0e0, #d0d0d0);
    transform: rotateY(180deg);
}
.progressbox {
    position: relative;
      width: 400px;
      background-color: #6e6e6e;
      border-radius: 5px;
      overflow: hidden;
      height: 10px;
      margin: 20px 0;
      bottom: 250px;
      left: 300px;
}
.progress-bar {
      height: 100%;
      width: 0%;
      background: linear-gradient(to right, #ff7e5f,#76ff53);
      text-align: center;
      color: white;
      line-height: 25px;
      transition: width 0.3s ease;
}
