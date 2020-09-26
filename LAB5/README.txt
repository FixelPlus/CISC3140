//retrieving from the web the .csv file
	$ wget https://raw.githubusercontent.com/FixelPlus/test_CISC3140/master/LAB5/regional-global-daily-latest.csv

//copy the content of the second column from .csv file to newly
//created .txt document. Separate wit comma using Ò-d,Ó option. 
	$ cut -d, -f 2 regional-global-daily-latest.csv > chart_songs.txt

// display the content of the .txt file 
	$ cat chart_songs.txt

// display the content of the .txt file with assigned numeration
	$ cat -n chart_songs.txt

-----------------------------------------------------------------------------------------

// making the script
	$ echo > myScriptforLog.sh
 
// add content to the script via "vi" text editor
	$ vi myScriptforLog.sh
	 i (for insert)
	wget https://raw.githubusercontent.com/FixelPlus/test_CISC3140/master/LAB5/regional-global-daily-latest.csv
	 cut -d, -f 2,3,4 regional-global-daily-latest.csv > songs_artists_streams.txt

// now we need to start the script. It will create songs_artists_streams.txt file with 
//columns 2,3,4 of the .csv file
	$ bash myScriptforLog.sh
-----------------------------------------------------------------------------------------

// making gif
	$ brew install imagemagick
	$ convert -delay 40 -loop 0 *.png -scale 480x270 myGif.gif
-----------------------------------------------------------------------------------------

// For details see files "session.log" and "gifSession.log"
