?php
        /**
         * GIT DEPLOYMENT SCRIPT
         *
         * Used for automatically deploying websites via github or bitbucket, m>
         *
         *              https://gist.github.com/1809044
         */

        // The commands
        $commands = array(
                'echo $PWD',
                'whoami',
                'git pull',
                'git status',
                'git submodule sync',
                'git submodule update',
                'git submodule status',
        );

?php
        /**
         * GIT DEPLOYMENT SCRIPT
         *
         * Used for automatically deploying websites via github or bitbucket, m>
         *
         *              https://gist.github.com/1809044
         */

        // The commands
        $commands = array(
                'echo $PWD',
                'whoami',
                'git pull',
                'git status',
                'git submodule sync',
                'git submodule update',
                'git submodule status',
        );

     // Run the commands for output
        $output = '';
        foreach($commands AS $command){
                // Run it
                $tmp = shell_exec($command);
                // Output
                $output .= "<span style=\"color: #6BE234;\">\$</span> <span sty>
                $output .= htmlentities(trim($tmp)) . "\n";
        }

        // Make it pretty for manual user access (and why not?)
?>
!DOCTYPE HTML>
<html lang="en-US">
<head>
        <meta charset="UTF-8">
        <title>GIT DEPLOYMENT SCRIPT</title>
</head>
<body style="background-color: #000000; color: #FFFFFF; font-weight: bold; padd>
<pre>
 .  ____  .    ____________________________
 |/      \|   |                            |
[| <span style="color: #FF0000;">&hearts;    &hearts;</span> |]  | Git Deployme>
 |___==___|  /              &copy; oodavid 2012 |
              |____________________________|

<?php echo $output; ?>
</pre>
</body>
</html>
