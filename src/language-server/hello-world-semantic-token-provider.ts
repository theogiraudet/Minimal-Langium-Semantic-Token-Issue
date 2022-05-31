import { AbstractSemanticTokenProvider, AstNode, SemanticTokenAcceptor } from "langium";
import { SemanticTokenTypes } from "vscode-languageserver";
import { isGreeting, isPackage, isPerson } from "./generated/ast";

export class HelloWorldSemanticTokenProvider extends AbstractSemanticTokenProvider {

    protected highlightElement(node: AstNode, acceptor: SemanticTokenAcceptor): void {
        if(isPackage(node))
            acceptor({ node, keyword: "package", type: SemanticTokenTypes.keyword });
        else if(isPerson(node))
            acceptor({ node, keyword: "person", type: SemanticTokenTypes.keyword });
        else if(isGreeting(node)) {
            acceptor({ node, keyword: "Hello", type: SemanticTokenTypes.keyword });
            acceptor({ node, keyword: "!", type: SemanticTokenTypes.keyword });
        }
    }
}