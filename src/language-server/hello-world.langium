grammar HelloWorld

entry Package:
    'package' name=ID '{' Model '}';

fragment Model:
    instruction+=(Person | Greeting | Package | Documentation)*;

Person:
    'person' name=ID;

Greeting:
    'Hello' person=[Person:ID] '!';

Documentation: doc=DOC;

hidden terminal WS: /\s+/;
terminal DOC: /\/\*\*.*?\*\//;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;
terminal STRING: /"[^"]*"|'[^']*'/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
