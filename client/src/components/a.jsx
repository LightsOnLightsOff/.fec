* {
  margin: 0;
}

body {
  color: green;
}

#slider {
  height: 500px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 1600px;
  margin: auto;
}

.subcontainer {
  width: 85%;
  margin: auto;
}

 #controls{
  background-color: aqua;
  font-size: 1 rem;
}

.previous,
.next {
  padding: 2px;
  width: 30px;
  cursor: pointer;
  transition: 0.7s ease-in-out;
  border: 3px solid green;
  background-color: aliceblue;
  box-shadow: 0 0 5px #bbb;
}

.previous hover,
.next hover {
  border: 3px solid gray;
}

.slide-img{
  width: 100%;
  height:275px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

}

.slide-img:hover{
  box-shadow: 0 0 0 200px burlywood inset;
}