# TVShowTracker
Instructions on how to use it
#THIS ASSUMES YOU HAVE APACHE 2 INSTALLED
If you need instructions on how to do install apache...
Mac's: In the command line run "[package installer] install apache2"
Linux: In the command line run "apt-get install apache2"
------------------------------------
1. On UNIX based systems:
	a. go to your /var/ww/html/ via CLI (Command Line Interface)
	b. type "git clone https://github.com/justinbaskaran/TVShowTracker.git"
	c. then type "cd TVShowTracker/"
	d. then type "mv * .."
	e. then type " ip a | grep inet"
		ea. This should give you an address like
			"inet 153.106.xx.xx"
		eb. Write this number down. You will need it later.
	f. open a web broswer and type into the browswer the previous IP address. And Enjoy!

