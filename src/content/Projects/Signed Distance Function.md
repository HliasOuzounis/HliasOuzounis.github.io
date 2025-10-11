---
title: "Signed Distance Function"
date: "2024-6"
description: "Computing a signed distance function (SDF) for a 3D mesh and detecting collisions using ray marching."
tags: ["OpenGL", "Python", "SDF", "Ray Marching"]
image: "/projects/sdf/sdf.png"
link: "https://github.com/HliasOuzounis/Signed-Distance-Function"
---

The aim of this project was to compute a signed distance function (SDF) for a 3D mesh and use it for collision detection using ray marching. 

![SDF Visualization](/projects/sdf/sdf.png)

From a plane, rays are cast towards the mesh and we check if they intersect with the mesh by evaluating the SDF. If the ray intersects, we color the pixel red, thus creating a projection of the mesh onto the plane. The plane can be arbitrarily rotated in 3D space.

![SDF Collision Detection](/projects/sdf/ray-marching-proj.png)
![SDF Collision Detection](/projects/sdf/duck-better.png)