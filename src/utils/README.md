# Utils

Various utilities that are needed throughout the app will live here. Something that is used by multiple components and can be tested can live here for multi-purpose use.

## When to define a util (opinion)

I (Cameron) personally believe that something should become a utility when you have had to recreate the same function more than twice whether that be in a component or in a svelte store. If you automatically assume that something is going to be a utility than this folder can become very cluttered with things that are not being reused and that could be tested on a component/svelte store method level.