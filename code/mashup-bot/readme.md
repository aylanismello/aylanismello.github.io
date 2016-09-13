# MashupBot

### Background

Loopy is an IPhone app that offers an intuitive and fun way to layer
musical ideas into little performance pieces. My idea is to recreate Loopy,
but with premade loops of other songs, letting the user switch between
different loops. In effect, these are mashups that the user can make
on the spot.

### Functionality and MVP
- [ ] Pause/play different loops on the loop grid
- [ ] Switch between different loops
- [ ] Loops are color coded
- [ ] A progress bar on each loop rotates around the circle to indicate progress on a given loop
- [ ] Volume control

### Wireframes

![loopy](http://evolver.fm/wp-content/uploads/2012/04/loopyhd2.jpg)

### Architecture and Technologies
This project will be implemented with these technologies:

* Vanilla js
* The Canvas API
* The Web Audio API for sound control
* WebAudioScheduler NPM package for scheduling sound events
* Hammer.js for touch events
* React for organizing the view layer hierarchy of elements
* Webpack to bundle and serve all the scripts

### Implementation Timeline

#### Day 1
* Make each song button a play button
* Create grid view (á la Ableton) for selecting different tracks of a certain type
(this requires a switching/toggle/solo mechanisms)


#### Day 2
* Add nicer graphics to buttons, with artist photo
* Redesign storage of tracks/representation such that image urls are
easy to pull up

#### Day 3
* Start transition from normal click events to hammer.js powered
touch events

#### Day 4
* Final chance for adding snazzier graphics, final stretch features.


### Bonus Features
- [ ] Record your mashups
- [ ] Share mashups with friends
- [ ] Change tempo
