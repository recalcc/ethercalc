SOCIALCALC_FILES=\
	socialcalcconstants.js \
	socialcalc-3.js \
	socialcalctableeditor.js \
	formatnumber2.js \
	formula1.js \
	socialcalcpopup.js \
	socialcalcspreadsheetcontrol.js \
	socialcalcviewer.js

ETHERCALC_FILES=\
	$(SOCIALCALC_FILES) \
	third-party/class-js/lib/Class.js \
	third-party/wikiwyg/lib/Document/Emitter.js \
	third-party/wikiwyg/lib/Document/Emitter/HTML.js \
	third-party/wikiwyg/lib/Document/Parser.js \
	third-party/wikiwyg/lib/Document/Parser/Wikitext.js \
	static/jquery.js

JS_FILES=\
	app.js dotcloud.js player.js main.js sc.js db.js

all ::
	#env PATH="$$PATH:./node_modules/LiveScript/bin" livescript -c -o . src
	node app.js -v

./node_modules/streamline/bin/_node :
	npm i --dev

depends :: static/ethercalc.js static/start.css

SocialCalcModule.js :: $(SOCIALCALC_FILES) exports.js
	cat $(SOCIALCALC_FILES) exports.js alertfix.js > $@
        echo "alert=console.log" > $@
	#@perl -e 'system(join(" ", "java -jar ~/compiler.jar " => map { ("--js", $$_) } @ARGV). " > $@")' $(SOCIALCALC_FILES) exports.js

static/ethercalc.js :: $(ETHERCALC_FILES)
	@echo "// Auto-generated from "make depends"; all changes here will be lost." > $@
	@perl -e 'system(join(" ", "java -jar ~/compiler.jar " => "--language_in=ES5" => map { ("--js", $$_) } @ARGV). " >> $@")' $(ETHERCALC_FILES) 

.coffee.js:
	coffee -c $<

.sass.css:
	sass -t compressed $< > $@

clean ::
	@-rm $(JS_FILES)

push ::
	dotcloud push ethercalc

.SUFFIXES: .js .coffee .css .sass .ls
