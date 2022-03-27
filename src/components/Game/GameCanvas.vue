<template>
<Observable v-slot="slotted">

<div v-if="slotted.visible"><div>
Game
<canvas id="gameCanvas" ref="el"></canvas>
</div>
</div>
</Observable>
<div id="render"  class="bg-red-200 h-[600px] w-[800px]" @click="play"></div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import Observable from "@/components/Observable.vue"
import {
  Engine,
  Render,
  World,
  Bodies,
  Body,
  Events,
  Composite,
  Composites,
  Constraint,
  Collision,
  Vertices,
  Mouse,
  MouseConstraint,
  Query,
  Runner,
  Common
} from "matter-js";




     const el = ref(null)
    const rendered = ref(false);

onMounted(() => { 


});

const play = function() { 
    if (rendered.value == true) { 
        return;
    }
    rendered.value = true;

    
// create an engine
let engine = Engine.create();

// create a renderer
let render = Render.create({
    element: document.getElementById('render'),
    engine: engine,
    options: { 
        wireframes: false
    }
});

// create two boxes and a ground
let boxA = Bodies.rectangle(400, 200, 80, 80, { render: { fillStyle: '#edc0f9' }});
// let boxB = Bodies.rectangle(450, 50, 80, 80);

let goal = Bodies.rectangle(100, 100, 50, 50 , { isStatic: true});
// turns off collisions
goal.collisionFilter = {
  'group': 1,
  'category': 1,
  'mask': 0,
};
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
let ceiling = Bodies.rectangle(400, -28, 810, 60, { isStatic: true });
let wallLeft = Bodies.rectangle(-28, 310, 60, 650, { isStatic: true, render: { visible: false} }); 
let wallRight = Bodies.rectangle(828, 310, 60, 650, { isStatic: true, render: { visible: false} }); 

let mouse = Mouse.create(render.canvas);

let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render: {visible:true}
    } 
})



const keysDown = new Set();
document.addEventListener("keydown", event => {
  keysDown.add(event.code);
});
document.addEventListener("keyup", event => {
  keysDown.delete(event.code);
});

Events.on(engine, "beforeUpdate", event => {
  [...keysDown].forEach(k => {
    keyHandlers[k]?.();
  });
});

Events.on(engine, 'collisionStart', function(event)  { 
    console.log(Object.assign({}, event));
})


const keyHandlers = {
  KeyD: () => {
    Body.applyForce(boxA, {
      x: boxA.position.x,
      y: boxA.position.y
    }, {x: 0.02, y: 0})
  },
  KeyA: () => {
    Body.applyForce(boxA, {
      x: boxA.position.x,
      y: boxA.position.y
    }, {x: -0.02, y: 0})
  },
  KeyW: () => { 
      Body.applyForce(boxA, { 
          x: boxA.position.x,
          y: boxA.position.y
      }, {x: 0, y: -0.02})
  },
  KeyS: () => { 
      Body.applyForce(boxA, { 
          x: boxA.position.x,
          y: boxA.position.y
      }, {x: 0, y: 0.02})
  }
};

// add all of the bodies to the world
Composite.add(engine.world, [boxA, 
// boxB,
 ground,wallLeft, ceiling, wallRight, mouseConstraint, goal]);

// run the renderer
Render.run(render);

// create runner
let runner = Runner.create();

// run the engine
    Runner.run(runner, engine);
}
</script>