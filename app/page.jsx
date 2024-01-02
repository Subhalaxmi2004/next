"use client"
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Stack from '@mui/joy/Stack';
import { flexbox } from '@mui/system';
import Typography from '@mui/material/Typography';

const Page = () => {
  function setBoxWidth(boxId) {
    console.log("mama");
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function (box) {
        if (box.id === boxId) {
            box.style.width = '75%';
            box.style.height = '100%';
            box.querySelector('.child1').style.opacity = '1';
        } else {
            box.style.width = '12.5%';
            box.style.height = '100%';
            box.querySelector('.child1').style.opacity = '0';
        }
    });
}
function setBoxHeight(boxId) {
    console.log("mamali");
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function (box) {
        if (box.id === boxId) {
            box.style.height = '75%';
            box.style.width = '100%';
            box.querySelector('.child1').style.opacity = '1';
        } else {
            box.style.height = '12.5%';
            box.style.width = '100%';
            box.querySelector('.child1').style.opacity = '0';
        }
    });}

    useEffect(() => {
      function setupEventListeners() {
        var boxes = document.querySelectorAll('.box');
        boxes.forEach(function (box) {
          if (window.matchMedia('(max-width: 992px)').matches) {
            setBoxHeight(box.id);
          } else {
            setBoxWidth(box.id);
          }
  
          box.addEventListener('mouseover', function () {
            if (window.matchMedia('(max-width: 992px)').matches) {
              setBoxHeight(box.id);
            } else {
              setBoxWidth(box.id);
            }
          });
        });
      }
  
 setupEventListeners();  

window.addEventListener('resize', function () {

setupEventListeners();
console.log("subha");
});

 return () => {
      window.removeEventListener('resize', setupEventListeners);
    };
  }, []); 

  return (
    <>
    <Box sx={{border:"1px solid red",width:"100%",height:"",paddingBottom:"200px",paddingTop:"46px" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Typography sx={{color: "#FFF",
fontFamily: "Orbitron",
fontSize: "3.4vw",
fontStyle: "normal",
fontWeight: "500",
lineHeight: "normal",
letterSpacing: "2.5px"}}>
    ABOUT US
      </Typography>
    </Box>
      <Box className="container">
        <Box className="box" id="box1" onmouseover="setBoxWidth('box1')" sx={{backgroundImage:`url(/image2.jpg)`}}>
            <Box className="child1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores, commodi maxime, illum molestiae reprehenderit animi ex ipsum quo optio laborum, provident veritatis eius amet fuga iusto blanditiis vero officiis! </Box>
            <Typography className="title">TechNex</Typography>
        </Box>
        <Box className="box" id="box2" onmouseover="setBoxWidth('box2')" sx={{backgroundImage:`url(/image3.jpg)`}}>
            <Box className="child1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores, commodi maxime, illum molestiae reprehenderit animi ex ipsum quo optio laborum, provident veritatis eius amet fuga iusto blanditiis vero officiis!</Box>
            <Typography className="title">VSSUT</Typography> 
        </Box>
        <Box className="box" id="box3" onmouseover="setBoxWidth('box3')" sx={{backgroundImage:`url(/image1.jpg)`}}>
            <Box className="child1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores, commodi maxime, illum molestiae reprehenderit animi ex ipsum quo optio laborum, provident veritatis eius amet fuga iusto blanditiis vero officiis!</Box>
            <Typography className="title">ENIGMA</Typography>
        </Box>
    </Box>
  </>
  );
}
export default Page
