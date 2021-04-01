var myCalendar = addToCalendar({
  title: 'Tommaso tries to teach pasta',     // Event title
  start: new Date('April 16, 2021 17:00'),   // Event start date
  duration: 120,                            // Event duration (IN MINUTES)
  end: new Date('April 16, 2021 18:00'),     // You can also choose to set an end time.
                                            // If an end time is set, this will take precedence over duration
  address: 'https://berkeley.zoom.us/j/9441793342',
  description: `Hi! \n
Thanks for helping me practice my class before I make a fool of myself. \n
Here is the ingredient list. https://docs.google.com/spreadsheets/d/1XUcrUjp8InTY46HiMyrt9BILWA2wjYy93ag4HmfmSRg/edit?usp=sharing`
});

document.querySelector('#cal').appendChild(myCalendar);