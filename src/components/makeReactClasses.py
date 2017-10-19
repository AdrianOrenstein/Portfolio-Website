#!/usr/bin/python3

import fileinput
import os
import sys

# Generated valid .cpp and .h files from stdin

# Run Command: python3 makeClasses.py
# Input: className1 [ENTER] className2 [ENTER] etc..

def makeFunction(className):
	with open(className.lower() + ".js", 'w') as classFile:
		classFile.write("import React from \'react\'\n")
		classFile.write("import {" + "\n")
		classFile.write("\tButton," + "\n")
		classFile.write("\tContainer," + "\n")
		classFile.write("\tGrid," + "\n")
		classFile.write("\tSegment," + "\n")
		classFile.write("\tHeader," + "\n")
		classFile.write("\tImage," + "\n")
		classFile.write("} from \'semantic-ui-react\'" + "\n")
		classFile.write("import \'semantic-ui-css/semantic.css\'" + "\n")
		classFile.write("\n")
		classFile.write("import image from \'./img.jpg\'" + "\n")
		classFile.write("\n")
		classFile.write("const " + className + " = () => (" + "\n")
		classFile.write("\n")

		classFile.write("\t<div>" + "\n")
		classFile.write("\t\t<Segment vertical>" + "\n")
		classFile.write("\t\t\t<Container text>" + "\n")
		classFile.write("\n")
		classFile.write("\t\t\t\t<Header as='h1' dividing>SampleHead</Header>" + "\n")
		classFile.write("\t\t\t\t<p>" + "\n")
		classFile.write("\t\t\t\t\tSample Text" + "\n")
		classFile.write("\t\t\t\t</p>" + "\n")
		classFile.write("\t\t\t\t<a href='https://www.test.com'>Video Link</a>" + "\n")
		classFile.write('\t\t\t\t<Image src={image} style={{ padding: \'1em 0em\' }}/>' + "\n")
		classFile.write("\t\t\t</Container>" + "\n")
		classFile.write("\t\t</Segment>" + "\n")
		classFile.write("\t</div>" + "\n")
		classFile.write(")" + "\n")
		classFile.write("\n")
		classFile.write("export default " + className + "\n")

for argv in sys.stdin:
	file = argv.strip('\n')
	if os.path.isfile(file):
		print("File has already been created. Remove to re-write")
	else:
		makeFunction(file)