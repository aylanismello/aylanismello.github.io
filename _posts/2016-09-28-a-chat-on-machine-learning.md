---
title: "A Chat on Machine Learning: From Zero to Hero"
tags: [code, machine learning, python, ai, tensor flow]
categories: [code]
---

Thoughts courtesy of [Alex Nisnevitch](http://alex.nisnevich.com/portfolio/)


#### Aylan Mello
![][Aylan Mello]

` so a rap bot
that sounds like a productive start to my machine learning career`

`Also, do i need to learn python?
Or can i do cool shit w/ just ruby`

#### Alex Nisnevich
![][Alex Nisnevich]

` Read rap lyrics and generate freestyle verse? Son, you don't really need machine learning for that`

`You can just build an n-gram model, maybe do something clever if you want it all to rhyme`

`N-grams are a super easy and fun NLP technique:`

 [http://text-analytics101.rxnlp.com/2014/11/what-are-n-grams.html][]

`you don't even need anything fancy to implement a simple n-gram text generator – I've done it in ruby, no problem`

`Technically I guess it's machine learning, in the sense that you're learning a distribution of words over contexts (that is, given the previous N words, which word is the most likely to follow), but it's not really what people think of when they think of machine learning but it would be still be a fun project to do, and hey, I'm a sucker for NLP`

`If you're interested in more general practical machine learning and neural nets, I can point you to some resources for that as well`


`As far as courses go, it's a bit cheesy but the coursera ML course`

[https://www.coursera.org/learn/machine-learning][]

`is actually really good. You can go through it fast by skipping over the bits you already know (I just played them at 150% speed) and get to the interesting material. There's some material there on practical implementation of ML algorithms and things to watch out for, which I really liked – it's something that most courses don't cover!`


`In practice, if you're going to be doing legit ML stuff out in the wild, you're probably going to use scikit-learn.
Yeah it's python, which is like Ruby's shitty-ass bastard brother, but whatcha gonna do`


`scikit-learn is fortunately super-easy to use, I really enjoy it despite the whole python thing. It has some easy bite-sized tutorials:`

[http://scikit-learn.org/stable/tutorial/][]

`So playing around with that can keep you busy for a bit`


`Now, if you want to move on to the deep end of the pool and try some deep learning...`


`I feel like I didn't really *get* neural nets until I read`

 [http://karpathy.github.io/neuralnets/][].

 `Andrej Karpathy is a boss at explaining this stuff. Maybe you'll find it helpful too`


`For actually doing neural net stuff, you probably want to use`

[https://keras.io/][],

`it's the easiest-to-use NN library out there (though again, python)`

`basically it's a high-level abstraction on top of tensorflow that lets you use all the good parts of tensorflow without the pain of actually writing tensorflow code`

`Some tutorials to get you started with keras:`

[https://github.com/fastforwardlabs/keras-hello-world/blob/master/kerashelloworld.ipynb][]

[https://github.com/wxs/keras-mnist-tutorial/blob/master/MNIST%20in%20Keras.ipynb][]

`or check out`

[https://github.com/fchollet/keras-resources][]

`for a fuckton of tutorials for every possible application`

`Once you understand basic neural nets and can play around with them, it's time to move on to the bad boys: convolutional neural networks. The guys use special convolutional layers to do crazy magic with things like images and audio and are really the secret sauce of neural nets these days`


`Chris Olah's essays on the topic are a fantastic place to start:`

[http://colah.github.io/][]

`or just read all his neural net essays. They've very visual, and are a great way to build up intuition about this stuff`


`Then, armed with understanding of CNNs, you can do crazy shit like this:`

 [https://blog.keras.io/building-powerful-image-classification-models-using-very-little-data.html][]

`And there you have it
Machine learning, from zero to hero`


`Oh, by the way, if you're trying to figure out the right ML approach for a task, this will save your life:`

[http://scikit-learn.org/stable/tutorial/machine_learning_map/][]


`This flowchart us pretty useful in general, not just limited to scikit-learn, although it's a bit biased in the sense that it only suggests algorithms supported in scikit-learn (so, i.e. it doesn't mention neural nets at all!)`


`And here's a quick intro to the python scientific ecosystem – which used to be python+ipython+numpy+scipy+matplotlib but nowadays it's python+ipython+pandas+seaborn . Know your tools!`

 [http://twiecki.github.io/blog/2014/11/18/python-for-data-science/][] and
[http://www.scipy-lectures.org/][]

`is a much more in-depth introduction to the entire python scientific ecosystem, pick and choose the chapters that are important to you (I would do 1.1, 1.2, 1.3, 2.1, 3.1, 3.6, and optionally 1.5, 2.2, 2.6, 3.3 if you're interested in hardcore audio and image processing, which is something python actually shines at)`

`Anyway, that should keep you busy for a while ...`

#### Aylan Mello
![][Aylan Mello]

`dude`

`i fucking love you`

`this is a whole curriculum, awesome`

#### Alex Nisnevich
![][Alex Nisnevich]

`Btw here's another super fun article on ConvNets that might appeal to you:`

[http://karpathy.github.io/2015/10/25/selfie/][]


[http://text-analytics101.rxnlp.com/2014/11/what-are-n-grams.html]: http://text-analytics101.rxnlp.com/2014/11/what-are-n-grams.html
[https://www.coursera.org/learn/machine-learning]: https://www.coursera.org/learn/machine-learning

[http://scikit-learn.org/stable/tutorial/]: http://scikit-learn.org/stable/tutorial/

[http://karpathy.github.io/2015/10/25/selfie/]: http://karpathy.github.io/2015/10/25/selfie/


[http://karpathy.github.io/neuralnets/]: http://karpathy.github.io/neuralnets/
[https://keras.io/]: https://keras.io/


[https://github.com/fastforwardlabs/keras-hello-world/blob/master/kerashelloworld.ipynb]: https://github.com/fastforwardlabs/keras-hello-world/blob/master/kerashelloworld.ipynb


[https://github.com/wxs/keras-mnist-tutorial/blob/master/MNIST%20in%20Keras.ipynb]: https://github.com/wxs/keras-mnist-tutorial/blob/master/MNIST%20in%20Keras.ipynb


[https://github.com/fchollet/keras-resources]: https://github.com/fchollet/keras-resources

[http://colah.github.io/]: http://colah.github.io/

[https://blog.keras.io/building-powerful-image-classification-models-using-very-little-data.html]: https://blog.keras.io/building-powerful-image-classification-models-using-very-little-data.html

[http://scikit-learn.org/stable/tutorial/machine_learning_map/]: http://scikit-learn.org/stable/tutorial/machine_learning_map/

[http://twiecki.github.io/blog/2014/11/18/python-for-data-science/]: http://twiecki.github.io/blog/2014/11/18/python-for-data-science/

[http://www.scipy-lectures.org/]: http://www.scipy-lectures.org/

[http://karpathy.github.io/2015/10/25/selfie/]: http://karpathy.github.io/2015/10/25/selfie/

[Aylan Mello]: https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xtf1/v/t1.0-1/p80x80/12994399_10154120834524508_7715252297388941338_n.jpg?oh=8bef5fecf9e78572c12412bbe0970ea4&oe=586B9BBF&__gda__=1483001546_5ac37658f6f934a64b9c61ed70af9b4a


[Alex Nisnevich]: https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.14.80.80/p80x80/14364665_10153838944836828_8262998510335962003_n.jpg?oh=fc522148e6f4d728b3338e60a49b829c&oe=5881A0F3&__gda__=1484531372_0e1edad43a22cbb87dd5d4c14e58a683
