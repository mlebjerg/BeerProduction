﻿/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])
e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},ts
!function(e){!function(e){e[e.Unknown=0]="Unknown",e[e.EndOfFileToken=1]="EndOfFileToken",e[e.SingleLineCommentTrivia=2]="SingleLineCommentTrivia",e[e.MultiLineCommentTrivia=3]="MultiLineCommentTrivia",e[e.NewLineTrivia=4]="NewLineTrivia",e[e.WhitespaceTrivia=5]="WhitespaceTrivia",e[e.ShebangTrivia=6]="ShebangTrivia",e[e.ConflictMarkerTrivia=7]="ConflictMarkerTrivia",e[e.NumericLiteral=8]="NumericLiteral",e[e.StringLiteral=9]="StringLiteral",e[e.RegularExpressionLiteral=10]="RegularExpressionLiteral",e[e.NoSubstitutionTemplateLiteral=11]="NoSubstitutionTemplateLiteral",e[e.TemplateHead=12]="TemplateHead",e[e.TemplateMiddle=13]="TemplateMiddle",e[e.TemplateTail=14]="TemplateTail",e[e.OpenBraceToken=15]="OpenBraceToken",e[e.CloseBraceToken=16]="CloseBraceToken",e[e.OpenParenToken=17]="OpenParenToken",e[e.CloseParenToken=18]="CloseParenToken",e[e.OpenBracketToken=19]="OpenBracketToken",e[e.CloseBracketToken=20]="CloseBracketToken",e[e.DotToken=21]="DotToken",e[e.DotDotDotToken=22]="DotDotDotToken",e[e.SemicolonToken=23]="SemicolonToken",e[e.CommaToken=24]="CommaToken",e[e.LessThanToken=25]="LessThanToken",e[e.LessThanSlashToken=26]="LessThanSlashToken",e[e.GreaterThanToken=27]="GreaterThanToken",e[e.LessThanEqualsToken=28]="LessThanEqualsToken",e[e.GreaterThanEqualsToken=29]="GreaterThanEqualsToken",e[e.EqualsEqualsToken=30]="EqualsEqualsToken",e[e.ExclamationEqualsToken=31]="ExclamationEqualsToken",e[e.EqualsEqualsEqualsToken=32]="EqualsEqualsEqualsToken",e[e.ExclamationEqualsEqualsToken=33]="ExclamationEqualsEqualsToken",e[e.EqualsGreaterThanToken=34]="EqualsGreaterThanToken",e[e.PlusToken=35]="PlusToken",e[e.MinusToken=36]="MinusToken",e[e.AsteriskToken=37]="AsteriskToken",e[e.AsteriskAsteriskToken=38]="AsteriskAsteriskToken",e[e.SlashToken=39]="SlashToken",e[e.PercentToken=40]="PercentToken",e[e.PlusPlusToken=41]="PlusPlusToken",e[e.MinusMinusToken=42]="MinusMinusToken",e[e.LessThanLessThanToken=43]="LessThanLessThanToken",e[e.GreaterThanGreaterThanToken=44]="GreaterThanGreaterThanToken",e[e.GreaterThanGreaterThanGreaterThanToken=45]="GreaterThanGreaterThanGreaterThanToken",e[e.AmpersandToken=46]="AmpersandToken",e[e.BarToken=47]="BarToken",e[e.CaretToken=48]="CaretToken",e[e.ExclamationToken=49]="ExclamationToken",e[e.TildeToken=50]="TildeToken",e[e.AmpersandAmpersandToken=51]="AmpersandAmpersandToken",e[e.BarBarToken=52]="BarBarToken",e[e.QuestionToken=53]="QuestionToken",e[e.ColonToken=54]="ColonToken",e[e.AtToken=55]="AtToken",e[e.EqualsToken=56]="EqualsToken",e[e.PlusEqualsToken=57]="PlusEqualsToken",e[e.MinusEqualsToken=58]="MinusEqualsToken",e[e.AsteriskEqualsToken=59]="AsteriskEqualsToken",e[e.AsteriskAsteriskEqualsToken=60]="AsteriskAsteriskEqualsToken",e[e.SlashEqualsToken=61]="SlashEqualsToken",e[e.PercentEqualsToken=62]="PercentEqualsToken",e[e.LessThanLessThanEqualsToken=63]="LessThanLessThanEqualsToken",e[e.GreaterThanGreaterThanEqualsToken=64]="GreaterThanGreaterThanEqualsToken",e[e.GreaterThanGreaterThanGreaterThanEqualsToken=65]="GreaterThanGreaterThanGreaterThanEqualsToken",e[e.AmpersandEqualsToken=66]="AmpersandEqualsToken",e[e.BarEqualsToken=67]="BarEqualsToken",e[e.CaretEqualsToken=68]="CaretEqualsToken",e[e.Identifier=69]="Identifier",e[e.BreakKeyword=70]="BreakKeyword",e[e.CaseKeyword=71]="CaseKeyword",e[e.CatchKeyword=72]="CatchKeyword",e[e.ClassKeyword=73]="ClassKeyword",e[e.ConstKeyword=74]="ConstKeyword",e[e.ContinueKeyword=75]="ContinueKeyword",e[e.DebuggerKeyword=76]="DebuggerKeyword",e[e.DefaultKeyword=77]="DefaultKeyword",e[e.DeleteKeyword=78]="DeleteKeyword",e[e.DoKeyword=79]="DoKeyword",e[e.ElseKeyword=80]="ElseKeyword",e[e.EnumKeyword=81]="EnumKeyword",e[e.ExportKeyword=82]="ExportKeyword",e[e.ExtendsKeyword=83]="ExtendsKeyword",e[e.FalseKeyword=84]="FalseKeyword",e[e.FinallyKeyword=85]="FinallyKeyword",e[e.ForKeyword=86]="ForKeyword",e[e.FunctionKeyword=87]="FunctionKeyword",e[e.IfKeyword=88]="IfKeyword",e[e.ImportKeyword=89]="ImportKeyword",e[e.InKeyword=90]="InKeyword",e[e.InstanceOfKeyword=91]="InstanceOfKeyword",e[e.NewKeyword=92]="NewKeyword",e[e.NullKeyword=93]="NullKeyword",e[e.ReturnKeyword=94]="ReturnKeyword",e[e.SuperKeyword=95]="SuperKeyword",e[e.SwitchKeyword=96]="SwitchKeyword",e[e.ThisKeyword=97]="ThisKeyword",e[e.ThrowKeyword=98]="ThrowKeyword",e[e.TrueKeyword=99]="TrueKeyword",e[e.TryKeyword=100]="TryKeyword",e[e.TypeOfKeyword=101]="TypeOfKeyword",e[e.VarKeyword=102]="VarKeyword",e[e.VoidKeyword=103]="VoidKeyword",e[e.WhileKeyword=104]="WhileKeyword",e[e.WithKeyword=105]="WithKeyword",e[e.ImplementsKeyword=106]="ImplementsKeyword",e[e.InterfaceKeyword=107]="InterfaceKeyword",e[e.LetKeyword=108]="LetKeyword",e[e.PackageKeyword=109]="PackageKeyword",e[e.PrivateKeyword=110]="PrivateKeyword",e[e.ProtectedKeyword=111]="ProtectedKeyword",e[e.PublicKeyword=112]="PublicKeyword",e[e.StaticKeyword=113]="StaticKeyword",e[e.YieldKeyword=114]="YieldKeyword",e[e.AbstractKeyword=115]="AbstractKeyword",e[e.AsKeyword=116]="AsKeyword",e[e.AnyKeyword=117]="AnyKeyword",e[e.AsyncKeyword=118]="AsyncKeyword",e[e.AwaitKeyword=119]="AwaitKeyword",e[e.BooleanKeyword=120]="BooleanKeyword",e[e.ConstructorKeyword=121]="ConstructorKeyword",e[e.DeclareKeyword=122]="DeclareKeyword",e[e.GetKeyword=123]="GetKeyword",e[e.IsKeyword=124]="IsKeyword",e[e.ModuleKeyword=125]="ModuleKeyword",e[e.NamespaceKeyword=126]="NamespaceKeyword",e[e.NeverKeyword=127]="NeverKeyword",e[e.ReadonlyKeyword=128]="ReadonlyKeyword",e[e.RequireKeyword=129]="RequireKeyword",e[e.NumberKeyword=130]="NumberKeyword",e[e.SetKeyword=131]="SetKeyword",e[e.StringKeyword=132]="StringKeyword",e[e.SymbolKeyword=133]="SymbolKeyword",e[e.TypeKeyword=134]="TypeKeyword",e[e.UndefinedKeyword=135]="UndefinedKeyword",e[e.FromKeyword=136]="FromKeyword",e[e.GlobalKeyword=137]="GlobalKeyword",e[e.OfKeyword=138]="OfKeyword",e[e.QualifiedName=139]="QualifiedName",e[e.ComputedPropertyName=140]="ComputedPropertyName",e[e.TypeParameter=141]="TypeParameter",e[e.Parameter=142]="Parameter",e[e.Decorator=143]="Decorator",e[e.PropertySignature=144]="PropertySignature",e[e.PropertyDeclaration=145]="PropertyDeclaration",e[e.MethodSignature=146]="MethodSignature",e[e.MethodDeclaration=147]="MethodDeclaration",e[e.Constructor=148]="Constructor",e[e.GetAccessor=149]="GetAccessor",e[e.SetAccessor=150]="SetAccessor",e[e.CallSignature=151]="CallSignature",e[e.ConstructSignature=152]="ConstructSignature",e[e.IndexSignature=153]="IndexSignature",e[e.TypePredicate=154]="TypePredicate",e[e.TypeReference=155]="TypeReference",e[e.FunctionType=156]="FunctionType",e[e.ConstructorType=157]="ConstructorType",e[e.TypeQuery=158]="TypeQuery",e[e.TypeLiteral=159]="TypeLiteral",e[e.ArrayType=160]="ArrayType",e[e.TupleType=161]="TupleType",e[e.UnionType=162]="UnionType",e[e.IntersectionType=163]="IntersectionType",e[e.ParenthesizedType=164]="ParenthesizedType",e[e.ThisType=165]="ThisType",e[e.LiteralType=166]="LiteralType",e[e.ObjectBindingPattern=167]="ObjectBindingPattern",e[e.ArrayBindingPattern=168]="ArrayBindingPattern",e[e.BindingElement=169]="BindingElement",e[e.ArrayLiteralExpression=170]="ArrayLiteralExpression",e[e.ObjectLiteralExpression=171]="ObjectLiteralExpression",e[e.PropertyAccessExpression=172]="PropertyAccessExpression",e[e.ElementAccessExpression=173]="ElementAccessExpression",e[e.CallExpression=174]="CallExpression",e[e.NewExpression=175]="NewExpression",e[e.TaggedTemplateExpression=176]="TaggedTemplateExpression",e[e.TypeAssertionExpression=177]="TypeAssertionExpression",e[e.ParenthesizedExpression=178]="ParenthesizedExpression",e[e.FunctionExpression=179]="FunctionExpression",e[e.ArrowFunction=180]="ArrowFunction",e[e.DeleteExpression=181]="DeleteExpression",e[e.TypeOfExpression=182]="TypeOfExpression",e[e.VoidExpression=183]="VoidExpression",e[e.AwaitExpression=184]="AwaitExpression",e[e.PrefixUnaryExpression=185]="PrefixUnaryExpression",e[e.PostfixUnaryExpression=186]="PostfixUnaryExpression",e[e.BinaryExpression=187]="BinaryExpression",e[e.ConditionalExpression=188]="ConditionalExpression",e[e.TemplateExpression=189]="TemplateExpression",e[e.YieldExpression=190]="YieldExpression",e[e.SpreadElementExpression=191]="SpreadElementExpression",e[e.ClassExpression=192]="ClassExpression",e[e.OmittedExpression=193]="OmittedExpression",e[e.ExpressionWithTypeArguments=194]="ExpressionWithTypeArguments",e[e.AsExpression=195]="AsExpression",e[e.NonNullExpression=196]="NonNullExpression",e[e.TemplateSpan=197]="TemplateSpan",e[e.SemicolonClassElement=198]="SemicolonClassElement",e[e.Block=199]="Block",e[e.VariableStatement=200]="VariableStatement",e[e.EmptyStatement=201]="EmptyStatement",e[e.ExpressionStatement=202]="ExpressionStatement",e[e.IfStatement=203]="IfStatement",e[e.DoStatement=204]="DoStatement",e[e.WhileStatement=205]="WhileStatement",e[e.ForStatement=206]="ForStatement",e[e.ForInStatement=207]="ForInStatement",e[e.ForOfStatement=208]="ForOfStatement",e[e.ContinueStatement=209]="ContinueStatement",e[e.BreakStatement=210]="BreakStatement",e[e.ReturnStatement=211]="ReturnStatement",e[e.WithStatement=212]="WithStatement",e[e.SwitchStatement=213]="SwitchStatement",e[e.LabeledStatement=214]="LabeledStatement",e[e.ThrowStatement=215]="ThrowStatement",e[e.TryStatement=216]="TryStatement",e[e.DebuggerStatement=217]="DebuggerStatement",e[e.VariableDeclaration=218]="VariableDeclaration",e[e.VariableDeclarationList=219]="VariableDeclarationList",e[e.FunctionDeclaration=220]="FunctionDeclaration",e[e.ClassDeclaration=221]="ClassDeclaration",e[e.InterfaceDeclaration=222]="InterfaceDeclaration",e[e.TypeAliasDeclaration=223]="TypeAliasDeclaration",e[e.EnumDeclaration=224]="EnumDeclaration",e[e.ModuleDeclaration=225]="ModuleDeclaration",e[e.ModuleBlock=226]="ModuleBlock",e[e.CaseBlock=227]="CaseBlock",e[e.NamespaceExportDeclaration=228]="NamespaceExportDeclaration",e[e.ImportEqualsDeclaration=229]="ImportEqualsDeclaration",e[e.ImportDeclaration=230]="ImportDeclaration",e[e.ImportClause=231]="ImportClause",e[e.NamespaceImport=232]="NamespaceImport",e[e.NamedImports=233]="NamedImports",e[e.ImportSpecifier=234]="ImportSpecifier",e[e.ExportAssignment=235]="ExportAssignment",e[e.ExportDeclaration=236]="ExportDeclaration",e[e.NamedExports=237]="NamedExports",e[e.ExportSpecifier=238]="ExportSpecifier",e[e.MissingDeclaration=239]="MissingDeclaration",e[e.ExternalModuleReference=240]="ExternalModuleReference",e[e.JsxElement=241]="JsxElement",e[e.JsxSelfClosingElement=242]="JsxSelfClosingElement",e[e.JsxOpeningElement=243]="JsxOpeningElement",e[e.JsxText=244]="JsxText",e[e.JsxClosingElement=245]="JsxClosingElement",e[e.JsxAttribute=246]="JsxAttribute",e[e.JsxSpreadAttribute=247]="JsxSpreadAttribute",e[e.JsxExpression=248]="JsxExpression",e[e.CaseClause=249]="CaseClause",e[e.DefaultClause=250]="DefaultClause",e[e.HeritageClause=251]="HeritageClause",e[e.CatchClause=252]="CatchClause",e[e.PropertyAssignment=253]="PropertyAssignment",e[e.ShorthandPropertyAssignment=254]="ShorthandPropertyAssignment",e[e.EnumMember=255]="EnumMember",e[e.SourceFile=256]="SourceFile",e[e.JSDocTypeExpression=257]="JSDocTypeExpression",e[e.JSDocAllType=258]="JSDocAllType",e[e.JSDocUnknownType=259]="JSDocUnknownType",e[e.JSDocArrayType=260]="JSDocArrayType",e[e.JSDocUnionType=261]="JSDocUnionType",e[e.JSDocTupleType=262]="JSDocTupleType",e[e.JSDocNullableType=263]="JSDocNullableType",e[e.JSDocNonNullableType=264]="JSDocNonNullableType",e[e.JSDocRecordType=265]="JSDocRecordType",e[e.JSDocRecordMember=266]="JSDocRecordMember",e[e.JSDocTypeReference=267]="JSDocTypeReference",e[e.JSDocOptionalType=268]="JSDocOptionalType",e[e.JSDocFunctionType=269]="JSDocFunctionType",e[e.JSDocVariadicType=270]="JSDocVariadicType",e[e.JSDocConstructorType=271]="JSDocConstructorType",e[e.JSDocThisType=272]="JSDocThisType",e[e.JSDocComment=273]="JSDocComment",e[e.JSDocTag=274]="JSDocTag",e[e.JSDocParameterTag=275]="JSDocParameterTag",e[e.JSDocReturnTag=276]="JSDocReturnTag",e[e.JSDocTypeTag=277]="JSDocTypeTag",e[e.JSDocTemplateTag=278]="JSDocTemplateTag",e[e.JSDocTypedefTag=279]="JSDocTypedefTag",e[e.JSDocPropertyTag=280]="JSDocPropertyTag",e[e.JSDocTypeLiteral=281]="JSDocTypeLiteral",e[e.JSDocLiteralType=282]="JSDocLiteralType",e[e.JSDocNullKeyword=283]="JSDocNullKeyword",e[e.JSDocUndefinedKeyword=284]="JSDocUndefinedKeyword",e[e.JSDocNeverKeyword=285]="JSDocNeverKeyword",e[e.SyntaxList=286]="SyntaxList",e[e.Count=287]="Count",e[e.FirstAssignment=56]="FirstAssignment",e[e.LastAssignment=68]="LastAssignment",e[e.FirstReservedWord=70]="FirstReservedWord",e[e.LastReservedWord=105]="LastReservedWord",e[e.FirstKeyword=70]="FirstKeyword",e[e.LastKeyword=138]="LastKeyword",e[e.FirstFutureReservedWord=106]="FirstFutureReservedWord",e[e.LastFutureReservedWord=114]="LastFutureReservedWord",e[e.FirstTypeNode=154]="FirstTypeNode",e[e.LastTypeNode=166]="LastTypeNode",e[e.FirstPunctuation=15]="FirstPunctuation",e[e.LastPunctuation=68]="LastPunctuation",e[e.FirstToken=0]="FirstToken",e[e.LastToken=138]="LastToken",e[e.FirstTriviaToken=2]="FirstTriviaToken",e[e.LastTriviaToken=7]="LastTriviaToken",e[e.FirstLiteralToken=8]="FirstLiteralToken",e[e.LastLiteralToken=11]="LastLiteralToken",e[e.FirstTemplateToken=11]="FirstTemplateToken",e[e.LastTemplateToken=14]="LastTemplateToken",e[e.FirstBinaryOperator=25]="FirstBinaryOperator",e[e.LastBinaryOperator=68]="LastBinaryOperator",e[e.FirstNode=139]="FirstNode",e[e.FirstJSDocNode=257]="FirstJSDocNode",e[e.LastJSDocNode=282]="LastJSDocNode",e[e.FirstJSDocTagNode=273]="FirstJSDocTagNode",e[e.LastJSDocTagNode=285]="LastJSDocTagNode"}(e.SyntaxKind||(e.SyntaxKind={}))
e.SyntaxKind
!function(e){e[e.None=0]="None",e[e.Export=1]="Export",e[e.Ambient=2]="Ambient",e[e.Public=4]="Public",e[e.Private=8]="Private",e[e.Protected=16]="Protected",e[e.Static=32]="Static",e[e.Readonly=64]="Readonly",e[e.Abstract=128]="Abstract",e[e.Async=256]="Async",e[e.Default=512]="Default",e[e.Let=1024]="Let",e[e.Const=2048]="Const",e[e.Namespace=4096]="Namespace",e[e.ExportContext=8192]="ExportContext",e[e.ContainsThis=16384]="ContainsThis",e[e.HasImplicitReturn=32768]="HasImplicitReturn",e[e.HasExplicitReturn=65536]="HasExplicitReturn",e[e.GlobalAugmentation=131072]="GlobalAugmentation",e[e.HasClassExtends=262144]="HasClassExtends",e[e.HasDecorators=524288]="HasDecorators",e[e.HasParamDecorators=1048576]="HasParamDecorators",e[e.HasAsyncFunctions=2097152]="HasAsyncFunctions",e[e.DisallowInContext=4194304]="DisallowInContext",e[e.YieldContext=8388608]="YieldContext",e[e.DecoratorContext=16777216]="DecoratorContext",e[e.AwaitContext=33554432]="AwaitContext",e[e.ThisNodeHasError=67108864]="ThisNodeHasError",e[e.JavaScriptFile=134217728]="JavaScriptFile",e[e.ThisNodeOrAnySubNodesHasError=268435456]="ThisNodeOrAnySubNodesHasError",e[e.HasAggregatedChildData=536870912]="HasAggregatedChildData",e[e.HasJsxSpreadAttribute=1073741824]="HasJsxSpreadAttribute",e[e.Modifier=1023]="Modifier",e[e.AccessibilityModifier=28]="AccessibilityModifier",e[e.ParameterPropertyModifier=92]="ParameterPropertyModifier",e[e.BlockScoped=3072]="BlockScoped",e[e.ReachabilityCheckFlags=98304]="ReachabilityCheckFlags",e[e.EmitHelperFlags=3932160]="EmitHelperFlags",e[e.ReachabilityAndEmitFlags=4030464]="ReachabilityAndEmitFlags",e[e.ContextFlags=197132288]="ContextFlags",e[e.TypeExcludesFlags=41943040]="TypeExcludesFlags"}(e.NodeFlags||(e.NodeFlags={}))
e.NodeFlags
!function(e){e[e.None=0]="None",e[e.IntrinsicNamedElement=1]="IntrinsicNamedElement",e[e.IntrinsicIndexedElement=2]="IntrinsicIndexedElement",e[e.IntrinsicElement=3]="IntrinsicElement"}(e.JsxFlags||(e.JsxFlags={}))
e.JsxFlags
!function(e){e[e.Succeeded=1]="Succeeded",e[e.Failed=2]="Failed",e[e.FailedAndReported=3]="FailedAndReported"}(e.RelationComparisonResult||(e.RelationComparisonResult={}))
e.RelationComparisonResult
!function(e){e[e.Unreachable=1]="Unreachable",e[e.Start=2]="Start",e[e.BranchLabel=4]="BranchLabel",e[e.LoopLabel=8]="LoopLabel",e[e.Assignment=16]="Assignment",e[e.TrueCondition=32]="TrueCondition",e[e.FalseCondition=64]="FalseCondition",e[e.SwitchClause=128]="SwitchClause",e[e.Referenced=256]="Referenced",e[e.Shared=512]="Shared",e[e.Label=12]="Label",e[e.Condition=96]="Condition"}(e.FlowFlags||(e.FlowFlags={}))
var t=(e.FlowFlags,function(){function e(){}return e}())
e.OperationCanceledException=t,function(e){e[e.Success=0]="Success",e[e.DiagnosticsPresent_OutputsSkipped=1]="DiagnosticsPresent_OutputsSkipped",e[e.DiagnosticsPresent_OutputsGenerated=2]="DiagnosticsPresent_OutputsGenerated"}(e.ExitStatus||(e.ExitStatus={}))
e.ExitStatus
!function(e){e[e.None=0]="None",e[e.WriteArrayAsGenericType=1]="WriteArrayAsGenericType",e[e.UseTypeOfFunction=2]="UseTypeOfFunction",e[e.NoTruncation=4]="NoTruncation",e[e.WriteArrowStyleSignature=8]="WriteArrowStyleSignature",e[e.WriteOwnNameForAnyLike=16]="WriteOwnNameForAnyLike",e[e.WriteTypeArgumentsOfSignature=32]="WriteTypeArgumentsOfSignature",e[e.InElementType=64]="InElementType",e[e.UseFullyQualifiedType=128]="UseFullyQualifiedType",e[e.InFirstTypeArgument=256]="InFirstTypeArgument",e[e.InTypeAlias=512]="InTypeAlias",e[e.UseTypeAliasValue=1024]="UseTypeAliasValue"}(e.TypeFormatFlags||(e.TypeFormatFlags={}))
e.TypeFormatFlags
!function(e){e[e.None=0]="None",e[e.WriteTypeParametersOrArguments=1]="WriteTypeParametersOrArguments",e[e.UseOnlyExternalAliasing=2]="UseOnlyExternalAliasing"}(e.SymbolFormatFlags||(e.SymbolFormatFlags={}))
e.SymbolFormatFlags
!function(e){e[e.Accessible=0]="Accessible",e[e.NotAccessible=1]="NotAccessible",e[e.CannotBeNamed=2]="CannotBeNamed"}(e.SymbolAccessibility||(e.SymbolAccessibility={}))
e.SymbolAccessibility
!function(e){e[e.This=0]="This",e[e.Identifier=1]="Identifier"}(e.TypePredicateKind||(e.TypePredicateKind={}))
e.TypePredicateKind
!function(e){e[e.Unknown=0]="Unknown",e[e.TypeWithConstructSignatureAndValue=1]="TypeWithConstructSignatureAndValue",e[e.VoidType=2]="VoidType",e[e.NumberLikeType=3]="NumberLikeType",e[e.StringLikeType=4]="StringLikeType",e[e.BooleanType=5]="BooleanType",e[e.ArrayLikeType=6]="ArrayLikeType",e[e.ESSymbolType=7]="ESSymbolType",e[e.TypeWithCallSignature=8]="TypeWithCallSignature",e[e.ObjectType=9]="ObjectType"}(e.TypeReferenceSerializationKind||(e.TypeReferenceSerializationKind={}))
e.TypeReferenceSerializationKind
!function(e){e[e.None=0]="None",e[e.FunctionScopedVariable=1]="FunctionScopedVariable",e[e.BlockScopedVariable=2]="BlockScopedVariable",e[e.Property=4]="Property",e[e.EnumMember=8]="EnumMember",e[e.Function=16]="Function",e[e.Class=32]="Class",e[e.Interface=64]="Interface",e[e.ConstEnum=128]="ConstEnum",e[e.RegularEnum=256]="RegularEnum",e[e.ValueModule=512]="ValueModule",e[e.NamespaceModule=1024]="NamespaceModule",e[e.TypeLiteral=2048]="TypeLiteral",e[e.ObjectLiteral=4096]="ObjectLiteral",e[e.Method=8192]="Method",e[e.Constructor=16384]="Constructor",e[e.GetAccessor=32768]="GetAccessor",e[e.SetAccessor=65536]="SetAccessor",e[e.Signature=131072]="Signature",e[e.TypeParameter=262144]="TypeParameter",e[e.TypeAlias=524288]="TypeAlias",e[e.ExportValue=1048576]="ExportValue",e[e.ExportType=2097152]="ExportType",e[e.ExportNamespace=4194304]="ExportNamespace",e[e.Alias=8388608]="Alias",e[e.Instantiated=16777216]="Instantiated",e[e.Merged=33554432]="Merged",e[e.Transient=67108864]="Transient",e[e.Prototype=134217728]="Prototype",e[e.SyntheticProperty=268435456]="SyntheticProperty",e[e.Optional=536870912]="Optional",e[e.ExportStar=1073741824]="ExportStar",e[e.Enum=384]="Enum",e[e.Variable=3]="Variable",e[e.Value=107455]="Value",e[e.Type=793064]="Type",e[e.Namespace=1920]="Namespace",e[e.Module=1536]="Module",e[e.Accessor=98304]="Accessor",e[e.FunctionScopedVariableExcludes=107454]="FunctionScopedVariableExcludes",e[e.BlockScopedVariableExcludes=107455]="BlockScopedVariableExcludes",e[e.ParameterExcludes=107455]="ParameterExcludes",e[e.PropertyExcludes=0]="PropertyExcludes",e[e.EnumMemberExcludes=900095]="EnumMemberExcludes",e[e.FunctionExcludes=106927]="FunctionExcludes",e[e.ClassExcludes=899519]="ClassExcludes",e[e.InterfaceExcludes=792968]="InterfaceExcludes",e[e.RegularEnumExcludes=899327]="RegularEnumExcludes",e[e.ConstEnumExcludes=899967]="ConstEnumExcludes",e[e.ValueModuleExcludes=106639]="ValueModuleExcludes",e[e.NamespaceModuleExcludes=0]="NamespaceModuleExcludes",e[e.MethodExcludes=99263]="MethodExcludes",e[e.GetAccessorExcludes=41919]="GetAccessorExcludes",e[e.SetAccessorExcludes=74687]="SetAccessorExcludes",e[e.TypeParameterExcludes=530920]="TypeParameterExcludes",e[e.TypeAliasExcludes=793064]="TypeAliasExcludes",e[e.AliasExcludes=8388608]="AliasExcludes",e[e.ModuleMember=8914931]="ModuleMember",e[e.ExportHasLocal=944]="ExportHasLocal",e[e.HasExports=1952]="HasExports",e[e.HasMembers=6240]="HasMembers",e[e.BlockScoped=418]="BlockScoped",e[e.PropertyOrAccessor=98308]="PropertyOrAccessor",e[e.Export=7340032]="Export",e[e.ClassMember=106500]="ClassMember",e[e.Classifiable=788448]="Classifiable"}(e.SymbolFlags||(e.SymbolFlags={}))
e.SymbolFlags
!function(e){e[e.TypeChecked=1]="TypeChecked",e[e.LexicalThis=2]="LexicalThis",e[e.CaptureThis=4]="CaptureThis",e[e.SuperInstance=256]="SuperInstance",e[e.SuperStatic=512]="SuperStatic",e[e.ContextChecked=1024]="ContextChecked",e[e.AsyncMethodWithSuper=2048]="AsyncMethodWithSuper",e[e.AsyncMethodWithSuperBinding=4096]="AsyncMethodWithSuperBinding",e[e.CaptureArguments=8192]="CaptureArguments",e[e.EnumValuesComputed=16384]="EnumValuesComputed",e[e.LexicalModuleMergesWithClass=32768]="LexicalModuleMergesWithClass",e[e.LoopWithCapturedBlockScopedBinding=65536]="LoopWithCapturedBlockScopedBinding",e[e.CapturedBlockScopedBinding=131072]="CapturedBlockScopedBinding",e[e.BlockScopedBindingInLoop=262144]="BlockScopedBindingInLoop",e[e.ClassWithBodyScopedClassBinding=524288]="ClassWithBodyScopedClassBinding",e[e.BodyScopedClassBinding=1048576]="BodyScopedClassBinding",e[e.NeedsLoopOutParameter=2097152]="NeedsLoopOutParameter",e[e.AssignmentsMarked=4194304]="AssignmentsMarked"}(e.NodeCheckFlags||(e.NodeCheckFlags={}))
e.NodeCheckFlags
!function(e){e[e.Any=1]="Any",e[e.String=2]="String",e[e.Number=4]="Number",e[e.Boolean=8]="Boolean",e[e.Enum=16]="Enum",e[e.StringLiteral=32]="StringLiteral",e[e.NumberLiteral=64]="NumberLiteral",e[e.BooleanLiteral=128]="BooleanLiteral",e[e.EnumLiteral=256]="EnumLiteral",e[e.ESSymbol=512]="ESSymbol",e[e.Void=1024]="Void",e[e.Undefined=2048]="Undefined",e[e.Null=4096]="Null",e[e.Never=8192]="Never",e[e.TypeParameter=16384]="TypeParameter",e[e.Class=32768]="Class",e[e.Interface=65536]="Interface",e[e.Reference=131072]="Reference",e[e.Tuple=262144]="Tuple",e[e.Union=524288]="Union",e[e.Intersection=1048576]="Intersection",e[e.Anonymous=2097152]="Anonymous",e[e.Instantiated=4194304]="Instantiated",e[e.ObjectLiteral=8388608]="ObjectLiteral",e[e.FreshObjectLiteral=16777216]="FreshObjectLiteral",e[e.ContainsWideningType=33554432]="ContainsWideningType",e[e.ContainsObjectLiteral=67108864]="ContainsObjectLiteral",e[e.ContainsAnyFunctionType=134217728]="ContainsAnyFunctionType",e[e.ThisType=268435456]="ThisType",e[e.ObjectLiteralPatternWithComputedProperties=536870912]="ObjectLiteralPatternWithComputedProperties",e[e.Nullable=6144]="Nullable",e[e.Literal=480]="Literal",e[e.DefinitelyFalsy=7392]="DefinitelyFalsy",e[e.PossiblyFalsy=7406]="PossiblyFalsy",e[e.Intrinsic=16015]="Intrinsic",e[e.Primitive=8190]="Primitive",e[e.StringLike=34]="StringLike",e[e.NumberLike=340]="NumberLike",e[e.BooleanLike=136]="BooleanLike",e[e.EnumLike=272]="EnumLike",e[e.ObjectType=2588672]="ObjectType",e[e.UnionOrIntersection=1572864]="UnionOrIntersection",e[e.StructuredType=4161536]="StructuredType",e[e.StructuredOrTypeParameter=4177920]="StructuredOrTypeParameter",e[e.Narrowable=4178943]="Narrowable",e[e.NotUnionOrUnit=2589191]="NotUnionOrUnit",e[e.RequiresWidening=100663296]="RequiresWidening",e[e.PropagatingFlags=234881024]="PropagatingFlags"}(e.TypeFlags||(e.TypeFlags={}))
e.TypeFlags
!function(e){e[e.Call=0]="Call",e[e.Construct=1]="Construct"}(e.SignatureKind||(e.SignatureKind={}))
e.SignatureKind
!function(e){e[e.String=0]="String",e[e.Number=1]="Number"}(e.IndexKind||(e.IndexKind={}))
e.IndexKind
!function(e){e[e.None=0]="None",e[e.ExportsProperty=1]="ExportsProperty",e[e.ModuleExports=2]="ModuleExports",e[e.PrototypeProperty=3]="PrototypeProperty",e[e.ThisProperty=4]="ThisProperty"}(e.SpecialPropertyAssignmentKind||(e.SpecialPropertyAssignmentKind={}))
e.SpecialPropertyAssignmentKind
!function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Message=2]="Message"}(e.DiagnosticCategory||(e.DiagnosticCategory={}))
e.DiagnosticCategory
!function(e){e[e.Classic=1]="Classic",e[e.NodeJs=2]="NodeJs"}(e.ModuleResolutionKind||(e.ModuleResolutionKind={}))
e.ModuleResolutionKind
!function(e){e[e.None=0]="None",e[e.CommonJS=1]="CommonJS",e[e.AMD=2]="AMD",e[e.UMD=3]="UMD",e[e.System=4]="System",e[e.ES6=5]="ES6",e[e.ES2015=5]="ES2015"}(e.ModuleKind||(e.ModuleKind={}))
e.ModuleKind
!function(e){e[e.None=0]="None",e[e.Preserve=1]="Preserve",e[e.React=2]="React"}(e.JsxEmit||(e.JsxEmit={}))
e.JsxEmit
!function(e){e[e.CarriageReturnLineFeed=0]="CarriageReturnLineFeed",e[e.LineFeed=1]="LineFeed"}(e.NewLineKind||(e.NewLineKind={}))
e.NewLineKind
!function(e){e[e.Unknown=0]="Unknown",e[e.JS=1]="JS",e[e.JSX=2]="JSX",e[e.TS=3]="TS",e[e.TSX=4]="TSX"}(e.ScriptKind||(e.ScriptKind={}))
e.ScriptKind
!function(e){e[e.ES3=0]="ES3",e[e.ES5=1]="ES5",e[e.ES6=2]="ES6",e[e.ES2015=2]="ES2015",e[e.Latest=2]="Latest"}(e.ScriptTarget||(e.ScriptTarget={}))
e.ScriptTarget
!function(e){e[e.Standard=0]="Standard",e[e.JSX=1]="JSX"}(e.LanguageVariant||(e.LanguageVariant={}))
e.LanguageVariant
!function(e){e[e.Simple=0]="Simple",e[e.Pretty=1]="Pretty"}(e.DiagnosticStyle||(e.DiagnosticStyle={}))
e.DiagnosticStyle
!function(e){e[e.None=0]="None",e[e.Recursive=1]="Recursive"}(e.WatchDirectoryFlags||(e.WatchDirectoryFlags={}))
e.WatchDirectoryFlags
!function(e){e[e.nullCharacter=0]="nullCharacter",e[e.maxAsciiCharacter=127]="maxAsciiCharacter",e[e.lineFeed=10]="lineFeed",e[e.carriageReturn=13]="carriageReturn",e[e.lineSeparator=8232]="lineSeparator",e[e.paragraphSeparator=8233]="paragraphSeparator",e[e.nextLine=133]="nextLine",e[e.space=32]="space",e[e.nonBreakingSpace=160]="nonBreakingSpace",e[e.enQuad=8192]="enQuad",e[e.emQuad=8193]="emQuad",e[e.enSpace=8194]="enSpace",e[e.emSpace=8195]="emSpace",e[e.threePerEmSpace=8196]="threePerEmSpace",e[e.fourPerEmSpace=8197]="fourPerEmSpace",e[e.sixPerEmSpace=8198]="sixPerEmSpace",e[e.figureSpace=8199]="figureSpace",e[e.punctuationSpace=8200]="punctuationSpace",e[e.thinSpace=8201]="thinSpace",e[e.hairSpace=8202]="hairSpace",e[e.zeroWidthSpace=8203]="zeroWidthSpace",e[e.narrowNoBreakSpace=8239]="narrowNoBreakSpace",e[e.ideographicSpace=12288]="ideographicSpace",e[e.mathematicalSpace=8287]="mathematicalSpace",e[e.ogham=5760]="ogham",e[e._=95]="_",e[e.$=36]="$",e[e._0=48]="_0",e[e._1=49]="_1",e[e._2=50]="_2",e[e._3=51]="_3",e[e._4=52]="_4",e[e._5=53]="_5",e[e._6=54]="_6",e[e._7=55]="_7",e[e._8=56]="_8",e[e._9=57]="_9",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.ampersand=38]="ampersand",e[e.asterisk=42]="asterisk",e[e.at=64]="at",e[e.backslash=92]="backslash",e[e.backtick=96]="backtick",e[e.bar=124]="bar",e[e.caret=94]="caret",e[e.closeBrace=125]="closeBrace",e[e.closeBracket=93]="closeBracket",e[e.closeParen=41]="closeParen",e[e.colon=58]="colon",e[e.comma=44]="comma",e[e.dot=46]="dot",e[e.doubleQuote=34]="doubleQuote",e[e.equals=61]="equals",e[e.exclamation=33]="exclamation",e[e.greaterThan=62]="greaterThan",e[e.hash=35]="hash",e[e.lessThan=60]="lessThan",e[e.minus=45]="minus",e[e.openBrace=123]="openBrace",e[e.openBracket=91]="openBracket",e[e.openParen=40]="openParen",e[e.percent=37]="percent",e[e.plus=43]="plus",e[e.question=63]="question",e[e.semicolon=59]="semicolon",e[e.singleQuote=39]="singleQuote",e[e.slash=47]="slash",e[e.tilde=126]="tilde",e[e.backspace=8]="backspace",e[e.formFeed=12]="formFeed",e[e.byteOrderMark=65279]="byteOrderMark",e[e.tab=9]="tab",e[e.verticalTab=11]="verticalTab"}(e.CharacterCodes||(e.CharacterCodes={}))
e.CharacterCodes}(ts||(ts={}))
var ts
!function(e){e.timestamp="undefined"!=typeof performance&&performance.now?function(){return performance.now()}:Date.now?Date.now:function(){return+new Date}}(ts||(ts={}))
var ts
!function(e){var t
!function(t){function n(t){p&&(u[t]=e.timestamp(),_[t]=(_[t]||0)+1,d(t))}function r(t,n,r){if(p){var a=r&&u[r]||e.timestamp(),i=n&&u[n]||f
l[t]=(l[t]||0)+(a-i)}}function a(e){return _&&_[e]||0}function i(e){return l&&l[e]||0}function o(e){for(var t in l)e(t,l[t])}function s(){_=e.createMap(),u=e.createMap(),l=e.createMap(),p=!0,f=e.timestamp()}function c(){p=!1}var _,u,l,d="function"==typeof onProfilerEvent&&onProfilerEvent.profiler===!0?onProfilerEvent:function(e){},p=!1,f=0
t.mark=n,t.measure=r,t.getCount=a,t.getDuration=i,t.forEachMeasure=o,t.enable=s,t.disable=c}(t=e.performance||(e.performance={}))}(ts||(ts={}))
var ts
!function(e){function t(e){var t=Xe(null)
t.__=void 0,delete t.__
for(var n in e)Qe.call(e,n)&&(t[n]=e[n])
return t}function n(e){function n(e){for(var t in _)e(t,_[t])}function r(e){return _[c(e)]}function a(e,t){_[c(e)]=t}function i(e){return c(e)in _}function o(e){var t=c(e)
delete _[t]}function s(){_=t()}function c(t){return e?e(t):t}var _=t()
return{get:r,set:a,contains:i,remove:o,forEachValue:n,clear:s}}function r(e,t,n){var r=oe(e)?re(e):_e(e,t)
return n(r)}function a(e,t){if(e)for(var n=0,r=e.length;r>n;n++){var a=t(e[n],n)
if(a)return a}}function i(e,t){for(var n=0,r=e.length;r>n;n++){var a=e[n]
if(t(a,n))return a}}function o(e,t){for(var n=0,r=e.length;r>n;n++){var a=t(e[n],n)
if(a)return a}rt.fail()}function s(e,t){if(e)for(var n=0,r=e;n<r.length;n++){var a=r[n]
if(a===t)return!0}return!1}function c(e,t){if(e)for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n
return-1}function _(e,t,n){for(var r=n||0,a=e.length;a>r;r++)if(s(t,e.charCodeAt(r)))return r
return-1}function u(e,t){var n=0
if(e)for(var r=0,a=e;r<a.length;r++){var i=a[r]
t(i)&&n++}return n}function l(e,t){if(e){for(var n=e.length,r=0;n>r&&t(e[r]);)r++
if(n>r){var a=e.slice(0,r)
for(r++;n>r;){var i=e[r]
t(i)&&a.push(i),r++}return a}}return e}function d(e,t){for(var n=0,r=0,a=e;r<a.length;r++){var i=a[r]
t(i)||(e[n]=i,n++)}return n!==e.length?(e.length=n,!0):!1}function p(e,t){for(var n=0,r=0,a=e;r<a.length;r++){var i=a[r]
t(i)&&(e[n]=i,n++)}e.length=n}function f(e,t){var n
if(e){n=[]
for(var r=0,a=e;r<a.length;r++){var i=a[r]
n.push(t(i))}}return n}function g(e,t){return t&&t.length?e&&e.length?e.concat(t):t:e}function m(e,t){var n
if(e){n=[]
e:for(var r=0,a=e;r<a.length;r++){for(var i=a[r],o=0,s=n;o<s.length;o++){var c=s[o]
if(t?t(c,i):c===i)continue e}n.push(i)}}return n}function y(e,t){for(var n=0,r=0,a=e;r<a.length;r++){var i=a[r]
n+=i[t]}return n}function h(e,t){if(e&&t)for(var n=0,r=t;n<r.length;n++){var a=r[n]
e.push(a)}}function v(e,t,n,r){for(;r>n;){if(e[n]!==t[n])return!1
n++}return!0}function k(e){return 0!==e.length?e[e.length-1]:void 0}function b(e,t){for(var n=0,r=e.length-1;r>=n;){var a=n+(r-n>>1),i=e[a]
if(i===t)return a
i>t?r=a-1:n=a+1}return~n}function x(e,t,n){if(e){var r=e.length
if(r>0){var a=0,i=void 0
for(arguments.length<=2?(i=e[a],a++):i=n;r>a;)i=t(i,e[a]),a++
return i}}return n}function D(e,t,n){if(e){var r=e.length-1
if(r>=0){var a=void 0
for(arguments.length<=2?(a=e[r],r--):a=n;r>=0;)a=t(a,e[r]),r--
return a}}return n}function C(e,t){return Qe.call(e,t)}function S(e,t){return Qe.call(e,t)?e[t]:void 0}function T(e){var t=[]
for(var n in e)Qe.call(e,n)&&t.push(n)
return t}function E(e,t){var n
for(var r in e)if(n=t(e[r],r))break
return n}function w(e,t){for(var n in e)if(!t||t(e[n],n))return!0
return!1}function A(e,t){for(var n in e)t[n]=e[n]}function N(e,t,n){var r=n
for(var a in e)r=t(r,e[a],a+"")
return r}function P(e,t,n){var r=n
for(var a in e)Qe.call(e,a)&&(r=t(r,e[a],a+""))
return r}function O(e,t,n){if(e===t)return!0
if(!e||!t)return!1
for(var r in e)if(Qe.call(e,r)){if(void 0===!Qe.call(t,r))return!1
if(n?!n(e[r],t[r]):e[r]!==t[r])return!1}for(var r in t)if(Qe.call(t,r)&&!Qe.call(e,r))return!1
return!0}function R(e,n,r){for(var a=t(),i=0,o=e;i<o.length;i++){var s=o[i]
a[n(s)]=r?r(s):s}return a}function F(e){var n=t()
return A(e,n),n}function I(e){var t={}
for(var n in e)Qe.call(e,n)&&(t[n]=e[n])
return t}function M(e,t){var n={}
for(var r in t)Qe.call(t,r)&&(n[r]=t[r])
for(var r in e)Qe.call(e,r)&&(n[r]=e[r])
return n}function L(e){return Array.isArray?Array.isArray(e):e instanceof Array}function B(e){var t
return function(){return e&&(t=e(),e=void 0),t}}function J(e,t,n){return n=n||0,e.replace(/{(\d+)}/g,function(e,r){return t[+r+n]})}function K(t){return e.localizedDiagnosticMessages&&e.localizedDiagnosticMessages[t.key]||t.message}function z(e,t,n,r){var a=t+n
rt.assert(t>=0,"start must be non-negative, is "+t),rt.assert(n>=0,"length must be non-negative, is "+n),e&&(rt.assert(t<=e.text.length,"start must be within the bounds of the file. "+t+" > "+e.text.length),rt.assert(a<=e.text.length,"end must be the bounds of the file. "+a+" > "+e.text.length))
var i=K(r)
return arguments.length>4&&(i=J(i,arguments,4)),{file:e,start:t,length:n,messageText:i,category:r.category,code:r.code}}function j(e,t){var n=K(t)
return arguments.length>2&&(n=J(n,arguments,2)),n}function U(e){var t=K(e)
return arguments.length>1&&(t=J(t,arguments,1)),{file:void 0,start:void 0,length:void 0,messageText:t,category:e.category,code:e.code}}function q(e,t){var n=K(t)
return arguments.length>2&&(n=J(n,arguments,2)),{messageText:n,category:t.category,code:t.code,next:e}}function W(e,t){for(var n=e;n.next;)n=n.next
return n.next=t,e}function V(e,t){return e===t?0:void 0===e?-1:void 0===t?1:t>e?-1:1}function H(e,t,n){if(e===t)return 0
if(void 0===e)return-1
if(void 0===t)return 1
if(n){if(String.prototype.localeCompare){var r=e.localeCompare(t,void 0,{usage:"sort",sensitivity:"accent"})
return 0>r?-1:r>0?1:0}if(e=e.toUpperCase(),t=t.toUpperCase(),e===t)return 0}return t>e?-1:1}function G(e,t){return H(e,t,!0)}function X(e){return e.file?e.file.fileName:void 0}function Q(e,t){return V(X(e),X(t))||V(e.start,t.start)||V(e.length,t.length)||V(e.code,t.code)||Y(e.messageText,t.messageText)||0}function Y(e,t){for(;e&&t;){var n="string"==typeof e?e:e.messageText,r="string"==typeof t?t:t.messageText,a=V(n,r)
if(a)return a
e="string"==typeof e?void 0:e.next,t="string"==typeof t?void 0:t.next}return e||t?e?1:-1:0}function $(e){return Z(e.sort(Q))}function Z(e){if(e.length<2)return e
for(var t=[e[0]],n=e[0],r=1;r<e.length;r++){var a=e[r],i=0===Q(a,n)
i||(t.push(a),n=a)}return t}function ee(e){return e.replace(/\\/g,"/")}function te(e){if(47===e.charCodeAt(0)){if(47!==e.charCodeAt(1))return 1
var t=e.indexOf("/",2)
if(0>t)return 2
var n=e.indexOf("/",t+1)
return 0>n?t+1:n+1}if(58===e.charCodeAt(1))return 47===e.charCodeAt(2)?3:2
if(0===e.lastIndexOf("file:///",0))return 8
var r=e.indexOf("://")
return-1!==r?r+3:0}function ne(t,n){for(var r=t.substr(n).split(e.directorySeparator),a=[],i=0,o=r;i<o.length;i++){var s=o[i]
"."!==s&&(".."===s&&a.length>0&&".."!==k(a)?a.pop():s&&a.push(s))}return a}function re(t){t=ee(t)
var n=te(t),r=ne(t,n)
return t.substr(0,n)+r.join(e.directorySeparator)}function ae(t){return t.substr(0,Math.max(te(t),t.lastIndexOf(e.directorySeparator)))}function ie(e){return e&&!oe(e)&&-1!==e.indexOf("://")}function oe(e){return 0!==te(e)}function se(e,t){var n=ne(e,t)
return[e.substr(0,t)].concat(n)}function ce(e,t){e=ee(e)
var n=te(e)
return 0===n&&(e=ge(ee(t),e),n=te(e)),se(e,n)}function _e(e,t){return ue(ce(e,t))}function ue(t){return t&&t.length?t[0]+t.slice(1).join(e.directorySeparator):void 0}function le(t){for(var n=t.length,r=t.indexOf("://")+3;n>r&&47===t.charCodeAt(r);)r++
if(r===n)return[t]
var a=t.indexOf(e.directorySeparator,r)
return-1!==a?(r=a+1,se(t,r)):[t+e.directorySeparator]}function de(e,t){return ie(e)?le(e):ce(e,t)}function pe(t,n,r,a,i){var o=de(n,r),s=de(t,r)
s.length>1&&""===k(s)&&s.length--
var c
for(c=0;c<o.length&&c<s.length&&a(s[c])===a(o[c]);c++);if(c){for(var _="",u=o.slice(c,o.length);c<s.length;c++)""!==s[c]&&(_=_+".."+e.directorySeparator)
return _+u.join(e.directorySeparator)}var l=ue(o)
return i&&oe(l)&&(l="file:///"+l),l}function fe(t){if(void 0!==t){var n=t.lastIndexOf(e.directorySeparator)
return 0>n?t:t.substring(n+1)}}function ge(t,n){return t&&t.length?n&&n.length?0!==te(n)?n:t.charAt(t.length-1)===e.directorySeparator?t+n:t+e.directorySeparator+n:t:n}function me(t){return t.charAt(t.length-1)===e.directorySeparator?t.substr(0,t.length-1):t}function ye(t){return t.charAt(t.length-1)!==e.directorySeparator?t+e.directorySeparator:t}function he(e,t,n,r){if(e===t)return 0
if(void 0===e)return-1
if(void 0===t)return 1
e=me(e),t=me(t)
for(var a=ce(e,n),i=ce(t,n),o=Math.min(a.length,i.length),s=0;o>s;s++){var c=H(a[s],i[s],r)
if(0!==c)return c}return V(a.length,i.length)}function ve(e,t,n,r){if(void 0===e||void 0===t)return!1
if(e===t)return!0
if(e=me(e),t=me(t),e===t)return!0
var a=ce(e,n),i=ce(t,n)
if(i.length<a.length)return!1
for(var o=0;o<a.length;o++){var s=H(a[o],i[o],r)
if(0!==s)return!1}return!0}function ke(e,t){return 0===e.lastIndexOf(t,0)}function be(e,t){var n=e.length-t.length
return n>=0&&e.indexOf(t,n)===n}function xe(e,t){return e.length>t.length&&be(e,t)}function De(e,t){for(var n=0,r=t;n<r.length;n++){var a=r[n]
if(xe(e,a))return!0}return!1}function Ce(t,n,r){if(void 0!==t&&0!==t.length){var a="files"===r?Se:Te,i="files"===r?Ze:et,o="exclude"===r?"(/.+?)?":"(/[^/.][^/]*)*?",s="",c=!1
e:for(var _=0,u=t;_<u.length;_++){var l=u[_]
if(l){var d="",p=!1,f=!1,g=ce(l,n)
if("exclude"===r||"**"!==g[g.length-1]){g[0]=me(g[0])
for(var m=0,y=0,h=g;y<h.length;y++){var v=h[y]
if("**"===v){if(p)continue e
d+=o,p=!0,f=!0}else"directories"===r&&(d+="(",m++),f&&(d+=e.directorySeparator),"exclude"!==r&&(42===v.charCodeAt(0)?(d+="([^./]"+i+")?",v=v.substr(1)):63===v.charCodeAt(0)&&(d+="[^./]",v=v.substr(1))),d+=v.replace(Ye,a),f=!0}for(;m>0;)d+=")?",m--
c&&(s+="|"),s+="("+d+")",c=!0}}}if(s)return"^("+s+("exclude"===r?")($|/)":")$")}}function Se(e){return Ee(e,Ze)}function Te(e){return Ee(e,et)}function Ee(e,t){return"*"===e?t:"?"===e?"[^/]":"\\"+e}function we(e,t,n,r,a,i){e=re(e),i=re(i)
var o=ge(i,e)
return{includeFilePattern:Ce(r,o,"files"),includeDirectoryPattern:Ce(r,o,"directories"),excludePattern:Ce(n,o,"exclude"),basePaths:Ne(e,r,a)}}function Ae(e,t,n,r,a,i,o){function s(e,n){for(var r=o(e),a=r.files,i=r.directories,c=0,_=a;c<_.length;c++){var f=_[c],g=ge(e,f),m=ge(n,f)
t&&!De(g,t)||u&&!u.test(m)||d&&d.test(m)||p.push(g)}for(var y=0,h=i;y<h.length;y++){var f=h[y],v=ge(e,f),m=ge(n,f)
l&&!l.test(m)||d&&d.test(m)||s(v,m)}}e=re(e),i=re(i)
for(var c=we(e,t,n,r,a,i),_=a?"":"i",u=c.includeFilePattern&&RegExp(c.includeFilePattern,_),l=c.includeDirectoryPattern&&RegExp(c.includeDirectoryPattern,_),d=c.excludePattern&&RegExp(c.excludePattern,_),p=[],f=0,g=c.basePaths;f<g.length;f++){var m=g[f]
s(m,ge(i,m))}return p}function Ne(t,n,r){var a=[t]
if(n){for(var i=[],o=0,s=n;o<s.length;o++){var c=s[o],u=oe(c)?c:re(ge(t,c)),l=_(u,$e),d=0>l?me(ae(u)):u.substring(0,u.lastIndexOf(e.directorySeparator,l))
i.push(d)}i.sort(r?H:G)
e:for(var p=0;p<i.length;p++){for(var d=i[p],f=0;f<a.length;f++)if(ve(a[f],d,t,!r))continue e
a.push(d)}}return a}function Pe(e,t){return t||Oe(e)||3}function Oe(e){var t=e.substr(e.lastIndexOf("."))
switch(t.toLowerCase()){case".js":return 1
case".jsx":return 2
case".ts":return 3
case".tsx":return 4
default:return 0}}function Re(t){return t&&t.allowJs?tt:e.supportedTypeScriptExtensions}function Fe(e,t){if(!e)return!1
for(var n=0,r=Re(t);n<r.length;n++){var a=r[n]
if(xe(e,a))return!0}return!1}function Ie(e,t){for(var n=t.length-1;n>=0;n--)if(xe(e,t[n]))return Me(n)
return 0}function Me(e){return 2>e?0:5>e?2:5}function Le(e){return 2>e?2:5}function Be(e){for(var t=0,n=nt;t<n.length;t++){var r=n[t],a=Je(e,r)
if(void 0!==a)return a}return e}function Je(e,t){return xe(e,t)?Ke(e,t):void 0}function Ke(e,t){return e.substring(0,e.length-t.length)}function ze(e){return".jsx"===e||".tsx"===e}function je(e,t){return Be(e)+t}function Ue(e,t){this.flags=e,this.name=t,this.declarations=void 0}function qe(e,t){this.flags=t}function We(e){}function Ve(e,t,n){this.kind=e,this.pos=t,this.end=n,this.flags=0,this.parent=void 0}function He(e,t){for(var n=[],r=0,a=t;r<a.length;r++){var i=a[r]
i!==e&&n.push(i)}return n}function Ge(e){return e?function(e){return e}:function(e){return e.toLowerCase()}}!function(e){e[e.False=0]="False",e[e.Maybe=1]="Maybe",e[e.True=-1]="True"}(e.Ternary||(e.Ternary={}))
var Xe=(e.Ternary,Object.create)
e.createMap=t,e.createFileMap=n,e.toPath=r,function(e){e[e.LessThan=-1]="LessThan",e[e.EqualTo=0]="EqualTo",e[e.GreaterThan=1]="GreaterThan"}(e.Comparison||(e.Comparison={}))
e.Comparison
e.forEach=a,e.find=i,e.findMap=o,e.contains=s,e.indexOf=c,e.indexOfAnyCharCode=_,e.countWhere=u,e.filter=l,e.removeWhere=d,e.filterMutate=p,e.map=f,e.concatenate=g,e.deduplicate=m,e.sum=y,e.addRange=h,e.rangeEquals=v,e.lastOrUndefined=k,e.binarySearch=b,e.reduceLeft=x,e.reduceRight=D
var Qe=Object.prototype.hasOwnProperty
e.hasProperty=C,e.getProperty=S,e.getOwnKeys=T,e.forEachProperty=E,e.someProperties=w,e.copyProperties=A,e.reduceProperties=N,e.reduceOwnProperties=P,e.equalOwnProperties=O,e.arrayToMap=R,e.cloneMap=F,e.clone=I,e.extend=M,e.isArray=L,e.memoize=B,e.localizedDiagnosticMessages=void 0,e.getLocaleSpecificMessage=K,e.createFileDiagnostic=z,e.formatMessage=j,e.createCompilerDiagnostic=U,e.chainDiagnosticMessages=q,e.concatenateDiagnosticMessageChains=W,e.compareValues=V,e.compareStrings=H,e.compareStringsCaseInsensitive=G,e.compareDiagnostics=Q,e.sortAndDeduplicateDiagnostics=$,e.deduplicateSortedDiagnostics=Z,e.normalizeSlashes=ee,e.getRootLength=te,e.directorySeparator="/",e.normalizePath=re,e.getDirectoryPath=ae,e.isUrl=ie,e.isRootedDiskPath=oe,e.getNormalizedPathComponents=ce,e.getNormalizedAbsolutePath=_e,e.getNormalizedPathFromPathComponents=ue,e.getRelativePathToDirectoryOrUrl=pe,e.getBaseFileName=fe,e.combinePaths=ge,e.removeTrailingDirectorySeparator=me,e.ensureTrailingDirectorySeparator=ye,e.comparePaths=he,e.containsPath=ve,e.startsWith=ke,e.endsWith=be,e.fileExtensionIs=xe,e.fileExtensionIsAny=De
var Ye=/[^\w\s\/]/g,$e=[42,63],Ze="([^./]|(\\.(?!min\\.js$))?)*",et="[^/]*"
e.getRegularExpressionForWildcard=Ce,e.getFileMatcherPatterns=we,e.matchFiles=Ae,e.ensureScriptKind=Pe,e.getScriptKindFromFileName=Oe,e.supportedTypeScriptExtensions=[".ts",".tsx",".d.ts"],e.supportedTypescriptExtensionsForExtractExtension=[".d.ts",".ts",".tsx"],e.supportedJavascriptExtensions=[".js",".jsx"]
var tt=e.supportedTypeScriptExtensions.concat(e.supportedJavascriptExtensions)
e.getSupportedExtensions=Re,e.isSupportedSourceFileName=Fe,function(e){e[e.TypeScriptFiles=0]="TypeScriptFiles",e[e.DeclarationAndJavaScriptFiles=2]="DeclarationAndJavaScriptFiles",e[e.Limit=5]="Limit",e[e.Highest=0]="Highest",e[e.Lowest=2]="Lowest"}(e.ExtensionPriority||(e.ExtensionPriority={}))
e.ExtensionPriority
e.getExtensionPriority=Ie,e.adjustExtensionPriority=Me,e.getNextLowestExtensionPriority=Le
var nt=[".d.ts",".ts",".js",".tsx",".jsx"]
e.removeFileExtension=Be,e.tryRemoveExtension=Je,e.removeExtension=Ke,e.isJsxOrTsxExtension=ze,e.changeExtension=je,e.objectAllocator={getNodeConstructor:function(){return Ve},getTokenConstructor:function(){return Ve},getIdentifierConstructor:function(){return Ve},getSourceFileConstructor:function(){return Ve},getSymbolConstructor:function(){return Ue},getTypeConstructor:function(){return qe},getSignatureConstructor:function(){return We}},function(e){e[e.None=0]="None",e[e.Normal=1]="Normal",e[e.Aggressive=2]="Aggressive",e[e.VeryAggressive=3]="VeryAggressive"}(e.AssertionLevel||(e.AssertionLevel={}))
var rt
e.AssertionLevel
!function(e){function t(e){return a>=e}function n(e,t,n){if(!e){var r=""
throw n&&(r="\r\nVerbose Debug Information: "+n()),Error("Debug Failure. False expression: "+(t||"")+r)}}function r(t){e.assert(!1,t)}var a=0
e.shouldAssert=t,e.assert=n,e.fail=r}(rt=e.Debug||(e.Debug={})),e.copyListRemovingItem=He,e.createGetCanonicalFileName=Ge}(ts||(ts={}))
var ts
!function(e){e.sys=function(){function t(){function t(e,t){if(s.FileExists(e)){_.Open()
try{if(t)_.Charset=t,_.LoadFromFile(e)
else{_.Charset="x-ansi",_.LoadFromFile(e)
var n=_.ReadText(2)||""
_.Position=0,_.Charset=n.length>=2&&(255===n.charCodeAt(0)&&254===n.charCodeAt(1)||254===n.charCodeAt(0)&&255===n.charCodeAt(1))?"unicode":"utf-8"}return _.ReadText()}catch(r){throw r}finally{_.Close()}}}function n(e,t,n){_.Open(),u.Open()
try{_.Charset="utf-8",_.WriteText(t),n?_.Position=0:_.Position=3,_.CopyTo(u),u.SaveToFile(e,2)}finally{u.Close(),_.Close()}}function r(e){for(var t=[],n=new Enumerator(e);!n.atEnd();n.moveNext())t.push(n.item().Name)
return t.sort()}function a(e){var t=s.GetFolder(e)
return r(t.subfolders)}function i(e){try{var t=s.GetFolder(e||"."),n=r(t.files),a=r(t.subfolders)
return{files:n,directories:a}}catch(i){return{files:[],directories:[]}}}function o(t,n,r,a){return e.matchFiles(t,n,r,a,!1,c.CurrentDirectory,i)}var s=new ActiveXObject("Scripting.FileSystemObject"),c=new ActiveXObject("WScript.Shell"),_=new ActiveXObject("ADODB.Stream")
_.Type=2
var u=new ActiveXObject("ADODB.Stream")
u.Type=1
for(var l=[],d=0;d<WScript.Arguments.length;d++)l[d]=WScript.Arguments.Item(d)
var p={args:l,newLine:"\r\n",useCaseSensitiveFileNames:!1,write:function(e){WScript.StdOut.Write(e)},readFile:t,writeFile:n,resolvePath:function(e){return s.GetAbsolutePathName(e)},fileExists:function(e){return s.FileExists(e)},directoryExists:function(e){return s.FolderExists(e)},createDirectory:function(e){p.directoryExists(e)||s.CreateFolder(e)},getExecutingFilePath:function(){return WScript.ScriptFullName},getCurrentDirectory:function(){return c.CurrentDirectory},getDirectories:a,readDirectory:o,exit:function(e){try{WScript.Quit(e)}catch(t){}}}
return p}function n(){function t(){function t(t){var n=e.getDirectoryPath(t),r=c[n]
r&&(r.referenceCount-=1,r.referenceCount<=0&&(r.close(),delete c[n]))}function n(e){var t=c[e]
return t?void(t.referenceCount+=1):(t=d.watch(e,{persistent:!0},function(t,n){return s(t,n,e)}),t.referenceCount=1,void(c[e]=t))}function r(e,t){(_[e]||(_[e]=[])).push(t)}function a(t,a){return r(t,a),n(e.getDirectoryPath(t)),{fileName:t,callback:a}}function i(e){o(e.fileName,e.callback),t(e.fileName)}function o(t,n){var r=_[t]
if(r){var a=e.copyListRemovingItem(n,r)
0===a.length?delete _[t]:_[t]=a}}function s(t,n,r){var a="string"!=typeof n?void 0:e.getNormalizedAbsolutePath(n,r)
if(("change"===t||"rename"===t)&&_[a])for(var i=0,o=_[a];i<o.length;i++){var s=o[i]
s(a)}}var c=e.createMap(),_=e.createMap()
return{addFile:a,removeFile:i}}function n(){return parseInt(process.version.charAt(1))>=4}function r(e,t){if(c(e)){var n=d.readFileSync(e),r=n.length
if(r>=2&&254===n[0]&&255===n[1]){r&=-2
for(var a=0;r>a;a+=2){var i=n[a]
n[a]=n[a+1],n[a+1]=i}return n.toString("utf16le",2)}return r>=2&&255===n[0]&&254===n[1]?n.toString("utf16le",2):r>=3&&239===n[0]&&187===n[1]&&191===n[2]?n.toString("utf8",3):n.toString("utf8")}}function a(e,t,n){n&&(t="\ufeff"+t)
var r
try{r=d.openSync(e,"w"),d.writeSync(r,t,void 0,"utf8")}finally{void 0!==r&&d.closeSync(r)}}function i(t){try{for(var n=d.readdirSync(t||".").sort(),r=[],a=[],i=0,o=n;i<o.length;i++){var s=o[i]
if("."!==s&&".."!==s){var c=e.combinePaths(t,s),_=void 0
try{_=d.statSync(c)}catch(u){continue}_.isFile()?r.push(s):_.isDirectory()&&a.push(s)}}return{files:r,directories:a}}catch(u){return{files:[],directories:[]}}}function o(t,n,r,a){return e.matchFiles(t,n,r,a,v,process.cwd(),i)}function s(e,t){try{var n=d.statSync(e)
switch(t){case 0:return n.isFile()
case 1:return n.isDirectory()}}catch(r){return!1}}function c(e){return s(e,0)}function _(e){return s(e,1)}function u(t){return e.filter(d.readdirSync(t),function(n){return s(e.combinePaths(t,n),1)})}var l,d=require("fs"),p=require("path"),f=require("os"),g=require("crypto"),m=process.env.TSC_NONPOLLING_WATCHER,y=t(),h=f.platform(),v="win32"!==h&&"win64"!==h&&"darwin"!==h
!function(e){e[e.File=0]="File",e[e.Directory=1]="Directory"}(l||(l={}))
var k={args:process.argv.slice(2),newLine:f.EOL,useCaseSensitiveFileNames:v,write:function(e){process.stdout.write(e)},readFile:r,writeFile:a,watchFile:function(e,t){function n(n,r){+n.mtime<=+r.mtime||t(e)}if(m){var r=y.addFile(e,t)
return{close:function(){return y.removeFile(r)}}}return d.watchFile(e,{persistent:!0,interval:250},n),{close:function(){return d.unwatchFile(e,n)}}},watchDirectory:function(t,r,a){var i
return i=!n()||"win32"!==process.platform&&"darwin"!==process.platform?{persistent:!0}:{persistent:!0,recursive:!!a},d.watch(t,i,function(n,a){"rename"===n&&r(a?e.normalizePath(e.combinePaths(t,a)):a)})},resolvePath:function(e){return p.resolve(e)},fileExists:c,directoryExists:_,createDirectory:function(e){k.directoryExists(e)||d.mkdirSync(e)},getExecutingFilePath:function(){return __filename},getCurrentDirectory:function(){return process.cwd()},getDirectories:u,readDirectory:o,getModifiedTime:function(e){try{return d.statSync(e).mtime}catch(t){return}},createHash:function(e){var t=g.createHash("md5")
return t.update(e),t.digest("hex")},getMemoryUsage:function(){return global.gc&&global.gc(),process.memoryUsage().heapUsed},getFileSize:function(e){try{var t=d.statSync(e)
if(t.isFile())return t.size}catch(n){}return 0},exit:function(e){process.exit(e)},realpath:function(e){return d.realpathSync(e)}}
return k}function r(){var t=ChakraHost.realpath&&function(e){return ChakraHost.realpath(e)}
return{newLine:ChakraHost.newLine||"\r\n",args:ChakraHost.args,useCaseSensitiveFileNames:!!ChakraHost.useCaseSensitiveFileNames,write:ChakraHost.echo,readFile:function(e,t){return ChakraHost.readFile(e)},writeFile:function(e,t,n){n&&(t="\ufeff"+t),ChakraHost.writeFile(e,t)},resolvePath:ChakraHost.resolvePath,fileExists:ChakraHost.fileExists,directoryExists:ChakraHost.directoryExists,createDirectory:ChakraHost.createDirectory,getExecutingFilePath:function(){return ChakraHost.executingFile},getCurrentDirectory:function(){return ChakraHost.currentDirectory},getDirectories:ChakraHost.getDirectories,readDirectory:function(t,n,r,a){var i=e.getFileMatcherPatterns(t,n,r,a,!!ChakraHost.useCaseSensitiveFileNames,ChakraHost.currentDirectory)
return ChakraHost.readDirectory(t,n,i.basePaths,i.excludePattern,i.includeFilePattern,i.includeDirectoryPattern)},exit:ChakraHost.quit,realpath:t}}return"undefined"!=typeof ChakraHost?r():"undefined"!=typeof WScript&&"function"==typeof ActiveXObject?t():"undefined"!=typeof process&&process.nextTick&&!process.browser&&"undefined"!=typeof require?n():void 0}()}(ts||(ts={}))
var ts
!function(e){e.Diagnostics={Unterminated_string_literal:{code:1002,category:e.DiagnosticCategory.Error,key:"Unterminated_string_literal_1002",message:"Unterminated string literal."},Identifier_expected:{code:1003,category:e.DiagnosticCategory.Error,key:"Identifier_expected_1003",message:"Identifier expected."},_0_expected:{code:1005,category:e.DiagnosticCategory.Error,key:"_0_expected_1005",message:"'{0}' expected."},A_file_cannot_have_a_reference_to_itself:{code:1006,category:e.DiagnosticCategory.Error,key:"A_file_cannot_have_a_reference_to_itself_1006",message:"A file cannot have a reference to itself."},Trailing_comma_not_allowed:{code:1009,category:e.DiagnosticCategory.Error,key:"Trailing_comma_not_allowed_1009",message:"Trailing comma not allowed."},Asterisk_Slash_expected:{code:1010,category:e.DiagnosticCategory.Error,key:"Asterisk_Slash_expected_1010",message:"'*/' expected."},Unexpected_token:{code:1012,category:e.DiagnosticCategory.Error,key:"Unexpected_token_1012",message:"Unexpected token."},A_rest_parameter_must_be_last_in_a_parameter_list:{code:1014,category:e.DiagnosticCategory.Error,key:"A_rest_parameter_must_be_last_in_a_parameter_list_1014",message:"A rest parameter must be last in a parameter list."},Parameter_cannot_have_question_mark_and_initializer:{code:1015,category:e.DiagnosticCategory.Error,key:"Parameter_cannot_have_question_mark_and_initializer_1015",message:"Parameter cannot have question mark and initializer."},A_required_parameter_cannot_follow_an_optional_parameter:{code:1016,category:e.DiagnosticCategory.Error,key:"A_required_parameter_cannot_follow_an_optional_parameter_1016",message:"A required parameter cannot follow an optional parameter."},An_index_signature_cannot_have_a_rest_parameter:{code:1017,category:e.DiagnosticCategory.Error,key:"An_index_signature_cannot_have_a_rest_parameter_1017",message:"An index signature cannot have a rest parameter."},An_index_signature_parameter_cannot_have_an_accessibility_modifier:{code:1018,category:e.DiagnosticCategory.Error,key:"An_index_signature_parameter_cannot_have_an_accessibility_modifier_1018",message:"An index signature parameter cannot have an accessibility modifier."},An_index_signature_parameter_cannot_have_a_question_mark:{code:1019,category:e.DiagnosticCategory.Error,key:"An_index_signature_parameter_cannot_have_a_question_mark_1019",message:"An index signature parameter cannot have a question mark."},An_index_signature_parameter_cannot_have_an_initializer:{code:1020,category:e.DiagnosticCategory.Error,key:"An_index_signature_parameter_cannot_have_an_initializer_1020",message:"An index signature parameter cannot have an initializer."},An_index_signature_must_have_a_type_annotation:{code:1021,category:e.DiagnosticCategory.Error,key:"An_index_signature_must_have_a_type_annotation_1021",message:"An index signature must have a type annotation."},An_index_signature_parameter_must_have_a_type_annotation:{code:1022,category:e.DiagnosticCategory.Error,key:"An_index_signature_parameter_must_have_a_type_annotation_1022",message:"An index signature parameter must have a type annotation."},An_index_signature_parameter_type_must_be_string_or_number:{code:1023,category:e.DiagnosticCategory.Error,key:"An_index_signature_parameter_type_must_be_string_or_number_1023",message:"An index signature parameter type must be 'string' or 'number'."},readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature:{code:1024,category:e.DiagnosticCategory.Error,key:"readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature_1024",message:"'readonly' modifier can only appear on a property declaration or index signature."},Accessibility_modifier_already_seen:{code:1028,category:e.DiagnosticCategory.Error,key:"Accessibility_modifier_already_seen_1028",message:"Accessibility modifier already seen."},_0_modifier_must_precede_1_modifier:{code:1029,category:e.DiagnosticCategory.Error,key:"_0_modifier_must_precede_1_modifier_1029",message:"'{0}' modifier must precede '{1}' modifier."},_0_modifier_already_seen:{code:1030,category:e.DiagnosticCategory.Error,key:"_0_modifier_already_seen_1030",message:"'{0}' modifier already seen."},_0_modifier_cannot_appear_on_a_class_element:{code:1031,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_appear_on_a_class_element_1031",message:"'{0}' modifier cannot appear on a class element."},super_must_be_followed_by_an_argument_list_or_member_access:{code:1034,category:e.DiagnosticCategory.Error,key:"super_must_be_followed_by_an_argument_list_or_member_access_1034",message:"'super' must be followed by an argument list or member access."},Only_ambient_modules_can_use_quoted_names:{code:1035,category:e.DiagnosticCategory.Error,key:"Only_ambient_modules_can_use_quoted_names_1035",message:"Only ambient modules can use quoted names."},Statements_are_not_allowed_in_ambient_contexts:{code:1036,category:e.DiagnosticCategory.Error,key:"Statements_are_not_allowed_in_ambient_contexts_1036",message:"Statements are not allowed in ambient contexts."},A_declare_modifier_cannot_be_used_in_an_already_ambient_context:{code:1038,category:e.DiagnosticCategory.Error,key:"A_declare_modifier_cannot_be_used_in_an_already_ambient_context_1038",message:"A 'declare' modifier cannot be used in an already ambient context."},Initializers_are_not_allowed_in_ambient_contexts:{code:1039,category:e.DiagnosticCategory.Error,key:"Initializers_are_not_allowed_in_ambient_contexts_1039",message:"Initializers are not allowed in ambient contexts."},_0_modifier_cannot_be_used_in_an_ambient_context:{code:1040,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_be_used_in_an_ambient_context_1040",message:"'{0}' modifier cannot be used in an ambient context."},_0_modifier_cannot_be_used_with_a_class_declaration:{code:1041,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_be_used_with_a_class_declaration_1041",message:"'{0}' modifier cannot be used with a class declaration."},_0_modifier_cannot_be_used_here:{code:1042,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_be_used_here_1042",message:"'{0}' modifier cannot be used here."},_0_modifier_cannot_appear_on_a_data_property:{code:1043,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_appear_on_a_data_property_1043",message:"'{0}' modifier cannot appear on a data property."},_0_modifier_cannot_appear_on_a_module_or_namespace_element:{code:1044,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_appear_on_a_module_or_namespace_element_1044",message:"'{0}' modifier cannot appear on a module or namespace element."},A_0_modifier_cannot_be_used_with_an_interface_declaration:{code:1045,category:e.DiagnosticCategory.Error,key:"A_0_modifier_cannot_be_used_with_an_interface_declaration_1045",message:"A '{0}' modifier cannot be used with an interface declaration."},A_declare_modifier_is_required_for_a_top_level_declaration_in_a_d_ts_file:{code:1046,category:e.DiagnosticCategory.Error,key:"A_declare_modifier_is_required_for_a_top_level_declaration_in_a_d_ts_file_1046",message:"A 'declare' modifier is required for a top level declaration in a .d.ts file."},A_rest_parameter_cannot_be_optional:{code:1047,category:e.DiagnosticCategory.Error,key:"A_rest_parameter_cannot_be_optional_1047",message:"A rest parameter cannot be optional."},A_rest_parameter_cannot_have_an_initializer:{code:1048,category:e.DiagnosticCategory.Error,key:"A_rest_parameter_cannot_have_an_initializer_1048",message:"A rest parameter cannot have an initializer."},A_set_accessor_must_have_exactly_one_parameter:{code:1049,category:e.DiagnosticCategory.Error,key:"A_set_accessor_must_have_exactly_one_parameter_1049",message:"A 'set' accessor must have exactly one parameter."},A_set_accessor_cannot_have_an_optional_parameter:{code:1051,category:e.DiagnosticCategory.Error,key:"A_set_accessor_cannot_have_an_optional_parameter_1051",message:"A 'set' accessor cannot have an optional parameter."},A_set_accessor_parameter_cannot_have_an_initializer:{code:1052,category:e.DiagnosticCategory.Error,key:"A_set_accessor_parameter_cannot_have_an_initializer_1052",message:"A 'set' accessor parameter cannot have an initializer."},A_set_accessor_cannot_have_rest_parameter:{code:1053,category:e.DiagnosticCategory.Error,key:"A_set_accessor_cannot_have_rest_parameter_1053",message:"A 'set' accessor cannot have rest parameter."},A_get_accessor_cannot_have_parameters:{code:1054,category:e.DiagnosticCategory.Error,key:"A_get_accessor_cannot_have_parameters_1054",message:"A 'get' accessor cannot have parameters."},Type_0_is_not_a_valid_async_function_return_type:{code:1055,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_a_valid_async_function_return_type_1055",message:"Type '{0}' is not a valid async function return type."},Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher:{code:1056,category:e.DiagnosticCategory.Error,key:"Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher_1056",message:"Accessors are only available when targeting ECMAScript 5 and higher."},An_async_function_or_method_must_have_a_valid_awaitable_return_type:{code:1057,category:e.DiagnosticCategory.Error,key:"An_async_function_or_method_must_have_a_valid_awaitable_return_type_1057",message:"An async function or method must have a valid awaitable return type."},Operand_for_await_does_not_have_a_valid_callable_then_member:{code:1058,category:e.DiagnosticCategory.Error,key:"Operand_for_await_does_not_have_a_valid_callable_then_member_1058",message:"Operand for 'await' does not have a valid callable 'then' member."},Return_expression_in_async_function_does_not_have_a_valid_callable_then_member:{code:1059,category:e.DiagnosticCategory.Error,key:"Return_expression_in_async_function_does_not_have_a_valid_callable_then_member_1059",message:"Return expression in async function does not have a valid callable 'then' member."},Expression_body_for_async_arrow_function_does_not_have_a_valid_callable_then_member:{code:1060,category:e.DiagnosticCategory.Error,key:"Expression_body_for_async_arrow_function_does_not_have_a_valid_callable_then_member_1060",message:"Expression body for async arrow function does not have a valid callable 'then' member."},Enum_member_must_have_initializer:{code:1061,category:e.DiagnosticCategory.Error,key:"Enum_member_must_have_initializer_1061",message:"Enum member must have initializer."},_0_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method:{code:1062,category:e.DiagnosticCategory.Error,key:"_0_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method_1062",message:"{0} is referenced directly or indirectly in the fulfillment callback of its own 'then' method."},An_export_assignment_cannot_be_used_in_a_namespace:{code:1063,category:e.DiagnosticCategory.Error,key:"An_export_assignment_cannot_be_used_in_a_namespace_1063",message:"An export assignment cannot be used in a namespace."},The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type:{code:1064,category:e.DiagnosticCategory.Error,key:"The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type_1064",message:"The return type of an async function or method must be the global Promise<T> type."},In_ambient_enum_declarations_member_initializer_must_be_constant_expression:{code:1066,category:e.DiagnosticCategory.Error,key:"In_ambient_enum_declarations_member_initializer_must_be_constant_expression_1066",message:"In ambient enum declarations member initializer must be constant expression."},Unexpected_token_A_constructor_method_accessor_or_property_was_expected:{code:1068,category:e.DiagnosticCategory.Error,key:"Unexpected_token_A_constructor_method_accessor_or_property_was_expected_1068",message:"Unexpected token. A constructor, method, accessor, or property was expected."},_0_modifier_cannot_appear_on_a_type_member:{code:1070,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_appear_on_a_type_member_1070",message:"'{0}' modifier cannot appear on a type member."},_0_modifier_cannot_appear_on_an_index_signature:{code:1071,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_appear_on_an_index_signature_1071",message:"'{0}' modifier cannot appear on an index signature."},A_0_modifier_cannot_be_used_with_an_import_declaration:{code:1079,category:e.DiagnosticCategory.Error,key:"A_0_modifier_cannot_be_used_with_an_import_declaration_1079",message:"A '{0}' modifier cannot be used with an import declaration."},Invalid_reference_directive_syntax:{code:1084,category:e.DiagnosticCategory.Error,key:"Invalid_reference_directive_syntax_1084",message:"Invalid 'reference' directive syntax."},Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher:{code:1085,category:e.DiagnosticCategory.Error,key:"Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher_1085",message:"Octal literals are not available when targeting ECMAScript 5 and higher."},An_accessor_cannot_be_declared_in_an_ambient_context:{code:1086,category:e.DiagnosticCategory.Error,key:"An_accessor_cannot_be_declared_in_an_ambient_context_1086",message:"An accessor cannot be declared in an ambient context."},_0_modifier_cannot_appear_on_a_constructor_declaration:{code:1089,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_appear_on_a_constructor_declaration_1089",message:"'{0}' modifier cannot appear on a constructor declaration."},_0_modifier_cannot_appear_on_a_parameter:{code:1090,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_appear_on_a_parameter_1090",message:"'{0}' modifier cannot appear on a parameter."},Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement:{code:1091,category:e.DiagnosticCategory.Error,key:"Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement_1091",message:"Only a single variable declaration is allowed in a 'for...in' statement."},Type_parameters_cannot_appear_on_a_constructor_declaration:{code:1092,category:e.DiagnosticCategory.Error,key:"Type_parameters_cannot_appear_on_a_constructor_declaration_1092",message:"Type parameters cannot appear on a constructor declaration."},Type_annotation_cannot_appear_on_a_constructor_declaration:{code:1093,category:e.DiagnosticCategory.Error,key:"Type_annotation_cannot_appear_on_a_constructor_declaration_1093",message:"Type annotation cannot appear on a constructor declaration."},An_accessor_cannot_have_type_parameters:{code:1094,category:e.DiagnosticCategory.Error,key:"An_accessor_cannot_have_type_parameters_1094",message:"An accessor cannot have type parameters."},A_set_accessor_cannot_have_a_return_type_annotation:{code:1095,category:e.DiagnosticCategory.Error,key:"A_set_accessor_cannot_have_a_return_type_annotation_1095",message:"A 'set' accessor cannot have a return type annotation."},An_index_signature_must_have_exactly_one_parameter:{code:1096,category:e.DiagnosticCategory.Error,key:"An_index_signature_must_have_exactly_one_parameter_1096",message:"An index signature must have exactly one parameter."},_0_list_cannot_be_empty:{code:1097,category:e.DiagnosticCategory.Error,key:"_0_list_cannot_be_empty_1097",message:"'{0}' list cannot be empty."},Type_parameter_list_cannot_be_empty:{code:1098,category:e.DiagnosticCategory.Error,key:"Type_parameter_list_cannot_be_empty_1098",message:"Type parameter list cannot be empty."},Type_argument_list_cannot_be_empty:{code:1099,category:e.DiagnosticCategory.Error,key:"Type_argument_list_cannot_be_empty_1099",message:"Type argument list cannot be empty."},Invalid_use_of_0_in_strict_mode:{code:1100,category:e.DiagnosticCategory.Error,key:"Invalid_use_of_0_in_strict_mode_1100",message:"Invalid use of '{0}' in strict mode."},with_statements_are_not_allowed_in_strict_mode:{code:1101,category:e.DiagnosticCategory.Error,key:"with_statements_are_not_allowed_in_strict_mode_1101",message:"'with' statements are not allowed in strict mode."},delete_cannot_be_called_on_an_identifier_in_strict_mode:{code:1102,category:e.DiagnosticCategory.Error,key:"delete_cannot_be_called_on_an_identifier_in_strict_mode_1102",message:"'delete' cannot be called on an identifier in strict mode."},A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement:{code:1104,category:e.DiagnosticCategory.Error,key:"A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement_1104",message:"A 'continue' statement can only be used within an enclosing iteration statement."},A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement:{code:1105,category:e.DiagnosticCategory.Error,key:"A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement_1105",message:"A 'break' statement can only be used within an enclosing iteration or switch statement."},Jump_target_cannot_cross_function_boundary:{code:1107,category:e.DiagnosticCategory.Error,key:"Jump_target_cannot_cross_function_boundary_1107",message:"Jump target cannot cross function boundary."},A_return_statement_can_only_be_used_within_a_function_body:{code:1108,category:e.DiagnosticCategory.Error,key:"A_return_statement_can_only_be_used_within_a_function_body_1108",message:"A 'return' statement can only be used within a function body."},Expression_expected:{code:1109,category:e.DiagnosticCategory.Error,key:"Expression_expected_1109",message:"Expression expected."},Type_expected:{code:1110,category:e.DiagnosticCategory.Error,key:"Type_expected_1110",message:"Type expected."},A_default_clause_cannot_appear_more_than_once_in_a_switch_statement:{code:1113,category:e.DiagnosticCategory.Error,key:"A_default_clause_cannot_appear_more_than_once_in_a_switch_statement_1113",message:"A 'default' clause cannot appear more than once in a 'switch' statement."},Duplicate_label_0:{code:1114,category:e.DiagnosticCategory.Error,key:"Duplicate_label_0_1114",message:"Duplicate label '{0}'"},A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement:{code:1115,category:e.DiagnosticCategory.Error,key:"A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement_1115",message:"A 'continue' statement can only jump to a label of an enclosing iteration statement."},A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement:{code:1116,category:e.DiagnosticCategory.Error,key:"A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement_1116",message:"A 'break' statement can only jump to a label of an enclosing statement."},An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode:{code:1117,category:e.DiagnosticCategory.Error,key:"An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode_1117",message:"An object literal cannot have multiple properties with the same name in strict mode."},An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name:{code:1118,category:e.DiagnosticCategory.Error,key:"An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name_1118",message:"An object literal cannot have multiple get/set accessors with the same name."},An_object_literal_cannot_have_property_and_accessor_with_the_same_name:{code:1119,category:e.DiagnosticCategory.Error,key:"An_object_literal_cannot_have_property_and_accessor_with_the_same_name_1119",message:"An object literal cannot have property and accessor with the same name."},An_export_assignment_cannot_have_modifiers:{code:1120,category:e.DiagnosticCategory.Error,key:"An_export_assignment_cannot_have_modifiers_1120",message:"An export assignment cannot have modifiers."},Octal_literals_are_not_allowed_in_strict_mode:{code:1121,category:e.DiagnosticCategory.Error,key:"Octal_literals_are_not_allowed_in_strict_mode_1121",message:"Octal literals are not allowed in strict mode."},A_tuple_type_element_list_cannot_be_empty:{code:1122,category:e.DiagnosticCategory.Error,key:"A_tuple_type_element_list_cannot_be_empty_1122",message:"A tuple type element list cannot be empty."},Variable_declaration_list_cannot_be_empty:{code:1123,category:e.DiagnosticCategory.Error,key:"Variable_declaration_list_cannot_be_empty_1123",message:"Variable declaration list cannot be empty."},Digit_expected:{code:1124,category:e.DiagnosticCategory.Error,key:"Digit_expected_1124",message:"Digit expected."},Hexadecimal_digit_expected:{code:1125,category:e.DiagnosticCategory.Error,key:"Hexadecimal_digit_expected_1125",message:"Hexadecimal digit expected."},Unexpected_end_of_text:{code:1126,category:e.DiagnosticCategory.Error,key:"Unexpected_end_of_text_1126",message:"Unexpected end of text."},Invalid_character:{code:1127,category:e.DiagnosticCategory.Error,key:"Invalid_character_1127",message:"Invalid character."},Declaration_or_statement_expected:{code:1128,category:e.DiagnosticCategory.Error,key:"Declaration_or_statement_expected_1128",message:"Declaration or statement expected."},Statement_expected:{code:1129,category:e.DiagnosticCategory.Error,key:"Statement_expected_1129",message:"Statement expected."},case_or_default_expected:{code:1130,category:e.DiagnosticCategory.Error,key:"case_or_default_expected_1130",message:"'case' or 'default' expected."},Property_or_signature_expected:{code:1131,category:e.DiagnosticCategory.Error,key:"Property_or_signature_expected_1131",message:"Property or signature expected."},Enum_member_expected:{code:1132,category:e.DiagnosticCategory.Error,key:"Enum_member_expected_1132",message:"Enum member expected."},Variable_declaration_expected:{code:1134,category:e.DiagnosticCategory.Error,key:"Variable_declaration_expected_1134",message:"Variable declaration expected."},Argument_expression_expected:{code:1135,category:e.DiagnosticCategory.Error,key:"Argument_expression_expected_1135",message:"Argument expression expected."},Property_assignment_expected:{code:1136,category:e.DiagnosticCategory.Error,key:"Property_assignment_expected_1136",message:"Property assignment expected."},Expression_or_comma_expected:{code:1137,category:e.DiagnosticCategory.Error,key:"Expression_or_comma_expected_1137",message:"Expression or comma expected."},Parameter_declaration_expected:{code:1138,category:e.DiagnosticCategory.Error,key:"Parameter_declaration_expected_1138",message:"Parameter declaration expected."},Type_parameter_declaration_expected:{code:1139,category:e.DiagnosticCategory.Error,key:"Type_parameter_declaration_expected_1139",message:"Type parameter declaration expected."},Type_argument_expected:{code:1140,category:e.DiagnosticCategory.Error,key:"Type_argument_expected_1140",message:"Type argument expected."},String_literal_expected:{code:1141,category:e.DiagnosticCategory.Error,key:"String_literal_expected_1141",message:"String literal expected."},Line_break_not_permitted_here:{code:1142,category:e.DiagnosticCategory.Error,key:"Line_break_not_permitted_here_1142",message:"Line break not permitted here."},or_expected:{code:1144,category:e.DiagnosticCategory.Error,key:"or_expected_1144",message:"'{' or ';' expected."},Declaration_expected:{code:1146,category:e.DiagnosticCategory.Error,key:"Declaration_expected_1146",message:"Declaration expected."},Import_declarations_in_a_namespace_cannot_reference_a_module:{code:1147,category:e.DiagnosticCategory.Error,key:"Import_declarations_in_a_namespace_cannot_reference_a_module_1147",message:"Import declarations in a namespace cannot reference a module."},Cannot_use_imports_exports_or_module_augmentations_when_module_is_none:{code:1148,category:e.DiagnosticCategory.Error,key:"Cannot_use_imports_exports_or_module_augmentations_when_module_is_none_1148",message:"Cannot use imports, exports, or module augmentations when '--module' is 'none'."},File_name_0_differs_from_already_included_file_name_1_only_in_casing:{code:1149,category:e.DiagnosticCategory.Error,key:"File_name_0_differs_from_already_included_file_name_1_only_in_casing_1149",message:"File name '{0}' differs from already included file name '{1}' only in casing"},new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead:{code:1150,category:e.DiagnosticCategory.Error,key:"new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead_1150",message:"'new T[]' cannot be used to create an array. Use 'new Array<T>()' instead."},const_declarations_must_be_initialized:{code:1155,category:e.DiagnosticCategory.Error,key:"const_declarations_must_be_initialized_1155",message:"'const' declarations must be initialized"},const_declarations_can_only_be_declared_inside_a_block:{code:1156,category:e.DiagnosticCategory.Error,key:"const_declarations_can_only_be_declared_inside_a_block_1156",message:"'const' declarations can only be declared inside a block."},let_declarations_can_only_be_declared_inside_a_block:{code:1157,category:e.DiagnosticCategory.Error,key:"let_declarations_can_only_be_declared_inside_a_block_1157",message:"'let' declarations can only be declared inside a block."},Unterminated_template_literal:{code:1160,category:e.DiagnosticCategory.Error,key:"Unterminated_template_literal_1160",message:"Unterminated template literal."},Unterminated_regular_expression_literal:{code:1161,category:e.DiagnosticCategory.Error,key:"Unterminated_regular_expression_literal_1161",message:"Unterminated regular expression literal."},An_object_member_cannot_be_declared_optional:{code:1162,category:e.DiagnosticCategory.Error,key:"An_object_member_cannot_be_declared_optional_1162",message:"An object member cannot be declared optional."},A_yield_expression_is_only_allowed_in_a_generator_body:{code:1163,category:e.DiagnosticCategory.Error,key:"A_yield_expression_is_only_allowed_in_a_generator_body_1163",message:"A 'yield' expression is only allowed in a generator body."},Computed_property_names_are_not_allowed_in_enums:{code:1164,category:e.DiagnosticCategory.Error,key:"Computed_property_names_are_not_allowed_in_enums_1164",message:"Computed property names are not allowed in enums."},A_computed_property_name_in_an_ambient_context_must_directly_refer_to_a_built_in_symbol:{code:1165,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_in_an_ambient_context_must_directly_refer_to_a_built_in_symbol_1165",message:"A computed property name in an ambient context must directly refer to a built-in symbol."},A_computed_property_name_in_a_class_property_declaration_must_directly_refer_to_a_built_in_symbol:{code:1166,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_in_a_class_property_declaration_must_directly_refer_to_a_built_in_symbol_1166",message:"A computed property name in a class property declaration must directly refer to a built-in symbol."},A_computed_property_name_in_a_method_overload_must_directly_refer_to_a_built_in_symbol:{code:1168,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_in_a_method_overload_must_directly_refer_to_a_built_in_symbol_1168",message:"A computed property name in a method overload must directly refer to a built-in symbol."},A_computed_property_name_in_an_interface_must_directly_refer_to_a_built_in_symbol:{code:1169,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_in_an_interface_must_directly_refer_to_a_built_in_symbol_1169",message:"A computed property name in an interface must directly refer to a built-in symbol."},A_computed_property_name_in_a_type_literal_must_directly_refer_to_a_built_in_symbol:{code:1170,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_in_a_type_literal_must_directly_refer_to_a_built_in_symbol_1170",message:"A computed property name in a type literal must directly refer to a built-in symbol."},A_comma_expression_is_not_allowed_in_a_computed_property_name:{code:1171,category:e.DiagnosticCategory.Error,key:"A_comma_expression_is_not_allowed_in_a_computed_property_name_1171",message:"A comma expression is not allowed in a computed property name."},extends_clause_already_seen:{code:1172,category:e.DiagnosticCategory.Error,key:"extends_clause_already_seen_1172",message:"'extends' clause already seen."},extends_clause_must_precede_implements_clause:{code:1173,category:e.DiagnosticCategory.Error,key:"extends_clause_must_precede_implements_clause_1173",message:"'extends' clause must precede 'implements' clause."},Classes_can_only_extend_a_single_class:{code:1174,category:e.DiagnosticCategory.Error,key:"Classes_can_only_extend_a_single_class_1174",message:"Classes can only extend a single class."},implements_clause_already_seen:{code:1175,category:e.DiagnosticCategory.Error,key:"implements_clause_already_seen_1175",message:"'implements' clause already seen."},Interface_declaration_cannot_have_implements_clause:{code:1176,category:e.DiagnosticCategory.Error,key:"Interface_declaration_cannot_have_implements_clause_1176",message:"Interface declaration cannot have 'implements' clause."},Binary_digit_expected:{code:1177,category:e.DiagnosticCategory.Error,key:"Binary_digit_expected_1177",message:"Binary digit expected."},Octal_digit_expected:{code:1178,category:e.DiagnosticCategory.Error,key:"Octal_digit_expected_1178",message:"Octal digit expected."},Unexpected_token_expected:{code:1179,category:e.DiagnosticCategory.Error,key:"Unexpected_token_expected_1179",message:"Unexpected token. '{' expected."},Property_destructuring_pattern_expected:{code:1180,category:e.DiagnosticCategory.Error,key:"Property_destructuring_pattern_expected_1180",message:"Property destructuring pattern expected."},Array_element_destructuring_pattern_expected:{code:1181,category:e.DiagnosticCategory.Error,key:"Array_element_destructuring_pattern_expected_1181",message:"Array element destructuring pattern expected."},A_destructuring_declaration_must_have_an_initializer:{code:1182,category:e.DiagnosticCategory.Error,key:"A_destructuring_declaration_must_have_an_initializer_1182",message:"A destructuring declaration must have an initializer."},An_implementation_cannot_be_declared_in_ambient_contexts:{code:1183,category:e.DiagnosticCategory.Error,key:"An_implementation_cannot_be_declared_in_ambient_contexts_1183",message:"An implementation cannot be declared in ambient contexts."},Modifiers_cannot_appear_here:{code:1184,category:e.DiagnosticCategory.Error,key:"Modifiers_cannot_appear_here_1184",message:"Modifiers cannot appear here."},Merge_conflict_marker_encountered:{code:1185,category:e.DiagnosticCategory.Error,key:"Merge_conflict_marker_encountered_1185",message:"Merge conflict marker encountered."},A_rest_element_cannot_have_an_initializer:{code:1186,category:e.DiagnosticCategory.Error,key:"A_rest_element_cannot_have_an_initializer_1186",message:"A rest element cannot have an initializer."},A_parameter_property_may_not_be_declared_using_a_binding_pattern:{code:1187,category:e.DiagnosticCategory.Error,key:"A_parameter_property_may_not_be_declared_using_a_binding_pattern_1187",message:"A parameter property may not be declared using a binding pattern."},Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement:{code:1188,category:e.DiagnosticCategory.Error,key:"Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement_1188",message:"Only a single variable declaration is allowed in a 'for...of' statement."},The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer:{code:1189,category:e.DiagnosticCategory.Error,key:"The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer_1189",message:"The variable declaration of a 'for...in' statement cannot have an initializer."},The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer:{code:1190,category:e.DiagnosticCategory.Error,key:"The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer_1190",message:"The variable declaration of a 'for...of' statement cannot have an initializer."},An_import_declaration_cannot_have_modifiers:{code:1191,category:e.DiagnosticCategory.Error,key:"An_import_declaration_cannot_have_modifiers_1191",message:"An import declaration cannot have modifiers."},Module_0_has_no_default_export:{code:1192,category:e.DiagnosticCategory.Error,
key:"Module_0_has_no_default_export_1192",message:"Module '{0}' has no default export."},An_export_declaration_cannot_have_modifiers:{code:1193,category:e.DiagnosticCategory.Error,key:"An_export_declaration_cannot_have_modifiers_1193",message:"An export declaration cannot have modifiers."},Export_declarations_are_not_permitted_in_a_namespace:{code:1194,category:e.DiagnosticCategory.Error,key:"Export_declarations_are_not_permitted_in_a_namespace_1194",message:"Export declarations are not permitted in a namespace."},Catch_clause_variable_name_must_be_an_identifier:{code:1195,category:e.DiagnosticCategory.Error,key:"Catch_clause_variable_name_must_be_an_identifier_1195",message:"Catch clause variable name must be an identifier."},Catch_clause_variable_cannot_have_a_type_annotation:{code:1196,category:e.DiagnosticCategory.Error,key:"Catch_clause_variable_cannot_have_a_type_annotation_1196",message:"Catch clause variable cannot have a type annotation."},Catch_clause_variable_cannot_have_an_initializer:{code:1197,category:e.DiagnosticCategory.Error,key:"Catch_clause_variable_cannot_have_an_initializer_1197",message:"Catch clause variable cannot have an initializer."},An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive:{code:1198,category:e.DiagnosticCategory.Error,key:"An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive_1198",message:"An extended Unicode escape value must be between 0x0 and 0x10FFFF inclusive."},Unterminated_Unicode_escape_sequence:{code:1199,category:e.DiagnosticCategory.Error,key:"Unterminated_Unicode_escape_sequence_1199",message:"Unterminated Unicode escape sequence."},Line_terminator_not_permitted_before_arrow:{code:1200,category:e.DiagnosticCategory.Error,key:"Line_terminator_not_permitted_before_arrow_1200",message:"Line terminator not permitted before arrow."},Import_assignment_cannot_be_used_when_targeting_ECMAScript_2015_modules_Consider_using_import_Asterisk_as_ns_from_mod_import_a_from_mod_import_d_from_mod_or_another_module_format_instead:{code:1202,category:e.DiagnosticCategory.Error,key:"Import_assignment_cannot_be_used_when_targeting_ECMAScript_2015_modules_Consider_using_import_Asteri_1202",message:"Import assignment cannot be used when targeting ECMAScript 2015 modules. Consider using 'import * as ns from \"mod\"', 'import {a} from \"mod\"', 'import d from \"mod\"', or another module format instead."},Export_assignment_cannot_be_used_when_targeting_ECMAScript_2015_modules_Consider_using_export_default_or_another_module_format_instead:{code:1203,category:e.DiagnosticCategory.Error,key:"Export_assignment_cannot_be_used_when_targeting_ECMAScript_2015_modules_Consider_using_export_defaul_1203",message:"Export assignment cannot be used when targeting ECMAScript 2015 modules. Consider using 'export default' or another module format instead."},Decorators_are_not_valid_here:{code:1206,category:e.DiagnosticCategory.Error,key:"Decorators_are_not_valid_here_1206",message:"Decorators are not valid here."},Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name:{code:1207,category:e.DiagnosticCategory.Error,key:"Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name_1207",message:"Decorators cannot be applied to multiple get/set accessors of the same name."},Cannot_compile_namespaces_when_the_isolatedModules_flag_is_provided:{code:1208,category:e.DiagnosticCategory.Error,key:"Cannot_compile_namespaces_when_the_isolatedModules_flag_is_provided_1208",message:"Cannot compile namespaces when the '--isolatedModules' flag is provided."},Ambient_const_enums_are_not_allowed_when_the_isolatedModules_flag_is_provided:{code:1209,category:e.DiagnosticCategory.Error,key:"Ambient_const_enums_are_not_allowed_when_the_isolatedModules_flag_is_provided_1209",message:"Ambient const enums are not allowed when the '--isolatedModules' flag is provided."},Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode:{code:1210,category:e.DiagnosticCategory.Error,key:"Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode_1210",message:"Invalid use of '{0}'. Class definitions are automatically in strict mode."},A_class_declaration_without_the_default_modifier_must_have_a_name:{code:1211,category:e.DiagnosticCategory.Error,key:"A_class_declaration_without_the_default_modifier_must_have_a_name_1211",message:"A class declaration without the 'default' modifier must have a name"},Identifier_expected_0_is_a_reserved_word_in_strict_mode:{code:1212,category:e.DiagnosticCategory.Error,key:"Identifier_expected_0_is_a_reserved_word_in_strict_mode_1212",message:"Identifier expected. '{0}' is a reserved word in strict mode"},Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode:{code:1213,category:e.DiagnosticCategory.Error,key:"Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_stric_1213",message:"Identifier expected. '{0}' is a reserved word in strict mode. Class definitions are automatically in strict mode."},Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode:{code:1214,category:e.DiagnosticCategory.Error,key:"Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode_1214",message:"Identifier expected. '{0}' is a reserved word in strict mode. Modules are automatically in strict mode."},Invalid_use_of_0_Modules_are_automatically_in_strict_mode:{code:1215,category:e.DiagnosticCategory.Error,key:"Invalid_use_of_0_Modules_are_automatically_in_strict_mode_1215",message:"Invalid use of '{0}'. Modules are automatically in strict mode."},Export_assignment_is_not_supported_when_module_flag_is_system:{code:1218,category:e.DiagnosticCategory.Error,key:"Export_assignment_is_not_supported_when_module_flag_is_system_1218",message:"Export assignment is not supported when '--module' flag is 'system'."},Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_the_experimentalDecorators_option_to_remove_this_warning:{code:1219,category:e.DiagnosticCategory.Error,key:"Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_t_1219",message:"Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning."},Generators_are_only_available_when_targeting_ECMAScript_2015_or_higher:{code:1220,category:e.DiagnosticCategory.Error,key:"Generators_are_only_available_when_targeting_ECMAScript_2015_or_higher_1220",message:"Generators are only available when targeting ECMAScript 2015 or higher."},Generators_are_not_allowed_in_an_ambient_context:{code:1221,category:e.DiagnosticCategory.Error,key:"Generators_are_not_allowed_in_an_ambient_context_1221",message:"Generators are not allowed in an ambient context."},An_overload_signature_cannot_be_declared_as_a_generator:{code:1222,category:e.DiagnosticCategory.Error,key:"An_overload_signature_cannot_be_declared_as_a_generator_1222",message:"An overload signature cannot be declared as a generator."},_0_tag_already_specified:{code:1223,category:e.DiagnosticCategory.Error,key:"_0_tag_already_specified_1223",message:"'{0}' tag already specified."},Signature_0_must_have_a_type_predicate:{code:1224,category:e.DiagnosticCategory.Error,key:"Signature_0_must_have_a_type_predicate_1224",message:"Signature '{0}' must have a type predicate."},Cannot_find_parameter_0:{code:1225,category:e.DiagnosticCategory.Error,key:"Cannot_find_parameter_0_1225",message:"Cannot find parameter '{0}'."},Type_predicate_0_is_not_assignable_to_1:{code:1226,category:e.DiagnosticCategory.Error,key:"Type_predicate_0_is_not_assignable_to_1_1226",message:"Type predicate '{0}' is not assignable to '{1}'."},Parameter_0_is_not_in_the_same_position_as_parameter_1:{code:1227,category:e.DiagnosticCategory.Error,key:"Parameter_0_is_not_in_the_same_position_as_parameter_1_1227",message:"Parameter '{0}' is not in the same position as parameter '{1}'."},A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods:{code:1228,category:e.DiagnosticCategory.Error,key:"A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods_1228",message:"A type predicate is only allowed in return type position for functions and methods."},A_type_predicate_cannot_reference_a_rest_parameter:{code:1229,category:e.DiagnosticCategory.Error,key:"A_type_predicate_cannot_reference_a_rest_parameter_1229",message:"A type predicate cannot reference a rest parameter."},A_type_predicate_cannot_reference_element_0_in_a_binding_pattern:{code:1230,category:e.DiagnosticCategory.Error,key:"A_type_predicate_cannot_reference_element_0_in_a_binding_pattern_1230",message:"A type predicate cannot reference element '{0}' in a binding pattern."},An_export_assignment_can_only_be_used_in_a_module:{code:1231,category:e.DiagnosticCategory.Error,key:"An_export_assignment_can_only_be_used_in_a_module_1231",message:"An export assignment can only be used in a module."},An_import_declaration_can_only_be_used_in_a_namespace_or_module:{code:1232,category:e.DiagnosticCategory.Error,key:"An_import_declaration_can_only_be_used_in_a_namespace_or_module_1232",message:"An import declaration can only be used in a namespace or module."},An_export_declaration_can_only_be_used_in_a_module:{code:1233,category:e.DiagnosticCategory.Error,key:"An_export_declaration_can_only_be_used_in_a_module_1233",message:"An export declaration can only be used in a module."},An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file:{code:1234,category:e.DiagnosticCategory.Error,key:"An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file_1234",message:"An ambient module declaration is only allowed at the top level in a file."},A_namespace_declaration_is_only_allowed_in_a_namespace_or_module:{code:1235,category:e.DiagnosticCategory.Error,key:"A_namespace_declaration_is_only_allowed_in_a_namespace_or_module_1235",message:"A namespace declaration is only allowed in a namespace or module."},The_return_type_of_a_property_decorator_function_must_be_either_void_or_any:{code:1236,category:e.DiagnosticCategory.Error,key:"The_return_type_of_a_property_decorator_function_must_be_either_void_or_any_1236",message:"The return type of a property decorator function must be either 'void' or 'any'."},The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any:{code:1237,category:e.DiagnosticCategory.Error,key:"The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any_1237",message:"The return type of a parameter decorator function must be either 'void' or 'any'."},Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression:{code:1238,category:e.DiagnosticCategory.Error,key:"Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression_1238",message:"Unable to resolve signature of class decorator when called as an expression."},Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression:{code:1239,category:e.DiagnosticCategory.Error,key:"Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression_1239",message:"Unable to resolve signature of parameter decorator when called as an expression."},Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression:{code:1240,category:e.DiagnosticCategory.Error,key:"Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression_1240",message:"Unable to resolve signature of property decorator when called as an expression."},Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression:{code:1241,category:e.DiagnosticCategory.Error,key:"Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression_1241",message:"Unable to resolve signature of method decorator when called as an expression."},abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration:{code:1242,category:e.DiagnosticCategory.Error,key:"abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration_1242",message:"'abstract' modifier can only appear on a class, method, or property declaration."},_0_modifier_cannot_be_used_with_1_modifier:{code:1243,category:e.DiagnosticCategory.Error,key:"_0_modifier_cannot_be_used_with_1_modifier_1243",message:"'{0}' modifier cannot be used with '{1}' modifier."},Abstract_methods_can_only_appear_within_an_abstract_class:{code:1244,category:e.DiagnosticCategory.Error,key:"Abstract_methods_can_only_appear_within_an_abstract_class_1244",message:"Abstract methods can only appear within an abstract class."},Method_0_cannot_have_an_implementation_because_it_is_marked_abstract:{code:1245,category:e.DiagnosticCategory.Error,key:"Method_0_cannot_have_an_implementation_because_it_is_marked_abstract_1245",message:"Method '{0}' cannot have an implementation because it is marked abstract."},An_interface_property_cannot_have_an_initializer:{code:1246,category:e.DiagnosticCategory.Error,key:"An_interface_property_cannot_have_an_initializer_1246",message:"An interface property cannot have an initializer."},A_type_literal_property_cannot_have_an_initializer:{code:1247,category:e.DiagnosticCategory.Error,key:"A_type_literal_property_cannot_have_an_initializer_1247",message:"A type literal property cannot have an initializer."},A_class_member_cannot_have_the_0_keyword:{code:1248,category:e.DiagnosticCategory.Error,key:"A_class_member_cannot_have_the_0_keyword_1248",message:"A class member cannot have the '{0}' keyword."},A_decorator_can_only_decorate_a_method_implementation_not_an_overload:{code:1249,category:e.DiagnosticCategory.Error,key:"A_decorator_can_only_decorate_a_method_implementation_not_an_overload_1249",message:"A decorator can only decorate a method implementation, not an overload."},Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5:{code:1250,category:e.DiagnosticCategory.Error,key:"Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_1250",message:"Function declarations are not allowed inside blocks in strict mode when targeting 'ES3' or 'ES5'."},Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_definitions_are_automatically_in_strict_mode:{code:1251,category:e.DiagnosticCategory.Error,key:"Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_d_1251",message:"Function declarations are not allowed inside blocks in strict mode when targeting 'ES3' or 'ES5'. Class definitions are automatically in strict mode."},Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_are_automatically_in_strict_mode:{code:1252,category:e.DiagnosticCategory.Error,key:"Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_1252",message:"Function declarations are not allowed inside blocks in strict mode when targeting 'ES3' or 'ES5'. Modules are automatically in strict mode."},_0_tag_cannot_be_used_independently_as_a_top_level_JSDoc_tag:{code:1253,category:e.DiagnosticCategory.Error,key:"_0_tag_cannot_be_used_independently_as_a_top_level_JSDoc_tag_1253",message:"'{0}' tag cannot be used independently as a top level JSDoc tag."},with_statements_are_not_allowed_in_an_async_function_block:{code:1300,category:e.DiagnosticCategory.Error,key:"with_statements_are_not_allowed_in_an_async_function_block_1300",message:"'with' statements are not allowed in an async function block."},await_expression_is_only_allowed_within_an_async_function:{code:1308,category:e.DiagnosticCategory.Error,key:"await_expression_is_only_allowed_within_an_async_function_1308",message:"'await' expression is only allowed within an async function."},Async_functions_are_only_available_when_targeting_ECMAScript_2015_or_higher:{code:1311,category:e.DiagnosticCategory.Error,key:"Async_functions_are_only_available_when_targeting_ECMAScript_2015_or_higher_1311",message:"Async functions are only available when targeting ECMAScript 2015 or higher."},can_only_be_used_in_an_object_literal_property_inside_a_destructuring_assignment:{code:1312,category:e.DiagnosticCategory.Error,key:"can_only_be_used_in_an_object_literal_property_inside_a_destructuring_assignment_1312",message:"'=' can only be used in an object literal property inside a destructuring assignment."},The_body_of_an_if_statement_cannot_be_the_empty_statement:{code:1313,category:e.DiagnosticCategory.Error,key:"The_body_of_an_if_statement_cannot_be_the_empty_statement_1313",message:"The body of an 'if' statement cannot be the empty statement."},Global_module_exports_may_only_appear_in_module_files:{code:1314,category:e.DiagnosticCategory.Error,key:"Global_module_exports_may_only_appear_in_module_files_1314",message:"Global module exports may only appear in module files."},Global_module_exports_may_only_appear_in_declaration_files:{code:1315,category:e.DiagnosticCategory.Error,key:"Global_module_exports_may_only_appear_in_declaration_files_1315",message:"Global module exports may only appear in declaration files."},Global_module_exports_may_only_appear_at_top_level:{code:1316,category:e.DiagnosticCategory.Error,key:"Global_module_exports_may_only_appear_at_top_level_1316",message:"Global module exports may only appear at top level."},A_parameter_property_cannot_be_declared_using_a_rest_parameter:{code:1317,category:e.DiagnosticCategory.Error,key:"A_parameter_property_cannot_be_declared_using_a_rest_parameter_1317",message:"A parameter property cannot be declared using a rest parameter."},Duplicate_identifier_0:{code:2300,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_0_2300",message:"Duplicate identifier '{0}'."},Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor:{code:2301,category:e.DiagnosticCategory.Error,key:"Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor_2301",message:"Initializer of instance member variable '{0}' cannot reference identifier '{1}' declared in the constructor."},Static_members_cannot_reference_class_type_parameters:{code:2302,category:e.DiagnosticCategory.Error,key:"Static_members_cannot_reference_class_type_parameters_2302",message:"Static members cannot reference class type parameters."},Circular_definition_of_import_alias_0:{code:2303,category:e.DiagnosticCategory.Error,key:"Circular_definition_of_import_alias_0_2303",message:"Circular definition of import alias '{0}'."},Cannot_find_name_0:{code:2304,category:e.DiagnosticCategory.Error,key:"Cannot_find_name_0_2304",message:"Cannot find name '{0}'."},Module_0_has_no_exported_member_1:{code:2305,category:e.DiagnosticCategory.Error,key:"Module_0_has_no_exported_member_1_2305",message:"Module '{0}' has no exported member '{1}'."},File_0_is_not_a_module:{code:2306,category:e.DiagnosticCategory.Error,key:"File_0_is_not_a_module_2306",message:"File '{0}' is not a module."},Cannot_find_module_0:{code:2307,category:e.DiagnosticCategory.Error,key:"Cannot_find_module_0_2307",message:"Cannot find module '{0}'."},Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambiguity:{code:2308,category:e.DiagnosticCategory.Error,key:"Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambig_2308",message:"Module {0} has already exported a member named '{1}'. Consider explicitly re-exporting to resolve the ambiguity."},An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements:{code:2309,category:e.DiagnosticCategory.Error,key:"An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements_2309",message:"An export assignment cannot be used in a module with other exported elements."},Type_0_recursively_references_itself_as_a_base_type:{code:2310,category:e.DiagnosticCategory.Error,key:"Type_0_recursively_references_itself_as_a_base_type_2310",message:"Type '{0}' recursively references itself as a base type."},A_class_may_only_extend_another_class:{code:2311,category:e.DiagnosticCategory.Error,key:"A_class_may_only_extend_another_class_2311",message:"A class may only extend another class."},An_interface_may_only_extend_a_class_or_another_interface:{code:2312,category:e.DiagnosticCategory.Error,key:"An_interface_may_only_extend_a_class_or_another_interface_2312",message:"An interface may only extend a class or another interface."},Type_parameter_0_has_a_circular_constraint:{code:2313,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_has_a_circular_constraint_2313",message:"Type parameter '{0}' has a circular constraint."},Generic_type_0_requires_1_type_argument_s:{code:2314,category:e.DiagnosticCategory.Error,key:"Generic_type_0_requires_1_type_argument_s_2314",message:"Generic type '{0}' requires {1} type argument(s)."},Type_0_is_not_generic:{code:2315,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_generic_2315",message:"Type '{0}' is not generic."},Global_type_0_must_be_a_class_or_interface_type:{code:2316,category:e.DiagnosticCategory.Error,key:"Global_type_0_must_be_a_class_or_interface_type_2316",message:"Global type '{0}' must be a class or interface type."},Global_type_0_must_have_1_type_parameter_s:{code:2317,category:e.DiagnosticCategory.Error,key:"Global_type_0_must_have_1_type_parameter_s_2317",message:"Global type '{0}' must have {1} type parameter(s)."},Cannot_find_global_type_0:{code:2318,category:e.DiagnosticCategory.Error,key:"Cannot_find_global_type_0_2318",message:"Cannot find global type '{0}'."},Named_property_0_of_types_1_and_2_are_not_identical:{code:2319,category:e.DiagnosticCategory.Error,key:"Named_property_0_of_types_1_and_2_are_not_identical_2319",message:"Named property '{0}' of types '{1}' and '{2}' are not identical."},Interface_0_cannot_simultaneously_extend_types_1_and_2:{code:2320,category:e.DiagnosticCategory.Error,key:"Interface_0_cannot_simultaneously_extend_types_1_and_2_2320",message:"Interface '{0}' cannot simultaneously extend types '{1}' and '{2}'."},Excessive_stack_depth_comparing_types_0_and_1:{code:2321,category:e.DiagnosticCategory.Error,key:"Excessive_stack_depth_comparing_types_0_and_1_2321",message:"Excessive stack depth comparing types '{0}' and '{1}'."},Type_0_is_not_assignable_to_type_1:{code:2322,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_assignable_to_type_1_2322",message:"Type '{0}' is not assignable to type '{1}'."},Cannot_redeclare_exported_variable_0:{code:2323,category:e.DiagnosticCategory.Error,key:"Cannot_redeclare_exported_variable_0_2323",message:"Cannot redeclare exported variable '{0}'."},Property_0_is_missing_in_type_1:{code:2324,category:e.DiagnosticCategory.Error,key:"Property_0_is_missing_in_type_1_2324",message:"Property '{0}' is missing in type '{1}'."},Property_0_is_private_in_type_1_but_not_in_type_2:{code:2325,category:e.DiagnosticCategory.Error,key:"Property_0_is_private_in_type_1_but_not_in_type_2_2325",message:"Property '{0}' is private in type '{1}' but not in type '{2}'."},Types_of_property_0_are_incompatible:{code:2326,category:e.DiagnosticCategory.Error,key:"Types_of_property_0_are_incompatible_2326",message:"Types of property '{0}' are incompatible."},Property_0_is_optional_in_type_1_but_required_in_type_2:{code:2327,category:e.DiagnosticCategory.Error,key:"Property_0_is_optional_in_type_1_but_required_in_type_2_2327",message:"Property '{0}' is optional in type '{1}' but required in type '{2}'."},Types_of_parameters_0_and_1_are_incompatible:{code:2328,category:e.DiagnosticCategory.Error,key:"Types_of_parameters_0_and_1_are_incompatible_2328",message:"Types of parameters '{0}' and '{1}' are incompatible."},Index_signature_is_missing_in_type_0:{code:2329,category:e.DiagnosticCategory.Error,key:"Index_signature_is_missing_in_type_0_2329",message:"Index signature is missing in type '{0}'."},Index_signatures_are_incompatible:{code:2330,category:e.DiagnosticCategory.Error,key:"Index_signatures_are_incompatible_2330",message:"Index signatures are incompatible."},this_cannot_be_referenced_in_a_module_or_namespace_body:{code:2331,category:e.DiagnosticCategory.Error,key:"this_cannot_be_referenced_in_a_module_or_namespace_body_2331",message:"'this' cannot be referenced in a module or namespace body."},this_cannot_be_referenced_in_current_location:{code:2332,category:e.DiagnosticCategory.Error,key:"this_cannot_be_referenced_in_current_location_2332",message:"'this' cannot be referenced in current location."},this_cannot_be_referenced_in_constructor_arguments:{code:2333,category:e.DiagnosticCategory.Error,key:"this_cannot_be_referenced_in_constructor_arguments_2333",message:"'this' cannot be referenced in constructor arguments."},this_cannot_be_referenced_in_a_static_property_initializer:{code:2334,category:e.DiagnosticCategory.Error,key:"this_cannot_be_referenced_in_a_static_property_initializer_2334",message:"'this' cannot be referenced in a static property initializer."},super_can_only_be_referenced_in_a_derived_class:{code:2335,category:e.DiagnosticCategory.Error,key:"super_can_only_be_referenced_in_a_derived_class_2335",message:"'super' can only be referenced in a derived class."},super_cannot_be_referenced_in_constructor_arguments:{code:2336,category:e.DiagnosticCategory.Error,key:"super_cannot_be_referenced_in_constructor_arguments_2336",message:"'super' cannot be referenced in constructor arguments."},Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors:{code:2337,category:e.DiagnosticCategory.Error,key:"Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors_2337",message:"Super calls are not permitted outside constructors or in nested functions inside constructors."},super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class:{code:2338,category:e.DiagnosticCategory.Error,key:"super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_der_2338",message:"'super' property access is permitted only in a constructor, member function, or member accessor of a derived class."},Property_0_does_not_exist_on_type_1:{code:2339,category:e.DiagnosticCategory.Error,key:"Property_0_does_not_exist_on_type_1_2339",message:"Property '{0}' does not exist on type '{1}'."},Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword:{code:2340,category:e.DiagnosticCategory.Error,key:"Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword_2340",message:"Only public and protected methods of the base class are accessible via the 'super' keyword."},Property_0_is_private_and_only_accessible_within_class_1:{code:2341,category:e.DiagnosticCategory.Error,key:"Property_0_is_private_and_only_accessible_within_class_1_2341",message:"Property '{0}' is private and only accessible within class '{1}'."},An_index_expression_argument_must_be_of_type_string_number_symbol_or_any:{code:2342,category:e.DiagnosticCategory.Error,key:"An_index_expression_argument_must_be_of_type_string_number_symbol_or_any_2342",message:"An index expression argument must be of type 'string', 'number', 'symbol', or 'any'."},Type_0_does_not_satisfy_the_constraint_1:{code:2344,category:e.DiagnosticCategory.Error,key:"Type_0_does_not_satisfy_the_constraint_1_2344",message:"Type '{0}' does not satisfy the constraint '{1}'."},Argument_of_type_0_is_not_assignable_to_parameter_of_type_1:{code:2345,category:e.DiagnosticCategory.Error,key:"Argument_of_type_0_is_not_assignable_to_parameter_of_type_1_2345",message:"Argument of type '{0}' is not assignable to parameter of type '{1}'."},Supplied_parameters_do_not_match_any_signature_of_call_target:{code:2346,category:e.DiagnosticCategory.Error,key:"Supplied_parameters_do_not_match_any_signature_of_call_target_2346",message:"Supplied parameters do not match any signature of call target."},Untyped_function_calls_may_not_accept_type_arguments:{code:2347,category:e.DiagnosticCategory.Error,key:"Untyped_function_calls_may_not_accept_type_arguments_2347",message:"Untyped function calls may not accept type arguments."},Value_of_type_0_is_not_callable_Did_you_mean_to_include_new:{code:2348,category:e.DiagnosticCategory.Error,key:"Value_of_type_0_is_not_callable_Did_you_mean_to_include_new_2348",message:"Value of type '{0}' is not callable. Did you mean to include 'new'?"},Cannot_invoke_an_expression_whose_type_lacks_a_call_signature:{code:2349,category:e.DiagnosticCategory.Error,key:"Cannot_invoke_an_expression_whose_type_lacks_a_call_signature_2349",message:"Cannot invoke an expression whose type lacks a call signature."},Only_a_void_function_can_be_called_with_the_new_keyword:{code:2350,category:e.DiagnosticCategory.Error,key:"Only_a_void_function_can_be_called_with_the_new_keyword_2350",message:"Only a void function can be called with the 'new' keyword."},Cannot_use_new_with_an_expression_whose_type_lacks_a_call_or_construct_signature:{code:2351,category:e.DiagnosticCategory.Error,key:"Cannot_use_new_with_an_expression_whose_type_lacks_a_call_or_construct_signature_2351",message:"Cannot use 'new' with an expression whose type lacks a call or construct signature."},Type_0_cannot_be_converted_to_type_1:{code:2352,category:e.DiagnosticCategory.Error,key:"Type_0_cannot_be_converted_to_type_1_2352",message:"Type '{0}' cannot be converted to type '{1}'."},Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1:{code:2353,category:e.DiagnosticCategory.Error,key:"Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1_2353",message:"Object literal may only specify known properties, and '{0}' does not exist in type '{1}'."},No_best_common_type_exists_among_return_expressions:{code:2354,category:e.DiagnosticCategory.Error,key:"No_best_common_type_exists_among_return_expressions_2354",message:"No best common type exists among return expressions."},A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value:{code:2355,category:e.DiagnosticCategory.Error,key:"A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value_2355",message:"A function whose declared type is neither 'void' nor 'any' must return a value."},An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type:{code:2356,category:e.DiagnosticCategory.Error,key:"An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type_2356",message:"An arithmetic operand must be of type 'any', 'number' or an enum type."},The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer:{code:2357,category:e.DiagnosticCategory.Error,key:"The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer_2357",message:"The operand of an increment or decrement operator must be a variable, property or indexer."},The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter:{code:2358,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_paramete_2358",message:"The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter."},The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type:{code:2359,category:e.DiagnosticCategory.Error,key:"The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_F_2359",message:"The right-hand side of an 'instanceof' expression must be of type 'any' or of a type assignable to the 'Function' interface type."},The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol:{
code:2360,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol_2360",message:"The left-hand side of an 'in' expression must be of type 'any', 'string', 'number', or 'symbol'."},The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter:{code:2361,category:e.DiagnosticCategory.Error,key:"The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter_2361",message:"The right-hand side of an 'in' expression must be of type 'any', an object type or a type parameter"},The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type:{code:2362,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type_2362",message:"The left-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type."},The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type:{code:2363,category:e.DiagnosticCategory.Error,key:"The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type_2363",message:"The right-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type."},Invalid_left_hand_side_of_assignment_expression:{code:2364,category:e.DiagnosticCategory.Error,key:"Invalid_left_hand_side_of_assignment_expression_2364",message:"Invalid left-hand side of assignment expression."},Operator_0_cannot_be_applied_to_types_1_and_2:{code:2365,category:e.DiagnosticCategory.Error,key:"Operator_0_cannot_be_applied_to_types_1_and_2_2365",message:"Operator '{0}' cannot be applied to types '{1}' and '{2}'."},Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined:{code:2366,category:e.DiagnosticCategory.Error,key:"Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined_2366",message:"Function lacks ending return statement and return type does not include 'undefined'."},Type_parameter_name_cannot_be_0:{code:2368,category:e.DiagnosticCategory.Error,key:"Type_parameter_name_cannot_be_0_2368",message:"Type parameter name cannot be '{0}'"},A_parameter_property_is_only_allowed_in_a_constructor_implementation:{code:2369,category:e.DiagnosticCategory.Error,key:"A_parameter_property_is_only_allowed_in_a_constructor_implementation_2369",message:"A parameter property is only allowed in a constructor implementation."},A_rest_parameter_must_be_of_an_array_type:{code:2370,category:e.DiagnosticCategory.Error,key:"A_rest_parameter_must_be_of_an_array_type_2370",message:"A rest parameter must be of an array type."},A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation:{code:2371,category:e.DiagnosticCategory.Error,key:"A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation_2371",message:"A parameter initializer is only allowed in a function or constructor implementation."},Parameter_0_cannot_be_referenced_in_its_initializer:{code:2372,category:e.DiagnosticCategory.Error,key:"Parameter_0_cannot_be_referenced_in_its_initializer_2372",message:"Parameter '{0}' cannot be referenced in its initializer."},Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it:{code:2373,category:e.DiagnosticCategory.Error,key:"Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it_2373",message:"Initializer of parameter '{0}' cannot reference identifier '{1}' declared after it."},Duplicate_string_index_signature:{code:2374,category:e.DiagnosticCategory.Error,key:"Duplicate_string_index_signature_2374",message:"Duplicate string index signature."},Duplicate_number_index_signature:{code:2375,category:e.DiagnosticCategory.Error,key:"Duplicate_number_index_signature_2375",message:"Duplicate number index signature."},A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties:{code:2376,category:e.DiagnosticCategory.Error,key:"A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_proper_2376",message:"A 'super' call must be the first statement in the constructor when a class contains initialized properties or has parameter properties."},Constructors_for_derived_classes_must_contain_a_super_call:{code:2377,category:e.DiagnosticCategory.Error,key:"Constructors_for_derived_classes_must_contain_a_super_call_2377",message:"Constructors for derived classes must contain a 'super' call."},A_get_accessor_must_return_a_value:{code:2378,category:e.DiagnosticCategory.Error,key:"A_get_accessor_must_return_a_value_2378",message:"A 'get' accessor must return a value."},Getter_and_setter_accessors_do_not_agree_in_visibility:{code:2379,category:e.DiagnosticCategory.Error,key:"Getter_and_setter_accessors_do_not_agree_in_visibility_2379",message:"Getter and setter accessors do not agree in visibility."},get_and_set_accessor_must_have_the_same_type:{code:2380,category:e.DiagnosticCategory.Error,key:"get_and_set_accessor_must_have_the_same_type_2380",message:"'get' and 'set' accessor must have the same type."},A_signature_with_an_implementation_cannot_use_a_string_literal_type:{code:2381,category:e.DiagnosticCategory.Error,key:"A_signature_with_an_implementation_cannot_use_a_string_literal_type_2381",message:"A signature with an implementation cannot use a string literal type."},Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature:{code:2382,category:e.DiagnosticCategory.Error,key:"Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature_2382",message:"Specialized overload signature is not assignable to any non-specialized signature."},Overload_signatures_must_all_be_exported_or_non_exported:{code:2383,category:e.DiagnosticCategory.Error,key:"Overload_signatures_must_all_be_exported_or_non_exported_2383",message:"Overload signatures must all be exported or non-exported."},Overload_signatures_must_all_be_ambient_or_non_ambient:{code:2384,category:e.DiagnosticCategory.Error,key:"Overload_signatures_must_all_be_ambient_or_non_ambient_2384",message:"Overload signatures must all be ambient or non-ambient."},Overload_signatures_must_all_be_public_private_or_protected:{code:2385,category:e.DiagnosticCategory.Error,key:"Overload_signatures_must_all_be_public_private_or_protected_2385",message:"Overload signatures must all be public, private or protected."},Overload_signatures_must_all_be_optional_or_required:{code:2386,category:e.DiagnosticCategory.Error,key:"Overload_signatures_must_all_be_optional_or_required_2386",message:"Overload signatures must all be optional or required."},Function_overload_must_be_static:{code:2387,category:e.DiagnosticCategory.Error,key:"Function_overload_must_be_static_2387",message:"Function overload must be static."},Function_overload_must_not_be_static:{code:2388,category:e.DiagnosticCategory.Error,key:"Function_overload_must_not_be_static_2388",message:"Function overload must not be static."},Function_implementation_name_must_be_0:{code:2389,category:e.DiagnosticCategory.Error,key:"Function_implementation_name_must_be_0_2389",message:"Function implementation name must be '{0}'."},Constructor_implementation_is_missing:{code:2390,category:e.DiagnosticCategory.Error,key:"Constructor_implementation_is_missing_2390",message:"Constructor implementation is missing."},Function_implementation_is_missing_or_not_immediately_following_the_declaration:{code:2391,category:e.DiagnosticCategory.Error,key:"Function_implementation_is_missing_or_not_immediately_following_the_declaration_2391",message:"Function implementation is missing or not immediately following the declaration."},Multiple_constructor_implementations_are_not_allowed:{code:2392,category:e.DiagnosticCategory.Error,key:"Multiple_constructor_implementations_are_not_allowed_2392",message:"Multiple constructor implementations are not allowed."},Duplicate_function_implementation:{code:2393,category:e.DiagnosticCategory.Error,key:"Duplicate_function_implementation_2393",message:"Duplicate function implementation."},Overload_signature_is_not_compatible_with_function_implementation:{code:2394,category:e.DiagnosticCategory.Error,key:"Overload_signature_is_not_compatible_with_function_implementation_2394",message:"Overload signature is not compatible with function implementation."},Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local:{code:2395,category:e.DiagnosticCategory.Error,key:"Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local_2395",message:"Individual declarations in merged declaration '{0}' must be all exported or all local."},Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters:{code:2396,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters_2396",message:"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters."},Declaration_name_conflicts_with_built_in_global_identifier_0:{code:2397,category:e.DiagnosticCategory.Error,key:"Declaration_name_conflicts_with_built_in_global_identifier_0_2397",message:"Declaration name conflicts with built-in global identifier '{0}'."},Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference:{code:2399,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference_2399",message:"Duplicate identifier '_this'. Compiler uses variable declaration '_this' to capture 'this' reference."},Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference:{code:2400,category:e.DiagnosticCategory.Error,key:"Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference_2400",message:"Expression resolves to variable declaration '_this' that compiler uses to capture 'this' reference."},Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference:{code:2401,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference_2401",message:"Duplicate identifier '_super'. Compiler uses '_super' to capture base class reference."},Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference:{code:2402,category:e.DiagnosticCategory.Error,key:"Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference_2402",message:"Expression resolves to '_super' that compiler uses to capture base class reference."},Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2:{code:2403,category:e.DiagnosticCategory.Error,key:"Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_t_2403",message:"Subsequent variable declarations must have the same type.  Variable '{0}' must be of type '{1}', but here has type '{2}'."},The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation:{code:2404,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation_2404",message:"The left-hand side of a 'for...in' statement cannot use a type annotation."},The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any:{code:2405,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any_2405",message:"The left-hand side of a 'for...in' statement must be of type 'string' or 'any'."},Invalid_left_hand_side_in_for_in_statement:{code:2406,category:e.DiagnosticCategory.Error,key:"Invalid_left_hand_side_in_for_in_statement_2406",message:"Invalid left-hand side in 'for...in' statement."},The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter:{code:2407,category:e.DiagnosticCategory.Error,key:"The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter_2407",message:"The right-hand side of a 'for...in' statement must be of type 'any', an object type or a type parameter."},Setters_cannot_return_a_value:{code:2408,category:e.DiagnosticCategory.Error,key:"Setters_cannot_return_a_value_2408",message:"Setters cannot return a value."},Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class:{code:2409,category:e.DiagnosticCategory.Error,key:"Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class_2409",message:"Return type of constructor signature must be assignable to the instance type of the class"},All_symbols_within_a_with_block_will_be_resolved_to_any:{code:2410,category:e.DiagnosticCategory.Error,key:"All_symbols_within_a_with_block_will_be_resolved_to_any_2410",message:"All symbols within a 'with' block will be resolved to 'any'."},Property_0_of_type_1_is_not_assignable_to_string_index_type_2:{code:2411,category:e.DiagnosticCategory.Error,key:"Property_0_of_type_1_is_not_assignable_to_string_index_type_2_2411",message:"Property '{0}' of type '{1}' is not assignable to string index type '{2}'."},Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2:{code:2412,category:e.DiagnosticCategory.Error,key:"Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2_2412",message:"Property '{0}' of type '{1}' is not assignable to numeric index type '{2}'."},Numeric_index_type_0_is_not_assignable_to_string_index_type_1:{code:2413,category:e.DiagnosticCategory.Error,key:"Numeric_index_type_0_is_not_assignable_to_string_index_type_1_2413",message:"Numeric index type '{0}' is not assignable to string index type '{1}'."},Class_name_cannot_be_0:{code:2414,category:e.DiagnosticCategory.Error,key:"Class_name_cannot_be_0_2414",message:"Class name cannot be '{0}'"},Class_0_incorrectly_extends_base_class_1:{code:2415,category:e.DiagnosticCategory.Error,key:"Class_0_incorrectly_extends_base_class_1_2415",message:"Class '{0}' incorrectly extends base class '{1}'."},Class_static_side_0_incorrectly_extends_base_class_static_side_1:{code:2417,category:e.DiagnosticCategory.Error,key:"Class_static_side_0_incorrectly_extends_base_class_static_side_1_2417",message:"Class static side '{0}' incorrectly extends base class static side '{1}'."},Class_0_incorrectly_implements_interface_1:{code:2420,category:e.DiagnosticCategory.Error,key:"Class_0_incorrectly_implements_interface_1_2420",message:"Class '{0}' incorrectly implements interface '{1}'."},A_class_may_only_implement_another_class_or_interface:{code:2422,category:e.DiagnosticCategory.Error,key:"A_class_may_only_implement_another_class_or_interface_2422",message:"A class may only implement another class or interface."},Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor:{code:2423,category:e.DiagnosticCategory.Error,key:"Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_access_2423",message:"Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member accessor."},Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property:{code:2424,category:e.DiagnosticCategory.Error,key:"Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_proper_2424",message:"Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member property."},Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function:{code:2425,category:e.DiagnosticCategory.Error,key:"Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_functi_2425",message:"Class '{0}' defines instance member property '{1}', but extended class '{2}' defines it as instance member function."},Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function:{code:2426,category:e.DiagnosticCategory.Error,key:"Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_functi_2426",message:"Class '{0}' defines instance member accessor '{1}', but extended class '{2}' defines it as instance member function."},Interface_name_cannot_be_0:{code:2427,category:e.DiagnosticCategory.Error,key:"Interface_name_cannot_be_0_2427",message:"Interface name cannot be '{0}'"},All_declarations_of_0_must_have_identical_type_parameters:{code:2428,category:e.DiagnosticCategory.Error,key:"All_declarations_of_0_must_have_identical_type_parameters_2428",message:"All declarations of '{0}' must have identical type parameters."},Interface_0_incorrectly_extends_interface_1:{code:2430,category:e.DiagnosticCategory.Error,key:"Interface_0_incorrectly_extends_interface_1_2430",message:"Interface '{0}' incorrectly extends interface '{1}'."},Enum_name_cannot_be_0:{code:2431,category:e.DiagnosticCategory.Error,key:"Enum_name_cannot_be_0_2431",message:"Enum name cannot be '{0}'"},In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element:{code:2432,category:e.DiagnosticCategory.Error,key:"In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enu_2432",message:"In an enum with multiple declarations, only one declaration can omit an initializer for its first enum element."},A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged:{code:2433,category:e.DiagnosticCategory.Error,key:"A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merg_2433",message:"A namespace declaration cannot be in a different file from a class or function with which it is merged"},A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged:{code:2434,category:e.DiagnosticCategory.Error,key:"A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged_2434",message:"A namespace declaration cannot be located prior to a class or function with which it is merged"},Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces:{code:2435,category:e.DiagnosticCategory.Error,key:"Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces_2435",message:"Ambient modules cannot be nested in other modules or namespaces."},Ambient_module_declaration_cannot_specify_relative_module_name:{code:2436,category:e.DiagnosticCategory.Error,key:"Ambient_module_declaration_cannot_specify_relative_module_name_2436",message:"Ambient module declaration cannot specify relative module name."},Module_0_is_hidden_by_a_local_declaration_with_the_same_name:{code:2437,category:e.DiagnosticCategory.Error,key:"Module_0_is_hidden_by_a_local_declaration_with_the_same_name_2437",message:"Module '{0}' is hidden by a local declaration with the same name"},Import_name_cannot_be_0:{code:2438,category:e.DiagnosticCategory.Error,key:"Import_name_cannot_be_0_2438",message:"Import name cannot be '{0}'"},Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relative_module_name:{code:2439,category:e.DiagnosticCategory.Error,key:"Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relati_2439",message:"Import or export declaration in an ambient module declaration cannot reference module through relative module name."},Import_declaration_conflicts_with_local_declaration_of_0:{code:2440,category:e.DiagnosticCategory.Error,key:"Import_declaration_conflicts_with_local_declaration_of_0_2440",message:"Import declaration conflicts with local declaration of '{0}'"},Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module:{code:2441,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_2441",message:"Duplicate identifier '{0}'. Compiler reserves name '{1}' in top level scope of a module."},Types_have_separate_declarations_of_a_private_property_0:{code:2442,category:e.DiagnosticCategory.Error,key:"Types_have_separate_declarations_of_a_private_property_0_2442",message:"Types have separate declarations of a private property '{0}'."},Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2:{code:2443,category:e.DiagnosticCategory.Error,key:"Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2_2443",message:"Property '{0}' is protected but type '{1}' is not a class derived from '{2}'."},Property_0_is_protected_in_type_1_but_public_in_type_2:{code:2444,category:e.DiagnosticCategory.Error,key:"Property_0_is_protected_in_type_1_but_public_in_type_2_2444",message:"Property '{0}' is protected in type '{1}' but public in type '{2}'."},Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses:{code:2445,category:e.DiagnosticCategory.Error,key:"Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses_2445",message:"Property '{0}' is protected and only accessible within class '{1}' and its subclasses."},Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1:{code:2446,category:e.DiagnosticCategory.Error,key:"Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1_2446",message:"Property '{0}' is protected and only accessible through an instance of class '{1}'."},The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead:{code:2447,category:e.DiagnosticCategory.Error,key:"The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead_2447",message:"The '{0}' operator is not allowed for boolean types. Consider using '{1}' instead."},Block_scoped_variable_0_used_before_its_declaration:{code:2448,category:e.DiagnosticCategory.Error,key:"Block_scoped_variable_0_used_before_its_declaration_2448",message:"Block-scoped variable '{0}' used before its declaration."},The_operand_of_an_increment_or_decrement_operator_cannot_be_a_constant_or_a_read_only_property:{code:2449,category:e.DiagnosticCategory.Error,key:"The_operand_of_an_increment_or_decrement_operator_cannot_be_a_constant_or_a_read_only_property_2449",message:"The operand of an increment or decrement operator cannot be a constant or a read-only property."},Left_hand_side_of_assignment_expression_cannot_be_a_constant_or_a_read_only_property:{code:2450,category:e.DiagnosticCategory.Error,key:"Left_hand_side_of_assignment_expression_cannot_be_a_constant_or_a_read_only_property_2450",message:"Left-hand side of assignment expression cannot be a constant or a read-only property."},Cannot_redeclare_block_scoped_variable_0:{code:2451,category:e.DiagnosticCategory.Error,key:"Cannot_redeclare_block_scoped_variable_0_2451",message:"Cannot redeclare block-scoped variable '{0}'."},An_enum_member_cannot_have_a_numeric_name:{code:2452,category:e.DiagnosticCategory.Error,key:"An_enum_member_cannot_have_a_numeric_name_2452",message:"An enum member cannot have a numeric name."},The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly:{code:2453,category:e.DiagnosticCategory.Error,key:"The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_typ_2453",message:"The type argument for type parameter '{0}' cannot be inferred from the usage. Consider specifying the type arguments explicitly."},Variable_0_is_used_before_being_assigned:{code:2454,category:e.DiagnosticCategory.Error,key:"Variable_0_is_used_before_being_assigned_2454",message:"Variable '{0}' is used before being assigned."},Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0:{code:2455,category:e.DiagnosticCategory.Error,key:"Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0_2455",message:"Type argument candidate '{1}' is not a valid type argument because it is not a supertype of candidate '{0}'."},Type_alias_0_circularly_references_itself:{code:2456,category:e.DiagnosticCategory.Error,key:"Type_alias_0_circularly_references_itself_2456",message:"Type alias '{0}' circularly references itself."},Type_alias_name_cannot_be_0:{code:2457,category:e.DiagnosticCategory.Error,key:"Type_alias_name_cannot_be_0_2457",message:"Type alias name cannot be '{0}'"},An_AMD_module_cannot_have_multiple_name_assignments:{code:2458,category:e.DiagnosticCategory.Error,key:"An_AMD_module_cannot_have_multiple_name_assignments_2458",message:"An AMD module cannot have multiple name assignments."},Type_0_has_no_property_1_and_no_string_index_signature:{code:2459,category:e.DiagnosticCategory.Error,key:"Type_0_has_no_property_1_and_no_string_index_signature_2459",message:"Type '{0}' has no property '{1}' and no string index signature."},Type_0_has_no_property_1:{code:2460,category:e.DiagnosticCategory.Error,key:"Type_0_has_no_property_1_2460",message:"Type '{0}' has no property '{1}'."},Type_0_is_not_an_array_type:{code:2461,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_an_array_type_2461",message:"Type '{0}' is not an array type."},A_rest_element_must_be_last_in_an_array_destructuring_pattern:{code:2462,category:e.DiagnosticCategory.Error,key:"A_rest_element_must_be_last_in_an_array_destructuring_pattern_2462",message:"A rest element must be last in an array destructuring pattern"},A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature:{code:2463,category:e.DiagnosticCategory.Error,key:"A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature_2463",message:"A binding pattern parameter cannot be optional in an implementation signature."},A_computed_property_name_must_be_of_type_string_number_symbol_or_any:{code:2464,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_must_be_of_type_string_number_symbol_or_any_2464",message:"A computed property name must be of type 'string', 'number', 'symbol', or 'any'."},this_cannot_be_referenced_in_a_computed_property_name:{code:2465,category:e.DiagnosticCategory.Error,key:"this_cannot_be_referenced_in_a_computed_property_name_2465",message:"'this' cannot be referenced in a computed property name."},super_cannot_be_referenced_in_a_computed_property_name:{code:2466,category:e.DiagnosticCategory.Error,key:"super_cannot_be_referenced_in_a_computed_property_name_2466",message:"'super' cannot be referenced in a computed property name."},A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type:{code:2467,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type_2467",message:"A computed property name cannot reference a type parameter from its containing type."},Cannot_find_global_value_0:{code:2468,category:e.DiagnosticCategory.Error,key:"Cannot_find_global_value_0_2468",message:"Cannot find global value '{0}'."},The_0_operator_cannot_be_applied_to_type_symbol:{code:2469,category:e.DiagnosticCategory.Error,key:"The_0_operator_cannot_be_applied_to_type_symbol_2469",message:"The '{0}' operator cannot be applied to type 'symbol'."},Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object:{code:2470,category:e.DiagnosticCategory.Error,key:"Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object_2470",message:"'Symbol' reference does not refer to the global Symbol constructor object."},A_computed_property_name_of_the_form_0_must_be_of_type_symbol:{code:2471,category:e.DiagnosticCategory.Error,key:"A_computed_property_name_of_the_form_0_must_be_of_type_symbol_2471",message:"A computed property name of the form '{0}' must be of type 'symbol'."},Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher:{code:2472,category:e.DiagnosticCategory.Error,key:"Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher_2472",message:"Spread operator in 'new' expressions is only available when targeting ECMAScript 5 and higher."},Enum_declarations_must_all_be_const_or_non_const:{code:2473,category:e.DiagnosticCategory.Error,key:"Enum_declarations_must_all_be_const_or_non_const_2473",message:"Enum declarations must all be const or non-const."},In_const_enum_declarations_member_initializer_must_be_constant_expression:{code:2474,category:e.DiagnosticCategory.Error,key:"In_const_enum_declarations_member_initializer_must_be_constant_expression_2474",message:"In 'const' enum declarations member initializer must be constant expression."},const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment:{code:2475,category:e.DiagnosticCategory.Error,key:"const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_im_2475",message:"'const' enums can only be used in property or index access expressions or the right hand side of an import declaration or export assignment."},A_const_enum_member_can_only_be_accessed_using_a_string_literal:{code:2476,category:e.DiagnosticCategory.Error,key:"A_const_enum_member_can_only_be_accessed_using_a_string_literal_2476",message:"A const enum member can only be accessed using a string literal."},const_enum_member_initializer_was_evaluated_to_a_non_finite_value:{code:2477,category:e.DiagnosticCategory.Error,key:"const_enum_member_initializer_was_evaluated_to_a_non_finite_value_2477",message:"'const' enum member initializer was evaluated to a non-finite value."},const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN:{code:2478,category:e.DiagnosticCategory.Error,key:"const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN_2478",message:"'const' enum member initializer was evaluated to disallowed value 'NaN'."},Property_0_does_not_exist_on_const_enum_1:{code:2479,category:e.DiagnosticCategory.Error,key:"Property_0_does_not_exist_on_const_enum_1_2479",message:"Property '{0}' does not exist on 'const' enum '{1}'."},let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations:{code:2480,category:e.DiagnosticCategory.Error,key:"let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations_2480",message:"'let' is not allowed to be used as a name in 'let' or 'const' declarations."},Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1:{code:2481,category:e.DiagnosticCategory.Error,key:"Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1_2481",message:"Cannot initialize outer scoped variable '{0}' in the same scope as block scoped declaration '{1}'."},The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation:{code:2483,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation_2483",message:"The left-hand side of a 'for...of' statement cannot use a type annotation."},Export_declaration_conflicts_with_exported_declaration_of_0:{code:2484,category:e.DiagnosticCategory.Error,key:"Export_declaration_conflicts_with_exported_declaration_of_0_2484",message:"Export declaration conflicts with exported declaration of '{0}'"},The_left_hand_side_of_a_for_of_statement_cannot_be_a_constant_or_a_read_only_property:{code:2485,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_a_for_of_statement_cannot_be_a_constant_or_a_read_only_property_2485",message:"The left-hand side of a 'for...of' statement cannot be a constant or a read-only property."},The_left_hand_side_of_a_for_in_statement_cannot_be_a_constant_or_a_read_only_property:{code:2486,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_a_for_in_statement_cannot_be_a_constant_or_a_read_only_property_2486",message:"The left-hand side of a 'for...in' statement cannot be a constant or a read-only property."},Invalid_left_hand_side_in_for_of_statement:{
code:2487,category:e.DiagnosticCategory.Error,key:"Invalid_left_hand_side_in_for_of_statement_2487",message:"Invalid left-hand side in 'for...of' statement."},Type_must_have_a_Symbol_iterator_method_that_returns_an_iterator:{code:2488,category:e.DiagnosticCategory.Error,key:"Type_must_have_a_Symbol_iterator_method_that_returns_an_iterator_2488",message:"Type must have a '[Symbol.iterator]()' method that returns an iterator."},An_iterator_must_have_a_next_method:{code:2489,category:e.DiagnosticCategory.Error,key:"An_iterator_must_have_a_next_method_2489",message:"An iterator must have a 'next()' method."},The_type_returned_by_the_next_method_of_an_iterator_must_have_a_value_property:{code:2490,category:e.DiagnosticCategory.Error,key:"The_type_returned_by_the_next_method_of_an_iterator_must_have_a_value_property_2490",message:"The type returned by the 'next()' method of an iterator must have a 'value' property."},The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern:{code:2491,category:e.DiagnosticCategory.Error,key:"The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern_2491",message:"The left-hand side of a 'for...in' statement cannot be a destructuring pattern."},Cannot_redeclare_identifier_0_in_catch_clause:{code:2492,category:e.DiagnosticCategory.Error,key:"Cannot_redeclare_identifier_0_in_catch_clause_2492",message:"Cannot redeclare identifier '{0}' in catch clause"},Tuple_type_0_with_length_1_cannot_be_assigned_to_tuple_with_length_2:{code:2493,category:e.DiagnosticCategory.Error,key:"Tuple_type_0_with_length_1_cannot_be_assigned_to_tuple_with_length_2_2493",message:"Tuple type '{0}' with length '{1}' cannot be assigned to tuple with length '{2}'."},Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher:{code:2494,category:e.DiagnosticCategory.Error,key:"Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher_2494",message:"Using a string in a 'for...of' statement is only supported in ECMAScript 5 and higher."},Type_0_is_not_an_array_type_or_a_string_type:{code:2495,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_an_array_type_or_a_string_type_2495",message:"Type '{0}' is not an array type or a string type."},The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_standard_function_expression:{code:2496,category:e.DiagnosticCategory.Error,key:"The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_stand_2496",message:"The 'arguments' object cannot be referenced in an arrow function in ES3 and ES5. Consider using a standard function expression."},Module_0_resolves_to_a_non_module_entity_and_cannot_be_imported_using_this_construct:{code:2497,category:e.DiagnosticCategory.Error,key:"Module_0_resolves_to_a_non_module_entity_and_cannot_be_imported_using_this_construct_2497",message:"Module '{0}' resolves to a non-module entity and cannot be imported using this construct."},Module_0_uses_export_and_cannot_be_used_with_export_Asterisk:{code:2498,category:e.DiagnosticCategory.Error,key:"Module_0_uses_export_and_cannot_be_used_with_export_Asterisk_2498",message:"Module '{0}' uses 'export =' and cannot be used with 'export *'."},An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments:{code:2499,category:e.DiagnosticCategory.Error,key:"An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments_2499",message:"An interface can only extend an identifier/qualified-name with optional type arguments."},A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments:{code:2500,category:e.DiagnosticCategory.Error,key:"A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments_2500",message:"A class can only implement an identifier/qualified-name with optional type arguments."},A_rest_element_cannot_contain_a_binding_pattern:{code:2501,category:e.DiagnosticCategory.Error,key:"A_rest_element_cannot_contain_a_binding_pattern_2501",message:"A rest element cannot contain a binding pattern."},_0_is_referenced_directly_or_indirectly_in_its_own_type_annotation:{code:2502,category:e.DiagnosticCategory.Error,key:"_0_is_referenced_directly_or_indirectly_in_its_own_type_annotation_2502",message:"'{0}' is referenced directly or indirectly in its own type annotation."},Cannot_find_namespace_0:{code:2503,category:e.DiagnosticCategory.Error,key:"Cannot_find_namespace_0_2503",message:"Cannot find namespace '{0}'."},No_best_common_type_exists_among_yield_expressions:{code:2504,category:e.DiagnosticCategory.Error,key:"No_best_common_type_exists_among_yield_expressions_2504",message:"No best common type exists among yield expressions."},A_generator_cannot_have_a_void_type_annotation:{code:2505,category:e.DiagnosticCategory.Error,key:"A_generator_cannot_have_a_void_type_annotation_2505",message:"A generator cannot have a 'void' type annotation."},_0_is_referenced_directly_or_indirectly_in_its_own_base_expression:{code:2506,category:e.DiagnosticCategory.Error,key:"_0_is_referenced_directly_or_indirectly_in_its_own_base_expression_2506",message:"'{0}' is referenced directly or indirectly in its own base expression."},Type_0_is_not_a_constructor_function_type:{code:2507,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_a_constructor_function_type_2507",message:"Type '{0}' is not a constructor function type."},No_base_constructor_has_the_specified_number_of_type_arguments:{code:2508,category:e.DiagnosticCategory.Error,key:"No_base_constructor_has_the_specified_number_of_type_arguments_2508",message:"No base constructor has the specified number of type arguments."},Base_constructor_return_type_0_is_not_a_class_or_interface_type:{code:2509,category:e.DiagnosticCategory.Error,key:"Base_constructor_return_type_0_is_not_a_class_or_interface_type_2509",message:"Base constructor return type '{0}' is not a class or interface type."},Base_constructors_must_all_have_the_same_return_type:{code:2510,category:e.DiagnosticCategory.Error,key:"Base_constructors_must_all_have_the_same_return_type_2510",message:"Base constructors must all have the same return type."},Cannot_create_an_instance_of_the_abstract_class_0:{code:2511,category:e.DiagnosticCategory.Error,key:"Cannot_create_an_instance_of_the_abstract_class_0_2511",message:"Cannot create an instance of the abstract class '{0}'."},Overload_signatures_must_all_be_abstract_or_non_abstract:{code:2512,category:e.DiagnosticCategory.Error,key:"Overload_signatures_must_all_be_abstract_or_non_abstract_2512",message:"Overload signatures must all be abstract or non-abstract."},Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression:{code:2513,category:e.DiagnosticCategory.Error,key:"Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression_2513",message:"Abstract method '{0}' in class '{1}' cannot be accessed via super expression."},Classes_containing_abstract_methods_must_be_marked_abstract:{code:2514,category:e.DiagnosticCategory.Error,key:"Classes_containing_abstract_methods_must_be_marked_abstract_2514",message:"Classes containing abstract methods must be marked abstract."},Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2:{code:2515,category:e.DiagnosticCategory.Error,key:"Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2_2515",message:"Non-abstract class '{0}' does not implement inherited abstract member '{1}' from class '{2}'."},All_declarations_of_an_abstract_method_must_be_consecutive:{code:2516,category:e.DiagnosticCategory.Error,key:"All_declarations_of_an_abstract_method_must_be_consecutive_2516",message:"All declarations of an abstract method must be consecutive."},Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type:{code:2517,category:e.DiagnosticCategory.Error,key:"Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type_2517",message:"Cannot assign an abstract constructor type to a non-abstract constructor type."},A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard:{code:2518,category:e.DiagnosticCategory.Error,key:"A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard_2518",message:"A 'this'-based type guard is not compatible with a parameter-based type guard."},Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions:{code:2520,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions_2520",message:"Duplicate identifier '{0}'. Compiler uses declaration '{1}' to support async functions."},Expression_resolves_to_variable_declaration_0_that_compiler_uses_to_support_async_functions:{code:2521,category:e.DiagnosticCategory.Error,key:"Expression_resolves_to_variable_declaration_0_that_compiler_uses_to_support_async_functions_2521",message:"Expression resolves to variable declaration '{0}' that compiler uses to support async functions."},The_arguments_object_cannot_be_referenced_in_an_async_arrow_function_Consider_using_a_standard_async_function_expression:{code:2522,category:e.DiagnosticCategory.Error,key:"The_arguments_object_cannot_be_referenced_in_an_async_arrow_function_Consider_using_a_standard_async_2522",message:"The 'arguments' object cannot be referenced in an async arrow function. Consider using a standard async function expression."},yield_expressions_cannot_be_used_in_a_parameter_initializer:{code:2523,category:e.DiagnosticCategory.Error,key:"yield_expressions_cannot_be_used_in_a_parameter_initializer_2523",message:"'yield' expressions cannot be used in a parameter initializer."},await_expressions_cannot_be_used_in_a_parameter_initializer:{code:2524,category:e.DiagnosticCategory.Error,key:"await_expressions_cannot_be_used_in_a_parameter_initializer_2524",message:"'await' expressions cannot be used in a parameter initializer."},Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value:{code:2525,category:e.DiagnosticCategory.Error,key:"Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value_2525",message:"Initializer provides no value for this binding element and the binding element has no default value."},A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface:{code:2526,category:e.DiagnosticCategory.Error,key:"A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface_2526",message:"A 'this' type is available only in a non-static member of a class or interface."},The_inferred_type_of_0_references_an_inaccessible_this_type_A_type_annotation_is_necessary:{code:2527,category:e.DiagnosticCategory.Error,key:"The_inferred_type_of_0_references_an_inaccessible_this_type_A_type_annotation_is_necessary_2527",message:"The inferred type of '{0}' references an inaccessible 'this' type. A type annotation is necessary."},A_module_cannot_have_multiple_default_exports:{code:2528,category:e.DiagnosticCategory.Error,key:"A_module_cannot_have_multiple_default_exports_2528",message:"A module cannot have multiple default exports."},Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_functions:{code:2529,category:e.DiagnosticCategory.Error,key:"Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_func_2529",message:"Duplicate identifier '{0}'. Compiler reserves name '{1}' in top level scope of a module containing async functions."},Property_0_is_incompatible_with_index_signature:{code:2530,category:e.DiagnosticCategory.Error,key:"Property_0_is_incompatible_with_index_signature_2530",message:"Property '{0}' is incompatible with index signature."},Object_is_possibly_null:{code:2531,category:e.DiagnosticCategory.Error,key:"Object_is_possibly_null_2531",message:"Object is possibly 'null'."},Object_is_possibly_undefined:{code:2532,category:e.DiagnosticCategory.Error,key:"Object_is_possibly_undefined_2532",message:"Object is possibly 'undefined'."},Object_is_possibly_null_or_undefined:{code:2533,category:e.DiagnosticCategory.Error,key:"Object_is_possibly_null_or_undefined_2533",message:"Object is possibly 'null' or 'undefined'."},A_function_returning_never_cannot_have_a_reachable_end_point:{code:2534,category:e.DiagnosticCategory.Error,key:"A_function_returning_never_cannot_have_a_reachable_end_point_2534",message:"A function returning 'never' cannot have a reachable end point."},Enum_type_0_has_members_with_initializers_that_are_not_literals:{code:2535,category:e.DiagnosticCategory.Error,key:"Enum_type_0_has_members_with_initializers_that_are_not_literals_2535",message:"Enum type '{0}' has members with initializers that are not literals."},JSX_element_attributes_type_0_may_not_be_a_union_type:{code:2600,category:e.DiagnosticCategory.Error,key:"JSX_element_attributes_type_0_may_not_be_a_union_type_2600",message:"JSX element attributes type '{0}' may not be a union type."},The_return_type_of_a_JSX_element_constructor_must_return_an_object_type:{code:2601,category:e.DiagnosticCategory.Error,key:"The_return_type_of_a_JSX_element_constructor_must_return_an_object_type_2601",message:"The return type of a JSX element constructor must return an object type."},JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist:{code:2602,category:e.DiagnosticCategory.Error,key:"JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist_2602",message:"JSX element implicitly has type 'any' because the global type 'JSX.Element' does not exist."},Property_0_in_type_1_is_not_assignable_to_type_2:{code:2603,category:e.DiagnosticCategory.Error,key:"Property_0_in_type_1_is_not_assignable_to_type_2_2603",message:"Property '{0}' in type '{1}' is not assignable to type '{2}'"},JSX_element_type_0_does_not_have_any_construct_or_call_signatures:{code:2604,category:e.DiagnosticCategory.Error,key:"JSX_element_type_0_does_not_have_any_construct_or_call_signatures_2604",message:"JSX element type '{0}' does not have any construct or call signatures."},JSX_element_type_0_is_not_a_constructor_function_for_JSX_elements:{code:2605,category:e.DiagnosticCategory.Error,key:"JSX_element_type_0_is_not_a_constructor_function_for_JSX_elements_2605",message:"JSX element type '{0}' is not a constructor function for JSX elements."},Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property:{code:2606,category:e.DiagnosticCategory.Error,key:"Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property_2606",message:"Property '{0}' of JSX spread attribute is not assignable to target property."},JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property:{code:2607,category:e.DiagnosticCategory.Error,key:"JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property_2607",message:"JSX element class does not support attributes because it does not have a '{0}' property"},The_global_type_JSX_0_may_not_have_more_than_one_property:{code:2608,category:e.DiagnosticCategory.Error,key:"The_global_type_JSX_0_may_not_have_more_than_one_property_2608",message:"The global type 'JSX.{0}' may not have more than one property"},Cannot_emit_namespaced_JSX_elements_in_React:{code:2650,category:e.DiagnosticCategory.Error,key:"Cannot_emit_namespaced_JSX_elements_in_React_2650",message:"Cannot emit namespaced JSX elements in React"},A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums:{code:2651,category:e.DiagnosticCategory.Error,key:"A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_memb_2651",message:"A member initializer in a enum declaration cannot reference members declared after it, including members defined in other enums."},Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_default_0_declaration_instead:{code:2652,category:e.DiagnosticCategory.Error,key:"Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_d_2652",message:"Merged declaration '{0}' cannot include a default export declaration. Consider adding a separate 'export default {0}' declaration instead."},Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1:{code:2653,category:e.DiagnosticCategory.Error,key:"Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1_2653",message:"Non-abstract class expression does not implement inherited abstract member '{0}' from class '{1}'."},Exported_external_package_typings_file_cannot_contain_tripleslash_references_Please_contact_the_package_author_to_update_the_package_definition:{code:2654,category:e.DiagnosticCategory.Error,key:"Exported_external_package_typings_file_cannot_contain_tripleslash_references_Please_contact_the_pack_2654",message:"Exported external package typings file cannot contain tripleslash references. Please contact the package author to update the package definition."},Exported_external_package_typings_file_0_is_not_a_module_Please_contact_the_package_author_to_update_the_package_definition:{code:2656,category:e.DiagnosticCategory.Error,key:"Exported_external_package_typings_file_0_is_not_a_module_Please_contact_the_package_author_to_update_2656",message:"Exported external package typings file '{0}' is not a module. Please contact the package author to update the package definition."},JSX_expressions_must_have_one_parent_element:{code:2657,category:e.DiagnosticCategory.Error,key:"JSX_expressions_must_have_one_parent_element_2657",message:"JSX expressions must have one parent element"},Type_0_provides_no_match_for_the_signature_1:{code:2658,category:e.DiagnosticCategory.Error,key:"Type_0_provides_no_match_for_the_signature_1_2658",message:"Type '{0}' provides no match for the signature '{1}'"},super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_higher:{code:2659,category:e.DiagnosticCategory.Error,key:"super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_highe_2659",message:"'super' is only allowed in members of object literal expressions when option 'target' is 'ES2015' or higher."},super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions:{code:2660,category:e.DiagnosticCategory.Error,key:"super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions_2660",message:"'super' can only be referenced in members of derived classes or object literal expressions."},Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module:{code:2661,category:e.DiagnosticCategory.Error,key:"Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module_2661",message:"Cannot export '{0}'. Only local declarations can be exported from a module."},Cannot_find_name_0_Did_you_mean_the_static_member_1_0:{code:2662,category:e.DiagnosticCategory.Error,key:"Cannot_find_name_0_Did_you_mean_the_static_member_1_0_2662",message:"Cannot find name '{0}'. Did you mean the static member '{1}.{0}'?"},Cannot_find_name_0_Did_you_mean_the_instance_member_this_0:{code:2663,category:e.DiagnosticCategory.Error,key:"Cannot_find_name_0_Did_you_mean_the_instance_member_this_0_2663",message:"Cannot find name '{0}'. Did you mean the instance member 'this.{0}'?"},Invalid_module_name_in_augmentation_module_0_cannot_be_found:{code:2664,category:e.DiagnosticCategory.Error,key:"Invalid_module_name_in_augmentation_module_0_cannot_be_found_2664",message:"Invalid module name in augmentation, module '{0}' cannot be found."},Exports_and_export_assignments_are_not_permitted_in_module_augmentations:{code:2666,category:e.DiagnosticCategory.Error,key:"Exports_and_export_assignments_are_not_permitted_in_module_augmentations_2666",message:"Exports and export assignments are not permitted in module augmentations."},Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_module:{code:2667,category:e.DiagnosticCategory.Error,key:"Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_mod_2667",message:"Imports are not permitted in module augmentations. Consider moving them to the enclosing external module."},export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always_visible:{code:2668,category:e.DiagnosticCategory.Error,key:"export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always__2668",message:"'export' modifier cannot be applied to ambient modules and module augmentations since they are always visible."},Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_declarations:{code:2669,category:e.DiagnosticCategory.Error,key:"Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_2669",message:"Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."},Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambient_context:{code:2670,category:e.DiagnosticCategory.Error,key:"Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambien_2670",message:"Augmentations for the global scope should have 'declare' modifier unless they appear in already ambient context."},Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity:{code:2671,category:e.DiagnosticCategory.Error,key:"Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity_2671",message:"Cannot augment module '{0}' because it resolves to a non-module entity."},Cannot_assign_a_0_constructor_type_to_a_1_constructor_type:{code:2672,category:e.DiagnosticCategory.Error,key:"Cannot_assign_a_0_constructor_type_to_a_1_constructor_type_2672",message:"Cannot assign a '{0}' constructor type to a '{1}' constructor type."},Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration:{code:2673,category:e.DiagnosticCategory.Error,key:"Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration_2673",message:"Constructor of class '{0}' is private and only accessible within the class declaration."},Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration:{code:2674,category:e.DiagnosticCategory.Error,key:"Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration_2674",message:"Constructor of class '{0}' is protected and only accessible within the class declaration."},Cannot_extend_a_class_0_Class_constructor_is_marked_as_private:{code:2675,category:e.DiagnosticCategory.Error,key:"Cannot_extend_a_class_0_Class_constructor_is_marked_as_private_2675",message:"Cannot extend a class '{0}'. Class constructor is marked as private."},Accessors_must_both_be_abstract_or_non_abstract:{code:2676,category:e.DiagnosticCategory.Error,key:"Accessors_must_both_be_abstract_or_non_abstract_2676",message:"Accessors must both be abstract or non-abstract."},A_type_predicate_s_type_must_be_assignable_to_its_parameter_s_type:{code:2677,category:e.DiagnosticCategory.Error,key:"A_type_predicate_s_type_must_be_assignable_to_its_parameter_s_type_2677",message:"A type predicate's type must be assignable to its parameter's type."},Type_0_is_not_comparable_to_type_1:{code:2678,category:e.DiagnosticCategory.Error,key:"Type_0_is_not_comparable_to_type_1_2678",message:"Type '{0}' is not comparable to type '{1}'."},A_function_that_is_called_with_the_new_keyword_cannot_have_a_this_type_that_is_void:{code:2679,category:e.DiagnosticCategory.Error,key:"A_function_that_is_called_with_the_new_keyword_cannot_have_a_this_type_that_is_void_2679",message:"A function that is called with the 'new' keyword cannot have a 'this' type that is 'void'."},A_this_parameter_must_be_the_first_parameter:{code:2680,category:e.DiagnosticCategory.Error,key:"A_this_parameter_must_be_the_first_parameter_2680",message:"A 'this' parameter must be the first parameter."},A_constructor_cannot_have_a_this_parameter:{code:2681,category:e.DiagnosticCategory.Error,key:"A_constructor_cannot_have_a_this_parameter_2681",message:"A constructor cannot have a 'this' parameter."},get_and_set_accessor_must_have_the_same_this_type:{code:2682,category:e.DiagnosticCategory.Error,key:"get_and_set_accessor_must_have_the_same_this_type_2682",message:"'get' and 'set' accessor must have the same 'this' type."},this_implicitly_has_type_any_because_it_does_not_have_a_type_annotation:{code:2683,category:e.DiagnosticCategory.Error,key:"this_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_2683",message:"'this' implicitly has type 'any' because it does not have a type annotation."},The_this_context_of_type_0_is_not_assignable_to_method_s_this_of_type_1:{code:2684,category:e.DiagnosticCategory.Error,key:"The_this_context_of_type_0_is_not_assignable_to_method_s_this_of_type_1_2684",message:"The 'this' context of type '{0}' is not assignable to method's 'this' of type '{1}'."},The_this_types_of_each_signature_are_incompatible:{code:2685,category:e.DiagnosticCategory.Error,key:"The_this_types_of_each_signature_are_incompatible_2685",message:"The 'this' types of each signature are incompatible."},Identifier_0_must_be_imported_from_a_module:{code:2686,category:e.DiagnosticCategory.Error,key:"Identifier_0_must_be_imported_from_a_module_2686",message:"Identifier '{0}' must be imported from a module"},All_declarations_of_0_must_have_identical_modifiers:{code:2687,category:e.DiagnosticCategory.Error,key:"All_declarations_of_0_must_have_identical_modifiers_2687",message:"All declarations of '{0}' must have identical modifiers."},Cannot_find_type_definition_file_for_0:{code:2688,category:e.DiagnosticCategory.Error,key:"Cannot_find_type_definition_file_for_0_2688",message:"Cannot find type definition file for '{0}'."},Cannot_extend_an_interface_0_Did_you_mean_implements:{code:2689,category:e.DiagnosticCategory.Error,key:"Cannot_extend_an_interface_0_Did_you_mean_implements_2689",message:"Cannot extend an interface '{0}'. Did you mean 'implements'?"},A_class_must_be_declared_after_its_base_class:{code:2690,category:e.DiagnosticCategory.Error,key:"A_class_must_be_declared_after_its_base_class_2690",message:"A class must be declared after its base class."},An_import_path_cannot_end_with_a_0_extension_Consider_importing_1_instead:{code:2691,category:e.DiagnosticCategory.Error,key:"An_import_path_cannot_end_with_a_0_extension_Consider_importing_1_instead_2691",message:"An import path cannot end with a '{0}' extension. Consider importing '{1}' instead."},_0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible:{code:2692,category:e.DiagnosticCategory.Error,key:"_0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible_2692",message:"'{0}' is a primitive, but '{1}' is a wrapper object. Prefer using '{0}' when possible."},Import_declaration_0_is_using_private_name_1:{code:4e3,category:e.DiagnosticCategory.Error,key:"Import_declaration_0_is_using_private_name_1_4000",message:"Import declaration '{0}' is using private name '{1}'."},Type_parameter_0_of_exported_class_has_or_is_using_private_name_1:{code:4002,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_exported_class_has_or_is_using_private_name_1_4002",message:"Type parameter '{0}' of exported class has or is using private name '{1}'."},Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1:{code:4004,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1_4004",message:"Type parameter '{0}' of exported interface has or is using private name '{1}'."},Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1:{code:4006,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1_4006",message:"Type parameter '{0}' of constructor signature from exported interface has or is using private name '{1}'."},Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1:{code:4008,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1_4008",message:"Type parameter '{0}' of call signature from exported interface has or is using private name '{1}'."},Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1:{code:4010,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1_4010",message:"Type parameter '{0}' of public static method from exported class has or is using private name '{1}'."},Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1:{code:4012,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1_4012",message:"Type parameter '{0}' of public method from exported class has or is using private name '{1}'."},Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1:{code:4014,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1_4014",message:"Type parameter '{0}' of method from exported interface has or is using private name '{1}'."},Type_parameter_0_of_exported_function_has_or_is_using_private_name_1:{code:4016,category:e.DiagnosticCategory.Error,key:"Type_parameter_0_of_exported_function_has_or_is_using_private_name_1_4016",message:"Type parameter '{0}' of exported function has or is using private name '{1}'."},Implements_clause_of_exported_class_0_has_or_is_using_private_name_1:{code:4019,category:e.DiagnosticCategory.Error,key:"Implements_clause_of_exported_class_0_has_or_is_using_private_name_1_4019",message:"Implements clause of exported class '{0}' has or is using private name '{1}'."},Extends_clause_of_exported_class_0_has_or_is_using_private_name_1:{code:4020,category:e.DiagnosticCategory.Error,key:"Extends_clause_of_exported_class_0_has_or_is_using_private_name_1_4020",message:"Extends clause of exported class '{0}' has or is using private name '{1}'."},Extends_clause_of_exported_interface_0_has_or_is_using_private_name_1:{code:4022,category:e.DiagnosticCategory.Error,key:"Extends_clause_of_exported_interface_0_has_or_is_using_private_name_1_4022",message:"Extends clause of exported interface '{0}' has or is using private name '{1}'."},Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4023,category:e.DiagnosticCategory.Error,key:"Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named_4023",message:"Exported variable '{0}' has or is using name '{1}' from external module {2} but cannot be named."},Exported_variable_0_has_or_is_using_name_1_from_private_module_2:{code:4024,category:e.DiagnosticCategory.Error,key:"Exported_variable_0_has_or_is_using_name_1_from_private_module_2_4024",message:"Exported variable '{0}' has or is using name '{1}' from private module '{2}'."},Exported_variable_0_has_or_is_using_private_name_1:{code:4025,category:e.DiagnosticCategory.Error,key:"Exported_variable_0_has_or_is_using_private_name_1_4025",message:"Exported variable '{0}' has or is using private name '{1}'."},Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4026,category:e.DiagnosticCategory.Error,key:"Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot__4026",message:"Public static property '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named."
},Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4027,category:e.DiagnosticCategory.Error,key:"Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2_4027",message:"Public static property '{0}' of exported class has or is using name '{1}' from private module '{2}'."},Public_static_property_0_of_exported_class_has_or_is_using_private_name_1:{code:4028,category:e.DiagnosticCategory.Error,key:"Public_static_property_0_of_exported_class_has_or_is_using_private_name_1_4028",message:"Public static property '{0}' of exported class has or is using private name '{1}'."},Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4029,category:e.DiagnosticCategory.Error,key:"Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_name_4029",message:"Public property '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named."},Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4030,category:e.DiagnosticCategory.Error,key:"Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2_4030",message:"Public property '{0}' of exported class has or is using name '{1}' from private module '{2}'."},Public_property_0_of_exported_class_has_or_is_using_private_name_1:{code:4031,category:e.DiagnosticCategory.Error,key:"Public_property_0_of_exported_class_has_or_is_using_private_name_1_4031",message:"Public property '{0}' of exported class has or is using private name '{1}'."},Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2:{code:4032,category:e.DiagnosticCategory.Error,key:"Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2_4032",message:"Property '{0}' of exported interface has or is using name '{1}' from private module '{2}'."},Property_0_of_exported_interface_has_or_is_using_private_name_1:{code:4033,category:e.DiagnosticCategory.Error,key:"Property_0_of_exported_interface_has_or_is_using_private_name_1_4033",message:"Property '{0}' of exported interface has or is using private name '{1}'."},Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4034,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_name_1_from_private_4034",message:"Parameter '{0}' of public static property setter from exported class has or is using name '{1}' from private module '{2}'."},Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_name_1:{code:4035,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_name_1_4035",message:"Parameter '{0}' of public static property setter from exported class has or is using private name '{1}'."},Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4036,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_4036",message:"Parameter '{0}' of public property setter from exported class has or is using name '{1}' from private module '{2}'."},Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_name_1:{code:4037,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_name_1_4037",message:"Parameter '{0}' of public property setter from exported class has or is using private name '{1}'."},Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:{code:4038,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_externa_4038",message:"Return type of public static property getter from exported class has or is using name '{0}' from external module {1} but cannot be named."},Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1:{code:4039,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_private_4039",message:"Return type of public static property getter from exported class has or is using name '{0}' from private module '{1}'."},Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_name_0:{code:4040,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_name_0_4040",message:"Return type of public static property getter from exported class has or is using private name '{0}'."},Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:{code:4041,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_external_modul_4041",message:"Return type of public property getter from exported class has or is using name '{0}' from external module {1} but cannot be named."},Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1:{code:4042,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_4042",message:"Return type of public property getter from exported class has or is using name '{0}' from private module '{1}'."},Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_name_0:{code:4043,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_name_0_4043",message:"Return type of public property getter from exported class has or is using private name '{0}'."},Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1:{code:4044,category:e.DiagnosticCategory.Error,key:"Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_mod_4044",message:"Return type of constructor signature from exported interface has or is using name '{0}' from private module '{1}'."},Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0:{code:4045,category:e.DiagnosticCategory.Error,key:"Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0_4045",message:"Return type of constructor signature from exported interface has or is using private name '{0}'."},Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1:{code:4046,category:e.DiagnosticCategory.Error,key:"Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1_4046",message:"Return type of call signature from exported interface has or is using name '{0}' from private module '{1}'."},Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0:{code:4047,category:e.DiagnosticCategory.Error,key:"Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0_4047",message:"Return type of call signature from exported interface has or is using private name '{0}'."},Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1:{code:4048,category:e.DiagnosticCategory.Error,key:"Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1_4048",message:"Return type of index signature from exported interface has or is using name '{0}' from private module '{1}'."},Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0:{code:4049,category:e.DiagnosticCategory.Error,key:"Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0_4049",message:"Return type of index signature from exported interface has or is using private name '{0}'."},Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:{code:4050,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module__4050",message:"Return type of public static method from exported class has or is using name '{0}' from external module {1} but cannot be named."},Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1:{code:4051,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1_4051",message:"Return type of public static method from exported class has or is using name '{0}' from private module '{1}'."},Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0:{code:4052,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0_4052",message:"Return type of public static method from exported class has or is using private name '{0}'."},Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:{code:4053,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_c_4053",message:"Return type of public method from exported class has or is using name '{0}' from external module {1} but cannot be named."},Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1:{code:4054,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1_4054",message:"Return type of public method from exported class has or is using name '{0}' from private module '{1}'."},Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0:{code:4055,category:e.DiagnosticCategory.Error,key:"Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0_4055",message:"Return type of public method from exported class has or is using private name '{0}'."},Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1:{code:4056,category:e.DiagnosticCategory.Error,key:"Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1_4056",message:"Return type of method from exported interface has or is using name '{0}' from private module '{1}'."},Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0:{code:4057,category:e.DiagnosticCategory.Error,key:"Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0_4057",message:"Return type of method from exported interface has or is using private name '{0}'."},Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:{code:4058,category:e.DiagnosticCategory.Error,key:"Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named_4058",message:"Return type of exported function has or is using name '{0}' from external module {1} but cannot be named."},Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1:{code:4059,category:e.DiagnosticCategory.Error,key:"Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1_4059",message:"Return type of exported function has or is using name '{0}' from private module '{1}'."},Return_type_of_exported_function_has_or_is_using_private_name_0:{code:4060,category:e.DiagnosticCategory.Error,key:"Return_type_of_exported_function_has_or_is_using_private_name_0_4060",message:"Return type of exported function has or is using private name '{0}'."},Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4061,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_can_4061",message:"Parameter '{0}' of constructor from exported class has or is using name '{1}' from external module {2} but cannot be named."},Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4062,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2_4062",message:"Parameter '{0}' of constructor from exported class has or is using name '{1}' from private module '{2}'."},Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1:{code:4063,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1_4063",message:"Parameter '{0}' of constructor from exported class has or is using private name '{1}'."},Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2:{code:4064,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_mod_4064",message:"Parameter '{0}' of constructor signature from exported interface has or is using name '{1}' from private module '{2}'."},Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1:{code:4065,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1_4065",message:"Parameter '{0}' of constructor signature from exported interface has or is using private name '{1}'."},Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2:{code:4066,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2_4066",message:"Parameter '{0}' of call signature from exported interface has or is using name '{1}' from private module '{2}'."},Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1:{code:4067,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1_4067",message:"Parameter '{0}' of call signature from exported interface has or is using private name '{1}'."},Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4068,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module__4068",message:"Parameter '{0}' of public static method from exported class has or is using name '{1}' from external module {2} but cannot be named."},Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4069,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2_4069",message:"Parameter '{0}' of public static method from exported class has or is using name '{1}' from private module '{2}'."},Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1:{code:4070,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1_4070",message:"Parameter '{0}' of public static method from exported class has or is using private name '{1}'."},Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4071,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_c_4071",message:"Parameter '{0}' of public method from exported class has or is using name '{1}' from external module {2} but cannot be named."},Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2:{code:4072,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2_4072",message:"Parameter '{0}' of public method from exported class has or is using name '{1}' from private module '{2}'."},Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1:{code:4073,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1_4073",message:"Parameter '{0}' of public method from exported class has or is using private name '{1}'."},Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2:{code:4074,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2_4074",message:"Parameter '{0}' of method from exported interface has or is using name '{1}' from private module '{2}'."},Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1:{code:4075,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1_4075",message:"Parameter '{0}' of method from exported interface has or is using private name '{1}'."},Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:{code:4076,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named_4076",message:"Parameter '{0}' of exported function has or is using name '{1}' from external module {2} but cannot be named."},Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2:{code:4077,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2_4077",message:"Parameter '{0}' of exported function has or is using name '{1}' from private module '{2}'."},Parameter_0_of_exported_function_has_or_is_using_private_name_1:{code:4078,category:e.DiagnosticCategory.Error,key:"Parameter_0_of_exported_function_has_or_is_using_private_name_1_4078",message:"Parameter '{0}' of exported function has or is using private name '{1}'."},Exported_type_alias_0_has_or_is_using_private_name_1:{code:4081,category:e.DiagnosticCategory.Error,key:"Exported_type_alias_0_has_or_is_using_private_name_1_4081",message:"Exported type alias '{0}' has or is using private name '{1}'."},Default_export_of_the_module_has_or_is_using_private_name_0:{code:4082,category:e.DiagnosticCategory.Error,key:"Default_export_of_the_module_has_or_is_using_private_name_0_4082",message:"Default export of the module has or is using private name '{0}'."},Conflicting_definitions_for_0_found_at_1_and_2_Consider_installing_a_specific_version_of_this_library_to_resolve_the_conflict:{code:4090,category:e.DiagnosticCategory.Message,key:"Conflicting_definitions_for_0_found_at_1_and_2_Consider_installing_a_specific_version_of_this_librar_4090",message:"Conflicting definitions for '{0}' found at '{1}' and '{2}'. Consider installing a specific version of this library to resolve the conflict."},The_current_host_does_not_support_the_0_option:{code:5001,category:e.DiagnosticCategory.Error,key:"The_current_host_does_not_support_the_0_option_5001",message:"The current host does not support the '{0}' option."},Cannot_find_the_common_subdirectory_path_for_the_input_files:{code:5009,category:e.DiagnosticCategory.Error,key:"Cannot_find_the_common_subdirectory_path_for_the_input_files_5009",message:"Cannot find the common subdirectory path for the input files."},File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0:{code:5010,category:e.DiagnosticCategory.Error,key:"File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0_5010",message:"File specification cannot end in a recursive directory wildcard ('**'): '{0}'."},File_specification_cannot_contain_multiple_recursive_directory_wildcards_Asterisk_Asterisk_Colon_0:{code:5011,category:e.DiagnosticCategory.Error,key:"File_specification_cannot_contain_multiple_recursive_directory_wildcards_Asterisk_Asterisk_Colon_0_5011",message:"File specification cannot contain multiple recursive directory wildcards ('**'): '{0}'."},Cannot_read_file_0_Colon_1:{code:5012,category:e.DiagnosticCategory.Error,key:"Cannot_read_file_0_Colon_1_5012",message:"Cannot read file '{0}': {1}"},Unsupported_file_encoding:{code:5013,category:e.DiagnosticCategory.Error,key:"Unsupported_file_encoding_5013",message:"Unsupported file encoding."},Failed_to_parse_file_0_Colon_1:{code:5014,category:e.DiagnosticCategory.Error,key:"Failed_to_parse_file_0_Colon_1_5014",message:"Failed to parse file '{0}': {1}."},Unknown_compiler_option_0:{code:5023,category:e.DiagnosticCategory.Error,key:"Unknown_compiler_option_0_5023",message:"Unknown compiler option '{0}'."},Compiler_option_0_requires_a_value_of_type_1:{code:5024,category:e.DiagnosticCategory.Error,key:"Compiler_option_0_requires_a_value_of_type_1_5024",message:"Compiler option '{0}' requires a value of type {1}."},Could_not_write_file_0_Colon_1:{code:5033,category:e.DiagnosticCategory.Error,key:"Could_not_write_file_0_Colon_1_5033",message:"Could not write file '{0}': {1}"},Option_project_cannot_be_mixed_with_source_files_on_a_command_line:{code:5042,category:e.DiagnosticCategory.Error,key:"Option_project_cannot_be_mixed_with_source_files_on_a_command_line_5042",message:"Option 'project' cannot be mixed with source files on a command line."},Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES2015_or_higher:{code:5047,category:e.DiagnosticCategory.Error,key:"Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES_5047",message:"Option 'isolatedModules' can only be used when either option '--module' is provided or option 'target' is 'ES2015' or higher."},Option_0_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided:{code:5051,category:e.DiagnosticCategory.Error,key:"Option_0_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided_5051",message:"Option '{0} can only be used when either option '--inlineSourceMap' or option '--sourceMap' is provided."},Option_0_cannot_be_specified_without_specifying_option_1:{code:5052,category:e.DiagnosticCategory.Error,key:"Option_0_cannot_be_specified_without_specifying_option_1_5052",message:"Option '{0}' cannot be specified without specifying option '{1}'."},Option_0_cannot_be_specified_with_option_1:{code:5053,category:e.DiagnosticCategory.Error,key:"Option_0_cannot_be_specified_with_option_1_5053",message:"Option '{0}' cannot be specified with option '{1}'."},A_tsconfig_json_file_is_already_defined_at_Colon_0:{code:5054,category:e.DiagnosticCategory.Error,key:"A_tsconfig_json_file_is_already_defined_at_Colon_0_5054",message:"A 'tsconfig.json' file is already defined at: '{0}'."},Cannot_write_file_0_because_it_would_overwrite_input_file:{code:5055,category:e.DiagnosticCategory.Error,key:"Cannot_write_file_0_because_it_would_overwrite_input_file_5055",message:"Cannot write file '{0}' because it would overwrite input file."},Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files:{code:5056,category:e.DiagnosticCategory.Error,key:"Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files_5056",message:"Cannot write file '{0}' because it would be overwritten by multiple input files."},Cannot_find_a_tsconfig_json_file_at_the_specified_directory_Colon_0:{code:5057,category:e.DiagnosticCategory.Error,key:"Cannot_find_a_tsconfig_json_file_at_the_specified_directory_Colon_0_5057",message:"Cannot find a tsconfig.json file at the specified directory: '{0}'"},The_specified_path_does_not_exist_Colon_0:{code:5058,category:e.DiagnosticCategory.Error,key:"The_specified_path_does_not_exist_Colon_0_5058",message:"The specified path does not exist: '{0}'"},Invalid_value_for_reactNamespace_0_is_not_a_valid_identifier:{code:5059,category:e.DiagnosticCategory.Error,key:"Invalid_value_for_reactNamespace_0_is_not_a_valid_identifier_5059",message:"Invalid value for '--reactNamespace'. '{0}' is not a valid identifier."},Option_paths_cannot_be_used_without_specifying_baseUrl_option:{code:5060,category:e.DiagnosticCategory.Error,key:"Option_paths_cannot_be_used_without_specifying_baseUrl_option_5060",message:"Option 'paths' cannot be used without specifying '--baseUrl' option."},Pattern_0_can_have_at_most_one_Asterisk_character:{code:5061,category:e.DiagnosticCategory.Error,key:"Pattern_0_can_have_at_most_one_Asterisk_character_5061",message:"Pattern '{0}' can have at most one '*' character"},Substitution_0_in_pattern_1_in_can_have_at_most_one_Asterisk_character:{code:5062,category:e.DiagnosticCategory.Error,key:"Substitution_0_in_pattern_1_in_can_have_at_most_one_Asterisk_character_5062",message:"Substitution '{0}' in pattern '{1}' in can have at most one '*' character"},Substitutions_for_pattern_0_should_be_an_array:{code:5063,category:e.DiagnosticCategory.Error,key:"Substitutions_for_pattern_0_should_be_an_array_5063",message:"Substitutions for pattern '{0}' should be an array."},Substitution_0_for_pattern_1_has_incorrect_type_expected_string_got_2:{code:5064,category:e.DiagnosticCategory.Error,key:"Substitution_0_for_pattern_1_has_incorrect_type_expected_string_got_2_5064",message:"Substitution '{0}' for pattern '{1}' has incorrect type, expected 'string', got '{2}'."},File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0:{code:5065,category:e.DiagnosticCategory.Error,key:"File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildca_5065",message:"File specification cannot contain a parent directory ('..') that appears after a recursive directory wildcard ('**'): '{0}'."},Substitutions_for_pattern_0_shouldn_t_be_an_empty_array:{code:5066,category:e.DiagnosticCategory.Error,key:"Substitutions_for_pattern_0_shouldn_t_be_an_empty_array_5066",message:"Substitutions for pattern '{0}' shouldn't be an empty array."},Concatenate_and_emit_output_to_single_file:{code:6001,category:e.DiagnosticCategory.Message,key:"Concatenate_and_emit_output_to_single_file_6001",message:"Concatenate and emit output to single file."},Generates_corresponding_d_ts_file:{code:6002,category:e.DiagnosticCategory.Message,key:"Generates_corresponding_d_ts_file_6002",message:"Generates corresponding '.d.ts' file."},Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations:{code:6003,category:e.DiagnosticCategory.Message,key:"Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations_6003",message:"Specify the location where debugger should locate map files instead of generated locations."},Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations:{code:6004,category:e.DiagnosticCategory.Message,key:"Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations_6004",message:"Specify the location where debugger should locate TypeScript files instead of source locations."},Watch_input_files:{code:6005,category:e.DiagnosticCategory.Message,key:"Watch_input_files_6005",message:"Watch input files."},Redirect_output_structure_to_the_directory:{code:6006,category:e.DiagnosticCategory.Message,key:"Redirect_output_structure_to_the_directory_6006",message:"Redirect output structure to the directory."},Do_not_erase_const_enum_declarations_in_generated_code:{code:6007,category:e.DiagnosticCategory.Message,key:"Do_not_erase_const_enum_declarations_in_generated_code_6007",message:"Do not erase const enum declarations in generated code."},Do_not_emit_outputs_if_any_errors_were_reported:{code:6008,category:e.DiagnosticCategory.Message,key:"Do_not_emit_outputs_if_any_errors_were_reported_6008",message:"Do not emit outputs if any errors were reported."},Do_not_emit_comments_to_output:{code:6009,category:e.DiagnosticCategory.Message,key:"Do_not_emit_comments_to_output_6009",message:"Do not emit comments to output."},Do_not_emit_outputs:{code:6010,category:e.DiagnosticCategory.Message,key:"Do_not_emit_outputs_6010",message:"Do not emit outputs."},Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typechecking:{code:6011,category:e.DiagnosticCategory.Message,key:"Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typech_6011",message:"Allow default imports from modules with no default export. This does not affect code emit, just typechecking."},Skip_type_checking_of_declaration_files:{code:6012,category:e.DiagnosticCategory.Message,key:"Skip_type_checking_of_declaration_files_6012",message:"Skip type checking of declaration files."},Specify_ECMAScript_target_version_Colon_ES3_default_ES5_or_ES2015:{code:6015,category:e.DiagnosticCategory.Message,key:"Specify_ECMAScript_target_version_Colon_ES3_default_ES5_or_ES2015_6015",message:"Specify ECMAScript target version: 'ES3' (default), 'ES5', or 'ES2015'"},Specify_module_code_generation_Colon_commonjs_amd_system_umd_or_es2015:{code:6016,category:e.DiagnosticCategory.Message,key:"Specify_module_code_generation_Colon_commonjs_amd_system_umd_or_es2015_6016",message:"Specify module code generation: 'commonjs', 'amd', 'system', 'umd' or 'es2015'"},Print_this_message:{code:6017,category:e.DiagnosticCategory.Message,key:"Print_this_message_6017",message:"Print this message."},Print_the_compiler_s_version:{code:6019,category:e.DiagnosticCategory.Message,key:"Print_the_compiler_s_version_6019",message:"Print the compiler's version."},Compile_the_project_in_the_given_directory:{code:6020,category:e.DiagnosticCategory.Message,key:"Compile_the_project_in_the_given_directory_6020",message:"Compile the project in the given directory."},Syntax_Colon_0:{code:6023,category:e.DiagnosticCategory.Message,key:"Syntax_Colon_0_6023",message:"Syntax: {0}"},options:{code:6024,category:e.DiagnosticCategory.Message,key:"options_6024",message:"options"},file:{code:6025,category:e.DiagnosticCategory.Message,key:"file_6025",message:"file"},Examples_Colon_0:{code:6026,category:e.DiagnosticCategory.Message,key:"Examples_Colon_0_6026",message:"Examples: {0}"},Options_Colon:{code:6027,category:e.DiagnosticCategory.Message,key:"Options_Colon_6027",message:"Options:"},Version_0:{code:6029,category:e.DiagnosticCategory.Message,key:"Version_0_6029",message:"Version {0}"},Insert_command_line_options_and_files_from_a_file:{code:6030,category:e.DiagnosticCategory.Message,key:"Insert_command_line_options_and_files_from_a_file_6030",message:"Insert command line options and files from a file."},File_change_detected_Starting_incremental_
    :{code:6032,category:e.DiagnosticCategory.Message,key:"File_change_detected_Starting_incremental_compilation_6032",message:"File change detected. Starting incremental compilation..."},KIND:{code:6034,category:e.DiagnosticCategory.Message,key:"KIND_6034",message:"KIND"},FILE:{code:6035,category:e.DiagnosticCategory.Message,key:"FILE_6035",message:"FILE"},VERSION:{code:6036,category:e.DiagnosticCategory.Message,key:"VERSION_6036",message:"VERSION"},LOCATION:{code:6037,category:e.DiagnosticCategory.Message,key:"LOCATION_6037",message:"LOCATION"},DIRECTORY:{code:6038,category:e.DiagnosticCategory.Message,key:"DIRECTORY_6038",message:"DIRECTORY"},Compilation_complete_Watching_for_file_changes:{code:6042,category:e.DiagnosticCategory.Message,key:"Compilation_complete_Watching_for_file_changes_6042",message:"Compilation complete. Watching for file changes."
},Generates_corresponding_map_file:{code:6043,category:e.DiagnosticCategory.Message,key:"Generates_corresponding_map_file_6043",message:"Generates corresponding '.map' file."},Compiler_option_0_expects_an_argument:{code:6044,category:e.DiagnosticCategory.Error,key:"Compiler_option_0_expects_an_argument_6044",message:"Compiler option '{0}' expects an argument."},Unterminated_quoted_string_in_response_file_0:{code:6045,category:e.DiagnosticCategory.Error,key:"Unterminated_quoted_string_in_response_file_0_6045",message:"Unterminated quoted string in response file '{0}'."},Argument_for_0_option_must_be_Colon_1:{code:6046,category:e.DiagnosticCategory.Error,key:"Argument_for_0_option_must_be_Colon_1_6046",message:"Argument for '{0}' option must be: {1}"},Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1:{code:6048,category:e.DiagnosticCategory.Error,key:"Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1_6048",message:"Locale must be of the form <language> or <language>-<territory>. For example '{0}' or '{1}'."},Unsupported_locale_0:{code:6049,category:e.DiagnosticCategory.Error,key:"Unsupported_locale_0_6049",message:"Unsupported locale '{0}'."},Unable_to_open_file_0:{code:6050,category:e.DiagnosticCategory.Error,key:"Unable_to_open_file_0_6050",message:"Unable to open file '{0}'."},Corrupted_locale_file_0:{code:6051,category:e.DiagnosticCategory.Error,key:"Corrupted_locale_file_0_6051",message:"Corrupted locale file {0}."},Raise_error_on_expressions_and_declarations_with_an_implied_any_type:{code:6052,category:e.DiagnosticCategory.Message,key:"Raise_error_on_expressions_and_declarations_with_an_implied_any_type_6052",message:"Raise error on expressions and declarations with an implied 'any' type."},File_0_not_found:{code:6053,category:e.DiagnosticCategory.Error,key:"File_0_not_found_6053",message:"File '{0}' not found."},File_0_has_unsupported_extension_The_only_supported_extensions_are_1:{code:6054,category:e.DiagnosticCategory.Error,key:"File_0_has_unsupported_extension_The_only_supported_extensions_are_1_6054",message:"File '{0}' has unsupported extension. The only supported extensions are {1}."},Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures:{code:6055,category:e.DiagnosticCategory.Message,key:"Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures_6055",message:"Suppress noImplicitAny errors for indexing objects lacking index signatures."},Do_not_emit_declarations_for_code_that_has_an_internal_annotation:{code:6056,category:e.DiagnosticCategory.Message,key:"Do_not_emit_declarations_for_code_that_has_an_internal_annotation_6056",message:"Do not emit declarations for code that has an '@internal' annotation."},Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir:{code:6058,category:e.DiagnosticCategory.Message,key:"Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir_6058",message:"Specify the root directory of input files. Use to control the output directory structure with --outDir."},File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files:{code:6059,category:e.DiagnosticCategory.Error,key:"File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files_6059",message:"File '{0}' is not under 'rootDir' '{1}'. 'rootDir' is expected to contain all source files."},Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix:{code:6060,category:e.DiagnosticCategory.Message,key:"Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix_6060",message:"Specify the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix)."},NEWLINE:{code:6061,category:e.DiagnosticCategory.Message,key:"NEWLINE_6061",message:"NEWLINE"},Option_0_can_only_be_specified_in_tsconfig_json_file:{code:6064,category:e.DiagnosticCategory.Error,key:"Option_0_can_only_be_specified_in_tsconfig_json_file_6064",message:"Option '{0}' can only be specified in 'tsconfig.json' file."},Enables_experimental_support_for_ES7_decorators:{code:6065,category:e.DiagnosticCategory.Message,key:"Enables_experimental_support_for_ES7_decorators_6065",message:"Enables experimental support for ES7 decorators."},Enables_experimental_support_for_emitting_type_metadata_for_decorators:{code:6066,category:e.DiagnosticCategory.Message,key:"Enables_experimental_support_for_emitting_type_metadata_for_decorators_6066",message:"Enables experimental support for emitting type metadata for decorators."},Enables_experimental_support_for_ES7_async_functions:{code:6068,category:e.DiagnosticCategory.Message,key:"Enables_experimental_support_for_ES7_async_functions_6068",message:"Enables experimental support for ES7 async functions."},Specify_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6:{code:6069,category:e.DiagnosticCategory.Message,key:"Specify_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6_6069",message:"Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6)."},Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file:{code:6070,category:e.DiagnosticCategory.Message,key:"Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file_6070",message:"Initializes a TypeScript project and creates a tsconfig.json file."},Successfully_created_a_tsconfig_json_file:{code:6071,category:e.DiagnosticCategory.Message,key:"Successfully_created_a_tsconfig_json_file_6071",message:"Successfully created a tsconfig.json file."},Suppress_excess_property_checks_for_object_literals:{code:6072,category:e.DiagnosticCategory.Message,key:"Suppress_excess_property_checks_for_object_literals_6072",message:"Suppress excess property checks for object literals."},Stylize_errors_and_messages_using_color_and_context_experimental:{code:6073,category:e.DiagnosticCategory.Message,key:"Stylize_errors_and_messages_using_color_and_context_experimental_6073",message:"Stylize errors and messages using color and context. (experimental)"},Do_not_report_errors_on_unused_labels:{code:6074,category:e.DiagnosticCategory.Message,key:"Do_not_report_errors_on_unused_labels_6074",message:"Do not report errors on unused labels."},Report_error_when_not_all_code_paths_in_function_return_a_value:{code:6075,category:e.DiagnosticCategory.Message,key:"Report_error_when_not_all_code_paths_in_function_return_a_value_6075",message:"Report error when not all code paths in function return a value."},Report_errors_for_fallthrough_cases_in_switch_statement:{code:6076,category:e.DiagnosticCategory.Message,key:"Report_errors_for_fallthrough_cases_in_switch_statement_6076",message:"Report errors for fallthrough cases in switch statement."},Do_not_report_errors_on_unreachable_code:{code:6077,category:e.DiagnosticCategory.Message,key:"Do_not_report_errors_on_unreachable_code_6077",message:"Do not report errors on unreachable code."},Disallow_inconsistently_cased_references_to_the_same_file:{code:6078,category:e.DiagnosticCategory.Message,key:"Disallow_inconsistently_cased_references_to_the_same_file_6078",message:"Disallow inconsistently-cased references to the same file."},Specify_library_files_to_be_included_in_the_compilation_Colon:{code:6079,category:e.DiagnosticCategory.Message,key:"Specify_library_files_to_be_included_in_the_compilation_Colon_6079",message:"Specify library files to be included in the compilation: "},Specify_JSX_code_generation_Colon_preserve_or_react:{code:6080,category:e.DiagnosticCategory.Message,key:"Specify_JSX_code_generation_Colon_preserve_or_react_6080",message:"Specify JSX code generation: 'preserve' or 'react'"},Only_amd_and_system_modules_are_supported_alongside_0:{code:6082,category:e.DiagnosticCategory.Error,key:"Only_amd_and_system_modules_are_supported_alongside_0_6082",message:"Only 'amd' and 'system' modules are supported alongside --{0}."},Base_directory_to_resolve_non_absolute_module_names:{code:6083,category:e.DiagnosticCategory.Message,key:"Base_directory_to_resolve_non_absolute_module_names_6083",message:"Base directory to resolve non-absolute module names."},Specify_the_object_invoked_for_createElement_and_spread_when_targeting_react_JSX_emit:{code:6084,category:e.DiagnosticCategory.Message,key:"Specify_the_object_invoked_for_createElement_and_spread_when_targeting_react_JSX_emit_6084",message:"Specify the object invoked for createElement and __spread when targeting 'react' JSX emit"},Enable_tracing_of_the_name_resolution_process:{code:6085,category:e.DiagnosticCategory.Message,key:"Enable_tracing_of_the_name_resolution_process_6085",message:"Enable tracing of the name resolution process."},Resolving_module_0_from_1:{code:6086,category:e.DiagnosticCategory.Message,key:"Resolving_module_0_from_1_6086",message:"======== Resolving module '{0}' from '{1}'. ========"},Explicitly_specified_module_resolution_kind_Colon_0:{code:6087,category:e.DiagnosticCategory.Message,key:"Explicitly_specified_module_resolution_kind_Colon_0_6087",message:"Explicitly specified module resolution kind: '{0}'."},Module_resolution_kind_is_not_specified_using_0:{code:6088,category:e.DiagnosticCategory.Message,key:"Module_resolution_kind_is_not_specified_using_0_6088",message:"Module resolution kind is not specified, using '{0}'."},Module_name_0_was_successfully_resolved_to_1:{code:6089,category:e.DiagnosticCategory.Message,key:"Module_name_0_was_successfully_resolved_to_1_6089",message:"======== Module name '{0}' was successfully resolved to '{1}'. ========"},Module_name_0_was_not_resolved:{code:6090,category:e.DiagnosticCategory.Message,key:"Module_name_0_was_not_resolved_6090",message:"======== Module name '{0}' was not resolved. ========"},paths_option_is_specified_looking_for_a_pattern_to_match_module_name_0:{code:6091,category:e.DiagnosticCategory.Message,key:"paths_option_is_specified_looking_for_a_pattern_to_match_module_name_0_6091",message:"'paths' option is specified, looking for a pattern to match module name '{0}'."},Module_name_0_matched_pattern_1:{code:6092,category:e.DiagnosticCategory.Message,key:"Module_name_0_matched_pattern_1_6092",message:"Module name '{0}', matched pattern '{1}'."},Trying_substitution_0_candidate_module_location_Colon_1:{code:6093,category:e.DiagnosticCategory.Message,key:"Trying_substitution_0_candidate_module_location_Colon_1_6093",message:"Trying substitution '{0}', candidate module location: '{1}'."},Resolving_module_name_0_relative_to_base_url_1_2:{code:6094,category:e.DiagnosticCategory.Message,key:"Resolving_module_name_0_relative_to_base_url_1_2_6094",message:"Resolving module name '{0}' relative to base url '{1}' - '{2}'."},Loading_module_as_file_Slash_folder_candidate_module_location_0:{code:6095,category:e.DiagnosticCategory.Message,key:"Loading_module_as_file_Slash_folder_candidate_module_location_0_6095",message:"Loading module as file / folder, candidate module location '{0}'."},File_0_does_not_exist:{code:6096,category:e.DiagnosticCategory.Message,key:"File_0_does_not_exist_6096",message:"File '{0}' does not exist."},File_0_exist_use_it_as_a_name_resolution_result:{code:6097,category:e.DiagnosticCategory.Message,key:"File_0_exist_use_it_as_a_name_resolution_result_6097",message:"File '{0}' exist - use it as a name resolution result."},Loading_module_0_from_node_modules_folder:{code:6098,category:e.DiagnosticCategory.Message,key:"Loading_module_0_from_node_modules_folder_6098",message:"Loading module '{0}' from 'node_modules' folder."},Found_package_json_at_0:{code:6099,category:e.DiagnosticCategory.Message,key:"Found_package_json_at_0_6099",message:"Found 'package.json' at '{0}'."},package_json_does_not_have_types_field:{code:6100,category:e.DiagnosticCategory.Message,key:"package_json_does_not_have_types_field_6100",message:"'package.json' does not have 'types' field."},package_json_has_0_field_1_that_references_2:{code:6101,category:e.DiagnosticCategory.Message,key:"package_json_has_0_field_1_that_references_2_6101",message:"'package.json' has '{0}' field '{1}' that references '{2}'."},Allow_javascript_files_to_be_compiled:{code:6102,category:e.DiagnosticCategory.Message,key:"Allow_javascript_files_to_be_compiled_6102",message:"Allow javascript files to be compiled."},Option_0_should_have_array_of_strings_as_a_value:{code:6103,category:e.DiagnosticCategory.Error,key:"Option_0_should_have_array_of_strings_as_a_value_6103",message:"Option '{0}' should have array of strings as a value."},Checking_if_0_is_the_longest_matching_prefix_for_1_2:{code:6104,category:e.DiagnosticCategory.Message,key:"Checking_if_0_is_the_longest_matching_prefix_for_1_2_6104",message:"Checking if '{0}' is the longest matching prefix for '{1}' - '{2}'."},Expected_type_of_0_field_in_package_json_to_be_string_got_1:{code:6105,category:e.DiagnosticCategory.Message,key:"Expected_type_of_0_field_in_package_json_to_be_string_got_1_6105",message:"Expected type of '{0}' field in 'package.json' to be 'string', got '{1}'."},baseUrl_option_is_set_to_0_using_this_value_to_resolve_non_relative_module_name_1:{code:6106,category:e.DiagnosticCategory.Message,key:"baseUrl_option_is_set_to_0_using_this_value_to_resolve_non_relative_module_name_1_6106",message:"'baseUrl' option is set to '{0}', using this value to resolve non-relative module name '{1}'"},rootDirs_option_is_set_using_it_to_resolve_relative_module_name_0:{code:6107,category:e.DiagnosticCategory.Message,key:"rootDirs_option_is_set_using_it_to_resolve_relative_module_name_0_6107",message:"'rootDirs' option is set, using it to resolve relative module name '{0}'"},Longest_matching_prefix_for_0_is_1:{code:6108,category:e.DiagnosticCategory.Message,key:"Longest_matching_prefix_for_0_is_1_6108",message:"Longest matching prefix for '{0}' is '{1}'"},Loading_0_from_the_root_dir_1_candidate_location_2:{code:6109,category:e.DiagnosticCategory.Message,key:"Loading_0_from_the_root_dir_1_candidate_location_2_6109",message:"Loading '{0}' from the root dir '{1}', candidate location '{2}'"},Trying_other_entries_in_rootDirs:{code:6110,category:e.DiagnosticCategory.Message,key:"Trying_other_entries_in_rootDirs_6110",message:"Trying other entries in 'rootDirs'"},Module_resolution_using_rootDirs_has_failed:{code:6111,category:e.DiagnosticCategory.Message,key:"Module_resolution_using_rootDirs_has_failed_6111",message:"Module resolution using 'rootDirs' has failed"},Do_not_emit_use_strict_directives_in_module_output:{code:6112,category:e.DiagnosticCategory.Message,key:"Do_not_emit_use_strict_directives_in_module_output_6112",message:"Do not emit 'use strict' directives in module output."},Enable_strict_null_checks:{code:6113,category:e.DiagnosticCategory.Message,key:"Enable_strict_null_checks_6113",message:"Enable strict null checks."},Unknown_option_excludes_Did_you_mean_exclude:{code:6114,category:e.DiagnosticCategory.Error,key:"Unknown_option_excludes_Did_you_mean_exclude_6114",message:"Unknown option 'excludes'. Did you mean 'exclude'?"},Raise_error_on_this_expressions_with_an_implied_any_type:{code:6115,category:e.DiagnosticCategory.Message,key:"Raise_error_on_this_expressions_with_an_implied_any_type_6115",message:"Raise error on 'this' expressions with an implied 'any' type."},Resolving_type_reference_directive_0_containing_file_1_root_directory_2:{code:6116,category:e.DiagnosticCategory.Message,key:"Resolving_type_reference_directive_0_containing_file_1_root_directory_2_6116",message:"======== Resolving type reference directive '{0}', containing file '{1}', root directory '{2}'. ========"},Resolving_using_primary_search_paths:{code:6117,category:e.DiagnosticCategory.Message,key:"Resolving_using_primary_search_paths_6117",message:"Resolving using primary search paths..."},Resolving_from_node_modules_folder:{code:6118,category:e.DiagnosticCategory.Message,key:"Resolving_from_node_modules_folder_6118",message:"Resolving from node_modules folder..."},Type_reference_directive_0_was_successfully_resolved_to_1_primary_Colon_2:{code:6119,category:e.DiagnosticCategory.Message,key:"Type_reference_directive_0_was_successfully_resolved_to_1_primary_Colon_2_6119",message:"======== Type reference directive '{0}' was successfully resolved to '{1}', primary: {2}. ========"},Type_reference_directive_0_was_not_resolved:{code:6120,category:e.DiagnosticCategory.Message,key:"Type_reference_directive_0_was_not_resolved_6120",message:"======== Type reference directive '{0}' was not resolved. ========"},Resolving_with_primary_search_path_0:{code:6121,category:e.DiagnosticCategory.Message,key:"Resolving_with_primary_search_path_0_6121",message:"Resolving with primary search path '{0}'"},Root_directory_cannot_be_determined_skipping_primary_search_paths:{code:6122,category:e.DiagnosticCategory.Message,key:"Root_directory_cannot_be_determined_skipping_primary_search_paths_6122",message:"Root directory cannot be determined, skipping primary search paths."},Resolving_type_reference_directive_0_containing_file_1_root_directory_not_set:{code:6123,category:e.DiagnosticCategory.Message,key:"Resolving_type_reference_directive_0_containing_file_1_root_directory_not_set_6123",message:"======== Resolving type reference directive '{0}', containing file '{1}', root directory not set. ========"},Type_declaration_files_to_be_included_in_compilation:{code:6124,category:e.DiagnosticCategory.Message,key:"Type_declaration_files_to_be_included_in_compilation_6124",message:"Type declaration files to be included in compilation."},Looking_up_in_node_modules_folder_initial_location_0:{code:6125,category:e.DiagnosticCategory.Message,key:"Looking_up_in_node_modules_folder_initial_location_0_6125",message:"Looking up in 'node_modules' folder, initial location '{0}'"},Containing_file_is_not_specified_and_root_directory_cannot_be_determined_skipping_lookup_in_node_modules_folder:{code:6126,category:e.DiagnosticCategory.Message,key:"Containing_file_is_not_specified_and_root_directory_cannot_be_determined_skipping_lookup_in_node_mod_6126",message:"Containing file is not specified and root directory cannot be determined, skipping lookup in 'node_modules' folder."},Resolving_type_reference_directive_0_containing_file_not_set_root_directory_1:{code:6127,category:e.DiagnosticCategory.Message,key:"Resolving_type_reference_directive_0_containing_file_not_set_root_directory_1_6127",message:"======== Resolving type reference directive '{0}', containing file not set, root directory '{1}'. ========"},Resolving_type_reference_directive_0_containing_file_not_set_root_directory_not_set:{code:6128,category:e.DiagnosticCategory.Message,key:"Resolving_type_reference_directive_0_containing_file_not_set_root_directory_not_set_6128",message:"======== Resolving type reference directive '{0}', containing file not set, root directory not set. ========"},The_config_file_0_found_doesn_t_contain_any_source_files:{code:6129,category:e.DiagnosticCategory.Error,key:"The_config_file_0_found_doesn_t_contain_any_source_files_6129",message:"The config file '{0}' found doesn't contain any source files."},Resolving_real_path_for_0_result_1:{code:6130,category:e.DiagnosticCategory.Message,key:"Resolving_real_path_for_0_result_1_6130",message:"Resolving real path for '{0}', result '{1}'"},Cannot_compile_modules_using_option_0_unless_the_module_flag_is_amd_or_system:{code:6131,category:e.DiagnosticCategory.Error,key:"Cannot_compile_modules_using_option_0_unless_the_module_flag_is_amd_or_system_6131",message:"Cannot compile modules using option '{0}' unless the '--module' flag is 'amd' or 'system'."},File_name_0_has_a_1_extension_stripping_it:{code:6132,category:e.DiagnosticCategory.Message,key:"File_name_0_has_a_1_extension_stripping_it_6132",message:"File name '{0}' has a '{1}' extension - stripping it"},_0_is_declared_but_never_used:{code:6133,category:e.DiagnosticCategory.Error,key:"_0_is_declared_but_never_used_6133",message:"'{0}' is declared but never used."},Report_errors_on_unused_locals:{code:6134,category:e.DiagnosticCategory.Message,key:"Report_errors_on_unused_locals_6134",message:"Report errors on unused locals."},Report_errors_on_unused_parameters:{code:6135,category:e.DiagnosticCategory.Message,key:"Report_errors_on_unused_parameters_6135",message:"Report errors on unused parameters."},The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files:{code:6136,category:e.DiagnosticCategory.Message,key:"The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files_6136",message:"The maximum dependency depth to search under node_modules and load JavaScript files"},No_types_specified_in_package_json_but_allowJs_is_set_so_returning_main_value_of_0:{code:6137,category:e.DiagnosticCategory.Message,key:"No_types_specified_in_package_json_but_allowJs_is_set_so_returning_main_value_of_0_6137",message:"No types specified in 'package.json' but 'allowJs' is set, so returning 'main' value of '{0}'"},Property_0_is_declared_but_never_used:{code:6138,category:e.DiagnosticCategory.Error,key:"Property_0_is_declared_but_never_used_6138",message:"Property '{0}' is declared but never used."},Variable_0_implicitly_has_an_1_type:{code:7005,category:e.DiagnosticCategory.Error,key:"Variable_0_implicitly_has_an_1_type_7005",message:"Variable '{0}' implicitly has an '{1}' type."},Parameter_0_implicitly_has_an_1_type:{code:7006,category:e.DiagnosticCategory.Error,key:"Parameter_0_implicitly_has_an_1_type_7006",message:"Parameter '{0}' implicitly has an '{1}' type."},Member_0_implicitly_has_an_1_type:{code:7008,category:e.DiagnosticCategory.Error,key:"Member_0_implicitly_has_an_1_type_7008",message:"Member '{0}' implicitly has an '{1}' type."},new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type:{code:7009,category:e.DiagnosticCategory.Error,key:"new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type_7009",message:"'new' expression, whose target lacks a construct signature, implicitly has an 'any' type."},_0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type:{code:7010,category:e.DiagnosticCategory.Error,key:"_0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type_7010",message:"'{0}', which lacks return-type annotation, implicitly has an '{1}' return type."},Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type:{code:7011,category:e.DiagnosticCategory.Error,key:"Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type_7011",message:"Function expression, which lacks return-type annotation, implicitly has an '{0}' return type."},Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type:{code:7013,category:e.DiagnosticCategory.Error,key:"Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type_7013",message:"Construct signature, which lacks return-type annotation, implicitly has an 'any' return type."},Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number:{code:7015,category:e.DiagnosticCategory.Error,key:"Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number_7015",message:"Element implicitly has an 'any' type because index expression is not of type 'number'."},Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_type_annotation:{code:7016,category:e.DiagnosticCategory.Error,key:"Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_type_annotation_7016",message:"Property '{0}' implicitly has type 'any', because its 'set' accessor lacks a type annotation."},Index_signature_of_object_type_implicitly_has_an_any_type:{code:7017,category:e.DiagnosticCategory.Error,key:"Index_signature_of_object_type_implicitly_has_an_any_type_7017",message:"Index signature of object type implicitly has an 'any' type."},Object_literal_s_property_0_implicitly_has_an_1_type:{code:7018,category:e.DiagnosticCategory.Error,key:"Object_literal_s_property_0_implicitly_has_an_1_type_7018",message:"Object literal's property '{0}' implicitly has an '{1}' type."},Rest_parameter_0_implicitly_has_an_any_type:{code:7019,category:e.DiagnosticCategory.Error,key:"Rest_parameter_0_implicitly_has_an_any_type_7019",message:"Rest parameter '{0}' implicitly has an 'any[]' type."},Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type:{code:7020,category:e.DiagnosticCategory.Error,key:"Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type_7020",message:"Call signature, which lacks return-type annotation, implicitly has an 'any' return type."},_0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer:{code:7022,category:e.DiagnosticCategory.Error,key:"_0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or__7022",message:"'{0}' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer."},_0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions:{code:7023,category:e.DiagnosticCategory.Error,key:"_0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_reference_7023",message:"'{0}' implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions."},Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions:{code:7024,category:e.DiagnosticCategory.Error,key:"Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_ref_7024",message:"Function implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions."},Generator_implicitly_has_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_return_type:{code:7025,category:e.DiagnosticCategory.Error,key:"Generator_implicitly_has_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_return_typ_7025",message:"Generator implicitly has type '{0}' because it does not yield any values. Consider supplying a return type."},JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists:{code:7026,category:e.DiagnosticCategory.Error,key:"JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists_7026",message:"JSX element implicitly has type 'any' because no interface 'JSX.{0}' exists"},Unreachable_code_detected:{code:7027,category:e.DiagnosticCategory.Error,key:"Unreachable_code_detected_7027",message:"Unreachable code detected."},Unused_label:{code:7028,category:e.DiagnosticCategory.Error,key:"Unused_label_7028",message:"Unused label."},Fallthrough_case_in_switch:{code:7029,category:e.DiagnosticCategory.Error,key:"Fallthrough_case_in_switch_7029",message:"Fallthrough case in switch."},Not_all_code_paths_return_a_value:{code:7030,category:e.DiagnosticCategory.Error,key:"Not_all_code_paths_return_a_value_7030",message:"Not all code paths return a value."},Binding_element_0_implicitly_has_an_1_type:{code:7031,category:e.DiagnosticCategory.Error,key:"Binding_element_0_implicitly_has_an_1_type_7031",message:"Binding element '{0}' implicitly has an '{1}' type."},You_cannot_rename_this_element:{code:8e3,category:e.DiagnosticCategory.Error,key:"You_cannot_rename_this_element_8000",message:"You cannot rename this element."},You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library:{code:8001,category:e.DiagnosticCategory.Error,key:"You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library_8001",message:"You cannot rename elements that are defined in the standard TypeScript library."},import_can_only_be_used_in_a_ts_file:{code:8002,category:e.DiagnosticCategory.Error,key:"import_can_only_be_used_in_a_ts_file_8002",message:"'import ... =' can only be used in a .ts file."},export_can_only_be_used_in_a_ts_file:{code:8003,category:e.DiagnosticCategory.Error,key:"export_can_only_be_used_in_a_ts_file_8003",message:"'export=' can only be used in a .ts file."},type_parameter_declarations_can_only_be_used_in_a_ts_file:{code:8004,category:e.DiagnosticCategory.Error,key:"type_parameter_declarations_can_only_be_used_in_a_ts_file_8004",message:"'type parameter declarations' can only be used in a .ts file."},implements_clauses_can_only_be_used_in_a_ts_file:{code:8005,category:e.DiagnosticCategory.Error,key:"implements_clauses_can_only_be_used_in_a_ts_file_8005",message:"'implements clauses' can only be used in a .ts file."},interface_declarations_can_only_be_used_in_a_ts_file:{code:8006,category:e.DiagnosticCategory.Error,key:"interface_declarations_can_only_be_used_in_a_ts_file_8006",message:"'interface declarations' can only be used in a .ts file."},module_declarations_can_only_be_used_in_a_ts_file:{code:8007,category:e.DiagnosticCategory.Error,key:"module_declarations_can_only_be_used_in_a_ts_file_8007",message:"'module declarations' can only be used in a .ts file."},type_aliases_can_only_be_used_in_a_ts_file:{code:8008,category:e.DiagnosticCategory.Error,key:"type_aliases_can_only_be_used_in_a_ts_file_8008",message:"'type aliases' can only be used in a .ts file."},_0_can_only_be_used_in_a_ts_file:{code:8009,category:e.DiagnosticCategory.Error,key:"_0_can_only_be_used_in_a_ts_file_8009",message:"'{0}' can only be used in a .ts file."},types_can_only_be_used_in_a_ts_file:{code:8010,category:e.DiagnosticCategory.Error,key:"types_can_only_be_used_in_a_ts_file_8010",message:"'types' can only be used in a .ts file."},type_arguments_can_only_be_used_in_a_ts_file:{code:8011,category:e.DiagnosticCategory.Error,key:"type_arguments_can_only_be_used_in_a_ts_file_8011",message:"'type arguments' can only be used in a .ts file."},parameter_modifiers_can_only_be_used_in_a_ts_file:{code:8012,category:e.DiagnosticCategory.Error,key:"parameter_modifiers_can_only_be_used_in_a_ts_file_8012",message:"'parameter modifiers' can only be used in a .ts file."},enum_declarations_can_only_be_used_in_a_ts_file:{code:8015,category:e.DiagnosticCategory.Error,key:"enum_declarations_can_only_be_used_in_a_ts_file_8015",message:"'enum declarations' can only be used in a .ts file."},type_assertion_expressions_can_only_be_used_in_a_ts_file:{code:8016,category:e.DiagnosticCategory.Error,key:"type_assertion_expressions_can_only_be_used_in_a_ts_file_8016",message:"'type assertion expressions' can only be used in a .ts file."},Only_identifiers_Slashqualified_names_with_optional_type_arguments_are_currently_supported_in_a_class_extends_clauses:{code:9002,category:e.DiagnosticCategory.Error,key:"Only_identifiers_Slashqualified_names_with_optional_type_arguments_are_currently_supported_in_a_clas_9002",message:"Only identifiers/qualified-names with optional type arguments are currently supported in a class 'extends' clauses."},class_expressions_are_not_currently_supported:{code:9003,category:e.DiagnosticCategory.Error,key:"class_expressions_are_not_currently_supported_9003",message:"'class' expressions are not currently supported."},JSX_attributes_must_only_be_assigned_a_non_empty_expression:{code:17e3,category:e.DiagnosticCategory.Error,key:"JSX_attributes_must_only_be_assigned_a_non_empty_expression_17000",message:"JSX attributes must only be assigned a non-empty 'expression'."},JSX_elements_cannot_have_multiple_attributes_with_the_same_name:{code:17001,category:e.DiagnosticCategory.Error,key:"JSX_elements_cannot_have_multiple_attributes_with_the_same_name_17001",message:"JSX elements cannot have multiple attributes with the same name."},Expected_corresponding_JSX_closing_tag_for_0:{code:17002,category:e.DiagnosticCategory.Error,
key:"Expected_corresponding_JSX_closing_tag_for_0_17002",message:"Expected corresponding JSX closing tag for '{0}'."},JSX_attribute_expected:{code:17003,category:e.DiagnosticCategory.Error,key:"JSX_attribute_expected_17003",message:"JSX attribute expected."},Cannot_use_JSX_unless_the_jsx_flag_is_provided:{code:17004,category:e.DiagnosticCategory.Error,key:"Cannot_use_JSX_unless_the_jsx_flag_is_provided_17004",message:"Cannot use JSX unless the '--jsx' flag is provided."},A_constructor_cannot_contain_a_super_call_when_its_class_extends_null:{code:17005,category:e.DiagnosticCategory.Error,key:"A_constructor_cannot_contain_a_super_call_when_its_class_extends_null_17005",message:"A constructor cannot contain a 'super' call when its class extends 'null'"},An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses:{code:17006,category:e.DiagnosticCategory.Error,key:"An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_ex_17006",message:"An unary expression with the '{0}' operator is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses."},A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses:{code:17007,category:e.DiagnosticCategory.Error,key:"A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Con_17007",message:"A type assertion expression is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses."},JSX_element_0_has_no_corresponding_closing_tag:{code:17008,category:e.DiagnosticCategory.Error,key:"JSX_element_0_has_no_corresponding_closing_tag_17008",message:"JSX element '{0}' has no corresponding closing tag."},super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class:{code:17009,category:e.DiagnosticCategory.Error,key:"super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class_17009",message:"'super' must be called before accessing 'this' in the constructor of a derived class."},Unknown_typing_option_0:{code:17010,category:e.DiagnosticCategory.Error,key:"Unknown_typing_option_0_17010",message:"Unknown typing option '{0}'."}}}(ts||(ts={}))
var ts
!function(e){function t(e){return e>=69}function n(e,t){if(e<t[0])return!1
for(var n,r=0,a=t.length;a>r+1;){if(n=r+(a-r)/2,n-=n%2,t[n]<=e&&e<=t[n+1])return!0
e<t[n]?a=n:r=n+2}return!1}function r(e,t){return t>=1?n(e,M):n(e,F)}function a(e,t){return t>=1?n(e,L):n(e,I)}function i(e){var t=[]
for(var n in e)t[e[n]]=n
return t}function o(e){return B[e]}function s(e){return R[e]}function c(e){for(var t=[],n=0,r=0;n<e.length;){var a=e.charCodeAt(n)
switch(n++,a){case 13:10===e.charCodeAt(n)&&n++
case 10:t.push(r),r=n
break
default:a>127&&m(a)&&(t.push(r),r=n)}}return t.push(r),t}function _(e,t,n){return u(l(e),t,n)}function u(t,n,r){return e.Debug.assert(n>=0&&n<t.length),t[n]+r}function l(e){return e.lineMap||(e.lineMap=c(e.text))}function d(t,n){var r=e.binarySearch(t,n)
return 0>r&&(r=~r-1,e.Debug.assert(-1!==r,"position cannot precede the beginning of the file")),{line:r,character:n-t[r]}}function p(e,t){return d(l(e),t)}function f(e){return g(e)||m(e)}function g(e){return 32===e||9===e||11===e||12===e||160===e||133===e||5760===e||e>=8192&&8203>=e||8239===e||8287===e||12288===e||65279===e}function m(e){return 10===e||13===e||8232===e||8233===e}function y(e){return e>=48&&57>=e}function h(e){return e>=48&&55>=e}function v(e,t){var n=e.charCodeAt(t)
switch(n){case 13:case 10:case 9:case 11:case 12:case 32:case 47:case 60:case 61:case 62:return!0
case 35:return 0===t
default:return n>127}}function k(e,t,n,r){if(void 0===r&&(r=!1),!(t>=0))return t
for(;;){var a=e.charCodeAt(t)
switch(a){case 13:10===e.charCodeAt(t+1)&&t++
case 10:if(t++,n)return t
continue
case 9:case 11:case 12:case 32:t++
continue
case 47:if(r)break
if(47===e.charCodeAt(t+1)){for(t+=2;t<e.length&&!m(e.charCodeAt(t));)t++
continue}if(42===e.charCodeAt(t+1)){for(t+=2;t<e.length;){if(42===e.charCodeAt(t)&&47===e.charCodeAt(t+1)){t+=2
break}t++}continue}break
case 60:case 61:case 62:if(b(e,t)){t=x(e,t)
continue}break
case 35:if(0===t&&D(e,t)){t=C(e,t)
continue}break
default:if(a>127&&f(a)){t++
continue}}return t}}function b(t,n){if(e.Debug.assert(n>=0),0===n||m(t.charCodeAt(n-1))){var r=t.charCodeAt(n)
if(n+K<t.length){for(var a=0,i=K;i>a;a++)if(t.charCodeAt(n+a)!==r)return!1
return 61===r||32===t.charCodeAt(n+K)}}return!1}function x(t,n,r){r&&r(e.Diagnostics.Merge_conflict_marker_encountered,K)
var a=t.charCodeAt(n),i=t.length
if(60===a||62===a)for(;i>n&&!m(t.charCodeAt(n));)n++
else for(e.Debug.assert(61===a);i>n;){var o=t.charCodeAt(n)
if(62===o&&b(t,n))break
n++}return n}function D(t,n){return e.Debug.assert(0===n),z.test(t)}function C(e,t){var n=z.exec(e)[0]
return t+=n.length}function S(t,n,r){for(var a,i=r||0===n;n<t.length;){var o=t.charCodeAt(n)
switch(o){case 13:10===t.charCodeAt(n+1)&&n++
case 10:if(n++,r)return a
i=!0,a&&a.length&&(e.lastOrUndefined(a).hasTrailingNewLine=!0)
continue
case 9:case 11:case 12:case 32:n++
continue
case 47:var s=t.charCodeAt(n+1),c=!1
if(47===s||42===s){var _=47===s?2:3,u=n
if(n+=2,47===s)for(;n<t.length;){if(m(t.charCodeAt(n))){c=!0
break}n++}else for(;n<t.length;){if(42===t.charCodeAt(n)&&47===t.charCodeAt(n+1)){n+=2
break}n++}i&&(a||(a=[]),a.push({pos:u,end:n,hasTrailingNewLine:c,kind:_}))
continue}break
default:if(o>127&&f(o)){a&&a.length&&m(o)&&(e.lastOrUndefined(a).hasTrailingNewLine=!0),n++
continue}}return a}return a}function T(e,t){return S(e,t,!1)}function E(e,t){return S(e,t,!0)}function w(e){return z.test(e)?z.exec(e)[0]:void 0}function A(e,t){return e>=65&&90>=e||e>=97&&122>=e||36===e||95===e||e>127&&r(e,t)}function N(e,t){return e>=65&&90>=e||e>=97&&122>=e||e>=48&&57>=e||36===e||95===e||e>127&&a(e,t)}function P(e,t){if(!A(e.charCodeAt(0),t))return!1
for(var n=1,r=e.length;r>n;n++)if(!N(e.charCodeAt(n),t))return!1
return!0}function O(n,r,a,i,o,s,c){function _(e,t){o&&o(e,t||0)}function u(){for(var t=te;y(i.charCodeAt(te));)te++
if(46===i.charCodeAt(te))for(te++;y(i.charCodeAt(te));)te++
var n=te
if(69===i.charCodeAt(te)||101===i.charCodeAt(te))if(te++,(43===i.charCodeAt(te)||45===i.charCodeAt(te))&&te++,y(i.charCodeAt(te))){for(te++;y(i.charCodeAt(te));)te++
n=te}else _(e.Diagnostics.Digit_expected)
return""+ +i.substring(t,n)}function l(){for(var e=te;h(i.charCodeAt(te));)te++
return+i.substring(e,te)}function d(e){return f(e,!1)}function p(e){return f(e,!0)}function f(e,t){for(var n=0,r=0;e>n||t;){var a=i.charCodeAt(te)
if(a>=48&&57>=a)r=16*r+a-48
else if(a>=65&&70>=a)r=16*r+a-65+10
else{if(!(a>=97&&102>=a))break
r=16*r+a-97+10}te++,n++}return e>n&&(r=-1),r}function v(){var t=i.charCodeAt(te)
te++
for(var n="",r=te;;){if(te>=ne){n+=i.substring(r,te),_e=!0,_(e.Diagnostics.Unterminated_string_literal)
break}var a=i.charCodeAt(te)
if(a===t){n+=i.substring(r,te),te++
break}if(92!==a){if(m(a)){n+=i.substring(r,te),_e=!0,_(e.Diagnostics.Unterminated_string_literal)
break}te++}else n+=i.substring(r,te),n+=S(),r=te}return n}function k(){var t=96===i.charCodeAt(te)
te++
for(var n,r=te,a="";;){if(te>=ne){a+=i.substring(r,te),_e=!0,_(e.Diagnostics.Unterminated_template_literal),n=t?11:14
break}var o=i.charCodeAt(te)
if(96===o){a+=i.substring(r,te),te++,n=t?11:14
break}if(36===o&&ne>te+1&&123===i.charCodeAt(te+1)){a+=i.substring(r,te),te+=2,n=t?12:13
break}92!==o?13!==o?te++:(a+=i.substring(r,te),te++,ne>te&&10===i.charCodeAt(te)&&te++,a+="\n",r=te):(a+=i.substring(r,te),a+=S(),r=te)}return e.Debug.assert(void 0!==n),oe=a,n}function S(){if(te++,te>=ne)return _(e.Diagnostics.Unexpected_end_of_text),""
var t=i.charCodeAt(te)
switch(te++,t){case 48:return"\x00"
case 98:return"\b"
case 116:return"	"
case 110:return"\n"
case 118:return"\x0B"
case 102:return"\f"
case 114:return"\r"
case 39:return"'"
case 34:return'"'
case 117:return ne>te&&123===i.charCodeAt(te)?(ce=!0,te++,E()):T(4)
case 120:return T(2)
case 13:ne>te&&10===i.charCodeAt(te)&&te++
case 10:case 8232:case 8233:return""
default:return String.fromCharCode(t)}}function T(t){var n=d(t)
return n>=0?String.fromCharCode(n):(_(e.Diagnostics.Hexadecimal_digit_expected),"")}function E(){var t=p(1),n=!1
return 0>t?(_(e.Diagnostics.Hexadecimal_digit_expected),n=!0):t>1114111&&(_(e.Diagnostics.An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive),n=!0),te>=ne?(_(e.Diagnostics.Unexpected_end_of_text),n=!0):125===i.charCodeAt(te)?te++:(_(e.Diagnostics.Unterminated_Unicode_escape_sequence),n=!0),n?"":w(t)}function w(t){if(e.Debug.assert(t>=0&&1114111>=t),65535>=t)return String.fromCharCode(t)
var n=Math.floor((t-65536)/1024)+55296,r=(t-65536)%1024+56320
return String.fromCharCode(n,r)}function P(){if(ne>te+5&&117===i.charCodeAt(te+1)){var e=te
te+=2
var t=d(4)
return te=e,t}return-1}function O(){for(var e="",t=te;ne>te;){var r=i.charCodeAt(te)
if(N(r,n))te++
else{if(92!==r)break
if(r=P(),!(r>=0&&N(r,n)))break
e+=i.substring(t,te),e+=String.fromCharCode(r),te+=6,t=te}}return e+=i.substring(t,te)}function F(){var e=oe.length
if(e>=2&&11>=e){var t=oe.charCodeAt(0)
if(t>=97&&122>=t&&J.call(R,oe))return ie=R[oe]}return ie=69}function I(t){e.Debug.assert(2!==t||8!==t,"Expected either base 2 or base 8")
for(var n=0,r=0;;){var a=i.charCodeAt(te),o=a-48
if(!y(a)||o>=t)break
n=n*t+o,te++,r++}return 0===r?-1:n}function M(){for(re=te,ce=!1,se=!1,_e=!1;;){if(ae=te,te>=ne)return ie=1
var t=i.charCodeAt(te)
if(35===t&&0===te&&D(i,te)){if(te=C(i,te),r)continue
return ie=6}switch(t){case 10:case 13:if(se=!0,r){te++
continue}return 13===t&&ne>te+1&&10===i.charCodeAt(te+1)?te+=2:te++,ie=4
case 9:case 11:case 12:case 32:if(r){te++
continue}for(;ne>te&&g(i.charCodeAt(te));)te++
return ie=5
case 33:return 61===i.charCodeAt(te+1)?61===i.charCodeAt(te+2)?(te+=3,ie=33):(te+=2,ie=31):(te++,ie=49)
case 34:case 39:return oe=v(),ie=9
case 96:return ie=k()
case 37:return 61===i.charCodeAt(te+1)?(te+=2,ie=62):(te++,ie=40)
case 38:return 38===i.charCodeAt(te+1)?(te+=2,ie=51):61===i.charCodeAt(te+1)?(te+=2,ie=66):(te++,ie=46)
case 40:return te++,ie=17
case 41:return te++,ie=18
case 42:return 61===i.charCodeAt(te+1)?(te+=2,ie=59):42===i.charCodeAt(te+1)?61===i.charCodeAt(te+2)?(te+=3,ie=60):(te+=2,ie=38):(te++,ie=37)
case 43:return 43===i.charCodeAt(te+1)?(te+=2,ie=41):61===i.charCodeAt(te+1)?(te+=2,ie=57):(te++,ie=35)
case 44:return te++,ie=24
case 45:return 45===i.charCodeAt(te+1)?(te+=2,ie=42):61===i.charCodeAt(te+1)?(te+=2,ie=58):(te++,ie=36)
case 46:return y(i.charCodeAt(te+1))?(oe=u(),ie=8):46===i.charCodeAt(te+1)&&46===i.charCodeAt(te+2)?(te+=3,ie=22):(te++,ie=21)
case 47:if(47===i.charCodeAt(te+1)){for(te+=2;ne>te&&!m(i.charCodeAt(te));)te++
if(r)continue
return ie=2}if(42===i.charCodeAt(te+1)){te+=2
for(var o=!1;ne>te;){var s=i.charCodeAt(te)
if(42===s&&47===i.charCodeAt(te+1)){te+=2,o=!0
break}m(s)&&(se=!0),te++}if(o||_(e.Diagnostics.Asterisk_Slash_expected),r)continue
return _e=!o,ie=3}return 61===i.charCodeAt(te+1)?(te+=2,ie=61):(te++,ie=39)
case 48:if(ne>te+2&&(88===i.charCodeAt(te+1)||120===i.charCodeAt(te+1))){te+=2
var c=p(1)
return 0>c&&(_(e.Diagnostics.Hexadecimal_digit_expected),c=0),oe=""+c,ie=8}if(ne>te+2&&(66===i.charCodeAt(te+1)||98===i.charCodeAt(te+1))){te+=2
var c=I(2)
return 0>c&&(_(e.Diagnostics.Binary_digit_expected),c=0),oe=""+c,ie=8}if(ne>te+2&&(79===i.charCodeAt(te+1)||111===i.charCodeAt(te+1))){te+=2
var c=I(8)
return 0>c&&(_(e.Diagnostics.Octal_digit_expected),c=0),oe=""+c,ie=8}if(ne>te+1&&h(i.charCodeAt(te+1)))return oe=""+l(),ie=8
case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return oe=u(),ie=8
case 58:return te++,ie=54
case 59:return te++,ie=23
case 60:if(b(i,te)){if(te=x(i,te,_),r)continue
return ie=7}return 60===i.charCodeAt(te+1)?61===i.charCodeAt(te+2)?(te+=3,ie=63):(te+=2,ie=43):61===i.charCodeAt(te+1)?(te+=2,ie=28):1===a&&47===i.charCodeAt(te+1)&&42!==i.charCodeAt(te+2)?(te+=2,ie=26):(te++,ie=25)
case 61:if(b(i,te)){if(te=x(i,te,_),r)continue
return ie=7}return 61===i.charCodeAt(te+1)?61===i.charCodeAt(te+2)?(te+=3,ie=32):(te+=2,ie=30):62===i.charCodeAt(te+1)?(te+=2,ie=34):(te++,ie=56)
case 62:if(b(i,te)){if(te=x(i,te,_),r)continue
return ie=7}return te++,ie=27
case 63:return te++,ie=53
case 91:return te++,ie=19
case 93:return te++,ie=20
case 94:return 61===i.charCodeAt(te+1)?(te+=2,ie=68):(te++,ie=48)
case 123:return te++,ie=15
case 124:return 124===i.charCodeAt(te+1)?(te+=2,ie=52):61===i.charCodeAt(te+1)?(te+=2,ie=67):(te++,ie=47)
case 125:return te++,ie=16
case 126:return te++,ie=50
case 64:return te++,ie=55
case 92:var d=P()
return d>=0&&A(d,n)?(te+=6,oe=String.fromCharCode(d)+O(),ie=F()):(_(e.Diagnostics.Invalid_character),te++,ie=0)
default:if(A(t,n)){for(te++;ne>te&&N(t=i.charCodeAt(te),n);)te++
return oe=i.substring(ae,te),92===t&&(oe+=O()),ie=F()}if(g(t)){te++
continue}if(m(t)){se=!0,te++
continue}return _(e.Diagnostics.Invalid_character),te++,ie=0}}}function L(){if(27===ie){if(62===i.charCodeAt(te))return 62===i.charCodeAt(te+1)?61===i.charCodeAt(te+2)?(te+=3,ie=65):(te+=2,ie=45):61===i.charCodeAt(te+1)?(te+=2,ie=64):(te++,ie=44)
if(61===i.charCodeAt(te))return te++,ie=29}return ie}function B(){if(39===ie||61===ie){for(var t=ae+1,r=!1,a=!1;;){if(t>=ne){_e=!0,_(e.Diagnostics.Unterminated_regular_expression_literal)
break}var o=i.charCodeAt(t)
if(m(o)){_e=!0,_(e.Diagnostics.Unterminated_regular_expression_literal)
break}if(r)r=!1
else{if(47===o&&!a){t++
break}91===o?a=!0:92===o?r=!0:93===o&&(a=!1)}t++}for(;ne>t&&N(i.charCodeAt(t),n);)t++
te=t,oe=i.substring(ae,te),ie=10}return ie}function K(){return e.Debug.assert(16===ie,"'reScanTemplateToken' should only be called on a '}'"),te=ae,ie=k()}function z(){return te=ae=re,ie=j()}function j(){if(re=ae=te,te>=ne)return ie=1
var e=i.charCodeAt(te)
if(60===e)return 47===i.charCodeAt(te+1)?(te+=2,ie=26):(te++,ie=25)
if(123===e)return te++,ie=15
for(;ne>te&&(te++,e=i.charCodeAt(te),123!==e&&60!==e););return ie=244}function U(){if(t(ie)){for(var e=te;ne>te;){var r=i.charCodeAt(te)
if(45!==r&&(e===te?!A(r,n):!N(r,n)))break
te++}oe+=i.substr(e,te-e)}return ie}function q(){if(te>=ne)return ie=1
re=te
for(var e=i.charCodeAt(te);ne>te&&(e=i.charCodeAt(te),g(e));)te++
switch(ae=te,e){case 64:return te+=1,ie=55
case 10:case 13:return te+=1,ie=4
case 42:return te+=1,ie=37
case 123:return te+=1,ie=15
case 125:return te+=1,ie=16
case 91:return te+=1,ie=19
case 93:return te+=1,ie=20
case 61:return te+=1,ie=56
case 44:return te+=1,ie=24}if(A(e,2)){for(te++;N(i.charCodeAt(te),2)&&ne>te;)te++
return ie=69}return te+=1,ie=0}function W(e,t){var n=te,r=re,a=ae,i=ie,o=oe,s=se,c=e()
return(!c||t)&&(te=n,re=r,ae=a,ie=i,oe=o,se=s),c}function V(e,t,n){var r=ne,a=te,o=re,s=ae,c=ie,_=se,u=oe,l=ce,d=_e
Q(i,e,t)
var p=n()
return ne=r,te=a,re=o,ae=s,ie=c,se=_,oe=u,ce=l,_e=d,p}function H(e){return W(e,!0)}function G(e){return W(e,!1)}function X(){return i}function Q(e,t,n){i=e||"",ne=void 0===n?i.length:t+n,ee(t||0)}function Y(e){o=e}function $(e){n=e}function Z(e){a=e}function ee(t){e.Debug.assert(t>=0),te=t,re=t,ae=t,ie=0,se=!1,oe=void 0,ce=!1,_e=!1}void 0===a&&(a=0)
var te,ne,re,ae,ie,oe,se,ce,_e
return Q(i,s,c),{getStartPos:function(){return re},getTextPos:function(){return te},getToken:function(){return ie},getTokenPos:function(){return ae},getTokenText:function(){return i.substring(ae,te)},getTokenValue:function(){return oe},hasExtendedUnicodeEscape:function(){return ce},hasPrecedingLineBreak:function(){return se},isIdentifier:function(){return 69===ie||ie>105},isReservedWord:function(){return ie>=70&&105>=ie},isUnterminated:function(){return _e},reScanGreaterToken:L,reScanSlashToken:B,reScanTemplateToken:K,scanJsxIdentifier:U,reScanJsxToken:z,scanJsxToken:j,scanJSDocToken:q,scan:M,getText:X,setText:Q,setScriptTarget:$,setLanguageVariant:Z,setOnError:Y,setTextPos:ee,tryScan:G,lookAhead:H,scanRange:V}}e.tokenIsIdentifierOrKeyword=t
var R=e.createMap({"abstract":115,any:117,as:116,"boolean":120,"break":70,"case":71,"catch":72,"class":73,"continue":75,"const":74,constructor:121,"debugger":76,declare:122,"default":77,"delete":78,"do":79,"else":80,"enum":81,"export":82,"extends":83,"false":84,"finally":85,"for":86,from:136,"function":87,get:123,"if":88,"implements":106,"import":89,"in":90,"instanceof":91,"interface":107,is:124,let:108,module:125,namespace:126,never:127,"new":92,"null":93,number:130,"package":109,"private":110,"protected":111,"public":112,readonly:128,require:129,global:137,"return":94,set:131,"static":113,string:132,"super":95,"switch":96,symbol:133,"this":97,"throw":98,"true":99,"try":100,type:134,"typeof":101,undefined:135,"var":102,"void":103,"while":104,"with":105,"yield":114,async:118,await:119,of:138,"{":15,"}":16,"(":17,")":18,"[":19,"]":20,".":21,"...":22,";":23,",":24,"<":25,">":27,"<=":28,">=":29,"==":30,"!=":31,"===":32,"!==":33,"=>":34,"+":35,"-":36,"**":38,"*":37,"/":39,"%":40,"++":41,"--":42,"<<":43,"</":26,">>":44,">>>":45,"&":46,"|":47,"^":48,"!":49,"~":50,"&&":51,"||":52,"?":53,":":54,"=":56,"+=":57,"-=":58,"*=":59,"**=":60,"/=":61,"%=":62,"<<=":63,">>=":64,">>>=":65,"&=":66,"|=":67,"^=":68,"@":55}),F=[170,170,181,181,186,186,192,214,216,246,248,543,546,563,592,685,688,696,699,705,720,721,736,740,750,750,890,890,902,902,904,906,908,908,910,929,931,974,976,983,986,1011,1024,1153,1164,1220,1223,1224,1227,1228,1232,1269,1272,1273,1329,1366,1369,1369,1377,1415,1488,1514,1520,1522,1569,1594,1600,1610,1649,1747,1749,1749,1765,1766,1786,1788,1808,1808,1810,1836,1920,1957,2309,2361,2365,2365,2384,2384,2392,2401,2437,2444,2447,2448,2451,2472,2474,2480,2482,2482,2486,2489,2524,2525,2527,2529,2544,2545,2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,2617,2649,2652,2654,2654,2674,2676,2693,2699,2701,2701,2703,2705,2707,2728,2730,2736,2738,2739,2741,2745,2749,2749,2768,2768,2784,2784,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2870,2873,2877,2877,2908,2909,2911,2913,2949,2954,2958,2960,2962,2965,2969,2970,2972,2972,2974,2975,2979,2980,2984,2986,2990,2997,2999,3001,3077,3084,3086,3088,3090,3112,3114,3123,3125,3129,3168,3169,3205,3212,3214,3216,3218,3240,3242,3251,3253,3257,3294,3294,3296,3297,3333,3340,3342,3344,3346,3368,3370,3385,3424,3425,3461,3478,3482,3505,3507,3515,3517,3517,3520,3526,3585,3632,3634,3635,3648,3654,3713,3714,3716,3716,3719,3720,3722,3722,3725,3725,3732,3735,3737,3743,3745,3747,3749,3749,3751,3751,3754,3755,3757,3760,3762,3763,3773,3773,3776,3780,3782,3782,3804,3805,3840,3840,3904,3911,3913,3946,3976,3979,4096,4129,4131,4135,4137,4138,4176,4181,4256,4293,4304,4342,4352,4441,4447,4514,4520,4601,4608,4614,4616,4678,4680,4680,4682,4685,4688,4694,4696,4696,4698,4701,4704,4742,4744,4744,4746,4749,4752,4782,4784,4784,4786,4789,4792,4798,4800,4800,4802,4805,4808,4814,4816,4822,4824,4846,4848,4878,4880,4880,4882,4885,4888,4894,4896,4934,4936,4954,5024,5108,5121,5740,5743,5750,5761,5786,5792,5866,6016,6067,6176,6263,6272,6312,7680,7835,7840,7929,7936,7957,7960,7965,7968,8005,8008,8013,8016,8023,8025,8025,8027,8027,8029,8029,8031,8061,8064,8116,8118,8124,8126,8126,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,8182,8188,8319,8319,8450,8450,8455,8455,8458,8467,8469,8469,8473,8477,8484,8484,8486,8486,8488,8488,8490,8493,8495,8497,8499,8505,8544,8579,12293,12295,12321,12329,12337,12341,12344,12346,12353,12436,12445,12446,12449,12538,12540,12542,12549,12588,12593,12686,12704,12727,13312,19893,19968,40869,40960,42124,44032,55203,63744,64045,64256,64262,64275,64279,64285,64285,64287,64296,64298,64310,64312,64316,64318,64318,64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,64967,65008,65019,65136,65138,65140,65140,65142,65276,65313,65338,65345,65370,65382,65470,65474,65479,65482,65487,65490,65495,65498,65500],I=[170,170,181,181,186,186,192,214,216,246,248,543,546,563,592,685,688,696,699,705,720,721,736,740,750,750,768,846,864,866,890,890,902,902,904,906,908,908,910,929,931,974,976,983,986,1011,1024,1153,1155,1158,1164,1220,1223,1224,1227,1228,1232,1269,1272,1273,1329,1366,1369,1369,1377,1415,1425,1441,1443,1465,1467,1469,1471,1471,1473,1474,1476,1476,1488,1514,1520,1522,1569,1594,1600,1621,1632,1641,1648,1747,1749,1756,1759,1768,1770,1773,1776,1788,1808,1836,1840,1866,1920,1968,2305,2307,2309,2361,2364,2381,2384,2388,2392,2403,2406,2415,2433,2435,2437,2444,2447,2448,2451,2472,2474,2480,2482,2482,2486,2489,2492,2492,2494,2500,2503,2504,2507,2509,2519,2519,2524,2525,2527,2531,2534,2545,2562,2562,2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,2617,2620,2620,2622,2626,2631,2632,2635,2637,2649,2652,2654,2654,2662,2676,2689,2691,2693,2699,2701,2701,2703,2705,2707,2728,2730,2736,2738,2739,2741,2745,2748,2757,2759,2761,2763,2765,2768,2768,2784,2784,2790,2799,2817,2819,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2870,2873,2876,2883,2887,2888,2891,2893,2902,2903,2908,2909,2911,2913,2918,2927,2946,2947,2949,2954,2958,2960,2962,2965,2969,2970,2972,2972,2974,2975,2979,2980,2984,2986,2990,2997,2999,3001,3006,3010,3014,3016,3018,3021,3031,3031,3047,3055,3073,3075,3077,3084,3086,3088,3090,3112,3114,3123,3125,3129,3134,3140,3142,3144,3146,3149,3157,3158,3168,3169,3174,3183,3202,3203,3205,3212,3214,3216,3218,3240,3242,3251,3253,3257,3262,3268,3270,3272,3274,3277,3285,3286,3294,3294,3296,3297,3302,3311,3330,3331,3333,3340,3342,3344,3346,3368,3370,3385,3390,3395,3398,3400,3402,3405,3415,3415,3424,3425,3430,3439,3458,3459,3461,3478,3482,3505,3507,3515,3517,3517,3520,3526,3530,3530,3535,3540,3542,3542,3544,3551,3570,3571,3585,3642,3648,3662,3664,3673,3713,3714,3716,3716,3719,3720,3722,3722,3725,3725,3732,3735,3737,3743,3745,3747,3749,3749,3751,3751,3754,3755,3757,3769,3771,3773,3776,3780,3782,3782,3784,3789,3792,3801,3804,3805,3840,3840,3864,3865,3872,3881,3893,3893,3895,3895,3897,3897,3902,3911,3913,3946,3953,3972,3974,3979,3984,3991,3993,4028,4038,4038,4096,4129,4131,4135,4137,4138,4140,4146,4150,4153,4160,4169,4176,4185,4256,4293,4304,4342,4352,4441,4447,4514,4520,4601,4608,4614,4616,4678,4680,4680,4682,4685,4688,4694,4696,4696,4698,4701,4704,4742,4744,4744,4746,4749,4752,4782,4784,4784,4786,4789,4792,4798,4800,4800,4802,4805,4808,4814,4816,4822,4824,4846,4848,4878,4880,4880,4882,4885,4888,4894,4896,4934,4936,4954,4969,4977,5024,5108,5121,5740,5743,5750,5761,5786,5792,5866,6016,6099,6112,6121,6160,6169,6176,6263,6272,6313,7680,7835,7840,7929,7936,7957,7960,7965,7968,8005,8008,8013,8016,8023,8025,8025,8027,8027,8029,8029,8031,8061,8064,8116,8118,8124,8126,8126,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,8182,8188,8255,8256,8319,8319,8400,8412,8417,8417,8450,8450,8455,8455,8458,8467,8469,8469,8473,8477,8484,8484,8486,8486,8488,8488,8490,8493,8495,8497,8499,8505,8544,8579,12293,12295,12321,12335,12337,12341,12344,12346,12353,12436,12441,12442,12445,12446,12449,12542,12549,12588,12593,12686,12704,12727,13312,19893,19968,40869,40960,42124,44032,55203,63744,64045,64256,64262,64275,64279,64285,64296,64298,64310,64312,64316,64318,64318,64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,64967,65008,65019,65056,65059,65075,65076,65101,65103,65136,65138,65140,65140,65142,65276,65296,65305,65313,65338,65343,65343,65345,65370,65381,65470,65474,65479,65482,65487,65490,65495,65498,65500],M=[170,170,181,181,186,186,192,214,216,246,248,705,710,721,736,740,748,748,750,750,880,884,886,887,890,893,902,902,904,906,908,908,910,929,931,1013,1015,1153,1162,1319,1329,1366,1369,1369,1377,1415,1488,1514,1520,1522,1568,1610,1646,1647,1649,1747,1749,1749,1765,1766,1774,1775,1786,1788,1791,1791,1808,1808,1810,1839,1869,1957,1969,1969,1994,2026,2036,2037,2042,2042,2048,2069,2074,2074,2084,2084,2088,2088,2112,2136,2208,2208,2210,2220,2308,2361,2365,2365,2384,2384,2392,2401,2417,2423,2425,2431,2437,2444,2447,2448,2451,2472,2474,2480,2482,2482,2486,2489,2493,2493,2510,2510,2524,2525,2527,2529,2544,2545,2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,2617,2649,2652,2654,2654,2674,2676,2693,2701,2703,2705,2707,2728,2730,2736,2738,2739,2741,2745,2749,2749,2768,2768,2784,2785,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2869,2873,2877,2877,2908,2909,2911,2913,2929,2929,2947,2947,2949,2954,2958,2960,2962,2965,2969,2970,2972,2972,2974,2975,2979,2980,2984,2986,2990,3001,3024,3024,3077,3084,3086,3088,3090,3112,3114,3123,3125,3129,3133,3133,3160,3161,3168,3169,3205,3212,3214,3216,3218,3240,3242,3251,3253,3257,3261,3261,3294,3294,3296,3297,3313,3314,3333,3340,3342,3344,3346,3386,3389,3389,3406,3406,3424,3425,3450,3455,3461,3478,3482,3505,3507,3515,3517,3517,3520,3526,3585,3632,3634,3635,3648,3654,3713,3714,3716,3716,3719,3720,3722,3722,3725,3725,3732,3735,3737,3743,3745,3747,3749,3749,3751,3751,3754,3755,3757,3760,3762,3763,3773,3773,3776,3780,3782,3782,3804,3807,3840,3840,3904,3911,3913,3948,3976,3980,4096,4138,4159,4159,4176,4181,4186,4189,4193,4193,4197,4198,4206,4208,4213,4225,4238,4238,4256,4293,4295,4295,4301,4301,4304,4346,4348,4680,4682,4685,4688,4694,4696,4696,4698,4701,4704,4744,4746,4749,4752,4784,4786,4789,4792,4798,4800,4800,4802,4805,4808,4822,4824,4880,4882,4885,4888,4954,4992,5007,5024,5108,5121,5740,5743,5759,5761,5786,5792,5866,5870,5872,5888,5900,5902,5905,5920,5937,5952,5969,5984,5996,5998,6e3,6016,6067,6103,6103,6108,6108,6176,6263,6272,6312,6314,6314,6320,6389,6400,6428,6480,6509,6512,6516,6528,6571,6593,6599,6656,6678,6688,6740,6823,6823,6917,6963,6981,6987,7043,7072,7086,7087,7098,7141,7168,7203,7245,7247,7258,7293,7401,7404,7406,7409,7413,7414,7424,7615,7680,7957,7960,7965,7968,8005,8008,8013,8016,8023,8025,8025,8027,8027,8029,8029,8031,8061,8064,8116,8118,8124,8126,8126,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,8182,8188,8305,8305,8319,8319,8336,8348,8450,8450,8455,8455,8458,8467,8469,8469,8473,8477,8484,8484,8486,8486,8488,8488,8490,8493,8495,8505,8508,8511,8517,8521,8526,8526,8544,8584,11264,11310,11312,11358,11360,11492,11499,11502,11506,11507,11520,11557,11559,11559,11565,11565,11568,11623,11631,11631,11648,11670,11680,11686,11688,11694,11696,11702,11704,11710,11712,11718,11720,11726,11728,11734,11736,11742,11823,11823,12293,12295,12321,12329,12337,12341,12344,12348,12353,12438,12445,12447,12449,12538,12540,12543,12549,12589,12593,12686,12704,12730,12784,12799,13312,19893,19968,40908,40960,42124,42192,42237,42240,42508,42512,42527,42538,42539,42560,42606,42623,42647,42656,42735,42775,42783,42786,42888,42891,42894,42896,42899,42912,42922,43e3,43009,43011,43013,43015,43018,43020,43042,43072,43123,43138,43187,43250,43255,43259,43259,43274,43301,43312,43334,43360,43388,43396,43442,43471,43471,43520,43560,43584,43586,43588,43595,43616,43638,43642,43642,43648,43695,43697,43697,43701,43702,43705,43709,43712,43712,43714,43714,43739,43741,43744,43754,43762,43764,43777,43782,43785,43790,43793,43798,43808,43814,43816,43822,43968,44002,44032,55203,55216,55238,55243,55291,63744,64109,64112,64217,64256,64262,64275,64279,64285,64285,64287,64296,64298,64310,64312,64316,64318,64318,64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,64967,65008,65019,65136,65140,65142,65276,65313,65338,65345,65370,65382,65470,65474,65479,65482,65487,65490,65495,65498,65500],L=[170,170,181,181,186,186,192,214,216,246,248,705,710,721,736,740,748,748,750,750,768,884,886,887,890,893,902,902,904,906,908,908,910,929,931,1013,1015,1153,1155,1159,1162,1319,1329,1366,1369,1369,1377,1415,1425,1469,1471,1471,1473,1474,1476,1477,1479,1479,1488,1514,1520,1522,1552,1562,1568,1641,1646,1747,1749,1756,1759,1768,1770,1788,1791,1791,1808,1866,1869,1969,1984,2037,2042,2042,2048,2093,2112,2139,2208,2208,2210,2220,2276,2302,2304,2403,2406,2415,2417,2423,2425,2431,2433,2435,2437,2444,2447,2448,2451,2472,2474,2480,2482,2482,2486,2489,2492,2500,2503,2504,2507,2510,2519,2519,2524,2525,2527,2531,2534,2545,2561,2563,2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,2617,2620,2620,2622,2626,2631,2632,2635,2637,2641,2641,2649,2652,2654,2654,2662,2677,2689,2691,2693,2701,2703,2705,2707,2728,2730,2736,2738,2739,2741,2745,2748,2757,2759,2761,2763,2765,2768,2768,2784,2787,2790,2799,2817,2819,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2869,2873,2876,2884,2887,2888,2891,2893,2902,2903,2908,2909,2911,2915,2918,2927,2929,2929,2946,2947,2949,2954,2958,2960,2962,2965,2969,2970,2972,2972,2974,2975,2979,2980,2984,2986,2990,3001,3006,3010,3014,3016,3018,3021,3024,3024,3031,3031,3046,3055,3073,3075,3077,3084,3086,3088,3090,3112,3114,3123,3125,3129,3133,3140,3142,3144,3146,3149,3157,3158,3160,3161,3168,3171,3174,3183,3202,3203,3205,3212,3214,3216,3218,3240,3242,3251,3253,3257,3260,3268,3270,3272,3274,3277,3285,3286,3294,3294,3296,3299,3302,3311,3313,3314,3330,3331,3333,3340,3342,3344,3346,3386,3389,3396,3398,3400,3402,3406,3415,3415,3424,3427,3430,3439,3450,3455,3458,3459,3461,3478,3482,3505,3507,3515,3517,3517,3520,3526,3530,3530,3535,3540,3542,3542,3544,3551,3570,3571,3585,3642,3648,3662,3664,3673,3713,3714,3716,3716,3719,3720,3722,3722,3725,3725,3732,3735,3737,3743,3745,3747,3749,3749,3751,3751,3754,3755,3757,3769,3771,3773,3776,3780,3782,3782,3784,3789,3792,3801,3804,3807,3840,3840,3864,3865,3872,3881,3893,3893,3895,3895,3897,3897,3902,3911,3913,3948,3953,3972,3974,3991,3993,4028,4038,4038,4096,4169,4176,4253,4256,4293,4295,4295,4301,4301,4304,4346,4348,4680,4682,4685,4688,4694,4696,4696,4698,4701,4704,4744,4746,4749,4752,4784,4786,4789,4792,4798,4800,4800,4802,4805,4808,4822,4824,4880,4882,4885,4888,4954,4957,4959,4992,5007,5024,5108,5121,5740,5743,5759,5761,5786,5792,5866,5870,5872,5888,5900,5902,5908,5920,5940,5952,5971,5984,5996,5998,6e3,6002,6003,6016,6099,6103,6103,6108,6109,6112,6121,6155,6157,6160,6169,6176,6263,6272,6314,6320,6389,6400,6428,6432,6443,6448,6459,6470,6509,6512,6516,6528,6571,6576,6601,6608,6617,6656,6683,6688,6750,6752,6780,6783,6793,6800,6809,6823,6823,6912,6987,6992,7001,7019,7027,7040,7155,7168,7223,7232,7241,7245,7293,7376,7378,7380,7414,7424,7654,7676,7957,7960,7965,7968,8005,8008,8013,8016,8023,8025,8025,8027,8027,8029,8029,8031,8061,8064,8116,8118,8124,8126,8126,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,8182,8188,8204,8205,8255,8256,8276,8276,8305,8305,8319,8319,8336,8348,8400,8412,8417,8417,8421,8432,8450,8450,8455,8455,8458,8467,8469,8469,8473,8477,8484,8484,8486,8486,8488,8488,8490,8493,8495,8505,8508,8511,8517,8521,8526,8526,8544,8584,11264,11310,11312,11358,11360,11492,11499,11507,11520,11557,11559,11559,11565,11565,11568,11623,11631,11631,11647,11670,11680,11686,11688,11694,11696,11702,11704,11710,11712,11718,11720,11726,11728,11734,11736,11742,11744,11775,11823,11823,12293,12295,12321,12335,12337,12341,12344,12348,12353,12438,12441,12442,12445,12447,12449,12538,12540,12543,12549,12589,12593,12686,12704,12730,12784,12799,13312,19893,19968,40908,40960,42124,42192,42237,42240,42508,42512,42539,42560,42607,42612,42621,42623,42647,42655,42737,42775,42783,42786,42888,42891,42894,42896,42899,42912,42922,43e3,43047,43072,43123,43136,43204,43216,43225,43232,43255,43259,43259,43264,43309,43312,43347,43360,43388,43392,43456,43471,43481,43520,43574,43584,43597,43600,43609,43616,43638,43642,43643,43648,43714,43739,43741,43744,43759,43762,43766,43777,43782,43785,43790,43793,43798,43808,43814,43816,43822,43968,44010,44012,44013,44016,44025,44032,55203,55216,55238,55243,55291,63744,64109,64112,64217,64256,64262,64275,64279,64285,64296,64298,64310,64312,64316,64318,64318,64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,64967,65008,65019,65024,65039,65056,65062,65075,65076,65101,65103,65136,65140,65142,65276,65296,65305,65313,65338,65343,65343,65345,65370,65382,65470,65474,65479,65482,65487,65490,65495,65498,65500]
e.isUnicodeIdentifierStart=r
var B=i(R)
e.tokenToString=o,e.stringToToken=s,e.computeLineStarts=c,e.getPositionOfLineAndCharacter=_,e.computePositionOfLineAndCharacter=u,e.getLineStarts=l,e.computeLineAndCharacterOfPosition=d,e.getLineAndCharacterOfPosition=p
var J=Object.prototype.hasOwnProperty
e.isWhiteSpace=f,e.isWhiteSpaceSingleLine=g,e.isLineBreak=m,e.isOctalDigit=h,e.couldStartTrivia=v,e.skipTrivia=k
var K=7,z=/^#!.*/
e.getLeadingCommentRanges=T,e.getTrailingCommentRanges=E,e.getShebang=w,e.isIdentifierStart=A,e.isIdentifierPart=N,e.isIdentifier=P,e.createScanner=O}(ts||(ts={}))
var ts
!function(e){function t(e,t){var n=e.declarations
if(n)for(var r=0,a=n;r<a.length;r++){var i=a[r]
if(i.kind===t)return i}}function n(){if(0===qn.length){var e="",t=function(t){return e+=t}
return{string:function(){return e},writeKeyword:t,writeOperator:t,writePunctuation:t,writeSpace:t,writeStringLiteral:t,writeParameter:t,writeSymbol:t,writeLine:function(){return e+=" "},increaseIndent:function(){},decreaseIndent:function(){},clear:function(){return e=""},trackSymbol:function(){},reportInaccessibleThisError:function(){}}}return qn.pop()}function r(e){e.clear(),qn.push(e)}function a(e){return e.end-e.pos}function i(e,t,n){if(!e||!t)return e===t
if(e.length!==t.length)return!1
for(var r=0;r<e.length;r++){var a=n?n(e[r],t[r]):e[r]===t[r]
if(!a)return!1}return!0}function o(e,t){return!(!e.resolvedModules||!e.resolvedModules[t])}function s(e,t){return o(e,t)?e.resolvedModules[t]:void 0}function c(t,n,r){t.resolvedModules||(t.resolvedModules=e.createMap()),t.resolvedModules[n]=r}function _(t,n,r){t.resolvedTypeReferenceDirectiveNames||(t.resolvedTypeReferenceDirectiveNames=e.createMap()),t.resolvedTypeReferenceDirectiveNames[n]=r}function u(e,t){return e.resolvedFileName===t.resolvedFileName&&e.isExternalLibraryImport===t.isExternalLibraryImport}function l(e,t){return e.resolvedFileName===t.resolvedFileName&&e.primary===t.primary}function d(e,t,n,r){if(e.length!==t.length)return!1
for(var a=0;a<e.length;a++){var i=t[a],o=n&&n[e[a]],s=o?!i||!r(o,i):i
if(s)return!0}return!1}function p(e){return f(e),0!==(268435456&e.flags)}function f(t){if(!(536870912&t.flags)){var n=0!==(67108864&t.flags)||e.forEachChild(t,p)
n&&(t.flags|=268435456),t.flags|=536870912}}function g(e){for(;e&&256!==e.kind;)e=e.parent
return e}function m(e){switch(e.kind){case 199:case 227:case 206:case 207:case 208:return!0}return!1}function y(t,n){return e.Debug.assert(t>=0),e.getLineStarts(n)[t]}function h(t){var n=g(t),r=e.getLineAndCharacterOfPosition(n,t.pos)
return n.fileName+"("+(r.line+1)+","+(r.character+1)+")"}function v(e){return e.pos}function k(t,n){e.Debug.assert(t>=0)
var r=e.getLineStarts(n),a=t,i=n.text
if(a+1===r.length)return i.length-1
var o=r[a],s=r[a+1]-1
for(e.Debug.assert(e.isLineBreak(i.charCodeAt(s)));s>=o&&e.isLineBreak(i.charCodeAt(s));)s--
return s}function b(e){return e?e.pos===e.end&&e.pos>=0&&1!==e.kind:!0}function x(e){return!b(e)}function D(t,n,r){return b(t)?t.pos:C(t)?e.skipTrivia((n||g(t)).text,t.pos,!1,!0):r&&t.jsDocComments&&t.jsDocComments.length>0?D(t.jsDocComments[0]):286===t.kind&&t._children.length>0?D(t._children[0],n,r):e.skipTrivia((n||g(t)).text,t.pos)}function C(e){return e.kind>=257&&e.kind<=282}function S(e){return e.kind>=273&&e.kind<=285}function T(t,n){return b(t)||!t.decorators?D(t,n):e.skipTrivia((n||g(t)).text,t.decorators.end)}function E(t,n,r){if(void 0===r&&(r=!1),b(n))return""
var a=t.text
return a.substring(r?n.pos:e.skipTrivia(a,n.pos),n.end)}function w(t,n){return b(n)?"":t.substring(e.skipTrivia(t,n.pos),n.end)}function A(e,t){return void 0===t&&(t=!1),E(g(e),e,t)}function N(e){return e.length>=2&&95===e.charCodeAt(0)&&95===e.charCodeAt(1)?"_"+e:e}function P(e){return e.length>=3&&95===e.charCodeAt(0)&&95===e.charCodeAt(1)&&95===e.charCodeAt(2)?e.substr(1):e}function O(t){return e.getBaseFileName(t).replace(/^(\d)/,"_$1").replace(/\W/g,"_")}function R(e){return 0!==(3072&$(e))||z(e)}function F(e){return e&&225===e.kind&&(9===e.name.kind||B(e))}function I(e){return M(e.valueDeclaration)}function M(e){return 225===e.kind&&!e.body}function L(e){return 256===e.kind||225===e.kind||pe(e)||ye(e)}function B(e){return!!(131072&e.flags)}function J(t){if(!t||!F(t))return!1
switch(t.parent.kind){case 256:return e.isExternalModule(t.parent)
case 226:return F(t.parent.parent)&&!e.isExternalModule(t.parent.parent.parent)}return!1}function K(e){for(var t=e.parent;t;){if(pe(t))return t
switch(t.kind){case 256:case 227:case 252:case 225:case 206:case 207:case 208:return t
case 199:if(!pe(t.parent))return t}t=t.parent}}function z(e){return e&&218===e.kind&&e.parent&&252===e.parent.kind}function j(e){return 0===a(e)?"(Missing)":A(e)}function U(t,n,r,a,i){var o=g(t),s=H(o,t)
return e.createFileDiagnostic(o,s.start,s.length,n,r,a,i)}function q(e,t){var n=g(e),r=H(n,e)
return{file:n,start:r.start,length:r.length,code:t.code,category:t.category,messageText:t.next?t:t.messageText}}function W(t,n){var r=e.createScanner(t.languageVersion,!0,t.languageVariant,t.text,void 0,n)
r.scan()
var a=r.getTokenPos()
return e.createTextSpanFromBounds(a,r.getTextPos())}function V(t,n){var r=e.skipTrivia(t.text,n.pos)
if(n.body&&199===n.body.kind){var a=e.getLineAndCharacterOfPosition(t,n.body.pos).line,i=e.getLineAndCharacterOfPosition(t,n.body.end).line
if(i>a)return e.createTextSpan(r,k(a,t)-r+1)}return e.createTextSpanFromBounds(r,n.end)}function H(t,n){var r=n
switch(n.kind){case 256:var a=e.skipTrivia(t.text,0,!1)
return a===t.text.length?e.createTextSpan(0,0):W(t,a)
case 218:case 169:case 221:case 192:case 222:case 225:case 224:case 255:case 220:case 179:case 147:case 149:case 150:case 223:r=n.name
break
case 180:return V(t,n)}if(void 0===r)return W(t,n.pos)
var i=b(r)?r.pos:e.skipTrivia(t.text,r.pos)
return e.createTextSpanFromBounds(i,r.end)}function G(e){return void 0!==(e.externalModuleIndicator||e.commonJsModuleIndicator)}function X(e){return e.isDeclarationFile}function Q(e){return 224===e.kind&&Z(e)}function Y(e){for(;e&&(169===e.kind||ct(e));)e=e.parent
return e}function $(e){e=Y(e)
var t=e.flags
return 218===e.kind&&(e=e.parent),e&&219===e.kind&&(t|=e.flags,e=e.parent),e&&200===e.kind&&(t|=e.flags),t}function Z(e){return!!(2048&$(e))}function ee(e){return!!(1024&$(e))}function te(e){return 174===e.kind&&95===e.expression.kind}function ne(e){return 202===e.kind&&9===e.expression.kind}function re(t,n){return e.getLeadingCommentRanges(n.text,t.pos)}function ae(t,n){return e.getLeadingCommentRanges(n,t.pos)}function ie(e,t){return oe(e,t.text)}function oe(t,n){function r(e){return 42===n.charCodeAt(e.pos+1)&&42===n.charCodeAt(e.pos+2)&&47!==n.charCodeAt(e.pos+3)}var a=142===t.kind||141===t.kind||179===t.kind||180===t.kind?e.concatenate(e.getTrailingCommentRanges(n,t.pos),e.getLeadingCommentRanges(n,t.pos)):ae(t,n)
return e.filter(a,r)}function se(t){if(154<=t.kind&&t.kind<=166)return!0
switch(t.kind){case 117:case 130:case 132:case 120:case 133:case 135:case 127:return!0
case 103:return 183!==t.parent.kind
case 194:return!Cn(t)
case 69:139===t.parent.kind&&t.parent.right===t?t=t.parent:172===t.parent.kind&&t.parent.name===t&&(t=t.parent),e.Debug.assert(69===t.kind||139===t.kind||172===t.kind,"'node' was expected to be a qualified name, identifier or property access in 'isTypeNode'.")
case 139:case 172:case 97:var n=t.parent
if(158===n.kind)return!1
if(154<=n.kind&&n.kind<=166)return!0
switch(n.kind){case 194:return!Cn(n)
case 141:return t===n.constraint
case 145:case 144:case 142:case 218:return t===n.type
case 220:case 179:case 180:case 148:case 147:case 146:case 149:case 150:return t===n.type
case 151:case 152:case 153:return t===n.type
case 177:return t===n.type
case 174:case 175:return n.typeArguments&&e.indexOf(n.typeArguments,t)>=0
case 176:return!1}}return!1}function ce(t,n){function r(t){switch(t.kind){case 211:return n(t)
case 227:case 199:case 203:case 204:case 205:case 206:case 207:case 208:case 212:case 213:case 249:case 250:case 214:case 216:case 252:return e.forEachChild(t,r)}}return r(t)}function _e(t,n){function r(t){switch(t.kind){case 190:n(t)
var a=t.expression
a&&r(a)
case 224:case 222:case 225:case 223:case 221:case 192:return
default:if(pe(t)){var i=t.name
if(i&&140===i.kind)return void r(i.expression)}else se(t)||e.forEachChild(t,r)}}return r(t)}function ue(e){if(e)switch(e.kind){case 169:case 255:case 142:case 253:case 145:case 144:case 254:case 218:return!0}return!1}function le(e){return e&&(149===e.kind||150===e.kind)}function de(e){return e&&(221===e.kind||192===e.kind)}function pe(e){return e&&fe(e.kind)}function fe(e){switch(e){case 148:case 179:case 220:case 180:case 147:case 146:case 149:case 150:case 151:case 152:case 153:case 156:case 157:return!0}return!1}function ge(e){switch(e.kind){case 147:case 146:case 148:case 149:case 150:case 220:case 179:return!0}return!1}function me(e,t){switch(e.kind){case 206:case 207:case 208:case 204:case 205:return!0
case 214:return t&&me(e.statement,t)}return!1}function ye(e){return e&&199===e.kind&&pe(e.parent)}function he(e){return e&&147===e.kind&&171===e.parent.kind}function ve(e){return e&&1===e.kind}function ke(e){return e&&0===e.kind}function be(e){for(;;)if(e=e.parent,!e||pe(e))return e}function xe(e){for(;;)if(e=e.parent,!e||de(e))return e}function De(e,t){for(;;){if(e=e.parent,!e)return
switch(e.kind){case 140:if(de(e.parent.parent))return e
e=e.parent
break
case 143:142===e.parent.kind&&ft(e.parent.parent)?e=e.parent.parent:ft(e.parent)&&(e=e.parent)
break
case 180:if(!t)continue
case 220:case 179:case 225:case 145:case 144:case 147:case 146:case 148:case 149:case 150:case 151:case 152:case 153:case 224:case 256:return e}}}function Ce(e,t){for(;;){if(e=e.parent,!e)return e
switch(e.kind){case 140:e=e.parent
break
case 220:case 179:case 180:if(!t)continue
case 145:case 144:case 147:case 146:case 148:case 149:case 150:return e
case 143:142===e.parent.kind&&ft(e.parent.parent)?e=e.parent.parent:ft(e.parent)&&(e=e.parent)}}}function Se(e){if(179===e.kind||180===e.kind){for(var t=e,n=e.parent;178===n.kind;)t=n,n=n.parent
if(174===n.kind&&n.expression===t)return n}}function Te(e){return(172===e.kind||173===e.kind)&&95===e.expression.kind}function Ee(t){if(t)switch(t.kind){case 155:return t.typeName
case 194:return e.Debug.assert(Sn(t.expression)),t.expression
case 69:case 139:return t}}function we(e){return 176===e.kind?e.tag:e.expression}function Ae(e){switch(e.kind){case 221:return!0
case 145:return 221===e.parent.kind
case 149:case 150:case 147:return void 0!==e.body&&221===e.parent.kind
case 142:return void 0!==e.parent.body&&(148===e.parent.kind||147===e.parent.kind||150===e.parent.kind)&&221===e.parent.parent.kind}return!1}function Ne(e){return void 0!==e.decorators&&Ae(e)}function Pe(e){return 172===e.kind}function Oe(e){return 173===e.kind}function Re(e){var t=e.parent
return 243===t.kind||242===t.kind||245===t.kind?t.tagName===e:!1}function Fe(e){switch(e.kind){case 97:case 95:case 93:case 99:case 84:case 10:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 195:case 177:case 196:case 178:case 179:case 192:case 180:case 183:case 181:case 182:case 185:case 186:case 187:case 188:case 191:case 189:case 11:case 193:case 241:case 242:case 190:case 184:return!0
case 139:for(;139===e.parent.kind;)e=e.parent
return 158===e.parent.kind||Re(e)
case 69:if(158===e.parent.kind||Re(e))return!0
case 8:case 9:case 97:var t=e.parent
switch(t.kind){case 218:case 142:case 145:case 144:case 255:case 253:case 169:return t.initializer===e
case 202:case 203:case 204:case 205:case 211:case 212:case 213:case 249:case 215:case 213:return t.expression===e
case 206:var n=t
return n.initializer===e&&219!==n.initializer.kind||n.condition===e||n.incrementor===e
case 207:case 208:var r=t
return r.initializer===e&&219!==r.initializer.kind||r.expression===e
case 177:case 195:return e===t.expression
case 197:return e===t.expression
case 140:return e===t.expression
case 143:case 248:case 247:return!0
case 194:return t.expression===e&&Cn(t)
default:if(Fe(t))return!0}}return!1}function Ie(e){return/^\.\.?($|[\\\/])/.test(e)}function Me(t,n){var r=e.getModuleInstanceState(t)
return 1===r||n&&2===r}function Le(e){return 229===e.kind&&240===e.moduleReference.kind}function Be(t){return e.Debug.assert(Le(t)),t.moduleReference.expression}function Je(e){return 229===e.kind&&240!==e.moduleReference.kind}function Ke(e){return ze(e)}function ze(e){return e&&!!(134217728&e.flags)}function je(e,t){var n=174===e.kind&&69===e.expression.kind&&"require"===e.expression.text&&1===e.arguments.length
return n&&(!t||9===e.arguments[0].kind)}function Ue(e){return 39===e||34===e}function qe(e){if(e.valueDeclaration&&218===e.valueDeclaration.kind){var t=e.valueDeclaration
return t.initializer&&179===t.initializer.kind}return!1}function We(e){if(!ze(e))return 0
if(187!==e.kind)return 0
var t=e
if(56!==t.operatorToken.kind||172!==t.left.kind)return 0
var n=t.left
if(69===n.expression.kind){var r=n.expression
if("exports"===r.text)return 1
if("module"===r.text&&"exports"===n.name.text)return 2}else{if(97===n.expression.kind)return 4
if(172===n.expression.kind){var a=n.expression
if(69===a.expression.kind){var i=a.expression
if("module"===i.text&&"exports"===a.name.text)return 1
if("prototype"===a.name.text)return 3}}}return 0}function Ve(e){if(230===e.kind)return e.moduleSpecifier
if(229===e.kind){var t=e.moduleReference
if(240===t.kind)return t.expression}return 236===e.kind?e.moduleSpecifier:225===e.kind&&9===e.name.kind?e.name:void 0}function He(e){if(e)switch(e.kind){case 142:case 147:case 146:case 254:case 253:case 145:case 144:return void 0!==e.questionToken}return!1}function Ge(e){return 269===e.kind&&e.parameters.length>0&&271===e.parameters[0].type.kind}function Xe(e,t,n){if(e){var r=Qe(e,n)
if(r)for(var a=0,i=r;a<i.length;a++)for(var o=i[a],s=0,c=o.tags;s<c.length;s++){var _=c[s]
if(_.kind===t)return _}}}function Qe(e,t){if(e.jsDocComments)return e.jsDocComments
if(t){var n=218===e.parent.kind&&e.parent.initializer===e&&200===e.parent.parent.parent.kind,r=n?e.parent.parent.parent:void 0
if(r)return r.jsDocComments
var a=e.parent,i=a&&a.parent&&187===a.kind&&56===a.operatorToken.kind&&202===a.parent.kind
if(i)return a.parent.jsDocComments
var o=a&&253===a.kind
if(o)return a.jsDocComments}}function Ye(e){return Xe(e,277,!1)}function $e(e){return Xe(e,276,!0)}function Ze(e){return Xe(e,278,!1)}function et(e){if(e.name&&69===e.name.kind){var t=e.name.text,n=Qe(e.parent,!0)
if(n)for(var r=0,a=n;r<a.length;r++)for(var i=a[r],o=0,s=i.tags;o<s.length;o++){var c=s[o]
if(275===c.kind){var _=c,u=_.preParameterName||_.postParameterName
if(u.text===t)return _}}}}function tt(t){return rt(e.lastOrUndefined(t.parameters))}function nt(t){return at(e.lastOrUndefined(t.parameters))}function rt(e){if(e&&134217728&e.flags){if(e.type&&270===e.type.kind)return!0
var t=et(e)
if(t&&t.typeExpression)return 270===t.typeExpression.type.kind}return at(e)}function at(e){return e&&void 0!==e.dotDotDotToken}function it(e){return e>=8&&11>=e}function ot(e){return 9===e||11===e}function st(e){return e>=11&&14>=e}function ct(e){return!!e&&(168===e.kind||167===e.kind)}function _t(e){for(;178===e.parent.kind;)e=e.parent
for(;;){var t=e.parent
if(170!==t.kind&&191!==t.kind){if(253!==t.kind&&254!==t.kind)return 187===t.kind&&Dn(t.operatorToken.kind)&&t.left===e||(207===t.kind||208===t.kind)&&t.initializer===e
e=t.parent}else e=t}}function ut(e,t){for(;e;){if(e===t)return!0
e=e.parent}return!1}function lt(e){for(;e;){if(2&e.flags||256===e.kind&&e.isDeclarationFile)return!0
e=e.parent}return!1}function dt(e){switch(e.kind){case 180:case 169:case 221:case 192:case 148:case 224:case 255:case 238:case 220:case 179:case 149:case 231:case 229:case 234:case 222:case 147:case 146:case 225:case 232:case 228:case 142:case 253:case 145:case 144:case 150:case 254:case 223:case 141:case 218:case 279:return!0}return!1}function pt(e){switch(e.kind){case 210:case 209:case 217:case 204:case 202:case 201:case 207:case 208:case 206:case 203:case 214:case 211:case 213:case 215:case 216:case 200:case 205:case 212:case 235:return!0
default:return!1}}function ft(e){switch(e.kind){case 148:case 145:case 147:case 149:case 150:case 146:case 153:return!0
default:return!1}}function gt(e){if(69!==e.kind&&9!==e.kind&&8!==e.kind)return!1
var t=e.parent
return 234!==t.kind&&238!==t.kind||!t.propertyName?dt(t)?t.name===e:!1:!0}function mt(e){return(9===e.kind||8===e.kind)&&140===e.parent.kind&&dt(e.parent.parent)}function yt(e){var t=e.parent
switch(t.kind){case 145:case 144:case 147:case 146:case 149:case 150:case 255:case 253:case 172:return t.name===e
case 139:if(t.right===e){for(;139===t.kind;)t=t.parent
return 158===t.kind}return!1
case 169:case 234:return t.propertyName===e
case 238:return!0}return!1}function ht(e){return 229===e.kind||228===e.kind||231===e.kind&&!!e.name||232===e.kind||234===e.kind||238===e.kind||235===e.kind&&vt(e)}function vt(e){return Sn(e.expression)}function kt(e){var t=Dt(e.heritageClauses,83)
return t&&t.types.length>0?t.types[0]:void 0}function bt(e){var t=Dt(e.heritageClauses,106)
return t?t.types:void 0}function xt(e){var t=Dt(e.heritageClauses,83)
return t?t.types:void 0}function Dt(e,t){if(e)for(var n=0,r=e;n<r.length;n++){var a=r[n]
if(a.token===t)return a}}function Ct(t,n,r){if(!t.getCompilerOptions().noResolve){var a=e.isRootedDiskPath(r.fileName)?r.fileName:e.combinePaths(e.getDirectoryPath(n.fileName),r.fileName)
return t.getSourceFile(a)}}function St(e,t){for(;e;){if(e.kind===t)return e
e=e.parent}}function Tt(t,n){var r=/^\/\/\/\s*<reference\s+/gim,a=/^(\/\/\/\s*<reference\s+no-default-lib\s*=\s*)('|")(.+?)\2\s*\/>/gim
if(r.test(t)){if(a.test(t))return{isNoDefaultLib:!0}
var i=e.fullTripleSlashReferencePathRegEx.exec(t),o=!i&&e.fullTripleSlashReferenceTypeReferenceDirectiveRegEx.exec(t)
if(i||o){var s=n.pos,c=n.end
return{fileReference:{pos:s,end:c,fileName:(i||o)[3]},isNoDefaultLib:!1,isTypeReferenceDirective:!!o}}return{diagnosticMessage:e.Diagnostics.Invalid_reference_directive_syntax,isNoDefaultLib:!1}}}function Et(e){return e>=70&&138>=e}function wt(e){return e>=2&&7>=e}function At(e){return pe(e)&&0!==(256&e.flags)&&!le(e)}function Nt(e){return 9===e||8===e}function Pt(e){return e.name&&Ot(e.name)}function Ot(e){return 140===e.kind&&!Nt(e.expression.kind)&&!Rt(e.expression)}function Rt(e){return Pe(e)&&Mt(e.expression)}function Ft(e){if(69===e.kind||9===e.kind||8===e.kind||142===e.kind)return e.text
if(140===e.kind){var t=e.expression
if(Rt(t)){var n=t.name.text
return It(n)}if(9===t.kind||8===t.kind)return t.text}}function It(e){return"__@"+e}function Mt(e){return 69===e.kind&&"Symbol"===e.text}function Lt(e){switch(e){case 115:case 118:case 74:case 122:case 77:case 82:case 112:case 110:case 111:case 128:case 113:return!0}return!1}function Bt(e){var t=Jt(e)
return 142===t.kind}function Jt(e){for(;169===e.kind;)e=e.parent.parent
return e}function Kt(e){return pe(e)||225===e.kind||256===e.kind}function zt(t,n,r,a){var i=void 0!==n?e.createNode(t.kind,n.pos,n.end):Wt(t.kind)
for(var o in t)!i.hasOwnProperty(o)&&t.hasOwnProperty(o)&&(i[o]=t[o])
return void 0!==r&&(i.flags=r),void 0!==a&&(i.parent=a),i}function jt(e,t){var n=zt(e,e,e.flags,t)
if(Ut(n)){var r=n.left,a=n.right
n.left=jt(r,n),n.right=zt(a,a,a.flags,t)}return n}function Ut(e){return 139===e.kind}function qt(e){return-1===e.pos}function Wt(t,n){var r=e.createNode(t,-1,-1)
return r.startsOnNewLine=n,r}function Vt(){var e=[]
return e.pos=-1,e.end=-1,e}function Ht(){function t(){return u}function n(e){var t=c[e.fileName]
if(t)for(var n=0,r=t;n<r.length;n++){var a=r[n]
a.file=e}}function r(e){var t
e.file?(t=c[e.file.fileName],t||(t=[],c[e.file.fileName]=t)):t=s,t.push(e),_=!0,u++}function a(){return o(),s}function i(t){function n(e){r.push(e)}if(o(),t)return c[t]||[]
var r=[]
e.forEach(s,n)
for(var a in c)e.forEach(c[a],n)
return e.sortAndDeduplicateDiagnostics(r)}function o(){if(_){_=!1,s=e.sortAndDeduplicateDiagnostics(s)
for(var t in c)c[t]=e.sortAndDeduplicateDiagnostics(c[t])}}var s=[],c=e.createMap(),_=!1,u=0
return{add:r,getGlobalDiagnostics:a,getDiagnostics:i,getModificationCount:t,reattachFileDiagnostics:n}}function Gt(e){function t(e){return Vn[e]||Qt(e.charCodeAt(0))}return e=Wn.test(e)?e.replace(Wn,t):e}function Xt(e){var t=e.substr(0,1)
return t.toLowerCase()===t}function Qt(e){var t=e.toString(16).toUpperCase(),n=("0000"+t).slice(-4)
return"\\u"+n}function Yt(e){return Hn.test(e)?e.replace(Hn,function(e){return Qt(e.charCodeAt(0))}):e}function $t(e){return void 0===Gn[e]&&(Gn[e]=$t(e-1)+Gn[1]),Gn[e]}function Zt(){return Gn[1].length}function en(t){function n(e){e&&e.length&&(u&&(c+=$t(_),u=!1),c+=e)}function r(){c="",_=0,u=!0,l=0,d=0}function a(e){void 0!==e&&(u&&(u=!1),c+=e)}function i(t){if(t&&t.length){n(t)
var r=e.computeLineStarts(t)
r.length>1&&(l=l+r.length-1,d=c.length-t.length+e.lastOrUndefined(r))}}function o(){u||(c+=t,l++,d=c.length,u=!0)}function s(e,t){n(w(e,t))}var c,_,u,l,d
return r(),{write:n,rawWrite:a,writeTextOfNode:s,writeLiteral:i,writeLine:o,increaseIndent:function(){_++},decreaseIndent:function(){_--},getIndent:function(){return _},getTextPos:function(){return c.length},getLine:function(){return l+1},getColumn:function(){return u?_*Zt()+1:c.length-d+1},getText:function(){return c},reset:r}}function tn(t,n){var r=function(e){return t.getCanonicalFileName(e)},a=e.toPath(t.getCommonSourceDirectory(),t.getCurrentDirectory(),r),i=e.getNormalizedAbsolutePath(n,t.getCurrentDirectory()),o=e.getRelativePathToDirectoryOrUrl(a,i,a,r,!1)
return e.removeFileExtension(o)}function nn(t,n,r){var a,i=n.getCompilerOptions()
return a=i.outDir?e.removeFileExtension(cn(t,n,i.outDir)):e.removeFileExtension(t.fileName),a+r}function rn(t,n){var r=n.getCompilerOptions(),a=r.declarationDir||r.outDir
if(r.declaration){var i=a?cn(t,n,a):t.fileName
return e.removeFileExtension(i)+".d.ts"}}function an(e){return e.target||0}function on(t){return"number"==typeof t.module?t.module:2===an(t)?e.ModuleKind.ES6:e.ModuleKind.CommonJS}function sn(t,n,r){function a(t,r){var a=".js"
1===s.jsx&&(Ke(r)?e.fileExtensionIs(r.fileName,".jsx")&&(a=".jsx"):1===r.languageVariant&&(a=".jsx"))
var i=nn(r,t,a),c={jsFilePath:i,sourceMapFilePath:o(i,s),declarationFilePath:Ke(r)?void 0:rn(r,t)}
n(c,[r],!1)}function i(t){var r=e.filter(t.getSourceFiles(),function(n){return!(X(n)||t.isSourceFileFromExternalLibrary(n)||e.isExternalModule(n)&&!on(s))})
if(r.length){var a=s.outFile||s.out,i={jsFilePath:a,sourceMapFilePath:o(a,s),declarationFilePath:s.declaration?e.removeFileExtension(a)+".d.ts":void 0}
n(i,r,!0)}}function o(e,t){return t.sourceMap?e+".map":void 0}var s=t.getCompilerOptions()
if(s.outFile||s.out)i(t)
else for(var c=void 0===r?t.getSourceFiles():[r],_=0,u=c;_<u.length;_++){var l=u[_]
X(l)||t.isSourceFileFromExternalLibrary(l)||a(t,l)}}function cn(t,n,r){var a=e.getNormalizedAbsolutePath(t.fileName,n.getCurrentDirectory()),i=n.getCommonSourceDirectory(),o=0===n.getCanonicalFileName(a).indexOf(n.getCanonicalFileName(i))
return a=o?a.substring(i.length):a,e.combinePaths(r,a)}function _n(t,n,r,a,i,o){t.writeFile(r,a,i,function(t){n.add(e.createCompilerDiagnostic(e.Diagnostics.Could_not_write_file_0_Colon_1,r,t))},o)}function un(t,n){return e.getLineAndCharacterOfPosition(t,n).line}function ln(t,n){return e.computeLineAndCharacterOfPosition(t,n).line}function dn(t){return e.forEach(t.members,function(e){return 148===e.kind&&x(e.body)?e:void 0})}function pn(e){if(e&&e.parameters.length>0){var t=2===e.parameters.length&&69===e.parameters[0].name.kind&&97===e.parameters[0].name.originalKeywordKind
return e.parameters[t?1:0].type}}function fn(t,n){var r,a,i,o
return Pt(n)?(r=n,149===n.kind?i=n:150===n.kind?o=n:e.Debug.fail("Accessor has wrong kind")):e.forEach(t,function(e){if((149===e.kind||150===e.kind)&&(32&e.flags)===(32&n.flags)){var t=Ft(e.name),s=Ft(n.name)
t===s&&(r?a||(a=e):r=e,149!==e.kind||i||(i=e),150!==e.kind||o||(o=e))}}),{firstAccessor:r,secondAccessor:a,getAccessor:i,setAccessor:o}}function gn(e,t,n,r){r&&r.length&&n.pos!==r[0].pos&&ln(e,n.pos)!==ln(e,r[0].pos)&&t.writeLine()}function mn(t,n,r,a,i,o,s){var c=!i
e.forEach(a,function(e){c&&(r.write(" "),c=!1),s(t,n,r,e,o),e.hasTrailingNewLine?r.writeLine():i?r.write(" "):c=!0})}function yn(t,n,r,a,i,o,s){function c(e){return 42===t.charCodeAt(e.pos+1)&&33===t.charCodeAt(e.pos+2)}var _,u
if(s?0===i.pos&&(_=e.filter(e.getLeadingCommentRanges(t,i.pos),c)):_=e.getLeadingCommentRanges(t,i.pos),_){for(var l=[],d=void 0,p=0,f=_;p<f.length;p++){var g=f[p]
if(d){var m=ln(n,d.end),y=ln(n,g.pos)
if(y>=m+2)break}l.push(g),d=g}if(l.length){var m=ln(n,e.lastOrUndefined(l).end),h=ln(n,e.skipTrivia(t,i.pos))
h>=m+2&&(gn(n,r,i,_),mn(t,n,r,l,!0,o,a),u={nodePos:i.pos,detachedCommentEndPos:e.lastOrUndefined(l).end})}}return u}function hn(t,n,r,a,i){if(42===t.charCodeAt(a.pos+1))for(var o=e.computeLineAndCharacterOfPosition(n,a.pos),s=n.length,c=void 0,_=a.pos,u=o.line;_<a.end;u++){var l=u+1===s?t.length+1:n[u+1]
if(_!==a.pos){void 0===c&&(c=kn(t,n[o.line],a.pos))
var d=r.getIndent()*Zt(),p=d-c+kn(t,_,l)
if(p>0){var f=p%Zt(),g=$t((p-f)/Zt())
for(r.rawWrite(g);f;)r.rawWrite(" "),f--}else r.rawWrite("")}vn(t,a,r,i,_,l),_=l}else r.write(t.substring(a.pos,a.end))}function vn(e,t,n,r,a,i){var o=Math.min(t.end,i-1),s=e.substring(a,o).replace(/^\s+|\s+$/g,"")
s?(n.write(s),o!==t.end&&n.writeLine()):n.writeLiteral(r)}function kn(t,n,r){for(var a=0;r>n&&e.isWhiteSpaceSingleLine(t.charCodeAt(n));n++)9===t.charCodeAt(n)?a+=Zt()-a%Zt():a++
return a}function bn(e){switch(e){case 113:return 32
case 112:return 4
case 111:return 16
case 110:return 8
case 115:return 128
case 82:return 1
case 122:return 2
case 74:return 2048
case 77:return 512
case 118:return 256
case 128:return 64}return 0}function xn(e){if(e)switch(e.kind){case 172:case 173:case 175:case 174:case 196:case 241:case 242:case 176:case 170:case 178:case 171:case 192:case 179:case 69:case 10:case 8:case 9:case 11:case 189:case 84:case 93:case 97:case 99:case 95:return!0}return!1}function Dn(e){return e>=56&&68>=e}function Cn(e){return 194===e.kind&&83===e.parent.token&&de(e.parent.parent)}function Sn(e){return 69===e.kind||172===e.kind&&Sn(e.expression)}function Tn(e){return 139===e.parent.kind&&e.parent.right===e||172===e.parent.kind&&e.parent.name===e}function En(e){var t=e.kind
return 171===t?0===e.properties.length:170===t?0===e.elements.length:!1}function wn(e){return e&&e.valueDeclaration&&512&e.valueDeclaration.flags?e.valueDeclaration.localSymbol:void 0}function An(t){return e.forEach(e.supportedJavascriptExtensions,function(n){return e.fileExtensionIs(t,n)})}function Nn(t){return e.forEach(e.supportedTypeScriptExtensions,function(n){return e.fileExtensionIs(t,n)})}function Pn(t){return e.find(e.supportedTypescriptExtensionsForExtractExtension,function(n){return e.fileExtensionIs(t,n)})}function On(t){for(var n=[],r=t.length,a=0;r>a;a++){var i=t.charCodeAt(a)
128>i?n.push(i):2048>i?(n.push(i>>6|192),n.push(63&i|128)):65536>i?(n.push(i>>12|224),n.push(i>>6&63|128),n.push(63&i|128)):131072>i?(n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(63&i|128)):e.Debug.assert(!1,"Unexpected code point")}return n}function Rn(e){return void 0===e?void 0:Fn(e)}function Fn(t){return"string"==typeof t?'"'+Gt(t)+'"':"number"==typeof t?isFinite(t)?t+"":"null":"boolean"==typeof t?t?"true":"false":"object"==typeof t&&t?e.isArray(t)?In(Mn,t):In(Bn,t):"null"}function In(t,n){e.Debug.assert(!n.hasOwnProperty("__cycle"),"Converting circular structure to JSON"),n.__cycle=!0
var r=t(n)
return delete n.__cycle,r}function Mn(t){return"["+e.reduceLeft(t,Ln,"")+"]"}function Ln(e,t){return(e?e+",":e)+Fn(t)}function Bn(t){return"{"+e.reduceOwnProperties(t,Jn,"")+"}"}function Jn(e,t,n){return void 0===t||"function"==typeof t||"__cycle"===n?e:(e?e+",":e)+('"'+Gt(n)+'":'+Fn(t))}function Kn(e){for(var t,n,r,a,i="",o=On(e),s=0,c=o.length;c>s;)t=o[s]>>2,n=(3&o[s])<<4|o[s+1]>>4,r=(15&o[s+1])<<2|o[s+2]>>6,a=63&o[s+2],s+1>=c?r=a=64:s+2>=c&&(a=64),i+=Xn.charAt(t)+Xn.charAt(n)+Xn.charAt(r)+Xn.charAt(a),s+=3
return i}function zn(t,n,r){return e.isRootedDiskPath(t)?e.getRelativePathToDirectoryOrUrl(n,t,n,r,!1):t}function jn(t){return 0===t.newLine?Qn:1===t.newLine?Yn:e.sys?e.sys.newLine:Qn}function Un(e){return e.watch&&e.hasOwnProperty("watch")}e.getDeclarationOfKind=t
var qn=[]
e.getSingleLineStringWriter=n,e.releaseStringWriter=r,e.getFullWidth=a,e.arrayIsEqualTo=i,e.hasResolvedModule=o,e.getResolvedModule=s,e.setResolvedModule=c,e.setResolvedTypeReferenceDirective=_,e.moduleResolutionIsEqualTo=u,e.typeDirectiveIsEqualTo=l,e.hasChangesInResolutions=d,e.containsParseError=p,e.getSourceFileOfNode=g,e.isStatementWithLocals=m,e.getStartPositionOfLine=y,e.nodePosToString=h,e.getStartPosOfNode=v,e.getEndLinePosition=k,e.nodeIsMissing=b,e.nodeIsPresent=x,e.getTokenPosOfNode=D,e.isJSDocNode=C,e.isJSDocTag=S,e.getNonDecoratorTokenPosOfNode=T,e.getSourceTextOfNodeFromSourceFile=E,e.getTextOfNodeFromSourceText=w,e.getTextOfNode=A,e.escapeIdentifier=N,e.unescapeIdentifier=P,e.makeIdentifierFromModuleName=O,e.isBlockOrCatchScoped=R,e.isAmbientModule=F,e.isShorthandAmbientModuleSymbol=I,e.isBlockScopedContainerTopLevel=L,e.isGlobalScopeAugmentation=B,e.isExternalModuleAugmentation=J,e.getEnclosingBlockScopeContainer=K,e.isCatchClauseVariableDeclaration=z,e.declarationNameToString=j,e.createDiagnosticForNode=U,e.createDiagnosticForNodeFromMessageChain=q,e.getSpanOfTokenAtPosition=W,e.getErrorSpanForNode=H,e.isExternalOrCommonJsModule=G,e.isDeclarationFile=X,e.isConstEnumDeclaration=Q,e.getCombinedNodeFlags=$,e.isConst=Z,e.isLet=ee,e.isSuperCallExpression=te,e.isPrologueDirective=ne,e.getLeadingCommentRangesOfNode=re,e.getLeadingCommentRangesOfNodeFromText=ae,e.getJsDocComments=ie,e.getJsDocCommentsFromText=oe,e.fullTripleSlashReferencePathRegEx=/^(\/\/\/\s*<reference\s+path\s*=\s*)('|")(.+?)\2.*?\/>/,e.fullTripleSlashReferenceTypeReferenceDirectiveRegEx=/^(\/\/\/\s*<reference\s+types\s*=\s*)('|")(.+?)\2.*?\/>/,e.fullTripleSlashAMDReferencePathRegEx=/^(\/\/\/\s*<amd-dependency\s+path\s*=\s*)('|")(.+?)\2.*?\/>/,e.isTypeNode=se,e.forEachReturnStatement=ce,e.forEachYieldExpression=_e,e.isVariableLike=ue,e.isAccessor=le,e.isClassLike=de,e.isFunctionLike=pe,e.isFunctionLikeKind=fe,e.introducesArgumentsExoticObject=ge,e.isIterationStatement=me,e.isFunctionBlock=ye,e.isObjectLiteralMethod=he,e.isIdentifierTypePredicate=ve,e.isThisTypePredicate=ke,e.getContainingFunction=be,e.getContainingClass=xe,e.getThisContainer=De,e.getSuperContainer=Ce,e.getImmediatelyInvokedFunctionExpression=Se,e.isSuperPropertyOrElementAccess=Te,e.getEntityNameFromTypeNode=Ee,e.getInvokedExpression=we,e.nodeCanBeDecorated=Ae,e.nodeIsDecorated=Ne,e.isPropertyAccessExpression=Pe,e.isElementAccessExpression=Oe,e.isJSXTagName=Re,e.isExpression=Fe,e.isExternalModuleNameRelative=Ie,e.isInstantiatedModule=Me,e.isExternalModuleImportEqualsDeclaration=Le,e.getExternalModuleImportEqualsDeclarationExpression=Be,e.isInternalModuleImportEqualsDeclaration=Je,e.isSourceFileJavaScript=Ke,e.isInJavaScriptFile=ze,e.isRequireCall=je,e.isSingleOrDoubleQuote=Ue,e.isDeclarationOfFunctionExpression=qe,e.getSpecialPropertyAssignmentKind=We,e.getExternalModuleName=Ve,e.hasQuestionToken=He,e.isJSDocConstructSignature=Ge,e.getJSDocTypeTag=Ye,e.getJSDocReturnTag=$e,e.getJSDocTemplateTag=Ze,e.getCorrespondingJSDocParameterTag=et,e.hasRestParameter=tt,e.hasDeclaredRestParameter=nt,e.isRestParameter=rt,e.isDeclaredRestParam=at,e.isLiteralKind=it,e.isTextualLiteralKind=ot,e.isTemplateLiteralKind=st,e.isBindingPattern=ct,e.isAssignmentTarget=_t,e.isNodeDescendentOf=ut,e.isInAmbientContext=lt,e.isDeclaration=dt,e.isStatement=pt,e.isClassElement=ft,e.isDeclarationName=gt,e.isLiteralComputedPropertyDeclarationName=mt,e.isIdentifierName=yt,e.isAliasSymbolDeclaration=ht,e.exportAssignmentIsAlias=vt,e.getClassExtendsHeritageClauseElement=kt,e.getClassImplementsHeritageClauseElements=bt,e.getInterfaceBaseTypeNodes=xt,e.getHeritageClause=Dt,e.tryResolveScriptReference=Ct,e.getAncestor=St,e.getFileReferenceFromReferencePath=Tt,e.isKeyword=Et,e.isTrivia=wt,e.isAsyncFunctionLike=At,e.isStringOrNumericLiteral=Nt,e.hasDynamicName=Pt,e.isDynamicName=Ot,e.isWellKnownSymbolSyntactically=Rt,e.getPropertyNameForPropertyNameNode=Ft,e.getPropertyNameForKnownSymbolName=It,e.isESSymbolIdentifier=Mt,e.isModifierKind=Lt,e.isParameterDeclaration=Bt,e.getRootDeclaration=Jt,e.nodeStartsNewLexicalEnvironment=Kt,e.cloneNode=zt,e.cloneEntityName=jt,e.isQualifiedName=Ut,e.nodeIsSynthesized=qt,e.createSynthesizedNode=Wt,e.createSynthesizedNodeArray=Vt,e.createDiagnosticCollection=Ht
var Wn=/[\\\"\u0000-\u001f\t\v\f\b\r\n\u2028\u2029\u0085]/g,Vn=e.createMap({"\x00":"\\0","	":"\\t","\x0B":"\\v","\f":"\\f","\b":"\\b","\r":"\\r","\n":"\\n","\\":"\\\\",'"':'\\"',"\u2028":"\\u2028","\u2029":"\\u2029","":"\\u0085"})
e.escapeString=Gt,e.isIntrinsicJsxName=Xt
var Hn=/[^\u0000-\u007F]/g
e.escapeNonAsciiCharacters=Yt
var Gn=["","    "]
e.getIndentString=$t,e.getIndentSize=Zt,e.createTextWriter=en,e.getExternalModuleNameFromPath=tn,e.getOwnEmitOutputFilePath=nn,e.getDeclarationEmitOutputFilePath=rn,e.getEmitScriptTarget=an,e.getEmitModuleKind=on,e.forEachExpectedEmitFile=sn,e.getSourceFilePathInNewDir=cn,e.writeFile=_n,e.getLineOfLocalPosition=un,e.getLineOfLocalPositionFromLineMap=ln,e.getFirstConstructorWithBody=dn,e.getSetAccessorTypeAnnotationNode=pn,e.getAllAccessorDeclarations=fn,e.emitNewLineBeforeLeadingComments=gn,e.emitComments=mn,e.emitDetachedComments=yn,e.writeCommentRange=hn,e.modifierToFlag=bn,e.isLeftHandSideExpression=xn,e.isAssignmentOperator=Dn,e.isExpressionWithTypeArgumentsInClassExtendsClause=Cn,e.isEntityNameExpression=Sn,e.isRightSideOfQualifiedNameOrPropertyAccess=Tn,e.isEmptyObjectLiteralOrArrayLiteral=En,e.getLocalSymbolForExportDefault=wn,e.hasJavaScriptFileExtension=An,e.hasTypeScriptFileExtension=Nn,e.tryExtractTypeScriptExtension=Pn,e.stringify="undefined"!=typeof JSON&&JSON.stringify?JSON.stringify:Rn
var Xn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
e.convertToBase64=Kn,e.convertToRelativePath=zn
var Qn="\r\n",Yn="\n"
e.getNewLineCharacter=jn,e.isWatchSet=Un}(ts||(ts={}))
var ts
!function(e){function t(e){return 2===e.target?"lib.es6.d.ts":"lib.d.ts"}function n(e){return e.start+e.length}function r(e){return 0===e.length}function a(e,t){return t>=e.start&&t<n(e)}function i(e,t){return t.start>=e.start&&n(t)<=n(e)}function o(e,t){var r=Math.max(e.start,t.start),a=Math.min(n(e),n(t))
return a>r}function s(e,t){var r=Math.max(e.start,t.start),a=Math.min(n(e),n(t))
return a>r?f(r,a):void 0}function c(e,t){return t.start<=n(e)&&n(t)>=e.start}function _(e,t,r){var a=t+r
return t<=n(e)&&a>=e.start}function u(e,t,n,r){var a=e+t,i=n+r
return a>=n&&i>=e}function l(e,t){return t<=n(e)&&t>=e.start}function d(e,t){var r=Math.max(e.start,t.start),a=Math.min(n(e),n(t))
return a>=r?f(r,a):void 0}function p(e,t){if(0>e)throw Error("start < 0")
if(0>t)throw Error("length < 0")
return{start:e,length:t}}function f(e,t){return p(e,t-e)}function g(e){return p(e.span.start,e.newLength)}function m(e){return r(e.span)&&0===e.newLength}function y(e,t){if(0>t)throw Error("newLength < 0")
return{span:e,newLength:t}}function h(t){if(0===t.length)return e.unchangedTextChangeRange
if(1===t.length)return t[0]
for(var r=t[0],a=r.span.start,i=n(r.span),o=a+r.newLength,s=1;s<t.length;s++){var c=t[s],_=a,u=i,l=o,d=c.span.start,p=n(c.span),g=d+c.newLength
a=Math.min(_,d),i=Math.max(u,u+(p-l)),o=Math.max(g,g+(l-p))}return y(f(a,i),o-a)}function v(t){if(t&&141===t.kind)for(var n=t;n;n=n.parent)if(e.isFunctionLike(n)||e.isClassLike(n)||222===n.kind)return n}function k(t){return 92&t.flags&&148===t.parent.kind&&e.isClassLike(t.parent.parent)}e.getDefaultLibFileName=t,e.textSpanEnd=n,e.textSpanIsEmpty=r,e.textSpanContainsPosition=a,e.textSpanContainsTextSpan=i,e.textSpanOverlapsWith=o,e.textSpanOverlap=s,e.textSpanIntersectsWithTextSpan=c,e.textSpanIntersectsWith=_,e.decodedTextSpanIntersectsWith=u,e.textSpanIntersectsWithPosition=l,e.textSpanIntersection=d,e.createTextSpan=p,e.createTextSpanFromBounds=f,e.textChangeRangeNewSpan=g,e.textChangeRangeIsUnchanged=m,e.createTextChangeRange=y,e.unchangedTextChangeRange=y(p(0,0),0),e.collapseTextChangeRangesAcrossMultipleVersions=h,e.getTypeParameterOwner=v,e.isParameterPropertyDeclaration=k}(ts||(ts={}))
var ts
!function(e){function t(t,n,r){return 256===t?new(f||(f=e.objectAllocator.getSourceFileConstructor()))(t,n,r):69===t?new(p||(p=e.objectAllocator.getIdentifierConstructor()))(t,n,r):139>t?new(d||(d=e.objectAllocator.getTokenConstructor()))(t,n,r):new(l||(l=e.objectAllocator.getNodeConstructor()))(t,n,r)}function n(e,t){return t?e(t):void 0}function r(e,t){return t?e(t):void 0}function a(e,t){if(t)for(var n=0,r=t;n<r.length;n++){var a=r[n],i=e(a)
if(i)return i}}function i(e,t,i){if(e){var o=i?r:a,s=i||t
switch(e.kind){case 139:return n(t,e.left)||n(t,e.right)
case 141:return n(t,e.name)||n(t,e.constraint)||n(t,e.expression)
case 254:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.name)||n(t,e.questionToken)||n(t,e.equalsToken)||n(t,e.objectAssignmentInitializer)
case 142:case 145:case 144:case 253:case 218:case 169:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.propertyName)||n(t,e.dotDotDotToken)||n(t,e.name)||n(t,e.questionToken)||n(t,e.type)||n(t,e.initializer)
case 156:case 157:case 151:case 152:case 153:return o(s,e.decorators)||o(s,e.modifiers)||o(s,e.typeParameters)||o(s,e.parameters)||n(t,e.type)
case 147:case 146:case 148:case 149:case 150:case 179:case 220:case 180:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.asteriskToken)||n(t,e.name)||n(t,e.questionToken)||o(s,e.typeParameters)||o(s,e.parameters)||n(t,e.type)||n(t,e.equalsGreaterThanToken)||n(t,e.body)
case 155:return n(t,e.typeName)||o(s,e.typeArguments)
case 154:return n(t,e.parameterName)||n(t,e.type)
case 158:return n(t,e.exprName)
case 159:return o(s,e.members)
case 160:return n(t,e.elementType)
case 161:return o(s,e.elementTypes)
case 162:case 163:return o(s,e.types)
case 164:return n(t,e.type)
case 166:return n(t,e.literal)
case 167:case 168:return o(s,e.elements)
case 170:return o(s,e.elements)
case 171:return o(s,e.properties)
case 172:return n(t,e.expression)||n(t,e.name)
case 173:return n(t,e.expression)||n(t,e.argumentExpression)
case 174:case 175:return n(t,e.expression)||o(s,e.typeArguments)||o(s,e.arguments)
case 176:return n(t,e.tag)||n(t,e.template)
case 177:return n(t,e.type)||n(t,e.expression)
case 178:return n(t,e.expression)
case 181:return n(t,e.expression)
case 182:return n(t,e.expression)
case 183:return n(t,e.expression)
case 185:return n(t,e.operand)
case 190:return n(t,e.asteriskToken)||n(t,e.expression)
case 184:return n(t,e.expression)
case 186:return n(t,e.operand)
case 187:return n(t,e.left)||n(t,e.operatorToken)||n(t,e.right)
case 195:return n(t,e.expression)||n(t,e.type)
case 196:return n(t,e.expression)
case 188:return n(t,e.condition)||n(t,e.questionToken)||n(t,e.whenTrue)||n(t,e.colonToken)||n(t,e.whenFalse)
case 191:return n(t,e.expression)
case 199:case 226:return o(s,e.statements)
case 256:return o(s,e.statements)||n(t,e.endOfFileToken)
case 200:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.declarationList)
case 219:return o(s,e.declarations)
case 202:return n(t,e.expression)
case 203:return n(t,e.expression)||n(t,e.thenStatement)||n(t,e.elseStatement)
case 204:return n(t,e.statement)||n(t,e.expression)
case 205:return n(t,e.expression)||n(t,e.statement)
case 206:return n(t,e.initializer)||n(t,e.condition)||n(t,e.incrementor)||n(t,e.statement)
case 207:return n(t,e.initializer)||n(t,e.expression)||n(t,e.statement)
case 208:return n(t,e.initializer)||n(t,e.expression)||n(t,e.statement)
case 209:case 210:return n(t,e.label)
case 211:return n(t,e.expression)
case 212:return n(t,e.expression)||n(t,e.statement)
case 213:return n(t,e.expression)||n(t,e.caseBlock)
case 227:return o(s,e.clauses)
case 249:return n(t,e.expression)||o(s,e.statements)
case 250:return o(s,e.statements)
case 214:return n(t,e.label)||n(t,e.statement)
case 215:return n(t,e.expression)
case 216:return n(t,e.tryBlock)||n(t,e.catchClause)||n(t,e.finallyBlock)
case 252:return n(t,e.variableDeclaration)||n(t,e.block)
case 143:return n(t,e.expression)
case 221:case 192:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.name)||o(s,e.typeParameters)||o(s,e.heritageClauses)||o(s,e.members)
case 222:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.name)||o(s,e.typeParameters)||o(s,e.heritageClauses)||o(s,e.members)
case 223:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.name)||o(s,e.typeParameters)||n(t,e.type)
case 224:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.name)||o(s,e.members)
case 255:return n(t,e.name)||n(t,e.initializer)
case 225:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.name)||n(t,e.body)
case 229:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.name)||n(t,e.moduleReference)
case 230:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.importClause)||n(t,e.moduleSpecifier)
case 231:return n(t,e.name)||n(t,e.namedBindings)
case 228:return n(t,e.name)
case 232:return n(t,e.name)
case 233:case 237:return o(s,e.elements)
case 236:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.exportClause)||n(t,e.moduleSpecifier)
case 234:case 238:return n(t,e.propertyName)||n(t,e.name)
case 235:return o(s,e.decorators)||o(s,e.modifiers)||n(t,e.expression)
case 189:return n(t,e.head)||o(s,e.templateSpans)
case 197:return n(t,e.expression)||n(t,e.literal)
case 140:return n(t,e.expression)
case 251:return o(s,e.types)
case 194:return n(t,e.expression)||o(s,e.typeArguments)
case 240:return n(t,e.expression)
case 239:return o(s,e.decorators)
case 241:return n(t,e.openingElement)||o(s,e.children)||n(t,e.closingElement)
case 242:case 243:return n(t,e.tagName)||o(s,e.attributes)
case 246:return n(t,e.name)||n(t,e.initializer)
case 247:return n(t,e.expression)
case 248:return n(t,e.expression)
case 245:return n(t,e.tagName)
case 257:return n(t,e.type)
case 261:return o(s,e.types)
case 262:return o(s,e.types)
case 260:return n(t,e.elementType)
case 264:return n(t,e.type)
case 263:return n(t,e.type)
case 265:return o(s,e.members)
case 267:return n(t,e.name)||o(s,e.typeArguments)
case 268:return n(t,e.type)
case 269:return o(s,e.parameters)||n(t,e.type)
case 270:return n(t,e.type)
case 271:return n(t,e.type)
case 272:return n(t,e.type)
case 266:return n(t,e.name)||n(t,e.type)
case 273:return o(s,e.tags)
case 275:return n(t,e.preParameterName)||n(t,e.typeExpression)||n(t,e.postParameterName)
case 276:return n(t,e.typeExpression)
case 277:return n(t,e.typeExpression)
case 278:return o(s,e.typeParameters)
case 279:return n(t,e.typeExpression)||n(t,e.name)||n(t,e.jsDocTypeLiteral)
case 281:return o(s,e.jsDocPropertyTags)
case 280:return n(t,e.typeExpression)||n(t,e.name)
case 282:return n(t,e.literal)}}}function o(t,n,r,a,i){void 0===a&&(a=!1),e.performance.mark("beforeParse")
var o=g.parseSourceFile(t,n,r,void 0,a,i)
return e.performance.mark("afterParse"),e.performance.measure("Parse","beforeParse","afterParse"),o}function s(e){return void 0!==e.externalModuleIndicator}function c(e,t,n,r){return m.updateSourceFile(e,t,n,r)}function _(e,t,n){var r=g.JSDocParser.parseIsolatedJSDocComment(e,t,n)
return r&&r.jsDocComment&&g.fixupParentReferences(r.jsDocComment),r}function u(e,t,n){return g.JSDocParser.parseJSDocTypeExpressionForTests(e,t,n)}var l,d,p,f
e.createNode=t,e.forEachChild=i,e.createSourceFile=o,e.isExternalModule=s,e.updateSourceFile=c,e.parseIsolatedJSDocComment=_,e.parseJSDocTypeExpressionForTests=u
var g
!function(t){function n(t,n,r,i,c,_){_=e.ensureScriptKind(t,_),a(t,n,r,i,_)
var u=s(t,r,c,_)
return o(),u}function r(e){return 4===e||2===e||1===e?1:0}function a(t,n,a,i,o){Ka=e.objectAllocator.getNodeConstructor(),za=e.objectAllocator.getTokenConstructor(),ja=e.objectAllocator.getIdentifierConstructor(),Ua=e.objectAllocator.getSourceFileConstructor(),Ga=n,Va=i,Wa=[],$a=0,Qa=e.createMap(),Ya=0,Xa=0,Za=1===o||2===o?134217728:0,ni=!1,ei.setText(Ga),ei.setOnError(O),ei.setScriptTarget(a),ei.setLanguageVariant(r(o))}function o(){ei.setText(""),ei.setOnError(void 0),Wa=void 0,qa=void 0,Qa=void 0,Va=void 0,Ga=void 0}function s(t,n,r,a){return qa=u(t,n,a),qa.flags=Za,M(),Ba(qa),qa.statements=Ee(0,Pr),e.Debug.assert(1===I()),qa.endOfFileToken=Q(),Ja(qa),qa.nodeCount=Xa,qa.identifierCount=Ya,qa.identifiers=Qa,qa.parseDiagnostics=Wa,r&&_(qa),qa}function c(t){if(134217728&Za){var n=e.getLeadingCommentRangesOfNode(t,qa)
if(n)for(var r=0,a=n;r<a.length;r++){var i=a[r],o=ii.parseJSDocComment(t,i.pos,i.end-i.pos)
o&&(t.jsDocComments||(t.jsDocComments=[]),t.jsDocComments.push(o))}}return t}function _(e){function t(e){if(e.parent!==n){e.parent=n
var r=n
if(n=e,i(e,t),e.jsDocComments)for(var a=0,o=e.jsDocComments;a<o.length;a++){var s=o[a]
s.parent=e,n=s,i(s,t)}n=r}}var n=e
i(e,t)}function u(t,n,a){var i=new Ua(256,0,Ga.length)
return Xa++,i.text=Ga,i.bindDiagnostics=[],i.languageVersion=n,i.fileName=e.normalizePath(t),i.languageVariant=r(a),i.isDeclarationFile=e.fileExtensionIs(i.fileName,".d.ts"),i.scriptKind=a,i}function l(e,t){e?Za|=t:Za&=~t}function d(e){l(e,4194304)}function p(e){l(e,8388608)}function f(e){l(e,16777216)}function g(e){l(e,33554432)}function m(e,t){var n=e&Za
if(n){l(!1,n)
var r=t()
return l(!0,n),r}return t()}function y(e,t){var n=e&~Za
if(n){l(!0,n)
var r=t()
return l(!1,n),r}return t()}function h(e){return m(4194304,e)}function v(e){return y(4194304,e)}function k(e){return y(8388608,e)}function b(e){return y(16777216,e)}function x(e){return y(33554432,e)}function D(e){return m(33554432,e)}function C(e){return y(41943040,e)}function S(e){return 0!==(Za&e)}function T(){return S(8388608)}function E(){return S(4194304)}function w(){return S(16777216)}function A(){return S(33554432)}function N(e,t){var n=ei.getTokenPos(),r=ei.getTextPos()-n
P(n,r,e,t)}function P(t,n,r,a){var i=e.lastOrUndefined(Wa)
i&&t===i.start||Wa.push(e.createFileDiagnostic(qa,t,n,r,a)),ni=!0}function O(e,t){var n=ei.getTextPos()
P(n,t||0,e)}function R(){return ei.getStartPos()}function F(){return ei.getStartPos()}function I(){return Ha}function M(){return Ha=ei.scan()}function L(){return Ha=ei.reScanGreaterToken()}function B(){return Ha=ei.reScanSlashToken()}function J(){return Ha=ei.reScanTemplateToken()}function K(){return Ha=ei.scanJsxIdentifier()}function z(){return Ha=ei.scanJsxToken()}function j(t,n){var r=Ha,a=Wa.length,i=ni,o=Za,s=n?ei.lookAhead(t):ei.tryScan(t)
return e.Debug.assert(o===Za),(!s||n)&&(Ha=r,Wa.length=a,ni=i),s}function U(e){return j(e,!0)}function q(e){return j(e,!1)}function W(){return 69===I()?!0:114===I()&&T()?!1:119===I()&&A()?!1:I()>105}function V(t,n,r){return void 0===r&&(r=!0),I()===t?(r&&M(),!0):(n?N(n):N(e.Diagnostics._0_expected,e.tokenToString(t)),!1)}function H(e){return I()===e?(M(),!0):!1}function G(e){return I()===e?Q():void 0}function X(e,t,n,r){return G(e)||te(e,t,n,r)}function Q(){var e=Z(I())
return M(),ee(e)}function Y(){return 23===I()?!0:16===I()||1===I()||ei.hasPrecedingLineBreak()}function $(){return Y()?(23===I()&&M(),!0):V(23)}function Z(e,t){return Xa++,t>=0||(t=ei.getStartPos()),e>=139?new Ka(e,t,t):69===e?new ja(e,t,t):new za(e,t,t)}function ee(e,t){return e.end=void 0===t?ei.getStartPos():t,Za&&(e.flags|=Za),ni&&(ni=!1,e.flags|=67108864),e}function te(e,t,n,r){t?P(ei.getStartPos(),0,n,r):N(n,r)
var a=Z(e,ei.getStartPos())
return a.text="",ee(a)}function ne(t){return t=e.escapeIdentifier(t),Qa[t]||(Qa[t]=t)}function re(t,n){if(Ya++,t){var r=Z(69)
return 69!==I()&&(r.originalKeywordKind=I()),r.text=ne(ei.getTokenValue()),M(),ee(r)}return te(69,!1,n||e.Diagnostics.Identifier_expected)}function ae(e){return re(W(),e)}function ie(){return re(e.tokenIsIdentifierOrKeyword(I()))}function oe(){return e.tokenIsIdentifierOrKeyword(I())||9===I()||8===I()}function se(e){return 9===I()||8===I()?Ge(!0):e&&19===I()?le():ie()}function ce(){return se(!0)}function _e(){return se(!1)}function ue(){return 9===I()||8===I()||e.tokenIsIdentifierOrKeyword(I())}function le(){var e=Z(140)
return V(19),e.expression=h(Vt),V(20),ee(e)}function de(e){return I()===e&&q(fe)}function pe(){return M(),ei.hasPrecedingLineBreak()?!1:me()}function fe(){return 74===I()?81===M():82===I()?(M(),77===I()?U(ye):37!==I()&&116!==I()&&15!==I()&&me()):77===I()?ye():113===I()?(M(),me()):pe()}function ge(){return e.isModifierKind(I())&&q(fe)}function me(){return 19===I()||15===I()||37===I()||22===I()||oe()}function ye(){return M(),73===I()||87===I()||118===I()&&U(Cr)}function he(t,n){var r=Ae(t)
if(r)return!0
switch(t){case 0:case 1:case 3:return!(23===I()&&n)&&wr()
case 2:return 71===I()||77===I()
case 4:return U(yt)
case 5:return U(Zr)||23===I()&&!n
case 6:return 19===I()||oe()
case 12:return 19===I()||37===I()||oe()
case 9:return 19===I()||oe()
case 7:return 15===I()?U(ve):n?W()&&!xe():Ut()&&!xe()
case 8:return Jr()
case 10:return 24===I()||22===I()||Jr()
case 17:return W()
case 11:case 15:return 24===I()||22===I()||qt()
case 16:return at()
case 18:case 19:return 24===I()||At()
case 20:return da()
case 21:return e.tokenIsIdentifierOrKeyword(I())
case 13:return e.tokenIsIdentifierOrKeyword(I())||15===I()
case 14:return!0
case 22:case 23:case 25:return ii.isJSDocType()
case 24:return ue()}e.Debug.fail("Non-exhaustive case in 'isListElement'.")}function ve(){if(e.Debug.assert(15===I()),16===M()){var t=M()
return 24===t||15===t||83===t||106===t}return!0}function ke(){return M(),W()}function be(){return M(),e.tokenIsIdentifierOrKeyword(I())}function xe(){return 106===I()||83===I()?U(De):!1}function De(){return M(),qt()}function Ce(e){if(1===I())return!0
switch(e){case 1:case 2:case 4:case 5:case 6:case 12:case 9:case 21:return 16===I()
case 3:return 16===I()||71===I()||77===I()
case 7:return 15===I()||83===I()||106===I()
case 8:return Se()
case 17:return 27===I()||17===I()||15===I()||83===I()||106===I()
case 11:return 18===I()||23===I()
case 15:case 19:case 10:return 20===I()
case 16:return 18===I()||20===I()
case 18:return 27===I()||17===I()
case 20:return 15===I()||16===I()
case 13:return 27===I()||39===I()
case 14:return 25===I()&&U(Ca)
case 22:return 18===I()||54===I()||16===I()
case 23:return 27===I()||16===I()
case 25:return 20===I()||16===I()
case 24:return 16===I()}}function Se(){return Y()?!0:un(I())?!0:34===I()?!0:!1}function Te(){for(var e=0;26>e;e++)if($a&1<<e&&(he(e,!0)||Ce(e)))return!0
return!1}function Ee(e,t){var n=$a
$a|=1<<e
var r=[]
for(r.pos=R();!Ce(e);)if(he(e,!1)){var a=we(e,t)
r.push(a)}else if(Je(e))break
return r.end=F(),$a=n,r}function we(e,t){var n=Ae(e)
return n?Ne(n):t()}function Ae(t){if(!ni&&Va){var n=Va.currentNode(ei.getStartPos())
if(!e.nodeIsMissing(n)&&!n.intersectsChange&&!e.containsParseError(n)){var r=197132288&n.flags
if(r===Za&&Pe(n,t))return n}}}function Ne(e){return ei.setTextPos(e.end),M(),e}function Pe(e,t){switch(t){case 5:return Oe(e)
case 2:return Re(e)
case 0:case 1:case 3:return Fe(e)
case 6:return Ie(e)
case 4:return Me(e)
case 8:return Le(e)
case 16:return Be(e)
case 20:case 17:case 19:case 18:case 11:case 12:case 7:case 13:case 14:}return!1}function Oe(e){if(e)switch(e.kind){case 148:case 153:case 149:case 150:case 145:case 198:return!0
case 147:var t=e,n=69===t.name.kind&&121===t.name.originalKeywordKind
return!n}return!1}function Re(e){if(e)switch(e.kind){case 249:case 250:return!0}return!1}function Fe(e){if(e)switch(e.kind){case 220:case 200:case 199:case 203:case 202:case 215:case 211:case 213:case 210:case 209:case 207:case 208:case 206:case 205:case 212:case 201:case 216:case 214:case 204:case 217:case 230:case 229:case 236:case 235:case 225:case 221:case 222:case 224:case 223:return!0}return!1}function Ie(e){return 255===e.kind}function Me(e){if(e)switch(e.kind){case 152:case 146:case 153:case 144:case 151:return!0}return!1}function Le(e){if(218!==e.kind)return!1
var t=e
return void 0===t.initializer}function Be(e){if(142!==e.kind)return!1
var t=e
return void 0===t.initializer}function Je(e){return N(Ke(e)),Te()?!0:(M(),!1)}function Ke(t){switch(t){case 0:return e.Diagnostics.Declaration_or_statement_expected
case 1:return e.Diagnostics.Declaration_or_statement_expected
case 2:return e.Diagnostics.case_or_default_expected
case 3:return e.Diagnostics.Statement_expected
case 4:return e.Diagnostics.Property_or_signature_expected
case 5:return e.Diagnostics.Unexpected_token_A_constructor_method_accessor_or_property_was_expected
case 6:return e.Diagnostics.Enum_member_expected
case 7:return e.Diagnostics.Expression_expected
case 8:return e.Diagnostics.Variable_declaration_expected
case 9:return e.Diagnostics.Property_destructuring_pattern_expected
case 10:return e.Diagnostics.Array_element_destructuring_pattern_expected
case 11:return e.Diagnostics.Argument_expression_expected
case 12:return e.Diagnostics.Property_assignment_expected
case 15:return e.Diagnostics.Expression_or_comma_expected
case 16:return e.Diagnostics.Parameter_declaration_expected
case 17:return e.Diagnostics.Type_parameter_declaration_expected
case 18:return e.Diagnostics.Type_argument_expected
case 19:return e.Diagnostics.Type_expected
case 20:return e.Diagnostics.Unexpected_token_expected
case 21:return e.Diagnostics.Identifier_expected
case 13:return e.Diagnostics.Identifier_expected
case 14:return e.Diagnostics.Identifier_expected
case 22:return e.Diagnostics.Parameter_declaration_expected
case 23:return e.Diagnostics.Type_argument_expected
case 25:return e.Diagnostics.Type_expected
case 24:return e.Diagnostics.Property_assignment_expected}}function ze(e,t,n){var r=$a
$a|=1<<e
var a=[]
a.pos=R()
for(var i=-1;;)if(he(e,!1)){if(a.push(we(e,t)),i=ei.getTokenPos(),H(24))continue
if(i=-1,Ce(e))break
V(24),n&&23===I()&&!ei.hasPrecedingLineBreak()&&M()}else{if(Ce(e))break
if(Je(e))break}return i>=0&&(a.hasTrailingComma=!0),a.end=F(),$a=r,a}function je(){var e=R(),t=[]
return t.pos=e,t.end=e,t}function Ue(e,t,n,r){if(V(n)){var a=ze(e,t)
return V(r),a}return je()}function qe(e,t){for(var n=ae(t);H(21);){var r=Z(139,n.pos)
r.left=n,r.right=We(e),n=ee(r)}return n}function We(t){if(ei.hasPrecedingLineBreak()&&e.tokenIsIdentifierOrKeyword(I())){var n=U(Dr)
if(n)return te(69,!0,e.Diagnostics.Identifier_expected)}return t?ie():ae()}function Ve(){var t=Z(189)
t.head=Xe(),e.Debug.assert(12===t.head.kind,"Template head has wrong token kind")
var n=[]
n.pos=R()
do n.push(He())
while(13===e.lastOrUndefined(n).literal.kind)
return n.end=F(),t.templateSpans=n,ee(t)}function He(){var t=Z(197)
t.expression=h(Vt)
var n
return 16===I()?(J(),n=Xe()):n=X(14,!1,e.Diagnostics._0_expected,e.tokenToString(16)),t.literal=n,ee(t)}function Ge(e){return Qe(I(),e)}function Xe(){return Qe(I(),!1)}function Qe(t,n){var r=Z(t),a=ei.getTokenValue()
r.text=n?ne(a):a,ei.hasExtendedUnicodeEscape()&&(r.hasExtendedUnicodeEscape=!0),ei.isUnterminated()&&(r.isUnterminated=!0)
var i=ei.getTokenPos()
return M(),ee(r),8===r.kind&&48===Ga.charCodeAt(i)&&e.isOctalDigit(Ga.charCodeAt(i+1))&&(r.isOctalLiteral=!0),r}function Ye(){var t=qe(!1,e.Diagnostics.Type_expected),n=Z(155,t.pos)
return n.typeName=t,ei.hasPrecedingLineBreak()||25!==I()||(n.typeArguments=Ue(18,Kt,25,27)),ee(n)}function $e(e){M()
var t=Z(154,e.pos)
return t.parameterName=e,t.type=Kt(),ee(t)}function Ze(){var e=Z(165)
return M(),ee(e)}function et(){var e=Z(158)
return V(101),e.exprName=qe(!0),ee(e)}function tt(){var e=Z(141)
return e.name=ae(),H(83)&&(At()||!qt()?e.constraint=Kt():e.expression=xn()),ee(e)}function nt(){return 25===I()?Ue(17,tt,25,27):void 0}function rt(){return H(54)?Kt():void 0}function at(){return 22===I()||Jr()||e.isModifierKind(I())||55===I()||97===I()}function it(e,t){t&&(e.flags|=t.flags,e.modifiers=t)}function ot(){var t=Z(142)
return 97===I()?(t.name=re(!0,void 0),t.type=rt(),ee(t)):(t.decorators=ea(),it(t,ta()),t.dotDotDotToken=G(22),t.name=Kr(),0===e.getFullWidth(t.name)&&0===t.flags&&e.isModifierKind(I())&&M(),t.questionToken=G(53),t.type=rt(),t.initializer=st(!0),c(ee(t)))}function st(e){return e?ct():Qr()}function ct(){return Ht(!0)}function _t(e,t,n,r,a){var i=34===e
a.typeParameters=nt(),a.parameters=ut(t,n,r),i?(V(e),a.type=Bt()):H(e)&&(a.type=Bt())}function ut(e,t,n){if(V(17)){var r=T(),a=A()
p(e),g(t)
var i=ze(16,ot)
if(p(r),g(a),!V(18)&&n)return
return i}return n?void 0:je()}function lt(){H(24)||$()}function dt(e){var t=Z(e)
return 152===e&&V(92),_t(54,!1,!1,!1,t),lt(),ee(t)}function pt(){return 19!==I()?!1:U(ft)}function ft(){if(M(),22===I()||20===I())return!0
if(e.isModifierKind(I())){if(M(),W())return!0}else{if(!W())return!1
M()}return 54===I()||24===I()?!0:53!==I()?!1:(M(),54===I()||24===I()||20===I())}function gt(e,t,n){var r=Z(153,e)
return r.decorators=t,it(r,n),r.parameters=Ue(16,ot,19,20),r.type=jt(),lt(),ee(r)}function mt(e,t){var n=ce(),r=G(53)
if(17===I()||25===I()){var a=Z(146,e)
return it(a,t),a.name=n,a.questionToken=r,_t(54,!1,!1,!1,a),lt(),ee(a)}var i=Z(144,e)
return it(i,t),i.name=n,i.questionToken=r,i.type=jt(),56===I()&&(i.initializer=Qr()),lt(),ee(i)}function yt(){var t
if(17===I()||25===I())return!0
for(;e.isModifierKind(I());)t=I(),M()
return 19===I()?!0:(oe()&&(t=I(),M()),t?17===I()||25===I()||53===I()||54===I()||Y():!1)}function ht(){if(17===I()||25===I())return dt(151)
if(92===I()&&U(vt))return dt(152)
var e=R(),t=ta()
return pt()?gt(e,void 0,t):mt(e,t)}function vt(){return M(),17===I()||25===I()}function kt(){var e=Z(159)
return e.members=bt(),ee(e)}function bt(){var e
return V(15)?(e=Ee(4,ht),V(16)):e=je(),e}function xt(){var e=Z(161)
return e.elementTypes=Ue(19,Kt,19,20),ee(e)}function Dt(){var e=Z(164)
return V(17),e.type=Kt(),V(18),ee(e)}function Ct(e){var t=Z(e)
return 157===e&&V(92),_t(34,!1,!1,!1,t),ee(t)}function St(){var e=Q()
return 21===I()?void 0:e}function Tt(){var e=Z(166)
return e.literal=Dn(),ee(e),e}function Et(){return 8===M()}function wt(){switch(I()){case 117:case 132:case 130:case 120:case 133:case 135:case 127:var e=q(St)
return e||Ye()
case 9:case 8:case 99:case 84:return Tt()
case 36:return U(Et)?Tt():Ye()
case 103:case 93:return Q()
case 97:var t=Ze()
return 124!==I()||ei.hasPrecedingLineBreak()?t:$e(t)
case 101:return et()
case 15:return kt()
case 19:return xt()
case 17:return Dt()
default:return Ye()}}function At(){switch(I()){case 117:case 132:case 130:case 120:case 133:case 103:case 135:case 93:case 97:case 101:case 127:case 15:case 19:case 25:case 92:case 9:case 8:case 99:case 84:return!0
case 36:return U(Et)
case 17:return U(Nt)
default:return W()}}function Nt(){return M(),18===I()||at()||At()}function Pt(){for(var e=wt();!ei.hasPrecedingLineBreak()&&H(19);){V(20)
var t=Z(160,e.pos)
t.elementType=e,e=ee(t)}return e}function Ot(e,t,n){var r=t()
if(I()===n){var a=[r]
for(a.pos=r.pos;H(n);)a.push(t())
a.end=F()
var i=Z(e,r.pos)
i.types=a,r=ee(i)}return r}function Rt(){return Ot(163,Pt,46)}function Ft(){return Ot(162,Rt,47)}function It(){return 25===I()?!0:17===I()&&U(Lt)}function Mt(){if(e.isModifierKind(I())&&ta(),W()||97===I())return M(),!0
if(19===I()||15===I()){var t=Wa.length
return Kr(),t===Wa.length}return!1}function Lt(){if(M(),18===I()||22===I())return!0
if(Mt()){if(54===I()||24===I()||53===I()||56===I())return!0
if(18===I()&&(M(),34===I()))return!0}return!1}function Bt(){var e=W()&&q(Jt),t=Kt()
if(e){var n=Z(154,e.pos)
return n.parameterName=e,n.type=t,ee(n)}return t}function Jt(){var e=ae()
return 124!==I()||ei.hasPrecedingLineBreak()?void 0:(M(),e)}function Kt(){return m(41943040,zt)}function zt(){return It()?Ct(156):92===I()?Ct(157):Ft()}function jt(){return H(54)?Kt():void 0}function Ut(){switch(I()){case 97:case 95:case 93:case 99:case 84:case 8:case 9:case 11:case 12:case 17:case 19:case 15:case 87:case 73:case 92:case 39:case 61:case 69:return!0
default:return W()}}function qt(){if(Ut())return!0
switch(I()){case 35:case 36:case 50:case 49:case 78:case 101:case 103:case 41:case 42:case 25:case 119:case 114:return!0
default:return dn()?!0:W()}}function Wt(){return 15!==I()&&87!==I()&&73!==I()&&55!==I()&&qt()}function Vt(){var e=w()
e&&f(!1)
for(var t,n=Gt();t=G(24);)n=fn(n,t,Gt())
return e&&f(!0),n}function Ht(e){return 56===I()||!(ei.hasPrecedingLineBreak()||e&&15===I())&&qt()?(V(56),Gt()):void 0}function Gt(){if(Xt())return Yt()
var t=Zt()||rn()
if(t)return t
var n=_n(0)
return 69===n.kind&&34===I()?$t(n):e.isLeftHandSideExpression(n)&&e.isAssignmentOperator(L())?fn(n,Q(),Gt()):cn(n)}function Xt(){return 114===I()?T()?!0:U(Sr):!1}function Qt(){return M(),!ei.hasPrecedingLineBreak()&&W()}function Yt(){var e=Z(190)
return M(),ei.hasPrecedingLineBreak()||37!==I()&&!qt()?ee(e):(e.asteriskToken=G(37),e.expression=Gt(),ee(e))}function $t(t,n){e.Debug.assert(34===I(),"parseSimpleArrowFunctionExpression should only have been called if we had a =>")
var r
n?(r=Z(180,n.pos),it(r,n)):r=Z(180,t.pos)
var a=Z(142,t.pos)
return a.name=t,ee(a),r.parameters=[a],r.parameters.pos=a.pos,r.parameters.end=a.end,r.equalsGreaterThanToken=X(34,!1,e.Diagnostics._0_expected,"=>"),r.body=sn(!!n),ee(r)}function Zt(){var t=en()
if(0!==t){var n=1===t?on(!0):q(nn)
if(n){var r=!!(256&n.flags),a=I()
return n.equalsGreaterThanToken=X(34,!1,e.Diagnostics._0_expected,"=>"),n.body=34===a||15===a?sn(r):ae(),ee(n)}}}function en(){return 17===I()||25===I()||118===I()?U(tn):34===I()?1:0}function tn(){if(118===I()){if(M(),ei.hasPrecedingLineBreak())return 0
if(17!==I()&&25!==I())return 0}var t=I(),n=M()
if(17===t){if(18===n){var r=M()
switch(r){case 34:case 54:case 15:return 1
default:return 0}}return 19===n||15===n?2:22===n?1:W()?54===M()?1:2:0}if(e.Debug.assert(25===t),!W())return 0
if(1===qa.languageVariant){var a=U(function(){var e=M()
if(83===e){var t=M()
switch(t){case 56:case 27:return!1
default:return!0}}else if(24===e)return!0
return!1})
return a?1:0}return 2}function nn(){return on(!1)}function rn(){if(118===I()){var e=U(an)
if(1===e){var t=na(),n=_n(0)
return $t(n,t)}}}function an(){if(118===I()){if(M(),ei.hasPrecedingLineBreak()||34===I())return 0
var e=_n(0)
if(!ei.hasPrecedingLineBreak()&&69===e.kind&&34===I())return 1}return 0}function on(e){var t=Z(180)
it(t,na())
var n=!!(256&t.flags)
return _t(54,!1,n,!e,t),t.parameters&&(e||34===I()||15===I())?t:void 0}function sn(e){return 15===I()?ir(!1,e,!1):23!==I()&&87!==I()&&73!==I()&&wr()&&!Wt()?ir(!1,e,!0):e?x(Gt):D(Gt)}function cn(t){var n=G(53)
if(!n)return t
var r=Z(188,t.pos)
return r.condition=t,r.questionToken=n,r.whenTrue=m(ti,Gt),r.colonToken=X(54,!1,e.Diagnostics._0_expected,e.tokenToString(54)),r.whenFalse=Gt(),ee(r)}function _n(e){var t=xn()
return ln(e,t)}function un(e){return 90===e||138===e}function ln(e,t){for(;;){L()
var n=pn(),r=38===I()?n>=e:n>e
if(!r)break
if(90===I()&&E())break
if(116===I()){if(ei.hasPrecedingLineBreak())break
M(),t=gn(t,Kt())}else t=fn(t,Q(),_n(n))}return t}function dn(){return E()&&90===I()?!1:pn()>0}function pn(){switch(I()){case 52:return 1
case 51:return 2
case 47:return 3
case 48:return 4
case 46:return 5
case 30:case 31:case 32:case 33:return 6
case 25:case 27:case 28:case 29:case 91:case 90:case 116:return 7
case 43:case 44:case 45:return 8
case 35:case 36:return 9
case 37:case 39:case 40:return 10
case 38:return 11}return-1}function fn(e,t,n){var r=Z(187,e.pos)
return r.left=e,r.operatorToken=t,r.right=n,ee(r)}function gn(e,t){var n=Z(195,e.pos)
return n.expression=e,n.type=t,ee(n)}function mn(){var e=Z(185)
return e.operator=I(),M(),e.operand=Dn(),ee(e)}function yn(){var e=Z(181)
return M(),e.expression=Dn(),ee(e)}function hn(){var e=Z(182)
return M(),e.expression=Dn(),ee(e)}function vn(){var e=Z(183)
return M(),e.expression=Dn(),ee(e)}function kn(){return 119===I()?A()?!0:U(Qt):!1}function bn(){var e=Z(184)
return M(),e.expression=Dn(),ee(e)}function xn(){if(Cn()){var t=Sn()
return 38===I()?ln(pn(),t):t}var n=I(),r=Dn()
if(38===I()){var a=e.skipTrivia(Ga,r.pos)
177===r.kind?P(a,r.end-a,e.Diagnostics.A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses):P(a,r.end-a,e.Diagnostics.An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses,e.tokenToString(n))}return r}function Dn(){switch(I()){case 35:case 36:case 50:case 49:return mn()
case 78:return yn()
case 101:return hn()
case 103:return vn()
case 25:return Kn()
case 119:if(kn())return bn()
default:return Sn()}}function Cn(){switch(I()){case 35:case 36:case 50:case 49:case 78:case 101:case 103:case 119:return!1
case 25:if(1!==qa.languageVariant)return!1
default:return!0}}function Sn(){if(41===I()||42===I()){var t=Z(185)
return t.operator=I(),M(),t.operand=Tn(),ee(t)}if(1===qa.languageVariant&&25===I()&&U(be))return Nn(!0)
var n=Tn()
if(e.Debug.assert(e.isLeftHandSideExpression(n)),(41===I()||42===I())&&!ei.hasPrecedingLineBreak()){var t=Z(186,n.pos)
return t.operand=n,t.operator=I(),M(),ee(t)}return n}function Tn(){var e=95===I()?wn():En()
return jn(e)}function En(){var e=Vn()
return zn(e)}function wn(){var t=Q()
if(17===I()||21===I()||19===I())return t
var n=Z(172,t.pos)
return n.expression=t,X(21,!1,e.Diagnostics.super_must_be_followed_by_an_argument_list_or_member_access),n.name=We(!0),ee(n)}function An(e,t){return e.kind!==t.kind?!1:69===e.kind?e.text===t.text:97===e.kind?!0:e.name.text===t.name.text&&An(e.expression,t.expression)}function Nn(t){var n,r=Fn(t)
if(243===r.kind){var a=Z(241,r.pos)
a.openingElement=r,a.children=Rn(a.openingElement.tagName),a.closingElement=Jn(t),An(a.openingElement.tagName,a.closingElement.tagName)||P(a.closingElement.pos,a.closingElement.end-a.closingElement.pos,e.Diagnostics.Expected_corresponding_JSX_closing_tag_for_0,e.getTextOfNodeFromSourceText(Ga,a.openingElement.tagName)),n=ee(a)}else e.Debug.assert(242===r.kind),n=r
if(t&&25===I()){var i=q(function(){return Nn(!0)})
if(i){N(e.Diagnostics.JSX_expressions_must_have_one_parent_element)
var o=Z(187,n.pos)
return o.end=i.end,o.left=n,o.right=i,o.operatorToken=te(24,!1,void 0),o.operatorToken.pos=o.operatorToken.end=o.right.pos,o}}return n}function Pn(){var e=Z(244,ei.getStartPos())
return Ha=ei.scanJsxToken(),ee(e)}function On(){switch(I()){case 244:return Pn()
case 15:return Mn(!1)
case 25:return Nn(!1)}e.Debug.fail("Unknown JSX child kind "+I())}function Rn(t){var n=[]
n.pos=ei.getStartPos()
var r=$a
for($a|=16384;;){if(Ha=ei.reScanJsxToken(),26===I())break
if(1===I()){P(t.pos,t.end-t.pos,e.Diagnostics.JSX_element_0_has_no_corresponding_closing_tag,e.getTextOfNodeFromSourceText(Ga,t))
break}n.push(On())}return n.end=ei.getTokenPos(),$a=r,n}function Fn(e){var t=ei.getStartPos()
V(25)
var n,r=In(),a=Ee(13,Ln)
return 27===I()?(n=Z(243,t),z()):(V(39),e?V(27):(V(27,void 0,!1),z()),n=Z(242,t)),n.tagName=r,n.attributes=a,ee(n)}function In(){K()
for(var e=97===I()?Q():ie();H(21);){var t=Z(172,e.pos)
t.expression=e,t.name=We(!0),e=ee(t)}return e}function Mn(e){var t=Z(248)
return V(15),16!==I()&&(t.expression=Gt()),e?V(16):(V(16,void 0,!1),z()),ee(t)}function Ln(){if(15===I())return Bn()
K()
var e=Z(246)
if(e.name=ie(),H(56))switch(I()){case 9:e.initializer=Ge()
break
default:e.initializer=Mn(!0)}return ee(e)}function Bn(){var e=Z(247)
return V(15),V(22),e.expression=Vt(),V(16),ee(e)}function Jn(e){var t=Z(245)
return V(26),t.tagName=In(),e?V(27):(V(27,void 0,!1),z()),ee(t)}function Kn(){var e=Z(177)
return V(25),e.type=Kt(),V(27),e.expression=Dn(),ee(e)}function zn(e){for(;;){var t=G(21)
if(t){var n=Z(172,e.pos)
n.expression=e,n.name=We(!0),e=ee(n)}else if(49!==I()||ei.hasPrecedingLineBreak())if(w()||!H(19)){if(11!==I()&&12!==I())return e
var r=Z(176,e.pos)
r.tag=e,r.template=11===I()?Ge():Ve(),e=ee(r)}else{var a=Z(173,e.pos)
if(a.expression=e,20!==I()&&(a.argumentExpression=h(Vt),9===a.argumentExpression.kind||8===a.argumentExpression.kind)){var i=a.argumentExpression
i.text=ne(i.text)}V(20),e=ee(a)}else{M()
var o=Z(196,e.pos)
o.expression=e,e=ee(o)}}}function jn(e){for(;;)if(e=zn(e),25!==I()){if(17!==I())return e
var t=Z(174,e.pos)
t.expression=e,t.arguments=Un(),e=ee(t)}else{var n=q(qn)
if(!n)return e
var t=Z(174,e.pos)
t.expression=e,t.typeArguments=n,t.arguments=Un(),e=ee(t)}}function Un(){V(17)
var e=ze(11,Qn)
return V(18),e}function qn(){if(H(25)){var e=ze(18,Kt)
if(V(27))return e&&Wn()?e:void 0}}function Wn(){switch(I()){case 17:case 21:case 18:case 20:case 54:case 23:case 53:case 30:case 32:case 31:case 33:case 51:case 52:case 48:case 46:case 47:case 16:case 1:return!0
case 24:case 15:default:return!1}}function Vn(){switch(I()){case 8:case 9:case 11:return Ge()
case 97:case 95:case 93:case 99:case 84:return Q()
case 17:return Hn()
case 19:return Yn()
case 15:return er()
case 118:if(!U(Cr))break
return tr()
case 73:return aa()
case 87:return tr()
case 92:return rr()
case 39:case 61:if(10===B())return Ge()
break
case 12:return Ve()}return ae(e.Diagnostics.Expression_expected)}function Hn(){var e=Z(178)
return V(17),e.expression=h(Vt),V(18),ee(e)}function Gn(){var e=Z(191)
return V(22),e.expression=Gt(),ee(e)}function Xn(){return 22===I()?Gn():24===I()?Z(193):Gt()}function Qn(){return m(ti,Xn)}function Yn(){var e=Z(170)
return V(19),ei.hasPrecedingLineBreak()&&(e.multiLine=!0),e.elements=ze(15,Xn),V(20),ee(e)}function $n(e,t,n){return de(123)?c(Yr(149,e,t,n)):de(131)?Yr(150,e,t,n):void 0}function Zn(){var e=ei.getStartPos(),t=ea(),n=ta(),r=$n(e,t,n)
if(r)return r
var a=G(37),i=W(),o=ce(),s=G(53)
if(a||17===I()||25===I())return Hr(e,t,n,a,o,s)
var _=i&&(24===I()||16===I()||56===I())
if(_){var u=Z(254,e)
u.name=o,u.questionToken=s
var l=G(56)
return l&&(u.equalsToken=l,u.objectAssignmentInitializer=h(Gt)),c(ee(u))}var d=Z(253,e)
return d.modifiers=n,d.name=o,d.questionToken=s,V(54),d.initializer=h(Gt),c(ee(d))}function er(){var e=Z(171)
return V(15),ei.hasPrecedingLineBreak()&&(e.multiLine=!0),e.properties=ze(12,Zn,!0),V(16),ee(e)}function tr(){var e=w()
e&&f(!1)
var t=Z(179)
it(t,ta()),V(87),t.asteriskToken=G(37)
var n=!!t.asteriskToken,r=!!(256&t.flags)
return t.name=n&&r?C(nr):n?k(nr):r?x(nr):nr(),_t(54,n,r,!1,t),t.body=ir(n,r,!1),e&&f(!0),c(ee(t))}function nr(){return W()?ae():void 0}function rr(){var e=Z(175)
return V(92),e.expression=En(),e.typeArguments=q(qn),(e.typeArguments||17===I())&&(e.arguments=Un()),ee(e)}function ar(e,t){var n=Z(199)
return V(15,t)||e?(n.statements=Ee(1,Pr),V(16)):n.statements=je(),ee(n)}function ir(e,t,n,r){var a=T()
p(e)
var i=A()
g(t)
var o=w()
o&&f(!1)
var s=ar(n,r)
return o&&f(!0),p(a),g(i),s}function or(){var e=Z(201)
return V(23),ee(e)}function sr(){var e=Z(203)
return V(88),V(17),e.expression=h(Vt),V(18),e.thenStatement=Pr(),e.elseStatement=H(80)?Pr():void 0,ee(e)}function cr(){var e=Z(204)
return V(79),e.statement=Pr(),V(104),V(17),e.expression=h(Vt),V(18),H(23),ee(e)}function _r(){var e=Z(205)
return V(104),V(17),e.expression=h(Vt),V(18),e.statement=Pr(),ee(e)}function ur(){var e=R()
V(86),V(17)
var t=void 0
23!==I()&&(t=102===I()||108===I()||74===I()?jr(!0):v(Vt))
var n
if(H(90)){var r=Z(207,e)
r.initializer=t,r.expression=h(Vt),V(18),n=r}else if(H(138)){var a=Z(208,e)
a.initializer=t,a.expression=h(Gt),V(18),n=a}else{var i=Z(206,e)
i.initializer=t,V(23),23!==I()&&18!==I()&&(i.condition=h(Vt)),V(23),18!==I()&&(i.incrementor=h(Vt)),V(18),n=i}return n.statement=Pr(),ee(n)}function lr(e){var t=Z(e)
return V(210===e?70:75),Y()||(t.label=ae()),$(),ee(t)}function dr(){var e=Z(211)
return V(94),Y()||(e.expression=h(Vt)),$(),ee(e)}function pr(){var e=Z(212)
return V(105),V(17),e.expression=h(Vt),V(18),e.statement=Pr(),ee(e)}function fr(){var e=Z(249)
return V(71),e.expression=h(Vt),V(54),e.statements=Ee(3,Pr),ee(e)}function gr(){var e=Z(250)
return V(77),V(54),e.statements=Ee(3,Pr),ee(e)}function mr(){return 71===I()?fr():gr()}function yr(){var e=Z(213)
V(96),V(17),e.expression=h(Vt),V(18)
var t=Z(227,ei.getStartPos())
return V(15),t.clauses=Ee(2,mr),V(16),e.caseBlock=ee(t),ee(e)}function hr(){var e=Z(215)
return V(98),e.expression=ei.hasPrecedingLineBreak()?void 0:h(Vt),$(),ee(e)}function vr(){var e=Z(216)
return V(100),e.tryBlock=ar(!1),e.catchClause=72===I()?kr():void 0,e.catchClause&&85!==I()||(V(85),e.finallyBlock=ar(!1)),ee(e)}function kr(){var e=Z(252)
return V(72),V(17)&&(e.variableDeclaration=zr()),V(18),e.block=ar(!1),ee(e)}function br(){var e=Z(217)
return V(76),$(),ee(e)}function xr(){var e=ei.getStartPos(),t=h(Vt)
if(69===t.kind&&H(54)){var n=Z(214,e)
return n.label=t,n.statement=Pr(),c(ee(n))}var r=Z(202,e)
return r.expression=t,$(),c(ee(r))}function Dr(){return M(),e.tokenIsIdentifierOrKeyword(I())&&!ei.hasPrecedingLineBreak()}function Cr(){return M(),87===I()&&!ei.hasPrecedingLineBreak()}function Sr(){return M(),(e.tokenIsIdentifierOrKeyword(I())||8===I())&&!ei.hasPrecedingLineBreak()}function Tr(){for(;;)switch(I()){case 102:case 108:case 74:case 87:case 73:case 81:return!0
case 107:case 134:return Qt()
case 125:case 126:return Rr()
case 115:case 118:case 122:case 110:case 111:case 112:case 128:if(M(),ei.hasPrecedingLineBreak())return!1
continue
case 137:return M(),15===I()||69===I()||82===I()
case 89:return M(),9===I()||37===I()||15===I()||e.tokenIsIdentifierOrKeyword(I())
case 82:if(M(),56===I()||37===I()||15===I()||77===I()||116===I())return!0
continue
case 113:M()
continue
default:return!1}}function Er(){return U(Tr)}function wr(){switch(I()){case 55:case 23:case 15:case 102:case 108:case 87:case 73:case 81:case 88:case 79:case 104:case 86:case 75:case 70:case 94:case 105:case 96:case 98:case 100:case 76:case 72:case 85:return!0
case 74:case 82:case 89:return Er()
case 118:case 122:case 107:case 125:case 126:case 134:case 137:return!0
case 112:case 110:case 111:case 113:case 128:return Er()||!U(Dr)
default:return qt()}}function Ar(){return M(),W()||15===I()||19===I()}function Nr(){return U(Ar)}function Pr(){switch(I()){case 23:return or()
case 15:return ar(!1)
case 102:return qr(ei.getStartPos(),void 0,void 0)
case 108:if(Nr())return qr(ei.getStartPos(),void 0,void 0)
break
case 87:return Wr(ei.getStartPos(),void 0,void 0)
case 73:return ia(ei.getStartPos(),void 0,void 0)
case 88:return sr()
case 79:return cr()
case 104:return _r()
case 86:return ur()
case 75:return lr(209)
case 70:return lr(210)
case 94:return dr()
case 105:return pr()
case 96:return yr()
case 98:return hr()
case 100:case 72:case 85:return vr()
case 76:return br()
case 55:return Or()
case 118:case 107:case 134:case 125:case 126:case 122:case 74:case 81:case 82:case 89:case 110:case 111:case 112:case 115:case 113:case 128:case 137:if(Er())return Or()}return xr()}function Or(){var t=R(),n=ea(),r=ta()
switch(I()){case 102:case 108:case 74:return qr(t,n,r)
case 87:return Wr(t,n,r)
case 73:return ia(t,n,r)
case 107:return fa(t,n,r)
case 134:return ga(t,n,r)
case 81:return ya(t,n,r)
case 137:case 125:case 126:return ba(t,n,r)
case 89:return Ta(t,n,r)
case 82:switch(M(),I()){case 77:case 56:return La(t,n,r)
case 116:return Sa(t,n,r)
default:return Ma(t,n,r)}default:if(n||r){var a=te(239,!0,e.Diagnostics.Declaration_expected)
return a.pos=t,a.decorators=n,it(a,r),ee(a)}}}function Rr(){return M(),!ei.hasPrecedingLineBreak()&&(W()||9===I())}function Fr(e,t,n){return 15!==I()&&Y()?void $():ir(e,t,!1,n)}function Ir(){if(24===I())return Z(193)
var e=Z(169)
return e.dotDotDotToken=G(22),e.name=Kr(),e.initializer=st(!1),ee(e)}function Mr(){var e=Z(169),t=W(),n=ce()
return t&&54!==I()?e.name=n:(V(54),e.propertyName=n,e.name=Kr()),e.initializer=st(!1),ee(e)}function Lr(){var e=Z(167)
return V(15),e.elements=ze(9,Mr),V(16),ee(e)}function Br(){var e=Z(168)
return V(19),e.elements=ze(10,Ir),V(20),ee(e)}function Jr(){return 15===I()||19===I()||W()}function Kr(){return 19===I()?Br():15===I()?Lr():ae()}function zr(){var e=Z(218)
return e.name=Kr(),e.type=jt(),un(I())||(e.initializer=Ht(!1)),ee(e)}function jr(t){var n=Z(219)
switch(I()){case 102:break
case 108:n.flags|=1024
break
case 74:n.flags|=2048
break
default:e.Debug.fail()}if(M(),138===I()&&U(Ur))n.declarations=je()
else{var r=E()
d(t),n.declarations=ze(8,zr),d(r)}return ee(n)}function Ur(){return ke()&&18===M()}function qr(e,t,n){var r=Z(200,e)
return r.decorators=t,it(r,n),r.declarationList=jr(!1),$(),c(ee(r))}function Wr(t,n,r){var a=Z(220,t)
a.decorators=n,it(a,r),V(87),a.asteriskToken=G(37),a.name=512&a.flags?nr():ae()
var i=!!a.asteriskToken,o=!!(256&a.flags)
return _t(54,i,o,!1,a),a.body=Fr(i,o,e.Diagnostics.or_expected),c(ee(a))}function Vr(t,n,r){var a=Z(148,t)
return a.decorators=n,it(a,r),V(121),_t(54,!1,!1,!1,a),a.body=Fr(!1,!1,e.Diagnostics.or_expected),c(ee(a))}function Hr(e,t,n,r,a,i,o){var s=Z(147,e)
s.decorators=t,it(s,n),s.asteriskToken=r,s.name=a,s.questionToken=i
var _=!!r,u=!!(256&s.flags)
return _t(54,_,u,!1,s),s.body=Fr(_,u,o),c(ee(s))}function Gr(e,t,n,r,a){var i=Z(145,e)
return i.decorators=t,it(i,n),i.name=r,i.questionToken=a,i.type=jt(),i.initializer=n&&32&n.flags?h(Qr):m(12582912,Qr),$(),ee(i)}function Xr(t,n,r){var a=G(37),i=ce(),o=G(53)
return a||17===I()||25===I()?Hr(t,n,r,a,i,o,e.Diagnostics.or_expected):Gr(t,n,r,i,o)}function Qr(){return Ht(!1)}function Yr(e,t,n,r){var a=Z(e,t)
return a.decorators=n,it(a,r),a.name=ce(),_t(54,!1,!1,!1,a),a.body=Fr(!1,!1),ee(a)}function $r(e){switch(e){case 112:case 110:case 111:case 113:case 128:return!0
default:return!1}}function Zr(){var t
if(55===I())return!0
for(;e.isModifierKind(I());){if(t=I(),$r(t))return!0
M()}if(37===I())return!0
if(oe()&&(t=I(),M()),19===I())return!0
if(void 0!==t){if(!e.isKeyword(t)||131===t||123===t)return!0
switch(I()){case 17:case 25:case 54:case 56:case 53:return!0
default:return Y()}}return!1}function ea(){for(var e;;){var t=R()
if(!H(55))break
e||(e=[],e.pos=t)
var n=Z(143,t)
n.expression=b(Tn),e.push(ee(n))}return e&&(e.end=F()),e}function ta(t){for(var n,r=0;;){var a=ei.getStartPos(),i=I()
if(74===I()&&t){if(!q(pe))break}else if(!ge())break
n||(n=[],n.pos=a),r|=e.modifierToFlag(i),n.push(ee(Z(i,a)))}return n&&(n.flags=r,n.end=ei.getStartPos()),n}function na(){var t,n=0
if(118===I()){var r=ei.getStartPos(),a=I()
M(),t=[],t.pos=r,n|=e.modifierToFlag(a),t.push(ee(Z(a,r))),t.flags=n,t.end=ei.getStartPos()}return t}function ra(){if(23===I()){var t=Z(198)
return M(),ee(t)}var n=R(),r=ea(),a=ta(!0),i=$n(n,r,a)
if(i)return i
if(121===I())return Vr(n,r,a)
if(pt())return gt(n,r,a)
if(e.tokenIsIdentifierOrKeyword(I())||9===I()||8===I()||37===I()||19===I())return Xr(n,r,a)
if(r||a){var o=te(69,!0,e.Diagnostics.Declaration_expected)
return Gr(n,r,a,o,void 0)}e.Debug.fail("Should not have attempted to parse class member declaration.")}function aa(){return oa(ei.getStartPos(),void 0,void 0,192)}function ia(e,t,n){return oa(e,t,n,221)}function oa(e,t,n,r){var a=Z(r,e)
return a.decorators=t,it(a,n),V(73),a.name=sa(),a.typeParameters=nt(),a.heritageClauses=_a(!0),V(15)?(a.members=pa(),V(16)):a.members=je(),ee(a)}function sa(){return W()&&!ca()?ae():void 0}function ca(){return 106===I()&&U(be)}function _a(e){return da()?Ee(20,ua):void 0}function ua(){if(83===I()||106===I()){var e=Z(251)
return e.token=I(),M(),e.types=ze(7,la),ee(e)}}function la(){var e=Z(194)
return e.expression=Tn(),25===I()&&(e.typeArguments=Ue(18,Kt,25,27)),ee(e)}function da(){return 83===I()||106===I()}function pa(){return Ee(5,ra)}function fa(e,t,n){var r=Z(222,e)
return r.decorators=t,it(r,n),V(107),r.name=ae(),r.typeParameters=nt(),r.heritageClauses=_a(!1),r.members=bt(),ee(r)}function ga(e,t,n){var r=Z(223,e)
return r.decorators=t,it(r,n),V(134),r.name=ae(),r.typeParameters=nt(),V(56),r.type=Kt(),$(),ee(r)}function ma(){var e=Z(255,ei.getStartPos())
return e.name=ce(),e.initializer=h(Qr),ee(e)}function ya(e,t,n){var r=Z(224,e)
return r.decorators=t,it(r,n),V(81),r.name=ae(),V(15)?(r.members=ze(6,ma),V(16)):r.members=je(),ee(r)}function ha(){var e=Z(226,ei.getStartPos())
return V(15)?(e.statements=Ee(1,Pr),V(16)):e.statements=je(),ee(e)}function va(e,t,n,r){var a=Z(225,e),i=4096&r
return a.decorators=t,it(a,n),a.flags|=r,a.name=ae(),a.body=H(21)?va(R(),void 0,void 0,1|i):ha(),ee(a)}function ka(e,t,n){var r=Z(225,e)
return r.decorators=t,it(r,n),137===I()?(r.name=ae(),r.flags|=131072):r.name=Ge(!0),15===I()?r.body=ha():$(),ee(r)}function ba(e,t,n){var r=n?n.flags:0
if(137===I())return ka(e,t,n)
if(H(126))r|=4096
else if(V(125),9===I())return ka(e,t,n)
return va(e,t,n,r)}function xa(){return 129===I()&&U(Da)}function Da(){return 17===M()}function Ca(){return 39===M()}function Sa(e,t,n){var r=Z(228,e)
return r.decorators=t,r.modifiers=n,V(116),V(126),r.name=ae(),V(23),ee(r)}function Ta(e,t,n){V(89)
var r,a=ei.getStartPos()
if(W()&&(r=ae(),24!==I()&&136!==I())){var i=Z(229,e)
return i.decorators=t,it(i,n),i.name=r,V(56),i.moduleReference=wa(),$(),ee(i)}var o=Z(230,e)
return o.decorators=t,it(o,n),(r||37===I()||15===I())&&(o.importClause=Ea(r,a),V(136)),o.moduleSpecifier=Na(),$(),ee(o)}function Ea(e,t){var n=Z(231,t)
return e&&(n.name=e),(!n.name||H(24))&&(n.namedBindings=37===I()?Pa():Oa(233)),ee(n)}function wa(){return xa()?Aa():qe(!1)}function Aa(){var e=Z(240)
return V(129),V(17),e.expression=Na(),V(18),ee(e)}function Na(){if(9===I()){var e=Ge()
return ne(e.text),e}return Vt()}function Pa(){var e=Z(232)
return V(37),V(116),e.name=ae(),ee(e)}function Oa(e){var t=Z(e)
return t.elements=Ue(21,233===e?Fa:Ra,15,16),ee(t)}function Ra(){return Ia(238)}function Fa(){return Ia(234)}function Ia(t){var n=Z(t),r=e.isKeyword(I())&&!W(),a=ei.getTokenPos(),i=ei.getTextPos(),o=ie()
return 116===I()?(n.propertyName=o,V(116),r=e.isKeyword(I())&&!W(),a=ei.getTokenPos(),i=ei.getTextPos(),n.name=ie()):n.name=o,234===t&&r&&P(a,i-a,e.Diagnostics.Identifier_expected),ee(n)}function Ma(e,t,n){var r=Z(236,e)
return r.decorators=t,it(r,n),H(37)?(V(136),r.moduleSpecifier=Na()):(r.exportClause=Oa(237),(136===I()||9===I()&&!ei.hasPrecedingLineBreak())&&(V(136),r.moduleSpecifier=Na())),$(),ee(r)}function La(e,t,n){var r=Z(235,e)
return r.decorators=t,it(r,n),H(56)?r.isExportEquals=!0:V(77),r.expression=Gt(),$(),ee(r)}function Ba(t){for(var n,r=e.createScanner(t.languageVersion,!1,0,Ga),a=[],i=[],o=[];;){var s=r.scan()
if(2!==s){if(e.isTrivia(s))continue
break}var c={pos:r.getTokenPos(),end:r.getTextPos(),kind:r.getToken()},_=Ga.substring(c.pos,c.end),u=e.getFileReferenceFromReferencePath(_,c)
if(u){var l=u.fileReference
t.hasNoDefaultLib=u.isNoDefaultLib
var d=u.diagnosticMessage
l&&(u.isTypeReferenceDirective?i.push(l):a.push(l)),d&&Wa.push(e.createFileDiagnostic(t,c.pos,c.end-c.pos,d))}else{var p=/^\/\/\/\s*<amd-module\s+name\s*=\s*('|")(.+?)\1/gim,f=p.exec(_)
f&&(n&&Wa.push(e.createFileDiagnostic(t,c.pos,c.end-c.pos,e.Diagnostics.An_AMD_module_cannot_have_multiple_name_assignments)),n=f[2])
var g=/^\/\/\/\s*<amd-dependency\s/gim,m=/\spath\s*=\s*('|")(.+?)\1/gim,y=/\sname\s*=\s*('|")(.+?)\1/gim,h=g.exec(_)
if(h){var v=m.exec(_),k=y.exec(_)
if(v){var b={path:v[2],name:k?k[2]:void 0}
o.push(b)}}}}t.referencedFiles=a,t.typeReferenceDirectives=i,t.amdDependencies=o,t.moduleName=n}function Ja(t){t.externalModuleIndicator=e.forEach(t.statements,function(e){return 1&e.flags||229===e.kind&&240===e.moduleReference.kind||230===e.kind||235===e.kind||236===e.kind?e:void 0})}var Ka,za,ja,Ua,qa,Wa,Va,Ha,Ga,Xa,Qa,Ya,$a,Za,ei=e.createScanner(2,!0),ti=20971520,ni=!1
t.parseSourceFile=n,t.fixupParentReferences=_
var ri
!function(e){e[e.SourceElements=0]="SourceElements",e[e.BlockStatements=1]="BlockStatements",e[e.SwitchClauses=2]="SwitchClauses",e[e.SwitchClauseStatements=3]="SwitchClauseStatements",e[e.TypeMembers=4]="TypeMembers",e[e.ClassMembers=5]="ClassMembers",e[e.EnumMembers=6]="EnumMembers",e[e.HeritageClauseElement=7]="HeritageClauseElement",e[e.VariableDeclarations=8]="VariableDeclarations",e[e.ObjectBindingElements=9]="ObjectBindingElements",e[e.ArrayBindingElements=10]="ArrayBindingElements",e[e.ArgumentExpressions=11]="ArgumentExpressions",e[e.ObjectLiteralMembers=12]="ObjectLiteralMembers",e[e.JsxAttributes=13]="JsxAttributes",e[e.JsxChildren=14]="JsxChildren",e[e.ArrayLiteralMembers=15]="ArrayLiteralMembers",e[e.Parameters=16]="Parameters",e[e.TypeParameters=17]="TypeParameters",e[e.TypeArguments=18]="TypeArguments",e[e.TupleElementTypes=19]="TupleElementTypes",e[e.HeritageClauses=20]="HeritageClauses",e[e.ImportOrExportSpecifiers=21]="ImportOrExportSpecifiers",e[e.JSDocFunctionParameters=22]="JSDocFunctionParameters",e[e.JSDocTypeArguments=23]="JSDocTypeArguments",e[e.JSDocRecordMembers=24]="JSDocRecordMembers",e[e.JSDocTupleTypes=25]="JSDocTupleTypes",e[e.Count=26]="Count"}(ri||(ri={}))
var ai
!function(e){e[e.False=0]="False",e[e.True=1]="True",e[e.Unknown=2]="Unknown"}(ai||(ai={}))
var ii
!function(t){function n(){switch(I()){case 37:case 53:case 17:case 19:case 49:case 15:case 87:case 22:case 92:case 97:return!0}return e.tokenIsIdentifierOrKeyword(I())}function r(e,t,n){a("file.js",e,2,void 0,1),ei.setText(e,t,n),Ha=ei.scan()
var r=i(),s=Wa
return o(),r?{jsDocTypeExpression:r,diagnostics:s}:void 0}function i(){var e=Z(257,ei.getTokenPos())
return V(15),e.type=s(),V(16),_(e),ee(e)}function s(){var e=c()
if(47===I()){var t=Z(261,e.pos)
t.types=T(e),e=ee(t)}if(56===I()){var n=Z(268,e.pos)
M(),n.type=e,e=ee(n)}return e}function c(){for(var e=u();;)if(19===I()){var t=Z(260,e.pos)
t.elementType=e,M(),V(20),e=ee(t)}else if(53===I()){var n=Z(263,e.pos)
n.type=e,M(),e=ee(n)}else{if(49!==I())break
var r=Z(264,e.pos)
r.type=e,M(),e=ee(r)}return e}function u(){switch(I()){case 37:return E()
case 53:return A()
case 17:return S()
case 19:return D()
case 49:return x()
case 15:return k()
case 87:return f()
case 22:return p()
case 92:return d()
case 97:return l()
case 117:case 132:case 130:case 120:case 133:case 103:case 93:case 135:case 127:return Q()
case 9:case 8:case 99:case 84:return w()}return m()}function l(){var e=Z(272)
return M(),V(54),e.type=c(),ee(e)}function d(){var e=Z(271)
return M(),V(54),e.type=c(),ee(e)}function p(){var e=Z(270)
return M(),e.type=c(),ee(e)}function f(){var e=Z(269)
return M(),V(17),e.parameters=ze(22,g),C(e.parameters),V(18),54===I()&&(M(),e.type=c()),ee(e)}function g(){var e=Z(142)
return e.type=c(),H(56)&&(e.questionToken=Z(56)),ee(e)}function m(){var e=Z(267)
if(e.name=_e(),25===I())e.typeArguments=y()
else for(;H(21);){if(25===I()){e.typeArguments=y()
break}e.name=v(e.name)}return ee(e)}function y(){M()
var e=ze(23,c)
return C(e),h(e),V(27),e}function h(t){if(0===Wa.length&&t&&0===t.length){var n=t.pos-1,r=e.skipTrivia(Ga,t.end)+1
return P(n,r-n,e.Diagnostics.Type_argument_list_cannot_be_empty)}}function v(e){var t=Z(139,e.pos)
return t.left=e,t.right=ie(),ee(t)}function k(){var e=Z(265)
return M(),e.members=ze(24,b),C(e.members),V(16),ee(e)}function b(){var e=Z(266)
return e.name=_e(),54===I()&&(M(),e.type=c()),ee(e)}function x(){var e=Z(264)
return M(),e.type=c(),ee(e)}function D(){var e=Z(262)
return M(),e.types=ze(25,c),C(e.types),V(20),ee(e)}function C(t){if(0===Wa.length&&t.hasTrailingComma){var n=t.end-1
P(n,1,e.Diagnostics.Trailing_comma_not_allowed)}}function S(){var e=Z(261)
return M(),e.types=T(c()),V(18),ee(e)}function T(t){e.Debug.assert(!!t)
var n=[]
for(n.pos=t.pos,n.push(t);H(47);)n.push(c())
return n.end=ei.getStartPos(),n}function E(){var e=Z(258)
return M(),ee(e)}function w(){var e=Z(282)
return e.literal=Tt(),ee(e)}function A(){var e=ei.getStartPos()
if(M(),24===I()||16===I()||18===I()||27===I()||56===I()||47===I()){var t=Z(259,e)
return ee(t)}var t=Z(263,e)
return t.type=c(),ee(t)}function O(e,t,n){a("file.js",e,2,void 0,1),qa={languageVariant:0,text:e}
var r=F(t,n),i=Wa
return o(),r?{jsDocComment:r,diagnostics:i}:void 0}function R(e,t,n){var r=Ha,a=Wa.length,i=ni,o=F(t,n)
return o&&(o.parent=e),Ha=r,Wa.length=a,ni=i,o}function F(t,n){function r(){if(D){var e=Z(273,t)
return e.tags=D,ee(e,x)}}function a(){for(;5===I()||4===I();)h()}function o(){e.Debug.assert(55===I())
var t=Z(55,ei.getTokenPos())
t.end=ei.getTextPos(),h()
var n=v()
if(n){var r=s(t,n)||c(t,n)
_(r)}}function s(e,t){if(t)switch(t.text){case"param":return l(e,t)
case"return":case"returns":return d(e,t)
case"template":return y(e,t)
case"type":return p(e,t)
case"typedef":return g(e,t)}}function c(e,t){var n=Z(274,e.pos)
return n.atToken=e,n.tagName=t,ee(n)}function _(e){e&&(D||(D=[],D.pos=e.pos),D.push(e),D.end=e.end)}function u(){if(15===I()){var e=i()
return e}}function l(t,n){var r=u()
a()
var i,o
if(G(19)?(i=v(),o=!0,G(56)&&Vt(),V(20)):e.tokenIsIdentifierOrKeyword(I())&&(i=v()),!i)return void P(ei.getStartPos(),0,e.Diagnostics.Identifier_expected)
var s,c
r?c=i:s=i,r||(r=u())
var _=Z(275,t.pos)
return _.atToken=t,_.tagName=n,_.preParameterName=s,_.typeExpression=r,_.postParameterName=c,_.isBracketed=o,ee(_)}function d(t,n){e.forEach(D,function(e){return 276===e.kind})&&P(n.pos,ei.getTokenPos()-n.pos,e.Diagnostics._0_tag_already_specified,n.text)
var r=Z(276,t.pos)
return r.atToken=t,r.tagName=n,r.typeExpression=u(),ee(r)}function p(t,n){e.forEach(D,function(e){return 277===e.kind})&&P(n.pos,ei.getTokenPos()-n.pos,e.Diagnostics._0_tag_already_specified,n.text)
var r=Z(277,t.pos)
return r.atToken=t,r.tagName=n,r.typeExpression=u(),ee(r)}function f(t,n){var r=u()
a()
var i=v()
if(!i)return void P(ei.getStartPos(),0,e.Diagnostics.Identifier_expected)
var o=Z(280,t.pos)
return o.atToken=t,o.tagName=n,o.name=i,o.typeExpression=r,ee(o)}function g(e,t){function n(){for(var e=Z(281,ei.getStartPos()),t=ei.getStartPos(),n=!0,r=!1,a=!1;1!==I()&&!a;)switch(h(),I()){case 55:n&&(a=!m(e),a||(t=ei.getStartPos())),r=!1
break
case 4:t=ei.getStartPos()-1,n=!0,r=!1
break
case 37:r&&(n=!1),r=!0
break
case 69:n=!1
case 1:}return ei.setTextPos(t),ee(e)}var r=u()
a()
var i=Z(279,e.pos)
if(i.atToken=e,i.tagName=t,i.name=v(),i.typeExpression=r,r){if(267===r.type.kind){var o=r.type
if(69===o.name.kind){var s=o.name
"Object"===s.text&&(i.jsDocTypeLiteral=n())}}i.jsDocTypeLiteral||(i.jsDocTypeLiteral=r.type)}else i.jsDocTypeLiteral=n()
return ee(i)}function m(t){e.Debug.assert(55===I())
var n=Z(55,ei.getStartPos())
n.end=ei.getTextPos(),h()
var r=v()
if(!r)return!1
switch(r.text){case"type":return t.jsDocTypeTag?!1:(t.jsDocTypeTag=p(n,r),!0)
case"prop":case"property":t.jsDocPropertyTags||(t.jsDocPropertyTags=[])
var a=f(n,r)
return t.jsDocPropertyTags.push(a),!0}return!1}function y(t,n){e.forEach(D,function(e){return 278===e.kind})&&P(n.pos,ei.getTokenPos()-n.pos,e.Diagnostics._0_tag_already_specified,n.text)
var r=[]
for(r.pos=ei.getStartPos();;){var a=v()
if(!a)return void P(ei.getStartPos(),0,e.Diagnostics.Identifier_expected)
var i=Z(141,a.pos)
if(i.name=a,ee(i),r.push(i),24!==I())break
h()}var o=Z(278,t.pos)
return o.atToken=t,o.tagName=n,o.typeParameters=r,ee(o),r.end=o.end,o}function h(){return Ha=ei.scanJSDocToken()}function v(){return k(e.tokenIsIdentifierOrKeyword(I()))}function k(t){if(!t)return void N(e.Diagnostics.Identifier_expected)
var n=ei.getTokenPos(),r=ei.getTextPos(),a=Z(69,n)
return a.text=b.substring(n,r),ee(a,r),h(),a}var b=Ga
t=t||0
var x=void 0===n?b.length:t+n
n=x-t,e.Debug.assert(t>=0),e.Debug.assert(x>=t),e.Debug.assert(x<=b.length)
var D,C
return 47===b.charCodeAt(t)&&42===b.charCodeAt(t+1)&&42===b.charCodeAt(t+2)&&42!==b.charCodeAt(t+3)&&ei.scanRange(t+3,n-5,function(){var e=!0,t=!0
for(h();1!==I();){switch(I()){case 55:e&&o(),t=!1
break
case 4:e=!0,t=!1
break
case 37:t&&(e=!1),t=!0
break
case 69:e=!1
break
case 1:}h()}C=r()}),C}t.isJSDocType=n,t.parseJSDocTypeExpressionForTests=r,t.parseJSDocTypeExpression=i,t.parseIsolatedJSDocComment=O,t.parseJSDocComment=R,t.parseJSDocCommentWorker=F}(ii=t.JSDocParser||(t.JSDocParser={}))}(g||(g={}))
var m
!function(t){function n(t,n,r,a){if(a=a||e.Debug.shouldAssert(2),l(t,n,r,a),e.textChangeRangeIsUnchanged(r))return t
if(0===t.statements.length)return g.parseSourceFile(t.fileName,n,t.languageVersion,void 0,!0,t.scriptKind)
var i=t
e.Debug.assert(!i.hasBeenIncrementallyParsed),i.hasBeenIncrementallyParsed=!0
var o=t.text,s=d(t),u=_(t,r)
l(t,n,u,a),e.Debug.assert(u.span.start<=r.span.start),e.Debug.assert(e.textSpanEnd(u.span)===e.textSpanEnd(r.span)),e.Debug.assert(e.textSpanEnd(e.textChangeRangeNewSpan(u))===e.textSpanEnd(e.textChangeRangeNewSpan(r)))
var p=e.textChangeRangeNewSpan(u).length-u.span.length
c(i,u.span.start,e.textSpanEnd(u.span),e.textSpanEnd(e.textChangeRangeNewSpan(u)),p,o,n,a)
var f=g.parseSourceFile(t.fileName,n,t.languageVersion,s,!0,t.scriptKind)
return f}function r(t,n,r,o,c,_){function u(t){var n=""
if(_&&a(t)&&(n=o.substring(t.pos,t.end)),t._children&&(t._children=void 0),t.pos+=r,t.end+=r,_&&a(t)&&e.Debug.assert(n===c.substring(t.pos,t.end)),i(t,u,l),t.jsDocComments)for(var d=0,p=t.jsDocComments;d<p.length;d++){var f=p[d]
i(f,u,l)}s(t,_)}function l(e){e._children=void 0,e.pos+=r,e.end+=r
for(var t=0,n=e;t<n.length;t++){var a=n[t]
u(a)}}n?l(t):u(t)}function a(e){switch(e.kind){case 9:case 8:case 69:return!0}return!1}function o(t,n,r,a,i){e.Debug.assert(t.end>=n,"Adjusting an element that was entirely before the change range"),e.Debug.assert(t.pos<=r,"Adjusting an element that was entirely after the change range"),e.Debug.assert(t.pos<=t.end),t.pos=Math.min(t.pos,a),t.end>=r?t.end+=i:t.end=Math.min(t.end,a),e.Debug.assert(t.pos<=t.end),t.parent&&(e.Debug.assert(t.pos>=t.parent.pos),e.Debug.assert(t.end<=t.parent.end))}function s(t,n){if(n){var r=t.pos
i(t,function(t){e.Debug.assert(t.pos>=r),r=t.end}),e.Debug.assert(r<=t.end)}}function c(t,n,a,c,_,u,l,d){function p(t){if(e.Debug.assert(t.pos<=t.end),t.pos>a)return void r(t,!1,_,u,l,d)
var g=t.end
return g>=n?(t.intersectsChange=!0,t._children=void 0,o(t,n,a,c,_),i(t,p,f),void s(t,d)):void e.Debug.assert(n>g)}function f(t){if(e.Debug.assert(t.pos<=t.end),t.pos>a)return void r(t,!0,_,u,l,d)
var i=t.end
if(i>=n){t.intersectsChange=!0,t._children=void 0,o(t,n,a,c,_)
for(var s=0,f=t;s<f.length;s++){var g=f[s]
p(g)}}else e.Debug.assert(n>i)}p(t)}function _(t,n){for(var r=1,a=n.span.start,i=0;a>0&&r>=i;i++){var o=u(t,a)
e.Debug.assert(o.pos<=a)
var s=o.pos
a=Math.max(0,s-1)}var c=e.createTextSpanFromBounds(a,e.textSpanEnd(n.span)),_=n.newLength+(n.span.start-a)
return e.createTextChangeRange(c,_)}function u(t,n){function r(e){for(;;){var t=a(e)
if(!t)return e
e=t}}function a(t){var n=void 0
return i(t,function(t){e.nodeIsPresent(t)&&(n=t)}),n}function o(t){return e.nodeIsMissing(t)?void 0:t.pos<=n?(t.pos>=c.pos&&(c=t),n<t.end?(i(t,o),!0):(e.Debug.assert(t.end<=n),void(s=t))):(e.Debug.assert(t.pos>n),!0)}var s,c=t
if(i(t,o),s){var _=r(s)
_.pos>c.pos&&(c=_)}return c}function l(t,n,r,a){var i=t.text
if(r&&(e.Debug.assert(i.length-r.span.length+r.newLength===n.length),a||e.Debug.shouldAssert(3))){var o=i.substr(0,r.span.start),s=n.substr(0,r.span.start)
e.Debug.assert(o===s)
var c=i.substring(e.textSpanEnd(r.span),i.length),_=n.substring(e.textSpanEnd(e.textChangeRangeNewSpan(r)),n.length)
e.Debug.assert(c===_)}}function d(t){function n(e){function n(t){return e>=t.pos&&e<t.end?(i(t,n,s),!0):!1}function s(t){if(e>=t.pos&&e<t.end)for(var c=0,_=t.length;_>c;c++){var u=t[c]
if(u){if(u.pos===e)return r=t,a=c,o=u,!0
if(u.pos<e&&e<u.end)return i(u,n,s),!0}}return!1}r=void 0,a=-1,o=void 0,i(t,n,s)}var r=t.statements,a=0
e.Debug.assert(a<r.length)
var o=r[a],s=-1
return{currentNode:function(t){return t!==s&&(o&&o.end===t&&a<r.length-1&&(a++,o=r[a]),o&&o.pos===t||n(t)),s=t,e.Debug.assert(!o||o.pos===t),o}}}t.updateSourceFile=n
var p
!function(e){e[e.Value=-1]="Value"}(p||(p={}))}(m||(m={}))}(ts||(ts={}))
var ts
!function(e){function t(n){if(222===n.kind||223===n.kind)return 0
if(e.isConstEnumDeclaration(n))return 2
if(230!==n.kind&&229!==n.kind||1&n.flags){if(226===n.kind){var r=0
return e.forEachChild(n,function(e){switch(t(e)){case 0:return!1
case 2:return r=2,!1
case 1:return r=1,!0}}),r}if(225===n.kind){var a=n.body
return a?t(a):1}return 1}return 0}function n(t,n){e.performance.mark("beforeBind"),i(t,n),e.performance.mark("afterBind"),e.performance.measure("Bind","beforeBind","afterBind")}function r(){function n(t,n){ot=t,st=n,ct=e.getEmitScriptTarget(st),Ct=!!ot.externalModuleIndicator,Tt=e.createMap(),Et=0,St=e.objectAllocator.getSymbolConstructor(),ot.locals||(Re(ot),ot.symbolCount=Et,ot.classifiableNames=Tt),ot=void 0,st=void 0,ct=void 0,_t=void 0,ut=void 0,lt=void 0,dt=void 0,pt=!1,ft=void 0,gt=void 0,mt=void 0,yt=void 0,ht=void 0,vt=void 0,bt=void 0,xt=!1,Dt=0}function r(e,t){return Et++,new St(e,t)}function a(t,n,r){if(t.flags|=r,n.symbol=t,t.declarations||(t.declarations=[]),t.declarations.push(n),1952&r&&!t.exports&&(t.exports=e.createMap()),6240&r&&!t.members&&(t.members=e.createMap()),107455&r){var a=t.valueDeclaration;(!a||a.kind!==n.kind&&225===a.kind)&&(t.valueDeclaration=n)}}function i(t){if(t.name){if(e.isAmbientModule(t))return e.isGlobalScopeAugmentation(t)?"__global":'"'+t.name.text+'"'
if(140===t.name.kind){var n=t.name.expression
return e.isStringOrNumericLiteral(n.kind)?n.text:(e.Debug.assert(e.isWellKnownSymbolSyntactically(n)),e.getPropertyNameForKnownSymbolName(n.name.text))}return t.name.text}switch(t.kind){case 148:return"__constructor"
case 156:case 151:return"__call"
case 157:case 152:return"__new"
case 153:return"__index"
case 236:return"__export"
case 235:return t.isExportEquals?"export=":"default"
case 187:switch(e.getSpecialPropertyAssignmentKind(t)){case 2:return"export="
case 1:case 4:return t.left.name.text
case 3:return t.left.expression.name.text}e.Debug.fail("Unknown binary declaration kind")
break
case 220:case 221:return 512&t.flags?"default":void 0
case 269:return e.isJSDocConstructSignature(t)?"__new":"__call"
case 142:e.Debug.assert(269===t.parent.kind)
var r=t.parent,a=e.indexOf(r.parameters,t)
return"p"+a
case 279:var i=t.parent&&t.parent.parent,o=void 0
if(i&&200===i.kind&&i.declarationList.declarations.length>0){var s=i.declarationList.declarations[0].name
69===s.kind&&(o=s.text)}return o}}function o(t){return t.name?e.declarationNameToString(t.name):i(t)}function s(t,n,s,c,_){e.Debug.assert(!e.hasDynamicName(s))
var u,l=512&s.flags,d=l&&n?"default":i(s)
if(void 0===d)u=r(0,"__missing")
else if(u=t[d]||(t[d]=r(0,d)),d&&788448&c&&(Tt[d]=d),u.flags&_)if(u.isReplaceableByMethod)u=t[d]=r(0,d)
else{s.name&&(s.name.parent=s)
var p=2&u.flags?e.Diagnostics.Cannot_redeclare_block_scoped_variable_0:e.Diagnostics.Duplicate_identifier_0
e.forEach(u.declarations,function(t){512&t.flags&&(p=e.Diagnostics.A_module_cannot_have_multiple_default_exports)}),e.forEach(u.declarations,function(t){ot.bindDiagnostics.push(e.createDiagnosticForNode(t.name||t,p,o(t)))}),ot.bindDiagnostics.push(e.createDiagnosticForNode(s.name||s,p,o(s))),u=r(0,d)}return a(u,s,c),u.parent=n,u}function c(t,n,r){var a=1&e.getCombinedNodeFlags(t)
if(8388608&n)return 238===t.kind||229===t.kind&&a?s(ut.symbol.exports,ut.symbol,t,n,r):s(ut.locals,void 0,t,n,r)
if(!e.isAmbientModule(t)&&(a||8192&ut.flags)){var i=(107455&n?1048576:0)|(793064&n?2097152:0)|(1920&n?4194304:0),o=s(ut.locals,void 0,t,i,r)
return o.exportSymbol=s(ut.symbol.exports,ut.symbol,t,n,r),t.localSymbol=o,o}return s(ut.locals,void 0,t,n,r)}function _(t,n){var r=ut,a=lt
if(1&n?(ut=lt=t,32&n&&(ut.locals=e.createMap()),re(ut)):2&n&&(lt=t,lt.locals=void 0),4&n){var i=ft,o=gt,s=mt,c=yt,_=bt,l=xt,d=16&n&&!!e.getImmediatelyInvokedFunctionExpression(t)
d?yt=y():(ft={flags:2},16&n&&(ft.container=t),yt=void 0),gt=void 0,mt=void 0,bt=void 0,xt=!1,u(t),t.flags&=-4030465,!(1&ft.flags)&&8&n&&e.nodeIsPresent(t.body)&&(t.flags|=32768,xt&&(t.flags|=65536)),256===t.kind&&(t.flags|=Dt),d?(k(yt,ft),ft=C(yt)):ft=i,gt=o,mt=s,yt=c,bt=_,xt=l}else 64&n?(pt=!1,u(t),t.flags=pt?16384|t.flags:-16385&t.flags):u(t)
ut=r,lt=a}function u(t){if(e.isInJavaScriptFile(t)&&t.jsDocComments)for(var n=0,r=t.jsDocComments;n<r.length;n++){var a=r[n]
Re(a)}if(it(t))return void e.forEachChild(t,Re)
switch(t.kind){case 205:N(t)
break
case 204:P(t)
break
case 206:O(t)
break
case 207:case 208:R(t)
break
case 203:F(t)
break
case 211:case 215:I(t)
break
case 210:case 209:B(t)
break
case 216:J(t)
break
case 213:K(t)
break
case 227:z(t)
break
case 249:j(t)
break
case 214:W(t)
break
case 185:X(t)
break
case 187:Q(t)
break
case 181:Y(t)
break
case 188:$(t)
break
case 218:ee(t)
break
case 174:te(t)
break
default:e.forEachChild(t,Re)}}function l(e){switch(e.kind){case 69:case 97:case 172:return d(e)
case 174:return p(e)
case 178:return l(e.expression)
case 187:return g(e)
case 185:return 49===e.operator&&l(e.operand)}return!1}function d(e){return 69===e.kind||97===e.kind||172===e.kind&&d(e.expression)}function p(e){if(e.arguments)for(var t=0,n=e.arguments;t<n.length;t++){var r=n[t]
if(d(r))return!0}return 172===e.expression.kind&&d(e.expression.expression)?!0:!1}function f(e,t){return 182===e.kind&&m(e.expression)&&9===t.kind}function g(e){switch(e.operatorToken.kind){case 56:return d(e.left)
case 30:case 31:case 32:case 33:return m(e.left)||m(e.right)||f(e.right,e.left)||f(e.left,e.right)
case 91:return m(e.left)
case 24:return l(e.right)}return!1}function m(e){switch(e.kind){case 178:return m(e.expression)
case 187:switch(e.operatorToken.kind){case 56:return m(e.left)
case 24:return m(e.right)}}return d(e)}function y(){return{flags:4,antecedents:void 0}}function h(){return{flags:8,antecedents:void 0}}function v(e){e.flags|=256&e.flags?512:256}function k(t,n){1&n.flags||e.contains(t.antecedents,n)||((t.antecedents||(t.antecedents=[])).push(n),v(n))}function b(e,t,n){return 1&t.flags?t:n?99===n.kind&&64&e||84===n.kind&&32&e?wt:l(n)?(v(t),{flags:e,expression:n,antecedent:t}):t:32&e?t:wt}function x(e,t,n,r){return l(t.expression)?(v(e),{flags:128,switchStatement:t,clauseStart:n,clauseEnd:r,antecedent:e}):e}function D(e,t){return v(e),{flags:16,antecedent:e,node:t}}function C(e){var t=e.antecedents
return t?1===t.length?t[0]:e:wt}function S(e){var t=e.parent
switch(t.kind){case 203:case 205:case 204:return t.expression===e
case 206:case 188:return t.condition===e}return!1}function T(e){for(;;)if(178===e.kind)e=e.expression
else{if(185!==e.kind||49!==e.operator)return 187===e.kind&&(51===e.operatorToken.kind||52===e.operatorToken.kind)
e=e.operand}}function E(e){for(;178===e.parent.kind||185===e.parent.kind&&49===e.parent.operator;)e=e.parent
return!S(e)&&!T(e.parent)}function w(e,t,n){var r=ht,a=vt
ht=t,vt=n,Re(e),ht=r,vt=a,e&&T(e)||(k(t,b(32,ft,e)),k(n,b(64,ft,e)))}function A(e,t,n){var r=gt,a=mt
gt=t,mt=n,Re(e),gt=r,mt=a}function N(e){var t=h(),n=y(),r=y()
k(t,ft),ft=t,w(e.expression,n,r),ft=C(n),A(e.statement,r,t),k(t,ft),ft=C(r)}function P(e){var t=h(),n=y(),r=y()
k(t,ft),ft=t,A(e.statement,r,n),k(n,ft),ft=C(n),w(e.expression,t,r),ft=C(r)}function O(e){var t=h(),n=y(),r=y()
Re(e.initializer),k(t,ft),ft=t,w(e.condition,n,r),ft=C(n),A(e.statement,r,t),Re(e.incrementor),k(t,ft),ft=C(r)}function R(e){var t=h(),n=y()
k(t,ft),ft=t,Re(e.expression),k(n,ft),Re(e.initializer),219!==e.initializer.kind&&H(e.initializer),A(e.statement,n,t),k(t,ft),ft=C(n)}function F(e){var t=y(),n=y(),r=y()
w(e.expression,t,n),ft=C(t),Re(e.thenStatement),k(r,ft),ft=C(n),Re(e.elseStatement),k(r,ft),ft=C(r)}function I(e){Re(e.expression),211===e.kind&&(xt=!0,yt&&k(yt,ft)),ft=wt}function M(e){if(bt)for(var t=0,n=bt;t<n.length;t++){var r=n[t]
if(r.name===e)return r}}function L(e,t,n){var r=210===e.kind?t:n
r&&(k(r,ft),ft=wt)}function B(e){if(Re(e.label),e.label){var t=M(e.label.text)
t&&(t.referenced=!0,L(e,t.breakTarget,t.continueTarget))}else L(e,gt,mt)}function J(e){var t=y(),n=ft
Re(e.tryBlock),k(t,ft),e.catchClause&&(ft=n,Re(e.catchClause),k(t,ft)),e.finallyBlock&&(ft=n,Re(e.finallyBlock)),ft=C(t)}function K(t){var n=y()
Re(t.expression)
var r=gt,a=kt
gt=n,kt=ft,Re(t.caseBlock),k(n,ft)
var i=e.forEach(t.caseBlock.clauses,function(e){return 250===e.kind})
t.possiblyExhaustive=!i&&!n.antecedents,i||k(n,x(kt,t,0,0)),gt=r,kt=a,ft=C(n)}function z(t){for(var n=t.clauses,r=wt,a=0;a<n.length;a++){for(var i=a;!n[a].statements.length&&a+1<n.length;)Re(n[a]),a++
var o=y()
k(o,x(kt,t.parent,i,a+1)),k(o,r),ft=C(o)
var s=n[a]
Re(s),r=ft,1&ft.flags||a===n.length-1||!st.noFallthroughCasesInSwitch||Pe(s,e.Diagnostics.Fallthrough_case_in_switch)}}function j(t){var n=ft
ft=kt,Re(t.expression),ft=n,e.forEach(t.statements,Re)}function U(e,t,n){var r={name:e,breakTarget:t,continueTarget:n,referenced:!1}
return(bt||(bt=[])).push(r),r}function q(){bt.pop()}function W(t){var n=h(),r=y()
Re(t.label),k(n,ft)
var a=U(t.label.text,r,n)
Re(t.statement),q(),a.referenced||st.allowUnusedLabels||ot.bindDiagnostics.push(e.createDiagnosticForNode(t.label,e.Diagnostics.Unused_label)),k(r,ft),ft=C(r)}function V(e){H(187===e.kind&&56===e.operatorToken.kind?e.left:e)}function H(e){if(d(e))ft=D(ft,e)
else if(170===e.kind)for(var t=0,n=e.elements;t<n.length;t++){var r=n[t]
191===r.kind?H(r.expression):V(r)}else if(171===e.kind)for(var a=0,i=e.properties;a<i.length;a++){var o=i[a]
253===o.kind?V(o.initializer):254===o.kind&&H(o.name)}}function G(e,t,n){var r=y()
51===e.operatorToken.kind?w(e.left,r,n):w(e.left,t,r),ft=C(r),Re(e.operatorToken),w(e.right,t,n)}function X(t){if(49===t.operator){var n=ht
ht=vt,vt=n,e.forEachChild(t,Re),vt=ht,ht=n}else e.forEachChild(t,Re)}function Q(t){var n=t.operatorToken.kind
if(51===n||52===n)if(E(t)){var r=y()
G(t,r,r),ft=C(r)}else G(t,ht,vt)
else e.forEachChild(t,Re),56!==n||e.isAssignmentTarget(t)||H(t.left)}function Y(t){e.forEachChild(t,Re),172===t.expression.kind&&H(t.expression)}function $(e){var t=y(),n=y(),r=y()
w(e.condition,t,n),ft=C(t),Re(e.whenTrue),k(r,ft),ft=C(n),Re(e.whenFalse),k(r,ft),ft=C(r)}function Z(t){var n=t.name
if(e.isBindingPattern(n))for(var r=0,a=n.elements;r<a.length;r++){var i=a[r]
Z(i)}else ft=D(ft,t)}function ee(t){e.forEachChild(t,Re),(t.initializer||207===t.parent.parent.kind||208===t.parent.parent.kind)&&Z(t)}function te(t){for(var n=t.expression;178===n.kind;)n=n.expression
179===n.kind||180===n.kind?(e.forEach(t.typeArguments,Re),e.forEach(t.arguments,Re),Re(t.expression)):e.forEachChild(t,Re)}function ne(t){switch(t.kind){case 192:case 221:case 224:case 171:case 159:case 281:case 265:return 1
case 222:return 65
case 269:case 225:case 223:return 33
case 256:return 37
case 148:case 220:case 147:case 146:case 149:case 150:case 151:case 152:case 153:case 156:case 157:return 45
case 179:case 180:return 61
case 226:return 4
case 145:return t.initializer?4:0
case 252:case 206:case 207:case 208:case 227:return 2
case 199:return e.isFunctionLike(t.parent)?0:2}return 0}function re(e){dt&&(dt.nextContainer=e),dt=e}function ae(e,t,n){return ie(e,t,n)}function ie(e,t,n){switch(ut.kind){case 225:return c(e,t,n)
case 256:return se(e,t,n)
case 192:case 221:return oe(e,t,n)
case 224:return s(ut.symbol.exports,ut.symbol,e,t,n)
case 159:case 171:case 222:case 265:case 281:return s(ut.symbol.members,ut.symbol,e,t,n)
case 156:case 157:case 151:case 152:case 153:case 147:case 146:case 148:case 149:case 150:case 220:case 179:case 180:case 269:case 223:return s(ut.locals,void 0,e,t,n)}}function oe(e,t,n){return 32&e.flags?s(ut.symbol.exports,ut.symbol,e,t,n):s(ut.symbol.members,ut.symbol,e,t,n)}function se(t,n,r){return e.isExternalModule(ot)?c(t,n,r):s(ot.locals,void 0,t,n,r)}function ce(e){var t=256===e.kind?e:e.body
if(t&&(256===t.kind||226===t.kind))for(var n=0,r=t.statements;n<r.length;n++){var a=r[n]
if(236===a.kind||235===a.kind)return!0}return!1}function _e(t){e.isInAmbientContext(t)&&!ce(t)?t.flags|=8192:t.flags&=-8193}function ue(n){if(_e(n),e.isAmbientModule(n))if(1&n.flags&&Pe(n,e.Diagnostics.export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always_visible),e.isExternalModuleAugmentation(n))ae(n,1024,0)
else{var r=void 0
if(9===n.name.kind){var a=n.name.text
e.hasZeroOrOneAsteriskCharacter(a)?r=e.tryParsePattern(a):Pe(n.name,e.Diagnostics.Pattern_0_can_have_at_most_one_Asterisk_character,a)}var i=ae(n,512,106639)
r&&(ot.patternAmbientModules||(ot.patternAmbientModules=[])).push({pattern:r,symbol:i})}else{var o=t(n)
if(0===o)ae(n,1024,0)
else if(ae(n,512,106639),304&n.symbol.flags)n.symbol.constEnumOnlyModule=!1
else{var s=2===o
void 0===n.symbol.constEnumOnlyModule?n.symbol.constEnumOnlyModule=s:n.symbol.constEnumOnlyModule=n.symbol.constEnumOnlyModule&&s}}}function le(t){var n=r(131072,i(t))
a(n,t,131072)
var o=r(2048,"__type")
a(o,t,2048),o.members=e.createMap(),o.members[n.name]=n}function de(t){var n
if(function(e){e[e.Property=1]="Property",e[e.Accessor=2]="Accessor"}(n||(n={})),Ct)for(var r=e.createMap(),a=0,i=t.properties;a<i.length;a++){var o=i[a]
if(69===o.name.kind){var s=o.name,c=253===o.kind||254===o.kind||147===o.kind?1:2,_=r[s.text]
if(_){if(1===c&&1===_){var u=e.getErrorSpanForNode(ot,s)
ot.bindDiagnostics.push(e.createFileDiagnostic(ot,u.start,u.length,e.Diagnostics.An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode))}}else r[s.text]=c}}return pe(t,4096,"__object")}function pe(e,t,n){var i=r(t,n)
a(i,e,t)}function fe(t,n,r){switch(lt.kind){case 225:c(t,n,r)
break
case 256:if(e.isExternalModule(ut)){c(t,n,r)
break}default:lt.locals||(lt.locals=e.createMap(),re(lt)),s(lt.locals,void 0,t,n,r)}}function ge(e){fe(e,2,107455)}function me(t){Ct&&t.originalKeywordKind>=106&&t.originalKeywordKind<=114&&!e.isIdentifierName(t)&&!e.isInAmbientContext(t)&&(ot.parseDiagnostics.length||ot.bindDiagnostics.push(e.createDiagnosticForNode(t,ye(t),e.declarationNameToString(t))))}function ye(t){return e.getContainingClass(t)?e.Diagnostics.Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode:ot.externalModuleIndicator?e.Diagnostics.Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode:e.Diagnostics.Identifier_expected_0_is_a_reserved_word_in_strict_mode}function he(t){Ct&&e.isLeftHandSideExpression(t.left)&&e.isAssignmentOperator(t.operatorToken.kind)&&xe(t,t.left)}function ve(e){Ct&&e.variableDeclaration&&xe(e,e.variableDeclaration.name)}function ke(t){if(Ct&&69===t.expression.kind){var n=e.getErrorSpanForNode(ot,t.expression)
ot.bindDiagnostics.push(e.createFileDiagnostic(ot,n.start,n.length,e.Diagnostics.delete_cannot_be_called_on_an_identifier_in_strict_mode))}}function be(e){return 69===e.kind&&("eval"===e.text||"arguments"===e.text)}function xe(t,n){if(n&&69===n.kind){var r=n
if(be(r)){var a=e.getErrorSpanForNode(ot,n)
ot.bindDiagnostics.push(e.createFileDiagnostic(ot,a.start,a.length,De(t),r.text))}}}function De(t){return e.getContainingClass(t)?e.Diagnostics.Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode:ot.externalModuleIndicator?e.Diagnostics.Invalid_use_of_0_Modules_are_automatically_in_strict_mode:e.Diagnostics.Invalid_use_of_0_in_strict_mode}function Ce(e){Ct&&xe(e,e.name)}function Se(t){return e.getContainingClass(t)?e.Diagnostics.Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_definitions_are_automatically_in_strict_mode:ot.externalModuleIndicator?e.Diagnostics.Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_are_automatically_in_strict_mode:e.Diagnostics.Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5}function Te(t){if(2>ct&&256!==lt.kind&&225!==lt.kind&&!e.isFunctionLike(lt)){var n=e.getErrorSpanForNode(ot,t)
ot.bindDiagnostics.push(e.createFileDiagnostic(ot,n.start,n.length,Se(t)))}}function Ee(t){Ct&&t.isOctalLiteral&&ot.bindDiagnostics.push(e.createDiagnosticForNode(t,e.Diagnostics.Octal_literals_are_not_allowed_in_strict_mode))}function we(e){Ct&&xe(e,e.operand)}function Ae(e){Ct&&(41===e.operator||42===e.operator)&&xe(e,e.operand)}function Ne(t){Ct&&Pe(t,e.Diagnostics.with_statements_are_not_allowed_in_strict_mode)}function Pe(t,n,r,a,i){var o=e.getSpanOfTokenAtPosition(ot,t.pos)
ot.bindDiagnostics.push(e.createFileDiagnostic(ot,o.start,o.length,n,r,a,i))}function Oe(t){return"__"+e.indexOf(t.parent.parameters,t)}function Re(e){if(e){e.parent=_t
var t=Ct
if(Me(e),e.kind>138){var n=_t
_t=e
var r=ne(e)
0===r?u(e):_(e,r),_t=n}Ct=t}}function Fe(t){if(!Ct)for(var n=0,r=t;n<r.length;n++){var a=r[n]
if(!e.isPrologueDirective(a))return
if(Ie(a))return void(Ct=!0)}}function Ie(t){var n=e.getTextOfNodeFromSourceText(ot.text,t.expression)
return'"use strict"'===n||"'use strict'"===n}function Me(t){switch(t.kind){case 69:case 97:return ft&&(e.isExpression(t)||254===_t.kind)&&(t.flowNode=ft),me(t)
case 172:ft&&d(t)&&(t.flowNode=ft)
break
case 187:if(e.isInJavaScriptFile(t)){var n=e.getSpecialPropertyAssignmentKind(t)
switch(n){case 1:We(t)
break
case 2:Ve(t)
break
case 3:Ge(t)
break
case 4:He(t)
break
case 0:break
default:e.Debug.fail("Unknown special property assignment kind")}}return he(t)
case 252:return ve(t)
case 181:return ke(t)
case 8:return Ee(t)
case 186:return we(t)
case 185:return Ae(t)
case 212:return Ne(t)
case 165:return void(pt=!0)
case 154:return Le(t)
case 141:return ae(t,262144,530920)
case 142:return Ze(t)
case 218:case 169:return $e(t)
case 145:case 144:case 266:return nt(t,4|(t.questionToken?536870912:0),0)
case 280:return rt(t)
case 253:case 254:return nt(t,4,0)
case 255:return nt(t,8,900095)
case 247:return void(Dt|=1073741824)
case 151:case 152:case 153:return ae(t,131072,0)
case 147:case 146:return nt(t,8192|(t.questionToken?536870912:0),e.isObjectLiteralMethod(t)?0:99263)
case 220:return et(t)
case 148:return ae(t,16384,0)
case 149:return nt(t,32768,41919)
case 150:return nt(t,65536,74687)
case 156:case 157:case 269:return le(t)
case 159:case 281:case 265:return pe(t,2048,"__type")
case 171:return de(t)
case 179:case 180:return tt(t)
case 174:e.isInJavaScriptFile(t)&&Xe(t)
break
case 192:case 221:return Ct=!0,Qe(t)
case 222:return fe(t,64,792968)
case 279:case 223:return fe(t,524288,793064)
case 224:return Ye(t)
case 225:return ue(t)
case 229:case 232:case 234:case 238:return ae(t,8388608,8388608)
case 228:return ze(t)
case 231:return Ue(t)
case 236:return je(t)
case 235:return Ke(t)
case 256:return Fe(t.statements),Be()
case 199:if(!e.isFunctionLike(t.parent))return
case 226:return Fe(t.statements)}}function Le(e){var t=e.parameterName,n=e.type
t&&69===t.kind&&me(t),t&&165===t.kind&&(pt=!0),Re(n)}function Be(){_e(ot),e.isExternalModule(ot)&&Je()}function Je(){pe(ot,512,'"'+e.removeFileExtension(ot.fileName)+'"')}function Ke(t){if(ut.symbol&&ut.symbol.exports){var n=235===t.kind&&e.exportAssignmentIsAlias(t)?8388608:4
s(ut.symbol.exports,ut.symbol,t,n,8388608)}else pe(t,8388608,i(t))}function ze(t){if(t.modifiers&&t.modifiers.length&&ot.bindDiagnostics.push(e.createDiagnosticForNode(t,e.Diagnostics.Modifiers_cannot_appear_here)),256!==t.parent.kind)return void ot.bindDiagnostics.push(e.createDiagnosticForNode(t,e.Diagnostics.Global_module_exports_may_only_appear_at_top_level))
var n=t.parent
return e.isExternalModule(n)?n.isDeclarationFile?(ot.symbol.globalExports=ot.symbol.globalExports||e.createMap(),void s(ot.symbol.globalExports,ot.symbol,t,8388608,8388608)):void ot.bindDiagnostics.push(e.createDiagnosticForNode(t,e.Diagnostics.Global_module_exports_may_only_appear_in_declaration_files)):void ot.bindDiagnostics.push(e.createDiagnosticForNode(t,e.Diagnostics.Global_module_exports_may_only_appear_in_module_files))}function je(e){ut.symbol&&ut.symbol.exports?e.exportClause||s(ut.symbol.exports,ut.symbol,e,1073741824,0):pe(e,1073741824,i(e))}function Ue(e){e.name&&ae(e,8388608,8388608)}function qe(e){ot.commonJsModuleIndicator||(ot.commonJsModuleIndicator=e,Je())}function We(e){qe(e),s(ot.symbol.exports,ot.symbol,e.left,7340036,0)}function Ve(e){qe(e),s(ot.symbol.exports,ot.symbol,e,7340548,0)}function He(t){if(e.Debug.assert(e.isInJavaScriptFile(t)),220===ut.kind||179===ut.kind)ut.symbol.members=ut.symbol.members||e.createMap(),s(ut.symbol.members,ut.symbol,t,4,0)
else if(148===ut.kind){var n=ut
ut=ut.parent
var r=nt(t,4,0)
r&&(r.isReplaceableByMethod=!0),ut=n}}function Ge(t){var n=t.left,r=n.expression,a=r.expression
n.parent=t,a.parent=r,r.parent=n
var i=ut.locals[a.text]
i&&(16&i.flags||e.isDeclarationOfFunctionExpression(i))&&(i.members||(i.members=e.createMap()),s(i.members,i,n,4,0))}function Xe(t){!ot.commonJsModuleIndicator&&e.isRequireCall(t,!1)&&qe(t)}function Qe(t){if(e.isDeclarationFile(ot)||e.isInAmbientContext(t)||(void 0!==e.getClassExtendsHeritageClauseElement(t)&&(Dt|=262144),e.nodeIsDecorated(t)&&(Dt|=524288)),221===t.kind)fe(t,32,899519)
else{var n=t.name?t.name.text:"__class"
pe(t,32,n),t.name&&(Tt[t.name.text]=t.name.text)}var a=t.symbol,i=r(134217732,"prototype")
a.exports[i.name]&&(t.name&&(t.name.parent=t),ot.bindDiagnostics.push(e.createDiagnosticForNode(a.exports[i.name].declarations[0],e.Diagnostics.Duplicate_identifier_0,i.name))),a.exports[i.name]=i,i.parent=a}function Ye(t){return e.isConst(t)?fe(t,128,899967):fe(t,256,899327)}function $e(t){Ct&&xe(t,t.name),e.isBindingPattern(t.name)||(e.isBlockOrCatchScoped(t)?ge(t):e.isParameterDeclaration(t)?ae(t,1,107455):ae(t,1,107454))}function Ze(t){if(e.isDeclarationFile(ot)||e.isInAmbientContext(t)||!e.nodeIsDecorated(t)||(Dt|=1572864),Ct&&xe(t,t.name),e.isBindingPattern(t.name)?pe(t,1,Oe(t)):ae(t,1,107455),e.isParameterPropertyDeclaration(t)){var n=t.parent.parent
s(n.symbol.members,n.symbol,t,4|(t.questionToken?536870912:0),0)}}function et(t){e.isDeclarationFile(ot)||e.isInAmbientContext(t)||e.isAsyncFunctionLike(t)&&(Dt|=2097152),Ce(t),Ct?(Te(t),fe(t,16,106927)):ae(t,16,106927)}function tt(t){e.isDeclarationFile(ot)||e.isInAmbientContext(t)||e.isAsyncFunctionLike(t)&&(Dt|=2097152),ft&&(t.flowNode=ft),Ce(t)
var n=t.name?t.name.text:"__function"
return pe(t,16,n)}function nt(t,n,r){return e.isDeclarationFile(ot)||e.isInAmbientContext(t)||(e.isAsyncFunctionLike(t)&&(Dt|=2097152),e.nodeIsDecorated(t)&&(Dt|=524288)),e.hasDynamicName(t)?pe(t,n,"__computed"):ae(t,n,r)}function rt(e){return ae(e,4,0)}function at(e){var n=t(e)
return 1===n||2===n&&st.preserveConstEnums}function it(t){if(!(1&ft.flags))return!1
if(ft===wt){var n=e.isStatement(t)&&201!==t.kind||221===t.kind||225===t.kind&&at(t)||224===t.kind&&(!e.isConstEnumDeclaration(t)||st.preserveConstEnums)
if(n){ft=At
var r=!st.allowUnreachableCode&&!e.isInAmbientContext(t)&&(200!==t.kind||3072&e.getCombinedNodeFlags(t.declarationList)||e.forEach(t.declarationList.declarations,function(e){return e.initializer}))
r&&Pe(t,e.Diagnostics.Unreachable_code_detected)}}return!0}var ot,st,ct,_t,ut,lt,dt,pt,ft,gt,mt,yt,ht,vt,kt,bt,xt,Dt,Ct,St,Tt,Et=0,wt={flags:1},At={flags:1}
return n}!function(e){e[e.NonInstantiated=0]="NonInstantiated",e[e.Instantiated=1]="Instantiated",e[e.ConstEnumOnly=2]="ConstEnumOnly"}(e.ModuleInstanceState||(e.ModuleInstanceState={}))
e.ModuleInstanceState
e.getModuleInstanceState=t
var a
!function(e){e[e.None=0]="None",e[e.IsContainer=1]="IsContainer",e[e.IsBlockScopedContainer=2]="IsBlockScopedContainer",e[e.IsControlFlowContainer=4]="IsControlFlowContainer",e[e.IsFunctionLike=8]="IsFunctionLike",e[e.IsFunctionExpression=16]="IsFunctionExpression",e[e.HasLocals=32]="HasLocals",e[e.IsInterface=64]="IsInterface"}(a||(a={}))
var i=r()
e.bindSourceFile=n}(ts||(ts={}))
var ts
!function(e){function t(e){return e.id||(e.id=i,i++),e.id}function n(e){return e.id||(e.id=a,a++),e.id}function r(r,a){function i(e,t){return fd(e,t),wf}function c(t,n,r,a,i){var o=t?e.createDiagnosticForNode(t,n,r,a,i):e.createCompilerDiagnostic(n,r,a,i)
om.add(o)}function _(e,t){return vf++,new gf(e,t)}function u(e){var t=0
return 2&e&&(t|=107455),1&e&&(t|=107454),4&e&&(t|=0),8&e&&(t|=900095),16&e&&(t|=106927),32&e&&(t|=899519),64&e&&(t|=792968),256&e&&(t|=899327),128&e&&(t|=899967),512&e&&(t|=106639),8192&e&&(t|=99263),32768&e&&(t|=41919),65536&e&&(t|=74687),262144&e&&(t|=530920),524288&e&&(t|=793064),8388608&e&&(t|=8388608),t}function l(e,t){t.mergeId||(t.mergeId=o,o++),Xg[t.mergeId]=e}function d(t){var n=_(33554432|t.flags,t.name)
return n.declarations=t.declarations.slice(0),n.parent=t.parent,t.valueDeclaration&&(n.valueDeclaration=t.valueDeclaration),t.constEnumOnlyModule&&(n.constEnumOnlyModule=!0),t.members&&(n.members=e.cloneMap(t.members)),t.exports&&(n.exports=e.cloneMap(t.exports)),l(n,t),n}function p(t,n){if(t.flags&u(n.flags)){var r=2&t.flags||2&n.flags?e.Diagnostics.Cannot_redeclare_block_scoped_variable_0:e.Diagnostics.Duplicate_identifier_0
e.forEach(n.declarations,function(e){c(e.name?e.name:e,r,Oe(n))}),e.forEach(t.declarations,function(e){c(e.name?e.name:e,r,Oe(n))})}else 512&n.flags&&512&t.flags&&t.constEnumOnlyModule&&!n.constEnumOnlyModule&&(t.constEnumOnlyModule=!1),t.flags|=n.flags,n.valueDeclaration&&(!t.valueDeclaration||225===t.valueDeclaration.kind&&225!==n.valueDeclaration.kind)&&(t.valueDeclaration=n.valueDeclaration),e.forEach(n.declarations,function(e){t.declarations.push(e)}),n.members&&(t.members||(t.members=e.createMap()),f(t.members,n.members)),n.exports&&(t.exports||(t.exports=e.createMap()),f(t.exports,n.exports)),l(t,n)}function f(e,t){for(var n in t){var r=e[n]
r?(33554432&r.flags||(e[n]=r=d(r)),p(r,t[n])):e[n]=t[n]}}function g(t){var n=t.parent
if(n.symbol.declarations[0]!==n)return void e.Debug.assert(n.symbol.declarations.length>1)
if(e.isGlobalScopeAugmentation(n))f(Kg,n.symbol.exports)
else{var r=e.isInAmbientContext(t.parent.parent)?void 0:e.Diagnostics.Invalid_module_name_in_augmentation_module_0_cannot_be_found,a=Y(t,t,r)
if(!a)return
a=$(a),1920&a.flags?(a=33554432&a.flags?a:d(a),p(a,n.symbol)):c(t,e.Diagnostics.Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity,t.text)}}function m(t,n,r){function a(t,n){return function(r){return om.add(e.createDiagnosticForNode(r,n,t))}}for(var i in n)t[i]?e.forEach(t[i].declarations,a(i,r)):t[i]=n[i]}function y(e){if(67108864&e.flags)return e
var t=n(e)
return Qg[t]||(Qg[t]={})}function h(e){var n=t(e)
return Yg[n]||(Yg[n]={flags:0})}function v(t){return 256===t.kind&&!e.isExternalOrCommonJsModule(t)}function k(t,n,r){if(r){var a=t[n]
if(a){if(e.Debug.assert(0===(16777216&a.flags),"Should never get an instantiated symbol here."),a.flags&r)return a
if(8388608&a.flags){var i=q(a)
if(i===Lf||i.flags&r)return a}}}}function b(t,n){var r=t.parent,a=t.parent.parent,i=k(r.locals,n,107455),o=k(a.symbol.members,n,107455)
return i&&o?[i,o]:void e.Debug.fail("There should exist two symbols, one as property declaration and one as parameter declaration")}function x(t,n){function a(t,n){var r=e.getEnclosingBlockScopeContainer(t)
switch(t.parent.parent.kind){case 200:case 206:case 208:if(w(n,t,r))return!0}switch(t.parent.parent.kind){case 207:case 208:if(w(n,t.parent.parent.expression,r))return!0}return!1}function i(t,n){for(var r=e.getEnclosingBlockScopeContainer(t),a=n;a;){if(a===r)return!1
if(e.isFunctionLike(a))return!0
var i=a.parent&&145===a.parent.kind&&0===(32&a.parent.flags)&&a.parent.initializer===a
if(i)return!0
a=a.parent}return!1}var o=e.getSourceFileOfNode(t),s=e.getSourceFileOfNode(n)
if(o!==s){if(Cf&&(o.externalModuleIndicator||s.externalModuleIndicator)||!xf.outFile&&!xf.out)return!0
var c=r.getSourceFiles()
return e.indexOf(c,o)<=e.indexOf(c,s)}return t.pos<=n.pos?218!==t.kind||!a(t,n):i(t,n)}function D(t,n,r,a,i){var o,s,_,u,l=t,d=!1
e:for(;t;){if(t.locals&&!v(t)&&(o=k(t.locals,n,r))){var p=!0
if(e.isFunctionLike(t)&&s&&s!==t.body&&(r&o.flags&793064&&273!==s.kind&&(p=262144&o.flags?s===t.type||142===s.kind||141===s.kind:!1),107455&r&&1&o.flags&&(p=142===s.kind||s===t.type&&142===o.valueDeclaration.kind)),p)break e
o=void 0}switch(t.kind){case 256:if(!e.isExternalOrCommonJsModule(t))break
d=!0
case 225:var f=se(t).exports
if(256===t.kind||e.isAmbientModule(t)){if(o=f["default"]){var g=e.getLocalSymbolForExportDefault(o)
if(g&&o.flags&r&&g.name===n)break e
o=void 0}if(f[n]&&8388608===f[n].flags&&e.getDeclarationOfKind(f[n],238))break}if(o=k(f,n,8914931&r))break e
break
case 224:if(o=k(se(t).exports,n,8&r))break e
break
case 145:case 144:if(e.isClassLike(t.parent)&&!(32&t.flags)){var m=le(t.parent)
m&&m.locals&&k(m.locals,n,107455&r)&&(_=t)}break
case 221:case 192:case 222:if(o=k(se(t).members,n,793064&r)){if(s&&32&s.flags)return void c(l,e.Diagnostics.Static_members_cannot_reference_class_type_parameters)
break e}if(192===t.kind&&32&r){var y=t.name
if(y&&n===y.text){o=t.symbol
break e}}break
case 140:if(u=t.parent.parent,(e.isClassLike(u)||222===u.kind)&&(o=k(se(u).members,n,793064&r)))return void c(l,e.Diagnostics.A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type)
break
case 147:case 146:case 148:case 149:case 150:case 220:case 180:if(3&r&&"arguments"===n){o=Nf
break e}break
case 179:if(3&r&&"arguments"===n){o=Nf
break e}if(16&r){var h=t.name
if(h&&n===h.text){o=t.symbol
break e}}break
case 143:t.parent&&142===t.parent.kind&&(t=t.parent),t.parent&&e.isClassElement(t.parent)&&(t=t.parent)}s=t,t=t.parent}if(o&&a&&Sf&&(o.isReferenced=!0),o||(o=k(Kg,n,r)),!o)return void(a&&(l&&(C(l,n,i)||S(l))||c(l,a,"string"==typeof i?i:e.declarationNameToString(i))))
if(a){if(_){var b=_.name
return void c(l,e.Diagnostics.Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor,e.declarationNameToString(b),"string"==typeof i?i:e.declarationNameToString(i))}if(2&r){var x=_e(o)
2&x.flags&&E(x,l)}if(o&&d){var D=o.declarations
D&&1===D.length&&228===D[0].kind&&c(l,e.Diagnostics.Identifier_0_must_be_imported_from_a_module,n)}}return o}function C(t,n,r){if(69===t.kind&&xd(t)||Li(t))return!1
for(var a=e.getThisContainer(t,!0),i=a;i;){if(e.isClassLike(i.parent)){var o=se(i.parent)
if(!o)break
var s=bt(o)
if(An(s,n))return c(t,e.Diagnostics.Cannot_find_name_0_Did_you_mean_the_static_member_1_0,"string"==typeof r?r:e.declarationNameToString(r),Oe(o)),!0
if(i===a&&!(32&i.flags)){var _=Ht(o).thisType
if(An(_,n))return c(t,e.Diagnostics.Cannot_find_name_0_Did_you_mean_the_instance_member_this_0,"string"==typeof r?r:e.declarationNameToString(r)),!0}}i=i.parent}return!1}function S(t){var n=T(t),r=!(!n||!X(n,64,!0))
return r&&c(t,e.Diagnostics.Cannot_extend_an_interface_0_Did_you_mean_implements,e.getTextOfNode(n)),r}function T(t){switch(t.kind){case 69:case 172:return t.parent?T(t.parent):void 0
case 194:return e.Debug.assert(e.isEntityNameExpression(t.expression)),t.expression
default:return}}function E(t,n){e.Debug.assert(0!==(2&t.flags))
var r=e.forEach(t.declarations,function(t){return e.isBlockOrCatchScoped(t)?t:void 0})
e.Debug.assert(void 0!==r,"Block-scoped variable declaration is undefined"),e.isInAmbientContext(r)||x(e.getAncestor(r,218),n)||c(n,e.Diagnostics.Block_scoped_variable_0_used_before_its_declaration,e.declarationNameToString(r.name))}function w(t,n,r){if(!n)return!1
for(var a=t;a&&a!==r&&!e.isFunctionLike(a);a=a.parent)if(a===n)return!0
return!1}function A(t){if(e.isAliasSymbolDeclaration(t)){if(229===t.kind)return t
for(;t&&230!==t.kind;)t=t.parent
return t}}function N(t){return e.forEach(t.declarations,function(t){return e.isAliasSymbolDeclaration(t)?t:void 0})}function P(t){return 240===t.moduleReference.kind?$(Q(t,e.getExternalModuleImportEqualsDeclarationExpression(t))):H(t.moduleReference,t)}function O(t){var n=Q(t,t.parent.moduleSpecifier)
if(n){var r=e.isShorthandAmbientModuleSymbol(n)?n:n.exports["export="]?An(bt(n.exports["export="]),"default"):U(n.exports["default"])
if(r||Tf){if(!r&&Tf)return $(n)||U(n)}else c(t.name,e.Diagnostics.Module_0_has_no_default_export,Oe(n))
return r}}function R(e){var t=e.parent.parent.moduleSpecifier
return Z(Q(e,t),t)}function F(t,n){if(794600&t.flags)return t
var r=_(t.flags|n.flags,t.name)
return r.declarations=e.concatenate(t.declarations,n.declarations),r.parent=t.parent||n.parent,t.valueDeclaration&&(r.valueDeclaration=t.valueDeclaration),n.members&&(r.members=n.members),t.exports&&(r.exports=t.exports),r}function I(e,t){if(1536&e.flags){var n=ne(e)[t]
if(n)return U(n)}}function M(e,t){if(3&e.flags){var n=e.valueDeclaration.type
if(n)return U(An(aa(n),t))}}function L(t,n){var r=Q(t,t.moduleSpecifier),a=Z(r,t.moduleSpecifier)
if(a){var i=n.propertyName||n.name
if(i.text){if(e.isShorthandAmbientModuleSymbol(r))return r
var o=void 0
o=r&&r.exports&&r.exports["export="]?An(bt(a),i.text):M(a,i.text),o=U(o)
var s=I(a,i.text)
!s&&Tf&&"default"===i.text&&(s=$(r)||U(r))
var _=s&&o?F(o,s):s||o
return _||c(i,e.Diagnostics.Module_0_has_no_exported_member_1,G(r),e.declarationNameToString(i)),_}}}function B(e){return L(e.parent.parent.parent,e)}function J(e){return $(e.parent.symbol)}function K(e){return e.parent.parent.moduleSpecifier?L(e.parent.parent,e):X(e.propertyName||e.name,901119)}function z(e){return X(e.expression,901119)}function j(e){switch(e.kind){case 229:return P(e)
case 231:return O(e)
case 232:return R(e)
case 234:return B(e)
case 238:return K(e)
case 235:return z(e)
case 228:return J(e)}}function U(e){return e&&8388608&e.flags&&!(901119&e.flags)?q(e):e}function q(t){e.Debug.assert(0!==(8388608&t.flags),"Should only get Alias here.")
var n=y(t)
if(n.target)n.target===Bf&&(n.target=Lf)
else{n.target=Bf
var r=N(t)
e.Debug.assert(!!r)
var a=j(r)
n.target===Bf?n.target=a||Lf:c(r,e.Diagnostics.Circular_definition_of_import_alias_0,Oe(t))}return n.target}function W(e){var t=se(e),n=q(t)
if(n){var r=n===Lf||107455&n.flags&&!Xd(n)
r&&V(t)}}function V(t){var n=y(t)
if(!n.referenced){n.referenced=!0
var r=N(t)
e.Debug.assert(!!r),235===r.kind?B_(r.expression):238===r.kind?B_(r.propertyName||r.name):e.isInternalModuleImportEqualsDeclaration(r)&&B_(r.moduleReference)}}function H(t,n,r){return 69===t.kind&&e.isRightSideOfQualifiedNameOrPropertyAccess(t)&&(t=t.parent),69===t.kind||139===t.parent.kind?X(t,1920,!1,r):(e.Debug.assert(229===t.parent.kind),X(t,901119,!1,r))}function G(e){return e.parent?G(e.parent)+"."+Oe(e):Oe(e)}function X(t,n,r,a){if(!e.nodeIsMissing(t)){var i
if(69===t.kind){var o=1920===n?e.Diagnostics.Cannot_find_namespace_0:e.Diagnostics.Cannot_find_name_0
if(i=D(t,t.text,n,r?void 0:o,t),!i)return}else if(139===t.kind||172===t.kind){var s=139===t.kind?t.left:t.expression,_=139===t.kind?t.right:t.name,u=X(s,1920,r)
if(!u||e.nodeIsMissing(_))return
if(u===Lf)return u
if(i=k(ne(u),_.text,n),!i)return void(r||c(_,e.Diagnostics.Module_0_has_no_exported_member_1,G(u),e.declarationNameToString(_)))}else e.Debug.fail("Unknown entity name kind.")
return e.Debug.assert(0===(16777216&i.flags),"Should never get an instantiated symbol here."),i.flags&n||a?i:q(i)}}function Q(t,n){return Y(t,n,e.Diagnostics.Cannot_find_module_0)}function Y(t,n,a){if(9===n.kind){var i=n,o=e.escapeIdentifier(i.text)
if(void 0!==o){var s=e.isExternalModuleNameRelative(o)
if(!s){var _=k(Kg,'"'+o+'"',512)
if(_)return oe(_)}var u=e.getResolvedModule(e.getSourceFileOfNode(t),i.text),l=u&&r.getSourceFile(u.resolvedFileName)
if(l)return l.symbol?oe(l.symbol):void(a&&c(i,e.Diagnostics.File_0_is_not_a_module,l.fileName))
if(ng){var d=e.findBestPatternMatch(ng,function(e){return e.pattern},o)
if(d)return oe(d.symbol)}if(a){var p=e.tryExtractTypeScriptExtension(o)
if(p){var f=e.Diagnostics.An_import_path_cannot_end_with_a_0_extension_Consider_importing_1_instead
c(i,f,p,e.removeExtension(o,p))}else c(i,a,o)}}}}function $(e){return e&&oe(U(e.exports["export="]))||e}function Z(t,n){var r=$(t)
return!r||1539&r.flags||(c(n,e.Diagnostics.Module_0_resolves_to_a_non_module_entity_and_cannot_be_imported_using_this_construct,Oe(t)),r=void 0),r}function ee(e){return void 0!==e.exports["export="]}function te(e){return Jn(re(e))}function ne(e){return 1536&e.flags?re(e):e.exports||bf}function re(e){var t=y(e)
return t.resolvedExports||(t.resolvedExports=ie(e))}function ae(t,n,r,a){for(var i in n)"default"===i||t[i]?r&&a&&"default"!==i&&t[i]&&U(t[i])!==U(n[i])&&(r[i].exportsWithDuplicate?r[i].exportsWithDuplicate.push(a):r[i].exportsWithDuplicate=[a]):(t[i]=n[i],r&&a&&(r[i]={specifierText:e.getTextOfNode(a.moduleSpecifier)}))}function ie(t){function n(t){if(t&&1952&t.flags&&!e.contains(r,t)){r.push(t)
var a=e.cloneMap(t.exports),i=t.exports.__export
if(i){for(var o=e.createMap(),s=e.createMap(),c=0,_=i.declarations;c<_.length;c++){var u=_[c],l=Q(u,u.moduleSpecifier),d=n(l)
ae(o,d,s,u)}for(var p in s){var f=s[p].exportsWithDuplicate
if("export="!==p&&f&&f.length&&!a[p])for(var g=0,m=f;g<m.length;g++){var u=m[g]
om.add(e.createDiagnosticForNode(u,e.Diagnostics.Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambiguity,s[p].specifierText,p))}}ae(a,o)}return a}}var r=[]
return n(t)||t.exports}function oe(e){var t
return e&&e.mergeId&&(t=Xg[e.mergeId])?t:e}function se(e){return oe(e.symbol)}function ce(e){return oe(e.parent)}function _e(e){return e&&0!==(1048576&e.flags)?oe(e.exportSymbol):e}function ue(e){return 16777216&e.flags?ue(y(e).target):107455&e.flags?!0:8388608&e.flags?0!==(107455&q(e).flags):!1}function le(t){for(var n=t.members,r=0,a=n;r<a.length;r++){var i=a[r]
if(148===i.kind&&e.nodeIsPresent(i.body))return i}}function de(e){var t=new mf(Pf,e)
return hf++,t.id=hf,t}function pe(e,t){var n=de(e)
return n.intrinsicName=t,n}function fe(e){var t=Ur(e)
return t.flags|=8,t.intrinsicName="boolean",t}function ge(e,t){var n=de(e)
return n.symbol=t,n}function me(e){return 95===e.charCodeAt(0)&&95===e.charCodeAt(1)&&95!==e.charCodeAt(2)&&64!==e.charCodeAt(2)}function ye(e){var t
for(var n in e)if(!me(n)){t||(t=[])
var r=e[n]
ue(r)&&t.push(r)}return t||kf}function he(e,t,n,r,a,i){return e.members=t,e.properties=ye(t),e.callSignatures=n,e.constructSignatures=r,a&&(e.stringIndexInfo=a),i&&(e.numberIndexInfo=i),e}function ve(e,t,n,r,a,i){return he(ge(2097152,e),t,n,r,a,i)}function ke(t,n){for(var r,a=t;a;a=a.parent){if(a.locals&&!v(a)&&(r=n(a.locals)))return r
switch(a.kind){case 256:if(!e.isExternalOrCommonJsModule(a))break
case 225:if(r=n(se(a).exports))return r}}return n(Kg)}function be(e){return 107455===e?107455:1920}function xe(t,n,r,a){function i(o){function s(e,t){if(!De(e,n,t))return!0
var r=xe(e.parent,n,be(t),a)
return!!r}function c(n,a){return t===(a||n)?!e.forEach(n.declarations,Te)&&s(n,r):void 0}return c(o[t.name])?[t]:e.forEachProperty(o,function(t){if(8388608&t.flags&&"export="!==t.name&&!e.getDeclarationOfKind(t,238)&&(!a||e.forEach(t.declarations,e.isExternalModuleImportEqualsDeclaration))){var n=q(t)
if(c(t,q(t)))return[t]
var o=n.exports?i(n.exports):void 0
if(o&&s(t,be(r)))return[t].concat(o)}})}return t&&!Ce(t)?ke(n,i):void 0}function De(t,n,r){var a=!1
return ke(n,function(n){var i=n[t.name]
return i?i===t?!0:(i=8388608&i.flags&&!e.getDeclarationOfKind(i,238)?q(i):i,i.flags&r?(a=!0,!0):!1):!1}),a}function Ce(e){if(e.declarations&&e.declarations.length){for(var t=0,n=e.declarations;t<n.length;t++){var r=n[t]
switch(r.kind){case 145:case 147:case 149:case 150:continue
default:return!1}}return!0}return!1}function Se(t,n,r){function a(e){for(;e;e=e.parent)if(Te(e))return se(e)}if(t&&n&&!(262144&t.flags)){for(var i=t,o=r;t;){var s=xe(t,n,o,!1)
if(s){var c=Ee(s[0])
return c?c:{accessibility:1,errorSymbolName:Oe(i,n,r),errorModuleName:t!==i?Oe(t,n,1920):void 0}}o=be(r),t=ce(t)}var _=e.forEach(i.declarations,a)
if(_){var u=a(n)
if(_!==u)return{accessibility:2,errorSymbolName:Oe(i,n,r),errorModuleName:Oe(_)}}return{accessibility:1,errorSymbolName:Oe(i,n,r)}}return{accessibility:0}}function Te(t){return e.isAmbientModule(t)||256===t.kind&&e.isExternalOrCommonJsModule(t)}function Ee(t){function n(t){if(!ze(t)){var n=A(t)
return!n||1&n.flags||!ze(n.parent)?!1:(h(t).isVisible=!0,r?e.contains(r,n)||r.push(n):r=[n],!0)}return!0}var r
if(!e.forEach(t.declarations,function(e){return!n(e)}))return{accessibility:0,aliasesToMakeVisible:r}}function we(t,n){var r
r=158===t.parent.kind||e.isExpressionWithTypeArgumentsInClassExtendsClause(t.parent)?1156031:139===t.kind||172===t.kind||229===t.parent.kind?1920:793064
var a=Yl(t),i=D(n,a.text,r,void 0,void 0)
return i&&Ee(i)||{accessibility:1,errorSymbolName:e.getTextOfNode(a),errorNode:a}}function Ae(t,n){t.writeKeyword(e.tokenToString(n))}function Ne(t,n){t.writePunctuation(e.tokenToString(n))}function Pe(e){e.writeSpace(" ")}function Oe(t,n,r){var a=e.getSingleLineStringWriter()
Ke().buildSymbolDisplay(t,a,n,r)
var i=a.string()
return e.releaseStringWriter(a),i}function Re(t,n,r,a){var i=e.getSingleLineStringWriter()
Ke().buildSignatureDisplay(t,i,n,r,a)
var o=i.string()
return e.releaseStringWriter(i),o}function Fe(t,n,r){var a=e.getSingleLineStringWriter()
Ke().buildTypeDisplay(t,a,n,r)
var i=a.string()
e.releaseStringWriter(a)
var o=xf.noErrorTruncation||4&r?void 0:100
return o&&i.length>=o&&(i=i.substr(0,o-3)+"..."),i}function Ie(t,n,r){var a=e.getSingleLineStringWriter()
Ke().buildTypePredicateDisplay(t,a,n,r)
var i=a.string()
return e.releaseStringWriter(a),i}function Me(e){for(var t=[],n=0,r=0;r<e.length;r++){var a=e[r]
if(n|=a.flags,!(6144&a.flags)){if(384&a.flags){var i=128&a.flags?Xf:a.baseType,o=i.types.length
if(r+o<=e.length&&e[r+o-1]===i.types[o-1]){t.push(i),r+=o-1
continue}}t.push(a)}}return 4096&n&&t.push(Uf),2048&n&&t.push(zf),t||e}function Le(e){return 8===e?"private":16===e?"protected":"public"}function Be(e){if(e.symbol&&2048&e.symbol.flags){for(var t=e.symbol.declarations[0].parent;164===t.kind;)t=t.parent
if(223===t.kind)return se(t)}}function Je(t){return t&&t.parent&&226===t.parent.kind&&e.isExternalModuleAugmentation(t.parent.parent)}function Ke(){function t(t){if(t.declarations&&t.declarations.length){var n=t.declarations[0]
if(n.name)return e.declarationNameToString(n.name)
switch(n.kind){case 192:return"(Anonymous class)"
case 179:case 180:return"(Anonymous function)"}}return t.name}function n(e,n){n.writeSymbol(t(e),e)}function r(n,r){var a=t(n),i=a.charCodeAt(0),o=!e.isIdentifierStart(i,Df)
o?(Ne(r,19),e.isSingleOrDoubleQuote(i)?r.writeStringLiteral(a):r.writeSymbol(a,n),Ne(r,20)):(Ne(r,21),r.writeSymbol(a,n))}function a(t,a,i,s,c,_){function u(e){d?(1&c&&(16777216&e.flags?p(wt(d),e.mapper,a,i):o(d,a,i)),r(e,a)):n(e,a),d=e}function l(t,n){if(t){var r=xe(t,i,n,!!(2&c))
if((!r||De(r[0],i,1===r.length?n:be(n)))&&l(ce(r?r[0]:t),be(n)),r)for(var a=0,o=r;a<o.length;a++){var s=o[a]
u(s)}else{if(!d&&e.forEach(t.declarations,Te))return
if(2048&t.flags||4096&t.flags)return
u(t)}}}var d
a.trackSymbol(t,i,s)
var f=262144&t.flags,g=128&_
return f||!i&&!g?u(t):void l(t,s)}function i(t,r,i,o,s){function c(t,s){var c=-513&s
if(16015&t.flags)r.writeKeyword(16&o||!Qe(t)?t.intrinsicName:"any")
else if(268435456&t.flags)b&&r.reportInaccessibleThisError(),r.writeKeyword("this")
else if(131072&t.flags)l(t,c)
else if(256&t.flags)a(ce(t.symbol),r,i,793064,0,c),Ne(r,21),n(t.symbol,r)
else if(114704&t.flags)a(t.symbol,r,i,793064,0,c)
else if(!(512&s)&&3670016&t.flags&&t.aliasSymbol)if(2097152&t.flags||!(1024&s)){var _=t.aliasTypeArguments
u(t.aliasSymbol,_,0,_?_.length:0,c)}else d(t,c)
else 1572864&t.flags?d(t,c):2097152&t.flags?p(t,c):32&t.flags?r.writeStringLiteral('"'+e.escapeString(t.text)+'"'):64&t.flags?r.writeStringLiteral(t.text):(Ne(r,15),Pe(r),Ne(r,22),Pe(r),Ne(r,16))}function _(e,t){for(var n=0;n<e.length;n++)n>0&&(24!==t&&Pe(r),Ne(r,t),Pe(r)),c(e[n],24===t?0:64)}function u(e,t,n,o,s){if((32&e.flags||!me(e.name))&&a(e,r,i,793064,0,s),o>n){for(Ne(r,25),c(t[n],256),n++;o>n;)Ne(r,24),Pe(r),c(t[n],0),n++
Ne(r,27)}}function l(t,n){var a=t.typeArguments||kf
if(t.target!==sg||1&n)if(262144&t.target.flags)Ne(r,19),_(t.typeArguments.slice(0,lr(t)),24),Ne(r,20)
else{var i=t.target.outerTypeParameters,o=0
if(i)for(var s=i.length;s>o;){var l=o,d=or(i[o])
do o++
while(s>o&&or(i[o])===d)
e.rangeEquals(i,a,l,o)||(u(d,a,l,o,n),Ne(r,21))}var p=(t.target.typeParameters||kf).length
u(t.symbol,a,o,p,n)}else c(a[0],64),Ne(r,19),Ne(r,20)}function d(e,t){64&t&&Ne(r,17),524288&e.flags?_(Me(e.types),47):_(e.types,46),64&t&&Ne(r,18)}function p(t,n){function o(){var t=!!(8192&c.flags&&e.forEach(c.declarations,function(e){return 32&e.flags})),r=!!(16&c.flags)&&(c.parent||e.forEach(c.declarations,function(e){return 256===e.parent.kind||226===e.parent.kind}))
return t||r?!!(2&n)||e.contains(s,c):void 0}var c=t.symbol
if(c)if(928&c.flags)f(t,n)
else if(o())f(t,n)
else if(e.contains(s,c)){var _=Be(t)
_?a(_,r,i,793064,0,n):Ae(r,117)}else s||(s=[]),s.push(c),v(t,n),s.pop()
else v(t,n)}function f(e,t){Ae(r,101),Pe(r),a(e.symbol,r,i,107455,0,t)}function g(t,n){t&&(t.isReadonly&&(Ae(r,128),Pe(r)),Ne(r,19),r.writeParameter(t.declaration?e.declarationNameToString(t.declaration.parameters[0].name):"x"),Ne(r,54),Pe(r),Ae(r,n),Ne(r,20),Ne(r,54),Pe(r),c(t.type,0),Ne(r,23),r.writeLine())}function m(e){a_(e)&&(Ae(r,128),Pe(r)),a(e,r),536870912&e.flags&&Ne(r,53)}function h(e,t){if(64&t)return!0
if(256&t){var n=e.target&&32&t?e.target.typeParameters:e.typeParameters
return n&&0!==n.length}return!1}function v(e,t){var n=kn(e)
if(!n.properties.length&&!n.stringIndexInfo&&!n.numberIndexInfo){if(!n.callSignatures.length&&!n.constructSignatures.length)return Ne(r,15),void Ne(r,16)
if(1===n.callSignatures.length&&!n.constructSignatures.length){var a=h(n.callSignatures[0],t)
return a&&Ne(r,17),y(n.callSignatures[0],r,i,8|k,void 0,s),void(a&&Ne(r,18))}if(1===n.constructSignatures.length&&!n.callSignatures.length)return 64&t&&Ne(r,17),Ae(r,92),Pe(r),y(n.constructSignatures[0],r,i,8|k,void 0,s),void(64&t&&Ne(r,18))}var o=b
b=!0,Ne(r,15),r.writeLine(),r.increaseIndent()
for(var _=0,u=n.callSignatures;_<u.length;_++){var l=u[_]
y(l,r,i,k,void 0,s),Ne(r,23),r.writeLine()}for(var d=0,p=n.constructSignatures;d<p.length;d++){var l=p[d]
y(l,r,i,k,1,s),Ne(r,23),r.writeLine()}g(n.stringIndexInfo,132),g(n.numberIndexInfo,130)
for(var f=0,v=n.properties;f<v.length;f++){var x=v[f],D=bt(x)
if(8208&x.flags&&!bn(D).length)for(var C=Pn(D,0),S=0,T=C;S<T.length;S++){var l=T[S]
m(x),y(l,r,i,k,void 0,s),Ne(r,23),r.writeLine()}else m(x),Ne(r,54),Pe(r),c(D,0),Ne(r,23),r.writeLine()}r.decreaseIndent(),Ne(r,16),b=o}var k=16&o,b=!1
return c(t,o)}function o(e,t,n,r){var a=Ll(e);(32&a.flags||64&a.flags||524288&a.flags)&&l(Et(e),t,n,r)}function s(e,t,r,a,o){n(e.symbol,t)
var s=ir(e)
s&&(Pe(t),Ae(t,83),Pe(t),i(s,t,r,a,o))}function c(t,r,a,o,s){var c=t.valueDeclaration
e.isRestParameter(c)&&Ne(r,22),e.isBindingPattern(c.name)?_(c.name,r,a,o,s):n(t,r),zn(c)&&Ne(r,53),Ne(r,54),Pe(r),i(bt(t),r,a,o,s)}function _(e,t,n,r,a){if(167===e.kind)Ne(t,15),d(e.elements,t,function(e){return u(e,t,n,r,a)}),Ne(t,16)
else if(168===e.kind){Ne(t,19)
var i=e.elements
d(i,t,function(e){return u(e,t,n,r,a)}),i&&i.hasTrailingComma&&Ne(t,24),Ne(t,20)}}function u(t,r,a,i,o){193!==t.kind&&(e.Debug.assert(169===t.kind),t.propertyName&&(r.writeSymbol(e.getTextOfNode(t.propertyName),t.symbol),Ne(r,54),Pe(r)),e.isBindingPattern(t.name)?_(t.name,r,a,i,o):(t.dotDotDotToken&&Ne(r,22),n(t.symbol,r)))}function l(e,t,n,r,a){e&&e.length&&(Ne(t,25),d(e,t,function(e){return s(e,t,n,r,a)}),Ne(t,27))}function d(e,t,n){for(var r=0;r<e.length;r++)r>0&&(Ne(t,24),Pe(t)),n(e[r])}function p(e,t,n,r,a,o){if(e&&e.length){Ne(n,25)
for(var s=256,c=0;c<e.length;c++)c>0&&(Ne(n,24),Pe(n),s=0),i(t(e[c]),n,r,s)
Ne(n,27)}}function f(e,t,n,r,a,i){Ne(n,17),e&&c(e,n,r,a,i)
for(var o=0;o<t.length;o++)(o>0||e)&&(Ne(n,24),Pe(n)),c(t[o],n,r,a,i)
Ne(n,18)}function g(t,n,r,a,o){e.isIdentifierTypePredicate(t)?n.writeParameter(t.parameterName):Ae(n,97),Pe(n),Ae(n,124),Pe(n),i(t.type,n,r,a,o)}function m(e,t,n,r,a){if(8&r?(Pe(t),Ne(t,34)):Ne(t,54),Pe(t),e.typePredicate)g(e.typePredicate,t,n,r,a)
else{var o=Gn(e)
i(o,t,n,r,a)}}function y(e,t,n,r,a,i){1===a&&(Ae(t,92),Pe(t)),e.target&&32&r?p(e.target.typeParameters,e.mapper,t,n):l(e.typeParameters,t,n,r,i),f(e.thisParameter,e.parameters,t,n,r,i),m(e,t,n,r,i)}return cm||(cm={buildSymbolDisplay:a,buildTypeDisplay:i,buildTypeParameterDisplay:s,buildTypePredicateDisplay:g,buildParameterDisplay:c,buildDisplayForParametersAndDelimiters:f,buildDisplayForTypeParametersAndDelimiters:l,buildTypeParameterDisplayFromSymbol:o,buildSignatureDisplay:y,buildReturnTypeDisplay:m})}function ze(t){function n(){switch(t.kind){case 169:return ze(t.parent.parent)
case 218:if(e.isBindingPattern(t.name)&&!t.name.elements.length)return!1
case 225:case 221:case 222:case 223:case 220:case 224:case 229:if(e.isExternalModuleAugmentation(t))return!0
var n=He(t)
return 1&e.getCombinedNodeFlags(t)||229!==t.kind&&256!==n.kind&&e.isInAmbientContext(n)?ze(n):v(n)
case 145:case 144:case 149:case 150:case 147:case 146:if(24&t.flags)return!1
case 148:case 152:case 151:case 153:case 142:case 226:case 156:case 157:case 159:case 155:case 160:case 161:case 162:case 163:case 164:return ze(t.parent)
case 231:case 232:case 234:return!1
case 141:case 256:return!0
case 235:return!1
default:return!1}}if(t){var r=h(t)
return void 0===r.isVisible&&(r.isVisible=!!n()),r.isVisible}return!1}function je(t){function n(t){e.forEach(t,function(t){h(t).isVisible=!0
var r=A(t)||t
if(e.contains(i,r)||i.push(r),e.isInternalModuleImportEqualsDeclaration(t)){var a=t.moduleReference,o=Yl(a),s=D(t,o.text,901119,void 0,void 0)
s&&n(s.declarations)}})}var r
if(t.parent&&235===t.parent.kind)r=D(t.parent,t.text,9289727,e.Diagnostics.Cannot_find_name_0,t)
else if(238===t.parent.kind){var a=t.parent
r=a.parent.parent.moduleSpecifier?L(a.parent.parent,a):X(a.propertyName||a.name,9289727)}var i=[]
return r&&n(r.declarations),i}function Ue(e,t){var n=qe(e,t)
if(n>=0){for(var r=Vg.length,a=n;r>a;a++)Hg[a]=!1
return!1}return Vg.push(e),Hg.push(!0),Gg.push(t),!0}function qe(e,t){for(var n=Vg.length-1;n>=0;n--){if(We(Vg[n],Gg[n]))return-1
if(Vg[n]===e&&Gg[n]===t)return n}return-1}function We(t,n){return 0===n?y(t).type:2===n?y(t).declaredType:1===n?(e.Debug.assert(!!(32768&t.flags)),t.resolvedBaseConstructorType):3===n?t.resolvedReturnType:void e.Debug.fail("Unhandled TypeSystemPropertyName "+n)}function Ve(){return Vg.pop(),Gg.pop(),Hg.pop()}function He(t){for(t=e.getRootDeclaration(t);t;)switch(t.kind){case 218:case 219:case 234:case 233:case 232:case 231:t=t.parent
break
default:return t.parent}}function Ge(t){var n=Ht(ce(t))
return n.typeParameters?_r(n,e.map(n.typeParameters,function(e){return Jf})):n}function Xe(e,t){var n=An(e,t)
return n?bt(n):void 0}function Qe(e){return e&&0!==(1&e.flags)}function Ye(e){return e&&0!==(8192&e.flags)}function $e(e){var t=se(e)
return t&&y(t).type||it(e,!1)}function Ze(t){switch(t.kind){case 69:return t.text
case 9:case 8:return t.text
case 140:if(e.isStringOrNumericLiteral(t.expression.kind))return t.expression.text}}function et(t){return 140===t.kind&&!e.isStringOrNumericLiteral(t.expression.kind)}function tt(t){var n=t.parent,r=$e(n.parent)
if(r===Kf)return Kf
if(!r||Qe(r))return t.initializer?B_(t.initializer):r
var a
if(167===n.kind){var i=t.propertyName||t.name
if(et(i))return Jf
t.initializer&&us(t.initializer)
var o=Ze(i)
if(a=Xe(r,o)||Cs(o)&&In(r,1)||In(r,0),!a)return c(i,e.Diagnostics.Type_0_has_no_property_1_and_no_string_index_signature,Fe(r),e.declarationNameToString(i)),Kf}else{var s=pl(r,n,!1)
if(t.dotDotDotToken)a=Nr(s)
else{var _=""+e.indexOf(n.elements,t)
if(a=ii(r)?Xe(r,_):s,!a)return _i(r)?c(t,e.Diagnostics.Tuple_type_0_with_length_1_cannot_be_assigned_to_tuple_with_length_2,Fe(r),lr(r),n.elements.length):c(t,e.Diagnostics.Type_0_has_no_property_1,Fe(r),_),Kf}}return!Ef||!t.initializer||2048&li(B_(t.initializer))||(a=$i(a,131072)),t.initializer?Ur([a,B_(t.initializer)],!0):a}function nt(e){var t=rt(e)
return t?aa(t):void 0}function rt(t){var n=e.getJSDocTypeTag(t)
if(n&&n.typeExpression)return n.typeExpression.type
if(218===t.kind&&219===t.parent.kind&&200===t.parent.parent.kind){var r=e.getJSDocTypeTag(t.parent.parent)
if(r&&r.typeExpression)return r.typeExpression.type}else if(142===t.kind){var a=e.getCorrespondingJSDocParameterTag(t)
if(a&&a.typeExpression)return a.typeExpression.type}}function at(e,t){return Ef&&t?di(e,2048):e}function it(t,n){if(134217728&t.flags){var r=nt(t)
if(r&&r!==Kf)return r}if(207===t.parent.parent.kind)return Wf
if(208===t.parent.parent.kind)return dl(t.parent.parent.expression)||Jf
if(e.isBindingPattern(t.parent))return tt(t)
if(t.type)return at(aa(t.type),t.questionToken&&n)
if(142===t.kind){var a=t.parent
if(150===a.kind&&!e.hasDynamicName(a)){var i=e.getDeclarationOfKind(t.parent.symbol,149)
if(i){var o=Un(i),s=Up(a)
return s&&t===s?(e.Debug.assert(!s.type),bt(o.thisParameter)):Gn(o)}}var r=void 0
if("this"===t.symbol.name){var s=qo(a)
r=s?bt(s):void 0}else r=Wo(t)
if(r)return at(r,t.questionToken&&n)}return t.initializer?at(B_(t.initializer),t.questionToken&&n):254===t.kind?Oo(t.name):e.isBindingPattern(t.name)?_t(t.name,!1,!0):void 0}function ot(t,n,r){return t.initializer?B_(t.initializer):e.isBindingPattern(t.name)?_t(t.name,n,r):(r&&xf.noImplicitAny&&!lt(t)&&Di(t,Jf),Jf)}function st(t,n,r){var a=e.createMap(),i=!1
e.forEach(t.elements,function(e){var t=e.propertyName||e.name
if(et(t))return void(i=!0)
var o=Ze(t),s=67108868|(e.initializer?536870912:0),c=_(s,o)
c.type=ot(e,n,r),c.bindingElement=e,a[c.name]=c})
var o=ve(void 0,a,kf,kf,void 0,void 0)
return n&&(o.pattern=t),i&&(o.flags|=536870912),o}function ct(t,n,r){var a=t.elements
if(0===a.length||a[a.length-1].dotDotDotToken)return Df>=2?wr(Jf):pg
var i=e.map(a,function(e){return 193===e.kind?Jf:ot(e,n,r)}),o=Fr(i)
return n&&(o=ur(o),o.pattern=t),o}function _t(e,t,n){return 167===e.kind?st(e,t,n):ct(e,t,n)}function ut(e,t){var n=it(e,!0)
return n?(t&&Ci(e,n),253===e.kind?n:bi(n)):(n=e.dotDotDotToken?pg:Jf,t&&xf.noImplicitAny&&(lt(e)||Di(e,n)),n)}function lt(t){var n=e.getRootDeclaration(t),r=142===n.kind?n.parent:n
return gu(r)}function dt(t){var n=y(t)
if(!n.type){if(134217728&t.flags)return n.type=Ge(t)
var r=t.valueDeclaration
if(252===r.parent.kind)return n.type=Jf
if(235===r.kind)return n.type=j_(r.expression)
if(134217728&r.flags&&280===r.kind&&r.typeExpression)return n.type=aa(r.typeExpression.type)
if(!Ue(t,0))return Kf
var a=void 0
if(187===r.kind||172===r.kind&&187===r.parent.kind){if(134217728&r.flags){var i=e.getJSDocTypeTag(r.parent)
if(i&&i.typeExpression)return n.type=aa(i.typeExpression.type)}var o=e.map(t.declarations,function(e){return B_(187===e.kind?e.right:e.parent.right)})
a=Ur(o,!0)}else a=ut(r,!0)
Ve()||(t.valueDeclaration.type?(a=Kf,c(t.valueDeclaration,e.Diagnostics._0_is_referenced_directly_or_indirectly_in_its_own_type_annotation,Oe(t))):(a=Jf,xf.noImplicitAny&&c(t.valueDeclaration,e.Diagnostics._0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer,Oe(t)))),n.type=a}return n.type}function pt(t){if(t){if(149===t.kind)return t.type&&aa(t.type)
var n=e.getSetAccessorTypeAnnotationNode(t)
return n&&aa(n)}}function ft(e){var t=Up(e)
return t&&t.symbol}function gt(e){return Hn(Un(e))}function mt(t){var n=y(t)
if(!n.type){var r=e.getDeclarationOfKind(t,149),a=e.getDeclarationOfKind(t,150)
if(r&&134217728&r.flags){var i=nt(r)
if(i)return n.type=i}if(!Ue(t,0))return Kf
var o=void 0,s=pt(r)
if(s)o=s
else{var _=pt(a)
_?o=_:r&&r.body?o=Xc(r):(xf.noImplicitAny&&c(a,e.Diagnostics.Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_type_annotation,Oe(t)),o=Jf)}if(!Ve()&&(o=Jf,xf.noImplicitAny)){var u=e.getDeclarationOfKind(t,149)
c(u,e.Diagnostics._0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions,Oe(t))}n.type=o}return n.type}function yt(t){var n=y(t)
if(!n.type)if(225===t.valueDeclaration.kind&&e.isShorthandAmbientModuleSymbol(t))n.type=Jf
else{var r=ge(2097152,t)
n.type=Ef&&536870912&t.flags?di(r,2048):r}return n.type}function ht(e){var t=y(e)
return t.type||(t.type=Ut(ce(e))),t.type}function vt(e){var t=y(e)
if(!t.type){var n=q(e)
t.type=107455&n.flags?bt(n):Kf}return t.type}function kt(e){var t=y(e)
return t.type||(t.type=ka(bt(t.target),t.mapper)),t.type}function bt(e){return 16777216&e.flags?kt(e):7&e.flags?dt(e):9136&e.flags?yt(e):8&e.flags?ht(e):98304&e.flags?mt(e):8388608&e.flags?vt(e):Kf}function xt(e){return 131072&e.flags?e.target:e}function Dt(t,n){function r(t){var a=xt(t)
return a===n||e.forEach(Ft(a),r)}return r(t)}function Ct(t,n){for(var r=0,a=n;r<a.length;r++){var i=a[r],o=Wt(se(i))
t?e.contains(t,o)||t.push(o):t=[o]}return t}function St(e,t){for(;;){if(t=t.parent,!t)return e
if(221===t.kind||192===t.kind||220===t.kind||179===t.kind||147===t.kind||180===t.kind){var n=t.typeParameters
if(n)return Ct(St(e,t),n)}}}function Tt(t){var n=32&t.flags?t.valueDeclaration:e.getDeclarationOfKind(t,222)
return St(void 0,n)}function Et(e){for(var t,n=0,r=e.declarations;n<r.length;n++){var a=r[n]
if(222===a.kind||221===a.kind||192===a.kind||223===a.kind){var i=a
i.typeParameters&&(t=Ct(t,i.typeParameters))}}return t}function wt(t){return e.concatenate(Tt(t),Et(t))}function At(e){return 2588672&e.flags&&Pn(e,1).length>0}function Nt(t){return e.getClassExtendsHeritageClauseElement(t.symbol.valueDeclaration)}function Pt(t,n){var r=n?n.length:0
return e.filter(Pn(t,1),function(e){return(e.typeParameters?e.typeParameters.length:0)===r})}function Ot(t,n){var r=Pt(t,n)
if(n){var a=e.map(n,aa)
r=e.map(r,function(e){return Qn(e,a)})}return r}function Rt(t){if(!t.resolvedBaseConstructorType){var n=Nt(t)
if(!n)return t.resolvedBaseConstructorType=zf
if(!Ue(t,1))return Kf
var r=j_(n.expression)
if(2588672&r.flags&&kn(r),!Ve())return c(t.symbol.valueDeclaration,e.Diagnostics._0_is_referenced_directly_or_indirectly_in_its_own_base_expression,Oe(t.symbol)),t.resolvedBaseConstructorType=Kf
if(r!==Kf&&r!==qf&&!At(r))return c(n.expression,e.Diagnostics.Type_0_is_not_a_constructor_function_type,Fe(r)),t.resolvedBaseConstructorType=Kf
t.resolvedBaseConstructorType=r}return t.resolvedBaseConstructorType}function Ft(t){return t.resolvedBaseTypes||(262144&t.flags?t.resolvedBaseTypes=[Nr(Ur(t.typeParameters))]:96&t.symbol.flags?(32&t.symbol.flags&&It(t),64&t.symbol.flags&&Lt(t)):e.Debug.fail("type must be class or interface")),t.resolvedBaseTypes}function It(t){t.resolvedBaseTypes=t.resolvedBaseTypes||kf
var n=Rt(t)
if(2588672&n.flags){var r,a=Nt(t),i=n&&n.symbol?Ht(n.symbol):void 0
if(n.symbol&&32&n.symbol.flags&&Mt(i))r=dr(a,n.symbol)
else{var o=Ot(n,a.typeArguments)
if(!o.length)return void c(a.expression,e.Diagnostics.No_base_constructor_has_the_specified_number_of_type_arguments)
r=Gn(o[0])}if(r!==Kf)return 98304&xt(r).flags?t===r||Dt(r,t)?void c(t.symbol.valueDeclaration,e.Diagnostics.Type_0_recursively_references_itself_as_a_base_type,Fe(t,void 0,1)):void(t.resolvedBaseTypes===kf?t.resolvedBaseTypes=[r]:t.resolvedBaseTypes.push(r)):void c(a.expression,e.Diagnostics.Base_constructor_return_type_0_is_not_a_class_or_interface_type,Fe(r))}}function Mt(e){var t=e.outerTypeParameters
if(t){var n=t.length-1,r=e.typeArguments
return t[n].symbol!==r[n].symbol}return!0}function Lt(t){t.resolvedBaseTypes=t.resolvedBaseTypes||kf
for(var n=0,r=t.symbol.declarations;n<r.length;n++){var a=r[n]
if(222===a.kind&&e.getInterfaceBaseTypeNodes(a))for(var i=0,o=e.getInterfaceBaseTypeNodes(a);i<o.length;i++){var s=o[i],_=aa(s)
_!==Kf&&(98304&xt(_).flags?t===_||Dt(_,t)?c(a,e.Diagnostics.Type_0_recursively_references_itself_as_a_base_type,Fe(t,void 0,1)):t.resolvedBaseTypes===kf?t.resolvedBaseTypes=[_]:t.resolvedBaseTypes.push(_):c(s,e.Diagnostics.An_interface_may_only_extend_a_class_or_another_interface))}}}function Bt(t){for(var n=0,r=t.declarations;n<r.length;n++){var a=r[n]
if(222===a.kind){if(16384&a.flags)return!1
var i=e.getInterfaceBaseTypeNodes(a)
if(i)for(var o=0,s=i;o<s.length;o++){var c=s[o]
if(e.isEntityNameExpression(c.expression)){var _=X(c.expression,793064,!0)
if(!_||!(64&_.flags)||Jt(_).thisType)return!1}}}}return!0}function Jt(t){var n=y(t)
if(!n.declaredType){var r=32&t.flags?32768:65536,a=n.declaredType=ge(r,t),i=Tt(t),o=Et(t);(i||o||32768===r||!Bt(t))&&(a.flags|=131072,a.typeParameters=e.concatenate(i,o),a.outerTypeParameters=i,a.localTypeParameters=o,a.instantiations=e.createMap(),a.instantiations[sr(a.typeParameters)]=a,a.target=a,a.typeArguments=a.typeParameters,a.thisType=de(268451840),a.thisType.symbol=t,a.thisType.constraint=a)}return n.declaredType}function Kt(t){var n=y(t)
if(!n.declaredType){if(!Ue(t,2))return Kf
var r=Et(t),a=e.getDeclarationOfKind(t,279),i=void 0
a?i=aa(a.jsDocTypeLiteral?a.jsDocTypeLiteral:a.typeExpression.type):(a=e.getDeclarationOfKind(t,223),i=aa(a.type,t,r)),Ve()?(n.typeParameters=r,r&&(n.instantiations=e.createMap(),n.instantiations[sr(n.typeParameters)]=i)):(i=Kf,c(a.name,e.Diagnostics.Type_alias_0_circularly_references_itself,Oe(t))),n.declaredType=i}return n.declaredType}function zt(t,n){var r=n.initializer
return r?8===r.kind||185===r.kind&&36===r.operator&&8===r.operand.kind||69===r.kind&&!!t.exports[r.text]:!e.isInAmbientContext(n)}function jt(e){for(var t=0,n=e.declarations;t<n.length;t++){var r=n[t]
if(224===r.kind)for(var a=0,i=r.members;a<i.length;a++){var o=i[a]
if(!zt(e,o))return!1}}return!0}function Ut(t){var n=y(t)
if(!n.declaredType){var r=n.declaredType=de(16)
if(r.symbol=t,jt(t)){for(var a=[],i=e.createMap(),o=0,s=r.symbol.declarations;o<s.length;o++){var c=s[o]
if(224===c.kind){Wl(c)
for(var _=0,u=c.members;_<u.length;_++){var l=u[_],d=se(l),p=Zd(l)
if(!i[p]){var f=i[p]=de(256)
f.symbol=d,f.baseType=r,f.text=""+p,a.push(f)}}}}r.memberTypes=i,a.length>1&&(r.flags|=524288,r.types=a,Rf[sr(a)]=r)}}return n.declaredType}function qt(e){var t=y(e)
if(!t.declaredType){var n=Ut(ce(e))
t.declaredType=524288&n.flags?n.memberTypes[Zd(e.valueDeclaration)]:n}return t.declaredType}function Wt(t){var n=y(t)
if(!n.declaredType){var r=de(16384)
r.symbol=t,e.getDeclarationOfKind(t,141).constraint||(r.constraint=Ig),n.declaredType=r}return n.declaredType}function Vt(e){var t=y(e)
return t.declaredType||(t.declaredType=Ht(q(e))),t.declaredType}function Ht(t){return e.Debug.assert(0===(16777216&t.flags)),96&t.flags?Jt(t):524288&t.flags?Kt(t):262144&t.flags?Wt(t):384&t.flags?Ut(t):8&t.flags?qt(t):8388608&t.flags?Vt(t):Kf}function Gt(e){if(e.typeArguments)for(var t=0,n=e.typeArguments;t<n.length;t++){var r=n[t]
if(!Xt(r))return!1}return!0}function Xt(e){switch(e.kind){case 117:case 132:case 130:case 120:case 133:case 103:case 135:case 93:case 127:case 166:return!0
case 160:return Xt(e.elementType)
case 155:return Gt(e)}return!1}function Qt(e){return e.type&&Xt(e.type)||!e.type&&!e.initializer}function Yt(e){if(!(148===e.kind||e.type&&Xt(e.type)))return!1
for(var t=0,n=e.parameters;t<n.length;t++){var r=n[t]
if(!Qt(r))return!1}return!0}function $t(e){if(e.declarations&&1===e.declarations.length){var t=e.declarations[0]
if(t)switch(t.kind){case 145:case 144:return Qt(t)
case 147:case 146:case 148:return Yt(t)}}return!1}function Zt(t){for(var n=e.createMap(),r=0,a=t;r<a.length;r++){var i=a[r]
n[i.name]=i}return n}function en(t,n,r){for(var a=e.createMap(),i=0,o=t;i<o.length;i++){var s=o[i]
a[s.name]=r&&$t(s)?s:ya(s,n)}return a}function tn(e,t){for(var n=0,r=t;n<r.length;n++){var a=r[n]
e[a.name]||(e[a.name]=a)}}function nn(e){if(!e.declaredProperties){var t=e.symbol
e.declaredProperties=ye(t.members),e.declaredCallSignatures=Wn(t.members.__call),e.declaredConstructSignatures=Wn(t.members.__new),e.declaredStringIndexInfo=nr(t,0),e.declaredNumberIndexInfo=nr(t,1)}return e}function rn(t,n){return 131072&t.flags?_r(t.target,e.concatenate(t.typeArguments,[n||t.target.thisType])):t}function an(t,n,r,a){var i,o,s,c,_,u
e.rangeEquals(r,a,0,r.length)?(i=da,o=n.symbol?n.symbol.members:Zt(n.declaredProperties),s=n.declaredCallSignatures,c=n.declaredConstructSignatures,_=n.declaredStringIndexInfo,u=n.declaredNumberIndexInfo):(i=_a(r,a),o=en(n.declaredProperties,i,1===r.length),s=ia(n.declaredCallSignatures,i,ma),c=ia(n.declaredConstructSignatures,i,ma),_=ba(n.declaredStringIndexInfo,i),u=ba(n.declaredNumberIndexInfo,i))
var l=Ft(n)
if(l.length){n.symbol&&o===n.symbol.members&&(o=Zt(n.declaredProperties))
for(var d=e.lastOrUndefined(a),p=0,f=l;p<f.length;p++){var g=f[p],m=d?rn(ka(g,i),d):g
tn(o,bn(m)),s=e.concatenate(s,Pn(m,0)),c=e.concatenate(c,Pn(m,1)),_=_||Fn(m,0),u=u||Fn(m,1)}}he(t,o,s,c,_,u)}function on(e){an(e,nn(e),kf,kf)}function sn(t){var n=nn(t.target),r=e.concatenate(n.typeParameters,[n.thisType]),a=t.typeArguments&&t.typeArguments.length===r.length?t.typeArguments:e.concatenate(t.typeArguments,[t])
an(t,n,r,a)}function cn(e,t,n,r,a,i,o,s,c){var _=new yf(Pf)
return _.declaration=e,_.typeParameters=t,_.parameters=r,_.thisParameter=n,_.resolvedReturnType=a,_.typePredicate=i,_.minArgumentCount=o,_.hasRestParameter=s,_.hasLiteralTypes=c,_}function _n(e){return cn(e.declaration,e.typeParameters,e.thisParameter,e.parameters,e.resolvedReturnType,e.typePredicate,e.minArgumentCount,e.hasRestParameter,e.hasLiteralTypes)}function un(t){var n=Rt(t),r=Pn(n,1)
if(0===r.length)return[cn(void 0,t.localTypeParameters,void 0,kf,t,void 0,0,!1,!1)]
for(var a=Nt(t),i=e.map(a.typeArguments,aa),o=i?i.length:0,s=[],c=0,_=r;c<_.length;c++){var u=_[c],l=u.typeParameters?u.typeParameters.length:0
if(l===o){var d=l?Qn(u,i):_n(u)
d.typeParameters=t.localTypeParameters,d.resolvedReturnType=t,s.push(d)}}return s}function ln(e,t,n,r,a){for(var i=0,o=e;i<o.length;i++){var s=o[i]
if($a(s,t,n,r,a,Ea))return s}}function dn(t,n,r){if(n.typeParameters){if(r>0)return
for(var a=1;a<t.length;a++)if(!ln(t[a],n,!1,!1,!1))return
return[n]}for(var i=void 0,a=0;a<t.length;a++){var o=a===r?n:ln(t[a],n,!0,!0,!0)
if(!o)return
e.contains(i,o)||(i||(i=[])).push(o)}return i}function pn(t,n){for(var r=e.map(t,function(e){return Pn(e,n)}),a=void 0,i=0;i<r.length;i++)for(var o=0,s=r[i];o<s.length;o++){var c=s[o]
if(!a||!ln(a,c,!1,!0,!0)){var _=dn(r,c,i)
if(_){var u=c
if(_.length>1){if(u=_n(c),e.forEach(_,function(e){return e.thisParameter})){var l=Ur(e.map(_,function(e){return bt(e.thisParameter)||Jf}),!0)
u.thisParameter=mi(c.thisParameter,l)}u.resolvedReturnType=void 0,u.unionSignatures=_}(a||(a=[])).push(u)}}}return a||kf}function fn(e,t){for(var n=[],r=!1,a=0,i=e;a<i.length;a++){var o=i[a],s=Fn(o,t)
if(!s)return
n.push(s.type),r=r||s.isReadonly}return tr(Ur(n,!0),r)}function gn(e){var t=pn(e.types,0),n=pn(e.types,1),r=fn(e.types,0),a=fn(e.types,1)
he(e,bf,t,n,r,a)}function mn(e,t){return e?t?Gr([e,t]):e:t}function yn(e,t){return e?t?tr(Gr([e.type,t.type]),e.isReadonly&&t.isReadonly):e:t}function hn(t){for(var n=kf,r=kf,a=void 0,i=void 0,o=0,s=t.types;o<s.length;o++){var c=s[o]
n=e.concatenate(n,Pn(c,0)),r=e.concatenate(r,Pn(c,1)),a=yn(a,Fn(c,0)),i=yn(i,Fn(c,1))}he(t,bf,n,r,a,i)}function vn(e){var t=e.symbol
if(e.target){var n=en(bn(e.target),e.mapper,!1),r=ia(Pn(e.target,0),e.mapper,ma),a=ia(Pn(e.target,1),e.mapper,ma),i=ba(Fn(e.target,0),e.mapper),o=ba(Fn(e.target,1),e.mapper)
he(e,n,r,a,i,o)}else if(2048&t.flags){var n=t.members,r=Wn(n.__call),a=Wn(n.__new),i=nr(t,0),o=nr(t,1)
he(e,n,r,a,i,o)}else{var n=bf,a=kf
if(1952&t.flags&&(n=ne(t)),32&t.flags){var s=Jt(t)
a=Wn(t.members.__constructor),a.length||(a=un(s))
var c=Rt(s)
2588672&c.flags&&(n=Zt(ye(n)),tn(n,bn(c)))}var o=384&t.flags?Jg:void 0
he(e,n,kf,a,void 0,o),8208&t.flags&&(e.callSignatures=Wn(t))}}function kn(e){return e.members||(131072&e.flags?sn(e):98304&e.flags?on(e):2097152&e.flags?vn(e):524288&e.flags?gn(e):1048576&e.flags&&hn(e)),e}function bn(e){return 2588672&e.flags?kn(e).properties:kf}function xn(e,t){if(2588672&e.flags){var n=kn(e),r=n.members[t]
if(r&&ue(r))return r}}function Dn(e){for(var t=0,n=e.types;t<n.length;t++){for(var r=n[t],a=0,i=Cn(r);a<i.length;a++){var o=i[a]
wn(e,o.name)}if(524288&e.flags)break}return e.resolvedProperties?Jn(e.resolvedProperties):kf}function Cn(e){return e=Tn(e),1572864&e.flags?Dn(e):bn(e)}function Sn(e){if(!e.resolvedApparentType){for(var t=ir(e);t&&16384&t.flags;)t=ir(t)
e.resolvedApparentType=rn(t||Zf,e)}return e.resolvedApparentType}function Tn(e){return 16384&e.flags&&(e=Sn(e)),34&e.flags?e=_g:340&e.flags?e=ug:136&e.flags?e=lg:512&e.flags&&(e=mg()),e}function En(t,n){for(var r,a=t.types,i=1048576&t.flags?536870912:0,o=!1,s=0,c=a;s<c.length;s++){var u=c[s],l=Tn(u)
if(l!==Kf){var d=An(l,n)
if(!d||24&Hs(d)){if(524288&t.flags)return}else i&=d.flags,r?e.contains(r,d)||r.push(d):r=[d],a_(d)&&(o=!0)}}if(r){if(1===r.length)return r[0]
for(var p=[],f=[],g=void 0,m=!0,y=0,h=r;y<h.length;y++){var d=h[y]
d.declarations&&e.addRange(f,d.declarations)
var l=bt(d)
g?l!==g&&(m=!1):g=l,p.push(bt(d))}var v=_(335544324|i,n)
return v.containingType=t,v.hasCommonType=m,v.declarations=f,v.isReadonly=o,v.type=524288&t.flags?Ur(p):Gr(p),v}}function wn(t,n){var r=t.resolvedProperties||(t.resolvedProperties=e.createMap()),a=r[n]
return a||(a=En(t,n),a&&(r[n]=a)),a}function An(e,t){if(e=Tn(e),2588672&e.flags){var n=kn(e),r=n.members[t]
if(r&&ue(r))return r
if(n===tg||n.callSignatures.length||n.constructSignatures.length){var a=xn(og,t)
if(a)return a}return xn(ig,t)}return 1572864&e.flags?wn(e,t):void 0}function Nn(e,t){if(4161536&e.flags){var n=kn(e)
return 0===t?n.callSignatures:n.constructSignatures}return kf}function Pn(e,t){return Nn(Tn(e),t)}function On(e,t){if(4161536&e.flags){var n=kn(e)
return 0===t?n.stringIndexInfo:n.numberIndexInfo}}function Rn(e,t){var n=On(e,t)
return n&&n.type}function Fn(e,t){return On(Tn(e),t)}function In(e,t){return Rn(Tn(e),t)}function Mn(e,t){if(gi(e)){for(var n=[],r=0,a=Cn(e);r<a.length;r++){var i=a[r];(0===t||Cs(i.name))&&n.push(bt(i))}if(n.length)return Ur(n,!0)}}function Ln(t){if(134217728&t.flags){var n=e.getJSDocTemplateTag(t)
if(n)return Bn(n.typeParameters)}}function Bn(t){var n=[]
return e.forEach(t,function(t){var r=Wt(t.symbol)
e.contains(n,r)||n.push(r)}),n}function Jn(e){var t=[]
for(var n in e)me(n)||t.push(e[n])
return t}function Kn(t){if(134217728&t.flags){if(t.type&&268===t.type.kind)return!0
var n=e.getCorrespondingJSDocParameterTag(t)
if(n){if(n.isBracketed)return!0
if(n.typeExpression)return 268===n.typeExpression.type.kind}}}function zn(t){if(e.hasQuestionToken(t)||Kn(t))return!0
if(t.initializer){var n=t.parent,r=Un(n),a=e.indexOf(n.parameters,t)
return e.Debug.assert(a>=0),a>=r.minArgumentCount}return!1}function jn(e){if(69===e.parameterName.kind){var t=e.parameterName
return{kind:1,parameterName:t?t.text:void 0,parameterIndex:t?H_(e.parent.parameters,t):void 0,type:aa(e.type)}}return{kind:0,type:aa(e.type)}}function Un(t){var n=h(t)
if(!n.resolvedSignature){for(var r=[],a=!1,i=-1,o=void 0,s=void 0,c=e.isJSDocConstructSignature(t),_=c?1:0,u=t.parameters.length;u>_;_++){var l=t.parameters[_],d=l.symbol
if(d&&4&d.flags&&!e.isBindingPattern(l.name)){var p=D(l,d.name,107455,void 0,void 0)
d=p}0===_&&"this"===d.name?(s=!0,o=l.symbol):r.push(d),l.type&&166===l.type.kind&&(a=!0),l.initializer||l.questionToken||l.dotDotDotToken||Kn(l)?0>i&&(i=_-(s?1:0)):i=-1}if(!(149!==t.kind&&150!==t.kind||e.hasDynamicName(t)||s&&o)){var f=149===t.kind?150:149,g=e.getDeclarationOfKind(t.symbol,f)
g&&(o=ft(g))}0>i&&(i=t.parameters.length-(s?1:0)),c&&i--,!o&&e.isObjectLiteralMethod(t)&&(o=qo(t))
var m=148===t.kind?Jt(oe(t.parent.symbol)):void 0,y=m?m.localTypeParameters:t.typeParameters?Bn(t.typeParameters):Ln(t),v=qn(t,i,c,m),k=t.type&&154===t.type.kind?jn(t.type):void 0
n.resolvedSignature=cn(t,y,o,r,v,k,i,e.hasRestParameter(t),a)}return n.resolvedSignature}function qn(t,n,r,a){if(r)return aa(t.parameters[0].type)
if(a)return a
if(t.type)return aa(t.type)
if(134217728&t.flags){var i=Vc(t)
if(i&&i!==Kf)return i}if(149===t.kind&&!e.hasDynamicName(t)){var o=e.getDeclarationOfKind(t.symbol,150)
return pt(o)}return e.nodeIsMissing(t.body)?Jf:void 0}function Wn(e){if(!e)return kf
for(var t=[],n=0,r=e.declarations.length;r>n;n++){var a=e.declarations[n]
switch(a.kind){case 156:case 157:case 220:case 147:case 146:case 148:case 151:case 152:case 153:case 149:case 150:case 179:case 180:case 269:if(n>0&&a.body){var i=e.declarations[n-1]
if(a.parent===i.parent&&a.kind===i.kind&&a.pos===i.end)break}t.push(Un(a))}}return t}function Vn(e){var t=Q(e,e)
if(t){var n=$(t)
if(n)return bt(n)}return Jf}function Hn(e){return e.thisParameter?bt(e.thisParameter):void 0}function Gn(t){if(!t.resolvedReturnType){if(!Ue(t,3))return Kf
var n=void 0
if(n=t.target?ka(Gn(t.target),t.mapper):t.unionSignatures?Ur(e.map(t.unionSignatures,Gn),!0):Xc(t.declaration),!Ve()&&(n=Jf,xf.noImplicitAny)){var r=t.declaration
r.name?c(r.name,e.Diagnostics._0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions,e.declarationNameToString(r.name)):c(r,e.Diagnostics.Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions)}t.resolvedReturnType=n}return t.resolvedReturnType}function Xn(t){if(t.hasRestParameter){var n=bt(e.lastOrUndefined(t.parameters))
if(131072&n.flags&&n.target===sg)return n.typeArguments[0]}return Jf}function Qn(e,t){return ma(e,_a(e.typeParameters,t),!0)}function Yn(e){return e.typeParameters?(e.erasedSignatureCache||(e.erasedSignatureCache=ma(e,ua(e.typeParameters),!0)),e.erasedSignatureCache):e}function $n(e){if(!e.isolatedSignatureType){var t=148===e.declaration.kind||152===e.declaration.kind,n=ge(2097152)
n.members=bf,n.properties=kf,n.callSignatures=t?kf:[e],n.constructSignatures=t?[e]:kf,e.isolatedSignatureType=n}return e.isolatedSignatureType}function Zn(e){return e.members.__index}function er(e,t){var n=1===t?130:132,r=Zn(e)
if(r)for(var a=0,i=r.declarations;a<i.length;a++){var o=i[a],s=o
if(1===s.parameters.length){var c=s.parameters[0]
if(c&&c.type&&c.type.kind===n)return s}}}function tr(e,t,n){return{type:e,isReadonly:t,declaration:n}}function nr(e,t){var n=er(e,t)
return n?tr(n.type?aa(n.type):Jf,0!==(64&n.flags),n):void 0}function rr(t){return e.getDeclarationOfKind(t.symbol,141).constraint}function ar(t,n){for(var r;t&&!(268435456&t.flags)&&16384&t.flags&&!e.contains(r,t);){if(t===n)return!0;(r||(r=[])).push(t)
var a=rr(t)
t=a&&aa(a)}return!1}function ir(t){if(!t.constraint)if(t.target){var n=ir(t.target)
t.constraint=n?ka(n,t.mapper):Ig}else{var r=rr(t),a=aa(r)
ar(a,t)&&(c(r,e.Diagnostics.Type_parameter_0_has_a_circular_constraint,Fe(t)),a=Kf),t.constraint=a}return t.constraint===Ig?void 0:t.constraint}function or(t){return se(e.getDeclarationOfKind(t.symbol,141).parent)}function sr(e){var t=""
if(e)for(var n=e.length,r=0;n>r;){for(var a=e[r].id,i=1;n>r+i&&e[r+i].id===a+i;)i++
t.length&&(t+=","),t+=a,i>1&&(t+=":"+i),r+=i}return t}function cr(e,t){for(var n=0,r=0,a=e;r<a.length;r++){var i=a[r]
i.flags&t||(n|=i.flags)}return 234881024&n}function _r(e,t){var n=sr(t),r=e.instantiations[n]
if(!r){var a=t?cr(t,0):0,i=131072|a
r=e.instantiations[n]=ge(i,e.symbol),r.target=e,r.typeArguments=t}return r}function ur(e){var t=ge(e.flags,e.symbol)
return t.target=e.target,t.typeArguments=e.typeArguments,t}function lr(e){return e.target.typeParameters?e.target.typeParameters.length:0}function dr(t,n){var r=Ht(oe(n)),a=r.localTypeParameters
return a?t.typeArguments&&t.typeArguments.length===a.length?_r(r,e.concatenate(r.outerTypeParameters,e.map(t.typeArguments,aa))):(c(t,e.Diagnostics.Generic_type_0_requires_1_type_argument_s,Fe(r,void 0,1),a.length),Kf):t.typeArguments?(c(t,e.Diagnostics.Type_0_is_not_generic,Fe(r)),Kf):r}function pr(t,n){var r=Ht(n),a=y(n),i=a.typeParameters
if(i){if(!t.typeArguments||t.typeArguments.length!==i.length)return c(t,e.Diagnostics.Generic_type_0_requires_1_type_argument_s,Oe(n),i.length),Kf
var o=e.map(t.typeArguments,aa),s=sr(o)
return a.instantiations[s]||(a.instantiations[s]=ka(r,_a(i,o)))}return t.typeArguments?(c(t,e.Diagnostics.Type_0_is_not_generic,Oe(n)),Kf):r}function fr(t,n){return t.typeArguments?(c(t,e.Diagnostics.Type_0_is_not_generic,Oe(n)),Kf):Ht(n)}function gr(t){switch(t.kind){case 155:return t.typeName
case 267:return t.name
case 194:var n=t.expression
if(e.isEntityNameExpression(n))return n}}function mr(e,t){return t?X(t,793064)||Lf:Lf}function yr(e,t){return t===Lf?Kf:96&t.flags?dr(e,t):524288&t.flags?pr(e,t):107455&t.flags&&267===e.kind?bt(t):fr(e,t)}function hr(t){var n=h(t)
if(!n.resolvedType){var r=void 0,a=void 0
if(267===t.kind){var i=gr(t)
r=mr(t,i),a=yr(t,r)}else{var o=155===t.kind?t.typeName:e.isEntityNameExpression(t.expression)?t.expression:void 0
r=o&&X(o,793064)||Lf,a=r===Lf?Kf:96&r.flags?dr(t,r):524288&r.flags?pr(t,r):fr(t,r)}n.resolvedSymbol=r,n.resolvedType=a}return n.resolvedType}function vr(e){var t=h(e)
return t.resolvedType||(t.resolvedType=bi(j_(e.exprName))),t.resolvedType}function kr(t,n){function r(e){for(var t=e.declarations,n=0,r=t;n<r.length;n++){var a=r[n]
switch(a.kind){case 221:case 222:case 224:return a}}}if(!t)return n?eg:Zf
var a=Ht(t)
return 2588672&a.flags?(a.typeParameters?a.typeParameters.length:0)!==n?(c(r(t),e.Diagnostics.Global_type_0_must_have_1_type_parameter_s,t.name,n),n?eg:Zf):a:(c(r(t),e.Diagnostics.Global_type_0_must_be_a_class_or_interface_type,t.name),n?eg:Zf)}function br(t){return Dr(t,107455,e.Diagnostics.Cannot_find_global_value_0)}function xr(t){return Dr(t,793064,e.Diagnostics.Cannot_find_global_type_0)}function Dr(e,t,n){return D(void 0,e,t,n,e)}function Cr(e,t){return void 0===t&&(t=0),kr(xr(e),t)}function Sr(e,t){var n=Dr(e,1920,void 0),r=n&&k(n.exports,t,793064)
return r&&Ht(r)}function Tr(e){var t=Cg()
return t!==eg?_r(t,[e]):Zf}function Er(e,t){return e!==eg?_r(e,t):Zf}function wr(e){return Er(yg(),[e])}function Ar(e){return Er(vg(),[e])}function Nr(e){return Er(sg,[e])}function Pr(e){var t=h(e)
return t.resolvedType||(t.resolvedType=Nr(aa(e.elementType))),t.resolvedType}function Or(t){for(var n=[],r=[],a=0;t>a;a++){var i=de(16384)
n.push(i)
var o=_(67108868,""+a)
o.type=i,r.push(o)}var s=ge(393216)
return s.typeParameters=n,s.outerTypeParameters=void 0,s.localTypeParameters=n,s.instantiations=e.createMap(),s.instantiations[sr(s.typeParameters)]=s,s.target=s,s.typeArguments=s.typeParameters,s.thisType=de(268451840),s.thisType.constraint=s,s.declaredProperties=r,s.declaredCallSignatures=kf,s.declaredConstructSignatures=kf,s.declaredStringIndexInfo=void 0,s.declaredNumberIndexInfo=void 0,s}function Rr(e){return Of[e]||(Of[e]=Or(e))}function Fr(e){return _r(Rr(e.length),e)}function Ir(t){var n=h(t)
return n.resolvedType||(n.resolvedType=Fr(e.map(t.elementTypes,aa))),n.resolvedType}function Mr(e,t){for(var n=0,r=e.length-1,a=t.id;r>=n;){var i=n+(r-n>>1),o=e[i].id
if(o===a)return i
o>a?r=i-1:n=i+1}return~n}function Lr(e,t){return Mr(e,t)>=0}function Br(e,t){if(524288&t.flags)Jr(e,t.types)
else if(1&t.flags)e.containsAny=!0
else if(!Ef&&6144&t.flags)2048&t.flags&&(e.containsUndefined=!0),4096&t.flags&&(e.containsNull=!0),33554432&t.flags||(e.containsNonWideningType=!0)
else if(!(8192&t.flags)){var n=e.length,r=n&&t.id>e[n-1].id?~n:Mr(e,t)
0>r&&(2097152&t.flags&&t.symbol&&8208&t.symbol.flags&&Kr(e,t)||e.splice(~r,0,t))}}function Jr(e,t){for(var n=0,r=t;n<r.length;n++){var a=r[n]
Br(e,a)}}function Kr(e,t){for(var n=0,r=e;n<r.length;n++){var a=r[n]
if(Ta(a,t))return!0}return!1}function zr(e,t){for(var n=0,r=t.length;r>n;n++)if(e!==t[n]&&Aa(e,t[n]))return!0
return!1}function jr(e){for(var t=e.length;t>0;)t--,zr(e[t],e)&&e.splice(t,1)}function Ur(e,t,n,r){if(0===e.length)return $f
if(1===e.length)return e[0]
var a=[]
return Jr(a,e),a.containsAny?Jf:(t&&jr(a),0===a.length?a.containsNull?a.containsNonWideningType?Uf:qf:a.containsUndefined?a.containsNonWideningType?zf:jf:$f:qr(a,n,r))}function qr(e,t,n){if(0===e.length)return $f
if(1===e.length)return e[0]
var r=sr(e),a=Rf[r]
if(!a){var i=cr(e,6144)
a=Rf[r]=ge(524288|i),a.types=e,a.aliasSymbol=t,a.aliasTypeArguments=n}return a}function Wr(t,n,r){var a=h(t)
return a.resolvedType||(a.resolvedType=Ur(e.map(t.types,aa),!1,n,r)),a.resolvedType}function Vr(t,n){1048576&n.flags?Hr(t,n.types):1&n.flags?t.containsAny=!0:8192&n.flags||!Ef&&6144&n.flags||e.contains(t,n)||t.push(n)}function Hr(e,t){for(var n=0,r=t;n<r.length;n++){var a=r[n]
Vr(e,a)}}function Gr(e,t,n){if(0===e.length)return Zf
var r=[]
if(Hr(r,e),r.containsAny)return Jf
if(1===r.length)return r[0]
var a=sr(r),i=Ff[a]
if(!i){var o=cr(r,6144)
i=Ff[a]=ge(1048576|o),i.types=r,i.aliasSymbol=t,i.aliasTypeArguments=n}return i}function Xr(t,n,r){var a=h(t)
return a.resolvedType||(a.resolvedType=Gr(e.map(t.types,aa),n,r)),a.resolvedType}function Qr(e,t,n){var r=h(e)
if(!r.resolvedType){var a=ge(2097152,e.symbol)
a.aliasSymbol=t,a.aliasTypeArguments=n,r.resolvedType=a}return r.resolvedType}function Yr(e,t){var n=de(e)
return n.text=t,n}function $r(e,t){var n=32&e?If:Mf
return n[t]||(n[t]=Yr(e,t))}function Zr(e){var t=h(e)
return t.resolvedType||(t.resolvedType=j_(e.literal)),t.resolvedType}function ea(e){var t=h(e)
if(!t.resolvedType){var n=aa(e.type)
t.resolvedType=n?Nr(n):Kf}return t.resolvedType}function ta(t){var n=h(t)
if(!n.resolvedType){var r=e.map(t.types,aa)
n.resolvedType=Fr(r)}return n.resolvedType}function na(t){var n=e.getThisContainer(t,!1),r=n&&n.parent
return!r||!e.isClassLike(r)&&222!==r.kind||32&n.flags||148===n.kind&&!e.isNodeDescendentOf(t,n.body)?(c(t,e.Diagnostics.A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface),Kf):Jt(se(r)).thisType}function ra(e){var t=h(e)
return t.resolvedType||(t.resolvedType=na(e)),t.resolvedType}function aa(e,t,n){switch(e.kind){case 117:case 258:case 259:return Jf
case 132:return Wf
case 130:return Vf
case 120:return Xf
case 133:return Qf
case 103:return Yf
case 135:return zf
case 93:return Uf
case 127:return $f
case 283:return Uf
case 284:return zf
case 285:return $f
case 165:case 97:return ra(e)
case 166:return Zr(e)
case 282:return Zr(e.literal)
case 155:case 267:return hr(e)
case 154:return Xf
case 194:return hr(e)
case 158:return vr(e)
case 160:case 260:return Pr(e)
case 161:return Ir(e)
case 162:case 261:return Wr(e,t,n)
case 163:return Xr(e,t,n)
case 164:case 263:case 264:case 271:case 272:case 268:return aa(e.type)
case 156:case 157:case 159:case 281:case 269:case 265:return Qr(e,t,n)
case 69:case 139:var r=Ad(e)
return r&&Ht(r)
case 262:return ta(e)
case 270:return ea(e)
default:return Kf}}function ia(e,t,n){if(e&&e.length){for(var r=[],a=0,i=e;a<i.length;a++){var o=i[a]
r.push(n(o,t))}return r}return e}function oa(e,t){return function(n){return n===e?t:n}}function sa(e,t,n,r){return function(a){return a===e?t:a===n?r:a}}function ca(e,t){return function(n){for(var r=0;r<e.length;r++)if(n===e[r])return t?t[r]:Jf
return n}}function _a(e,t){var n=e.length,r=1==n?oa(e[0],t?t[0]:Jf):2==n?sa(e[0],t?t[0]:Jf,e[1],t?t[1]:Jf):ca(e,t)
return r.mappedTypes=e,r.targetTypes=t,r}function ua(e){return _a(e,void 0)}function la(e){if(!e.mapper){var t=function(t){for(var n=e.typeParameters,r=0;r<n.length;r++)if(t===n[r])return e.inferences[r].isFixed=!0,Fi(e,r)
return t}
t.mappedTypes=e.typeParameters,t.context=e,e.mapper=t}return e.mapper}function da(e){return e}function pa(e,t){var n=function(n){return ka(e(n),t)}
return n.mappedTypes=e.mappedTypes,n}function fa(e){var t=de(16384)
return t.symbol=e.symbol,t.target=e,t}function ga(t,n){return e.isIdentifierTypePredicate(t)?{kind:1,parameterName:t.parameterName,parameterIndex:t.parameterIndex,type:ka(t.type,n)}:{kind:0,type:ka(t.type,n)}}function ma(t,n,r){var a,i
if(t.typeParameters&&!r){a=e.map(t.typeParameters,fa),n=pa(_a(t.typeParameters,a),n)
for(var o=0,s=a;o<s.length;o++){var c=s[o]
c.mapper=n}}t.typePredicate&&(i=ga(t.typePredicate,n))
var _=cn(t.declaration,a,t.thisParameter&&ya(t.thisParameter,n),ia(t.parameters,n,ya),ka(t.resolvedReturnType,n),i,t.minArgumentCount,t.hasRestParameter,t.hasLiteralTypes)
return _.target=t,_.mapper=n,_}function ya(e,t){if(16777216&e.flags){var n=y(e)
e=n.target,t=pa(n.mapper,t)}var r=_(83886080|e.flags,e.name)
return r.declarations=e.declarations,r.parent=e.parent,r.target=e,r.mapper=t,e.valueDeclaration&&(r.valueDeclaration=e.valueDeclaration),r}function ha(e,t){if(t.instantiations){var n=t.instantiations[e.id]
if(n)return n}else t.instantiations=[]
var r=ge(6291456,e.symbol)
return r.target=e,r.mapper=t,r.aliasSymbol=e.aliasSymbol,r.aliasTypeArguments=t.targetTypes,t.instantiations[e.id]=r,r}function va(t,n){for(var r=n.mappedTypes,a=t.declarations[0].parent;a;){switch(a.kind){case 156:case 157:case 220:case 147:case 146:case 148:case 151:case 152:case 153:case 149:case 150:case 179:case 180:case 221:case 192:case 222:case 223:var i=a
if(i.typeParameters)for(var o=0,s=i.typeParameters;o<s.length;o++){var c=s[o]
if(e.contains(r,Wt(se(c))))return!0}if(e.isClassLike(a)||222===a.kind){var _=Jt(se(a)).thisType
if(_&&e.contains(r,_))return!0}break
case 225:case 256:return!1}a=a.parent}return!1}function ka(e,t){if(e&&t!==da){if(16384&e.flags)return t(e)
if(2097152&e.flags)return e.symbol&&14384&e.symbol.flags&&(4194304&e.flags||va(e.symbol,t))?ha(e,t):e
if(131072&e.flags)return _r(e.target,ia(e.typeArguments,t,ka))
if(524288&e.flags&&!(8190&e.flags))return Ur(ia(e.types,t,ka),!1,e.aliasSymbol,t.targetTypes)
if(1048576&e.flags)return Gr(ia(e.types,t,ka),e.aliasSymbol,t.targetTypes)}return e}function ba(e,t){return e&&tr(ka(e.type,t),e.isReadonly,e.declaration)}function xa(t){switch(e.Debug.assert(147!==t.kind||e.isObjectLiteralMethod(t)),t.kind){case 179:case 180:return Da(t)
case 171:return e.forEach(t.properties,xa)
case 170:return e.forEach(t.elements,xa)
case 188:return xa(t.whenTrue)||xa(t.whenFalse)
case 187:return 52===t.operatorToken.kind&&(xa(t.left)||xa(t.right))
case 253:return xa(t.initializer)
case 147:case 146:return Da(t)
case 178:return xa(t.expression)}return!1}function Da(t){var n=!e.forEach(t.parameters,function(e){return e.type}),r=180===t.kind&&!t.parameters.length
return!t.typeParameters&&n&&!r}function Ca(t){return(ps(t)||e.isObjectLiteralMethod(t))&&Da(t)}function Sa(e){if(2588672&e.flags){var t=kn(e)
if(t.constructSignatures.length){var n=ge(2097152,e.symbol)
n.members=t.members,n.properties=t.properties,n.callSignatures=kf,n.constructSignatures=kf,e=n}}return e}function Ta(e,t){return Wa(e,t,hm)}function Ea(e,t){return Wa(e,t,hm)?-1:0}function wa(e,t){return Wa(e,t,mm)?-1:0}function Aa(e,t){return Wa(e,t,gm)}function Na(e,t){return Wa(e,t,mm)}function Pa(e,t){return e===t||Aa(e,t)&&!Ta(e,t)}function Oa(e,t){return Wa(e,t,ym)}function Ra(e,t){return Oa(e,t)||Oa(t,e)}function Fa(e,t,n,r,a){return Va(e,t,gm,n,r,a)}function Ia(e,t,n,r,a){return Va(e,t,mm,n,r,a)}function Ma(e,t,n,r,a){return Va(e,t,ym,n,r,a)}function La(e,t,n){return 0!==Ba(e,t,n,!1,void 0,wa)}function Ba(t,n,r,a,i,o){if(t===n)return-1
if(!n.hasRestParameter&&t.minArgumentCount>n.parameters.length)return 0
t=Yn(t),n=Yn(n)
var s=-1,c=Hn(t)
if(c&&c!==Yf){var _=Hn(n)
if(_){var u=o(c,_,!1)||o(_,c,a)
if(!u)return a&&i(e.Diagnostics.The_this_types_of_each_signature_are_incompatible),0
s&=u}}for(var l=za(t),d=za(n),p=ja(t,l,n,d),f=t.parameters,g=n.parameters,m=0;p>m;m++){var y=l>m?zc(f[m]):Xn(t),h=d>m?zc(g[m]):Xn(n),u=o(y,h,!1)||o(h,y,a)
if(!u)return a&&i(e.Diagnostics.Types_of_parameters_0_and_1_are_incompatible,f[l>m?m:l].name,g[d>m?m:d].name),0
s&=u}if(!r){var v=Gn(n)
if(v===Yf)return s
var k=Gn(t)
if(n.typePredicate){if(t.typePredicate)s&=Ja(t.typePredicate,n.typePredicate,a,i,o)
else if(e.isIdentifierTypePredicate(n.typePredicate))return a&&i(e.Diagnostics.Signature_0_must_have_a_type_predicate,Re(t)),0}else s&=o(k,v,a)}return s}function Ja(t,n,r,a,i){if(t.kind!==n.kind)return r&&(a(e.Diagnostics.A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard),a(e.Diagnostics.Type_predicate_0_is_not_assignable_to_1,Ie(t),Ie(n))),0
if(1===t.kind){var o=t,s=n
if(o.parameterIndex!==s.parameterIndex)return r&&(a(e.Diagnostics.Parameter_0_is_not_in_the_same_position_as_parameter_1,o.parameterName,s.parameterName),a(e.Diagnostics.Type_predicate_0_is_not_assignable_to_1,Ie(t),Ie(n))),0}var c=i(t.type,n.type,r)
return 0===c&&r&&a(e.Diagnostics.Type_predicate_0_is_not_assignable_to_1,Ie(t),Ie(n)),c}function Ka(e,t){var n=Yn(e),r=Yn(t),a=Gn(n),i=Gn(r)
return i===Yf||Wa(i,a,mm)||Wa(a,i,mm)?La(n,r,!0):!1}function za(e){var t=e.parameters.length
return e.hasRestParameter?t-1:t}function ja(e,t,n,r){return e.hasRestParameter===n.hasRestParameter?e.hasRestParameter?Math.max(t,r)+1:Math.min(t,r):e.hasRestParameter?r:t}function Ua(t,n,r){if(t===n)return!0
var a=t.id+","+n.id
if(void 0!==vm[a])return vm[a]
if(!(t.symbol.name===n.symbol.name&&256&t.symbol.flags&&256&n.symbol.flags&&(524288&t.flags)===(524288&n.flags)))return vm[a]=!1
for(var i=bt(n.symbol),o=0,s=Cn(bt(t.symbol));o<s.length;o++){var c=s[o]
if(8&c.flags){var _=An(i,c.name)
if(!(_&&8&_.flags))return r&&r(e.Diagnostics.Property_0_is_missing_in_type_1,c.name,Fe(n,void 0,128)),vm[a]=!1}}return vm[a]=!0}function qa(e,t,n,r){if(8192&t.flags)return!1
if(1&t.flags||8192&e.flags)return!0
if(34&e.flags&&2&t.flags)return!0
if(340&e.flags&&4&t.flags)return!0
if(136&e.flags&&8&t.flags)return!0
if(256&e.flags&&16&t.flags&&e.baseType===t)return!0
if(16&e.flags&&16&t.flags&&Ua(e,t,r))return!0
if(2048&e.flags&&(!Ef||3072&t.flags))return!0
if(4096&e.flags&&(!Ef||4096&t.flags))return!0
if(n===mm||n===ym){if(1&e.flags)return!0
if(4&e.flags|64&e.flags&&272&t.flags)return!0
if(256&e.flags&&256&t.flags&&e.text===t.text&&Ua(e.baseType,t.baseType,r))return!0
if(256&e.flags&&16&t.flags&&Ua(t,e.baseType,r))return!0}return!1}function Wa(e,t,n){if(e===t||n!==hm&&qa(e,t,n))return!0
if(2588672&e.flags&&2588672&t.flags){var r=n!==hm||e.id<t.id?e.id+","+t.id:t.id+","+e.id,a=n[r]
if(void 0!==a)return 1===a}return 4177920&e.flags||4177920&t.flags?Va(e,t,n,void 0,void 0,void 0):!1}function Va(t,n,r,a,i,o){function s(t,n,r,i){e.Debug.assert(!!a),R=e.chainDiagnosticMessages(R,t,n,r,i)}function _(t,n,a){var i=Fe(n),o=Fe(a)
i===o&&(i=Fe(n,void 0,128),o=Fe(a,void 0,128)),t||(t=r===ym?e.Diagnostics.Type_0_is_not_comparable_to_type_1:e.Diagnostics.Type_0_is_not_assignable_to_type_1),s(t,i,o)}function u(t,n){var r=Fe(t),a=Fe(n);(_g===t&&Wf===n||ug===t&&Vf===n||lg===t&&Xf===n||mg()===t&&Qf===n)&&s(e.Diagnostics._0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible,a,r)}function l(e,t,n,a){var i
if(e===t)return-1
if(r===hm)return d(e,t)
if(qa(e,t,r,n?s:void 0))return-1
if(16777216&e.flags){if(g(e,t,n))return n&&_(a,e,t),0
1572864&t.flags&&(e=hi(e))}var o=R
if(524288&e.flags){if(i=r===ym?v(e,t,n&&!(8190&e.flags)):k(e,t,n&&!(8190&e.flags)))return i}else if(1048576&t.flags){if(i=h(e,t,n))return i}else{if(1048576&e.flags&&(i=v(e,t,!1)))return i
if(524288&t.flags&&(i=y(e,t,n&&!(8190&e.flags)&&!(8190&t.flags))))return i}if(16384&e.flags){var c=ir(e);(!c||1&c.flags)&&(c=Zf),c=rn(c,e)
var p=n&&c!==Zf
if(i=l(c,t,p))return R=o,i}else{if(131072&e.flags&&131072&t.flags&&e.target===t.target&&(i=b(e,t,n)))return i
var f=Tn(e)
if(3637248&f.flags&&2588672&t.flags){var m=n&&R===o&&!(8190&e.flags)
if(i=x(f,e,t,m))return R=o,i}}return n&&(2588672&e.flags&&8190&t.flags&&u(e,t),_(a,e,t)),0}function d(e,t){var n
return 2588672&e.flags&&2588672&t.flags?131072&e.flags&&131072&t.flags&&e.target===t.target&&(n=b(e,t,!1))?n:x(e,e,t,!1):(524288&e.flags&&524288&t.flags||1048576&e.flags&&1048576&t.flags)&&(n=m(e,t,!1))&&(n&=m(t,e,!1))?n:0}function p(e,t){if(2588672&e.flags){var n=kn(e)
if((r===mm||r===ym)&&(e===ig||f(n))||n.stringIndexInfo||n.numberIndexInfo&&Cs(t)||An(e,t))return!0}else if(1572864&e.flags)for(var a=0,i=e.types;a<i.length;a++){var o=i[a]
if(p(o,t))return!0}return!1}function f(e){return 0===e.properties.length&&0===e.callSignatures.length&&0===e.constructSignatures.length&&!e.stringIndexInfo&&!e.numberIndexInfo}function g(t,n,r){if(!(536870912&n.flags)&&f_(n,2588672))for(var i=0,o=bn(t);i<o.length;i++){var c=o[i]
if(!p(n,c.name))return r&&(e.Debug.assert(!!a),a=c.valueDeclaration,s(e.Diagnostics.Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1,Oe(c),Fe(n))),!0}return!1}function m(e,t,n){for(var r=-1,a=e.types,i=0,o=a;i<o.length;i++){var s=o[i],c=y(s,t,!1)
if(!c)return 0
r&=c}return r}function y(e,t,n){var r=t.types
if(524288&t.flags&&Lr(r,e))return-1
for(var a=r.length,i=0;a>i;i++){var o=l(e,r[i],n&&i===a-1)
if(o)return o}return 0}function h(e,t,n){for(var r=-1,a=t.types,i=0,o=a;i<o.length;i++){var s=o[i],c=l(e,s,n)
if(!c)return 0
r&=c}return r}function v(e,t,n){var r=e.types
if(524288&e.flags&&Lr(r,t))return-1
for(var a=r.length,i=0;a>i;i++){var o=l(r[i],t,n&&i===a-1)
if(o)return o}return 0}function k(e,t,n){for(var r=-1,a=e.types,i=0,o=a;i<o.length;i++){var s=o[i],c=l(s,t,n)
if(!c)return 0
r&=c}return r}function b(e,t,n){var a=e.typeArguments||kf,i=t.typeArguments||kf
if(a.length!==i.length&&r===hm)return 0
for(var o=a.length<=i.length?a.length:i.length,s=-1,c=0;o>c;c++){var _=l(a[c],i[c],n)
if(!_)return 0
s&=_}return s}function x(t,n,a,i){if(J)return 0
var o=r!==hm||t.id<a.id?t.id+","+a.id:a.id+","+t.id,s=r[o]
if(void 0!==s){if(!i||2!==s)return 1===s?-1:0
r[o]=3}if(B>0){for(var c=0;B>c;c++)if(M[c][o])return 1
if(100===B)return J=!0,0}else F=[],I=[],M=[],L=0
F[B]=t,I[B]=a,M[B]=e.createMap(),M[B][o]=1,B++
var _=L
1&L||!Ga(t,F,B)||(L|=1),2&L||!Ga(a,I,B)||(L|=2)
var u
if(3===L?u=1:(u=D(t,a,i),u&&(u&=S(t,a,0,i),u&&(u&=S(t,a,1,i),u&&(u&=N(t,n,a,0,i),u&&(u&=N(t,n,a,1,i)))))),L=_,B--,u){var l=M[B],d=-1===u||0===B?r:M[B-1]
e.copyProperties(l,d)}else r[o]=i?3:2
return u}function D(t,n,a){if(r===hm)return C(t,n)
for(var i=-1,o=bn(n),c=r===gm&&!(8388608&t.flags),_=0,u=o;_<u.length;_++){var d=u[_],p=An(t,d.name)
if(p!==d)if(p){if(!(134217728&d.flags)){var f=Hs(p),g=Hs(d)
if(8&f||8&g){if(p.valueDeclaration!==d.valueDeclaration)return a&&(8&f&&8&g?s(e.Diagnostics.Types_have_separate_declarations_of_a_private_property_0,Oe(d)):s(e.Diagnostics.Property_0_is_private_in_type_1_but_not_in_type_2,Oe(d),Fe(8&f?t:n),Fe(8&f?n:t))),0}else if(16&g){var m=p.parent&&32&p.parent.flags,y=m?Ht(ce(p)):void 0,h=Ht(ce(d))
if(!y||!Dt(y,h))return a&&s(e.Diagnostics.Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2,Oe(d),Fe(y||t),Fe(h)),0}else if(16&f)return a&&s(e.Diagnostics.Property_0_is_protected_in_type_1_but_public_in_type_2,Oe(d),Fe(t),Fe(n)),0
var v=l(bt(p),bt(d),a)
if(!v)return a&&s(e.Diagnostics.Types_of_property_0_are_incompatible,Oe(d)),0
if(i&=v,536870912&p.flags&&!(536870912&d.flags))return a&&s(e.Diagnostics.Property_0_is_optional_in_type_1_but_required_in_type_2,Oe(d),Fe(t),Fe(n)),0}}else if(!(536870912&d.flags)||c)return a&&s(e.Diagnostics.Property_0_is_missing_in_type_1,Oe(d),Fe(t)),0}return i}function C(e,t){if(!(2588672&e.flags&&2588672&t.flags))return 0
var n=bn(e),r=bn(t)
if(n.length!==r.length)return 0
for(var a=-1,i=0,o=n;i<o.length;i++){var s=o[i],c=xn(t,s.name)
if(!c)return 0
var _=Qa(s,c,l)
if(!_)return 0
a&=_}return a}function S(t,n,a,i){if(r===hm)return E(t,n,a)
if(n===tg||t===tg)return-1
var o=Pn(t,a),c=Pn(n,a)
if(1===a&&o.length&&c.length){if(Ha(t)&&!Ha(n))return i&&s(e.Diagnostics.Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type),0
if(!O(o[0],c[0],i))return 0}var _=-1,u=R
e:for(var l=0,d=c;l<d.length;l++){for(var p=d[l],f=i,g=0,m=o;g<m.length;g++){var y=m[g],h=T(y,p,f)
if(h){_&=h,R=u
continue e}f=!1}return f&&s(e.Diagnostics.Type_0_provides_no_match_for_the_signature_1,Fe(t),Re(p,void 0,void 0,a)),0}return _}function T(e,t,n){return Ba(e,t,!1,n,s,l)}function E(e,t,n){var r=Pn(e,n),a=Pn(t,n)
if(r.length!==a.length)return 0
for(var i=-1,o=0,s=r.length;s>o;o++){var c=$a(r[o],a[o],!1,!1,!1,l)
if(!c)return 0
i&=c}return i}function w(t,n,r,a){for(var i=-1,o=0,c=bn(t);o<c.length;o++){var _=c[o]
if(0===r||Cs(_.name)){var u=l(bt(_),n,a)
if(!u)return a&&s(e.Diagnostics.Property_0_is_incompatible_with_index_signature,Oe(_)),0
i&=u}}return i}function A(t,n,r){var a=l(t.type,n.type,r)
return!a&&r&&s(e.Diagnostics.Index_signatures_are_incompatible),a}function N(t,n,a,i,o){if(r===hm)return P(t,a,i)
var c=Fn(a,i)
if(!c||1&c.type.flags&&!(8190&n.flags))return-1
var _=Fn(t,i)||1===i&&Fn(t,0)
if(_)return A(_,c,o)
if(gi(t)){var u=-1
if(0===i){var l=Fn(t,1)
l&&(u=A(l,c,o))}return u&&(u&=w(t,c.type,i,o)),u}return o&&s(e.Diagnostics.Index_signature_is_missing_in_type_0,Fe(t)),0}function P(e,t,n){var r=Fn(t,n),a=Fn(e,n)
return a||r?a&&r&&a.isReadonly===r.isReadonly?l(a.type,r.type):0:-1}function O(t,n,r){if(!t.declaration||!n.declaration)return!0
var a=24&t.declaration.flags,i=24&n.declaration.flags
return 8===i?!0:16===i&&8!==a?!0:16===i||a?(r&&s(e.Diagnostics.Cannot_assign_a_0_constructor_type_to_a_1_constructor_type,Le(a),Le(i)),!1):!0}var R,F,I,M,L,B=0,J=!1
e.Debug.assert(r!==hm||!a,"no error reporting in identity checking")
var K=l(t,n,!!a,i)
return J?c(a,e.Diagnostics.Excessive_stack_depth_comparing_types_0_and_1,Fe(t),Fe(n)):R&&(o&&(R=e.concatenateDiagnosticMessageChains(o,R)),om.add(e.createDiagnosticForNodeFromMessageChain(a,R))),0!==K}function Ha(e){if(2097152&e.flags){var t=e.symbol
if(t&&32&t.flags){var n=Bl(t)
if(n&&128&n.flags)return!0}}return!1}function Ga(e,t,n){if(4325376&e.flags&&n>=5)for(var r=e.symbol,a=0,i=0;n>i;i++){var o=t[i]
if(4325376&o.flags&&o.symbol===r&&(a++,a>=5))return!0}return!1}function Xa(e,t){return 0!==Qa(e,t,Ea)}function Qa(e,t,n){if(e===t)return-1
var r=24&Hs(e),a=24&Hs(t)
if(r!==a)return 0
if(r){if(Ll(e)!==Ll(t))return 0}else if((536870912&e.flags)!==(536870912&t.flags))return 0
return a_(e)!==a_(t)?0:n(bt(e),bt(t))}function Ya(e,t,n){if(e.parameters.length===t.parameters.length&&e.minArgumentCount===t.minArgumentCount&&e.hasRestParameter===t.hasRestParameter)return!0
var r=e.hasRestParameter?1:0,a=t.hasRestParameter?1:0
return n&&e.minArgumentCount<=t.minArgumentCount&&(r>a||r===a&&e.parameters.length>=t.parameters.length)?!0:!1}function $a(e,t,n,r,a,i){if(e===t)return-1
if(!Ya(e,t,n))return 0
if((e.typeParameters?e.typeParameters.length:0)!==(t.typeParameters?t.typeParameters.length:0))return 0
e=Yn(e),t=Yn(t)
var o=-1
if(!r){var s=Hn(e)
if(s){var c=Hn(t)
if(c){var _=i(s,c)
if(!_)return 0
o&=_}}}for(var u=t.parameters.length,l=0;u>l;l++){var d=Za(e,l)?Xn(e):zc(e.parameters[l]),p=Za(t,l)?Xn(t):zc(t.parameters[l]),_=i(d,p)
if(!_)return 0
o&=_}return a||(o&=i(Gn(e),Gn(t))),o}function Za(e,t){return e.hasRestParameter&&t>=e.parameters.length-1}function ei(e,t){for(var n=0,r=t;n<r.length;n++){var a=r[n]
if(e!==a&&!Aa(a,e))return!1}return!0}function ti(t){if(!Ef)return e.forEach(t,function(e){return ei(e,t)?e:void 0})
var n=e.filter(t,function(e){return!(6144&e.flags)})
if(!n.length)return Ur(t,!0)
var r=e.forEach(n,function(e){return ei(e,n)?e:void 0})
return r&&di(r,6144&ui(t))}function ni(t,n,r){for(var a,i,o=0,s=0;s<t.length;s++){for(var c=0,_=void 0,u=0;u<t.length;u++)Aa(t[u],t[s])?c++:_||(_=t[u])
if(e.Debug.assert(!!_,"If there is no common supertype, each type should have a downfallType"),c>o&&(a=t[s],i=_,o=c),o===t.length-1)break}Fa(i,a,n,e.Diagnostics.Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0,r)}function ri(e){return 131072&e.flags&&e.target===sg}function ai(e){return 131072&e.flags&&(e.target===sg||e.target===cg)||!(6144&e.flags)&&Na(e,fg)}function ii(e){return!!An(e,"0")}function oi(e){return 0!==(6624&e.flags)}function si(t){return 8&t.flags?!0:524288&t.flags?16&t.flags?!0:!e.forEach(t.types,function(e){return!oi(e)}):oi(t)}function ci(t){return 32&t.flags?Wf:64&t.flags?Vf:128&t.flags?Xf:256&t.flags?t.baseType:524288&t.flags&&!(16&t.flags)?Ur(e.map(t.types,ci)):t}function _i(e){return!!(131072&e.flags&&262144&e.target.flags)}function ui(e){for(var t=0,n=0,r=e;n<r.length;n++){var a=r[n]
t|=li(a)}return t}function li(e){return 524288&e.flags?ui(e.types):32&e.flags?e===qg?32:0:64&e.flags?e===Wg?64:0:128&e.flags?e===Gf?128:0:7406&e.flags}function di(e,t){if((li(e)&t)===t)return e
var n=[e]
return 34&t&&n.push(qg),340&t&&n.push(Wg),136&t&&n.push(Gf),1024&t&&n.push(Yf),2048&t&&n.push(zf),4096&t&&n.push(Uf),Ur(n,!0)}function pi(e){return 7392&li(e)?bo(e,function(e){return!(7392&li(e))}):e}function fi(e){return Ef?$i(e,524288):e}function gi(e){return e.symbol&&0!==(6144&e.symbol.flags)&&0===Pn(e,0).length&&0===Pn(e,1).length}function mi(e,t){var n=_(67108864|e.flags,e.name)
return n.declarations=e.declarations,n.parent=e.parent,n.type=t,n.target=e,e.valueDeclaration&&(n.valueDeclaration=e.valueDeclaration),n}function yi(t,n){for(var r=e.createMap(),a=0,i=bn(t);a<i.length;a++){var o=i[a],s=bt(o),c=n(s)
r[o.name]=c===s?o:mi(o,c)}return r}function hi(e){if(!(16777216&e.flags))return e
var t=e.regularType
if(t)return t
var n=e,r=yi(e,hi),a=ve(n.symbol,r,n.callSignatures,n.constructSignatures,n.stringIndexInfo,n.numberIndexInfo)
return a.flags=-16777217&n.flags,e.regularType=a,a}function vi(e){var t=yi(e,function(e){var t=bi(e)
return e===t?e:t}),n=Fn(e,0),r=Fn(e,1)
return ve(e.symbol,t,kf,kf,n&&tr(bi(n.type),n.isReadonly),r&&tr(bi(r.type),r.isReadonly))}function ki(e){return 6144&e.flags?e:bi(e)}function bi(t){if(100663296&t.flags){if(6144&t.flags)return Jf
if(8388608&t.flags)return vi(t)
if(524288&t.flags)return Ur(e.map(t.types,ki))
if(ri(t)||_i(t))return _r(t.target,e.map(t.typeArguments,bi))}return t}function xi(t){var n=!1
if(524288&t.flags)for(var r=0,a=t.types;r<a.length;r++){var i=a[r]
xi(i)&&(n=!0)}if(ri(t)||_i(t))for(var o=0,s=t.typeArguments;o<s.length;o++){var i=s[o]
xi(i)&&(n=!0)}if(8388608&t.flags)for(var _=0,u=bn(t);_<u.length;_++){var l=u[_],i=bt(l)
33554432&i.flags&&(xi(i)||c(l.valueDeclaration,e.Diagnostics.Object_literal_s_property_0_implicitly_has_an_1_type,l.name,Fe(bi(i))),n=!0)}return n}function Di(t,n){var r,a=Fe(bi(n))
switch(t.kind){case 145:case 144:r=e.Diagnostics.Member_0_implicitly_has_an_1_type
break
case 142:r=t.dotDotDotToken?e.Diagnostics.Rest_parameter_0_implicitly_has_an_any_type:e.Diagnostics.Parameter_0_implicitly_has_an_1_type
break
case 169:r=e.Diagnostics.Binding_element_0_implicitly_has_an_1_type
break
case 220:case 147:case 146:case 149:case 150:case 179:case 180:if(!t.name)return void c(t,e.Diagnostics.Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type,a)
r=e.Diagnostics._0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type
break
default:r=e.Diagnostics.Variable_0_implicitly_has_an_1_type}c(t,r,e.declarationNameToString(t.name),a)}function Ci(e,t){a&&xf.noImplicitAny&&33554432&t.flags&&(xi(t)||Di(e,t))}function Si(e,t,n){var r,a=e.parameters.length,i=t.parameters.length
r=e.hasRestParameter&&t.hasRestParameter?Math.max(a,i):e.hasRestParameter?i:t.hasRestParameter?a:Math.min(a,i)
for(var o=0;r>o;o++)n(jc(e,o),jc(t,o))}function Ti(t,n){var r=e.map(t,Ei)
return{typeParameters:t,inferUnionTypes:n,inferences:r,inferredTypes:Array(t.length)}}function Ei(){return{primary:void 0,secondary:void 0,isFixed:!1}}function wi(t){return!!(16384&t.flags||131072&t.flags&&e.forEach(t.typeArguments,wi)||2097152&t.flags&&t.symbol&&10272&t.symbol.flags||1572864&t.flags&&Ai(t))}function Ai(t){return void 0===t.couldContainTypeParameters&&(t.couldContainTypeParameters=e.forEach(t.types,wi)),t.couldContainTypeParameters}function Ni(t,n,r){function a(e,t){for(var n=0;d>n;n++)if(e===u[n]&&t===l[n])return!0
return!1}function i(n,r){if(wi(r)){if(524288&n.flags&&524288&r.flags&&!(16&n.flags&&16&r.flags)||1048576&n.flags&&1048576&r.flags){if(n===r){for(var c=0,g=n.types;c<g.length;c++){var m=g[c]
i(m,m)}return}for(var y=void 0,h=0,v=r.types;h<v.length;h++){var m=v[h]
Pi(m,n.types)&&((y||(y=[])).push(m),i(m,m))}y&&(n=Oi(n,y),r=Oi(r,y))}if(16384&r.flags){if(134217728&n.flags)return
for(var k=t.typeParameters,b=0;b<k.length;b++)if(r===k[b]){var x=t.inferences[b]
if(!x.isFixed){var D=p?x.secondary||(x.secondary=[]):x.primary||(x.primary=[])
e.contains(D,n)||D.push(n)}return}}else if(131072&n.flags&&131072&r.flags&&n.target===r.target)for(var C=n.typeArguments||kf,S=r.typeArguments||kf,T=C.length<S.length?C.length:S.length,b=0;T>b;b++)i(C[b],S[b])
else if(1572864&r.flags){for(var S=r.types,E=0,w=void 0,A=0,N=S;A<N.length;A++){var m=N[A]
16384&m.flags&&e.contains(t.typeParameters,m)?(w=m,E++):i(n,m)}1===E&&(p++,i(n,w),p--)}else if(1572864&n.flags)for(var C=n.types,P=0,O=C;P<O.length;P++){var R=O[P]
i(R,r)}else if(n=Tn(n),2588672&n.flags){if(a(n,r))return
if(Ga(n,u,d)&&Ga(r,l,d))return
var F=n.id+","+r.id
if(f[F])return
f[F]=!0,0===d&&(u=[],l=[]),u[d]=n,l[d]=r,d++,o(n,r),s(n,r,0),s(n,r,1),_(n,r),d--}}}function o(e,t){for(var n=bn(t),r=0,a=n;r<a.length;r++){var o=a[r],s=xn(e,o.name)
s&&i(bt(s),bt(o))}}function s(e,t,n){for(var r=Pn(e,n),a=Pn(t,n),i=r.length,o=a.length,s=o>i?i:o,_=0;s>_;_++)c(Yn(r[i-s+_]),Yn(a[o-s+_]))}function c(e,t){Si(e,t,i),e.typePredicate&&t.typePredicate&&e.typePredicate.kind===t.typePredicate.kind?i(e.typePredicate.type,t.typePredicate.type):i(Gn(e),Gn(t))}function _(e,t){var n=In(t,0)
if(n){var r=In(e,0)||Mn(e,0)
r&&i(r,n)}var a=In(t,1)
if(a){var r=In(e,1)||In(e,0)||Mn(e,1)
r&&i(r,a)}}var u,l,d=0,p=0,f=e.createMap()
i(n,r)}function Pi(e,t){for(var n=0,r=t;n<r.length;n++){var a=r[n]
if(Ta(a,e))return!0}return!1}function Oi(e,t){for(var n=[],r=0,a=e.types;r<a.length;r++){var i=a[r]
Pi(i,t)||n.push(i)}return 524288&e.flags?Ur(n):Gr(n)}function Ri(e,t){var n=e.inferences[t]
return n.primary||n.secondary||kf}function Fi(e,t){var n,r=e.inferredTypes[t]
if(!r){var a=Ri(e,t)
if(a.length){var i=e.inferUnionTypes?Ur(a,!0):ti(a)
r=i?bi(i):Kf,n=!!i}else r=Zf,n=!0
if(e.inferredTypes[t]=r,n){var o=ir(e.typeParameters[t])
if(o){var s=ka(o,la(e))
Na(r,rn(s,r))||(e.inferredTypes[t]=r=s)}}else(void 0===e.failedTypeParameterIndex||e.failedTypeParameterIndex>t)&&(e.failedTypeParameterIndex=t)}return r}function Ii(e){for(var t=0;t<e.inferredTypes.length;t++)Fi(e,t)
return e.inferredTypes}function Mi(t){var n=h(t)
return n.resolvedSymbol||(n.resolvedSymbol=!e.nodeIsMissing(t)&&D(t,t.text,1156031,e.Diagnostics.Cannot_find_name_0,t)||Lf),n.resolvedSymbol}function Li(t){for(;t;)switch(t.kind){case 158:return!0
case 69:case 139:t=t.parent
continue
default:return!1}e.Debug.fail("should not get here")}function Bi(e){if(69===e.kind){var t=Mi(e)
return t!==Lf?""+n(t):void 0}if(97===e.kind)return"0"
if(172===e.kind){var r=Bi(e.expression)
return r&&r+"."+e.name.text}}function Ji(e,t){switch(e.kind){case 69:return 69===t.kind&&Mi(e)===Mi(t)||(218===t.kind||169===t.kind)&&_e(Mi(e))===se(t)
case 97:return 97===t.kind
case 172:return 172===t.kind&&e.name.text===t.name.text&&Ji(e.expression,t.expression)}return!1}function Ki(e,t){for(;172===e.kind;)if(e=e.expression,Ji(e,t))return!0
return!1}function zi(e,t){return 172===t.kind&&Ki(e,t.expression)&&Ui(ji(t.expression),t.name.text)}function ji(e){if(69===e.kind)return bt(Mi(e))
if(172===e.kind){var t=ji(e.expression)
return t&&Xe(t,e.name.text)}}function Ui(e,t){if(e&&524288&e.flags){var n=An(e,t)
if(!n){var r=$i(e,4194304)
r!==e&&524288&r.flags&&(n=An(r,t))}if(n&&268435456&n.flags)return void 0===n.isDiscriminantProperty&&(n.isDiscriminantProperty=!n.hasCommonType&&si(bt(n))),n.isDiscriminantProperty}return!1}function qi(e,t){return Ji(e,t)||Ki(e,t)}function Wi(e,t){if(e.arguments)for(var n=0,r=e.arguments;n<r.length;n++){var a=r[n]
if(qi(t,a))return!0}return 172===e.expression.kind&&qi(t,e.expression.expression)?!0:!1}function Vi(e){return e.id||(e.id=s,s++),e.id}function Hi(e,t){if(!(524288&e.flags))return Na(e,t)
for(var n=0,r=e.types;n<r.length;n++){var a=r[n]
if(Na(a,t))return!0}return!1}function Gi(e,t){if(e!==t){var n=bo(e,function(e){return Hi(t,e)})
if(n!==$f)return n}return e}function Xi(e){for(var t=0,n=0,r=e;n<r.length;n++){var a=r[n]
t|=Yi(a)}return t}function Qi(e){var t=kn(e)
return!!(t.callSignatures.length||t.constructSignatures.length||t.members.bind&&Aa(e,og))}function Yi(e){var t=e.flags
if(2&t)return Ef?4079361:4194049
if(32&t)return Ef?e===qg?3030785:1982209:e===qg?3145473:4194049
if(20&t)return Ef?4079234:4193922
if(320&t){var n=e===Wg||256&e.flags&&"0"===e.text
return Ef?n?3030658:1982082:n?3145346:4193922}if(8&t)return Ef?4078980:4193668
if(136&t)return Ef?e===Gf?3030404:1981828:e===Gf?3145092:4193668
if(2588672&t)return Qi(e)?Ef?6164448:8376288:Ef?6166480:8378320
if(3072&t)return 2457472
if(4096&t)return 2340752
if(512&t)return Ef?1981320:4193160
if(16384&t){var r=ir(e)
return Yi(r||Zf)}return 1572864&t?Xi(e.types):8388607}function $i(e,t){return bo(e,function(e){return 0!==(Yi(e)&t)})}function Zi(e,t){if(t){var n=j_(t)
return Ur([$i(e,131072),n])}return e}function eo(e,t){var n=Ze(t)
return Xe(e,n)||Cs(n)&&In(e,1)||In(e,0)||Kf}function to(e,t){return ii(e)&&Xe(e,""+t)||pl(e,void 0,!1)||Kf}function no(e){return Nr(pl(e,void 0,!1)||Kf)}function ro(e){return 170===e.parent.kind||253===e.parent.kind?Zi(co(e),e.right):j_(e.right)}function ao(t,n){return to(co(t),e.indexOf(t.elements,n))}function io(e){return no(co(e.parent))}function oo(e){return eo(co(e.parent),e.name)}function so(e){return Zi(oo(e),e.objectAssignmentInitializer)}function co(e){var t=e.parent
switch(t.kind){case 207:return Wf
case 208:return dl(t.expression)||Kf
case 187:return ro(t)
case 181:return zf
case 170:return ao(t,e)
case 191:return io(t)
case 253:return oo(t)
case 254:return so(t)}return Kf}function _o(t){var n=t.parent,r=po(n.parent),a=167===n.kind?eo(r,t.propertyName||t.name):t.dotDotDotToken?no(r):to(r,e.indexOf(n.elements,t))
return Zi(a,t.initializer)}function uo(e){var t=h(e)
return t.resolvedType||j_(e)}function lo(e){return e.initializer?uo(e.initializer):207===e.parent.parent.kind?Wf:208===e.parent.parent.kind?dl(e.parent.parent.expression)||Kf:Kf}function po(e){return 218===e.kind?lo(e):_o(e)}function fo(e){return 218===e.kind||169===e.kind?po(e):co(e)}function go(e){switch(e.kind){case 178:return go(e.expression)
case 187:switch(e.operatorToken.kind){case 56:return go(e.left)
case 24:return go(e.right)}}return e}function mo(e){if(249===e.kind){var t=j_(e.expression)
return oi(t)?t:void 0}return $f}function yo(t){var n=h(t)
if(!n.switchTypes){var r=e.map(t.caseBlock.clauses,mo)
n.switchTypes=e.contains(r,void 0)?kf:r}return n.switchTypes}function ho(t,n){return 524288&t.flags?!e.forEach(t.types,function(t){return!e.contains(n,t)}):e.contains(n,t)}function vo(e,t){return e===t||524288&t.flags&&ko(e,t)}function ko(e,t){if(524288&e.flags){for(var n=0,r=e.types;n<r.length;n++){var a=r[n]
if(!Lr(t.types,a))return!1}return!0}return 256&e.flags&&16&t.flags&&e.baseType===t?!0:Lr(t.types,e)}function bo(t,n){if(524288&t.flags){var r=t.types,a=e.filter(r,n)
return a===r?t:qr(a)}return n(t)?t:$f}function xo(e){return 0===e.flags}function Do(e){return 0===e.flags?e.type:e}function Co(e,t){return t?{flags:0,type:e}:e}function So(t,n,r,a){function i(e){for(;;){if(512&e.flags)for(var r=C;Ug>r;r++)if(nm[r]===e)return rm[r]
var i=void 0
if(16&e.flags){if(i=o(e),!i){e=e.antecedent
continue}}else if(96&e.flags)i=s(e)
else if(128&e.flags)i=c(e)
else if(12&e.flags){if(1===e.antecedents.length){e=e.antecedents[0]
continue}i=4&e.flags?_(e):u(e)}else if(2&e.flags){var l=e.container
if(l&&l!==a&&172!==t.kind){e=l.flowNode
continue}i=D}else i=n
return 512&e.flags&&(nm[Ug]=e,rm[Ug]=i,Ug++),i}}function o(e){var r=e.node
return Ji(t,r)?524288&n.flags?Gi(n,fo(r)):n:Ki(t,r)?n:void 0}function s(e){var t=i(e.antecedent),r=Do(t)
if(r!==$f){var a=0!==(32&e.flags)
r=b(r,e.expression,a),r===$f&&xo(t)&&(r=b(n,e.expression,a))}return Co(r,xo(t))}function c(e){var n=i(e.antecedent),r=Do(n),a=e.switchStatement.expression
return Ji(t,a)?r=y(r,e.switchStatement,e.clauseStart,e.clauseEnd):l(a)&&(r=d(r,a,function(t){return y(t,e.switchStatement,e.clauseStart,e.clauseEnd)})),Co(r,xo(n))}function _(t){for(var r=[],a=!1,o=!1,s=0,c=t.antecedents;s<c.length;s++){var _=c[s],u=i(_),l=Do(u)
if(l===n&&n===D)return l
e.contains(r,l)||r.push(l),vo(l,n)||(a=!0),xo(u)&&(o=!0)}return Co(Ur(r,a),o)}function u(r){var a=Vi(r),o=$g[a]||($g[a]=e.createMap())
if(x||(x=Bi(t)),o[x])return o[x]
for(var s=zg;jg>s;s++)if(Zg[s]===r&&em[s]===x)return Co(Ur(tm[s]),!0)
var c,_=[],u=!1
Zg[jg]=r,em[jg]=x,tm[jg]=_
for(var l=0,d=r.antecedents;l<d.length;l++){var p=d[l]
jg++
var f=i(p)
jg--,c||(c=f)
var g=Do(f)
if(o[x])return o[x]
if(e.contains(_,g)||_.push(g),vo(g,n)||(u=!0),g===n)break}var m=Ur(_,u)
return xo(c)?Co(m,!0):o[x]=m}function l(e){return 172===e.kind&&524288&n.flags&&Ji(t,e.expression)&&Ui(n,e.name.text)}function d(e,t,n){var r=t.name.text,a=Xe(e,r),i=a&&n(a)
return a===i?e:bo(e,function(e){return Oa(Xe(e,r),i)})}function p(e,r,a){return Ji(t,r)?$i(e,a?1048576:2097152):l(r)?d(e,r,function(e){return $i(e,a?1048576:2097152)}):zi(t,r)?n:e}function f(e,r,a){switch(r.operatorToken.kind){case 56:return p(e,r.left,a)
case 30:case 31:case 32:case 33:var i=r.operatorToken.kind,o=go(r.left),s=go(r.right)
if(182===o.kind&&9===s.kind)return m(e,o,i,s,a)
if(182===s.kind&&9===o.kind)return m(e,s,i,o,a)
if(Ji(t,o))return g(e,i,s,a)
if(Ji(t,s))return g(e,i,o,a)
if(l(o))return d(e,o,function(e){return g(e,i,s,a)})
if(l(s))return d(e,s,function(e){return g(e,i,o,a)})
if(zi(t,o)||zi(t,s))return n
break
case 91:return h(e,r,a)
case 24:return b(e,r.right,a)}return e}function g(e,t,n,r){if(1&e.flags)return e;(31===t||33===t)&&(r=!r)
var a=j_(n)
if(6144&a.flags){if(!Ef)return e
var i=30===t||31===t,o=i?r?65536:524288:93===n.kind?r?32768:262144:r?16384:131072
return $i(e,o)}if(2589191&e.flags)return e
if(r){var s=bo(e,function(e){return Ra(e,a)})
return s!==$f?s:e}return oi(a)?bo(e,function(e){return e!==a}):e}function m(e,r,a,i,o){var s=go(r.expression)
if(!Ji(t,s))return Ki(t,s)?n:e
if((31===a||33===a)&&(o=!o),o&&!(524288&e.flags)){var c=dm[i.text]
if(c&&Aa(c,e))return c}var _=o?um[i.text]||64:lm[i.text]||8192
return $i(e,_)}function y(t,n,r,a){var i=yo(n)
if(!i.length)return t
var o=i.slice(r,a),s=r===a||e.contains(o,$f),c=Ur(o),_=c===$f?$f:bo(t,function(e){return Oa(c,e)})
if(!s)return _
var u=bo(t,function(t){return!(oi(t)&&e.contains(i,t))})
return _===$f?u:Ur([_,u])}function h(r,a,i){var o=go(a.left)
if(!Ji(t,o))return Ki(t,o)?n:r
var s=j_(a.right)
if(!Aa(s,og))return r
var c,_=An(s,"prototype")
if(_){var u=bt(_)
Qe(u)||(c=u)}if(Qe(r)&&(c===ig||c===og))return r
if(!c){var l=void 0
65536&s.flags?l=nn(s).declaredConstructSignatures:2097152&s.flags&&(l=Pn(s,1)),l&&l.length&&(c=Ur(e.map(l,function(e){return Gn(Yn(e))})))}return c?v(r,c,i):r}function v(e,t,n){if(!n)return bo(e,function(e){return!Pa(e,t)})
if(524288&e.flags){var r=bo(e,function(e){return Pa(e,t)})
if(r!==$f)return r}var a=16384&e.flags?Tn(e):e
return Aa(t,e)?t:Na(e,t)?e:Na(t,a)?t:Gr([e,t])}function k(r,a,i){if(!Wi(a,t))return r
var o=Fc(a),s=o.typePredicate
if(!s)return r
if(Qe(r)&&(s.type===ig||s.type===og))return r
if(e.isIdentifierTypePredicate(s)){var c=a.arguments[s.parameterIndex]
if(c){if(Ji(t,c))return v(r,s.type,i)
if(Ki(t,c))return n}}else{var _=Eo(a.expression)
if(173===_.kind||172===_.kind){var u=_,l=Eo(u.expression)
if(Ji(t,l))return v(r,s.type,i)
if(Ki(t,l))return n}}return r}function b(e,t,n){switch(t.kind){case 69:case 97:case 172:return p(e,t,n)
case 174:return k(e,t,n)
case 178:return b(e,t.expression,n)
case 187:return f(e,t,n)
case 185:if(49===t.operator)return b(e,t.operand,!n)}return e}var x
if(!t.flowNode||r&&!(4178943&n.flags))return n
var D=r?n:di(n,2048),C=Ug,S=Do(i(t.flowNode))
return Ug=C,196===t.parent.kind&&$i(S,524288)===$f?n:S}function To(t,n){if(69===n.kind&&(e.isRightSideOfQualifiedNameOrPropertyAccess(n)&&(n=n.parent),e.isExpression(n)&&!e.isAssignmentTarget(n))){var r=j_(n)
if(_e(h(n).resolvedSymbol)===t)return r}return bt(t)}function Eo(e){for(;178===e.kind;)e=e.expression
return e}function wo(t){for(;;)if(t=t.parent,e.isFunctionLike(t)&&!e.getImmediatelyInvokedFunctionExpression(t)||226===t.kind||256===t.kind||145===t.kind)return t}function Ao(t){var n=e.getRootDeclaration(t.valueDeclaration).parent,r=h(n)
return 4194304&r.flags||(r.flags|=4194304,No(n)||Po(n)),t.isAssigned||!1}function No(t){for(;;){if(t=t.parent,!t)return!1
if(e.isFunctionLike(t)&&4194304&h(t).flags)return!0}}function Po(t){if(69===t.kind){if(e.isAssignmentTarget(t)){var n=Mi(t)
n.valueDeclaration&&142===e.getRootDeclaration(n.valueDeclaration).kind&&(n.isAssigned=!0)}}else e.forEachChild(t,Po)}function Oo(t){var n=Mi(t)
if(n===Nf){var r=e.getContainingFunction(t)
180===r.kind&&2>Df&&c(t,e.Diagnostics.The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_standard_function_expression),33554432&t.flags&&(h(r).flags|=8192)}8388608&n.flags&&!Li(t)&&!Xd(q(n))&&V(n)
var a=_e(n)
if(2===Df&&32&a.flags&&221===a.valueDeclaration.kind&&e.nodeIsDecorated(a.valueDeclaration))for(var r=e.getContainingClass(t);void 0!==r;){if(r===a.valueDeclaration&&r.name!==t){h(r).flags|=524288,h(t).flags|=1048576
break}r=e.getContainingClass(r)}Hu(t,t),Wu(t,t),Fo(t,n)
var i=bt(a),o=a.valueDeclaration
if(!(3&a.flags)||e.isAssignmentTarget(t)||!o)return i
for(var s=142===e.getRootDeclaration(o).kind,_=wo(o),u=wo(t),l=u!==_;u!==_&&(179===u.kind||180===u.kind)&&(a_(a)||s&&!Ao(a));)u=wo(u)
var d=!Ef||0!==(1&i.flags)||s||l||e.isInAmbientContext(o),p=So(t,i,d,u)
return d||2048&li(i)||!(2048&li(p))?p:(c(t,e.Diagnostics.Variable_0_is_used_before_being_assigned,Oe(n)),i)}function Ro(t,n){for(var r=t;r&&r!==n;){if(e.isFunctionLike(r))return!0
r=r.parent}return!1}function Fo(t,n){if(!(Df>=2||0===(34&n.flags)||252===n.valueDeclaration.parent.kind)){for(var r=e.getEnclosingBlockScopeContainer(n.valueDeclaration),a=Ro(t.parent,r),i=r,o=!1;i&&!e.nodeStartsNewLexicalEnvironment(i);){if(e.isIterationStatement(i,!1)){o=!0
break}i=i.parent}o&&(a&&(h(i).flags|=65536),206===r.kind&&e.getAncestor(n.valueDeclaration,219).parent===r&&Io(t,r)&&(h(n.valueDeclaration).flags|=2097152),h(n.valueDeclaration).flags|=262144),a&&(h(n.valueDeclaration).flags|=131072)}}function Io(t,n){for(var r=t;178===r.parent.kind;)r=r.parent
var a=!1
if(e.isAssignmentTarget(r))a=!0
else if(185===r.parent.kind||186===r.parent.kind){var i=r.parent
a=41===i.operator||42===i.operator}if(!a)return!1
for(;r!==n;){if(r===n.statement)return!0
r=r.parent}return!1}function Mo(e,t){if(h(e).flags|=2,145===t.kind||148===t.kind){var n=t.parent
h(n).flags|=4}else h(t).flags|=4}function Lo(t){if(e.isSuperCallExpression(t))return t
if(!e.isFunctionLike(t))return e.forEachChild(t,Lo)}function Bo(e){var t=h(e)
return void 0===t.hasSuperCall&&(t.superCall=Lo(e.body),t.hasSuperCall=t.superCall?!0:!1),t.superCall}function Jo(e){var t=se(e),n=Ht(t),r=Rt(n)
return r===qf}function Ko(t){var n=e.getThisContainer(t,!0),r=!1
if(148===n.kind){var a=n.parent,i=e.getClassExtendsHeritageClauseElement(a)
if(i&&!Jo(a)){var o=Bo(n);(!o||o.end>t.pos)&&c(t,e.Diagnostics.super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class)}}switch(180===n.kind&&(n=e.getThisContainer(n,!1),r=2>Df),n.kind){case 225:c(t,e.Diagnostics.this_cannot_be_referenced_in_a_module_or_namespace_body)
break
case 224:c(t,e.Diagnostics.this_cannot_be_referenced_in_current_location)
break
case 148:jo(t,n)&&c(t,e.Diagnostics.this_cannot_be_referenced_in_constructor_arguments)
break
case 145:case 144:32&n.flags&&c(t,e.Diagnostics.this_cannot_be_referenced_in_a_static_property_initializer)
break
case 140:c(t,e.Diagnostics.this_cannot_be_referenced_in_a_computed_property_name)}if(r&&Mo(t,n),e.isFunctionLike(n)&&(!Xo(t)||qp(n))){if(179===n.kind&&e.isInJavaScriptFile(n.parent)&&3===e.getSpecialPropertyAssignmentKind(n.parent)){var s=n.parent.left.expression.expression,_=j_(s).symbol
if(_&&_.members&&16&_.flags)return Mc(_)}var u=gt(n)
if(u)return u}if(e.isClassLike(n.parent)){var l=se(n.parent),d=32&n.flags?bt(l):Ht(l).thisType
return So(t,d,!0,void 0)}if(e.isInJavaScriptFile(t)){var d=zo(n)
if(d&&d!==Kf)return d}return xf.noImplicitThis&&c(t,e.Diagnostics.this_implicitly_has_type_any_because_it_does_not_have_a_type_annotation),Jf}function zo(t){var n=e.getJSDocTypeTag(t)
if(n&&n.typeExpression&&n.typeExpression.type&&269===n.typeExpression.type.kind){var r=n.typeExpression.type
if(r.parameters.length>0&&272===r.parameters[0].type.kind)return aa(r.parameters[0].type)}}function jo(e,t){for(var n=e;n&&n!==t;n=n.parent)if(142===n.kind)return!0
return!1}function Uo(t){function n(t){return t?r?148===t.kind:e.isClassLike(t.parent)||171===t.parent.kind?32&t.flags?147===t.kind||146===t.kind||149===t.kind||150===t.kind:147===t.kind||146===t.kind||149===t.kind||150===t.kind||145===t.kind||144===t.kind||148===t.kind:!1:!1}var r=174===t.parent.kind&&t.parent.expression===t,a=e.getSuperContainer(t,!0),i=!1
if(!r)for(;a&&180===a.kind;)a=e.getSuperContainer(a,!0),i=2>Df
var o=n(a),s=0
if(!o){for(var _=t;_&&_!==a&&140!==_.kind;)_=_.parent
return _&&140===_.kind?c(t,e.Diagnostics.super_cannot_be_referenced_in_a_computed_property_name):r?c(t,e.Diagnostics.Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors):a&&a.parent&&(e.isClassLike(a.parent)||171===a.parent.kind)?c(t,e.Diagnostics.super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class):c(t,e.Diagnostics.super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions),Kf}if(s=32&a.flags||r?512:256,h(t).flags|=s,147===a.kind&&256&a.flags&&(e.isSuperPropertyOrElementAccess(t.parent)&&e.isAssignmentTarget(t.parent)?h(a).flags|=4096:h(a).flags|=2048),i&&Mo(t.parent,a),171===a.parent.kind)return 2>Df?(c(t,e.Diagnostics.super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_higher),Kf):Jf
var u=a.parent,l=Ht(se(u)),d=l&&Ft(l)[0]
return d?148===a.kind&&jo(t,a)?(c(t,e.Diagnostics.super_cannot_be_referenced_in_constructor_arguments),Kf):512===s?Rt(l):rn(d,l.thisType):(e.getClassExtendsHeritageClauseElement(u)||c(t,e.Diagnostics.super_can_only_be_referenced_in_a_derived_class),Kf)}function qo(e){if(Ca(e)&&180!==e.kind){var t=ms(e)
if(t)return t.thisParameter}}function Wo(t){var n=t.parent
if(Ca(n)){var r=e.getImmediatelyInvokedFunctionExpression(n)
if(r){var a=e.indexOf(n.parameters,t)
if(r.arguments&&a<r.arguments.length){if(t.dotDotDotToken){for(var i=[],o=a;o<r.arguments.length;o++)i.push(Id(r.arguments[o]))
return Nr(Ur(i))}var s=h(r),c=s.resolvedSignature
s.resolvedSignature=Mg
var _=j_(r.arguments[a])
return s.resolvedSignature=c,_}}var u=ms(n)
if(u){var l=e.hasRestParameter(n),d=n.parameters.length-(l?1:0),a=e.indexOf(n.parameters,t)
if(d>a)return jc(u,a)
if(l&&a===n.parameters.length-1&&Za(u,n.parameters.length-1))return bt(e.lastOrUndefined(u.parameters))}}}function Vo(t){var n=t.parent
if(t===n.initializer){if(n.type)return aa(n.type)
if(142===n.kind){var r=Wo(n)
if(r)return r}if(e.isBindingPattern(n.name))return _t(n.name,!0,!1)
if(e.isBindingPattern(n.parent)){var a=n.parent.parent,i=n.propertyName||n.name
if(e.isVariableLike(a)&&a.type&&!e.isBindingPattern(i)){var o=Ze(i)
if(o)return Xe(aa(a.type),o)}}}}function Ho(t){var n=e.getContainingFunction(t)
{if(!e.isAsyncFunctionLike(n))return n&&!n.asteriskToken?Qo(n):void 0
var r=Qo(n)
if(r)return ku(r)}}function Go(t){var n=e.getContainingFunction(t)
if(n){var r=Qo(n)
if(r)return t.asteriskToken?r:yl(r)}}function Xo(t){for(;t.parent&&!e.isFunctionLike(t.parent);){if(142===t.parent.kind&&t.parent.initializer===t)return!0
t=t.parent}return!1}function Qo(t){if(t.type||148===t.kind||149===t.kind&&e.getSetAccessorTypeAnnotationNode(e.getDeclarationOfKind(t.symbol,150)))return Gn(Un(t))
var n=fs(t)
return n?Gn(n):void 0}function Yo(t,n){var r=yc(t),a=e.indexOf(r,n)
if(a>=0){var i=Ic(t)
return jc(i,a)}}function $o(e,t){return 176===e.parent.kind?Yo(e.parent,t):void 0}function Zo(t){var n=t.parent,r=n.operatorToken.kind
if(r>=56&&68>=r){if(0!==e.getSpecialPropertyAssignmentKind(n))return
if(t===n.right)return j_(n.left)}else{if(52===r){var a=us(n)
return a||t!==n.right||(a=j_(n.left)),a}if((51===r||24===r)&&t===n.right)return us(n)}}function es(e,t){if(!(524288&e.flags))return t(e)
for(var n,r,a=e.types,i=0,o=a;i<o.length;i++){var s=o[i],c=t(s)
c&&(n?r?r.push(c):r=[n,c]:n=c)}return r?Ur(r):n}function ts(e,t){return es(e,function(e){var n=4161536&e.flags?An(e,t):void 0
return n?bt(n):void 0})}function ns(e,t){return es(e,function(e){return Rn(e,t)})}function rs(t){return!!(524288&t.flags?e.forEach(t.types,ii):ii(t))}function as(t){return e.Debug.assert(e.isObjectLiteralMethod(t)),hd(t)?void 0:is(t)}function is(t){var n=t.parent,r=_s(n)
if(r){if(!e.hasDynamicName(t)){var a=se(t).name,i=ts(r,a)
if(i)return i}return bs(t.name)&&ns(r,1)||ns(r,0)}}function os(t){var n=t.parent,r=_s(n)
if(r){var a=e.indexOf(n.elements,t)
return ts(r,""+a)||ns(r,1)||(Df>=2?gl(r,void 0):void 0)}}function ss(e){var t=e.parent
return e===t.whenTrue||e===t.whenFalse?us(t):void 0}function cs(t){var n=t.kind,r=t.parent,a=Js(r)
if(246===t.kind){if(!a||Qe(a))return
return Xe(a,t.name.text)}return 247===t.kind?a:void e.Debug.fail("Expected JsxAttribute or JsxSpreadAttribute, got ts.SyntaxKind["+n+"]")}function _s(e){var t=us(e)
return t&&Tn(t)}function us(t){if(!hd(t)){if(t.contextualType)return t.contextualType
var n=t.parent
switch(n.kind){case 218:case 142:case 145:case 144:case 169:return Vo(t)
case 180:case 211:return Ho(t)
case 190:return Go(n)
case 174:case 175:return Yo(n,t)
case 177:case 195:return aa(n.type)
case 187:return Zo(t)
case 253:return is(n)
case 170:return os(t)
case 188:return ss(t)
case 197:return e.Debug.assert(189===n.parent.kind),$o(n.parent,t)
case 178:return us(n)
case 248:return us(n)
case 246:case 247:return cs(n)}}}function ls(e){var t=e.parent
switch(t.kind){case 187:switch(t.operatorToken.kind){case 32:case 33:case 30:case 31:return!0}break
case 188:return(e===t.whenTrue||e===t.whenFalse)&&ls(t)
case 178:return ls(t)
case 249:case 166:return!0}return!1}function ds(e){var t=Nn(e,0)
if(1===t.length){var n=t[0]
if(!n.typeParameters)return n}}function ps(e){return 179===e.kind||180===e.kind}function fs(t){return ps(t)||e.isObjectLiteralMethod(t)?ms(t):void 0}function gs(t){return e.isObjectLiteralMethod(t)?as(t):_s(t)}function ms(t){e.Debug.assert(147!==t.kind||e.isObjectLiteralMethod(t))
var n=gs(t)
if(n){if(!(524288&n.flags))return ds(n)
for(var r,a=n.types,i=0,o=a;i<o.length;i++){var s=o[i],c=ds(s)
if(c)if(r){if(!$a(r[0],c,!1,!0,!0,Ea))return
r.push(c)}else r=[c]}var _
return r&&(_=_n(r[0]),_.resolvedReturnType=void 0,_.unionSignatures=r),_}}function ys(e){return e&&e.context}function hs(e,t){var n=B_(e.expression,t)
return pl(n,e.expression,!1)}function vs(e){return 169===e.kind&&!!e.initializer||187===e.kind&&56===e.operatorToken.kind}function ks(t,n){for(var r=t.elements,a=!1,i=[],o=e.isAssignmentTarget(t),s=0,_=r;s<_.length;s++){var u=_[s]
if(o&&191===u.kind){var l=j_(u.expression,n),d=In(l,1)||(Df>=2?gl(l,void 0):void 0)
d&&i.push(d)}else{var p=j_(u,n)
i.push(p)}a=a||191===u.kind}if(!a){if(o&&i.length){var p=ur(Fr(i))
return p.pattern=t,p}var f=_s(t)
if(f&&rs(f)){var g=f.pattern
if(g&&(168===g.kind||170===g.kind))for(var m=g.elements,y=i.length;y<m.length;y++){var h=m[y]
vs(h)?i.push(f.typeArguments[y]):(193!==h.kind&&c(h,e.Diagnostics.Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value),i.push(Kf))}if(i.length)return Fr(i)}}return Nr(i.length?Ur(i,!0):Ef?$f:jf)}function bs(e){return 140===e.kind?xs(e):Cs(e.text)}function xs(e){return Ds(Ss(e),340)}function Ds(e,t){return Qe(e)||g_(e,t)}function Cs(e){return""+ +e===e}function Ss(t){var n=h(t.expression)
return n.resolvedType||(n.resolvedType=j_(t.expression),Ds(n.resolvedType,886)?ic(t.expression,n.resolvedType,!0):c(t,e.Diagnostics.A_computed_property_name_must_be_of_type_string_number_symbol_or_any)),n.resolvedType}function Ts(e,t,n){for(var r=[],a=0;a<t.length;a++)(0===n||bs(e.properties[a].name))&&r.push(bt(t[a]))
var i=r.length?Ur(r,!0):zf
return tr(i,!1)}function Es(t,n){var r=e.isAssignmentTarget(t)
Bp(t,r)
for(var a=e.createMap(),i=[],o=_s(t),s=o&&o.pattern&&(167===o.pattern.kind||171===o.pattern.kind),u=0,l=!1,d=!1,p=!1,f=0,g=t.properties;f<g.length;f++){var m=g[f],y=m.symbol
if(253===m.kind||254===m.kind||e.isObjectLiteralMethod(m)){var h=void 0
253===m.kind?h=J_(m,n):147===m.kind?h=K_(m,n):(e.Debug.assert(254===m.kind),h=j_(m.name,n)),u|=h.flags
var v=_(67108868|y.flags,y.name)
if(r){var k=253===m.kind&&vs(m.initializer)||254===m.kind&&m.objectAssignmentInitializer
k&&(v.flags|=536870912),e.hasDynamicName(m)&&(l=!0)}else if(s&&!(536870912&o.flags)){var b=An(o,y.name)
b?v.flags|=536870912&b.flags:xf.suppressExcessPropertyErrors||c(m.name,e.Diagnostics.Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1,Oe(y),Fe(o))}v.declarations=y.declarations,v.parent=y.parent,y.valueDeclaration&&(v.valueDeclaration=y.valueDeclaration),v.type=h,v.target=y,y=v}else e.Debug.assert(149===m.kind||150===m.kind),au(m)
e.hasDynamicName(m)?bs(m.name)?p=!0:d=!0:a[y.name]=y,i.push(y)}if(s)for(var x=0,D=Cn(o);x<D.length;x++){var v=D[x]
a[v.name]||(536870912&v.flags||c(v.valueDeclaration||v.bindingElement,e.Diagnostics.Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value),a[v.name]=v,i.push(v))}var C=d?Ts(t,i,0):void 0,S=p?Ts(t,i,1):void 0,T=ve(t.symbol,a,kf,kf,C,S),E=xf.suppressExcessPropertyErrors?0:16777216
return T.flags|=75497472|E|234881024&u|(l?536870912:0),r&&(T.pattern=t),T}function ws(e){return qs(e),sm||Jf}function As(e){qs(e.openingElement),Ps(e.closingElement.tagName)?Is(e.closingElement):j_(e.closingElement.tagName)
for(var t=0,n=e.children;t<n.length;t++){var r=n[t]
switch(r.kind){case 248:Ws(r)
break
case 241:As(r)
break
case 242:ws(r)}}return sm||Jf}function Ns(e){return e.indexOf("-")<0}function Ps(t){return 172===t.kind||97===t.kind?!1:e.isIntrinsicJsxName(t.text)}function Os(t,n,r){var a=void 0
if(n===Zf&&Ns(t.name.text))c(t.parent,e.Diagnostics.JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property,Ls())
else if(n&&!Qe(n)){var i=An(n,t.name.text)
if(a=i&&bt(i),Ns(t.name.text)){var o=Xe(n,Ze(t.name))||In(n,0)
if(o)a=o
else if(!a)return c(t.name,e.Diagnostics.Property_0_does_not_exist_on_type_1,t.name.text,Fe(n)),Kf}}var s
return s=t.initializer?j_(t.initializer):Xf,a&&Ia(s,a,t),r[t.name.text]=!0,s}function Rs(t,n,r){for(var a=j_(t.expression),i=Cn(a),o=0,s=i;o<s.length;o++){var c=s[o]
if(!r[c.name]){var _=An(n,c.name)
if(_){var u=e.chainDiagnosticMessages(void 0,e.Diagnostics.Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property,c.name)
Ia(bt(c),bt(_),t,void 0,u)}r[c.name]=!0}}return a}function Fs(e){return void 0===pm[e]?pm[e]=Sr(fm.JSX,e)||Kf:pm[e]}function Is(t){var n=h(t)
if(!n.resolvedSymbol){var r=Fs(fm.IntrinsicElements)
if(r!==Kf){var a=An(r,t.tagName.text)
if(a)return n.jsxFlags|=1,n.resolvedSymbol=a
var i=In(r,0)
return i?(n.jsxFlags|=2,n.resolvedSymbol=r.symbol):(c(t,e.Diagnostics.Property_0_does_not_exist_on_type_1,t.tagName.text,"JSX."+fm.IntrinsicElements),n.resolvedSymbol=Lf)}return xf.noImplicitAny&&c(t,e.Diagnostics.JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists,fm.IntrinsicElements),n.resolvedSymbol=Lf}return n.resolvedSymbol}function Ms(t,n){if(e.Debug.assert(!(524288&n.flags)),Qe(n))return Jf
var r=Pn(n,1)
return 0===r.length&&(r=Pn(n,0),0===r.length)?(c(t.tagName,e.Diagnostics.JSX_element_type_0_does_not_have_any_construct_or_call_signatures,e.getTextOfNode(t.tagName)),Kf):Ur(r.map(Gn),!0)}function Ls(){var t=Dr(fm.JSX,1920,void 0),n=t&&k(t.exports,fm.ElementAttributesPropertyNameContainer,793064),r=n&&Ht(n),a=r&&Cn(r)
return a?0===a.length?"":1===a.length?a[0].name:void c(n.declarations[0],e.Diagnostics.The_global_type_JSX_0_may_not_have_more_than_one_property,fm.ElementAttributesPropertyNameContainer):void 0}function Bs(t,n,r){if(n||(n=j_(t.tagName)),524288&n.flags){var a=n.types
return Ur(a.map(function(e){return Bs(t,e,r)}),!0)}if(2&n.flags)return Jf
if(32&n.flags){var i=Fs(fm.IntrinsicElements)
if(i!==Kf){var o=n.text,s=An(i,o)
if(s)return bt(s)
var _=In(i,0)
if(_)return _
c(t,e.Diagnostics.Property_0_does_not_exist_on_type_1,o,"JSX."+fm.IntrinsicElements)}return Jf}var u=Ms(t,n)
if((!r||!Na(u,r))&&sm){var l=n&&Pn(n,0),d=l&&l.length>0&&l[0],p=d&&Gn(d),f=p&&(0===d.parameters.length?Zf:bt(d.parameters[0]))
if(p&&Na(p,sm)){var g=Fs(fm.IntrinsicAttributes)
return g!==Kf&&(f=mn(g,f)),f}}if(r&&Va(u,r,mm,t,e.Diagnostics.JSX_element_type_0_is_not_a_constructor_function_for_JSX_elements),Qe(u))return u
var m=Ls()
if(void 0===m)return Jf
if(""===m)return u
var y=Xe(u,m)
if(y){if(Qe(y)||y===Kf)return y
if(524288&y.flags)return c(t.tagName,e.Diagnostics.JSX_element_attributes_type_0_may_not_be_a_union_type,Fe(y)),Jf
var h=y,v=Fs(fm.IntrinsicClassAttributes)
if(v!==Kf){var k=Et(v.symbol)
k?1===k.length&&(h=mn(_r(v,[u]),h)):h=mn(y,v)}var b=Fs(fm.IntrinsicAttributes)
return b!==Kf&&(h=mn(b,h)),h}return Zf}function Js(e){var t=h(e)
if(!t.resolvedJsxType){if(Ps(e.tagName)){var n=Is(e)
return 1&t.jsxFlags?t.resolvedJsxType=bt(n):2&t.jsxFlags?t.resolvedJsxType=nr(n,0).type:t.resolvedJsxType=Kf}var r=zs()
return t.resolvedJsxType=Bs(e,void 0,r)}return t.resolvedJsxType}function Ks(e){var t=Js(e.parent),n=An(t,e.name.text)
return n||Lf}function zs(){return Pg||(Pg=Sr(fm.JSX,fm.ElementClass)),Pg}function js(){var e=Fs(fm.IntrinsicElements)
return e?Cn(e):kf}function Us(t){0===(xf.jsx||0)&&c(t,e.Diagnostics.Cannot_use_JSX_unless_the_jsx_flag_is_provided),void 0===sm&&xf.noImplicitAny&&c(t,e.Diagnostics.JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist)}function qs(t){Jp(t),Us(t)
var n=2===xf.jsx?e.Diagnostics.Cannot_find_name_0:void 0,r=xf.reactNamespace?xf.reactNamespace:"React",a=D(t.tagName,r,107455,n,r)
a&&(y(a).referenced=!0)
for(var i=Js(t),o=e.createMap(),s=!1,_=t.attributes.length-1;_>=0;_--)if(246===t.attributes[_].kind)Os(t.attributes[_],i,o)
else{e.Debug.assert(247===t.attributes[_].kind)
var u=Rs(t.attributes[_],i,o)
Qe(u)&&(s=!0)}if(i&&!s)for(var l=Cn(i),_=0;_<l.length;_++)536870912&l[_].flags||o[l[_].name]||c(t,e.Diagnostics.Property_0_is_missing_in_type_1,l[_].name,Fe(i))}function Ws(e){return e.expression?j_(e.expression):Kf}function Vs(e){return e.valueDeclaration?e.valueDeclaration.kind:145}function Hs(t){return t.valueDeclaration?e.getCombinedNodeFlags(t.valueDeclaration):134217728&t.flags?36:0}function Gs(t,n,r,a){var i=Hs(a),o=Ht(ce(a)),s=172===t.kind||218===t.kind?t.name:t.right
if(95===n.kind){if(2>Df&&147!==Vs(a))return c(s,e.Diagnostics.Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword),!1
if(128&i)return c(s,e.Diagnostics.Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression,Oe(a),Fe(o)),!1}if(!(24&i))return!0
if(8&i){var _=Bl(ce(a))
return Sd(t,_)?!0:(c(s,e.Diagnostics.Property_0_is_private_and_only_accessible_within_class_1,Oe(a),Fe(o)),!1)}if(95===n.kind)return!0
var u=Cd(t,function(e){var t=Ht(se(e))
return Dt(t,o)?t:void 0})
return u?32&i?!0:(268435456&r.flags&&(r=ir(r)),98304&xt(r).flags&&Dt(r,u)?!0:(c(s,e.Diagnostics.Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1,Oe(a),Fe(u)),!1)):(c(s,e.Diagnostics.Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses,Oe(a),Fe(o)),!1)}function Xs(t){var n=j_(t)
if(Ef){var r=6144&li(n)
return r&&c(t,2048&r?4096&r?e.Diagnostics.Object_is_possibly_null_or_undefined:e.Diagnostics.Object_is_possibly_undefined:e.Diagnostics.Object_is_possibly_null),fi(n)}return n}function Qs(e){return $s(e,e.expression,e.name)}function Ys(e){return $s(e,e.left,e.right)}function $s(t,n,r){var a=Xs(n)
if(Qe(a))return a
var i=Tn(bi(a))
if(i===Kf||16384&a.flags&&Qe(i))return i
var o=An(i,r.text)
if(!o)return r.text&&!S(t)&&c(r,e.Diagnostics.Property_0_does_not_exist_on_type_1,e.declarationNameToString(r),Fe(268435456&a.flags?i:a)),Kf
Sf&&106500&o.flags&&o.valueDeclaration&&8&o.valueDeclaration.flags&&(16777216&o.flags?y(o).target.isReferenced=!0:o.isReferenced=!0),h(t).resolvedSymbol=o,o.parent&&32&o.parent.flags&&Gs(t,n,i,o)
var s=bt(o)
return 8&o.flags&&F_(t,s)&&(s=Ht(o)),172===t.kind&&!e.isAssignmentTarget(t)&&(98311&o.flags||8192&o.flags&&524288&s.flags)?So(t,s,!0,void 0):s}function Zs(e,t){var n=172===e.kind?e.expression:e.left,r=j_(n)
if(r!==Kf&&!Qe(r)){var a=An(bi(r),t)
if(a&&a.parent&&32&a.parent.flags)return Gs(e,n,r,a)}return!0}function ec(t){var n=t.initializer
if(219===n.kind){var r=n.declarations[0]
if(r&&!e.isBindingPattern(r.name))return se(r)}else if(69===n.kind)return Mi(n)}function tc(e){return In(e,1)&&!In(e,0)}function nc(e){var t=Eo(e)
if(69===t.kind){var n=Mi(t)
if(3&n.flags)for(var r=e,a=e.parent;a;){if(207===a.kind&&r===a.statement&&ec(a)===n&&tc(j_(a.expression)))return!0
r=a,a=a.parent}}return!1}function rc(t){if(!t.argumentExpression){var n=e.getSourceFileOfNode(t)
if(175===t.parent.kind&&t.parent.expression===t){var r=e.skipTrivia(n.text,t.expression.end),a=t.end
nf(n,r,a-r,e.Diagnostics.new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead)}else{var r=t.end-1,a=t.end
nf(n,r,a-r,e.Diagnostics.Expression_expected)}}var i=Tn(Xs(t.expression)),o=t.argumentExpression?j_(t.argumentExpression):Kf
if(i===Kf)return Kf
var s=m_(i)
if(s&&(!t.argumentExpression||9!==t.argumentExpression.kind))return c(t.argumentExpression,e.Diagnostics.A_const_enum_member_can_only_be_accessed_using_a_string_literal),Kf
if(t.argumentExpression){var _=ac(t.argumentExpression,o)
if(void 0!==_){var u=An(i,_)
if(u)return h(t).resolvedSymbol=u,bt(u)
if(s)return c(t.argumentExpression,e.Diagnostics.Property_0_does_not_exist_on_const_enum_1,_,Oe(i.symbol)),Kf}}var l=Ef?0:6144
if(Ds(o,886|l)){if(Ds(o,340|l)||nc(t.argumentExpression)){var d=Fn(i,1)
if(d)return h(t).resolvedIndexInfo=d,d.type}var p=Fn(i,0)
return p?(h(t).resolvedIndexInfo=p,p.type):(!xf.noImplicitAny||xf.suppressImplicitAnyIndexErrors||Qe(i)||c(t,In(i,1)?e.Diagnostics.Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number:e.Diagnostics.Index_signature_of_object_type_implicitly_has_an_any_type),Jf)}return c(t,e.Diagnostics.An_index_expression_argument_must_be_of_type_string_number_symbol_or_any),Kf}function ac(t,n){if(9===t.kind||8===t.kind)return t.text
if(173===t.kind||172===t.kind){var r=ep(t)
if(void 0!==r)return""+r}if(ic(t,n,!1)){var a=t.name.text
return e.getPropertyNameForKnownSymbolName(a)}}function ic(t,n,r){if(n===Kf)return!1
if(!e.isWellKnownSymbolSyntactically(t))return!1
if(0===(512&n.flags))return r&&c(t,e.Diagnostics.A_computed_property_name_of_the_form_0_must_be_of_type_symbol,e.getTextOfNode(t)),!1
var a=t.expression,i=Mi(a)
if(!i)return!1
var o=rg()
return o?i!==o?(r&&c(a,e.Diagnostics.Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object),!1):!0:!1}function oc(t){return 176===t.kind?j_(t.template):143!==t.kind&&e.forEach(t.arguments,function(e){j_(e)}),Mg}function sc(e){return oc(e),Lg}function cc(t,n){var r,a,i,o,s=0,c=-1
e.Debug.assert(!n.length)
for(var _=0,u=t;_<u.length;_++){var l=u[_],d=l.declaration&&se(l.declaration),p=l.declaration&&l.declaration.parent
a&&d!==a?(i=s=n.length,r=p):r&&p===r?i++:(r=p,i=s),a=d,l.hasLiteralTypes?(c++,o=c,s++):o=i,n.splice(o,0,l)}}function _c(e){for(var t=0;t<e.length;t++){var n=e[t]
if(n&&191===n.kind)return t}return-1}function uc(t,n,r,a){void 0===a&&(a=!1)
var i,o,s,c,_=-1
if(176===t.kind){var u=t
if(i=n.length,o=void 0,189===u.template.kind){var l=u.template,d=e.lastOrUndefined(l.templateSpans)
e.Debug.assert(void 0!==d),s=e.nodeIsMissing(d.literal)||!!d.literal.isUnterminated}else{var p=u.template
e.Debug.assert(11===p.kind),s=!!p.isUnterminated}}else if(143===t.kind)c=!0,o=void 0,i=hc(t,void 0,r)
else{var f=t
if(!f.arguments)return e.Debug.assert(175===f.kind),0===r.minArgumentCount
i=a?n.length+1:n.length,s=f.arguments.end===f.end,o=f.typeArguments,_=_c(n)}var g=!o||r.typeParameters&&o.length===r.typeParameters.length
if(!g)return!1
if(_>=0)return Za(r,_)
if(!r.hasRestParameter&&i>r.parameters.length)return!1
var m=i>=r.minArgumentCount
return s||m}function lc(e){if(2588672&e.flags){var t=kn(e)
if(1===t.callSignatures.length&&0===t.constructSignatures.length&&0===t.properties.length&&!t.stringIndexInfo&&!t.numberIndexInfo)return t.callSignatures[0]}}function dc(e,t,n){var r=Ti(e.typeParameters,!0)
return Si(t,e,function(e,t){Ni(r,ka(e,n),t)}),Qn(e,Ii(r))}function pc(e,t,n,r,a){for(var i=t.typeParameters,o=la(a),s=0;s<i.length;s++)a.inferences[s].isFixed||(a.inferredTypes[s]=void 0)
void 0===a.failedTypeParameterIndex||a.inferences[a.failedTypeParameterIndex].isFixed||(a.failedTypeParameterIndex=void 0)
var c=Hn(t)
if(c){var _=mc(e),u=_?j_(_):Yf
Ni(a,u,c)}for(var l=hc(e,n,t),s=0;l>s;s++){var d=Cc(e,n,s)
if(void 0===d||193!==d.kind){var p=jc(t,s),f=Dc(e,s,d)
if(void 0===f){var g=r&&void 0!==r[s]?da:o
f=L_(d,p,g)}Ni(a,f,p)}}if(r)for(var s=0;l>s;s++)if(r[s]===!1){var d=n[s],p=jc(t,s)
Ni(a,L_(d,p,o),p)}Ii(a)}function fc(t,n,r,a,i){for(var o,s=t.typeParameters,c=!0,_=0;_<s.length;_++)if(c){var u=ir(s[_])
if(u){var l=void 0,d=e.Diagnostics.Type_0_does_not_satisfy_the_constraint_1
a&&i&&(l=e.chainDiagnosticMessages(l,d),d=i),o||(o=_a(s,r))
var p=r[_]
c=Ia(p,rn(ka(u,o),p),a?n[_]:void 0,d,l)}}return c}function gc(t,n,r,a,i,o){var s=Hn(r)
if(s&&s!==Yf&&175!==t.kind){var c=mc(t),_=c?j_(c):Yf,u=o?c||t:void 0,l=e.Diagnostics.The_this_context_of_type_0_is_not_assignable_to_method_s_this_of_type_1
if(!Va(_,Hn(r),a,u,l))return!1}for(var d=e.Diagnostics.Argument_of_type_0_is_not_assignable_to_parameter_of_type_1,p=hc(t,n,r),f=0;p>f;f++){var g=Cc(t,n,f)
if(void 0===g||193!==g.kind){var m=jc(r,f),y=Dc(t,f,g)
void 0===y&&(y=L_(g,m,i&&i[f]?da:void 0))
var u=o?Sc(t,f,g):void 0
if(!Va(y,m,a,u,d))return!1}}return!0}function mc(e){if(174===e.kind){var t=e.expression
if(172===t.kind)return t.expression
if(173===t.kind)return t.expression}}function yc(t){var n
if(176===t.kind){var r=t.template
n=[void 0],189===r.kind&&e.forEach(r.templateSpans,function(e){n.push(e.expression)})}else{if(143===t.kind)return
n=t.arguments||kf}return n}function hc(e,t,n){if(143!==e.kind)return t.length
switch(e.parent.kind){case 221:case 192:return 1
case 145:return 2
case 147:case 149:case 150:return 0===Df?2:n.parameters.length>=3?3:2
case 142:return 3}}function vc(t){if(221===t.kind){var n=se(t)
return bt(n)}if(142===t.kind&&(t=t.parent,148===t.kind)){var n=se(t)
return bt(n)}return 145===t.kind||147===t.kind||149===t.kind||150===t.kind?Md(t):(e.Debug.fail("Unsupported decorator target."),Kf)}function kc(t){if(221===t.kind)return e.Debug.fail("Class decorators should not have a second synthetic argument."),Kf
if(142===t.kind&&(t=t.parent,148===t.kind))return Jf
if(145===t.kind||147===t.kind||149===t.kind||150===t.kind){var n=t
switch(n.name.kind){case 69:case 8:case 9:return $r(32,n.name.text)
case 140:var r=Ss(n.name)
return g_(r,512)?r:Wf
default:return e.Debug.fail("Unsupported property name."),Kf}}return e.Debug.fail("Unsupported decorator target."),Kf}function bc(t){if(221===t.kind)return e.Debug.fail("Class decorators should not have a third synthetic argument."),Kf
if(142===t.kind)return Vf
if(145===t.kind)return e.Debug.fail("Property decorators should not have a third synthetic argument."),Kf
if(147===t.kind||149===t.kind||150===t.kind){var n=Od(t)
return Tr(n)}return e.Debug.fail("Unsupported decorator target."),Kf}function xc(t,n){return 0===n?vc(t.parent):1===n?kc(t.parent):2===n?bc(t.parent):(e.Debug.fail("Decorators should not have a fourth synthetic argument."),Kf)}function Dc(e,t,n){return 143===e.kind?xc(e,t):0===t&&176===e.kind?gg():void 0}function Cc(e,t,n){return 143===e.kind||0===n&&176===e.kind?void 0:t[n]}function Sc(e,t,n){return 143===e.kind?e.expression:0===t&&176===e.kind?e.template:n}function Tc(t,n,r,i){function o(n,r,a,o){var s
s=e.chainDiagnosticMessages(s,n,r,a,o),i&&(s=e.chainDiagnosticMessages(s,i)),om.add(e.createDiagnosticForNodeFromMessageChain(t,s))}function s(n,r,a){void 0===a&&(a=!1)
for(var i=0,o=n;i<o.length;i++){var s=o[i]
if(uc(t,p,s,a)){for(var _=void 0,u=void 0,l=s.typeParameters?Ti(s.typeParameters,!1):void 0;;){if(_=s,_.typeParameters){var f=void 0
if(c?(f=e.map(c,aa),u=fc(_,c,f,!1)):(pc(t,_,p,d,l),u=void 0===l.failedTypeParameterIndex,f=l.inferredTypes),!u)break
_=Qn(_,f)}if(!gc(t,p,_,r,d,!1))break
var h=d?e.indexOf(d,!0):-1
if(0>h)return _
d[h]=!1}if(s.typeParameters){var v=_
u?g=v:(m=s,c||(y=l))}else e.Debug.assert(s===_),g=s}}}var c,_=176===t.kind,u=143===t.kind
_||u||(c=t.typeArguments,95!==t.expression.kind&&e.forEach(c,_d))
var l=r||[]
if(cc(n,l),!l.length)return o(e.Diagnostics.Supplied_parameters_do_not_match_any_signature_of_call_target),sc(t)
var d,p=yc(t)
if(!u)for(var f=_?1:0;f<p.length;f++)xa(p[f])&&(d||(d=Array(p.length)),d[f]=!0)
var g,m,y,h,v=r&&174===t.kind&&t.arguments.hasTrailingComma
if(l.length>1&&(h=s(l,gm,v)),h||(g=void 0,m=void 0,y=void 0,h=s(l,mm,v)),h)return h
if(g)gc(t,p,g,mm,void 0,!0)
else if(m)if(_||u||!c){e.Debug.assert(y.failedTypeParameterIndex>=0)
var k=m.typeParameters[y.failedTypeParameterIndex],b=Ri(y,y.failedTypeParameterIndex),x=e.chainDiagnosticMessages(void 0,e.Diagnostics.The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly,Fe(k))
i&&(x=e.chainDiagnosticMessages(x,i)),ni(b,t.expression||t.tag,x)}else{var D=t.typeArguments
fc(m,D,e.map(D,aa),!0,i)}else o(e.Diagnostics.Supplied_parameters_do_not_match_any_signature_of_call_target)
if(!a)for(var C=0,S=l;C<S.length;C++){var T=S[C]
if(uc(t,p,T))return T.typeParameters&&c&&(T=Qn(T,e.map(c,aa))),T}return sc(t)}function Ec(t,n){if(95===t.expression.kind){var r=Uo(t.expression)
if(r!==Kf){var a=e.getClassExtendsHeritageClauseElement(e.getContainingClass(t))
if(a){var i=Ot(r,a.typeArguments)
return Tc(t,i,n)}}return oc(t)}var o=Xs(t.expression),s=Tn(o)
if(s===Kf)return sc(t)
var _=Pn(s,0),u=Pn(s,1)
return Qe(o)||Qe(s)&&16384&o.flags||!_.length&&!u.length&&!(524288&o.flags)&&Na(o,og)?(o!==Kf&&t.typeArguments&&c(t,e.Diagnostics.Untyped_function_calls_may_not_accept_type_arguments),oc(t)):_.length?Tc(t,_,n):(u.length?c(t,e.Diagnostics.Value_of_type_0_is_not_callable_Did_you_mean_to_include_new,Fe(o)):c(t,e.Diagnostics.Cannot_invoke_an_expression_whose_type_lacks_a_call_signature),sc(t))}function wc(t,n){if(t.arguments&&1>Df){var r=_c(t.arguments)
r>=0&&c(t.arguments[r],e.Diagnostics.Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher)}var a=Xs(t.expression)
if(a=Tn(a),a===Kf)return sc(t)
var i=a.symbol&&Bl(a.symbol)
if(i&&128&i.flags)return c(t,e.Diagnostics.Cannot_create_an_instance_of_the_abstract_class_0,e.declarationNameToString(i.name)),sc(t)
if(Qe(a))return t.typeArguments&&c(t,e.Diagnostics.Untyped_function_calls_may_not_accept_type_arguments),oc(t)
var o=Pn(a,1)
if(o.length)return Ac(t,o[0])?Tc(t,o,n):sc(t)
var s=Pn(a,0)
if(s.length){var _=Tc(t,s,n)
return Gn(_)!==Yf&&c(t,e.Diagnostics.Only_a_void_function_can_be_called_with_the_new_keyword),Hn(_)===Yf&&c(t,e.Diagnostics.A_function_that_is_called_with_the_new_keyword_cannot_have_a_this_type_that_is_void),_}return c(t,e.Diagnostics.Cannot_use_new_with_an_expression_whose_type_lacks_a_call_or_construct_signature),sc(t)}function Ac(t,n){if(!n||!n.declaration)return!0
var r=n.declaration,a=r.flags
if(!(24&a))return!0
var i=Bl(r.parent.symbol),o=Ht(r.parent.symbol)
if(!Sd(t,i)){var s=e.getContainingClass(t)
if(s){var _=Od(s),u=Ft(_)
if(u.length){var l=u[0]
if(16&a&&l.symbol===r.parent.symbol)return!0}}return 8&a&&c(t,e.Diagnostics.Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration,Fe(o)),16&a&&c(t,e.Diagnostics.Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration,Fe(o)),!1}return!0}function Nc(t,n){var r=j_(t.tag),a=Tn(r)
if(a===Kf)return sc(t)
var i=Pn(a,0)
return Qe(r)||!i.length&&!(524288&r.flags)&&Na(r,og)?oc(t):i.length?Tc(t,i,n):(c(t,e.Diagnostics.Cannot_invoke_an_expression_whose_type_lacks_a_call_signature),sc(t))}function Pc(t){switch(t.parent.kind){case 221:case 192:return e.Diagnostics.Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression
case 142:return e.Diagnostics.Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression
case 145:return e.Diagnostics.Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression
case 147:case 149:case 150:return e.Diagnostics.Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression}}function Oc(t,n){var r=j_(t.expression),a=Tn(r)
if(a===Kf)return sc(t)
var i=Pn(a,0)
if(r===Jf||!i.length&&!(524288&r.flags)&&Na(r,og))return oc(t)
var o=Pc(t)
if(!i.length){var s=void 0
return s=e.chainDiagnosticMessages(s,e.Diagnostics.Cannot_invoke_an_expression_whose_type_lacks_a_call_signature),s=e.chainDiagnosticMessages(s,o),om.add(e.createDiagnosticForNodeFromMessageChain(t,s)),sc(t)}return Tc(t,i,n,o)}function Rc(t,n){switch(t.kind){case 174:return Ec(t,n)
case 175:return wc(t,n)
case 176:return Nc(t,n)
case 143:return Oc(t,n)}e.Debug.fail("Branch in 'resolveSignature' should be unreachable.")}function Fc(e,t){var n=h(e),r=n.resolvedSignature
if(r&&r!==Bg&&!t)return r
n.resolvedSignature=Bg
var a=Rc(e,t)
return n.resolvedSignature=zg===jg?a:r,a}function Ic(e){return h(e).resolvedSignature===Bg?Bg:Fc(e)}function Mc(e){var t=y(e)
return t.inferredClassType||(t.inferredClassType=ve(e,e.members,kf,kf,void 0,void 0)),t.inferredClassType}function Lc(t){Ap(t,t.typeArguments)||Pp(t,t.arguments)
var n=Fc(t)
if(95===t.expression.kind)return Yf
if(175===t.kind){var r=n.declaration
if(r&&148!==r.kind&&152!==r.kind&&157!==r.kind&&!e.isJSDocConstructSignature(r)){var a=69===t.expression.kind?Mi(t.expression):j_(t.expression).symbol
return a&&a.members&&(16&a.flags||e.isDeclarationOfFunctionExpression(a))?Mc(a):(xf.noImplicitAny&&c(t,e.Diagnostics.new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type),Jf)}}return e.isInJavaScriptFile(t)&&e.isRequireCall(t,!0)?Vn(t.arguments[0]):Gn(n)}function Bc(e){return Gn(Fc(e))}function Jc(t){var n=hi(j_(t.expression))
_d(t.type)
var r=aa(t.type)
if(a&&r!==Kf){var i=bi(n)
Oa(r,i)||Ma(n,r,t,e.Diagnostics.Type_0_cannot_be_converted_to_type_1)}return r}function Kc(e){return fi(j_(e.expression))}function zc(e){var t=bt(e)
if(Ef){var n=e.valueDeclaration
if(n&&n.initializer)return di(t,2048)}return t}function jc(e,t){return e.hasRestParameter?t<e.parameters.length-1?zc(e.parameters[t]):Xn(e):t<e.parameters.length?zc(e.parameters[t]):Jf}function Uc(t,n,r){var a=t.parameters.length-(t.hasRestParameter?1:0)
n.thisParameter&&(t.thisParameter||(t.thisParameter=mi(n.thisParameter,void 0)),Wc(t.thisParameter,bt(n.thisParameter),r))
for(var i=0;a>i;i++){var o=t.parameters[i],s=jc(n,i)
Wc(o,s,r)}if(t.hasRestParameter&&Za(n,t.parameters.length-1)){var o=e.lastOrUndefined(t.parameters),s=bt(e.lastOrUndefined(n.parameters))
Wc(o,s,r)}}function qc(t){if(e.isBindingPattern(t.name))for(var n=0,r=t.name.elements;n<r.length;n++){var a=r[n]
193!==a.kind&&(69===a.name.kind&&(y(se(a)).type=tt(a)),qc(a))}}function Wc(e,t,n){var r=y(e)
r.type?ys(n)&&Ni(n.context,r.type,ka(t,n)):(r.type=ka(t,n),r.type!==Zf||167!==e.valueDeclaration.name.kind&&168!==e.valueDeclaration.name.kind||(r.type=_t(e.valueDeclaration.name)),qc(e.valueDeclaration))}function Vc(t){var n=e.getJSDocReturnTag(t)
return n&&n.typeExpression?aa(n.typeExpression.type):void 0}function Hc(e){var t=Sg()
return t!==eg?(e=xu(e),_r(t,[e])):Zf}function Gc(t,n){var r=Hc(n)
return r===Zf?(c(t,e.Diagnostics.An_async_function_or_method_must_have_a_valid_awaitable_return_type),Kf):r}function Xc(t,n){var r=fs(t)
if(!t.body)return Kf
var a,i=e.isAsyncFunctionLike(t)
if(199!==t.body.kind)a=B_(t.body,n),i&&(a=Du(a,t,e.Diagnostics.Return_expression_in_async_function_does_not_have_a_valid_callable_then_member))
else{var o=void 0,s=!!t.asteriskToken
if(s){if(o=Qc(t,n),0===o.length){var _=Ar(Jf)
return xf.noImplicitAny&&c(t.asteriskToken,e.Diagnostics.Generator_implicitly_has_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_return_type,Fe(_)),_}}else{if(o=Zc(t,n),!o)return i?Gc(t,$f):$f
if(0===o.length)return i?Gc(t,Yf):Yf}if(a=r?Ur(o,!0):ti(o),!a)return s?(c(t,e.Diagnostics.No_best_common_type_exists_among_yield_expressions),Ar(Kf)):(c(t,e.Diagnostics.No_best_common_type_exists_among_return_expressions),i?Gc(t,Ur(o,!0)):Ur(o,!0))
s&&(a=Ar(a))}r||Ci(t,a)
var u=bi(a)
return i?Gc(t,u):u}function Qc(t,n){var r=[]
return e.forEachYieldExpression(t.body,function(t){var a=t.expression
if(a){var i=B_(a,n)
t.asteriskToken&&(i=fl(i,t.expression)),e.contains(r,i)||r.push(i)}}),r}function Yc(e){if(!e.possiblyExhaustive)return!1
var t=j_(e.expression)
if(!si(t))return!1
var n=yo(e)
return n.length?ho(t,n):!1}function $c(t){if(!(32768&t.flags))return!1
var n=e.lastOrUndefined(t.body.statements)
return n&&213===n.kind&&Yc(n)?!1:!0}function Zc(t,n){var r=e.isAsyncFunctionLike(t),a=[],i=$c(t),o=!1
return e.forEachReturnStatement(t.body,function(s){var c=s.expression
if(c){var _=B_(c,n)
r&&(_=Du(_,t,e.Diagnostics.Return_expression_in_async_function_does_not_have_a_valid_callable_then_member)),_===$f?o=!0:e.contains(a,_)||a.push(_)}else i=!0}),0!==a.length||i||!o&&179!==t.kind&&180!==t.kind?(Ef&&a.length&&i&&(e.contains(a,zf)||a.push(zf)),a):void 0}function e_(t,n){if(a&&(!n||!f_(n,1025))&&!e.nodeIsMissing(t.body)&&199===t.body.kind&&$c(t)){var r=65536&t.flags
if(n===$f)c(t.type,e.Diagnostics.A_function_returning_never_cannot_have_a_reachable_end_point)
else if(n&&!r)c(t.type,e.Diagnostics.A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value)
else if(n&&Ef&&!Na(zf,n))c(t.type,e.Diagnostics.Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined)
else if(xf.noImplicitReturns){if(!n){if(!r)return
var i=Gn(Un(t))
if(bl(t,i))return}c(t.type||t,e.Diagnostics.Not_all_code_paths_return_a_value)}}}function t_(t,n){e.Debug.assert(147!==t.kind||e.isObjectLiteralMethod(t))
var r=Cp(t)
if(r||179!==t.kind||Mp(t),n===da&&xa(t))return ud(t),tg
var i=h(t),o=bt(t.symbol),s=xa(t),c=s&&ys(n)
if(c||!(1024&i.flags)){var _=ms(t),u=!!(1024&i.flags)
if(c||!u){if(i.flags|=1024,_){var l=Pn(o,0)[0]
if(s&&Uc(l,_,n||da),c||!t.type&&!l.resolvedReturnType){var d=Xc(t,n)
l.resolvedReturnType||(l.resolvedReturnType=d)}}u||(Y_(t),ud(t))}}return a&&147!==t.kind&&146!==t.kind&&(Hu(t,t.name),Wu(t,t.name)),o}function n_(t){e.Debug.assert(147!==t.kind||e.isObjectLiteralMethod(t))
var n=e.isAsyncFunctionLike(t),r=t.type&&(n?Su(t):aa(t.type))
if(t.asteriskToken||e_(t,r),t.body){if(t.type||Gn(Un(t)),199===t.body.kind)_d(t.body)
else{var a=j_(t.body)
if(r)if(n){var i=Du(a,t.body,e.Diagnostics.Expression_body_for_async_arrow_function_does_not_have_a_valid_callable_then_member)
Ia(i,r,t.body)}else Ia(a,r,t.body)}Fu(t)}}function r_(e,t,n){return Ds(t,340)?!0:(c(e,n),!1)}function a_(e){return e.isReadonly||4&e.flags&&0!==(64&Hs(e))||3&e.flags&&0!==(2048&Hs(e))||98304&e.flags&&!(65536&e.flags)||0!==(8&e.flags)}function i_(t,n){if(a_(n)){if(4&n.flags&&(172===t.kind||173===t.kind)&&97===t.expression.kind){var r=e.getContainingFunction(t)
return r&&148===r.kind?!(r.parent===n.valueDeclaration.parent||r===n.valueDeclaration.parent):!0}return!0}return!1}function o_(e){if(172===e.kind||173===e.kind){var t=Eo(e.expression)
if(69===t.kind){var n=h(t).resolvedSymbol
if(8388608&n.flags){var r=N(n)
return r&&232===r.kind}}}return!1}function s_(e,t,n){var r=Eo(e)
if(69!==r.kind&&172!==r.kind&&173!==r.kind)return c(e,t),!1
var a=h(r),i=_e(a.resolvedSymbol)
if(i){if(i!==Lf&&i!==Nf){if(69===r.kind&&!(3&i.flags))return c(e,t),!1
if(i_(r,i)||o_(r))return c(e,n),!1}}else if(173===r.kind&&a.resolvedIndexInfo&&a.resolvedIndexInfo.isReadonly)return c(e,n),!1
return!0}function c_(e){return j_(e.expression),Xf}function __(e){return j_(e.expression),Wf}function u_(e){return j_(e.expression),jf}function l_(t){a&&(33554432&t.flags||tf(t,e.Diagnostics.await_expression_is_only_allowed_within_an_async_function),Xo(t)&&c(t,e.Diagnostics.await_expressions_cannot_be_used_in_a_parameter_initializer))
var n=j_(t.expression)
return Du(n,t)}function d_(t){var n=j_(t.operand)
if(36===t.operator&&8===t.operand.kind&&F_(t,Vf))return $r(64,""+-t.operand.text)
switch(t.operator){case 35:case 36:case 50:return f_(n,512)&&c(t.operand,e.Diagnostics.The_0_operator_cannot_be_applied_to_type_symbol,e.tokenToString(t.operator)),Vf
case 49:var r=3145728&Yi(n)
return 1048576===r?Gf:2097152===r?Hf:Xf
case 41:case 42:var a=r_(t.operand,fi(n),e.Diagnostics.An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type)
return a&&s_(t.operand,e.Diagnostics.The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer,e.Diagnostics.The_operand_of_an_increment_or_decrement_operator_cannot_be_a_constant_or_a_read_only_property),Vf}return Kf}function p_(t){var n=j_(t.operand),r=r_(t.operand,fi(n),e.Diagnostics.An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type)
return r&&s_(t.operand,e.Diagnostics.The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer,e.Diagnostics.The_operand_of_an_increment_or_decrement_operator_cannot_be_a_constant_or_a_read_only_property),Vf}function f_(e,t){if(e.flags&t)return!0
if(1572864&e.flags)for(var n=e.types,r=0,a=n;r<a.length;r++){var i=a[r]
if(f_(i,t))return!0}return!1}function g_(e,t){if(e.flags&t)return!0
if(524288&e.flags){for(var n=e.types,r=0,a=n;r<a.length;r++){var i=a[r]
if(!g_(i,t))return!1}return!0}if(1048576&e.flags)for(var n=e.types,o=0,s=n;o<s.length;o++){var i=s[o]
if(g_(i,t))return!0}return!1}function m_(e){return 2588672&e.flags&&e.symbol&&y_(e.symbol)}function y_(e){return 0!==(128&e.flags)}function h_(t,n,r,a){return g_(r,8190)&&c(t,e.Diagnostics.The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter),Qe(a)||Aa(a,og)||c(n,e.Diagnostics.The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type),Xf}function v_(t,n,r,a){return Ds(r,886)||c(t,e.Diagnostics.The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol),Ds(a,2605056)||c(n,e.Diagnostics.The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter),Xf}function k_(e,t,n){for(var r=e.properties,a=0,i=r;a<i.length;a++){var o=i[a]
b_(t,o,n)}return t}function b_(t,n,r){if(253===n.kind||254===n.kind){var a=n.name
if(140===a.kind&&Ss(a),et(a))return
var i=Ze(a),o=Qe(t)?t:Xe(t,i)||Cs(i)&&In(t,1)||In(t,0)
if(o)return 254===n.kind?C_(n,o):C_(n.initializer,o)
c(a,e.Diagnostics.Type_0_has_no_property_1_and_no_string_index_signature,Fe(t),e.declarationNameToString(a))}else c(n,e.Diagnostics.Property_assignment_expected)}function x_(e,t,n){for(var r=pl(t,e,!1)||Kf,a=e.elements,i=0;i<a.length;i++)D_(e,t,i,r,n)
return t}function D_(t,n,r,a,i){var o=t.elements,s=o[r]
if(193!==s.kind)if(191!==s.kind){var _=""+r,u=Qe(n)?n:ii(n)?Xe(n,_):a
if(u)return C_(s,u,i)
j_(s),_i(n)?c(s,e.Diagnostics.Tuple_type_0_with_length_1_cannot_be_assigned_to_tuple_with_length_2,Fe(n),lr(n),o.length):c(s,e.Diagnostics.Type_0_has_no_property_1,Fe(n),_)}else if(r<o.length-1)c(s,e.Diagnostics.A_rest_element_must_be_last_in_an_array_destructuring_pattern)
else{var l=s.expression
if(187!==l.kind||56!==l.operatorToken.kind)return C_(l,Nr(a),i)
c(l.operatorToken,e.Diagnostics.A_rest_element_cannot_have_an_initializer)}}function C_(e,t,n){var r
if(254===e.kind){var a=e
a.objectAssignmentInitializer&&(!Ef||2048&li(j_(a.objectAssignmentInitializer))||(t=$i(t,131072)),A_(a.name,a.equalsToken,a.objectAssignmentInitializer,n)),r=e.name}else r=e
return 187===r.kind&&56===r.operatorToken.kind&&(w_(r,n),r=r.left),171===r.kind?k_(r,t,n):170===r.kind?x_(r,t,n):S_(r,t,n)}function S_(t,n,r){var a=j_(t,r)
return s_(t,e.Diagnostics.Invalid_left_hand_side_of_assignment_expression,e.Diagnostics.Left_hand_side_of_assignment_expression_cannot_be_a_constant_or_a_read_only_property)&&Ia(n,a,t,void 0),n}function T_(e,t){return 0!==(6144&t.flags)||Oa(e,t)}function E_(e,t){var n=Na(e,t),r=Na(t,e)
return r&&!n?e:n&&!r?t:Ur([e,t],!0)}function w_(e,t){return A_(e.left,e.operatorToken,e.right,t,e)}function A_(t,n,r,i,o){function s(n){var a=f_(p,512)?t:f_(f,512)?r:void 0
return a?(c(a,e.Diagnostics.The_0_operator_cannot_be_applied_to_type_symbol,e.tokenToString(n)),!1):!0}function _(e){switch(e){case 47:case 67:return 52
case 48:case 68:return 33
case 46:case 66:return 51
default:return}}function u(n){if(a&&d>=56&&68>=d){var r=s_(t,e.Diagnostics.Invalid_left_hand_side_of_assignment_expression,e.Diagnostics.Left_hand_side_of_assignment_expression_cannot_be_a_constant_or_a_read_only_property)
r&&Ia(n,p,t,void 0)}}function l(){c(o||n,e.Diagnostics.Operator_0_cannot_be_applied_to_types_1_and_2,e.tokenToString(n.kind),Fe(p),Fe(f))}var d=n.kind
if(56===d&&(171===t.kind||170===t.kind))return C_(t,j_(r,i),i)
var p=j_(t,i),f=j_(r,i)
switch(d){case 37:case 38:case 59:case 60:case 39:case 61:case 40:case 62:case 36:case 58:case 43:case 63:case 44:case 64:case 45:case 65:case 47:case 67:case 48:case 68:case 46:case 66:6144&p.flags&&(p=f),6144&f.flags&&(f=p),p=fi(p),f=fi(f)
var g=void 0
if(136&p.flags&&136&f.flags&&void 0!==(g=_(n.kind)))c(o||n,e.Diagnostics.The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead,e.tokenToString(n.kind),e.tokenToString(g))
else{var m=r_(t,p,e.Diagnostics.The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type),y=r_(r,f,e.Diagnostics.The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type)
m&&y&&u(Vf)}return Vf
case 35:case 57:6144&p.flags&&(p=f),6144&f.flags&&(f=p),p=fi(p),f=fi(f)
var h=void 0
if(g_(p,340)&&g_(f,340))h=Vf
else if(g_(p,34)||g_(f,34)?h=Wf:(Qe(p)||Qe(f))&&(h=p===Kf||f===Kf?Kf:Jf),h&&!s(d))return h
return h?(57===d&&u(h),h):(l(),Jf)
case 25:case 27:case 28:case 29:return s(d)&&(Oa(p,f)||Oa(f,p)||l()),Xf
case 30:case 31:case 32:case 33:var v=si(p),k=si(f)
return v&&k||(p=v?ci(p):p,f=k?ci(f):f),T_(p,f)||T_(f,p)||l(),Xf
case 91:return h_(t,r,p,f)
case 90:return v_(t,r,p,f)
case 51:return 1048576&Yi(p)?di(f,li(Ef?p:ci(f))):p
case 52:return 2097152&Yi(p)?E_(pi(p),f):p
case 56:return u(f),hi(f)
case 24:return f}}function N_(t){for(var n=t,r=t.parent;r;){if(e.isFunctionLike(r)&&n===r.body)return!1
if(e.isClassLike(n))return!0
n=r,r=r.parent}return!1}function P_(t){if(a&&(8388608&t.flags&&!N_(t)||tf(t,e.Diagnostics.A_yield_expression_is_only_allowed_in_a_generator_body),Xo(t)&&c(t,e.Diagnostics.yield_expressions_cannot_be_used_in_a_parameter_initializer)),t.expression){var n=e.getContainingFunction(t)
if(n&&n.asteriskToken){var r=B_(t.expression,void 0),i=void 0,o=!!t.asteriskToken
if(o&&(i=fl(r,t.expression)),n.type){var s=yl(aa(n.type))||Jf
o?Ia(i,s,t.expression,void 0):Ia(r,s,t.expression,void 0)}}}return Jf}function O_(e,t){j_(e.condition)
var n=j_(e.whenTrue,t),r=j_(e.whenFalse,t)
return E_(n,r)}function R_(e,t){if(524288&e.flags)for(var n=0,r=e.types;n<r.length;n++){var a=r[n]
if(256&a.flags&&a.baseType===t)return!0}return 256&e.flags?e.baseType===t:!1}function F_(e,t){if(ls(e))return!0
var n=us(e)
if(n){if(16384&n.flags){var r=Sn(n)
if(t===r)return!0
n=r}if(2&t.flags)return f_(n,32)
if(4&t.flags)return f_(n,320)
if(8&t.flags)return f_(n,128)
if(16&t.flags)return R_(n,t)}return!1}function I_(e){switch(8===e.kind&&df(e),e.kind){case 9:return F_(e,Wf)?$r(32,e.text):Wf
case 8:return F_(e,Vf)?$r(64,e.text):Vf
case 99:case 84:return F_(e,Xf)?99===e.kind?Hf:Gf:Xf}}function M_(t){return e.forEach(t.templateSpans,function(e){j_(e.expression)}),Wf}function L_(e,t,n){var r=e.contextualType
e.contextualType=t
var a=j_(e,n)
return e.contextualType=r,a}function B_(e,t){var n=h(e)
if(!n.resolvedType){var r=zg
zg=jg,n.resolvedType=j_(e,t),zg=r}return n.resolvedType}function J_(e,t){return 140===e.name.kind&&Ss(e.name),j_(e.initializer,t)}function K_(e,t){Vp(e),140===e.name.kind&&Ss(e.name)
var n=t_(e,t)
return z_(e,n,t)}function z_(e,t,n){if(ys(n)){var r=lc(t)
if(r&&r.typeParameters){var a=_s(e)
if(a){var i=lc(a)
if(i&&!i.typeParameters)return $n(dc(r,i,n))}}}return t}function j_(t,n){var r
if(139===t.kind)r=Ys(t)
else{var a=U_(t,n)
r=z_(t,a,n)}if(m_(r)){var i=172===t.parent.kind&&t.parent.expression===t||173===t.parent.kind&&t.parent.expression===t||(69===t.kind||139===t.kind)&&Ed(t)
i||c(t,e.Diagnostics.const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment)}return r}function U_(t,n){switch(t.kind){case 69:return Oo(t)
case 97:return Ko(t)
case 95:return Uo(t)
case 93:return qf
case 9:case 8:case 99:case 84:return I_(t)
case 189:return M_(t)
case 11:return Wf
case 10:return dg
case 170:return ks(t,n)
case 171:return Es(t,n)
case 172:return Qs(t)
case 173:return rc(t)
case 174:case 175:return Lc(t)
case 176:return Bc(t)
case 178:return j_(t.expression,n)
case 192:return Ol(t)
case 179:case 180:return t_(t,n)
case 182:return __(t)
case 177:case 195:return Jc(t)
case 196:return Kc(t)
case 181:return c_(t)
case 183:return u_(t)
case 184:return l_(t)
case 185:return d_(t)
case 186:return p_(t)
case 187:return w_(t,n)
case 188:return O_(t,n)
case 191:return hs(t,n)
case 193:return jf
case 190:return P_(t)
case 248:return Ws(t)
case 241:return As(t)
case 242:return ws(t)
case 243:e.Debug.fail("Shouldn't ever directly check a JsxOpeningElement")}return Kf}function q_(t){t.expression&&tf(t.expression,e.Diagnostics.Type_expected),_d(t.constraint),ir(Wt(se(t))),a&&Al(t.name,e.Diagnostics.Type_parameter_name_cannot_be_0)}function W_(t){gp(t)||mp(t),$u(t)
var n=e.getContainingFunction(t)
92&t.flags&&(n=e.getContainingFunction(t),148===n.kind&&e.nodeIsPresent(n.body)||c(t,e.Diagnostics.A_parameter_property_is_only_allowed_in_a_constructor_implementation)),t.questionToken&&e.isBindingPattern(t.name)&&n.body&&c(t,e.Diagnostics.A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature),"this"===t.name.text&&(0!==e.indexOf(n.parameters,t)&&c(t,e.Diagnostics.A_this_parameter_must_be_the_first_parameter),(148===n.kind||152===n.kind||157===n.kind)&&c(t,e.Diagnostics.A_constructor_cannot_have_a_this_parameter)),!t.dotDotDotToken||e.isBindingPattern(t.name)||ri(bt(t.symbol))||c(t,e.Diagnostics.A_rest_parameter_must_be_of_an_array_type)}function V_(e){return e.asteriskToken&&e.body?147===e.kind||220===e.kind||179===e.kind:!1}function H_(e,t){if(e)for(var n=0;n<e.length;n++){var r=e[n]
if(69===r.name.kind&&r.name.text===t.text)return n}return-1}function G_(t){var n=X_(t)
if(!n)return void c(t,e.Diagnostics.A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods)
var r=Un(n).typePredicate
if(r){var a=t.parameterName
if(e.isThisTypePredicate(r))ra(a)
else if(r.parameterIndex>=0)if(n.parameters[r.parameterIndex].dotDotDotToken)c(a,e.Diagnostics.A_type_predicate_cannot_reference_a_rest_parameter)
else{var i=e.chainDiagnosticMessages(void 0,e.Diagnostics.A_type_predicate_s_type_must_be_assignable_to_its_parameter_s_type)
Ia(r.type,Od(n.parameters[r.parameterIndex]),t.type,void 0,i)}else if(a){for(var o=!1,s=0,_=n.parameters;s<_.length;s++){var u=_[s].name
if(e.isBindingPattern(u)&&Q_(u,a,r.parameterName)){o=!0
break}}o||c(t.parameterName,e.Diagnostics.Cannot_find_parameter_0,r.parameterName)}}}function X_(e){switch(e.parent.kind){case 180:case 151:case 220:case 179:case 156:case 147:case 146:var t=e.parent
if(e===t.type)return t}}function Q_(t,n,r){for(var a=0,i=t.elements;a<i.length;a++){var o=i[a].name
if(69===o.kind&&o.text===r)return c(n,e.Diagnostics.A_type_predicate_cannot_reference_element_0_in_a_binding_pattern,r),!0
if((168===o.kind||167===o.kind)&&Q_(o,n,r))return!0}}function Y_(t){if(153===t.kind?Ep(t):(156===t.kind||220===t.kind||157===t.kind||151===t.kind||148===t.kind||152===t.kind)&&Cp(t),Nl(t.typeParameters),e.forEach(t.parameters,W_),t.type&&_d(t.type),a){if(Uu(t),xf.noImplicitAny&&!t.type)switch(t.kind){case 152:c(t,e.Diagnostics.Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type)
break
case 151:c(t,e.Diagnostics.Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type)}if(t.type)if(Df>=2&&V_(t)){var n=aa(t.type)
if(n===Yf)c(t.type,e.Diagnostics.A_generator_cannot_have_a_void_type_annotation)
else{var r=yl(n)||Jf,i=Ar(r)
Ia(i,n,t.type)}}else e.isAsyncFunctionLike(t)&&Su(t)
Sf&&!t.body&&Ku(t)}}function $_(t){function n(t,n,r,a){var i=t[r]
i?i&a?c(n,e.Diagnostics.Duplicate_identifier_0,e.getTextOfNode(n)):t[r]=i|a:t[r]=a}var r
!function(e){e[e.Getter=1]="Getter",e[e.Setter=2]="Setter",e[e.Property=3]="Property"}(r||(r={}))
for(var a=e.createMap(),i=e.createMap(),o=0,s=t.members;o<s.length;o++){var _=s[o]
if(148===_.kind)for(var u=0,l=_.parameters;u<l.length;u++){var d=l[u]
e.isParameterPropertyDeclaration(d)&&n(a,d.name,d.name.text,3)}else{var p=e.forEach(_.modifiers,function(e){return 113===e.kind}),f=p?i:a,g=_.name&&e.getPropertyNameForPropertyNameNode(_.name)
if(g)switch(_.kind){case 149:n(f,_.name,g,1)
break
case 150:n(f,_.name,g,2)
break
case 145:n(f,_.name,g,3)}}}}function Z_(t){for(var n=e.createMap(),r=0,a=t.members;r<a.length;r++){var i=a[r]
if(144==i.kind){var o=void 0
switch(i.name.kind){case 9:case 8:case 69:o=i.name.text
break
default:continue}n[o]?(c(i.symbol.valueDeclaration.name,e.Diagnostics.Duplicate_identifier_0,o),c(i.name,e.Diagnostics.Duplicate_identifier_0,o)):n[o]=!0}}}function eu(t){if(222===t.kind){var n=se(t)
if(n.declarations.length>0&&n.declarations[0]!==t)return}var r=Zn(se(t))
if(r)for(var a=!1,i=!1,o=0,s=r.declarations;o<s.length;o++){var _=s[o],u=_
if(1===u.parameters.length&&u.parameters[0].type)switch(u.parameters[0].type.kind){case 132:i?c(u,e.Diagnostics.Duplicate_string_index_signature):i=!0
break
case 130:a?c(u,e.Diagnostics.Duplicate_number_index_signature):a=!0}}}function tu(e){gp(e)||mp(e)||sf(e)||Ip(e.name),$u(e)}function nu(t){Vp(t)||Ip(t.name),Ru(t),128&t.flags&&t.body&&c(t,e.Diagnostics.Method_0_cannot_have_an_implementation_because_it_is_marked_abstract,e.declarationNameToString(t.name))}function ru(t){function n(e){return!(145!==e.kind||32&e.flags||!e.initializer)}Y_(t),af(t)||of(t),_d(t.body),Fu(t)
var r=se(t),i=e.getDeclarationOfKind(r,t.kind)
if(t===i&&yu(r),!e.nodeIsMissing(t.body)&&a){var o=t.parent
if(e.getClassExtendsHeritageClauseElement(o)){var s=Jo(o),_=Bo(t)
if(_){s&&c(_,e.Diagnostics.A_constructor_cannot_contain_a_super_call_when_its_class_extends_null)
var u=e.forEach(t.parent.members,n)||e.forEach(t.parameters,function(e){return 92&e.flags})
if(u){for(var l=t.body.statements,d=void 0,p=0,f=l;p<f.length;p++){var g=f[p]
if(202===g.kind&&e.isSuperCallExpression(g.expression)){d=g
break}if(!e.isPrologueDirective(g))break}d||c(t,e.Diagnostics.A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties)}}else s||c(t,e.Diagnostics.Constructors_for_derived_classes_must_contain_a_super_call)}}}function au(t){if(a){if(Cp(t)||zp(t)||Ip(t.name),Pu(t),Y_(t),149===t.kind&&!e.isInAmbientContext(t)&&e.nodeIsPresent(t.body)&&32768&t.flags&&(65536&t.flags||c(t.name,e.Diagnostics.A_get_accessor_must_return_a_value)),140===t.name.kind&&Ss(t.name),!e.hasDynamicName(t)){var n=149===t.kind?150:149,r=e.getDeclarationOfKind(t.symbol,n)
r&&((28&t.flags)!==(28&r.flags)&&c(t.name,e.Diagnostics.Getter_and_setter_accessors_do_not_agree_in_visibility),(128&t.flags)!==(128&r.flags)&&c(t.name,e.Diagnostics.Accessors_must_both_be_abstract_or_non_abstract),iu(t,r,pt,e.Diagnostics.get_and_set_accessor_must_have_the_same_type),iu(t,r,gt,e.Diagnostics.get_and_set_accessor_must_have_the_same_this_type))}var i=mt(se(t))
149===t.kind&&e_(t,i)}171!==t.parent.kind?(_d(t.body),Fu(t)):ud(t)}function iu(e,t,n,r){var a=n(e),i=n(t)
a&&i&&!Ta(a,i)&&c(e,r)}function ou(e){_d(e.body),Fu(e)}function su(e){Pu(e)}function cu(t,n){for(var r,a,i=!0,o=0;o<t.length;o++){var s=ir(t[o])
if(s){r||(r=e.map(n,aa),a=_a(t,r))
var c=r[o]
i=i&&Ia(c,rn(ka(s,a),c),n[o],e.Diagnostics.Type_0_does_not_satisfy_the_constraint_1)}}return i}function _u(t){Ap(t,t.typeArguments)
var n=hr(t)
if(n!==Kf){if(t.typeArguments&&(e.forEach(t.typeArguments,_d),a)){var r=h(t).resolvedSymbol,i=524288&r.flags?y(r).typeParameters:n.target.localTypeParameters
cu(i,t.typeArguments)}16&n.flags&&!n.memberTypes&&8&h(t).resolvedSymbol.flags&&c(t,e.Diagnostics.Enum_type_0_has_members_with_initializers_that_are_not_literals,Fe(n))}}function uu(e){vr(e)}function lu(t){if(e.forEach(t.members,_d),a){var n=Qr(t)
wl(n),eu(t),Z_(t)}}function du(e){_d(e.elementType)}function pu(t){var n=bp(t.elementTypes)
n||0!==t.elementTypes.length||rf(t,e.Diagnostics.A_tuple_type_element_list_cannot_be_empty),e.forEach(t.elementTypes,_d)}function fu(t){e.forEach(t.types,_d)}function gu(t){return 8&t.flags&&e.isInAmbientContext(t)}function mu(t,n){var r=e.getCombinedNodeFlags(t)
return 222!==t.parent.kind&&221!==t.parent.kind&&192!==t.parent.kind&&e.isInAmbientContext(t)&&(2&r||(r|=1),r|=2),r&n}function yu(t){function n(e,t){var n=void 0!==t&&t.parent===e[0].parent
return n?t:e[0]}function r(t,r,a,i,o){var s=i^o
if(0!==s){var _=mu(n(t,r),a)
e.forEach(t,function(t){var n=mu(t,a)^_
1&n?c(t.name,e.Diagnostics.Overload_signatures_must_all_be_exported_or_non_exported):2&n?c(t.name,e.Diagnostics.Overload_signatures_must_all_be_ambient_or_non_ambient):24&n?c(t.name||t,e.Diagnostics.Overload_signatures_must_all_be_public_private_or_protected):128&n&&c(t.name,e.Diagnostics.Overload_signatures_must_all_be_abstract_or_non_abstract)})}}function i(t,r,a,i){if(a!==i){var o=e.hasQuestionToken(n(t,r))
e.forEach(t,function(t){var n=e.hasQuestionToken(t)!==o
n&&c(t.name,e.Diagnostics.Overload_signatures_must_all_be_optional_or_required)})}}function o(t){if(!t.name||!e.nodeIsMissing(t.name)){var n=!1,r=e.forEachChild(t.parent,function(e){return n?e:void(n=e===t)})
if(r&&r.pos===t.end&&r.kind===t.kind){var a=r.name||r
if(t.name&&r.name&&t.name.text===r.name.text){var i=(147===t.kind||146===t.kind)&&(32&t.flags)!==(32&r.flags)
if(i){var o=32&t.flags?e.Diagnostics.Function_overload_must_be_static:e.Diagnostics.Function_overload_must_not_be_static
c(a,o)}return}if(e.nodeIsPresent(r.body))return void c(a,e.Diagnostics.Function_implementation_name_must_be_0,e.declarationNameToString(t.name))}var s=t.name||t
h?c(s,e.Diagnostics.Constructor_implementation_is_missing):128&t.flags?c(s,e.Diagnostics.All_declarations_of_an_abstract_method_must_be_consecutive):c(s,e.Diagnostics.Function_implementation_is_missing_or_not_immediately_following_the_declaration)}}if(a){for(var s,_,u,l=155,d=0,p=l,f=!1,g=!0,m=!1,y=t.declarations,h=0!==(16384&t.flags),v=!1,k=!1,b=0,x=y;b<x.length;b++){var D=x[b],C=D,S=e.isInAmbientContext(C),T=222===C.parent.kind||159===C.parent.kind||S
if(T&&(u=void 0),220===C.kind||147===C.kind||146===C.kind||148===C.kind){var E=mu(C,l)
d|=E,p&=E,f=f||e.hasQuestionToken(C),g=g&&e.hasQuestionToken(C),e.nodeIsPresent(C.body)&&s?h?k=!0:v=!0:u&&u.parent===C.parent&&u.end!==C.pos&&o(u),e.nodeIsPresent(C.body)?s||(s=C):m=!0,u=C,T||(_=C)}}if(k&&e.forEach(y,function(t){c(t,e.Diagnostics.Multiple_constructor_implementations_are_not_allowed)}),v&&e.forEach(y,function(t){c(t.name,e.Diagnostics.Duplicate_function_implementation)}),!_||_.body||128&_.flags||_.questionToken||o(_),m&&(r(y,s,l,d,p),i(y,s,f,g),s))for(var w=Wn(t),A=Un(s),N=0,P=w;N<P.length;N++){var O=P[N]
if(!Ka(A,O)){c(O.declaration,e.Diagnostics.Overload_signature_is_not_compatible_with_function_implementation)
break}}}}function hu(t){function n(t){switch(t.kind){case 222:return 2097152
case 225:return e.isAmbientModule(t)||0!==e.getModuleInstanceState(t)?5242880:4194304
case 221:case 224:return 3145728
case 229:var r=0,a=q(se(t))
return e.forEach(a.declarations,function(e){r|=n(e)}),r
default:return 1048576}}if(a){var r=t.localSymbol
if((r||(r=se(t),7340032&r.flags))&&e.getDeclarationOfKind(r,t.kind)===t){for(var i=0,o=0,s=0,_=0,u=r.declarations;_<u.length;_++){var l=u[_],d=n(l),p=mu(l,513)
1&p?512&p?s|=d:i|=d:o|=d}var f=i|o,g=i&o,m=s&f
if(g||m)for(var y=0,h=r.declarations;y<h.length;y++){var l=h[y],d=n(l)
d&m?c(l.name,e.Diagnostics.Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_default_0_declaration_instead,e.declarationNameToString(l.name)):d&g&&c(l.name,e.Diagnostics.Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local,e.declarationNameToString(l.name))}}}}function vu(t,n,r){return t=bi(t),Qe(t)||Ye(t)||!Na(t,Ng())?t:(n&&(r||(r=e.Diagnostics.Operand_for_await_does_not_have_a_valid_callable_then_member),c(n,r)),Kf)}function ku(t){if(!Qe(t)){if(131072&t.flags&&(t.target===Tg()||t.target===Eg()))return t.typeArguments[0]
var n=wg()
if(n!==Zf&&Na(t,n)){var r=Xe(t,"then")
if(r&&!Qe(r)){var a=Pn(r,0)
if(0!==a.length){var i=$i(Ur(e.map(a,bu)),131072)
if(!Qe(i)){var o=Pn(i,0)
if(0!==o.length)return Ur(e.map(o,bu),!0)}}}}}}function bu(e){return e.parameters.length>0?jc(e,0):$f}function xu(e){return Du(e,void 0,void 0)}function Du(t,n,r){function a(t){if(524288&t.flags){for(var i=[],o=0,s=t.types;o<s.length;o++){var _=s[o]
i.push(a(_))}return Ur(i,!0)}var u=ku(t)
if(void 0===u)return vu(t,n,r)
if(t.id===u.id||e.indexOf(im,u.id)>=0)return n&&c(n,e.Diagnostics._0_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method,Oe(t.symbol)),Kf
im.push(t.id)
var l=a(u)
return im.pop(),l}return a(t)}function Cu(t,n){if(t===Kf)return Kf
var r=Sg()
return r===eg||r===xt(t)?Du(t,n,e.Diagnostics.An_async_function_or_method_must_have_a_valid_awaitable_return_type):(c(n,e.Diagnostics.The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type),Kf)}function Su(t){if(Df>=2){var n=aa(t.type)
return Cu(n,t.type)}var r=Ag()
if(r===Zf)return Kf
var a=aa(t.type)
if(a===Kf&&xf.isolatedModules)return Kf
var i=h(t.type).resolvedSymbol
if(!i||!ue(i)){var o=i?Oe(i):Fe(a)
return c(t,e.Diagnostics.Type_0_is_not_a_valid_async_function_return_type,o),Kf}Au(t)
var s=bt(i)
if(!Ia(s,r,t,e.Diagnostics.Type_0_is_not_a_valid_async_function_return_type))return Kf
var _=e.getEntityNameFromTypeNode(t.type),u=Yl(_),l=k(t.locals,u.text,107455)
return l?(c(l.valueDeclaration,e.Diagnostics.Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions,u.text,G(i)),Kf):Du(a,t,e.Diagnostics.An_async_function_or_method_must_have_a_valid_awaitable_return_type)}function Tu(t){var n=Fc(t),r=Gn(n)
if(!(1&r.flags)){var a,i,o=Pc(t)
switch(t.parent.kind){case 221:var s=se(t.parent),c=bt(s)
a=Ur([c,Yf])
break
case 142:a=Yf,i=e.chainDiagnosticMessages(i,e.Diagnostics.The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any)
break
case 145:a=Yf,i=e.chainDiagnosticMessages(i,e.Diagnostics.The_return_type_of_a_property_decorator_function_must_be_either_void_or_any)
break
case 147:case 149:case 150:var _=Od(t.parent),u=Tr(_)
a=Ur([u,Yf])}Ia(r,a,t,o,i)}}function Eu(e){if(e&&155===e.kind){var t=Yl(e.typeName),n=155===t.parent.kind?793064:1920,r=D(t,t.text,8388608|n,void 0,void 0)
if(r&&8388608&r.flags){var a=q(r)
107455&a.flags&&!Xd(q(r))&&V(r)}}}function wu(e){Eu(e.type)}function Au(e){Eu(e.type)}function Nu(e){for(var t=0,n=e.parameters;t<n.length;t++){var r=n[t]
wu(r)}}function Pu(t){if(t.decorators&&e.nodeCanBeDecorated(t)){if(xf.experimentalDecorators||c(t,e.Diagnostics.Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_the_experimentalDecorators_option_to_remove_this_warning),xf.emitDecoratorMetadata)switch(t.kind){case 221:var n=e.getFirstConstructorWithBody(t)
n&&Nu(n)
break
case 147:case 149:case 150:Nu(t),Au(t)
break
case 145:case 142:wu(t)}e.forEach(t.decorators,Tu)}}function Ou(e){a&&(Ru(e)||Mp(e),Hu(e,e.name),Wu(e,e.name),Gu(e,e.name),Xu(e,e.name))}function Ru(t){Pu(t),Y_(t)
var n=e.isAsyncFunctionLike(t)
if(t.name&&140===t.name.kind&&Ss(t.name),!e.hasDynamicName(t)){var r=se(t),i=t.localSymbol||r,o=e.forEach(i.declarations,function(n){return n.kind!==t.kind||e.isSourceFileJavaScript(e.getSourceFileOfNode(n))?void 0:n})
t===o&&yu(i),r.parent&&e.getDeclarationOfKind(r,t.kind)===t&&yu(r)}if(_d(t.body),!t.asteriskToken){var s=t.type&&(n?Su(t):aa(t.type))
e_(t,s)}a&&!t.type&&(xf.noImplicitAny&&e.nodeIsMissing(t.body)&&!gu(t)&&Di(t,Jf),t.asteriskToken&&e.nodeIsPresent(t.body)&&Gn(Un(t))),Fu(t)}function Fu(e){Rg&&Rg.push(e)}function Iu(){if(Rg)for(var e=0,t=Rg;e<t.length;e++){var n=t[e]
switch(n.kind){case 256:case 225:zu(n)
break
case 221:case 192:Ju(n),Ku(n)
break
case 222:Ku(n)
break
case 199:case 227:case 206:case 207:case 208:Mu(n)
break
case 148:case 179:case 220:case 180:case 147:case 149:case 150:n.body&&Mu(n),Ku(n)
break
case 146:case 151:case 152:case 153:case 156:case 157:Ku(n)}}}function Mu(t){if(222!==t.parent.kind&&Sf&&!e.isInAmbientContext(t)){var n=function(n){var r=t.locals[n]
if(!r.isReferenced)if(r.valueDeclaration&&142===r.valueDeclaration.kind){var a=r.valueDeclaration
!xf.noUnusedParameters||e.isParameterPropertyDeclaration(a)||Lu(a)||Bu(a)||c(r.valueDeclaration.name,e.Diagnostics._0_is_declared_but_never_used,r.name)}else xf.noUnusedLocals&&e.forEach(r.declarations,function(t){return c(t.name||t,e.Diagnostics._0_is_declared_but_never_used,r.name)})}
for(var r in t.locals)n(r)}}function Lu(e){return e.name&&97===e.name.originalKeywordKind}function Bu(e){return e.name&&69===e.name.kind&&95===e.name.text.charCodeAt(0)}function Ju(t){if(xf.noUnusedLocals&&!e.isInAmbientContext(t)&&t.members)for(var n=0,r=t.members;n<r.length;n++){var a=r[n]
if(147===a.kind||145===a.kind)!a.symbol.isReferenced&&8&a.flags&&c(a.name,e.Diagnostics._0_is_declared_but_never_used,a.symbol.name)
else if(148===a.kind)for(var i=0,o=a.parameters;i<o.length;i++){var s=o[i]
!s.symbol.isReferenced&&8&s.flags&&c(s.name,e.Diagnostics.Property_0_is_declared_but_never_used,s.symbol.name)}}}function Ku(t){if(xf.noUnusedLocals&&!e.isInAmbientContext(t)&&t.typeParameters){var n=se(t),r=n&&n.declarations&&e.lastOrUndefined(n.declarations)
if(r!==t)return
for(var a=0,i=t.typeParameters;a<i.length;a++){var o=i[a]
oe(o.symbol).isReferenced||c(o.name,e.Diagnostics._0_is_declared_but_never_used,o.symbol.name)}}}function zu(t){if(xf.noUnusedLocals&&!e.isInAmbientContext(t))for(var n in t.locals){var r=t.locals[n]
if(!r.isReferenced&&!r.exportSymbol)for(var a=0,i=r.declarations;a<i.length;a++){var o=i[a]
e.isAmbientModule(o)||c(o.name,e.Diagnostics._0_is_declared_but_never_used,r.name)}}}function ju(t){199===t.kind&&lf(t),e.forEach(t.statements,_d),t.locals&&Fu(t)}function Uu(t){!e.hasDeclaredRestParameter(t)||e.isInAmbientContext(t)||e.nodeIsMissing(t.body)||e.forEach(t.parameters,function(t){t.name&&!e.isBindingPattern(t.name)&&t.name.text===Nf.name&&c(t,e.Diagnostics.Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters)})}function qu(t,n,r){if(!n||n.text!==r)return!1
if(145===t.kind||144===t.kind||147===t.kind||146===t.kind||149===t.kind||150===t.kind)return!1
if(e.isInAmbientContext(t))return!1
var a=e.getRootDeclaration(t)
return 142===a.kind&&e.nodeIsMissing(a.parent.body)?!1:!0}function Wu(e,t){qu(e,t,"_this")&&am.push(e)}function Vu(t){for(var n=t;n;){if(4&$d(n)){var r=69!==t.kind
return void(r?c(t.name,e.Diagnostics.Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference):c(t,e.Diagnostics.Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference))}n=n.parent}}function Hu(t,n){if(qu(t,n,"_super")){var r=e.getContainingClass(t)
if(r&&!e.isInAmbientContext(r)&&e.getClassExtendsHeritageClauseElement(r)){var a=69!==t.kind
a?c(t,e.Diagnostics.Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference):c(t,e.Diagnostics.Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference)}}}function Gu(t,n){if((qu(t,n,"require")||qu(t,n,"exports"))&&(225!==t.kind||1===e.getModuleInstanceState(t))){var r=He(t)
256===r.kind&&e.isExternalOrCommonJsModule(r)&&c(n,e.Diagnostics.Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module,e.declarationNameToString(n),e.declarationNameToString(n))}}function Xu(t,n){if(qu(t,n,"Promise")&&(225!==t.kind||1===e.getModuleInstanceState(t))){var r=He(t)
256===r.kind&&e.isExternalOrCommonJsModule(r)&&2097152&r.flags&&c(n,e.Diagnostics.Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_functions,e.declarationNameToString(n),e.declarationNameToString(n))}}function Qu(t){if(0===(3072&e.getCombinedNodeFlags(t))&&!e.isParameterDeclaration(t)&&(218!==t.kind||t.initializer)){var n=se(t)
if(1&n.flags){var r=D(t,t.name.text,3,void 0,void 0)
if(r&&r!==n&&2&r.flags&&3072&Hs(r)){var a=e.getAncestor(r.valueDeclaration,219),i=200===a.parent.kind&&a.parent.parent?a.parent.parent:void 0,o=i&&(199===i.kind&&e.isFunctionLike(i.parent)||226===i.kind||225===i.kind||256===i.kind)
if(!o){var s=Oe(r)
c(t,e.Diagnostics.Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1,s,s)}}}}}function Yu(t){function n(a){if(!e.isTypeNode(a)&&!e.isDeclarationName(a)){if(172===a.kind)return n(a.expression)
if(69!==a.kind)return e.forEachChild(a,n)
var i=D(a,a.text,8496063,void 0,void 0)
if(i&&i!==Lf&&i.valueDeclaration){if(i.valueDeclaration===t)return void c(a,e.Diagnostics.Parameter_0_cannot_be_referenced_in_its_initializer,e.declarationNameToString(t.name))
var o=e.getEnclosingBlockScopeContainer(i.valueDeclaration)
if(o===r){if(142===i.valueDeclaration.kind){if(i.valueDeclaration.pos<t.pos)return
for(var s=a;s!==t.initializer;){if(e.isFunctionLike(s.parent))return
if(145===s.parent.kind&&!(32&s.parent.flags)&&e.isClassLike(s.parent.parent))return
s=s.parent}}c(a,e.Diagnostics.Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it,e.declarationNameToString(t.name),e.declarationNameToString(a))}}}}if(142===e.getRootDeclaration(t).kind){var r=e.getContainingFunction(t)
n(t.initializer)}}function $u(t){if(Pu(t),_d(t.type),140===t.name.kind&&(Ss(t.name),t.initializer&&B_(t.initializer)),169===t.kind){t.propertyName&&140===t.propertyName.kind&&Ss(t.propertyName)
var n=t.parent.parent,r=$e(n),a=t.propertyName||t.name,i=An(r,Ze(a))
n.initializer&&i&&ce(i)&&Gs(n,n.initializer,r,i)}if(e.isBindingPattern(t.name)&&e.forEach(t.name.elements,_d),t.initializer&&142===e.getRootDeclaration(t).kind&&e.nodeIsMissing(e.getContainingFunction(t).body))return void c(t,e.Diagnostics.A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation)
if(e.isBindingPattern(t.name))return void(t.initializer&&207!==t.parent.parent.kind&&(Ia(B_(t.initializer),ut(t),t,void 0),Yu(t)))
var o=se(t),s=dt(o)
if(t===o.valueDeclaration)t.initializer&&207!==t.parent.parent.kind&&(Ia(B_(t.initializer),s,t,void 0),Yu(t))
else{var _=ut(t)
s===Kf||_===Kf||Ta(s,_)||c(t.name,e.Diagnostics.Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2,e.declarationNameToString(t.name),Fe(s),Fe(_)),t.initializer&&Ia(B_(t.initializer),_,t,void 0),Zu(t,o.valueDeclaration)||(c(o.valueDeclaration.name,e.Diagnostics.All_declarations_of_0_must_have_identical_modifiers,e.declarationNameToString(t.name)),c(t.name,e.Diagnostics.All_declarations_of_0_must_have_identical_modifiers,e.declarationNameToString(t.name)))}145!==t.kind&&144!==t.kind&&(hu(t),(218===t.kind||169===t.kind)&&Qu(t),Hu(t,t.name),Wu(t,t.name),Gu(t,t.name),Xu(t,t.name))}function Zu(t,n){if(142===t.kind&&218===n.kind||218===t.kind&&142===n.kind)return!0
if(e.hasQuestionToken(t)!==e.hasQuestionToken(n))return!1
var r=504
return(t.flags&r)===(n.flags&r)}function el(e){return Xp(e),$u(e)}function tl(e){return Gp(e),$u(e)}function nl(t){gp(t)||mp(t)||Yp(t.declarationList)||Zp(t),e.forEach(t.declarationList.declarations,_d)}function rl(t){if(t.modifiers&&171===t.parent.kind){if(!e.isAsyncFunctionLike(t))return tf(t,e.Diagnostics.Modifiers_cannot_appear_here)
if(t.modifiers.length>1)return tf(t,e.Diagnostics.Modifiers_cannot_appear_here)}}function al(e){lf(e),j_(e.expression)}function il(t){lf(t),j_(t.expression),_d(t.thenStatement),201===t.thenStatement.kind&&c(t.thenStatement,e.Diagnostics.The_body_of_an_if_statement_cannot_be_the_empty_statement),_d(t.elseStatement)}function ol(e){lf(e),_d(e.statement),j_(e.expression)}function sl(e){lf(e),j_(e.expression),_d(e.statement)}function cl(t){lf(t)||t.initializer&&219===t.initializer.kind&&Yp(t.initializer),t.initializer&&(219===t.initializer.kind?e.forEach(t.initializer.declarations,el):j_(t.initializer)),t.condition&&j_(t.condition),t.incrementor&&j_(t.incrementor),_d(t.statement),t.locals&&Fu(t)}function _l(t){if(Kp(t),219===t.initializer.kind)ll(t)
else{var n=t.initializer,r=dl(t.expression)
if(170===n.kind||171===n.kind)C_(n,r||Kf)
else{var a=j_(n)
s_(n,e.Diagnostics.Invalid_left_hand_side_in_for_of_statement,e.Diagnostics.The_left_hand_side_of_a_for_of_statement_cannot_be_a_constant_or_a_read_only_property),r&&Ia(r,a,n,void 0)}}_d(t.statement),t.locals&&Fu(t)}function ul(t){if(Kp(t),219===t.initializer.kind){var n=t.initializer.declarations[0]
n&&e.isBindingPattern(n.name)&&c(n.name,e.Diagnostics.The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern),ll(t)}else{var r=t.initializer,a=j_(r)
170===r.kind||171===r.kind?c(r,e.Diagnostics.The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern):Ds(a,34)?s_(r,e.Diagnostics.Invalid_left_hand_side_in_for_in_statement,e.Diagnostics.The_left_hand_side_of_a_for_in_statement_cannot_be_a_constant_or_a_read_only_property):c(r,e.Diagnostics.The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any)}var i=Xs(t.expression)
Ds(i,2605056)||c(t.expression,e.Diagnostics.The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter),_d(t.statement),t.locals&&Fu(t)}function ll(e){var t=e.initializer
if(t.declarations.length>=1){var n=t.declarations[0]
el(n)}}function dl(e){var t=Xs(e)
return pl(t,e,!0)}function pl(t,n,r){if(Qe(t))return t
if(Df>=2)return fl(t,n)
if(r)return hl(t,n)
if(ai(t)){var a=In(t,1)
if(a)return a}return n&&c(n,e.Diagnostics.Type_0_is_not_an_array_type,Fe(t)),Kf}function fl(e,t){var n=gl(e,t)
return t&&n&&Ia(e,wr(n),t),n||Jf}function gl(t,n){if(!Qe(t)){var r=t
if(!r.iterableElementType)if(131072&t.flags&&t.target===yg())r.iterableElementType=t.typeArguments[0]
else{var a=Xe(t,e.getPropertyNameForKnownSymbolName("iterator"))
if(Qe(a))return
var i=a?Pn(a,0):kf
if(0===i.length)return void(n&&c(n,e.Diagnostics.Type_must_have_a_Symbol_iterator_method_that_returns_an_iterator))
r.iterableElementType=ml(Ur(e.map(i,Gn),!0),n)}return r.iterableElementType}}function ml(t,n){if(!Qe(t)){var r=t
if(!r.iteratorElementType)if(131072&t.flags&&t.target===hg())r.iteratorElementType=t.typeArguments[0]
else{var a=Xe(t,"next")
if(Qe(a))return
var i=a?Pn(a,0):kf
if(0===i.length)return void(n&&c(n,e.Diagnostics.An_iterator_must_have_a_next_method))
var o=Ur(e.map(i,Gn),!0)
if(Qe(o))return
var s=Xe(o,"value")
if(!s)return void(n&&c(n,e.Diagnostics.The_type_returned_by_the_next_method_of_an_iterator_must_have_a_value_property))
r.iteratorElementType=s}return r.iteratorElementType}}function yl(e){return Qe(e)?void 0:131072&e.flags&&e.target===vg()?e.typeArguments[0]:gl(e,void 0)||ml(e,void 0)}function hl(t,n){e.Debug.assert(2>Df)
var r=t
524288&t.flags?r=Ur(e.filter(t.types,function(e){return!(34&e.flags)}),!0):34&t.flags&&(r=$f)
var a=t!==r,i=!1
if(a&&(1>Df&&(c(n,e.Diagnostics.Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher),i=!0),r===$f))return Wf
if(!ai(r)){if(!i){var o=a?e.Diagnostics.Type_0_is_not_an_array_type:e.Diagnostics.Type_0_is_not_an_array_type_or_a_string_type
c(n,o,Fe(r))}return a?Wf:Kf}var s=In(r,1)||Kf
return a?34&s.flags?Wf:Ur([s,Wf],!0):s}function vl(e){lf(e)||Hp(e)}function kl(t){return!(149!==t.kind||!e.getSetAccessorTypeAnnotationNode(e.getDeclarationOfKind(t.symbol,150)))}function bl(t,n){var r=e.isAsyncFunctionLike(t)?ku(n):n
return r&&f_(r,1025)}function xl(t){if(!lf(t)){var n=e.getContainingFunction(t)
n||tf(t,e.Diagnostics.A_return_statement_can_only_be_used_within_a_function_body)}var r=e.getContainingFunction(t)
if(r){var a=Un(r),i=Gn(a)
if(Ef||t.expression||i===$f){var o=t.expression?B_(t.expression):zf
if(r.asteriskToken)return
if(150===r.kind)t.expression&&c(t.expression,e.Diagnostics.Setters_cannot_return_a_value)
else if(148===r.kind)t.expression&&!Ia(o,i,t.expression)&&c(t.expression,e.Diagnostics.Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class)
else if(r.type||kl(r))if(e.isAsyncFunctionLike(r)){var s=ku(i),_=Du(o,t.expression||t,e.Diagnostics.Return_expression_in_async_function_does_not_have_a_valid_callable_then_member)
s&&Ia(_,s,t.expression||t)}else Ia(o,i,t.expression||t)}else 148!==r.kind&&xf.noImplicitReturns&&!bl(r,i)&&c(t,e.Diagnostics.Not_all_code_paths_return_a_value)}}function Dl(t){lf(t)||33554432&t.flags&&tf(t,e.Diagnostics.with_statements_are_not_allowed_in_an_async_function_block),j_(t.expression),c(t.expression,e.Diagnostics.All_symbols_within_a_with_block_will_be_resolved_to_any)}function Cl(t){lf(t)
var n,r=!1,i=j_(t.expression)
e.forEach(t.caseBlock.clauses,function(o){if(250===o.kind&&!r)if(void 0===n)n=o
else{var s=e.getSourceFileOfNode(t),c=e.skipTrivia(s.text,o.pos),_=o.statements.length>0?o.statements[0].pos:o.end
nf(s,c,_-c,e.Diagnostics.A_default_clause_cannot_appear_more_than_once_in_a_switch_statement),r=!0}if(a&&249===o.kind){var u=o,l=j_(u.expression)
T_(i,l)||Ma(l,i,u.expression,void 0)}e.forEach(o.statements,_d)}),t.caseBlock.locals&&Fu(t.caseBlock)}function Sl(t){if(!lf(t))for(var n=t.parent;n&&!e.isFunctionLike(n);){if(214===n.kind&&n.label.text===t.label.text){var r=e.getSourceFileOfNode(t)
rf(t.label,e.Diagnostics.Duplicate_label_0,e.getTextOfNodeFromSourceText(r.text,t.label))
break}n=n.parent}_d(t.statement)}function Tl(t){lf(t)||void 0===t.expression&&pf(t,e.Diagnostics.Line_break_not_permitted_here),t.expression&&j_(t.expression)}function El(t){lf(t),ju(t.tryBlock)
var n=t.catchClause
if(n){if(n.variableDeclaration)if(69!==n.variableDeclaration.name.kind)tf(n.variableDeclaration.name,e.Diagnostics.Catch_clause_variable_name_must_be_an_identifier)
else if(n.variableDeclaration.type)tf(n.variableDeclaration.type,e.Diagnostics.Catch_clause_variable_cannot_have_a_type_annotation)
else if(n.variableDeclaration.initializer)tf(n.variableDeclaration.initializer,e.Diagnostics.Catch_clause_variable_cannot_have_an_initializer)
else{var r=n.variableDeclaration.name.text,a=n.block.locals
if(a){var i=a[r]
i&&0!==(2&i.flags)&&rf(i.valueDeclaration,e.Diagnostics.Cannot_redeclare_identifier_0_in_catch_clause,r)}}ju(n.block)}t.finallyBlock&&ju(t.finallyBlock)}function wl(t){function n(t,n,r,a,i,o){if(i&&(1!==o||bs(t.valueDeclaration.name))){var s
if(140===t.valueDeclaration.name.kind||t.parent===r.symbol)s=t.valueDeclaration
else if(a)s=a
else if(65536&r.flags){var _=e.forEach(Ft(r),function(e){return xn(e,t.name)&&In(e,o)})
s=_?void 0:r.symbol.declarations[0]}if(s&&!Na(n,i)){var u=0===o?e.Diagnostics.Property_0_of_type_1_is_not_assignable_to_string_index_type_2:e.Diagnostics.Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2
c(s,u,Oe(t),Fe(n),Fe(i))}}}var r=er(t.symbol,1),a=er(t.symbol,0),i=In(t,0),o=In(t,1)
if((i||o)&&(e.forEach(bn(t),function(e){var s=bt(e)
n(e,s,t,a,i,0),n(e,s,t,r,o,1)}),32768&t.flags&&e.isClassLike(t.symbol.valueDeclaration)))for(var s=t.symbol.valueDeclaration,_=0,u=s.members;_<u.length;_++){var l=u[_]
if(!(32&l.flags)&&e.hasDynamicName(l)){var d=bt(l.symbol)
n(l.symbol,d,t,a,i,0),n(l.symbol,d,t,r,o,1)}}var p
if(i&&o&&(p=r||a,!p&&65536&t.flags)){var f=e.forEach(Ft(t),function(e){return In(e,0)&&In(e,1)})
p=f?void 0:t.symbol.declarations[0]}p&&!Na(o,i)&&c(p,e.Diagnostics.Numeric_index_type_0_is_not_assignable_to_string_index_type_1,Fe(o),Fe(i))}function Al(e,t){switch(e.text){case"any":case"number":case"boolean":case"string":case"symbol":case"void":c(e,t,e.text)}}function Nl(t){if(t)for(var n=0,r=t.length;r>n;n++){var i=t[n]
if(q_(i),a)for(var o=0;n>o;o++)t[o].symbol===i.symbol&&c(i.name,e.Diagnostics.Duplicate_identifier_0,e.declarationNameToString(i.name))}}function Pl(t,n){if(1!==n.declarations.length)for(var r,a=0,i=n.declarations;a<i.length;a++){var o=i[a];(221===o.kind||222===o.kind)&&(r?zl(r.typeParameters,t.typeParameters)||c(t.name,e.Diagnostics.All_declarations_of_0_must_have_identical_type_parameters,t.name.text):r=o)}}function Ol(e){return Il(e),ud(e),bt(se(e))}function Rl(t){e.forEach(t.members,_d),Fu(t)}function Fl(t){t.name||512&t.flags||tf(t,e.Diagnostics.A_class_declaration_without_the_default_modifier_must_have_a_name),Il(t),e.forEach(t.members,_d),Fu(t)}function Il(t){Rp(t),Pu(t),t.name&&(Al(t.name,e.Diagnostics.Class_name_cannot_be_0),Wu(t,t.name),Gu(t,t.name),Xu(t,t.name)),Nl(t.typeParameters),hu(t)
var n=se(t),r=Ht(n),i=rn(r),o=bt(n)
Pl(t,n),$_(t)
var s=e.getClassExtendsHeritageClauseElement(t)
if(s){var _=Ft(r)
if(_.length&&a){var u=_[0],l=Rt(r)
if(Ml(l,s),_d(s.expression),s.typeArguments){e.forEach(s.typeArguments,_d)
for(var d=0,p=Pt(l,s.typeArguments);d<p.length;d++){var f=p[d]
if(!cu(f.typeParameters,s.typeArguments))break}}if(Ia(i,rn(u,r.thisType),t.name||t,e.Diagnostics.Class_0_incorrectly_extends_base_class_1),Ia(o,Sa(l),t.name||t,e.Diagnostics.Class_static_side_0_incorrectly_extends_base_class_static_side_1),u.symbol.valueDeclaration&&!e.isInAmbientContext(u.symbol.valueDeclaration)&&(x(u.symbol.valueDeclaration,t)||c(s,e.Diagnostics.A_class_must_be_declared_after_its_base_class)),!(l.symbol&&32&l.symbol.flags)){var g=Ot(l,s.typeArguments)
e.forEach(g,function(e){return Gn(e)!==u})&&c(s.expression,e.Diagnostics.Base_constructors_must_all_have_the_same_return_type)}Jl(r,u)}}var m=e.getClassImplementsHeritageClauseElements(t)
if(m)for(var y=0,h=m;y<h.length;y++){var v=h[y]
if(e.isEntityNameExpression(v.expression)||c(v.expression,e.Diagnostics.A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments),_u(v),a){var k=aa(v)
if(k!==Kf){var b=131072&k.flags?k.target:k
98304&b.flags?Ia(i,rn(k,r.thisType),t.name||t,e.Diagnostics.Class_0_incorrectly_implements_interface_1):c(v,e.Diagnostics.A_class_may_only_implement_another_class_or_interface)}}}a&&(wl(r),eu(t))}function Ml(t,n){var r=Pn(t,1)
if(r.length){var a=r[0].declaration
if(a&&8&a.flags){var i=Bl(t.symbol)
Sd(n,i)||c(n,e.Diagnostics.Cannot_extend_a_class_0_Class_constructor_is_marked_as_private,n.expression.text)}}}function Ll(e){return 16777216&e.flags?y(e).target:e}function Bl(t){return e.forEach(t.declarations,function(t){return e.isClassLike(t)?t:void 0})}function Jl(t,n){for(var r=bn(n),a=0,i=r;a<i.length;a++){var o=i[a],s=Ll(o)
if(!(134217728&s.flags)){var _=Ll(xn(t,s.name)),u=Hs(s)
if(e.Debug.assert(!!_,"derived should point to something, even if it is the base class' declaration."),_)if(_===s){var l=Bl(t.symbol)
!(128&u)||l&&128&l.flags||(192===l.kind?c(l,e.Diagnostics.Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1,Oe(o),Fe(n)):c(l,e.Diagnostics.Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2,Fe(t),Oe(o),Fe(n)))}else{var d=Hs(_)
if(8&u||8&d)continue
if((32&u)!==(32&d))continue
if(s.flags&_.flags&8192||98308&s.flags&&98308&_.flags)continue
var p=void 0
8192&s.flags?98304&_.flags?p=e.Diagnostics.Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor:(e.Debug.assert(0!==(4&_.flags)),p=e.Diagnostics.Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property):4&s.flags?(e.Debug.assert(0!==(8192&_.flags)),p=e.Diagnostics.Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function):(e.Debug.assert(0!==(98304&s.flags)),e.Debug.assert(0!==(8192&_.flags)),p=e.Diagnostics.Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function),c(_.valueDeclaration.name,p,Fe(n),Oe(s),Fe(t))}}}}function Kl(e){return 149===e||150===e}function zl(e,t){if(!e&&!t)return!0
if(!e||!t||e.length!==t.length)return!1
for(var n=0,r=e.length;r>n;n++){var a=e[n],i=t[n]
if(a.name.text!==i.name.text)return!1
if(a.constraint||i.constraint){if(!a.constraint||!i.constraint)return!1
if(!Ta(aa(a.constraint),aa(i.constraint)))return!1}}return!0}function jl(t,n){var r=Ft(t)
if(r.length<2)return!0
var a=e.createMap()
e.forEach(nn(t).declaredProperties,function(e){a[e.name]={prop:e,containingType:t}})
for(var i=!0,o=0,s=r;o<s.length;o++)for(var c=s[o],_=bn(rn(c,t.thisType)),u=0,l=_;u<l.length;u++){var d=l[u],p=a[d.name]
if(p){var f=p.containingType!==t
if(f&&!Xa(p.prop,d)){i=!1
var g=Fe(p.containingType),m=Fe(c),y=e.chainDiagnosticMessages(void 0,e.Diagnostics.Named_property_0_of_types_1_and_2_are_not_identical,Oe(d),g,m)
y=e.chainDiagnosticMessages(y,e.Diagnostics.Interface_0_cannot_simultaneously_extend_types_1_and_2,Fe(t),g,m),om.add(e.createDiagnosticForNodeFromMessageChain(n,y))}}else a[d.name]={prop:d,containingType:c}}return i}function Ul(t){if(gp(t)||mp(t)||Fp(t),Nl(t.typeParameters),a){Al(t.name,e.Diagnostics.Interface_name_cannot_be_0),hu(t)
var n=se(t)
Pl(t,n)
var r=e.getDeclarationOfKind(n,222)
if(t===r){var i=Ht(n),o=rn(i)
if(jl(i,t.name)){for(var s=0,_=Ft(i);s<_.length;s++){var u=_[s]
Ia(o,rn(u,i.thisType),t.name,e.Diagnostics.Interface_0_incorrectly_extends_interface_1)}wl(i)}}Z_(t)}e.forEach(e.getInterfaceBaseTypeNodes(t),function(t){e.isEntityNameExpression(t.expression)||c(t.expression,e.Diagnostics.An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments),_u(t)}),e.forEach(t.members,_d),a&&(eu(t),Fu(t))}function ql(t){gp(t)||mp(t),Al(t.name,e.Diagnostics.Type_alias_name_cannot_be_0),_d(t.type)}function Wl(t){function n(t,n,r,a){function i(n){switch(n.kind){case 185:var r=i(n.operand)
if(void 0===r)return
switch(n.operator){case 35:return r
case 36:return-r
case 50:return~r}return
case 187:var a=i(n.left)
if(void 0===a)return
var s=i(n.right)
if(void 0===s)return
switch(n.operatorToken.kind){case 47:return a|s
case 46:return a&s
case 44:return a>>s
case 45:return a>>>s
case 43:return a<<s
case 48:return a^s
case 37:return a*s
case 39:return a/s
case 35:return a+s
case 36:return a-s
case 40:return a%s}return
case 8:return+n.text
case 178:return i(n.expression)
case 69:case 173:case 172:var _,u=t.parent,l=bt(se(u.parent)),d=void 0
if(69===n.kind)_=l,d=n.text
else{var p=void 0
if(173===n.kind){if(void 0===n.argumentExpression||9!==n.argumentExpression.kind)return
p=n.expression,d=n.argumentExpression.text}else p=n.expression,d=n.name.text
for(var f=p;f&&69!==f.kind;){if(172!==f.kind)return
f=f.expression}if(_=j_(p),!(_.symbol&&384&_.symbol.flags))return}if(void 0===d)return
var g=xn(_,d)
if(!(g&&8&g.flags))return
var m=g.valueDeclaration
if(u===m)return
return x(m,u)?h(m).enumMemberValue:(o=!1,void c(n,e.Diagnostics.A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums))}}var o=!0,s=i(t)
return o&&(void 0===s?r?c(t,e.Diagnostics.In_const_enum_declarations_member_initializer_must_be_constant_expression):a?c(t,e.Diagnostics.In_ambient_enum_declarations_member_initializer_must_be_constant_expression):Ia(j_(t),n,t,void 0):r&&(isNaN(s)?c(t,e.Diagnostics.const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN):isFinite(s)||c(t,e.Diagnostics.const_enum_member_initializer_was_evaluated_to_a_non_finite_value))),s}var r=h(t)
if(!(16384&r.flags)){for(var a=se(t),i=Ht(a),o=0,s=e.isInAmbientContext(t),_=e.isConst(t),u=0,l=t.members;u<l.length;u++){var d=l[u]
if(et(d.name))c(d.name,e.Diagnostics.Computed_property_names_are_not_allowed_in_enums)
else{var p=Ze(d.name)
Cs(p)&&c(d.name,e.Diagnostics.An_enum_member_cannot_have_a_numeric_name)}var f=void 0===o,g=d.initializer
g?o=n(g,i,_,s):s&&!_?o=void 0:f&&c(d.name,e.Diagnostics.Enum_member_must_have_initializer),void 0!==o&&(h(d).enumMemberValue=o,o++)}r.flags|=16384}}function Vl(t){if(a){gp(t)||mp(t),Al(t.name,e.Diagnostics.Enum_name_cannot_be_0),Wu(t,t.name),Gu(t,t.name),Xu(t,t.name),hu(t),Wl(t)
var n=e.isConst(t)
xf.isolatedModules&&n&&e.isInAmbientContext(t)&&c(t.name,e.Diagnostics.Ambient_const_enums_are_not_allowed_when_the_isolatedModules_flag_is_provided)
var r=se(t),i=e.getDeclarationOfKind(r,t.kind)
if(t===i){r.declarations.length>1&&e.forEach(r.declarations,function(t){e.isConstEnumDeclaration(t)!==n&&c(t.name,e.Diagnostics.Enum_declarations_must_all_be_const_or_non_const)})
var o=!1
e.forEach(r.declarations,function(t){if(224!==t.kind)return!1
var n=t
if(!n.members.length)return!1
var r=n.members[0]
r.initializer||(o?c(r.name,e.Diagnostics.In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element):o=!0)})}}}function Hl(t){for(var n=t.declarations,r=0,a=n;r<a.length;r++){var i=a[r]
if((221===i.kind||220===i.kind&&e.nodeIsPresent(i.body))&&!e.isInAmbientContext(i))return i}}function Gl(t,n){var r=e.getEnclosingBlockScopeContainer(t),a=e.getEnclosingBlockScopeContainer(n)
return v(r)?v(a):v(a)?!1:r===a}function Xl(t){if(a){var n=e.isGlobalScopeAugmentation(t),r=e.isInAmbientContext(t)
n&&!r&&c(t.name,e.Diagnostics.Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambient_context)
var i=e.isAmbientModule(t),o=i?e.Diagnostics.An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file:e.Diagnostics.A_namespace_declaration_is_only_allowed_in_a_namespace_or_module
if(ad(t,o))return
gp(t)||mp(t)||r||9!==t.name.kind||rf(t.name,e.Diagnostics.Only_ambient_modules_can_use_quoted_names),Wu(t,t.name),Gu(t,t.name),Xu(t,t.name),hu(t)
var s=se(t)
if(512&s.flags&&s.declarations.length>1&&!r&&e.isInstantiatedModule(t,xf.preserveConstEnums||xf.isolatedModules)){var _=Hl(s)
_&&(e.getSourceFileOfNode(t)!==e.getSourceFileOfNode(_)?c(t.name,e.Diagnostics.A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged):t.pos<_.pos&&c(t.name,e.Diagnostics.A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged))
var u=e.getDeclarationOfKind(s,221)
u&&Gl(t,u)&&(h(t).flags|=32768)}if(i)if(e.isExternalModuleAugmentation(t)){var l=n||33554432&se(t).flags
if(l&&t.body)for(var d=0,p=t.body.statements;d<p.length;d++){var f=p[d]
Ql(f,n)}}else v(t.parent)?n?c(t.name,e.Diagnostics.Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_declarations):e.isExternalModuleNameRelative(t.name.text)&&c(t.name,e.Diagnostics.Ambient_module_declaration_cannot_specify_relative_module_name):n?c(t.name,e.Diagnostics.Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_declarations):c(t.name,e.Diagnostics.Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces)}t.body&&(_d(t.body),e.isGlobalScopeAugmentation(t)||Fu(t))}function Ql(t,n){switch(t.kind){case 200:for(var r=0,a=t.declarationList.declarations;r<a.length;r++){var i=a[r]
Ql(i,n)}break
case 235:case 236:tf(t,e.Diagnostics.Exports_and_export_assignments_are_not_permitted_in_module_augmentations)
break
case 229:case 230:tf(t,e.Diagnostics.Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_module)
break
case 169:case 218:var o=t.name
if(e.isBindingPattern(o)){for(var s=0,c=o.elements;s<c.length;s++){var _=c[s]
Ql(_,n)}break}case 221:case 224:case 220:case 222:case 225:case 223:if(n)return
var u=se(t)
if(u){var l=!(33554432&u.flags)
l||(l=e.isExternalModuleAugmentation(u.parent.declarations[0]))}}}function Yl(e){switch(e.kind){case 69:return e
case 139:do e=e.left
while(69!==e.kind)
return e
case 172:do e=e.expression
while(69!==e.kind)
return e}}function $l(t){var n=e.getExternalModuleName(t)
if(!e.nodeIsMissing(n)&&9!==n.kind)return c(n,e.Diagnostics.String_literal_expected),!1
var r=226===t.parent.kind&&e.isAmbientModule(t.parent.parent)
return 256===t.parent.kind||r?r&&e.isExternalModuleNameRelative(n.text)&&!Je(t)?(c(t,e.Diagnostics.Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relative_module_name),!1):!0:(c(n,236===t.kind?e.Diagnostics.Export_declarations_are_not_permitted_in_a_namespace:e.Diagnostics.Import_declarations_in_a_namespace_cannot_reference_a_module),!1)}function Zl(t){var n=se(t),r=q(n)
if(r!==Lf){var a=(1156031&n.flags?107455:0)|(793064&n.flags?793064:0)|(1920&n.flags?1920:0)
if(r.flags&a){var i=238===t.kind?e.Diagnostics.Export_declaration_conflicts_with_exported_declaration_of_0:e.Diagnostics.Import_declaration_conflicts_with_local_declaration_of_0
c(t,i,Oe(n))}}}function ed(e){Wu(e,e.name),Gu(e,e.name),Xu(e,e.name),Zl(e)}function td(t){if(!ad(t,e.Diagnostics.An_import_declaration_can_only_be_used_in_a_namespace_or_module)&&(!gp(t)&&!mp(t)&&1023&t.flags&&tf(t,e.Diagnostics.An_import_declaration_cannot_have_modifiers),$l(t))){var n=t.importClause
n&&(n.name&&ed(n),n.namedBindings&&(232===n.namedBindings.kind?ed(n.namedBindings):e.forEach(n.namedBindings.elements,ed)))}}function nd(t){if(!ad(t,e.Diagnostics.An_import_declaration_can_only_be_used_in_a_namespace_or_module)&&(gp(t)||mp(t),e.isInternalModuleImportEqualsDeclaration(t)||$l(t)))if(ed(t),1&t.flags&&W(t),e.isInternalModuleImportEqualsDeclaration(t)){var n=q(se(t))
if(n!==Lf){if(107455&n.flags){var r=Yl(t.moduleReference)
1920&X(r,108479).flags||c(r,e.Diagnostics.Module_0_is_hidden_by_a_local_declaration_with_the_same_name,e.declarationNameToString(r))}793064&n.flags&&Al(t.name,e.Diagnostics.Import_name_cannot_be_0)}}else Cf!==e.ModuleKind.ES6||e.isInAmbientContext(t)||rf(t,e.Diagnostics.Import_assignment_cannot_be_used_when_targeting_ECMAScript_2015_modules_Consider_using_import_Asterisk_as_ns_from_mod_import_a_from_mod_import_d_from_mod_or_another_module_format_instead)}function rd(t){if(!ad(t,e.Diagnostics.An_export_declaration_can_only_be_used_in_a_module)&&(!gp(t)&&!mp(t)&&1023&t.flags&&tf(t,e.Diagnostics.An_export_declaration_cannot_have_modifiers),!t.moduleSpecifier||$l(t)))if(t.exportClause){e.forEach(t.exportClause.elements,id)
var n=226===t.parent.kind&&e.isAmbientModule(t.parent.parent)
256===t.parent.kind||n||c(t,e.Diagnostics.Export_declarations_are_not_permitted_in_a_namespace)}else{var r=Q(t,t.moduleSpecifier)
r&&ee(r)&&c(t.moduleSpecifier,e.Diagnostics.Module_0_uses_export_and_cannot_be_used_with_export_Asterisk,Oe(r))}}function ad(e,t){return 256!==e.parent.kind&&226!==e.parent.kind&&225!==e.parent.kind?tf(e,t):void 0}function id(t){if(Zl(t),!t.parent.parent.moduleSpecifier){var n=t.propertyName||t.name,r=D(n,n.text,9289727,void 0,void 0)
r&&(r===Af||v(He(r.declarations[0])))?c(n,e.Diagnostics.Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module,n.text):W(t)}}function od(t){if(!ad(t,e.Diagnostics.An_export_assignment_can_only_be_used_in_a_module)){var n=256===t.parent.kind?t.parent:t.parent.parent
if(225===n.kind&&!e.isAmbientModule(n))return void c(t,e.Diagnostics.An_export_assignment_cannot_be_used_in_a_namespace)
!gp(t)&&!mp(t)&&1023&t.flags&&tf(t,e.Diagnostics.An_export_assignment_cannot_have_modifiers),69===t.expression.kind?W(t):B_(t.expression),cd(n),t.isExportEquals&&!e.isInAmbientContext(t)&&(Cf===e.ModuleKind.ES6?rf(t,e.Diagnostics.Export_assignment_cannot_be_used_when_targeting_ECMAScript_2015_modules_Consider_using_export_default_or_another_module_format_instead):Cf===e.ModuleKind.System&&rf(t,e.Diagnostics.Export_assignment_is_not_supported_when_module_flag_is_system))}}function sd(e){for(var t in e.exports)if("export="!==t)return!0
return!1}function cd(t){function n(e){return 220!==e.kind||!!e.body}var r=se(t),a=y(r)
if(!a.exportsChecked){var i=r.exports["export="]
if(i&&sd(r)){var o=N(i)||i.valueDeclaration
Je(o)||c(o,e.Diagnostics.An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements)}var s=re(r)
for(var _ in s)if("__export"!==_){var u=s[_],l=u.declarations,d=u.flags
if(!(1984&d)){var p=e.countWhere(l,n)
if(!(524288&d&&2>=p)&&p>1)for(var f=0,g=l;f<g.length;f++){var o=g[f]
n(o)&&om.add(e.createDiagnosticForNode(o,e.Diagnostics.Cannot_redeclare_exported_variable_0,_))}}}a.exportsChecked=!0}}function _d(e){if(e){var t=e.kind
if(ff)switch(t){case 225:case 221:case 222:case 220:ff.throwIfCancellationRequested()}switch(t){case 141:return q_(e)
case 142:return W_(e)
case 145:case 144:return tu(e)
case 156:case 157:case 151:case 152:return Y_(e)
case 153:return Y_(e)
case 147:case 146:return nu(e)
case 148:return ru(e)
case 149:case 150:return au(e)
case 155:return _u(e)
case 154:return G_(e)
case 158:return uu(e)
case 159:return lu(e)
case 160:return du(e)
case 161:return pu(e)
case 162:case 163:return fu(e)
case 164:return _d(e.type)
case 220:return Ou(e)
case 199:case 226:return ju(e)
case 200:return nl(e)
case 202:return al(e)
case 203:return il(e)
case 204:return ol(e)
case 205:return sl(e)
case 206:return cl(e)
case 207:return ul(e)
case 208:return _l(e)
case 209:case 210:return vl(e)
case 211:return xl(e)
case 212:return Dl(e)
case 213:return Cl(e)
case 214:return Sl(e)
case 215:return Tl(e)
case 216:return El(e)
case 218:return el(e)
case 169:return tl(e)
case 221:return Fl(e)
case 222:return Ul(e)
case 223:return ql(e)
case 224:return Vl(e)
case 225:return Xl(e)
case 230:return td(e)
case 229:return nd(e)
case 236:return rd(e)
case 235:return od(e)
case 201:return void lf(e)
case 217:return void lf(e)
case 239:return su(e)}}}function ud(e){Og&&Og.push(e)}function ld(){for(var e=0,t=Og;e<t.length;e++){var n=t[e]
switch(n.kind){case 179:case 180:case 147:case 146:n_(n)
break
case 149:case 150:ou(n)
break
case 192:Rl(n)}}}function dd(t){e.performance.mark("beforeCheck"),pd(t),e.performance.mark("afterCheck"),e.performance.measure("Check","beforeCheck","afterCheck")}function pd(t){var n=h(t)
if(!(1&n.flags)){if(xf.skipLibCheck&&t.isDeclarationFile||xf.skipDefaultLibCheck&&t.hasNoDefaultLib)return
uf(t),am.length=0,Og=[],Rg=a&&Sf?[]:void 0,e.forEach(t.statements,_d),ld(),e.isExternalModule(t)&&Fu(t),t.isDeclarationFile||Iu(),Og=void 0,Rg=void 0,e.isExternalOrCommonJsModule(t)&&cd(t),am.length&&(e.forEach(am,Vu),am.length=0),n.flags|=1}}function fd(e,t){try{return ff=t,gd(e)}finally{ff=void 0}}function gd(t){return yd(),t?(dd(t),om.getDiagnostics(t.fileName)):(e.forEach(r.getSourceFiles(),dd),om.getDiagnostics())}function md(){return yd(),om.getGlobalDiagnostics()}function yd(){if(!a)throw Error("Trying to get diagnostics from a type checker that does not produce them.")}function hd(e){if(e)for(;e.parent;){if(212===e.parent.kind&&e.parent.statement===e)return!0
e=e.parent}return!1}function vd(t,n){function r(){for(;t;){switch(t.locals&&!v(t)&&i(t.locals,n),t.kind){case 256:if(!e.isExternalOrCommonJsModule(t))break
case 225:i(se(t).exports,8914931&n)
break
case 224:i(se(t).exports,8&n)
break
case 192:var r=t.name
r&&a(t.symbol,n)
case 221:case 222:32&s||i(se(t).members,793064&n)
break
case 179:var o=t.name
o&&a(t.symbol,n)}e.introducesArgumentsExoticObject(t)&&a(Nf,n),s=t.flags,t=t.parent}i(Kg,n)}function a(e,t){if(e.flags&t){var n=e.name
o[n]||(o[n]=e)}}function i(e,t){if(t)for(var n in e){var r=e[n]
a(r,t)}}var o=e.createMap(),s=0
return hd(t)?[]:(r(),Jn(o))}function kd(e){return 69===e.kind&&bd(e.parent)&&e.parent.name===e}function bd(e){switch(e.kind){case 141:case 221:case 222:case 223:case 224:return!0}}function xd(e){for(var t=e;t.parent&&139===t.parent.kind;)t=t.parent
return t.parent&&(155===t.parent.kind||267===t.parent.kind)}function Dd(e){for(var t=e;t.parent&&172===t.parent.kind;)t=t.parent
return t.parent&&194===t.parent.kind}function Cd(t,n){for(var r;;){if(t=e.getContainingClass(t),!t)break
if(r=n(t))break}return r}function Sd(e,t){return!!Cd(e,function(e){return e===t})}function Td(e){for(;139===e.parent.kind;)e=e.parent
return 229===e.parent.kind?e.parent.moduleReference===e&&e.parent:235===e.parent.kind?e.parent.expression===e&&e.parent:void 0}function Ed(e){return void 0!==Td(e)}function wd(t){if(e.isDeclarationName(t))return se(t.parent)
if(e.isInJavaScriptFile(t)&&172===t.parent.kind){var n=e.getSpecialPropertyAssignmentKind(t.parent.parent)
switch(n){case 1:case 3:return se(t.parent)
case 4:case 2:return se(t.parent.parent)}}if(235===t.parent.kind&&e.isEntityNameExpression(t))return X(t,9289727)
if(172!==t.kind&&Ed(t)){var r=e.getAncestor(t,229)
return e.Debug.assert(void 0!==r),H(t,r,!0)}if(e.isRightSideOfQualifiedNameOrPropertyAccess(t)&&(t=t.parent),Dd(t)){var a=0
return 194===t.parent.kind?(a=793064,e.isExpressionWithTypeArgumentsInClassExtendsClause(t.parent)&&(a|=107455)):a=1920,a|=8388608,X(t,a)}if(e.isExpression(t)){if(e.nodeIsMissing(t))return
if(69===t.kind)return e.isJSXTagName(t)&&Ps(t)?Is(t.parent):X(t,107455,!1,!0)
if(172===t.kind){var i=h(t).resolvedSymbol
return i||Qs(t),h(t).resolvedSymbol}if(139===t.kind){var i=h(t).resolvedSymbol
return i||Ys(t),h(t).resolvedSymbol}}else{if(xd(t)){var a=155===t.parent.kind||267===t.parent.kind?793064:1920
return X(t,a,!1,!0)}if(246===t.parent.kind)return Ks(t.parent)}return 154===t.parent.kind?X(t,1):void 0}function Ad(t){if(256===t.kind)return e.isExternalModule(t)?oe(t.symbol):void 0
if(!hd(t)){if(e.isDeclarationName(t))return se(t.parent)
if(e.isLiteralComputedPropertyDeclarationName(t))return se(t.parent.parent)
if(69===t.kind){if(Ed(t))return wd(t)
if(169===t.parent.kind&&167===t.parent.parent.kind&&t===t.parent.propertyName){var n=Od(t.parent.parent),r=n&&An(n,t.text)
if(r)return r}}switch(t.kind){case 69:case 172:case 139:return wd(t)
case 97:var a=e.getThisContainer(t,!1)
if(e.isFunctionLike(a)){var i=Un(a)
if(i.thisParameter)return i.thisParameter}case 95:var o=e.isExpression(t)?j_(t):aa(t)
return o.symbol
case 165:return aa(t).symbol
case 121:var s=t.parent
if(s&&148===s.kind)return s.parent.symbol
return
case 9:if(e.isExternalModuleImportEqualsDeclaration(t.parent.parent)&&e.getExternalModuleImportEqualsDeclarationExpression(t.parent.parent)===t||(230===t.parent.kind||236===t.parent.kind)&&t.parent.moduleSpecifier===t)return Q(t,t)
case 8:if(173===t.parent.kind&&t.parent.argumentExpression===t){var c=j_(t.parent.expression)
if(c===Kf)return
var _=Tn(c)
if(_===Kf)return
return An(_,t.text)}}}}function Nd(e){return e&&254===e.kind?X(e.name,8496063):void 0}function Pd(e){return e.parent.parent.moduleSpecifier?L(e.parent.parent,e):X(e.propertyName||e.name,9289727)}function Od(t){if(hd(t))return Kf
if(e.isTypeNode(t))return aa(t)
if(e.isExpression(t))return Id(t)
if(e.isExpressionWithTypeArgumentsInClassExtendsClause(t))return Ft(Ht(se(t.parent.parent)))[0]
if(bd(t)){var n=se(t)
return Ht(n)}if(kd(t)){var n=Ad(t)
return n&&Ht(n)}if(e.isDeclaration(t)){var n=se(t)
return bt(n)}if(e.isDeclarationName(t)){var n=Ad(t)
return n&&bt(n)}if(e.isBindingPattern(t))return it(t.parent,!0)
if(Ed(t)){var n=Ad(t),r=n&&Ht(n)
return r!==Kf?r:bt(n)}return Kf}function Rd(t){if(e.Debug.assert(171===t.kind||170===t.kind),208===t.parent.kind){var n=dl(t.parent.expression)
return C_(t,n||Kf)}if(187===t.parent.kind){var n=j_(t.parent.right)
return C_(t,n||Kf)}if(253===t.parent.kind){var r=Rd(t.parent.parent)
return b_(r||Kf,t.parent)}e.Debug.assert(170===t.parent.kind)
var a=Rd(t.parent),i=pl(a||Kf,t.parent,!1)||Kf
return D_(t.parent,a,e.indexOf(t.parent.elements,t),i||Kf)}function Fd(e){var t=Rd(e.parent.parent)
return t&&An(t,e.text)}function Id(t){return e.isRightSideOfQualifiedNameOrPropertyAccess(t)&&(t=t.parent),j_(t)}function Md(e){var t=se(e.parent)
return 32&e.flags?bt(t):Ht(t)}function Ld(t){t=Tn(t)
var n=Zt(Cn(t))
return(Pn(t,0).length||Pn(t,1).length)&&e.forEach(Cn(og),function(e){n[e.name]||(n[e.name]=e)}),ye(n)}function Bd(t){if(268435456&t.flags){var n=[],r=t.name
return e.forEach(y(t).containingType.types,function(e){var t=An(e,r)
t&&n.push(t)}),n}if(67108864&t.flags){for(var a=void 0,i=t;i=y(i).target;)a=i
if(a)return[a]}return[t]}function Jd(e){return cp(e)===Nf}function Kd(t){function n(e){return e=U(e),e&&!!(107455&e.flags)}var r=Q(t.parent,t)
if(!r||e.isShorthandAmbientModuleSymbol(r))return!0
var a=ee(r)
r=$(r)
var i=y(r)
return void 0===i.exportsSomeValue&&(i.exportsSomeValue=a?!!(107455&r.flags):e.forEachProperty(re(r),n)),i.exportsSomeValue}function zd(t){var n=cp(t)
if(n){if(1048576&n.flags){var r=oe(n.exportSymbol)
if(944&r.flags)return
n=r}var a=ce(n)
if(a){if(512&a.flags&&256===a.valueDeclaration.kind&&a.valueDeclaration===e.getSourceFileOfNode(t))return a.valueDeclaration
for(var i=t.parent;i;i=i.parent)if((225===i.kind||224===i.kind)&&se(i)===a)return i}}}function jd(e){var t=cp(e)
return t&&8388608&t.flags?N(t):void 0}function Ud(t){if(418&t.flags){var n=y(t)
if(void 0===n.isDeclarationWithCollidingName){var r=e.getEnclosingBlockScopeContainer(t.valueDeclaration)
if(e.isStatementWithLocals(r)){var a=h(t.valueDeclaration)
if(D(r.parent,t.name,107455,void 0,void 0))n.isDeclarationWithCollidingName=!0
else if(131072&a.flags){var i=262144&a.flags,o=e.isIterationStatement(r,!1),s=199===r.kind&&e.isIterationStatement(r.parent,!1)
n.isDeclarationWithCollidingName=!(e.isBlockScopedContainerTopLevel(r)||i&&(o||s))}else n.isDeclarationWithCollidingName=!1}}return n.isDeclarationWithCollidingName}return!1}function qd(e){var t=cp(e)
return t&&Ud(t)?t.valueDeclaration:void 0}function Wd(e){return Ud(se(e))}function Vd(t){switch(t.kind){case 229:case 231:case 232:case 234:case 238:return Gd(se(t))
case 236:var n=t.exportClause
return n&&e.forEach(n.elements,Vd)
case 235:return t.expression&&69===t.expression.kind?Gd(se(t)):!0}return!1}function Hd(t){if(256!==t.parent.kind||!e.isInternalModuleImportEqualsDeclaration(t))return!1
var n=Gd(se(t))
return n&&t.moduleReference&&!e.nodeIsMissing(t.moduleReference)}function Gd(e){var t=q(e)
return t===Lf?!0:107455&t.flags&&(xf.preserveConstEnums||!Xd(t))}function Xd(e){return y_(e)||e.constEnumOnlyModule}function Qd(t,n){if(e.isAliasSymbolDeclaration(t)){var r=se(t)
if(y(r).referenced)return!0}return n?e.forEachChild(t,function(e){return Qd(e,n)}):!1}function Yd(t){if(e.nodeIsPresent(t.body)){var n=se(t),r=Wn(n)
return r.length>1||1===r.length&&r[0].declaration!==t}return!1}function $d(e){return h(e).flags}function Zd(e){return Wl(e.parent),h(e).enumMemberValue}function ep(t){if(255===t.kind)return Zd(t)
var n=h(t).resolvedSymbol
return n&&8&n.flags&&e.isConstEnumDeclaration(n.valueDeclaration.parent)?Zd(n.valueDeclaration):void 0}function tp(e){return 2588672&e.flags&&Pn(e,0).length>0}function np(t){var n=X(t,107455,!0),r=n?bt(n):void 0
if(r&&At(r))return e.TypeReferenceSerializationKind.TypeWithConstructSignatureAndValue
var a=X(t,793064,!0)
if(!a)return e.TypeReferenceSerializationKind.ObjectType
var i=Ht(a)
return i===Kf?e.TypeReferenceSerializationKind.Unknown:1&i.flags?e.TypeReferenceSerializationKind.ObjectType:g_(i,1024)?e.TypeReferenceSerializationKind.VoidType:g_(i,136)?e.TypeReferenceSerializationKind.BooleanType:g_(i,340)?e.TypeReferenceSerializationKind.NumberLikeType:g_(i,34)?e.TypeReferenceSerializationKind.StringLikeType:_i(i)?e.TypeReferenceSerializationKind.ArrayLikeType:g_(i,512)?e.TypeReferenceSerializationKind.ESSymbolType:tp(i)?e.TypeReferenceSerializationKind.TypeWithCallSignature:ri(i)?e.TypeReferenceSerializationKind.ArrayLikeType:e.TypeReferenceSerializationKind.ObjectType}function rp(e,t,n,r){var a=se(e),i=!a||133120&a.flags?Kf:bt(a)
Ke().buildTypeDisplay(i,r,t,n)}function ap(e,t,n,r){var a=Un(e)
Ke().buildTypeDisplay(Gn(a),r,t,n)}function ip(e,t,n,r){var a=bi(Id(e))
Ke().buildTypeDisplay(a,r,t,n)}function op(e,t,n,r){var a=Ht(se(e))
It(a)
var i=a.resolvedBaseTypes.length?a.resolvedBaseTypes[0]:Kf
Ke().buildTypeDisplay(i,r,t,n)}function sp(e){return!!Kg[e]}function cp(e){return h(e).resolvedSymbol||D(e,e.text,9544639,void 0,void 0)}function _p(t){e.Debug.assert(!e.nodeIsSynthesized(t))
var n=cp(t)
return n&&_e(n).valueDeclaration}function up(){function t(e){if(i){var t=172===e.kind||69===e.kind&&Li(e)?1156031:794600,r=X(e,t,!0)
return r&&r!==Lf?n(r,t):void 0}}function n(t,n){if(i&&a(t)){for(var r,o=0,s=t.declarations;o<s.length;o++){var c=s[o]
if(c.symbol&&c.symbol.flags&n){var _=e.getSourceFileOfNode(c),u=i.get(_.path)
u&&(r||(r=[])).push(u)}}return r}}function a(t){if(!t.declarations)return!1
for(var n=t;;){var r=ce(n)
if(!r)break
n=r}if(n.valueDeclaration&&256===n.valueDeclaration.kind&&512&n.flags)return!1
for(var a=0,o=t.declarations;a<o.length;a++){var s=o[a],c=e.getSourceFileOfNode(s)
if(i.contains(c.path))return!0}return!1}var i,o=r.getResolvedTypeReferenceDirectives()
if(o){i=e.createFileMap()
for(var s in o){var c=o[s]
if(c){var _=r.getSourceFile(c.resolvedFileName)
i.set(_.path,s)}}}return{getReferencedExportContainer:zd,getReferencedImportDeclaration:jd,getReferencedDeclarationWithCollidingName:qd,isDeclarationWithCollidingName:Wd,isValueAliasDeclaration:Vd,hasGlobalName:sp,isReferencedAliasDeclaration:Qd,getNodeCheckFlags:$d,isTopLevelValueImportEqualsWithEntityName:Hd,isDeclarationVisible:ze,isImplementationOfOverload:Yd,writeTypeOfDeclaration:rp,writeReturnTypeOfSignatureDeclaration:ap,writeTypeOfExpression:ip,writeBaseConstructorTypeOfClass:op,isSymbolAccessible:Se,isEntityNameVisible:we,getConstantValue:ep,collectLinkedAliases:je,getReferencedValueDeclaration:_p,getTypeReferenceSerializationKind:np,isOptionalParameter:zn,moduleExportsSomeValue:Kd,isArgumentsLocalBinding:Jd,getExternalModuleFileFromDeclaration:lp,getTypeReferenceDirectivesForEntityName:t,getTypeReferenceDirectivesForSymbol:n}}function lp(t){var n=e.getExternalModuleName(t),r=Y(n,n,void 0)
return r?e.getDeclarationOfKind(r,256):void 0}function dp(){e.forEach(r.getSourceFiles(),function(t){e.bindSourceFile(t,xf)})
var t
if(e.forEach(r.getSourceFiles(),function(n){e.isExternalOrCommonJsModule(n)||f(Kg,n.locals),n.patternAmbientModules&&n.patternAmbientModules.length&&(ng=e.concatenate(ng,n.patternAmbientModules)),n.moduleAugmentations.length&&(t||(t=[])).push(n.moduleAugmentations),n.symbol&&n.symbol.globalExports&&f(Kg,n.symbol.globalExports)}),t)for(var n=0,a=t;n<a.length;n++)for(var i=a[n],o=0,s=i;o<s.length;o++){var c=s[o]
g(c)}m(Kg,km,e.Diagnostics.Declaration_name_conflicts_with_built_in_global_identifier_0),y(Af).type=jf,y(Nf).type=Cr("IArguments"),y(Lf).type=Kf,sg=Cr("Array",1),ig=Cr("Object"),og=Cr("Function"),_g=Cr("String"),ug=Cr("Number"),lg=Cr("Boolean"),dg=Cr("RegExp"),sm=Sr("JSX",fm.Element),kg=e.memoize(function(){return Cr("ClassDecorator")}),xg=e.memoize(function(){return Cr("PropertyDecorator")}),Dg=e.memoize(function(){return Cr("MethodDecorator")}),bg=e.memoize(function(){return Cr("ParameterDecorator")}),Cg=e.memoize(function(){return Cr("TypedPropertyDescriptor",1)}),rg=e.memoize(function(){return br("Symbol")}),Sg=e.memoize(function(){return Cr("Promise",1)}),Tg=e.memoize(function(){return Dr("Promise",793064,void 0)&&Sg()}),Eg=e.memoize(function(){return Cr("PromiseLike",1)}),wg=e.memoize(pp),ag=e.memoize(function(){return br("Promise")}),Ag=e.memoize(function(){return Cr("PromiseConstructorLike")}),Ng=e.memoize(fp),gg=e.memoize(function(){return Cr("TemplateStringsArray")}),Df>=2?(mg=e.memoize(function(){return Cr("Symbol")}),yg=e.memoize(function(){return Cr("Iterable",1)}),hg=e.memoize(function(){return Cr("Iterator",1)}),vg=e.memoize(function(){return Cr("IterableIterator",1)})):(mg=e.memoize(function(){return Zf}),yg=e.memoize(function(){return eg}),hg=e.memoize(function(){return eg}),vg=e.memoize(function(){return eg})),pg=Nr(Jf)
var _=Dr("ReadonlyArray",793064,void 0)
cg=_&&kr(_,1),fg=cg?Er(cg,[Jf]):pg}function pp(){var e=Eg()
return e!==eg?_r(e,[Jf]):Zf}function fp(){var e=_(67108868,"then")
y(e).type=og
var t=ge(2097152)
return t.properties=[e],t.members=Zt(t.properties),t.callSignatures=[],t.constructSignatures=[],t}function gp(t){if(!t.decorators)return!1
if(!e.nodeCanBeDecorated(t))return 147!==t.kind||e.nodeIsPresent(t.body)?tf(t,e.Diagnostics.Decorators_are_not_valid_here):tf(t,e.Diagnostics.A_decorator_can_only_decorate_a_method_implementation_not_an_overload)
if(149===t.kind||150===t.kind){var n=e.getAllAccessorDeclarations(t.parent.members,t)
if(n.firstAccessor.decorators&&t===n.secondAccessor)return tf(t,e.Diagnostics.Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name)}return!1}function mp(t){var n=yp(t)
if(void 0!==n)return n
for(var r,a,i,o,s,c,_=0,u=0,l=t.modifiers;u<l.length;u++){var d=l[u]
if(128!==d.kind){if(144===t.kind||146===t.kind)return rf(d,e.Diagnostics._0_modifier_cannot_appear_on_a_type_member,e.tokenToString(d.kind))
if(153===t.kind)return rf(d,e.Diagnostics._0_modifier_cannot_appear_on_an_index_signature,e.tokenToString(d.kind))}switch(d.kind){case 74:if(224!==t.kind&&221===t.parent.kind)return rf(t,e.Diagnostics.A_class_member_cannot_have_the_0_keyword,e.tokenToString(74))
break
case 112:case 111:case 110:var p=Le(e.modifierToFlag(d.kind))
if(111===d.kind?i=d:110===d.kind&&(a=d),28&_)return rf(d,e.Diagnostics.Accessibility_modifier_already_seen)
if(32&_)return rf(d,e.Diagnostics._0_modifier_must_precede_1_modifier,p,"static")
if(64&_)return rf(d,e.Diagnostics._0_modifier_must_precede_1_modifier,p,"readonly")
if(256&_)return rf(d,e.Diagnostics._0_modifier_must_precede_1_modifier,p,"async")
if(226===t.parent.kind||256===t.parent.kind)return rf(d,e.Diagnostics._0_modifier_cannot_appear_on_a_module_or_namespace_element,p)
if(128&_)return 110===d.kind?rf(d,e.Diagnostics._0_modifier_cannot_be_used_with_1_modifier,p,"abstract"):rf(d,e.Diagnostics._0_modifier_must_precede_1_modifier,p,"abstract")
_|=e.modifierToFlag(d.kind)
break
case 113:if(32&_)return rf(d,e.Diagnostics._0_modifier_already_seen,"static")
if(64&_)return rf(d,e.Diagnostics._0_modifier_must_precede_1_modifier,"static","readonly")
if(256&_)return rf(d,e.Diagnostics._0_modifier_must_precede_1_modifier,"static","async")
if(226===t.parent.kind||256===t.parent.kind)return rf(d,e.Diagnostics._0_modifier_cannot_appear_on_a_module_or_namespace_element,"static")
if(142===t.kind)return rf(d,e.Diagnostics._0_modifier_cannot_appear_on_a_parameter,"static")
if(128&_)return rf(d,e.Diagnostics._0_modifier_cannot_be_used_with_1_modifier,"static","abstract")
_|=32,r=d
break
case 128:if(64&_)return rf(d,e.Diagnostics._0_modifier_already_seen,"readonly")
if(145!==t.kind&&144!==t.kind&&153!==t.kind&&142!==t.kind)return rf(d,e.Diagnostics.readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature)
_|=64,c=d
break
case 82:if(1&_)return rf(d,e.Diagnostics._0_modifier_already_seen,"export")
if(2&_)return rf(d,e.Diagnostics._0_modifier_must_precede_1_modifier,"export","declare")
if(128&_)return rf(d,e.Diagnostics._0_modifier_must_precede_1_modifier,"export","abstract")
if(256&_)return rf(d,e.Diagnostics._0_modifier_must_precede_1_modifier,"export","async")
if(221===t.parent.kind)return rf(d,e.Diagnostics._0_modifier_cannot_appear_on_a_class_element,"export")
if(142===t.kind)return rf(d,e.Diagnostics._0_modifier_cannot_appear_on_a_parameter,"export")
_|=1
break
case 122:if(2&_)return rf(d,e.Diagnostics._0_modifier_already_seen,"declare")
if(256&_)return rf(d,e.Diagnostics._0_modifier_cannot_be_used_in_an_ambient_context,"async")
if(221===t.parent.kind)return rf(d,e.Diagnostics._0_modifier_cannot_appear_on_a_class_element,"declare")
if(142===t.kind)return rf(d,e.Diagnostics._0_modifier_cannot_appear_on_a_parameter,"declare")
if(e.isInAmbientContext(t.parent)&&226===t.parent.kind)return rf(d,e.Diagnostics.A_declare_modifier_cannot_be_used_in_an_already_ambient_context)
_|=2,o=d
break
case 115:if(128&_)return rf(d,e.Diagnostics._0_modifier_already_seen,"abstract")
if(221!==t.kind){if(147!==t.kind&&145!==t.kind&&149!==t.kind&&150!==t.kind)return rf(d,e.Diagnostics.abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration)
if(!(221===t.parent.kind&&128&t.parent.flags))return rf(d,e.Diagnostics.Abstract_methods_can_only_appear_within_an_abstract_class)
if(32&_)return rf(d,e.Diagnostics._0_modifier_cannot_be_used_with_1_modifier,"static","abstract")
if(8&_)return rf(d,e.Diagnostics._0_modifier_cannot_be_used_with_1_modifier,"private","abstract")}_|=128
break
case 118:if(256&_)return rf(d,e.Diagnostics._0_modifier_already_seen,"async")
if(2&_||e.isInAmbientContext(t.parent))return rf(d,e.Diagnostics._0_modifier_cannot_be_used_in_an_ambient_context,"async")
if(142===t.kind)return rf(d,e.Diagnostics._0_modifier_cannot_appear_on_a_parameter,"async")
_|=256,s=d}}return 148!==t.kind?(230===t.kind||229===t.kind)&&2&_?rf(o,e.Diagnostics.A_0_modifier_cannot_be_used_with_an_import_declaration,"declare"):142===t.kind&&92&_&&e.isBindingPattern(t.name)?rf(t,e.Diagnostics.A_parameter_property_may_not_be_declared_using_a_binding_pattern):142===t.kind&&92&_&&t.dotDotDotToken?rf(t,e.Diagnostics.A_parameter_property_cannot_be_declared_using_a_rest_parameter):256&_?kp(t,s):void 0:32&_?rf(r,e.Diagnostics._0_modifier_cannot_appear_on_a_constructor_declaration,"static"):128&_?rf(r,e.Diagnostics._0_modifier_cannot_appear_on_a_constructor_declaration,"abstract"):256&_?rf(s,e.Diagnostics._0_modifier_cannot_appear_on_a_constructor_declaration,"async"):64&_?rf(c,e.Diagnostics._0_modifier_cannot_appear_on_a_constructor_declaration,"readonly"):void 0}function yp(t){return t.modifiers?hp(t)?tf(t,e.Diagnostics.Modifiers_cannot_appear_here):void 0:!1}function hp(t){switch(t.kind){case 149:case 150:case 148:case 145:case 144:case 147:case 146:case 153:case 225:case 230:case 229:case 236:case 235:case 179:case 180:case 142:return!1
default:if(226===t.parent.kind||256===t.parent.kind)return!1
switch(t.kind){case 220:return vp(t,118)
case 221:return vp(t,115)
case 222:case 200:case 223:return!0
case 224:return vp(t,74)
default:return e.Debug.fail(),!1}}}function vp(e,t){return e.modifiers.length>1||e.modifiers[0].kind!==t}function kp(t,n){if(2>Df)return rf(n,e.Diagnostics.Async_functions_are_only_available_when_targeting_ECMAScript_2015_or_higher)
switch(t.kind){case 147:case 220:case 179:case 180:if(!t.asteriskToken)return!1}return rf(n,e.Diagnostics._0_modifier_cannot_be_used_here,"async")}function bp(t){if(t&&t.hasTrailingComma){var n=t.end-1,r=t.end,a=e.getSourceFileOfNode(t[0])
return nf(a,n,r-n,e.Diagnostics.Trailing_comma_not_allowed)}}function xp(t,n,r){if(bp(n))return!0
if(n&&0===n.length){var a=n.pos-1,i=e.skipTrivia(r.text,n.end)+1
return nf(r,a,i-a,e.Diagnostics.Type_parameter_list_cannot_be_empty)}}function Dp(t){for(var n=!1,r=t.length,a=0;r>a;a++){var i=t[a]
if(i.dotDotDotToken){if(a!==r-1)return rf(i.dotDotDotToken,e.Diagnostics.A_rest_parameter_must_be_last_in_a_parameter_list)
if(e.isBindingPattern(i.name))return rf(i.name,e.Diagnostics.A_rest_element_cannot_contain_a_binding_pattern)
if(i.questionToken)return rf(i.questionToken,e.Diagnostics.A_rest_parameter_cannot_be_optional)
if(i.initializer)return rf(i.name,e.Diagnostics.A_rest_parameter_cannot_have_an_initializer)}else if(i.questionToken){if(n=!0,i.initializer)return rf(i.name,e.Diagnostics.Parameter_cannot_have_question_mark_and_initializer)}else if(n&&!i.initializer)return rf(i.name,e.Diagnostics.A_required_parameter_cannot_follow_an_optional_parameter)}}function Cp(t){var n=e.getSourceFileOfNode(t)
return gp(t)||mp(t)||xp(t,t.typeParameters,n)||Dp(t.parameters)||Sp(t,n)}function Sp(t,n){if(180===t.kind){var r=t,a=e.getLineAndCharacterOfPosition(n,r.equalsGreaterThanToken.pos).line,i=e.getLineAndCharacterOfPosition(n,r.equalsGreaterThanToken.end).line
if(a!==i)return rf(r.equalsGreaterThanToken,e.Diagnostics.Line_terminator_not_permitted_before_arrow)}return!1}function Tp(t){var n=t.parameters[0]
return 1!==t.parameters.length?n?rf(n.name,e.Diagnostics.An_index_signature_must_have_exactly_one_parameter):rf(t,e.Diagnostics.An_index_signature_must_have_exactly_one_parameter):n.dotDotDotToken?rf(n.dotDotDotToken,e.Diagnostics.An_index_signature_cannot_have_a_rest_parameter):1023&n.flags?rf(n.name,e.Diagnostics.An_index_signature_parameter_cannot_have_an_accessibility_modifier):n.questionToken?rf(n.questionToken,e.Diagnostics.An_index_signature_parameter_cannot_have_a_question_mark):n.initializer?rf(n.name,e.Diagnostics.An_index_signature_parameter_cannot_have_an_initializer):n.type?132!==n.type.kind&&130!==n.type.kind?rf(n.name,e.Diagnostics.An_index_signature_parameter_type_must_be_string_or_number):t.type?void 0:rf(t,e.Diagnostics.An_index_signature_must_have_a_type_annotation):rf(n.name,e.Diagnostics.An_index_signature_parameter_must_have_a_type_annotation)}function Ep(e){return gp(e)||mp(e)||Tp(e)}function wp(t,n){if(n&&0===n.length){var r=e.getSourceFileOfNode(t),a=n.pos-1,i=e.skipTrivia(r.text,n.end)+1
return nf(r,a,i-a,e.Diagnostics.Type_argument_list_cannot_be_empty)}}function Ap(e,t){return bp(t)||wp(e,t)}function Np(t,n){if(n)for(var r=e.getSourceFileOfNode(t),a=0,i=n;a<i.length;a++){var o=i[a]
if(193===o.kind)return nf(r,o.pos,0,e.Diagnostics.Argument_expression_expected)}}function Pp(e,t){return Np(e,t)}function Op(t){var n=t.types
if(bp(n))return!0
if(n&&0===n.length){var r=e.tokenToString(t.token),a=e.getSourceFileOfNode(t)
return nf(a,n.pos,0,e.Diagnostics._0_list_cannot_be_empty,r)}}function Rp(t){var n=!1,r=!1
if(!gp(t)&&!mp(t)&&t.heritageClauses)for(var a=0,i=t.heritageClauses;a<i.length;a++){var o=i[a]
if(83===o.token){if(n)return tf(o,e.Diagnostics.extends_clause_already_seen)
if(r)return tf(o,e.Diagnostics.extends_clause_must_precede_implements_clause)
if(o.types.length>1)return tf(o.types[1],e.Diagnostics.Classes_can_only_extend_a_single_class)
n=!0}else{if(e.Debug.assert(106===o.token),r)return tf(o,e.Diagnostics.implements_clause_already_seen)
r=!0}Op(o)}}function Fp(t){var n=!1
if(t.heritageClauses)for(var r=0,a=t.heritageClauses;r<a.length;r++){var i=a[r]
if(83!==i.token)return e.Debug.assert(106===i.token),tf(i,e.Diagnostics.Interface_declaration_cannot_have_implements_clause)
if(n)return tf(i,e.Diagnostics.extends_clause_already_seen)
n=!0,Op(i)}return!1}function Ip(t){if(140!==t.kind)return!1
var n=t
return 187===n.expression.kind&&24===n.expression.operatorToken.kind?rf(n.expression,e.Diagnostics.A_comma_expression_is_not_allowed_in_a_computed_property_name):void 0}function Mp(t){if(t.asteriskToken){if(e.Debug.assert(220===t.kind||179===t.kind||147===t.kind),e.isInAmbientContext(t))return rf(t.asteriskToken,e.Diagnostics.Generators_are_not_allowed_in_an_ambient_context)
if(!t.body)return rf(t.asteriskToken,e.Diagnostics.An_overload_signature_cannot_be_declared_as_a_generator)
if(2>Df)return rf(t.asteriskToken,e.Diagnostics.Generators_are_only_available_when_targeting_ECMAScript_2015_or_higher)}}function Lp(e,t,n){return t?rf(t,n):void 0}function Bp(t,n){for(var r=e.createMap(),a=1,i=2,o=4,s=i|o,c=function(t){var c=t.name
if((193===t.kind||140===c.kind)&&Ip(c),254===t.kind&&!n&&t.objectAssignmentInitializer)return{value:rf(t.equalsToken,e.Diagnostics.can_only_be_used_in_an_object_literal_property_inside_a_destructuring_assignment)}
e.forEach(t.modifiers,function(n){(118!==n.kind||147!==t.kind)&&rf(n,e.Diagnostics._0_modifier_cannot_be_used_here,e.getTextOfNode(n))})
var _=void 0
253===t.kind||254===t.kind?(Lp(t,t.questionToken,e.Diagnostics.An_object_member_cannot_be_declared_optional),8===c.kind&&df(c),_=a):147===t.kind?_=a:149===t.kind?_=i:150===t.kind?_=o:e.Debug.fail("Unexpected syntax kind:"+t.kind)
var u=e.getPropertyNameForPropertyNameNode(c)
if(void 0===u)return"continue"
if(r[u]){var l=r[u]
if(_===a&&l===a)rf(c,e.Diagnostics.Duplicate_identifier_0,e.getTextOfNode(c))
else{if(!(_&s&&l&s))return{value:rf(c,e.Diagnostics.An_object_literal_cannot_have_property_and_accessor_with_the_same_name)}
if(l===s||_===l)return{value:rf(c,e.Diagnostics.An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name)}
r[u]=_|l}}else r[u]=_},_=0,u=t.properties;_<u.length;_++){var l=u[_],d=c(l)
if("object"==typeof d)return d.value}}function Jp(t){for(var n=e.createMap(),r=0,a=t.attributes;r<a.length;r++){var i=a[r]
if(247!==i.kind){var o=i,s=o.name
if(n[s.text])return rf(s,e.Diagnostics.JSX_elements_cannot_have_multiple_attributes_with_the_same_name)
n[s.text]=!0
var c=o.initializer
if(c&&248===c.kind&&!c.expression)return rf(o.initializer,e.Diagnostics.JSX_attributes_must_only_be_assigned_a_non_empty_expression)}}}function Kp(t){if(lf(t))return!0
if(219===t.initializer.kind){var n=t.initializer
if(!Yp(n)){var r=n.declarations
if(!r.length)return!1
if(r.length>1){var a=207===t.kind?e.Diagnostics.Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement:e.Diagnostics.Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement
return tf(n.declarations[1],a)}var i=r[0]
if(i.initializer){var a=207===t.kind?e.Diagnostics.The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer:e.Diagnostics.The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer
return rf(i.name,a)}if(i.type){var a=207===t.kind?e.Diagnostics.The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation:e.Diagnostics.The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation
return rf(i,a)}}}return!1}function zp(t){var n=t.kind
if(1>Df)return rf(t.name,e.Diagnostics.Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher)
if(e.isInAmbientContext(t))return rf(t.name,e.Diagnostics.An_accessor_cannot_be_declared_in_an_ambient_context)
if(!(void 0!==t.body||128&t.flags))return nf(e.getSourceFileOfNode(t),t.end-1,1,e.Diagnostics._0_expected,"{")
if(t.typeParameters)return rf(t.name,e.Diagnostics.An_accessor_cannot_have_type_parameters)
if(!jp(t))return rf(t.name,149===n?e.Diagnostics.A_get_accessor_cannot_have_parameters:e.Diagnostics.A_set_accessor_must_have_exactly_one_parameter)
if(150===n){if(t.type)return rf(t.name,e.Diagnostics.A_set_accessor_cannot_have_a_return_type_annotation)
var r=t.parameters[0]
if(r.dotDotDotToken)return rf(r.dotDotDotToken,e.Diagnostics.A_set_accessor_cannot_have_rest_parameter)
if(r.questionToken)return rf(r.questionToken,e.Diagnostics.A_set_accessor_cannot_have_an_optional_parameter)
if(r.initializer)return rf(t.name,e.Diagnostics.A_set_accessor_parameter_cannot_have_an_initializer)}}function jp(e){return Up(e)||e.parameters.length===(149===e.kind?0:1)}function Up(e){return e.parameters.length===(149===e.kind?1:2)&&69===e.parameters[0].name.kind&&97===e.parameters[0].name.originalKeywordKind?e.parameters[0]:void 0}function qp(e){return e.parameters.length&&69===e.parameters[0].name.kind&&97===e.parameters[0].name.originalKeywordKind?e.parameters[0]:void 0}function Wp(t,n){return e.isDynamicName(t)?rf(t,n):void 0}function Vp(t){if(rl(t)||Cp(t)||Mp(t))return!0
if(171===t.parent.kind){if(Lp(t,t.questionToken,e.Diagnostics.An_object_member_cannot_be_declared_optional))return!0
if(void 0===t.body)return nf(e.getSourceFileOfNode(t),t.end-1,1,e.Diagnostics._0_expected,"{")}if(e.isClassLike(t.parent)){if(e.isInAmbientContext(t))return Wp(t.name,e.Diagnostics.A_computed_property_name_in_an_ambient_context_must_directly_refer_to_a_built_in_symbol)
if(!t.body)return Wp(t.name,e.Diagnostics.A_computed_property_name_in_a_method_overload_must_directly_refer_to_a_built_in_symbol)}else{if(222===t.parent.kind)return Wp(t.name,e.Diagnostics.A_computed_property_name_in_an_interface_must_directly_refer_to_a_built_in_symbol)
if(159===t.parent.kind)return Wp(t.name,e.Diagnostics.A_computed_property_name_in_a_type_literal_must_directly_refer_to_a_built_in_symbol)}}function Hp(t){for(var n=t;n;){if(e.isFunctionLike(n))return rf(t,e.Diagnostics.Jump_target_cannot_cross_function_boundary)
switch(n.kind){case 214:if(t.label&&n.label.text===t.label.text){var r=209===t.kind&&!e.isIterationStatement(n.statement,!0)
return r?rf(t,e.Diagnostics.A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement):!1}break
case 213:if(210===t.kind&&!t.label)return!1
break
default:if(e.isIterationStatement(n,!1)&&!t.label)return!1}n=n.parent}if(t.label){var a=210===t.kind?e.Diagnostics.A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement:e.Diagnostics.A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement
return rf(t,a)}var a=210===t.kind?e.Diagnostics.A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement:e.Diagnostics.A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement
return rf(t,a)}function Gp(t){if(t.dotDotDotToken){var n=t.parent.elements
if(t!==e.lastOrUndefined(n))return rf(t,e.Diagnostics.A_rest_element_must_be_last_in_an_array_destructuring_pattern)
if(168===t.name.kind||167===t.name.kind)return rf(t.name,e.Diagnostics.A_rest_element_cannot_contain_a_binding_pattern)
if(t.initializer)return nf(e.getSourceFileOfNode(t),t.initializer.pos-1,1,e.Diagnostics.A_rest_element_cannot_have_an_initializer)}}function Xp(t){if(207!==t.parent.parent.kind&&208!==t.parent.parent.kind)if(e.isInAmbientContext(t)){if(t.initializer){var n=1
return nf(e.getSourceFileOfNode(t),t.initializer.pos-n,n,e.Diagnostics.Initializers_are_not_allowed_in_ambient_contexts)}}else if(!t.initializer){if(e.isBindingPattern(t.name)&&!e.isBindingPattern(t.parent))return rf(t,e.Diagnostics.A_destructuring_declaration_must_have_an_initializer)
if(e.isConst(t))return rf(t,e.Diagnostics.const_declarations_must_be_initialized)}var r=e.isLet(t)||e.isConst(t)
return r&&Qp(t.name)}function Qp(t){if(69===t.kind){if(108===t.originalKeywordKind)return rf(t,e.Diagnostics.let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations)}else for(var n=t.elements,r=0,a=n;r<a.length;r++){var i=a[r]
193!==i.kind&&Qp(i.name)}}function Yp(t){var n=t.declarations
return bp(t.declarations)?!0:t.declarations.length?void 0:nf(e.getSourceFileOfNode(t),n.pos,n.end-n.pos,e.Diagnostics.Variable_declaration_list_cannot_be_empty)}function $p(e){switch(e.kind){case 203:case 204:case 205:case 212:case 206:case 207:case 208:return!1
case 214:return $p(e.parent)}return!0}function Zp(t){if(!$p(t.parent)){if(e.isLet(t.declarationList))return rf(t,e.Diagnostics.let_declarations_can_only_be_declared_inside_a_block)
if(e.isConst(t.declarationList))return rf(t,e.Diagnostics.const_declarations_can_only_be_declared_inside_a_block)}}function ef(e){return e.parseDiagnostics.length>0}function tf(t,n,r,a,i){var o=e.getSourceFileOfNode(t)
if(!ef(o)){var s=e.getSpanOfTokenAtPosition(o,t.pos)
return om.add(e.createFileDiagnostic(o,s.start,s.length,n,r,a,i)),!0}}function nf(t,n,r,a,i,o,s){return ef(t)?void 0:(om.add(e.createFileDiagnostic(t,n,r,a,i,o,s)),!0)}function rf(t,n,r,a,i){var o=e.getSourceFileOfNode(t)
return ef(o)?void 0:(om.add(e.createDiagnosticForNode(t,n,r,a,i)),!0)}function af(t){return t.typeParameters?nf(e.getSourceFileOfNode(t),t.typeParameters.pos,t.typeParameters.end-t.typeParameters.pos,e.Diagnostics.Type_parameters_cannot_appear_on_a_constructor_declaration):void 0}function of(t){return t.type?rf(t.type,e.Diagnostics.Type_annotation_cannot_appear_on_a_constructor_declaration):void 0}function sf(t){if(e.isClassLike(t.parent)){if(Wp(t.name,e.Diagnostics.A_computed_property_name_in_a_class_property_declaration_must_directly_refer_to_a_built_in_symbol))return!0}else if(222===t.parent.kind){if(Wp(t.name,e.Diagnostics.A_computed_property_name_in_an_interface_must_directly_refer_to_a_built_in_symbol))return!0
if(t.initializer)return rf(t.initializer,e.Diagnostics.An_interface_property_cannot_have_an_initializer)}else if(159===t.parent.kind){if(Wp(t.name,e.Diagnostics.A_computed_property_name_in_a_type_literal_must_directly_refer_to_a_built_in_symbol))return!0
if(t.initializer)return rf(t.initializer,e.Diagnostics.A_type_literal_property_cannot_have_an_initializer)}return e.isInAmbientContext(t)&&t.initializer?tf(t.initializer,e.Diagnostics.Initializers_are_not_allowed_in_ambient_contexts):void 0}function cf(t){return 222===t.kind||223===t.kind||230===t.kind||229===t.kind||236===t.kind||235===t.kind||228===t.kind||2&t.flags||513&t.flags?!1:tf(t,e.Diagnostics.A_declare_modifier_is_required_for_a_top_level_declaration_in_a_d_ts_file)}function _f(t){for(var n=0,r=t.statements;n<r.length;n++){var a=r[n]
if((e.isDeclaration(a)||200===a.kind)&&cf(a))return!0}}function uf(t){return e.isInAmbientContext(t)&&_f(t)}function lf(t){if(e.isInAmbientContext(t)){if(Kl(t.parent.kind))return h(t).hasReportedStatementInAmbientContext=!0
var n=h(t)
if(!n.hasReportedStatementInAmbientContext&&e.isFunctionLike(t.parent))return h(t).hasReportedStatementInAmbientContext=tf(t,e.Diagnostics.An_implementation_cannot_be_declared_in_ambient_contexts)
if(199===t.parent.kind||226===t.parent.kind||256===t.parent.kind){var r=h(t.parent)
if(!r.hasReportedStatementInAmbientContext)return r.hasReportedStatementInAmbientContext=tf(t,e.Diagnostics.Statements_are_not_allowed_in_ambient_contexts)}}}function df(t){return t.isOctalLiteral&&Df>=1?rf(t,e.Diagnostics.Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher):void 0}function pf(t,n,r,a,i){var o=e.getSourceFileOfNode(t)
if(!ef(o)){var s=e.getSpanOfTokenAtPosition(o,t.pos)
return om.add(e.createFileDiagnostic(o,e.textSpanEnd(s),0,n,r,a,i)),!0}}var ff,gf=e.objectAllocator.getSymbolConstructor(),mf=e.objectAllocator.getTypeConstructor(),yf=e.objectAllocator.getSignatureConstructor(),hf=0,vf=0,kf=[],bf=e.createMap(),xf=r.getCompilerOptions(),Df=xf.target||0,Cf=e.getEmitModuleKind(xf),Sf=!!xf.noUnusedLocals||!!xf.noUnusedParameters,Tf=void 0!==xf.allowSyntheticDefaultImports?xf.allowSyntheticDefaultImports:Cf===e.ModuleKind.System,Ef=xf.strictNullChecks,wf=up(),Af=_(67108868,"undefined")
Af.declarations=[]
var Nf=_(67108868,"arguments"),Pf={getNodeCount:function(){return e.sum(r.getSourceFiles(),"nodeCount")},getIdentifierCount:function(){return e.sum(r.getSourceFiles(),"identifierCount")},getSymbolCount:function(){return e.sum(r.getSourceFiles(),"symbolCount")+vf},getTypeCount:function(){return hf},isUndefinedSymbol:function(e){return e===Af},isArgumentsSymbol:function(e){return e===Nf},isUnknownSymbol:function(e){return e===Lf},getDiagnostics:fd,getGlobalDiagnostics:md,getTypeOfSymbolAtLocation:To,getSymbolsOfParameterPropertyDeclaration:b,getDeclaredTypeOfSymbol:Ht,getPropertiesOfType:Cn,getPropertyOfType:An,getSignaturesOfType:Pn,getIndexTypeOfType:In,getBaseTypes:Ft,getReturnTypeOfSignature:Gn,getNonNullableType:fi,getSymbolsInScope:vd,getSymbolAtLocation:Ad,getShorthandAssignmentValueSymbol:Nd,getExportSpecifierLocalTargetSymbol:Pd,getTypeAtLocation:Od,getPropertySymbolOfDestructuringAssignment:Fd,typeToString:Fe,getSymbolDisplayBuilder:Ke,symbolToString:Oe,getAugmentedPropertiesOfType:Ld,getRootSymbols:Bd,getContextualType:us,getFullyQualifiedName:G,getResolvedSignature:Fc,getConstantValue:ep,isValidPropertyAccess:Zs,getSignatureFromDeclaration:Un,isImplementationOfOverload:Yd,getAliasedSymbol:q,getEmitResolver:i,getExportsOfModule:te,getJsxElementAttributesType:Js,getJsxIntrinsicTagNames:js,isOptionalParameter:zn},Of=[],Rf=e.createMap(),Ff=e.createMap(),If=e.createMap(),Mf=e.createMap(),Lf=_(67108868,"unknown"),Bf=_(67108864,"__resolving__"),Jf=pe(1,"any"),Kf=pe(1,"unknown"),zf=pe(2048,"undefined"),jf=Ef?zf:pe(33556480,"undefined"),Uf=pe(4096,"null"),qf=Ef?Uf:pe(33558528,"null"),Wf=pe(2,"string"),Vf=pe(4,"number"),Hf=pe(128,"true"),Gf=pe(128,"false"),Xf=fe([Hf,Gf]),Qf=pe(512,"symbol"),Yf=pe(1024,"void"),$f=pe(8192,"never"),Zf=ve(void 0,bf,kf,kf,void 0,void 0),eg=ve(void 0,bf,kf,kf,void 0,void 0)
eg.instantiations=e.createMap()
var tg=ve(void 0,bf,kf,kf,void 0,void 0)
tg.flags|=134217728
var ng,rg,ag,ig,og,sg,cg,_g,ug,lg,dg,pg,fg,gg,mg,yg,hg,vg,kg,bg,xg,Dg,Cg,Sg,Tg,Eg,wg,Ag,Ng,Pg,Og,Rg,Fg,Ig=ve(void 0,bf,kf,kf,void 0,void 0),Mg=cn(void 0,void 0,void 0,kf,Jf,void 0,0,!1,!1),Lg=cn(void 0,void 0,void 0,kf,Kf,void 0,0,!1,!1),Bg=cn(void 0,void 0,void 0,kf,Jf,void 0,0,!1,!1),Jg=tr(Wf,!0),Kg=e.createMap(),zg=0,jg=0,Ug=0,qg=$r(32,""),Wg=$r(64,"0"),Vg=[],Hg=[],Gg=[],Xg=[],Qg=[],Yg=[],$g=[],Zg=[],em=[],tm=[],nm=[],rm=[],am=[],im=[],om=e.createDiagnosticCollection()
!function(e){e[e.None=0]="None",e[e.TypeofEQString=1]="TypeofEQString",e[e.TypeofEQNumber=2]="TypeofEQNumber",e[e.TypeofEQBoolean=4]="TypeofEQBoolean",e[e.TypeofEQSymbol=8]="TypeofEQSymbol",e[e.TypeofEQObject=16]="TypeofEQObject",e[e.TypeofEQFunction=32]="TypeofEQFunction",e[e.TypeofEQHostObject=64]="TypeofEQHostObject",e[e.TypeofNEString=128]="TypeofNEString",e[e.TypeofNENumber=256]="TypeofNENumber",e[e.TypeofNEBoolean=512]="TypeofNEBoolean",e[e.TypeofNESymbol=1024]="TypeofNESymbol",e[e.TypeofNEObject=2048]="TypeofNEObject",e[e.TypeofNEFunction=4096]="TypeofNEFunction",e[e.TypeofNEHostObject=8192]="TypeofNEHostObject",e[e.EQUndefined=16384]="EQUndefined",e[e.EQNull=32768]="EQNull",e[e.EQUndefinedOrNull=65536]="EQUndefinedOrNull",e[e.NEUndefined=131072]="NEUndefined",e[e.NENull=262144]="NENull",e[e.NEUndefinedOrNull=524288]="NEUndefinedOrNull",e[e.Truthy=1048576]="Truthy",e[e.Falsy=2097152]="Falsy",e[e.Discriminatable=4194304]="Discriminatable",e[e.All=8388607]="All",e[e.BaseStringStrictFacts=933633]="BaseStringStrictFacts",e[e.BaseStringFacts=3145473]="BaseStringFacts",e[e.StringStrictFacts=4079361]="StringStrictFacts",e[e.StringFacts=4194049]="StringFacts",e[e.EmptyStringStrictFacts=3030785]="EmptyStringStrictFacts",e[e.EmptyStringFacts=3145473]="EmptyStringFacts",e[e.NonEmptyStringStrictFacts=1982209]="NonEmptyStringStrictFacts",e[e.NonEmptyStringFacts=4194049]="NonEmptyStringFacts",e[e.BaseNumberStrictFacts=933506]="BaseNumberStrictFacts",e[e.BaseNumberFacts=3145346]="BaseNumberFacts",e[e.NumberStrictFacts=4079234]="NumberStrictFacts",e[e.NumberFacts=4193922]="NumberFacts",e[e.ZeroStrictFacts=3030658]="ZeroStrictFacts",e[e.ZeroFacts=3145346]="ZeroFacts",e[e.NonZeroStrictFacts=1982082]="NonZeroStrictFacts",e[e.NonZeroFacts=4193922]="NonZeroFacts",e[e.BaseBooleanStrictFacts=933252]="BaseBooleanStrictFacts",e[e.BaseBooleanFacts=3145092]="BaseBooleanFacts",e[e.BooleanStrictFacts=4078980]="BooleanStrictFacts",e[e.BooleanFacts=4193668]="BooleanFacts",e[e.FalseStrictFacts=3030404]="FalseStrictFacts",e[e.FalseFacts=3145092]="FalseFacts",e[e.TrueStrictFacts=1981828]="TrueStrictFacts",e[e.TrueFacts=4193668]="TrueFacts",e[e.SymbolStrictFacts=1981320]="SymbolStrictFacts",e[e.SymbolFacts=4193160]="SymbolFacts",e[e.ObjectStrictFacts=6166480]="ObjectStrictFacts",e[e.ObjectFacts=8378320]="ObjectFacts",e[e.FunctionStrictFacts=6164448]="FunctionStrictFacts",e[e.FunctionFacts=8376288]="FunctionFacts",e[e.UndefinedFacts=2457472]="UndefinedFacts",e[e.NullFacts=2340752]="NullFacts"}(Fg||(Fg={}))
var sm,cm,_m,um=e.createMap({string:1,number:2,"boolean":4,symbol:8,undefined:16384,object:16,"function":32}),lm=e.createMap({string:128,number:256,"boolean":512,symbol:1024,undefined:131072,object:2048,"function":4096}),dm=e.createMap({string:Wf,number:Vf,"boolean":Xf,symbol:Qf,undefined:zf}),pm=e.createMap(),fm={JSX:"JSX",IntrinsicElements:"IntrinsicElements",ElementClass:"ElementClass",ElementAttributesPropertyNameContainer:"ElementAttributesProperty",Element:"Element",IntrinsicAttributes:"IntrinsicAttributes",IntrinsicClassAttributes:"IntrinsicClassAttributes"},gm=e.createMap(),mm=e.createMap(),ym=e.createMap(),hm=e.createMap(),vm=e.createMap()
!function(e){e[e.Type=0]="Type",e[e.ResolvedBaseConstructorType=1]="ResolvedBaseConstructorType",e[e.DeclaredType=2]="DeclaredType",e[e.ResolvedReturnType=3]="ResolvedReturnType"}(_m||(_m={}))
var km=e.createMap()
return km[Af.name]=Af,dp(),Pf}var a=1,i=1,o=1,s=1
e.getNodeId=t,e.getSymbolId=n,e.createTypeChecker=r}(ts||(ts={}))
var ts
!function(e){function t(){return void 0===i&&(i={getSourceMapData:function(){},setSourceFile:function(e){},emitStart:function(e){},emitEnd:function(e,t){},emitPos:function(e){},changeEmitSourcePos:function(){},getText:function(){},getSourceMappingURL:function(){},initialize:function(e,t,n,r){},reset:function(){}}),i}function n(t,n){function r(n,r,a,s){D&&i(),y=void 0,v=-1,k=void 0,b=o,x=0,D={sourceMapFilePath:r,jsSourceMappingURL:C.inlineSourceMap?void 0:e.getBaseFileName(e.normalizeSlashes(r)),sourceMapFile:e.getBaseFileName(e.normalizeSlashes(n)),sourceMapSourceRoot:C.sourceRoot||"",sourceMapSources:[],inputSourceFileNames:[],sourceMapNames:[],sourceMapMappings:"",sourceMapSourcesContent:C.inlineSources?[]:void 0,sourceMapDecodedMappings:[]},D.sourceMapSourceRoot=e.normalizeSlashes(D.sourceMapSourceRoot),D.sourceMapSourceRoot.length&&47!==D.sourceMapSourceRoot.charCodeAt(D.sourceMapSourceRoot.length-1)&&(D.sourceMapSourceRoot+=e.directorySeparator),C.mapRoot?(h=e.normalizeSlashes(C.mapRoot),s||(e.Debug.assert(1===a.length),h=e.getDirectoryPath(e.getSourceFilePathInNewDir(a[0],t,h))),e.isRootedDiskPath(h)||e.isUrl(h)?D.jsSourceMappingURL=e.combinePaths(h,D.jsSourceMappingURL):(h=e.combinePaths(t.getCommonSourceDirectory(),h),D.jsSourceMappingURL=e.getRelativePathToDirectoryOrUrl(e.getDirectoryPath(e.normalizePath(n)),e.combinePaths(h,D.jsSourceMappingURL),t.getCurrentDirectory(),t.getCanonicalFileName,!0))):h=e.getDirectoryPath(e.normalizePath(n))}function i(){y=void 0,h=void 0,v=void 0,k=void 0,b=void 0,x=void 0,D=void 0}function s(){if(E){E=!1,k.emittedLine=b.emittedLine,k.emittedColumn=b.emittedColumn,D.sourceMapDecodedMappings.pop(),b=D.sourceMapDecodedMappings.length?D.sourceMapDecodedMappings[D.sourceMapDecodedMappings.length-1]:o
for(var e=D.sourceMapMappings,t=e.length-1;t>=0;t--){var n=e.charAt(t)
if(","===n)break
if(";"===n&&0!==t&&";"!==e.charAt(t-1))break}D.sourceMapMappings=e.substr(0,Math.max(0,t))}}function c(){if(k&&k!==b){var t=b.emittedColumn
if(b.emittedLine===k.emittedLine)D.sourceMapMappings&&(D.sourceMapMappings+=",")
else{for(var n=b.emittedLine;n<k.emittedLine;n++)D.sourceMapMappings+=";"
t=1}D.sourceMapMappings+=a(k.emittedColumn-t),D.sourceMapMappings+=a(k.sourceIndex-b.sourceIndex),D.sourceMapMappings+=a(k.sourceLine-b.sourceLine),D.sourceMapMappings+=a(k.sourceColumn-b.sourceColumn),k.nameIndex>=0&&(e.Debug.assert(!1,"We do not support name index right now, Make sure to update updateLastEncodedAndRecordedSpans when we start using this"),D.sourceMapMappings+=a(k.nameIndex-x),x=k.nameIndex),b=k,D.sourceMapDecodedMappings.push(b)}}function _(t){if(-1!==t){S&&e.performance.mark("beforeSourcemap")
var r=e.getLineAndCharacterOfPosition(y,t)
r.line++,r.character++
var a=n.getLine(),i=n.getColumn()
!k||k.emittedLine!==a||k.emittedColumn!==i||k.sourceIndex===v&&(k.sourceLine>r.line||k.sourceLine===r.line&&k.sourceColumn>r.character)?(c(),k={emittedLine:a,emittedColumn:i,sourceLine:r.line,sourceColumn:r.character,sourceIndex:v},T=!1):T||(k.sourceLine=r.line,k.sourceColumn=r.character,k.sourceIndex=v),s(),S&&(e.performance.mark("afterSourcemap"),e.performance.measure("Source Map","beforeSourcemap","afterSourcemap"))}}function u(t){var n=!!t.decorators
return-1!==t.pos?e.skipTrivia(y.text,n?t.decorators.end:t.pos):-1}function l(e){_(u(e))}function d(e,t){_(e.end),T=t}function p(){e.Debug.assert(!E),E=!0}function f(n){y=n
var r=C.sourceRoot?t.getCommonSourceDirectory():h,a=e.getRelativePathToDirectoryOrUrl(r,y.fileName,t.getCurrentDirectory(),t.getCanonicalFileName,!0)
v=e.indexOf(D.sourceMapSources,a),-1===v&&(v=D.sourceMapSources.length,D.sourceMapSources.push(a),D.inputSourceFileNames.push(n.fileName),C.inlineSources&&D.sourceMapSourcesContent.push(n.text))}function g(){return c(),e.stringify({version:3,file:D.sourceMapFile,sourceRoot:D.sourceMapSourceRoot,sources:D.sourceMapSources,names:D.sourceMapNames,mappings:D.sourceMapMappings,sourcesContent:D.sourceMapSourcesContent})}function m(){if(C.inlineSourceMap){var t=e.convertToBase64(g())
return D.jsSourceMappingURL="data:application/json;base64,"+t}return D.jsSourceMappingURL}var y,h,v,k,b,x,D,C=t.getCompilerOptions(),S=C.extendedDiagnostics,T=!1,E=!1
return{getSourceMapData:function(){return D},setSourceFile:f,emitPos:_,emitStart:l,emitEnd:d,changeEmitSourcePos:p,getText:g,getSourceMappingURL:m,initialize:r,reset:i}}function r(e){if(64>e)return s.charAt(e)
throw TypeError(e+": not a 64 based value")}function a(e){0>e?e=(-e<<1)+1:e<<=1
var t=""
do{var n=31&e
e>>=5,e>0&&(n=32|n),t+=r(n)}while(e>0)
return t}var i,o={emittedLine:1,emittedColumn:1,sourceLine:1,sourceColumn:1,sourceIndex:0}
e.getNullSourceMapWriter=t,e.createSourceMapWriter=n
var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"}(ts||(ts={}))
var ts
!function(e){function t(t,r,a){function i(e,a,i){var s=e.declarationFilePath
n(t,r,o,s,a,i)}var o=e.createDiagnosticCollection()
return e.forEachExpectedEmitFile(t,i,a),o.getDiagnostics(a?a.fileName:void 0)}function n(t,n,r,a,i,o){function s(e){var t=me.substring(e.pos,e.end)
return t.indexOf("@internal")>=0}function c(t){if(t){var n=e.getLeadingCommentRanges(me,t.pos)
if(e.forEach(n,s))return
ae(t)}}function _(){var t=e.createTextWriter(de)
t.trackSymbol=f,t.reportInaccessibleThisError=g,t.writeKeyword=t.write,t.writeOperator=t.write,t.writePunctuation=t.write,t.writeSpace=t.write,t.writeStringLiteral=t.writeLiteral,t.writeParameter=t.write,t.writeSymbol=t.write,u(t)}function u(e){le=e,oe=e.write,ue=e.writeTextOfNode,se=e.writeLine,ce=e.increaseIndent,_e=e.decreaseIndent}function l(t){var n=le
e.forEach(t,function(t){var n
218===t.kind?n=t.parent.parent:233===t.kind||234===t.kind||231===t.kind?e.Debug.fail("We should be getting ImportDeclaration instead to write"):n=t
var r=e.forEach(Ee,function(e){return e.node===n?e:void 0})
if(!r&&xe&&(r=e.forEach(xe,function(e){return e.node===n?e:void 0})),r)if(230===r.node.kind)r.isVisible=!0
else{_()
for(var a=r.indent;a;a--)ce()
225===n.kind&&(e.Debug.assert(void 0===xe),xe=[]),A(n),225===n.kind&&(r.subModuleElementDeclarationEmitInfo=xe,xe=void 0),r.asynchronousOutput=le.getText()}}),u(n)}function d(t){if(t){De||(De=e.createMap())
for(var n=0,r=t;n<r.length;n++){var a=r[n]
a in De||(De[a]=a)}}}function p(t){if(0===t.accessibility)t&&t.aliasesToMakeVisible&&l(t.aliasesToMakeVisible)
else{Ce=!0
var n=le.getSymbolAccessibilityDiagnostic(t)
n&&(n.typeName?r.add(e.createDiagnosticForNode(t.errorNode||n.errorNode,n.diagnosticMessage,e.getTextOfNodeFromSourceText(me,n.typeName),t.errorSymbolName,t.errorModuleName)):r.add(e.createDiagnosticForNode(t.errorNode||n.errorNode,n.diagnosticMessage,t.errorSymbolName,t.errorModuleName)))}}function f(e,t,r){p(n.isSymbolAccessible(e,t,r)),d(n.getTypeReferenceDirectivesForSymbol(e,r))}function g(){ke&&(Ce=!0,r.add(e.createDiagnosticForNode(ke,e.Diagnostics.The_inferred_type_of_0_references_an_inaccessible_this_type_A_type_annotation_is_necessary,e.declarationNameToString(ke))))}function m(e,t,r){le.getSymbolAccessibilityDiagnostic=r,oe(": "),t?D(t):(ke=e.name,n.writeTypeOfDeclaration(e,fe,1026,le),ke=void 0)}function y(e,t){le.getSymbolAccessibilityDiagnostic=t,oe(": "),e.type?D(e.type):(ke=e.name,n.writeReturnTypeOfSignatureDeclaration(e,fe,1026,le),ke=void 0)}function h(e){for(var t=0,n=e;t<n.length;t++){var r=n[t]
Te(r)}}function v(e,t,n,r){for(var a=le.getTextPos(),i=0,o=e;i<o.length;i++){var s=o[i];(!r||r(s))&&(a!==le.getTextPos()&&oe(t),a=le.getTextPos(),n(s))}}function k(e,t,n){v(e,", ",t,n)}function b(t){if(t){var n=e.getJsDocCommentsFromText(t,me)
e.emitNewLineBeforeLeadingComments(ye,le,t,n),e.emitComments(me,ye,le,n,!0,de,e.writeCommentRange)}}function x(e,t){le.getSymbolAccessibilityDiagnostic=t,D(e)}function D(t){function r(e){if(69===e.kind)ue(me,e)
else{var t=139===e.kind?e.left:e.expression,n=139===e.kind?e.right:e.name
r(t),oe("."),ue(me,n)}}function a(e){var t=n.isEntityNameVisible(e,229===e.parent.kind?e.parent:fe)
p(t),d(n.getTypeReferenceDirectivesForEntityName(e)),r(e)}function i(t){e.isEntityNameExpression(t.expression)&&(e.Debug.assert(69===t.expression.kind||172===t.expression.kind),a(t.expression),t.typeArguments&&(oe("<"),k(t.typeArguments,D),oe(">")))}function o(e){a(e.typeName),e.typeArguments&&(oe("<"),k(e.typeArguments,D),oe(">"))}function s(e){ue(me,e.parameterName),oe(" is "),D(e.type)}function c(e){oe("typeof "),a(e.exprName)}function _(e){D(e.elementType),oe("[]")}function u(e){oe("["),k(e.elementTypes,D),oe("]")}function l(e){v(e.types," | ",D)}function f(e){v(e.types," & ",D)}function g(e){oe("("),D(e.type),oe(")")}function m(e){oe("{"),e.members.length&&(se(),ce(),h(e.members),_e()),oe("}")}switch(t.kind){case 117:case 132:case 130:case 120:case 133:case 103:case 135:case 93:case 127:case 165:case 166:return ue(me,t)
case 194:return i(t)
case 155:return o(t)
case 158:return c(t)
case 160:return _(t)
case 161:return u(t)
case 162:return l(t)
case 163:return f(t)
case 164:return g(t)
case 156:case 157:return te(t)
case 159:return m(t)
case 69:return a(t)
case 139:return a(t)
case 154:return s(t)}}function C(t){me=t.text,ye=e.getLineStarts(t),he=t.identifiers,ve=e.isExternalModule(t),fe=t,e.emitDetachedComments(me,ye,le,e.writeCommentRange,t,de,!0),h(t.statements)}function S(){var e="_default"
if(!(e in he))return e
for(var t=0;;){t++
var n=e+"_"+t
if(!(n in he))return n}}function T(t){function r(n){return{diagnosticMessage:e.Diagnostics.Default_export_of_the_module_has_or_is_using_private_name_0,errorNode:t}}if(69===t.expression.kind)oe(t.isExportEquals?"export = ":"export default "),ue(me,t.expression)
else{var a=S()
be||oe("declare "),oe("var "),oe(a),oe(": "),le.getSymbolAccessibilityDiagnostic=r,n.writeTypeOfExpression(t.expression,fe,1026,le),oe(";"),se(),oe(t.isExportEquals?"export = ":"export default "),oe(a)}if(oe(";"),se(),69===t.expression.kind){var i=n.collectLinkedAliases(t.expression)
l(i)}}function E(e){return n.isDeclarationVisible(e)}function w(e,t){if(t)A(e)
else if(229===e.kind||256===e.parent.kind&&ve){var r=void 0
if(xe&&256!==e.parent.kind)xe.push({node:e,outputPos:le.getTextPos(),indent:le.getIndent(),isVisible:r})
else{if(230===e.kind){var a=e
a.importClause&&(r=a.importClause.name&&n.isDeclarationVisible(a.importClause)||R(a.importClause.namedBindings))}Ee.push({node:e,outputPos:le.getTextPos(),indent:le.getIndent(),isVisible:r})}}}function A(t){switch(t.kind){case 220:return ee(t)
case 200:return $(t)
case 222:return H(t)
case 221:return V(t)
case 223:return K(t)
case 224:return z(t)
case 225:return J(t)
case 229:return O(t)
case 230:return F(t)
default:e.Debug.fail("Unknown symbol kind")}}function N(e){256===e.parent.kind&&(1&e.flags&&oe("export "),512&e.flags?oe("default "):222===e.kind||be||oe("declare "))}function P(e){8&e?oe("private "):16&e&&oe("protected "),32&e&&oe("static "),64&e&&oe("readonly "),128&e&&oe("abstract ")}function O(t){function n(n){return{diagnosticMessage:e.Diagnostics.Import_declaration_0_is_using_private_name_1,errorNode:t,typeName:t.name}}Se(t),1&t.flags&&oe("export "),oe("import "),ue(me,t.name),oe(" = "),e.isInternalModuleImportEqualsDeclaration(t)?(x(t.moduleReference,n),oe(";")):(oe("require("),I(t),oe(");")),le.writeLine()}function R(t){return t?232===t.kind?n.isDeclarationVisible(t):e.forEach(t.elements,function(e){return n.isDeclarationVisible(e)}):void 0}function F(e){if(Se(e),1&e.flags&&oe("export "),oe("import "),e.importClause){var t=le.getTextPos()
e.importClause.name&&n.isDeclarationVisible(e.importClause)&&ue(me,e.importClause.name),e.importClause.namedBindings&&R(e.importClause.namedBindings)&&(t!==le.getTextPos()&&oe(", "),232===e.importClause.namedBindings.kind?(oe("* as "),ue(me,e.importClause.namedBindings.name)):(oe("{ "),k(e.importClause.namedBindings.elements,M,n.isDeclarationVisible),oe(" }"))),oe(" from ")}I(e),oe(";"),le.writeLine()}function I(r){ge=ge||225!==r.kind
var a
if(229===r.kind){var i=r
a=e.getExternalModuleImportEqualsDeclarationExpression(i)}else if(225===r.kind)a=r.name
else{var i=r
a=i.moduleSpecifier}if(9===a.kind&&o&&(pe.out||pe.outFile)){var s=e.getExternalModuleNameFromDeclaration(t,n,r)
if(s)return oe('"'),oe(s),void oe('"')}ue(me,a)}function M(e){e.propertyName&&(ue(me,e.propertyName),oe(" as ")),ue(me,e.name)}function L(e){M(e)
var t=n.collectLinkedAliases(e.propertyName||e.name)
l(t)}function B(e){Se(e),oe("export "),e.exportClause?(oe("{ "),k(e.exportClause.elements,L),oe(" }")):oe("*"),e.moduleSpecifier&&(oe(" from "),I(e)),oe(";"),le.writeLine()}function J(t){for(Se(t),N(t),e.isGlobalScopeAugmentation(t)?oe("global "):(oe(4096&t.flags?"namespace ":"module "),e.isExternalModuleAugmentation(t)?I(t):ue(me,t.name));t.body&&226!==t.body.kind;)t=t.body,oe("."),ue(me,t.name)
var n=fe
t.body?(fe=t,oe(" {"),se(),ce(),h(t.body.statements),_e(),oe("}"),se(),fe=n):oe(";")}function K(t){function n(n){return{diagnosticMessage:e.Diagnostics.Exported_type_alias_0_has_or_is_using_private_name_1,errorNode:t.type,typeName:t.name}}var r=fe
fe=t,Se(t),N(t),oe("type "),ue(me,t.name),q(t.typeParameters),oe(" = "),x(t.type,n),oe(";"),se(),fe=r}function z(t){Se(t),N(t),e.isConst(t)&&oe("const "),oe("enum "),ue(me,t.name),oe(" {"),se(),ce(),h(t.members),_e(),oe("}"),se()}function j(e){Se(e),ue(me,e.name)
var t=n.getConstantValue(e)
void 0!==t&&(oe(" = "),oe(""+t)),oe(","),se()}function U(e){return 147===e.parent.kind&&8&e.parent.flags}function q(t){function n(t){function n(n){var r
switch(t.parent.kind){case 221:r=e.Diagnostics.Type_parameter_0_of_exported_class_has_or_is_using_private_name_1
break
case 222:r=e.Diagnostics.Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1
break
case 152:r=e.Diagnostics.Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1
break
case 151:r=e.Diagnostics.Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1
break
case 147:case 146:r=32&t.parent.flags?e.Diagnostics.Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1:221===t.parent.parent.kind?e.Diagnostics.Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1:e.Diagnostics.Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1
break
case 220:r=e.Diagnostics.Type_parameter_0_of_exported_function_has_or_is_using_private_name_1
break
default:e.Debug.fail("This is unknown parent for type parameter: "+t.parent.kind)}return{diagnosticMessage:r,errorNode:t,typeName:t.name}}ce(),Se(t),_e(),ue(me,t.name),t.constraint&&!U(t)&&(oe(" extends "),156===t.parent.kind||157===t.parent.kind||t.parent.parent&&159===t.parent.parent.kind?(e.Debug.assert(147===t.parent.kind||146===t.parent.kind||156===t.parent.kind||157===t.parent.kind||151===t.parent.kind||152===t.parent.kind),D(t.constraint)):x(t.constraint,n))}t&&(oe("<"),k(t,n),oe(">"))}function W(t,r){function a(t){function a(n){var a
return a=221===t.parent.parent.kind?r?e.Diagnostics.Implements_clause_of_exported_class_0_has_or_is_using_private_name_1:e.Diagnostics.Extends_clause_of_exported_class_0_has_or_is_using_private_name_1:e.Diagnostics.Extends_clause_of_exported_interface_0_has_or_is_using_private_name_1,{diagnosticMessage:a,errorNode:t,typeName:t.parent.parent.name}}e.isEntityNameExpression(t.expression)?x(t,a):r||93!==t.expression.kind?(le.getSymbolAccessibilityDiagnostic=a,n.writeBaseConstructorTypeOfClass(fe,fe,1026,le)):oe("null")}t&&(oe(r?" implements ":" extends "),k(t,a))}function V(t){function n(t){t&&e.forEach(t.parameters,function(e){92&e.flags&&G(e)})}Se(t),N(t),128&t.flags&&oe("abstract "),oe("class "),ue(me,t.name)
var r=fe
fe=t,q(t.typeParameters)
var a=e.getClassExtendsHeritageClauseElement(t)
a&&W([a],!1),W(e.getClassImplementsHeritageClauseElements(t),!0),oe(" {"),se(),ce(),n(e.getFirstConstructorWithBody(t)),h(t.members),_e(),oe("}"),se(),fe=r}function H(t){Se(t),N(t),oe("interface "),ue(me,t.name)
var n=fe
fe=t,q(t.typeParameters),W(e.getInterfaceBaseTypeNodes(t),!1),oe(" {"),se(),ce(),h(t.members),_e(),oe("}"),se(),fe=n}function G(t){e.hasDynamicName(t)||(Se(t),P(t.flags),X(t),oe(";"),se())}function X(t){function r(n){return 218===t.kind?n.errorModuleName?2===n.accessibility?e.Diagnostics.Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Exported_variable_0_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Exported_variable_0_has_or_is_using_private_name_1:145===t.kind||144===t.kind?32&t.flags?n.errorModuleName?2===n.accessibility?e.Diagnostics.Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Public_static_property_0_of_exported_class_has_or_is_using_private_name_1:221===t.parent.kind?n.errorModuleName?2===n.accessibility?e.Diagnostics.Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Public_property_0_of_exported_class_has_or_is_using_private_name_1:n.errorModuleName?e.Diagnostics.Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Property_0_of_exported_interface_has_or_is_using_private_name_1:void 0}function a(e){var n=r(e)
return void 0!==n?{diagnosticMessage:n,errorNode:t,typeName:t.name}:void 0}function i(e){for(var t=[],n=0,r=e.elements;n<r.length;n++){var a=r[n]
193!==a.kind&&t.push(a)}k(t,o)}function o(t){function n(e){var n=r(e)
return void 0!==n?{diagnosticMessage:n,errorNode:t,typeName:t.name}:void 0}t.name&&(e.isBindingPattern(t.name)?i(t.name):(ue(me,t.name),m(t,void 0,n)))}(218!==t.kind||n.isDeclarationVisible(t))&&(e.isBindingPattern(t.name)?i(t.name):(ue(me,t.name),(145===t.kind||144===t.kind||142===t.kind&&!e.isParameterPropertyDeclaration(t))&&e.hasQuestionToken(t)&&oe("?"),145!==t.kind&&144!==t.kind||159!==t.parent.kind?8&t.flags||m(t,t.type,a):Q(t)))}function Q(e){e.type&&(oe(": "),D(e.type))}function Y(t){return e.forEach(t.declarationList.declarations,function(e){return n.isDeclarationVisible(e)})}function $(t){Se(t),N(t),oe(e.isLet(t.declarationList)?"let ":e.isConst(t.declarationList)?"const ":"var "),k(t.declarationList.declarations,X,n.isDeclarationVisible),oe(";"),se()}function Z(t){function n(e){return e?149===e.kind?e.type:e.parameters.length>0?e.parameters[0].type:void 0:void 0}function r(t){var n
return 150===a.kind?(n=32&a.parent.flags?t.errorModuleName?e.Diagnostics.Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_name_1:t.errorModuleName?e.Diagnostics.Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_name_1,{diagnosticMessage:n,errorNode:a.parameters[0],typeName:a.name}):(n=32&a.flags?t.errorModuleName?2===t.accessibility?e.Diagnostics.Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:e.Diagnostics.Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_name_0:t.errorModuleName?2===t.accessibility?e.Diagnostics.Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:e.Diagnostics.Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_name_0,{diagnosticMessage:n,errorNode:a.name,typeName:void 0})}if(!e.hasDynamicName(t)){var a,i=e.getAllAccessorDeclarations(t.parent.members,t)
if(t===i.firstAccessor){if(Se(i.getAccessor),Se(i.setAccessor),P(t.flags|(i.setAccessor?0:64)),ue(me,t.name),!(8&t.flags)){a=t
var o=n(t)
if(!o){var s=149===t.kind?i.setAccessor:i.getAccessor
o=n(s),o&&(a=s)}m(t,o,r)}oe(";"),se()}}}function ee(t){e.hasDynamicName(t)||n.isImplementationOfOverload(t)||(Se(t),220===t.kind?N(t):(147===t.kind||148===t.kind)&&P(t.flags),220===t.kind?(oe("function "),ue(me,t.name)):148===t.kind?oe("constructor"):(ue(me,t.name),e.hasQuestionToken(t)&&oe("?")),ne(t))}function te(e){Se(e),ne(e)}function ne(t){function n(n){var r
switch(t.kind){case 152:r=n.errorModuleName?e.Diagnostics.Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0
break
case 151:r=n.errorModuleName?e.Diagnostics.Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0
break
case 153:r=n.errorModuleName?e.Diagnostics.Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0
break
case 147:case 146:r=32&t.flags?n.errorModuleName?2===n.accessibility?e.Diagnostics.Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:e.Diagnostics.Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0:221===t.parent.kind?n.errorModuleName?2===n.accessibility?e.Diagnostics.Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:e.Diagnostics.Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0:n.errorModuleName?e.Diagnostics.Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0
break
case 220:r=n.errorModuleName?2===n.accessibility?e.Diagnostics.Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named:e.Diagnostics.Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1:e.Diagnostics.Return_type_of_exported_function_has_or_is_using_private_name_0
break
default:e.Debug.fail("This is unknown kind for signature: "+t.kind)}return{diagnosticMessage:r,errorNode:t.name||t}}var r=fe
fe=t
var a=!1
if(153===t.kind)P(t.flags),oe("[")
else{if(152===t.kind||157===t.kind)oe("new ")
else if(156===t.kind){var i=le.getText()
t.typeParameters&&"<"===i.charAt(i.length-1)&&(a=!0,oe("("))}q(t.typeParameters),oe("(")}k(t.parameters,re),oe(153===t.kind?"]":")")
var o=156===t.kind||157===t.kind
o||159===t.parent.kind?t.type&&(oe(o?" => ":": "),D(t.type)):148===t.kind||8&t.flags||y(t,n),fe=r,o?a&&oe(")"):(oe(";"),se())}function re(t){function r(e){var n=a(e)
return void 0!==n?{diagnosticMessage:n,errorNode:t,typeName:t.name}:void 0}function a(n){switch(t.parent.kind){case 148:return n.errorModuleName?2===n.accessibility?e.Diagnostics.Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1
case 152:return n.errorModuleName?e.Diagnostics.Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1
case 151:return n.errorModuleName?e.Diagnostics.Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1
case 147:case 146:return 32&t.parent.flags?n.errorModuleName?2===n.accessibility?e.Diagnostics.Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1:221===t.parent.parent.kind?n.errorModuleName?2===n.accessibility?e.Diagnostics.Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1:n.errorModuleName?e.Diagnostics.Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1
case 220:return n.errorModuleName?2===n.accessibility?e.Diagnostics.Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named:e.Diagnostics.Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2:e.Diagnostics.Parameter_0_of_exported_function_has_or_is_using_private_name_1
default:e.Debug.fail("This is unknown parent for parameter: "+t.parent.kind)}}function i(e){if(167===e.kind)oe("{"),k(e.elements,o),oe("}")
else if(168===e.kind){oe("[")
var t=e.elements
k(t,o),t&&t.hasTrailingComma&&oe(", "),oe("]")}}function o(t){193===t.kind?oe(" "):169===t.kind&&(t.propertyName&&(ue(me,t.propertyName),oe(": ")),t.name&&(e.isBindingPattern(t.name)?i(t.name):(e.Debug.assert(69===t.name.kind),t.dotDotDotToken&&oe("..."),ue(me,t.name))))}ce(),Se(t),t.dotDotDotToken&&oe("..."),e.isBindingPattern(t.name)?i(t.name):ue(me,t.name),n.isOptionalParameter(t)&&oe("?"),_e(),156===t.parent.kind||157===t.parent.kind||159===t.parent.parent.kind?Q(t):8&t.parent.flags||m(t,t.type,r)}function ae(e){switch(e.kind){case 220:case 225:case 229:case 222:case 221:case 223:case 224:return w(e,E(e))
case 200:return w(e,Y(e))
case 230:return w(e,!e.importClause)
case 236:return B(e)
case 148:case 147:case 146:return ee(e)
case 152:case 151:case 153:return te(e)
case 149:case 150:return Z(e)
case 145:case 144:return G(e)
case 255:return j(e)
case 235:return T(e)
case 256:return C(e)}}function ie(n,r){function i(t,a,i){(!i||r)&&(e.Debug.assert(!!t.declarationFilePath||e.isSourceFileJavaScript(n),"Declaration file is not present only for javascript files"),o=t.declarationFilePath||t.jsFilePath,s=i)}var o,s=!1
return e.isDeclarationFile(n)?o=n.fileName:e.forEachExpectedEmitFile(t,i,n),o&&(o=e.getRelativePathToDirectoryOrUrl(e.getDirectoryPath(e.normalizeSlashes(a)),o,t.getCurrentDirectory(),t.getCanonicalFileName,!1),we+='/// <reference path="'+o+'" />'+de),s}var oe,se,ce,_e,ue,le,de=t.getNewLine(),pe=t.getCompilerOptions()
_()
var fe,ge,me,ye,he,ve,ke,be,xe,De,Ce=!1,Se=pe.removeComments?function(e){}:b,Te=pe.stripInternal?c:ae,Ee=[],we="",Ae=[],Ne=!1,Pe=[]
if(e.forEach(i,function(n){if(!e.isSourceFileJavaScript(n)){if(pe.noResolve||e.forEach(n.referencedFiles,function(r){var a=e.tryResolveScriptReference(t,n,r)
a&&!e.contains(Ae,a)&&(ie(a,!o&&!Ne)&&(Ne=!0),Ae.push(a))}),ge=!1,o&&e.isExternalModule(n)?e.isExternalModule(n)&&(be=!0,oe('declare module "'+e.getResolvedExternalModuleName(t,n)+'" {'),se(),ce(),C(n),_e(),oe("}"),se()):(be=!1,C(n)),Ee.length){var r=le
e.forEach(Ee,function(t){if(t.isVisible&&!t.asynchronousOutput){e.Debug.assert(230===t.node.kind),_(),e.Debug.assert(0===t.indent||1===t.indent&&o)
for(var n=0;n<t.indent;n++)ce()
F(t.node),t.asynchronousOutput=le.getText()
for(var n=0;n<t.indent;n++)_e()}}),u(r),Pe=Pe.concat(Ee),Ee=[]}!o&&e.isExternalModule(n)&&n.moduleAugmentations.length&&!ge&&(oe("export {};"),se())}}),De)for(var Oe in De)we+='/// <reference types="'+Oe+'" />'+de
return{reportedDeclarationError:Ce,moduleElementDeclarationEmitInfo:Pe,synchronousDeclarationOutput:le.getText(),referencesOutput:we}}function r(t,r,a,i,o,s){function c(t,n){var r=0,a=""
return e.forEach(n,function(e){e.asynchronousOutput&&(a+=t.substring(r,e.outputPos),a+=c(e.asynchronousOutput,e.subModuleElementDeclarationEmitInfo),r=e.outputPos)}),a+=t.substring(r)}var _=n(i,o,s,t,r,a),u=_.reportedDeclarationError||i.isEmitBlocked(t)||i.getCompilerOptions().noEmit
if(!u){var l=_.referencesOutput+c(_.synchronousDeclarationOutput,_.moduleElementDeclarationEmitInfo)
e.writeFile(i,s,t,l,i.getCompilerOptions().emitBOM,r)}return u}e.getDeclarationDiagnostics=t,e.writeDeclarationFile=r}(ts||(ts={}))
var ts
!function(e){function t(t,n){return n.moduleName||e.getExternalModuleNameFromPath(t,n.fileName)}function n(n,r,a){var i=r.getExternalModuleFileFromDeclaration(a)
if(i&&!e.isDeclarationFile(i))return t(n,i)}function r(r,a,i){function s(t,n){for(var r=n;e.isNodeDescendentOf(r,n);r=r.nextContainer)if(r.locals&&t in r.locals&&9544639&r.locals[t].flags)return!1
return!0}function c(t,n,r,a){n?(t.labeledNonLocalBreaks||(t.labeledNonLocalBreaks=e.createMap()),t.labeledNonLocalBreaks[r]=a):(t.labeledNonLocalContinues||(t.labeledNonLocalContinues=e.createMap()),t.labeledNonLocalContinues[r]=a)}function _(e,t){function n(t){if(69===t.kind)e.hoistedLocalVariables.push(t)
else for(var r=0,a=t.elements;r<a.length;r++){var i=a[r]
n(i.name)}}e.hoistedLocalVariables||(e.hoistedLocalVariables=[]),n(t.name)}function u(){function i(t,n,r,a){pi.initialize(t,n,r,a),ja=e.createMap(),Ua=[],Wa=[],oi=!a,a&&k&&e.forEach(r,sa),e.forEach(r,u),ui()
var i=pi.getSourceMappingURL()
i&&ci("//# sourceMappingURL="+i),O(si.getText(),t,n,h.emitBOM,r),pi.reset(),si.reset(),Ra=void 0,Fa=void 0,Ia=void 0,Ka=void 0,za=void 0,ja=void 0,Ua=void 0,Wa=void 0,qa=void 0,Va=void 0,Ha=!1,Xa=!1,Qa=!1,Ya=!1,Ga=!1,hi=0,$a=void 0,Za=void 0,ei=void 0,ti=void 0,ni=void 0,ri=void 0,ai=void 0,ii=void 0,Ba=!1,La=void 0,Ja=!1}function u(t){Ra=t,Fa=t.text,Ia=e.getLineStarts(t),Ka=void 0,za=void 0,Ba=t.symbol&&t.symbol.exports&&!!t.symbol.exports.___esModule,La=t.renamedDependencies,Ma=t.identifiers,Ja=e.isExternalModule(t),fi(t),ua(t)}function l(e){return!(r.hasGlobalName(e)||e in Ma||e in ja)}function x(e){if(e&&!(hi&e)){var t=268435456===e?"_i":"_n"
if(l(t))return hi|=e,t}for(;;){var n=268435455&hi
if(hi++,8!==n&&13!==n){var r=26>n?"_"+String.fromCharCode(97+n):"_"+(n-26)
if(l(r))return r}}}function C(e){95!==e.charCodeAt(e.length-1)&&(e+="_")
for(var t=1;;){var n=e+t
if(l(n))return ja[n]=n
t++}}function T(e){var t=e.name.text
return s(t,e)?t:C(t)}function E(t){var n=e.getExternalModuleName(t),r=9===n.kind?e.escapeIdentifier(e.makeIdentifierFromModuleName(n.text)):"module"
return C(r)}function w(){return C("default")}function A(){return C("class")}function N(t){switch(t.kind){case 69:return C(t.text)
case 225:case 224:return T(t)
case 230:case 236:return E(t)
case 220:case 221:case 235:return w()
case 192:return A()
default:e.Debug.fail()}}function P(t){var n=e.getNodeId(t)
return Ua[n]||(Ua[n]=e.unescapeIdentifier(N(t)))}function O(t,n,r,i,o){h.sourceMap&&!h.inlineSourceMap&&e.writeFile(a,D,r,pi.getText(),!1,o),b&&b.push(pi.getSourceMapData()),e.writeFile(a,D,n,t,i,o)}function R(t){var n=e.createSynthesizedNode(69)
return n.text=x(t),n}function F(e){$a||($a=[]),$a.push(e)}function I(e){var t=R(e)
return F(t),t}function M(e){$a&&(e?ui():ci(" "),ci("var "),j($a),ci(";"))}function L(t,n,r){var a=e.skipTrivia(Fa,n)
yi(a)
var i=e.tokenToString(t)
r?r():ci(i)
var o=a+i.length
return yi(o),o}function B(e,t){t&&(ci(e),_a(t))}function J(e,t){t&&ci("("),_a(e),t&&ci(")")}function K(t,n,r,a){e.Debug.assert(n.length>0),li(),Kt(t,n[0])?a&&ci(" "):ui()
for(var i=0,o=n.length;o>i;i++)i&&(jt(n[i-1],n[i])?ci(", "):(ci(","),ui())),_a(n[i])
n.hasTrailingComma&&r&&ci(","),di(),zt(t,e.lastOrUndefined(n))?a&&ci(" "):ui()}function z(e,t,n,r,a,i,o,s){s||(s=_a)
for(var c=0;n>c;c++){r?((c||i)&&ci(","),ui()):(c||i)&&ci(", ")
var _=e[t+c]
wa(_.pos),s(_),i=!0}return a&&ci(","),r&&!o&&ui(),n}function j(e){e&&z(e,0,e.length,!1,!1)}function U(e){q(e,0)}function q(e,t){for(var n=t;n<e.length;n++)ui(),_a(e[n])}function W(e,t){if(8===e.kind&&t.length>1)switch(t.charCodeAt(1)){case 98:case 66:case 111:case 79:return!0}return!1}function V(t){var n=H(t)
!h.sourceMap&&!h.inlineSourceMap||9!==t.kind&&!e.isTemplateLiteralKind(t.kind)?ci(2>v&&W(t,n)?t.text:n):si.writeLiteral(n)}function H(t){if(2>v&&(e.isTemplateLiteralKind(t.kind)||t.hasExtendedUnicodeEscape))return G('"',t.text,'"')
if(t.parent)return e.getTextOfNodeFromSourceText(Fa,t)
switch(t.kind){case 9:return G('"',t.text,'"')
case 11:return G("`",t.text,"`")
case 12:return G("`",t.text,"${")
case 13:return G("}",t.text,"${")
case 14:return G("}",t.text,"`")
case 8:return t.text}e.Debug.fail("Literal kind '"+t.kind+"' not accounted for.")}function G(t,n,r){return t+e.escapeNonAsciiCharacters(e.escapeString(n))+r}function X(t){var n=e.getTextOfNodeFromSourceText(Fa,t),r=11===t.kind||14===t.kind
n=n.substring(1,n.length-(r?1:2)),n=n.replace(/\r\n?/g,"\n"),n=e.escapeString(n),ci('"'+n+'"')}function Q(t,n){ci("["),11===t.template.kind?n(t.template):(n(t.template.head),e.forEach(t.template.templateSpans,function(e){ci(", "),n(e.literal)})),ci("]")}function Y(t){var n=I(0)
ci("("),_a(n),ci(" = "),Q(t,_a),ci(", "),_a(n),ci(".raw = "),Q(t,X),ci(", "),J(t.tag,ye(t.tag)),ci("("),_a(n),189===t.template.kind&&e.forEach(t.template.templateSpans,function(e){ci(", ")
var t=187===e.expression.kind&&24===e.expression.operatorToken.kind
J(e.expression,t)}),ci("))")}function $(t){function n(){return e.Debug.assert(0!==t.templateSpans.length),0!==t.head.text.length||0===t.templateSpans[0].literal.text.length}function r(e,t){switch(t.kind){case 174:case 175:return t.expression===e
case 176:case 178:return!1
default:return-1!==a(t)}}function a(e){switch(e.kind){case 187:switch(e.operatorToken.kind){case 37:case 39:case 40:return 1
case 35:case 36:return 0
default:return-1}case 190:case 188:return-1
default:return 1}}if(v>=2)return void e.forEachChild(t,_a)
var i=e.isExpression(t.parent)&&r(t,t.parent)
i&&ci("(")
var o=!1
n()&&(V(t.head),o=!0)
for(var s=0,c=t.templateSpans.length;c>s;s++){var _=t.templateSpans[s],u=178!==_.expression.kind&&1!==a(_.expression);(s>0||o)&&ci(" + "),J(_.expression,u),0!==_.literal.text.length&&(ci(" + "),V(_.literal))}i&&ci(")")}function Z(e){_a(e.expression),_a(e.literal)}function ee(t){function n(t){69===t.kind&&e.isIntrinsicJsxName(t.text)?(ci('"'),_a(t),ci('"')):_a(t)}function r(e){/^[A-Za-z_]\w*$/.test(e.text)?_a(e):(ci('"'),_a(e),ci('"'))}function a(e){r(e.name),ci(": "),e.initializer?_a(e.initializer):ci("true")}function i(t,r){var i=e.createSynthesizedNode(69)
if(i.text=h.reactNamespace?h.reactNamespace:"React",i.parent=t,Sa(t),ae(i),ci(".createElement("),n(t.tagName),ci(", "),0===t.attributes.length)ci("null")
else{var o=t.attributes
if(e.forEach(o,function(e){return 247===e.kind})){ci("__assign(")
for(var s=!1,c=0;c<o.length;c++)247===o[c].kind?(0===c&&ci("{}, "),s&&(ci("}"),s=!1),c>0&&ci(", "),_a(o[c].expression)):(e.Debug.assert(246===o[c].kind),s?ci(", "):(s=!0,c>0&&ci(", "),ci("{")),a(o[c]))
s&&ci("}"),ci(")")}else{ci("{")
for(var c=0,_=o.length;_>c;c++)c>0&&ci(", "),a(o[c])
ci("}")}}if(r){for(var u=void 0,l=!1,c=0,_=r.length;_>c;c++){var d=r[c]
Zr(d)&&(u?(l||(l=!0,li(),ui(),_a(u)),ci(", "),ui(),_a(d)):(ci(", "),u=d))}l?di():u&&(241!==u.kind&&242!==u.kind?_a(u):(li(),ui(),_a(u),ui(),di()))}ci(")"),Ea(t)}241===t.kind?i(t.openingElement,t.children):(e.Debug.assert(242===t.kind),i(t))}function te(t){function n(e){_a(e.name),e.initializer&&(ci("="),_a(e.initializer))}function r(e){ci("{..."),_a(e.expression),ci("}")}function a(t){for(var a=0,i=t.length;i>a;a++)a>0&&ci(" "),247===t[a].kind?r(t[a]):(e.Debug.assert(246===t[a].kind),n(t[a]))}function i(e){ci("<"),_a(e.tagName),(e.attributes.length>0||242===e.kind)&&ci(" "),a(e.attributes),ci(242===e.kind?"/>":">")}function o(e){ci("</"),_a(e.tagName),ci(">")}function s(e){i(e.openingElement)
for(var t=0,n=e.children.length;n>t;t++)_a(e.children[t])
o(e.closingElement)}241===t.kind?s(t):(e.Debug.assert(242===t.kind),i(t))}function ne(t){if(e.Debug.assert(169!==t.kind),9===t.kind)V(t)
else if(140===t.kind){if(e.nodeIsDecorated(t.parent)){qa||(qa=[])
var n=qa[e.getNodeId(t)]
if(n)return void ci(n)
n=I(0).text,qa[e.getNodeId(t)]=n,ci(n),ci(" = ")}_a(t.expression)}else ci('"'),8===t.kind?ci(t.text):_i(Fa,t),ci('"')}function re(e){var t=e.parent
switch(t.kind){case 170:case 195:case 184:case 187:case 174:case 249:case 140:case 188:case 143:case 181:case 204:case 173:case 235:case 202:case 194:case 206:case 207:case 208:case 203:case 245:case 242:case 243:case 247:case 248:case 175:case 196:case 178:case 186:case 185:case 211:case 254:case 191:case 213:case 176:case 197:case 215:case 177:case 182:case 183:case 205:case 212:case 190:return!0
case 169:case 255:case 142:case 253:case 145:case 218:return t.initializer===e
case 172:return t.expression===e
case 180:case 179:return t.body===e
case 229:return t.moduleReference===e
case 139:return t.left===e}return!1}function ae(t){var n=r.getReferencedExportContainer(t)
if(n)256===n.kind?k!==e.ModuleKind.ES6&&k!==e.ModuleKind.System&&ci("exports."):(ci(P(n)),ci("."))
else{if(k!==e.ModuleKind.ES6){var a=r.getReferencedImportDeclaration(t)
if(a){if(231===a.kind)return ci(P(a.parent)),void ci(0===v?'["default"]':".default")
if(234===a.kind){ci(P(a.parent.parent.parent))
var i=a.propertyName||a.name,o=e.getTextOfNodeFromSourceText(Fa,i)
return void(0===v&&"default"===o?ci('["default"]'):(ci("."),ci(o)))}}}if(2>v){var a=r.getReferencedDeclarationWithCollidingName(t)
if(a)return void ci(P(a.name))}else if(1048576&r.getNodeCheckFlags(t)){var a=r.getReferencedValueDeclaration(t)
if(a){var s=Wa[e.getNodeId(a)]
if(void 0!==s)return void ci(s)}}}e.nodeIsSynthesized(t)?ci(t.text):_i(Fa,t)}function ie(e){if(2>v){var t=e.parent
switch(t.kind){case 169:case 221:case 224:case 218:return t.name===e&&r.isDeclarationWithCollidingName(t)}}return!1}function oe(e){if(v>=2){var t=e.parent
if(172===t.kind&&t.expression===e){for(t=t.parent;t&&145!==t.kind;)t=t.parent
return t&&145===t.kind&&0!==(32&t.flags)&&192===t.parent.kind?t.parent:void 0}}}function se(t){if(Va&&"arguments"==t.text&&r.isArgumentsLocalBinding(t)){var n=Va.argumentsName||(Va.argumentsName=C("arguments"))
return void ci(n)}if(t.parent)if(re(t)){var a=oe(t)
if(a){var i=r.getReferencedValueDeclaration(t)
if(i===a)return void ci(P(i.name))}ae(t)}else ie(t)?ci(P(t)):e.nodeIsSynthesized(t)?ci(t.text):_i(Fa,t)
else ci(t.text)}function ce(e){ci(2&r.getNodeCheckFlags(e)?"_this":Va?Va.thisName||(Va.thisName=C("this")):"this")}function _e(e){if(v>=2)ci("super")
else{var t=r.getNodeCheckFlags(e)
ci(256&t?"_super.prototype":"_super")}}function ue(e){ci("{ ")
var t=e.elements
z(t,0,t.length,!1,t.hasTrailingComma),ci(" }")}function le(e){ci("[")
var t=e.elements
z(t,0,t.length,!1,t.hasTrailingComma),ci("]")}function de(t){t.propertyName&&(_a(t.propertyName),ci(": ")),t.dotDotDotToken&&ci("..."),e.isBindingPattern(t.name)?_a(t.name):$t(t),B(" = ",t.initializer)}function pe(e){ci("..."),_a(e.expression)}function fe(t){ci(e.tokenToString(114)),t.asteriskToken&&ci("*"),t.expression&&(ci(" "),_a(t.expression))}function ge(t){var n=me(t)
n&&ci("("),ci(e.tokenToString(114)),ci(" "),_a(t.expression),n&&ci(")")}function me(t){return 187!==t.parent.kind||e.isAssignmentOperator(t.parent.operatorToken.kind)?188===t.parent.kind&&t.parent.condition===t?!0:185===t.parent.kind||181===t.parent.kind||182===t.parent.kind||183===t.parent.kind?!0:!1:!0}function ye(e){switch(e.kind){case 69:case 170:case 172:case 173:case 174:case 178:return!1}return!0}function he(e,t,n,r,a){for(var i=0,o=0,s=e.length;s>i;){1===o&&a?ci(".concat("):o>0&&ci(", ")
var c=e[i]
if(191===c.kind)c=c.expression,J(c,0===o&&ye(c)),i++,i===s&&0===o&&t&&170!==c.kind&&ci(".slice()")
else{for(var _=i;s>_&&191!==e[_].kind;)_++
ci("["),n&&li(),z(e,i,_-i,n,r&&_===s),n&&di(),ci("]"),i=_}o++}o>1&&a&&ci(")")}function ve(e){return 191===e.kind}function ke(t){var n=t.elements
0===n.length?ci("[]"):v>=2||!e.forEach(n,ve)?(ci("["),K(t,t.elements,n.hasTrailingComma,!1),ci("]")):he(n,!0,t.multiLine,n.hasTrailingComma,!0)}function be(e,t){if(0===t)return void ci("{}")
if(ci("{"),t>0){var n=e.properties
if(t===n.length)K(e,n,v>=1,!0)
else{var r=e.multiLine
r?li():ci(" "),z(n,0,t,r,!1),r?di():ci(" ")}}ci("}")}function xe(t,n){function r(){a?(ci(","),ui()):ci(", ")}var a=t.multiLine,i=t.properties
ci("("),a&&li()
var o=I(0)
_a(o),ci(" = "),be(t,n)
for(var s=n,c=i.length;c>s;s++){r()
var _=i[s]
if(gi(_),149===_.kind||150===_.kind){var u=e.getAllAccessorDeclarations(t.properties,_)
if(_!==u.firstAccessor)continue
ci("Object.defineProperty("),_a(o),ci(", "),gi(_.name),ne(_.name),mi(_.name),ci(", {"),li(),u.getAccessor&&(ui(),Sa(u.getAccessor),ci("get: "),gi(u.getAccessor),ci("function "),En(u.getAccessor),mi(u.getAccessor),Ea(u.getAccessor),ci(",")),u.setAccessor&&(ui(),Sa(u.setAccessor),ci("set: "),gi(u.setAccessor),ci("function "),En(u.setAccessor),mi(u.setAccessor),Ea(u.setAccessor),ci(",")),ui(),ci("enumerable: true,"),ui(),ci("configurable: true"),di(),ui(),ci("})"),mi(_)}else Sa(_),gi(_.name),_a(o),Fn(_.name),mi(_.name),ci(" = "),253===_.kind?_a(_.initializer):254===_.kind?ae(_.name):147===_.kind?bn(_):e.Debug.fail("ObjectLiteralElement type not accounted for: "+_.kind)
mi(_)}r(),_a(o),a&&(di(),ui()),ci(")")}function De(e){var t=e.properties
if(2>v){for(var n=t.length,r=n,a=0,i=t.length;i>a;a++)if(140===t[a].name.kind){r=a
break}var o=r!==t.length
if(o)return void xe(e,r)}be(e,t.length)}function Ce(t,n,r,a){var i=e.createSynthesizedNode(187,a)
return i.operatorToken=e.createSynthesizedNode(n),i.left=t,i.right=r,i}function Se(t,n){var r=e.createSynthesizedNode(172)
return r.expression=Ee(t),r.name=n,r}function Te(t,n){var r=e.createSynthesizedNode(173)
return r.expression=Ee(t),r.argumentExpression=n,r}function Ee(t){for(;177===t.kind||195===t.kind||196===t.kind;)t=t.expression
if(e.isLeftHandSideExpression(t)&&175!==t.kind&&8!==t.kind)return t
var n=e.createSynthesizedNode(178)
return n.expression=t,n}function we(e){ci("["),ne(e),ci("]")}function Ae(e){v>=2&&e.asteriskToken&&ci("*"),_a(e.name),2>v&&ci(": function "),En(e)}function Ne(e){_a(e.name),ci(": "),wa(e.initializer.pos),_a(e.initializer)}function Pe(e){var t=r.getReferencedExportContainer(e)
return!!t}function Oe(e){var t=r.getReferencedImportDeclaration(e)
return t&&(231===t.kind||234===t.kind)}function Re(t){_i(Fa,t.name),(2>v||k!==e.ModuleKind.ES6&&Oe(t.name)||Pe(t.name))&&(ci(": "),ae(t.name)),v>=2&&t.objectAssignmentInitializer&&(ci(" = "),_a(t.objectAssignmentInitializer))}function Fe(t){var n=Ie(t)
if(void 0!==n){if(ci(""+n),!h.removeComments){var r=172===t.kind?e.declarationNameToString(t.name):e.getTextOfNode(t.argumentExpression)
ci(" /* "+r+" */")}return!0}return!1}function Ie(e){return h.isolatedModules?void 0:172===e.kind||173===e.kind?r.getConstantValue(e):void 0}function Me(t,n,r,a){var i=!e.nodeIsSynthesized(t)&&!jt(n,r),o=ut(r)
return i||o?(li(),ui(),!0):(a&&ci(a),!1)}function Le(t){if(!Fe(t)){if(2===v&&95===t.expression.kind&&Ve(t)){var n=e.createSynthesizedNode(9)
return n.text=t.name.text,void He(t.expression,n)}_a(t.expression)
var r=e.nodeIsSynthesized(t.expression)?-1:t.expression.end,a=e.nodeIsSynthesized(t.expression)?-1:e.skipTrivia(Fa,t.expression.end)+1,i={pos:r,end:a},o=Me(t,t.expression,i),s=!1
if(!o)if(8===t.expression.kind){var c=e.getTextOfNodeFromSourceText(Fa,t.expression)
s=c.indexOf(e.tokenToString(21))<0}else{var _=Ie(t.expression)
s=isFinite(_)&&Math.floor(_)===_}ci(s?" .":".")
var u=Me(t,i,t.name)
_a(t.name),dt(o,u)}}function Be(e){_a(e.left),ci("."),_a(e.right)}function Je(e,t){if(69===e.left.kind)Ke(e.left,t)
else if(t){var n=I(0)
ci("("),pa(n),ci(" = "),Ke(e.left,!0),ci(") && "),pa(n)}else Ke(e.left,!1)
ci("."),_a(e.right)}function Ke(e,t){switch(e.kind){case 69:t&&(ci("typeof "),ae(e),ci(" !== 'undefined' && ")),ae(e)
break
case 139:Je(e,t)
break
default:pa(e)}}function ze(e){if(!Fe(e)){if(2===v&&95===e.expression.kind&&Ve(e))return void He(e.expression,e.argumentExpression)
_a(e.expression),ci("["),_a(e.argumentExpression),ci("]")}}function je(t){return e.forEach(t,function(e){return 191===e.kind})}function Ue(e){for(;178===e.kind||177===e.kind||195===e.kind||196===e.kind;)e=e.expression
return e}function qe(e){if(69===e.kind||97===e.kind||95===e.kind)return _a(e),e
var t=I(0)
return ci("("),_a(t),ci(" = "),_a(e),ci(")"),t}function We(e){var t,n=Ue(e.expression)
172===n.kind?(t=qe(n.expression),ci("."),_a(n.name)):173===n.kind?(t=qe(n.expression),ci("["),_a(n.argumentExpression),ci("]")):95===n.kind?(t=n,ci("_super")):_a(e.expression),ci(".apply("),t?95===t.kind?ce(t):_a(t):ci("void 0"),ci(", "),he(e.arguments,!1,!1,!1,!0),ci(")")}function Ve(t){if(2===v){var n=e.getSuperContainer(t,!1)
if(n&&6144&r.getNodeCheckFlags(n))return!0}return!1}function He(t,n){var a=e.getSuperContainer(t,!1),i=4096&r.getNodeCheckFlags(a)
ci("_super("),_a(n),ci(i?").value":")")}function Ge(t){if(2>v&&je(t.arguments))return void We(t)
var n=t.expression,r=!1,a=!1
95===n.kind?(_e(n),r=!0):(r=e.isSuperPropertyOrElementAccess(n),a=r&&Ve(t),_a(n)),r&&(2>v||a)?(ci(".call("),ce(n),t.arguments.length&&(ci(", "),j(t.arguments)),ci(")")):(ci("("),j(t.arguments),ci(")"))}function Xe(e){if(ci("new "),1===v&&e.arguments&&je(e.arguments)){ci("(")
var t=qe(e.expression)
ci(".bind.apply("),_a(t),ci(", [void 0].concat("),he(e.arguments,!1,!1,!1,!1),ci(")))"),ci("()")}else _a(e.expression),e.arguments&&(ci("("),j(e.arguments),ci(")"))}function Qe(e){v>=2?(_a(e.tag),ci(" "),_a(e.template)):Y(e)}function Ye(t){if(!e.nodeIsSynthesized(t)&&180!==t.parent.kind&&(177===t.expression.kind||195===t.expression.kind||196===t.expression.kind)){for(var n=t.expression.expression;177===n.kind||195===n.kind||196===n.kind;)n=n.expression
if(!(185===n.kind||183===n.kind||182===n.kind||181===n.kind||186===n.kind||175===n.kind||187===n.kind&&195===t.expression.kind||174===n.kind&&175===t.parent.kind||179===n.kind&&174===t.parent.kind||8===n.kind&&172===t.parent.kind))return void _a(n)}ci("("),_a(t.expression),ci(")")}function $e(t){ci(e.tokenToString(78)),ci(" "),_a(t.expression)}function Ze(t){ci(e.tokenToString(103)),ci(" "),_a(t.expression)}function et(t){ci(e.tokenToString(101)),ci(" "),_a(t.expression)}function tt(t){if(!Mr()||69!==t.kind||e.nodeIsSynthesized(t))return!1
var n=t.parent&&(218===t.parent.kind||169===t.parent.kind),a=n?t.parent:r.getReferencedValueDeclaration(t)
return ot(a,!0)}function nt(t){return k===e.ModuleKind.System||69!==t.kind||e.nodeIsSynthesized(t)?!1:!ni&&ti&&t.text in ti}function rt(t){var n=41===t.operator||42===t.operator,r=n&&tt(t.operand)
r&&(ci(Ka+'("'),pa(t.operand),ci('", '))
var a=n&&nt(t.operand)
if(a&&ct(t.operand),ci(e.tokenToString(t.operator)),185===t.operand.kind){var i=t.operand
35!==t.operator||35!==i.operator&&41!==i.operator?36!==t.operator||36!==i.operator&&42!==i.operator||ci(" "):ci(" ")}_a(t.operand),r&&ci(")")}function at(t){var n=tt(t.operand),r=nt(t.operand)
n?(ci("("+Ka+'("'),pa(t.operand),ci('", '),ci(e.tokenToString(t.operator)),_a(t.operand),ci(41===t.operator?") - 1)":") + 1)")):r?(ct(t.operand),_a(t.operand),ci(41===t.operator?" += 1":" -= 1")):(_a(t.operand),ci(e.tokenToString(t.operator)))}function it(e){return ot(e,!1)}function ot(t,n){if(!t||!Mr())return!1
for(var r=e.getRootDeclaration(t).parent;r;){if(256===r.kind)return!n||0!==(1&e.getCombinedNodeFlags(t))
if(e.isDeclaration(r))return!1
r=r.parent}}function st(t){var n=t.left
if(60===t.operatorToken.kind){var r=void 0,a=!1
if(e.isElementAccessExpression(n)){a=!0,ci("("),r=e.createSynthesizedNode(173,!1)
var i=on(n.expression,!1,!1)
if(r.expression=i,8!==n.argumentExpression.kind&&9!==n.argumentExpression.kind){var o=I(268435456)
r.argumentExpression=o,an(o,n.argumentExpression,!0,n.expression)}else r.argumentExpression=n.argumentExpression
ci(", ")}else if(e.isPropertyAccessExpression(n)){a=!0,ci("("),r=e.createSynthesizedNode(172,!1)
var i=on(n.expression,!1,!1)
r.expression=i,r.name=n.name,ci(", ")}_a(r||n),ci(" = "),ci("Math.pow("),_a(r||n),ci(", "),_a(t.right),ci(")"),a&&ci(")")}else ci("Math.pow("),_a(n),ci(", "),_a(t.right),ci(")")}function ct(e){for(var t=0,n=ti[e.text];t<n.length;t++){var r=n[t]
gi(r.name),Yt(r),0===v&&"default"===e.text?ci('["default"]'):(ci("."),ua(r.name)),mi(r.name),ci(" = ")}return!0}function _t(t){if(2>v&&56===t.operatorToken.kind&&(171===t.left.kind||170===t.left.kind))cn(t,202===t.parent.kind)
else{var n=e.isAssignmentOperator(t.operatorToken.kind),r=n&&tt(t.left)
r&&(ci(Ka+'("'),pa(t.left),ci('", '))
var a=n&&nt(t.left)
if(a&&ct(t.left),38===t.operatorToken.kind||60===t.operatorToken.kind)st(t)
else{_a(t.left)
var i=Me(t,t.left,t.operatorToken,24!==t.operatorToken.kind?" ":void 0)
ci(e.tokenToString(t.operatorToken.kind))
var o=Me(t,t.operatorToken,t.right," ")
_a(t.right),dt(i,o)}r&&ci(")")}}function ut(t){return e.nodeIsSynthesized(t)&&t.startsOnNewLine}function lt(e){_a(e.condition)
var t=Me(e,e.condition,e.questionToken," ")
ci("?")
var n=Me(e,e.questionToken,e.whenTrue," ")
_a(e.whenTrue),dt(t,n)
var r=Me(e,e.whenTrue,e.colonToken," ")
ci(":")
var a=Me(e,e.colonToken,e.whenFalse," ")
_a(e.whenFalse),dt(r,a)}function dt(e,t){e&&di(),t&&di()}function pt(e){if(e&&199===e.kind){var t=e
return 0===t.statements.length&&jt(t,t)}}function ft(t){return pt(t)?(L(15,t.pos),ci(" "),void L(16,t.statements.end)):(L(15,t.pos),li(),226===t.kind&&(e.Debug.assert(225===t.parent.kind),xn(t.parent)),U(t.statements),226===t.kind&&M(!0),di(),ui(),void L(16,t.statements.end))}function gt(e){199===e.kind?(ci(" "),_a(e)):(li(),ui(),_a(e),di())}function mt(e){J(e.expression,180===e.expression.kind),ci(";")}function yt(e){var t=L(88,e.pos)
ci(" "),t=L(17,t),_a(e.expression),L(18,e.expression.end),gt(e.thenStatement),e.elseStatement&&(ui(),L(80,e.thenStatement.end),203===e.elseStatement.kind?(ci(" "),_a(e.elseStatement)):gt(e.elseStatement))}function ht(e){St(e,vt)}function vt(e,t){ci("do"),t?At(t,!0):Et(e,!0),199===e.statement.kind?ci(" "):ui(),ci("while ("),_a(e.expression),ci(");")}function kt(e){St(e,bt)}function bt(e,t){ci("while ("),_a(e.expression),ci(")"),t?At(t,!0):Et(e,!0)}function xt(t){if(Ir(t,!0))return!1
if(Va&&0===(3072&e.getCombinedNodeFlags(t))){for(var n=0,r=t.declarations;n<r.length;n++){var a=r[n]
_(Va,a)}return!1}return gi(t),ci(t&&v>=2?e.isLet(t)?"let ":e.isConst(t)?"const ":"var ":"var "),!0}function Dt(e){for(var t=!1,n=0,r=e.declarations;n<r.length;n++){var a=r[n]
a.initializer&&(t?ci(", "):t=!0,_a(a))}return t}function Ct(e){return 2>v&&0!==(65536&r.getNodeCheckFlags(e))}function St(e,t){var n=Ct(e)
if(n){var r=Tt(e)
214===e.parent.kind&&Gt(e.parent),t(e,r)}else t(e,void 0)}function Tt(t){function n(e){if(69===e.kind){var t=ie(e)?P(e):e.text
if(s.push(t),2097152&r.getNodeCheckFlags(e.parent)){var a={originalName:e,outParamName:C("out_"+t)};(c||(c=[])).push(a)}}else for(var i=0,o=e.elements;i<o.length;i++){var _=o[i]
n(_.name)}}var a,i=C("_loop")
switch(t.kind){case 206:case 207:case 208:var o=t.initializer
o&&219===o.kind&&(a=t.initializer)}var s,c
if(a&&3072&e.getCombinedNodeFlags(a)){s=[]
for(var _=0,u=a.declarations;_<u.length;_++){var l=u[_]
n(l.name)}}var d=199===t.statement.kind,p=s?s.join(", "):""
ui(),ci("var "+i+" = function("+p+")")
var f=Va
if(Va={loopOutParameters:c},f&&(f.argumentsName&&(Va.argumentsName=f.argumentsName),f.thisName&&(Va.thisName=f.thisName),f.hoistedLocalVariables&&(Va.hoistedLocalVariables=f.hoistedLocalVariables)),ci(" {"),ui(),li(),d?U(t.statement.statements):_a(t.statement),ui(),wt(Va,1,!0),di(),ui(),ci("};"),ui(),c){ci("var ")
for(var g=0;g<c.length;g++)0!==g&&ci(", "),ci(c[g].outParamName)
ci(";"),ui()}if(Va.argumentsName&&(f?f.argumentsName=Va.argumentsName:(ci("var "+Va.argumentsName+" = arguments;"),ui())),Va.thisName&&(f?f.thisName=Va.thisName:(ci("var "+Va.thisName+" = this;"),ui())),Va.hoistedLocalVariables)if(f)f.hoistedLocalVariables=Va.hoistedLocalVariables
else{ci("var ")
for(var m=void 0,y=0,h=Va.hoistedLocalVariables;y<h.length;y++){var v=h[y]
m?ci(", "):m=e.createMap(),v.text in m||(_a(v),m[v.text]=v.text)}ci(";"),ui()}var k=Va
return Va=f,{functionName:i,paramList:p,state:k}}function Et(e,t){var n
Va&&(n=Va.allowedNonLabeledJumps,Va.allowedNonLabeledJumps=6),t?gt(e.statement):199===e.statement.kind?U(e.statement.statements):(ui(),_a(e.statement)),Va&&(Va.allowedNonLabeledJumps=n)}function wt(e,t,n){if(e.loopOutParameters)for(var r=0,a=e.loopOutParameters;r<a.length;r++){var i=a[r]
0===t?(se(i.originalName),ci(" = "+i.outParamName)):(ci(i.outParamName+" = "),se(i.originalName)),n?(ci(";"),ui()):ci(", ")}}function At(e,t){function n(e,t,n){(t.labeledNonLocalBreaks||t.labeledNonLocalContinues)&&(ci("switch("+e+") {"),li(),r(t.labeledNonLocalBreaks,!0,e,n),r(t.labeledNonLocalContinues,!1,e,n),di(),ui(),ci("}"))}function r(e,t,n,r){if(e)for(var a in e){var i=e[a]
ui(),ci('case "'+i+'": '),!r||r.labels&&r.labels[a]?(ci(t?"break ":"continue "),ci(a+";")):(c(r,t,a,i),ci("return "+n+";"))}}t&&(ci(" {"),ui(),li())
var a=!(-5&e.state.nonLocalJumps||e.state.labeledNonLocalBreaks||e.state.labeledNonLocalContinues),i=C("state")
a||ci("var "+i+" = "),ci(e.functionName+"("+e.paramList+");"),ui(),wt(e.state,0,!0),a||(ui(),8&e.state.nonLocalJumps&&(ci("if (typeof "+i+' === "object") '),Va?(ci("return "+i+";"),Va.nonLocalJumps|=8):ci("return "+i+".value;"),ui()),2&e.state.nonLocalJumps&&(ci("if ("+i+' === "break") break;'),ui()),n(i,e.state,Va)),t&&(ui(),di(),ci("}"))}function Nt(e){St(e,Pt)}function Pt(e,t){var n=L(86,e.pos)
if(ci(" "),n=L(17,n),e.initializer&&219===e.initializer.kind){var r=e.initializer,a=xt(r)
a?j(r.declarations):Dt(r)}else e.initializer&&_a(e.initializer)
ci(";"),B(" ",e.condition),ci(";"),B(" ",e.incrementor),ci(")"),t?At(t,!0):Et(e,!0)}function Ot(e){2>v&&208===e.kind?St(e,Ft):St(e,Rt)}function Rt(e,t){var n=L(86,e.pos)
if(ci(" "),n=L(17,n),219===e.initializer.kind){var r=e.initializer
r.declarations.length>=1&&(xt(r),_a(r.declarations[0]))}else _a(e.initializer)
ci(207===e.kind?" in ":" of "),_a(e.expression),L(18,e.expression.end),t?At(t,!0):Et(e,!0)}function Ft(t,n){var r=L(86,t.pos)
ci(" "),r=L(17,r)
var a=R(268435456),i=e.createSynthesizedNode(69)
i.text=69===t.expression.kind?C(t.expression.text):x(0),gi(t.expression),ci("var "),pa(a),ci(" = 0"),mi(t.expression),ci(", "),gi(t.expression),pa(i),ci(" = "),pa(t.expression),mi(t.expression),ci("; "),gi(t.expression),pa(a),ci(" < "),ua(i),ci(".length"),mi(t.expression),ci("; "),gi(t.expression),pa(a),ci("++"),mi(t.expression),L(18,t.expression.end),ci(" {"),ui(),li()
var o=Te(i,a)
if(gi(t.initializer),219===t.initializer.kind){ci("var ")
var s=t.initializer
if(s.declarations.length>0){var c=s.declarations[0]
e.isBindingPattern(c.name)?cn(c,!1,o):(ua(c),ci(" = "),pa(o))}else pa(R(0)),ci(" = "),pa(o)}else{var _=Ce(t.initializer,56,o,!1)
170===t.initializer.kind||171===t.initializer.kind?cn(_,!0,void 0):ua(_)}mi(t.initializer),ci(";"),n?(ui(),At(n,!1)):Et(t,!1),ui(),di(),ci("}")}function It(e){if(Va){var t=210===e.kind?2:4,n=e.label&&Va.labels&&Va.labels[e.label.text]||!e.label&&Va.allowedNonLabeledJumps&t
if(!n){if(ci("return "),wt(Va,1,!1),e.label){var r=void 0
210===e.kind?(r="break-"+e.label.text,c(Va,!0,e.label.text,r)):(r="continue-"+e.label.text,c(Va,!1,e.label.text,r)),ci('"'+r+'";')}else 210===e.kind?(Va.nonLocalJumps|=2,ci('"break";')):(Va.nonLocalJumps|=4,ci('"continue";'))
return}}L(210===e.kind?70:75,e.pos),B(" ",e.label),ci(";")}function Mt(e){return Va?(Va.nonLocalJumps|=8,ci("return { value: "),e.expression?_a(e.expression):ci("void 0"),void ci(" };")):(L(94,e.pos),B(" ",e.expression),void ci(";"))}function Lt(e){ci("with ("),_a(e.expression),ci(")"),gt(e.statement)}function Bt(e){var t=L(96,e.pos)
ci(" "),L(17,t),_a(e.expression),t=L(18,e.expression.end),ci(" ")
var n
Va&&(n=Va.allowedNonLabeledJumps,Va.allowedNonLabeledJumps|=2),Jt(e.caseBlock,t),Va&&(Va.allowedNonLabeledJumps=n)}function Jt(e,t){L(15,t),li(),U(e.clauses),di(),ui(),L(16,e.clauses.end)}function Kt(t,n){return e.getLineOfLocalPositionFromLineMap(Ia,e.skipTrivia(Fa,t.pos))===e.getLineOfLocalPositionFromLineMap(Ia,e.skipTrivia(Fa,n.pos))}function zt(t,n){return e.getLineOfLocalPositionFromLineMap(Ia,t.end)===e.getLineOfLocalPositionFromLineMap(Ia,n.end)}function jt(t,n){return e.getLineOfLocalPositionFromLineMap(Ia,t.end)===e.getLineOfLocalPositionFromLineMap(Ia,e.skipTrivia(Fa,n.pos))}function Ut(e){249===e.kind?(ci("case "),_a(e.expression),ci(":")):ci("default:"),1===e.statements.length&&Kt(e,e.statements[0])?(ci(" "),_a(e.statements[0])):(li(),U(e.statements),di())}function qt(e){ci("throw "),_a(e.expression),ci(";")}function Wt(e){ci("try "),_a(e.tryBlock),_a(e.catchClause),e.finallyBlock&&(ui(),ci("finally "),_a(e.finallyBlock))}function Vt(e){ui()
var t=L(72,e.pos)
ci(" "),L(17,t),_a(e.variableDeclaration),L(18,e.variableDeclaration?e.variableDeclaration.end:t),ci(" "),ft(e.block)}function Ht(e){L(76,e.pos),ci(";")}function Gt(e){_a(e.label),ci(": ")}function Xt(t){e.isIterationStatement(t.statement,!1)&&Ct(t.statement)||Gt(t),Va&&(Va.labels||(Va.labels=e.createMap()),Va.labels[t.label.text]=t.label.text),_a(t.statement),Va&&(Va.labels[t.label.text]=void 0)}function Qt(e){do e=e.parent
while(e&&225!==e.kind)
return e}function Yt(e){var t=Qt(e)
ci(t?P(t):"exports")}function $t(t){if(gi(t.name),1&e.getCombinedNodeFlags(t)){var n=Qt(t)
n?(ci(P(n)),ci(".")):k!==e.ModuleKind.ES6&&k!==e.ModuleKind.System&&ci("exports.")}ua(t.name),mi(t.name)}function Zt(){var t=e.createSynthesizedNode(8)
t.text="0"
var n=e.createSynthesizedNode(183)
return n.expression=t,n}function en(t){256===t.parent.kind&&(e.Debug.assert(!!(512&t.flags)||235===t.kind),(k===e.ModuleKind.CommonJS||k===e.ModuleKind.AMD||k===e.ModuleKind.UMD)&&(Ba||(0!==v?(ci('Object.defineProperty(exports, "__esModule", { value: true });'),ui()):(ci("exports.__esModule = true;"),ui()))))}function tn(t){1&t.flags&&(ui(),gi(t),k===e.ModuleKind.System&&t.parent===Ra?(ci(Ka+'("'),512&t.flags?ci("default"):ua(t.name),ci('", '),vn(t),ci(")")):(512&t.flags?(en(t),ci(0===v?'exports["default"]':"exports.default")):$t(t),ci(" = "),vn(t)),mi(t),ci(";"))}function nn(t){if(k!==e.ModuleKind.System&&!ni&&ti&&t.text in ti)for(var n=0,r=ti[t.text];n<r.length;n++){var a=r[n]
ui(),gi(a.name),Yt(a),ci("."),ua(a.name),mi(a.name),ci(" = "),ae(t),ci(";")}}function rn(t){e.Debug.assert(k===e.ModuleKind.System),(r.getReferencedValueDeclaration(t.propertyName||t.name)||r.isValueAliasDeclaration(t))&&(ui(),gi(t.name),ci(Ka+'("'),ua(t.name),ci('", '),ae(t.propertyName||t.name),ci(")"),mi(t.name),ci(";"))}function an(e,t,n,r){n&&ci(", ")
var a=tt(e)
a&&(ci(Ka+'("'),ua(e),ci('", '))
var i=e.parent&&(218===e.parent.kind||169===e.parent.kind)
gi(sn(r)?r.parent:r),ga(function(){i?$t(e.parent):_a(e),ci(" = "),_a(t)}),mi(r,!0),a&&ci(")")}function on(e,t,n,r){var a=R(0)
return t||F(a),an(a,e,n,r||e.parent),a}function sn(e){return 218===e.kind&&219===e.parent.kind&&e.parent.declarations[0]===e}function cn(t,n,r){function a(e,t,n){if(69===e.kind&&t)return e
var r=on(e,m,g>0,n)
return g++,r}function i(t,n,r){t=a(t,!0,r)
var i=e.createSynthesizedNode(187)
return i.left=t,i.operatorToken=e.createSynthesizedNode(32),i.right=Zt(),o(i,n,t)}function o(t,n,r){var a=e.createSynthesizedNode(188)
return a.condition=t,a.questionToken=e.createSynthesizedNode(53),a.whenTrue=n,a.colonToken=e.createSynthesizedNode(54),a.whenFalse=r,a}function s(t){var n=e.createSynthesizedNode(8)
return n.text=""+t,n}function c(t,n){var r,i=140===n.kind
return i?r=a(n.expression,!1,n):(r=e.createSynthesizedNode(n.kind),r.text=e.unescapeIdentifier(n.text)),i||69!==r.kind?Te(t,r):Se(t,r)}function _(t,n){var r=e.createSynthesizedNode(174),a=e.createSynthesizedNode(69)
return a.text="slice",r.expression=Se(t,a),r.arguments=e.createSynthesizedNodeArray(),r.arguments[0]=s(n),r}function u(e,t,n){var r=e.properties
1!==r.length&&(t=a(t,!0,n))
for(var i=0,o=r;i<o.length;i++){var s=o[i]
if(253===s.kind||254===s.kind){var _=s.name,u=254===s.kind?s:s.initializer||_
d(u,c(t,_),s)}}}function l(e,t,n){var r=e.elements
1!==r.length&&(t=a(t,!0,n))
for(var i=0;i<r.length;i++){var o=r[i]
193!==o.kind&&(191!==o.kind?d(o,Te(t,s(i)),o):i===r.length-1&&d(o.expression,_(t,i),o))}}function d(e,t,n){254===e.kind?(e.objectAssignmentInitializer&&(t=i(t,e.objectAssignmentInitializer,n)),e=e.name):187===e.kind&&56===e.operatorToken.kind&&(t=i(t,e.right,n),e=e.left),171===e.kind?u(e,t,n):170===e.kind?l(e,t,n):(an(e,t,g>0,n),g++)}function p(t){var r=t.left,i=t.right
e.isEmptyObjectLiteralOrArrayLiteral(r)?_a(i):n?d(r,i,e.nodeIsSynthesized(t)?r:t):(178!==t.parent.kind&&ci("("),i=a(i,!0,t),d(r,i,t),ci(", "),_a(i),178!==t.parent.kind&&ci(")"))}function f(t,n){if(t.initializer?n=n?i(n,t.initializer,t):t.initializer:n||(n=Zt()),e.isBindingPattern(t.name)){var r=t.name,o=r.elements,u=o.length
1!==u&&(n=a(n,0!==u,t))
for(var l=0;u>l;l++){var d=o[l]
if(167===r.kind){var p=d.propertyName||d.name
f(d,c(n,p))}else 193!==d.kind&&(d.dotDotDotToken?l===u-1&&f(d,_(n,l)):f(d,Te(n,s(l))))}}else an(t.name,n,g>0,t),g++}var g=0,m=!1
if(218===t.kind){var y=1&e.getCombinedNodeFlags(t),h=it(t)
m=!y&&!h}else 142===t.kind&&(m=!0)
187===t.kind?p(t):(e.Debug.assert(!n),sn(t)&&pi.changeEmitSourcePos(),f(t,r))}function _n(t){if(e.isBindingPattern(t.name)){var n=1&e.getCombinedNodeFlags(t)
if(v>=2&&(!n||k===e.ModuleKind.ES6)){var a=k===e.ModuleKind.System&&Ir(t,!0)
a&&ci("("),_a(t.name),B(" = ",t.initializer),a&&ci(")")}else cn(t,!1)}else{var i=t.initializer
if(!i&&2>v&&69===t.name.kind){var o=e.getEnclosingBlockScopeContainer(t),s=r.getNodeCheckFlags(t),c=131072&s,_=262144&s,u=e.isBlockScopedContainerTopLevel(o)||c&&_&&199===o.kind&&e.isIterationStatement(o.parent,!1),l=1024&e.getCombinedNodeFlags(t)&&!u,d=l&&207!==o.kind&&208!==o.kind&&(!r.isDeclarationWithCollidingName(t)||_&&!c&&!e.isIterationStatement(o,!1))
d&&(i=Zt())}var p=tt(t.name)
p&&(ci(Ka+'("'),ua(t.name),ci('", ')),$t(t),B(" = ",i),p&&ci(")")}}function un(t){if(193!==t.kind){var n=t.name
69===n.kind?nn(n):e.isBindingPattern(n)&&e.forEach(n.elements,un)}}function ln(t){return!!(1&t.flags)&&k===e.ModuleKind.ES6&&256===t.parent.kind}function dn(t){var n=!1
if(1&t.flags?ln(t)&&(ci("export "),n=xt(t.declarationList)):n=xt(t.declarationList),n)j(t.declarationList.declarations),ci(";")
else{var r=Dt(t.declarationList)
r&&ci(";")}k!==e.ModuleKind.ES6&&t.parent===Ra&&e.forEach(t.declarationList.declarations,un)}function pn(e){if(!(1&e.flags))return!0
if(ln(e))return!0
for(var t=0,n=e.declarationList.declarations;t<n.length;t++){var r=n[t]
if(r.initializer)return!0}return!1}function fn(t){if(2>v)if(e.isBindingPattern(t.name)){var n=R(0)
Za||(Za=[]),Za.push(n),_a(n)}else _a(t.name)
else t.dotDotDotToken&&ci("..."),_a(t.name),B(" = ",t.initializer)}function gn(t){if(2>v){var n=0
e.forEach(t.parameters,function(t){if(!t.dotDotDotToken){var r=t.name,a=t.initializer
if(e.isBindingPattern(r)){var i=r.elements.length>0;(i||a)&&(ui(),ci("var "),i?cn(t,!1,Za[n]):(_a(Za[n]),ci(" = "),_a(a)),ci(";")),n++}else a&&(ui(),gi(t),ci("if ("),pa(r),ci(" === void 0)"),mi(t),ci(" { "),gi(t),ua(r),ci(" = "),ua(a),mi(t),ci("; }"))}})}}function mn(t){if(2>v&&e.hasDeclaredRestParameter(t)){var n=t.parameters[t.parameters.length-1]
if(e.isBindingPattern(n.name))return
var r=t.parameters.length&&97===t.parameters[0].name.originalKeywordKind?1:0,a=t.parameters.length-1-r,i=R(268435456).text
ui(),Sa(n),gi(n),ci("var "),ua(n.name),ci(" = [];"),mi(n),Ea(n),ui(),ci("for ("),gi(n),ci("var "+i+" = "+a+";"),mi(n),ci(" "),gi(n),ci(i+" < arguments.length;"),mi(n),ci(" "),gi(n),ci(i+"++"),mi(n),ci(") {"),li(),ui(),gi(n),ua(n.name),ci("["+i+" - "+a+"] = arguments["+i+"];"),mi(n),di(),ui(),ci("}")}}function yn(e){ci(149===e.kind?"get ":"set "),_a(e.name),En(e)}function hn(e){return 180===e.kind&&v>=2}function vn(e){e.name?ua(e.name):ci(P(e))}function kn(t){return 179===t.kind?!!t.name:220===t.kind?!!t.name||k!==e.ModuleKind.ES6:void 0}function bn(t){if(e.nodeIsMissing(t.body))return Ca(t)
var n=t.kind,r=t.parent
147!==n&&146!==n&&r&&253!==r.kind&&174!==r.kind&&170!==r.kind&&Sa(t),gi(t),hn(t)||(ln(t)&&(ci("export "),512&t.flags&&ci("default ")),ci("function"),v>=2&&t.asteriskToken&&ci("*"),ci(" ")),kn(t)&&vn(t),En(t),k!==e.ModuleKind.ES6&&220===n&&r===Ra&&t.name&&nn(t.name),mi(t),147!==n&&146!==n&&180!==n&&Ea(t)}function xn(e){4&r.getNodeCheckFlags(e)&&(ui(),gi(e),ci("var _this = this;"),mi(e))}function Dn(t){if(li(),ci("("),t){var n=t.parameters,r=t.parameters.length&&97===t.parameters[0].name.originalKeywordKind?1:0,a=2>v&&e.hasDeclaredRestParameter(t)?1:0
z(n,r,n.length-a-r,!1,!1)}ci(")"),di()}function Cn(e){return 1===e.parameters.length&&e.pos===e.parameters[0].pos?void _a(e.parameters[0]):void Dn(e)}function Sn(t){var n=e.getEntityNameFromTypeNode(t.type),a=180===t.kind,i=0!==(8192&r.getNodeCheckFlags(t))
a||(ci(" {"),li(),ui(),4096&r.getNodeCheckFlags(t)?(oa("\nconst _super = (function (geti, seti) {\n    const cache = Object.create(null);\n    return name => cache[name] || (cache[name] = { get value() { return geti(name); }, set value(v) { seti(name, v); } });\n})(name => super[name], (name, value) => super[name] = value);"),ui()):2048&r.getNodeCheckFlags(t)&&(ci("const _super = name => super[name];"),ui()),ci("return")),ci(" __awaiter(this"),ci(i?", arguments, ":", void 0, "),v>=2||!n?ci("void 0"):Ke(n,!1),ci(", function* ()"),Tn(t),ci(")"),a||(ci(";"),di(),ui(),ci("}"))}function Tn(e){e.body?199===e.body.kind?Pn(e,e.body):An(e,e.body):ci(" { }")}function En(t){var n=Va,r=hi,a=$a,i=Za
Va=void 0,hi=0,$a=void 0,Za=void 0,hn(t)?(Cn(t),ci(" =>")):Dn(t)
var o=e.isAsyncFunctionLike(t)
o?Sn(t):Tn(t),ln(t)||tn(t),e.Debug.assert(void 0===Va),Va=n,hi=r,$a=a,Za=i}function wn(e){xn(e),gn(e),mn(e)}function An(e,t){if(2>v||256&e.flags)return void Nn(e,t)
ci(" ")
for(var n=t;177===n.kind;)n=n.expression
J(t,171===n.kind)}function Nn(e,t){ci(" {"),li()
var n=si.getTextPos()
Na(e.body),wn(e)
var r=si.getTextPos()!==n
di(),!r&&Kt(e,t)?(ci(" "),gi(t),ci("return "),_a(t),mi(t),ci(";"),M(!1),ci(" ")):(li(),ui(),Sa(e.body),gi(t),ci("return "),_a(t),mi(t),ci(";"),Ea(e.body),M(!0),di(),ui()),gi(e.body),ci("}"),mi(e.body)}function Pn(e,t){ci(" {")
var n=si.getTextPos()
li(),Na(t.statements)
var r=ia(t.statements,!0)
wn(e),di()
var a=si.getTextPos()!==n
if(!a&&jt(t,t)){for(var i=0,o=t.statements;i<o.length;i++){var s=o[i]
ci(" "),_a(s)}M(!1),ci(" "),vi(t.statements.end)}else li(),q(t.statements,r),M(!0),ui(),vi(t.statements.end),di()
L(16,t.statements.end)}function On(t,n){if(t.body){var r=t.body.statements
if(r&&!(n>=r.length)){var a=r[n]
return 202===a.kind&&e.isSuperCallExpression(a.expression)?a:void 0}}}function Rn(t){e.forEach(t.parameters,function(e){92&e.flags&&(ui(),gi(e),gi(e.name),ci("this."),pa(e.name),mi(e.name),ci(" = "),_a(e.name),ci(";"),mi(e))})}function Fn(e){9===e.kind||8===e.kind?(ci("["),ua(e),ci("]")):140===e.kind?we(e):(ci("."),ua(e))}function In(e,t){for(var n=[],r=0,a=e.members;r<a.length;r++){var i=a[r]
145===i.kind&&t===(0!==(32&i.flags))&&i.initializer&&n.push(i)}return n}function Mn(e,t){for(var n=0,r=t;n<r.length;n++){var a=r[n]
Ln(e,a)}}function Ln(e,t,n,r){ui(),Sa(t),gi(t),gi(t.name),n?ci(n):32&t.flags?vn(e):ci("this"),Fn(t.name),mi(t.name),ci(" = "),_a(t.initializer),r||ci(";"),mi(t),Ea(t)}function Bn(t){e.forEach(t.members,function(n){if(198===n.kind)ui(),ci(";")
else if(147===n.kind||146===t.kind){if(!n.body)return Ca(n)
ui(),Sa(n),gi(n),gi(n.name),Hn(t,n),Fn(n.name),mi(n.name),ci(" = "),bn(n),mi(n),ci(";"),Ea(n)}else if(149===n.kind||150===n.kind){var r=e.getAllAccessorDeclarations(t.members,n)
n===r.firstAccessor&&(ui(),gi(n),ci("Object.defineProperty("),gi(n.name),Hn(t,n),ci(", "),ne(n.name),mi(n.name),ci(", {"),li(),r.getAccessor&&(ui(),Sa(r.getAccessor),ci("get: "),gi(r.getAccessor),ci("function "),En(r.getAccessor),mi(r.getAccessor),Ea(r.getAccessor),ci(",")),r.setAccessor&&(ui(),Sa(r.setAccessor),ci("set: "),gi(r.setAccessor),ci("function "),En(r.setAccessor),mi(r.setAccessor),Ea(r.setAccessor),ci(",")),ui(),ci("enumerable: true,"),ui(),ci("configurable: true"),di(),ui(),ci("});"),mi(n))}})}function Jn(e){for(var t=0,n=e.members;t<n.length;t++){var r=n[t]
147!==r.kind&&146!==e.kind||r.body?147===r.kind||149===r.kind||150===r.kind?(ui(),Sa(r),gi(r),32&r.flags&&ci("static "),149===r.kind?ci("get "):150===r.kind&&ci("set "),r.asteriskToken&&ci("*"),_a(r.name),En(r),mi(r),Ea(r)):198===r.kind&&(ui(),ci(";")):Ca(r)}}function Kn(t,n){var r=Va,a=hi,i=$a,o=Za
Va=void 0,hi=0,$a=void 0,Za=void 0,zn(t,n),e.Debug.assert(void 0===Va),Va=r,hi=a,$a=i,Za=o}function zn(t,n){var r=!1
e.forEach(t.members,function(e){148!==e.kind||e.body||Ca(e),145===e.kind&&e.initializer&&0===(32&e.flags)&&(r=!0)})
var a=e.getFirstConstructorWithBody(t)
if(!(v>=2)||a||r){a&&Sa(a),gi(a||t),2>v?(ci("function "),vn(t),Dn(a)):(ci("constructor"),a?Dn(a):ci("()"))
var i=0
ci(" {"),li(),a&&(i=ia(a.body.statements,!0),Na(a.body.statements)),xn(t)
var o
if(a?(gn(a),mn(a),n&&(o=On(a,i),o&&(ui(),_a(o))),Rn(a)):n&&(ui(),gi(n),ci(2>v?"_super.apply(this, arguments);":"super(...arguments);"),mi(n)),Mn(t,In(t,!1)),a){var s=a.body.statements
o&&(s=s.slice(1)),q(s,i)}M(!0),ui(),a&&vi(a.body.statements.end),di(),L(16,a?a.body.statements.end:t.members.end),mi(a||t),a&&Ea(a)}}function jn(e){return qn(e)}function Un(e){return qn(e)}function qn(t){2>v?Vn(t):Wn(t),k!==e.ModuleKind.ES6&&t.parent===Ra&&t.name&&nn(t.name)}function Wn(t){var n,a=it(t),i=e.nodeIsDecorated(t),o=i||a
221===t.kind&&(o?(i&&524288&r.getNodeCheckFlags(t)&&(n=e.unescapeIdentifier(C(t.name?t.name.text:"default")),Wa[e.getNodeId(t)]=n),!ln(t)||512&t.flags||void 0!==n||ci("export "),void 0!==n?ci("let "+n):(a||ci("let "),vn(t)),ci(" = ")):ln(t)&&(ci("export "),512&t.flags&&ci("default ")))
var s,c=In(t,!0),_=c.length>0&&192===t.kind
if(_){s=t.name?P(t.name):C("classExpression")
var u=e.createSynthesizedNode(69)
u.text=s,F(u),ci("("),li(),_a(u),ci(" = ")}ci("class"),(t.name||512&t.flags&&(c.length>0||k!==e.ModuleKind.ES6)&&!o)&&(ci(" "),vn(t))
var l=e.getClassExtendsHeritageClauseElement(t)
if(l&&(ci(" extends "),_a(l.expression)),ci(" {"),li(),ui(),Kn(t,l),Jn(t),di(),ui(),L(16,t.members.end),o&&(void 0!==n&&(ci(";"),ui(),!ln(t)||512&t.flags||ci("export "),ci("let "),vn(t),ci(" = "+n)),Wa[e.getNodeId(t)]=void 0,ci(";")),_){for(var d=0,p=c;d<p.length;d++){var f=p[d]
ci(","),ui(),Ln(t,f,s,!0)}ci(","),ui(),ci(s),di(),ci(")")}else ui(),Mn(t,c),Gn(t,n)
1&t.flags&&(k!==e.ModuleKind.ES6?tn(t):512&t.flags?i&&(ui(),ci("export default "),vn(t),ci(";")):256!==t.parent.kind&&(ui(),gi(t),$t(t),ci(" = "),vn(t),mi(t),ci(";")))}function Vn(t){var n=ln(t)
221===t.kind&&(!n||512&t.flags||ci("export "),it(t)||ci("var "),vn(t),ci(" = ")),ci("(function (")
var r=e.getClassExtendsHeritageClauseElement(t)
r&&ci("_super"),ci(") {")
var a=hi,i=$a,o=Za,s=qa,c=Va
Va=void 0,hi=0,$a=void 0,Za=void 0,qa=void 0,li(),r&&(ui(),gi(r),ci("__extends("),vn(t),ci(", _super);"),mi(r)),ui(),Kn(t,r),Bn(t),Mn(t,In(t,!0)),ui(),Gn(t,void 0),ui(),L(16,t.members.end,function(){ci("return "),vn(t)}),ci(";"),M(!0),e.Debug.assert(void 0===Va),Va=c,hi=a,$a=i,Za=o,qa=s,di(),ui(),L(16,t.members.end),gi(t),ci("("),r&&_a(r.expression),ci("))"),221===t.kind&&ci(";"),mi(t),221!==t.kind||n?n&&512&t.flags&&(ui(),ci("export default "),vn(t),ci(";")):tn(t)}function Hn(e,t){vn(e),32&t.flags||ci(".prototype")}function Gn(e,t){Qn(e,0),Qn(e,32),Xn(e,t)}function Xn(t,n){var r=t.decorators,a=e.getFirstConstructorWithBody(t),i=a&&e.forEach(a.parameters,function(e){return e.decorators})
if(r||i){ui(),gi(t.decorators||i),vn(t),void 0!==n&&ci(" = "+n),ci(" = __decorate(["),li(),ui()
var o=r?r.length:0,s=z(r,0,o,!0,!1,!1,!0,function(e){return _a(e.expression)})
i&&(s+=Yn(a,s>0)),or(t,s>=0),di(),ui(),ci("], "),vn(t),ci(")"),mi(t.decorators||i),ci(";"),ui()}}function Qn(t,n){for(var r=0,a=t.members;r<a.length;r++){var i=a[r]
if((32&i.flags)===n&&e.nodeCanBeDecorated(i)){var o=void 0,s=void 0
if(e.isAccessor(i)){var c=e.getAllAccessorDeclarations(t.members,i)
if(i!==c.firstAccessor)continue
o=c.firstAccessor.decorators,!o&&c.secondAccessor&&(o=c.secondAccessor.decorators),s=c.setAccessor}else o=i.decorators,147===i.kind&&(s=i)
var _=s&&e.forEach(s.parameters,function(e){return e.decorators})
if(o||_){ui(),gi(o||_),ci("__decorate(["),li(),ui()
var u=o?o.length:0,l=z(o,0,u,!0,!1,!1,!0,function(e){return _a(e.expression)})
_&&(l+=Yn(s,l>0)),or(i,l>0),di(),ui(),ci("], "),Hn(t,i),ci(", "),ne(i.name),v>0&&ci(145!==i.kind?", null":", void 0"),ci(")"),mi(o||_),ci(";"),ui()}}}}function Yn(t,n){var r=0
if(t)for(var a=0,i=0,o=t.parameters;i<o.length;i++){var s=o[i]
if(e.nodeIsDecorated(s)){var c=s.decorators
r+=z(c,0,c.length,!0,!1,n,!0,function(e){ci("__param("+a+", "),_a(e.expression),ci(")")}),n=!0}a++}return r}function $n(e){switch(e.kind){case 147:case 149:case 150:case 145:return!0}return!1}function Zn(e){switch(e.kind){case 147:return!0}return!1}function er(e){switch(e.kind){case 221:case 147:case 150:return!0}return!1}function tr(t){switch(t.kind){case 221:return void ci("Function")
case 145:return void nr(t.type)
case 142:return void nr(t.type)
case 149:return void nr(t.type)
case 150:return void nr(e.getSetAccessorTypeAnnotationNode(t))}return e.isFunctionLike(t)?void ci("Function"):void ci("void 0")}function nr(t){if(t)switch(t.kind){case 103:return void ci("void 0")
case 164:return void nr(t.type)
case 156:case 157:return void ci("Function")
case 160:case 161:return void ci("Array")
case 154:case 120:return void ci("Boolean")
case 132:case 166:return void ci("String")
case 130:return void ci("Number")
case 133:return void ci("Symbol")
case 155:return void rr(t)
case 158:case 159:case 162:case 163:case 117:case 165:break
default:e.Debug.fail("Cannot serialize unexpected type node.")}ci("Object")}function rr(t){for(var n=t.parent;e.isDeclaration(n)||e.isTypeNode(n);)n=n.parent
var a=e.cloneEntityName(t.typeName,n),i=r.getTypeReferenceSerializationKind(a)
switch(i){case e.TypeReferenceSerializationKind.Unknown:var o=I(0)
ci("(typeof ("),pa(o),ci(" = "),Ke(a,!0),ci(") === 'function' && "),pa(o),ci(") || Object")
break
case e.TypeReferenceSerializationKind.TypeWithConstructSignatureAndValue:Ke(a,!1)
break
case e.TypeReferenceSerializationKind.VoidType:ci("void 0")
break
case e.TypeReferenceSerializationKind.BooleanType:ci("Boolean")
break
case e.TypeReferenceSerializationKind.NumberLikeType:ci("Number")
break
case e.TypeReferenceSerializationKind.StringLikeType:ci("String")
break
case e.TypeReferenceSerializationKind.ArrayLikeType:ci("Array")
break
case e.TypeReferenceSerializationKind.ESSymbolType:ci(2>v?"typeof Symbol === 'function' ? Symbol : Object":"Symbol")
break
case e.TypeReferenceSerializationKind.TypeWithCallSignature:ci("Function")
break
case e.TypeReferenceSerializationKind.ObjectType:ci("Object")}}function ar(t){if(t){var n=void 0
if(221===t.kind?n=e.getFirstConstructorWithBody(t):e.isFunctionLike(t)&&e.nodeIsPresent(t.body)&&(n=t),n){var r=n.parameters,a=r.length&&97===r[0].name.originalKeywordKind?1:0,i=r.length
if(i>a)for(var o=a;i>o;o++)if(o>a&&ci(", "),r[o].dotDotDotToken){var s=r[o].type
s=s&&160===s.kind?s.elementType:s&&155===s.kind&&s.typeArguments&&1===s.typeArguments.length?s.typeArguments[0]:void 0,nr(s)}else tr(r[o])}}}function ir(t){if(t&&e.isFunctionLike(t)){if(t.type)return void nr(t.type)
if(e.isAsyncFunctionLike(t))return void ci("Promise")}ci("void 0")}function or(e,t){var n=0
return h.emitDecoratorMetadata&&($n(e)&&(t&&ci(", "),ui(),ci("__metadata('design:type', "),tr(e),ci(")"),n++),er(e)&&((t||n)&&ci(", "),ui(),ci("__metadata('design:paramtypes', ["),ar(e),ci("])"),n++),Zn(e)&&((t||n)&&ci(", "),ui(),ci("__metadata('design:returntype', "),ir(e),ci(")"),n++)),n}function sr(e){Ca(e)}function cr(t){var n=e.isConst(t)
return!n||h.preserveConstEnums||h.isolatedModules}function _r(t){if(cr(t)){if(!it(t)){var n=ln(t);(!(1&t.flags)||n&&gr(t,t.symbol&&t.symbol.declarations,224))&&(gi(t),n&&ci("export "),ci("var "),_a(t.name),mi(t),ci(";"))}ui(),gi(t),ci("(function ("),gi(t.name),ci(P(t)),mi(t.name),ci(") {"),li(),U(t.members),di(),ui(),L(16,t.members.end),ci(")("),$t(t),ci(" || ("),$t(t),ci(" = {}));"),mi(t),!ln(t)&&1&t.flags&&!it(t)&&(ui(),gi(t),ci("var "),_a(t.name),ci(" = "),$t(t),mi(t),ci(";")),k!==e.ModuleKind.ES6&&t.parent===Ra&&(k===e.ModuleKind.System&&1&t.flags&&(ui(),ci(Ka+'("'),vn(t),ci('", '),vn(t),ci(");")),nn(t.name))}}function ur(e){var t=e.parent
gi(e),ci(P(t)),ci("["),ci(P(t)),ci("["),ne(e.name),ci("] = "),lr(e),ci("] = "),ne(e.name),mi(e),ci(";")}function lr(e){var t=r.getConstantValue(e)
return void 0!==t?void ci(""+t):void(e.initializer?_a(e.initializer):ci("undefined"))}function dr(e){if(e.body&&225===e.body.kind){var t=dr(e.body)
return t||e.body}}function pr(t){return e.isInstantiatedModule(t,h.preserveConstEnums||h.isolatedModules)}function fr(e){return 2===v&&!!(32768&r.getNodeCheckFlags(e))}function gr(t,n,r){return!e.forEach(n,function(e){return e.kind===r&&e.pos<t.pos})}function mr(t){var n=pr(t)
if(!n)return Ca(t)
var r=it(t),a=!r&&!fr(t)
if(a){var i=ln(t);(!i||gr(t,t.symbol&&t.symbol.declarations,225))&&(gi(t),i&&ci("export "),ci("var "),_a(t.name),ci(";"),mi(t),ui())}if(gi(t),ci("(function ("),gi(t.name),ci(P(t)),mi(t.name),ci(") "),e.Debug.assert(void 0!==t.body),226===t.body.kind){var o=Va,s=hi,c=$a
Va=void 0,hi=0,$a=void 0,_a(t.body),e.Debug.assert(void 0===Va),Va=o,hi=s,$a=c}else{ci("{"),li(),xn(t),ui(),_a(t.body),di(),ui()
var _=dr(t).body
L(16,_.statements.end)}ci(")("),1&t.flags&&!ln(t)&&(_a(t.name),ci(" = ")),$t(t),ci(" || ("),$t(t),ci(" = {}));"),mi(t),ln(t)||69!==t.name.kind||t.parent!==Ra||(k===e.ModuleKind.System&&1&t.flags&&(ui(),ci(Ka+'("'),vn(t),ci('", '),vn(t),ci(");")),nn(t.name))}function yr(e){return La&&e.text in La?'"'+La[e.text]+'"':void 0}function hr(e){if(9===e.kind){ci("require(")
var t=yr(e)
t?ci(t):(gi(e),V(e),mi(e)),L(18,e.end)}else ci("require()")}function vr(e){if(229===e.kind)return e
var t=e.importClause
return t&&t.namedBindings&&232===t.namedBindings.kind?t.namedBindings:void 0}function kr(e){return 230===e.kind&&e.importClause&&!!e.importClause.name}function br(t){e.isAliasSymbolDeclaration(t)&&r.isValueAliasDeclaration(t)&&nn(t.name),e.forEachChild(t,br)}function xr(t){if(k!==e.ModuleKind.ES6)return Dr(t)
if(t.importClause){var n=r.isReferencedAliasDeclaration(t.importClause),a=t.importClause.namedBindings&&r.isReferencedAliasDeclaration(t.importClause.namedBindings,!0);(n||a)&&(ci("import "),gi(t.importClause),n&&(_a(t.importClause.name),a&&ci(", ")),a&&(Sa(t.importClause.namedBindings),gi(t.importClause.namedBindings),232===t.importClause.namedBindings.kind?(ci("* as "),_a(t.importClause.namedBindings.name)):(ci("{ "),Tr(t.importClause.namedBindings.elements,r.isReferencedAliasDeclaration),ci(" }")),mi(t.importClause.namedBindings),Ea(t.importClause.namedBindings)),mi(t.importClause),ci(" from "),_a(t.moduleSpecifier),ci(";"))}else ci("import "),_a(t.moduleSpecifier),ci(";")}function Dr(t){if(e.contains(ei,t)){var n=229===t.kind&&0!==(1&t.flags),r=vr(t),a=1>=v?"var ":"const "
if(k!==e.ModuleKind.AMD){if(Sa(t),gi(t),r&&!kr(t))n||ci(a),$t(r),ci(" = ")
else{var i=!t.importClause
i||(ci(a),ci(P(t)),ci(" = "))}hr(e.getExternalModuleName(t)),r&&kr(t)&&(ci(", "),$t(r),ci(" = "),ci(P(t))),ci(";"),mi(t),br(t),Ea(t)}else n?($t(r),ci(" = "),_a(r.name),ci(";")):r&&kr(t)&&(ci(a),$t(r),ci(" = "),ci(P(t)),ci(";")),br(t)}}function Cr(t){if(e.isExternalModuleImportEqualsDeclaration(t))return void Dr(t)
if(r.isReferencedAliasDeclaration(t)||!Ja&&r.isTopLevelValueImportEqualsWithEntityName(t)){Sa(t),gi(t)
var n=Ir(t,!0),a=ot(t,!0)
n||(e.Debug.assert(!a),ln(t)?(ci("export "),ci("var ")):1&t.flags||ci("var ")),a&&(ci(Ka+'("'),pa(t.name),ci('", ')),$t(t),ci(" = "),_a(t.moduleReference),a&&ci(")"),ci(";"),mi(t),br(t),Ea(t)}}function Sr(t){if(e.Debug.assert(k!==e.ModuleKind.System),k!==e.ModuleKind.ES6){if(t.moduleSpecifier&&(!t.exportClause||r.isValueAliasDeclaration(t))){gi(t)
var n=P(t)
if(t.exportClause){k!==e.ModuleKind.AMD&&(ci("var "),ci(n),ci(" = "),hr(e.getExternalModuleName(t)),ci(";"))
for(var a=0,i=t.exportClause.elements;a<i.length;a++){var o=i[a]
r.isValueAliasDeclaration(o)&&(ui(),gi(o),Yt(o),ci("."),ua(o.name),ci(" = "),ci(n),ci("."),ua(o.propertyName||o.name),ci(";"),mi(o))}}else ri&&r.moduleExportsSomeValue(t.moduleSpecifier)&&(ui(),ci("__export("),k!==e.ModuleKind.AMD?hr(e.getExternalModuleName(t)):ci(n),ci(");"))
mi(t)}}else(!t.exportClause||r.isValueAliasDeclaration(t))&&(ci("export "),t.exportClause?(ci("{ "),Tr(t.exportClause.elements,r.isValueAliasDeclaration),ci(" }")):ci("*"),t.moduleSpecifier&&(ci(" from "),_a(t.moduleSpecifier)),ci(";"))}function Tr(t,n){e.Debug.assert(k===e.ModuleKind.ES6)
for(var r=!1,a=0,i=t;a<i.length;a++){var o=i[a]
n(o)&&(r&&ci(", "),o.propertyName&&(_a(o.propertyName),ci(" as ")),_a(o.name),r=!0)}}function Er(t){if(!t.isExportEquals&&r.isValueAliasDeclaration(t))if(k===e.ModuleKind.ES6){ui(),gi(t),ci("export default ")
var n=t.expression
_a(n),220!==n.kind&&221!==n.kind&&ci(";"),mi(t)}else ui(),gi(t),k===e.ModuleKind.System?(ci(Ka+'("default",'),_a(t.expression),ci(")")):(en(t),Yt(t),ci(0===v?'["default"] = ':".default = "),_a(t.expression)),ci(";"),mi(t)}function wr(t){ei=[],ti=e.createMap(),ni=void 0,ri=!1
for(var n=0,a=t.statements;n<a.length;n++){var i=a[n]
switch(i.kind){case 230:(!i.importClause||r.isReferencedAliasDeclaration(i.importClause,!0))&&ei.push(i)
break
case 229:240===i.moduleReference.kind&&r.isReferencedAliasDeclaration(i)&&ei.push(i)
break
case 236:if(i.moduleSpecifier)i.exportClause?r.isValueAliasDeclaration(i)&&ei.push(i):r.moduleExportsSomeValue(i.moduleSpecifier)&&(ei.push(i),ri=!0)
else for(var o=0,s=i.exportClause.elements;o<s.length;o++){var c=s[o],_=(c.propertyName||c.name).text;(ti[_]||(ti[_]=[])).push(c)}break
case 235:i.isExportEquals&&!ni&&(ni=i)}}}function Ar(){ri&&(ui(),ci("function __export(m) {"),li(),ui(),ci("for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];"),di(),ui(),ci("}"))}function Nr(t){var n=vr(t)
return n&&!kr(t)?e.getTextOfNodeFromSourceText(Fa,n.name):230===t.kind&&t.importClause?P(t):236===t.kind&&t.moduleSpecifier?P(t):void 0}function Pr(t,i){if(i){var o=n(a,r,t)
if(o)return'"'+o+'"'}var s=e.getExternalModuleName(t)
return 9===s.kind?yr(s)||H(s):void 0}function Or(){if(0!==ei.length){ui()
for(var e=!1,t=0,n=ei;t<n.length;t++){var r=n[t],a=236===r.kind||230===r.kind&&!r.importClause
a||(e?ci(", "):(ci("var "),e=!0),ci(Nr(r)))}e&&ci(";")}}function Rr(t){function n(e){var t=C("exportStar")
return ui(),ci("function "+t+"(m) {"),li(),ui(),ci("var exports = {};"),ui(),ci("for(var n in m) {"),li(),ui(),ci('if (n !== "default"'),e&&ci("&& !"+e+".hasOwnProperty(n)"),ci(") exports[n] = m[n];"),di(),ui(),ci("}"),ui(),ci(Ka+"(exports);"),di(),ui(),ci("}"),t}function r(e){69!==e.kind&&512&e.flags||(_?ci(","):_=!0,ui(),ci("'"),69===e.kind?ua(e):vn(e),ci("': true"))}if(ri){if(!t&&!e.someProperties(ti)){for(var a=!1,i=0,o=ei;i<o.length;i++){var s=o[i]
if(236===s.kind&&s.exportClause){a=!0
break}}if(!a)return n(void 0)}var c=C("exportedNames")
ui(),ci("var "+c+" = {"),li()
var _=!1
if(t)for(var u=0;u<t.length;u++)r(t[u])
if(ti)for(var l in ti)for(var d=0,p=ti[l];d<p.length;d++){var f=p[d]
r(f.name)}for(var g=0,m=ei;g<m.length;g++){var s=m[g]
if(236===s.kind){var y=s
if(y.exportClause)for(var h=0,v=y.exportClause.elements;h<v.length;h++){var k=v[h]
r(k.name||k.propertyName)}}}return di(),ui(),ci("};"),n(c)}}function Fr(t){function n(t){if(!(2&t.flags)){if(220===t.kind)return i||(i=[]),void i.push(t)
if(221===t.kind)return a||(a=[]),void a.push(t)
if(224===t.kind)return void(cr(t)&&(a||(a=[]),a.push(t)))
if(225===t.kind)return void(pr(t)&&(a||(a=[]),a.push(t)))
if(218!==t.kind&&169!==t.kind)return e.isInternalModuleImportEqualsDeclaration(t)&&r.isValueAliasDeclaration(t)?(a||(a=[]),void a.push(t.name)):e.isBindingPattern(t)?void e.forEach(t.elements,n):void(e.isDeclaration(t)||e.forEachChild(t,n))
if(Ir(t,!1)){var o=t.name
69===o.kind?(a||(a=[]),a.push(o)):e.forEachChild(o,n)}}}var a,i,o
if(n(t),a){ui(),ci("var ")
for(var s=e.createMap(),c=0;c<a.length;c++){var _=a[c],u=69===_.kind?_:_.name
if(u){var l=e.unescapeIdentifier(u.text)
if(l in s)continue
s[l]=l}0!==c&&ci(", "),221===_.kind||225===_.kind||224===_.kind?vn(_):_a(_)
var d=e.getCombinedNodeFlags(69===_.kind?_.parent:_)
1&d&&(o||(o=[]),o.push(_))}ci(";")}if(i)for(var p=0,f=i;p<f.length;p++){var g=f[p]
ui(),_a(g),1&g.flags&&(o||(o=[]),o.push(g))}return o}function Ir(t,n){return n&&!it(t)?!1:0===(3072&e.getCombinedNodeFlags(t))||256===e.getEnclosingBlockScopeContainer(t).kind}function Mr(){return k===e.ModuleKind.System&&Ja}function Lr(e,t,n){Or(),ui()
var r=Fr(e),a=Rr(r)
ui(),ci("return {"),li(),ui(),Br(a,t),ui(),Jr(e,n),di(),ui(),ci("}"),M(!0)}function Br(t,n){ci("setters:[")
for(var r=0;r<n.length;r++){0!==r&&ci(","),ui(),li()
var a=n[r],i=C(e.forEach(a,Nr)||"")
ci("function ("+i+") {"),li()
for(var o=0,s=a;o<s.length;o++){var c=s[o],_=Nr(c)||""
switch(c.kind){case 230:if(!c.importClause)break
case 229:e.Debug.assert(""!==_),ui(),ci(_+" = "+i+";"),ui()
break
case 236:if(e.Debug.assert(""!==_),c.exportClause){ui(),ci(Ka+"({"),ui(),li()
for(var u=0,l=c.exportClause.elements.length;l>u;u++){0!==u&&(ci(","),ui())
var d=c.exportClause.elements[u]
ci('"'),ua(d.name),ci('": '+i+'["'),ua(d.propertyName||d.name),ci('"]')}di(),ui(),ci("});")}else ui(),ci(t+"("+i+");")
ui()}}di(),ci("}"),di()}ci("],")}function Jr(t,n){ci("execute: function() {"),li(),ui()
for(var r=n;r<t.statements.length;r++){var a=t.statements[r]
switch(a.kind){case 220:case 230:continue
case 236:if(!a.moduleSpecifier)for(var i=0,o=a.exportClause.elements;i<o.length;i++){var s=o[i]
rn(s)}continue
case 229:if(!e.isInternalModuleImportEqualsDeclaration(a))continue
default:ui(),_a(a)}}di(),ui(),ci("}")}function Kr(e,n){var r=e.moduleName;(r||n&&(r=t(a,e)))&&ci('"'+r+'", ')}function zr(t,n){wr(t),e.Debug.assert(!Ka),Ka=C("exports"),za=C("context"),ui(),ci("System.register("),Kr(t,n),ci("[")
for(var r=e.createMap(),a=[],i=0;i<ei.length;i++){var o=Pr(ei[i],n)
if(void 0!==o){var s=o.substr(1,o.length-2)
if(s in r){var c=r[s]
a[c].push(ei[i])}else r[s]=a.length,a.push([ei[i]]),0!==i&&ci(", "),ci(o)}}ci("], function("+Ka+", "+za+") {"),ui(),li()
var _=ia(t.statements,!0,!h.noImplicitUseStrict)
ui(),ci("var __moduleName = "+za+" && "+za+".id;"),ui(),sa(t),xn(t),Lr(t,a,_),di(),ui(),ci("});")}function jr(e,t,n){for(var r=[],a=[],i=[],o=0,s=e.amdDependencies;o<s.length;o++){var c=s[o]
c.name?(r.push('"'+c.path+'"'),i.push(c.name)):a.push('"'+c.path+'"')}for(var _=0,u=ei;_<u.length;_++){var l=u[_],d=Pr(l,n),p=Nr(l)
t&&p?(r.push(d),i.push(p)):a.push(d)}return{aliasedModuleNames:r,unaliasedModuleNames:a,importAliasNames:i}}function Ur(e,t,n){var r=jr(e,t,n)
qr(r),ci(", "),Wr(r)}function qr(e){var t=e.aliasedModuleNames,n=e.unaliasedModuleNames
ci('["require", "exports"'),t.length&&(ci(", "),ci(t.join(", "))),n.length&&(ci(", "),ci(n.join(", "))),ci("]")}function Wr(e){var t=e.importAliasNames
ci("function (require, exports"),t.length&&(ci(", "),ci(t.join(", "))),ci(") {")}function Vr(e,t){sa(e),wr(e),ui(),ci("define("),Kr(e,t),Ur(e,!0,t),li()
var n=ia(e.statements,!0,!h.noImplicitUseStrict)
Ar(),xn(e),q(e.statements,n),Qr(!0),M(!0),di(),ui(),ci("});")}function Hr(e){var t=ia(e.statements,!1,!h.noImplicitUseStrict)
sa(e),wr(e),Ar(),xn(e),q(e.statements,t),Qr(!1),M(!0)}function Gr(e){sa(e),wr(e)
var t=jr(e,!1)
oa("(function (factory) {\n    if (typeof module === 'object' && typeof module.exports === 'object') {\n        var v = factory(require, exports); if (v !== undefined) module.exports = v;\n    }\n    else if (typeof define === 'function' && define.amd) {\n        define("),qr(t),ci(", factory);"),oa("    }\n})("),Wr(t),li()
var n=ia(e.statements,!0,!h.noImplicitUseStrict)
Ar(),xn(e),q(e.statements,n),Qr(!0),M(!0),di(),ui(),ci("});")}function Xr(e){ei=void 0,ti=void 0,ni=void 0,ri=!1
var t=ia(e.statements,!1)
sa(e),xn(e),q(e.statements,t),M(!0)}function Qr(e){ni&&r.isValueAliasDeclaration(ni)&&(ui(),gi(ni),ci(e?"return ":"module.exports = "),_a(ni.expression),ci(";"),mi(ni))}function Yr(e){switch(h.jsx){case 2:ee(e)
break
case 1:default:te(e)}}function $r(t){for(var n=void 0,r=e.getTextOfNode(t,!0),a=0,i=-1,s=0;s<r.length;s++){var c=r.charCodeAt(s)
if(e.isLineBreak(c)){if(-1!==a&&i-a+1>0){var _=r.substr(a,i-a+1)
n=(n?n+"\" + ' ' + \"":"")+e.escapeString(_)}a=-1}else e.isWhiteSpaceSingleLine(c)||(i=s,-1===a&&(a=s))}if(-1!==a){var _=r.substr(a)
n=(n?n+"\" + ' ' + \"":"")+e.escapeString(_)}return n&&(n=n.replace(/&(\w+);/g,function(e,t){if(void 0!==o[t]){var n=String.fromCharCode(o[t])
return'"'===n?'\\"':n}return e})),n}function Zr(e){return 248===e.kind?!!e.expression:244===e.kind?!!ea(e):!0}function ea(t){switch(h.jsx){case 2:var n=$r(t)
return void 0===n||0===n.length?void 0:n
case 1:default:return e.getTextOfNode(t,!0)}}function ta(t){switch(h.jsx){case 2:ci('"'),ci($r(t)),ci('"')
break
case 1:default:si.writeLiteral(e.getTextOfNode(t,!0))}}function na(e){if(e.expression)switch(h.jsx){case 1:default:ci("{"),_a(e.expression),ci("}")
break
case 2:_a(e.expression)}}function ra(e){return"use strict"===e.expression.text}function aa(e,t){t&&(e&&ui(),ci('"use strict";'))}function ia(t,n,r){for(var a=!1,i=0;i<t.length;i++){if(!e.isPrologueDirective(t[i]))return aa(n||i>0,!a&&r),i
ra(t[i])&&(a=!0),(n||i>0)&&ui(),_a(t[i])}return aa(n,!a&&r),t.length}function oa(e){for(var t=e.split(/\r\n|\r|\n/g),n=0;n<t.length;n++){var r=t[n]
r.length&&(ui(),ci(r))}}function sa(e){h.noEmitHelpers||(2>v&&!Ha&&262144&e.flags&&(oa(d),Ha=!0),1!==h.jsx&&!Ga&&1073741824&e.flags&&(oa(p),Ga=!0),!Xa&&524288&e.flags&&(oa(f),h.emitDecoratorMetadata&&oa(g),Xa=!0),!Qa&&1048576&e.flags&&(oa(m),Qa=!0),!Ya&&2097152&e.flags&&(oa(y),Ya=!0))}function ca(t){if(ui(),Oa(),Na(t),e.isExternalModule(t)||h.isolatedModules)if(oi||!e.isExternalModule(t)&&h.isolatedModules){var n=bi[k]||bi[e.ModuleKind.CommonJS]
n(t)}else xi[k](t,!0)
else{var r=ia(t.statements,!1)
ei=void 0,ti=void 0,ni=void 0,ri=!1,sa(t),xn(t),q(t.statements,r),M(!0)}Sa(t.endOfFileToken)}function _a(e){la(e,da)}function ua(e){la(e,pa)}function la(e,t){if(e){if(2&e.flags)return Ca(e)
if(ma(e))return pa(e)
var n=ya(e)
n&&Sa(e),t(e),n&&Ea(e)}}function da(e){e&&(gi(e),pa(e),mi(e))}function pa(e){e&&ha(e)}function fa(e){pi=e,gi=e.emitStart,mi=e.emitEnd,yi=e.emitPos,fi=e.setSourceFile}function ga(t){var n=pi
ki(e.getNullSourceMapWriter()),t(),ki(n)}function ma(e){switch(e.kind){case 222:case 220:case 230:case 229:case 223:case 235:return!0}}function ya(t){switch(t.kind){case 200:return pn(t)
case 225:return pr(t)
case 224:return cr(t)}return e.Debug.assert(!ma(t)),199!==t.kind&&t.parent&&180===t.parent.kind&&t.parent.body===t&&1>=v?!1:!0}function ha(e){switch(e.kind){case 69:return se(e)
case 142:return fn(e)
case 147:case 146:return Ae(e)
case 149:case 150:return yn(e)
case 97:return ce(e)
case 95:return _e(e)
case 93:return ci("null")
case 99:return ci("true")
case 84:return ci("false")
case 8:case 9:case 10:case 11:case 12:case 13:case 14:return V(e)
case 189:return $(e)
case 197:return Z(e)
case 241:case 242:return Yr(e)
case 244:return ta(e)
case 248:return na(e)
case 139:return Be(e)
case 167:return ue(e)
case 168:return le(e)
case 169:return de(e)
case 170:return ke(e)
case 171:return De(e)
case 253:return Ne(e)
case 254:return Re(e)
case 140:return we(e)
case 172:return Le(e)
case 173:return ze(e)
case 174:return Ge(e)
case 175:return Xe(e)
case 176:return Qe(e)
case 177:case 195:case 196:return _a(e.expression)
case 178:return Ye(e)
case 220:case 179:case 180:return bn(e)
case 181:return $e(e)
case 182:return et(e)
case 183:return Ze(e)
case 184:return ge(e)
case 185:return rt(e)
case 186:return at(e)
case 187:return _t(e)
case 188:return lt(e)
case 191:return pe(e)
case 190:return fe(e)
case 193:return
case 199:case 226:return ft(e)
case 200:return dn(e)
case 201:return ci(";")
case 202:return mt(e)
case 203:return yt(e)
case 204:return ht(e)
case 205:return kt(e)
case 206:return Nt(e)
case 208:case 207:return Ot(e)
case 209:case 210:return It(e)
case 211:return Mt(e)
case 212:return Lt(e)
case 213:return Bt(e)
case 249:case 250:return Ut(e)
case 214:return Xt(e)
case 215:return qt(e)
case 216:return Wt(e)
case 252:return Vt(e)
case 217:return Ht(e)
case 218:return _n(e)
case 192:return jn(e)
case 221:return Un(e)
case 222:return sr(e)
case 224:return _r(e)
case 255:return ur(e)
case 225:return mr(e)
case 230:return xr(e)
case 229:return Cr(e)
case 236:return Sr(e)
case 235:return Er(e)
case 256:return ca(e)}}function va(t){return void 0!==ai&&e.lastOrUndefined(ai).nodePos===t}function ka(){var t=e.getLeadingCommentRanges(Fa,e.lastOrUndefined(ai).detachedCommentEndPos)
return ai.length-1?ai.pop():ai=void 0,t}function ba(t){if(47===Fa.charCodeAt(t.pos+1)&&t.pos+2<t.end&&47===Fa.charCodeAt(t.pos+2)){var n=Fa.substring(t.pos,t.end)
return n.match(e.fullTripleSlashReferencePathRegEx)||n.match(e.fullTripleSlashAMDReferencePathRegEx)?!0:!1}return!1}function xa(t){return!t.parent||256!==t.parent.kind&&t.pos===t.parent.pos?void 0:va(t.pos)?ka():e.getLeadingCommentRangesOfNodeFromText(t,Fa)}function Da(t){return!t.parent||256!==t.parent.kind&&t.end===t.parent.end?void 0:e.getTrailingCommentRanges(Fa,t.end)}function Ca(e){Ta(e,!1)}function Sa(e){return Ta(e,!0)}function Ta(t,n){if(!h.removeComments){var r
n?r=xa(t):0===t.pos&&(r=e.filter(xa(t),ba)),e.emitNewLineBeforeLeadingComments(Ia,si,t,r),e.emitComments(Fa,Ia,si,r,!0,S,Pa)}}function Ea(t){if(!h.removeComments){var n=Da(t)
e.emitComments(Fa,Ia,si,n,!1,S,Pa)}}function wa(t){if(!h.removeComments){var n=e.getTrailingCommentRanges(Fa,t)
e.emitComments(Fa,Ia,si,n,!0,S,Pa)}}function Aa(t){if(!h.removeComments){var n
n=va(t)?ka():e.getLeadingCommentRanges(Fa,t),e.emitNewLineBeforeLeadingComments(Ia,si,{pos:t,end:t},n),e.emitComments(Fa,Ia,si,n,!0,S,Pa)}}function Na(t){var n=e.emitDetachedComments(Fa,Ia,si,Pa,t,S,h.removeComments)
n&&(ai?ai.push(n):ai=[n])}function Pa(t,n,r,a,i){yi(a.pos),e.writeCommentRange(t,n,r,a,i),yi(a.end)}function Oa(){var t=e.getShebang(Fa)
t&&(ci(t),ui())}var Ra,Fa,Ia,Ma,La,Ba,Ja,Ka,za,ja,Ua,qa,Wa,Va,Ha,Ga,Xa,Qa,Ya,$a,Za,ei,ti,ni,ri,ai,ii,oi,si=e.createTextWriter(S),ci=si.write,_i=si.writeTextOfNode,ui=si.writeLine,li=si.increaseIndent,di=si.decreaseIndent,pi=h.sourceMap||h.inlineSourceMap?e.createSourceMapWriter(a,si):e.getNullSourceMapWriter(),fi=pi.setSourceFile,gi=pi.emitStart,mi=pi.emitEnd,yi=pi.emitPos,hi=0,vi=h.removeComments?function(e){}:Aa,ki=h.sourceMap||h.inlineSourceMap?fa:function(e){},bi=e.createMap((Di={},Di[e.ModuleKind.ES6]=Xr,Di[e.ModuleKind.AMD]=Vr,Di[e.ModuleKind.System]=zr,Di[e.ModuleKind.UMD]=Gr,Di[e.ModuleKind.CommonJS]=Hr,Di)),xi=e.createMap((Ci={},Ci[e.ModuleKind.ES6]=function(){},Ci[e.ModuleKind.AMD]=Vr,Ci[e.ModuleKind.System]=zr,Ci[e.ModuleKind.UMD]=function(){},Ci[e.ModuleKind.CommonJS]=function(){},Ci))
return i
var Di,Ci}function l(t,n,i){var o=t.jsFilePath,s=t.sourceMapFilePath,c=t.declarationFilePath
a.isEmitBlocked(o)||h.noEmit?C=!0:T(o,s,n,i),c&&(C=e.writeDeclarationFile(c,n,i,a,r,D)||C),!C&&x&&(x.push(o),s&&x.push(s),c&&x.push(c))}var d="\nvar __extends = (this && this.__extends) || function (d, b) {\n    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\n    function __() { this.constructor = d; }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};",p="\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};",f='\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};',g='\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);\n};',m="\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};",y="\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments)).next());\n    });\n};",h=a.getCompilerOptions(),v=e.getEmitScriptTarget(h),k=e.getEmitModuleKind(h),b=h.sourceMap||h.inlineSourceMap?[]:void 0,x=h.listEmittedFiles?[]:void 0,D=e.createDiagnosticCollection(),C=!1,S=a.getNewLine(),T=u()
return e.forEachExpectedEmitFile(a,l,i),{emitSkipped:C,diagnostics:D.getDiagnostics(),emittedFiles:x,sourceMaps:b}}e.getResolvedExternalModuleName=t,e.getExternalModuleNameFromDeclaration=n
var a
!function(e){e[e.Break=2]="Break",e[e.Continue=4]="Continue",e[e.Return=8]="Return"}(a||(a={}))
var i,o=e.createMap({quot:34,amp:38,apos:39,lt:60,gt:62,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,copy:169,ordf:170,laquo:171,not:172,shy:173,reg:174,macr:175,deg:176,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,"int":8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830})
!function(e){e[e.Auto=0]="Auto",e[e.CountMask=268435455]="CountMask",e[e._i=268435456]="_i"}(i||(i={}))
var s
!function(e){e[e.ToOriginal=0]="ToOriginal",e[e.ToOutParameter=1]="ToOutParameter"}(s||(s={})),e.emitFiles=r}(ts||(ts={}))
var ts
!function(e){function t(t,n){for(;;){var r=e.combinePaths(t,"tsconfig.json")
if(n(r))return r
var a=e.getDirectoryPath(t)
if(a===t)break
t=a}}function n(t,n){var r=e.getDirectoryPath(n),a=e.isRootedDiskPath(t)?t:e.combinePaths(r,t)
return e.normalizePath(a)}function r(t,n,r){var a,i=e.forEach(t,function(t){var i=e.getNormalizedPathComponents(t,n)
if(i.pop(),!a)return void(a=i)
for(var o=0,s=Math.min(a.length,i.length);s>o;o++)if(r(a[o])!==r(i[o])){if(0===o)return!0
a.length=o
break}i.length<a.length&&(a.length=i.length)})
return i?"":a?e.getNormalizedPathFromPathComponents(a):n}function a(t,n){t.trace(e.formatMessage.apply(void 0,arguments))}function i(e,t){return e.traceResolution&&void 0!==t.trace}function o(e){for(var t=!1,n=0;n<e.length;n++)if(42===e.charCodeAt(n)){if(t)return!1
t=!0}return!0}function s(e,t,n){return{resolvedModule:e?{resolvedFileName:e,isExternalLibraryImport:t}:void 0,failedLookupLocations:n}}function c(t){return!(e.isRootedDiskPath(t)||e.isExternalModuleNameRelative(t))}function _(t,n,r){function i(t){if(e.hasProperty(o,t)){var i=o[t]
if("string"==typeof i){var s=e.normalizePath(e.combinePaths(n,i))
return r.traceEnabled&&a(r.host,e.Diagnostics.package_json_has_0_field_1_that_references_2,t,i,s),s}r.traceEnabled&&a(r.host,e.Diagnostics.Expected_type_of_0_field_in_package_json_to_be_string_got_1,t,typeof i)}}var o=u(t,r.host),s=i("typings")||i("types")
if(s)return s
if(r.compilerOptions.allowJs&&o.main&&"string"==typeof o.main){r.traceEnabled&&a(r.host,e.Diagnostics.No_types_specified_in_package_json_but_allowJs_is_set_so_returning_main_value_of_0,o.main)
var c=e.normalizePath(e.combinePaths(n,o.main))
return c}}function u(e,t){try{var n=t.readFile(e)
return n?JSON.parse(n):{}}catch(r){return{}}}function l(t,n){if(t.typeRoots)return t.typeRoots
var r
return t.configFilePath?r=e.getDirectoryPath(t.configFilePath):n.getCurrentDirectory&&(r=n.getCurrentDirectory()),r&&d(r,n)}function d(t,n){if(!n.directoryExists)return[e.combinePaths(t,q)]
for(var r;;){var a=e.combinePaths(t,q)
n.directoryExists(a)&&(r||(r=[])).push(a)
var i=e.getDirectoryPath(t)
if(i===t)break
t=i}return r}function p(t,n,r,o){var s=i(r,o),c={compilerOptions:r,host:o,skipTsx:!0,traceEnabled:s},_=l(r,o)
s&&(void 0===n?void 0===_?a(o,e.Diagnostics.Resolving_type_reference_directive_0_containing_file_not_set_root_directory_not_set,t):a(o,e.Diagnostics.Resolving_type_reference_directive_0_containing_file_not_set_root_directory_1,t,_):void 0===_?a(o,e.Diagnostics.Resolving_type_reference_directive_0_containing_file_1_root_directory_not_set,t,n):a(o,e.Diagnostics.Resolving_type_reference_directive_0_containing_file_1_root_directory_2,t,n,_))
var u=[]
if(_&&_.length){s&&a(o,e.Diagnostics.Resolving_with_primary_search_path_0,_.join(", "))
for(var d=_,p=0,f=d;p<f.length;p++){var g=f[p],m=e.combinePaths(g,t),y=e.getDirectoryPath(m),h=N(U,m,u,!T(y,o),c)
if(h)return s&&a(o,e.Diagnostics.Type_reference_directive_0_was_successfully_resolved_to_1_primary_Colon_2,t,h,!0),{resolvedTypeReferenceDirective:{primary:!0,resolvedFileName:h},failedLookupLocations:u}}}else s&&a(o,e.Diagnostics.Root_directory_cannot_be_determined_skipping_primary_search_paths)
var v,k
return n&&(k=e.getDirectoryPath(n)),void 0!==k?(s&&a(o,e.Diagnostics.Looking_up_in_node_modules_folder_initial_location_0,k),v=R(t,k,u,c),s&&(v?a(o,e.Diagnostics.Type_reference_directive_0_was_successfully_resolved_to_1_primary_Colon_2,t,v,!1):a(o,e.Diagnostics.Type_reference_directive_0_was_not_resolved,t))):s&&a(o,e.Diagnostics.Containing_file_is_not_specified_and_root_directory_cannot_be_determined_skipping_lookup_in_node_modules_folder),{resolvedTypeReferenceDirective:v?{primary:!1,resolvedFileName:v}:void 0,failedLookupLocations:u}}function f(t,n,r,o){var s=i(r,o)
s&&a(o,e.Diagnostics.Resolving_module_0_from_1,t,n)
var c=r.moduleResolution
void 0===c?(c=e.getEmitModuleKind(r)===e.ModuleKind.CommonJS?e.ModuleResolutionKind.NodeJs:e.ModuleResolutionKind.Classic,s&&a(o,e.Diagnostics.Module_resolution_kind_is_not_specified_using_0,e.ModuleResolutionKind[c])):s&&a(o,e.Diagnostics.Explicitly_specified_module_resolution_kind_Colon_0,e.ModuleResolutionKind[c])
var _
switch(c){case e.ModuleResolutionKind.NodeJs:_=C(t,n,r,o)
break
case e.ModuleResolutionKind.Classic:_=F(t,n,r,o)}return s&&(_.resolvedModule?a(o,e.Diagnostics.Module_name_0_was_successfully_resolved_to_1,t,_.resolvedModule.resolvedFileName):a(o,e.Diagnostics.Module_name_0_was_not_resolved,t)),_}function g(e,t,n,r,a,i){return c(e)?y(e,n,r,a,i):m(e,t,n,r,a,i)}function m(t,n,r,i,o,s){if(s.compilerOptions.rootDirs){s.traceEnabled&&a(s.host,e.Diagnostics.rootDirs_option_is_set_using_it_to_resolve_relative_module_name_0,t)
for(var c,_,u=e.normalizePath(e.combinePaths(n,t)),l=0,d=s.compilerOptions.rootDirs;l<d.length;l++){var p=d[l],f=e.normalizePath(p)
e.endsWith(f,e.directorySeparator)||(f+=e.directorySeparator)
var g=e.startsWith(u,f)&&(void 0===_||_.length<f.length)
s.traceEnabled&&a(s.host,e.Diagnostics.Checking_if_0_is_the_longest_matching_prefix_for_1_2,f,u,g),g&&(_=f,c=p)}if(_){s.traceEnabled&&a(s.host,e.Diagnostics.Longest_matching_prefix_for_0_is_1,u,_)
var m=u.substr(_.length)
s.traceEnabled&&a(s.host,e.Diagnostics.Loading_0_from_the_root_dir_1_candidate_location_2,m,_,u)
var y=r(u,o,i,!T(n,s.host),s)
if(y)return y
s.traceEnabled&&a(s.host,e.Diagnostics.Trying_other_entries_in_rootDirs)
for(var h=0,v=s.compilerOptions.rootDirs;h<v.length;h++){var p=v[h]
if(p!==c){var k=e.combinePaths(e.normalizePath(p),m)
s.traceEnabled&&a(s.host,e.Diagnostics.Loading_0_from_the_root_dir_1_candidate_location_2,m,p,k)
var b=e.getDirectoryPath(k),x=r(k,o,i,!T(b,s.host),s)
if(x)return x}}s.traceEnabled&&a(s.host,e.Diagnostics.Module_resolution_using_rootDirs_has_failed)}}}function y(t,n,r,i,o){if(o.compilerOptions.baseUrl){o.traceEnabled&&a(o.host,e.Diagnostics.baseUrl_option_is_set_to_0_using_this_value_to_resolve_non_relative_module_name_1,o.compilerOptions.baseUrl,t)
var s=void 0
if(o.compilerOptions.paths&&(o.traceEnabled&&a(o.host,e.Diagnostics.paths_option_is_specified_looking_for_a_pattern_to_match_module_name_0,t),s=h(e.getOwnKeys(o.compilerOptions.paths),t)),!s){var c=e.normalizePath(e.combinePaths(o.compilerOptions.baseUrl,t))
return o.traceEnabled&&a(o.host,e.Diagnostics.Resolving_module_name_0_relative_to_base_url_1_2,t,o.compilerOptions.baseUrl,c),n(c,i,r,!T(e.getDirectoryPath(c),o.host),o)}var _="string"==typeof s?void 0:k(s,t),u="string"==typeof s?s:v(s)
o.traceEnabled&&a(o.host,e.Diagnostics.Module_name_0_matched_pattern_1,t,u)
for(var l=0,d=o.compilerOptions.paths[u];l<d.length;l++){var p=d[l],f=_?p.replace("*",_):p,c=e.normalizePath(e.combinePaths(o.compilerOptions.baseUrl,f))
o.traceEnabled&&a(o.host,e.Diagnostics.Trying_substitution_0_candidate_module_location_Colon_1,p,f)
var g=n(c,i,r,!T(e.getDirectoryPath(c),o.host),o)
if(g)return g}}}function h(e,t){for(var n=[],r=0,a=e;r<a.length;r++){var i=a[r],o=D(i)
if(o)n.push(o)
else if(i===t)return i}return b(n,function(e){return e},t)}function v(e){var t=e.prefix,n=e.suffix
return t+"*"+n}function k(t,n){return e.Debug.assert(x(t,n)),n.substr(t.prefix.length,n.length-t.suffix.length)}function b(e,t,n){for(var r=void 0,a=-1,i=0,o=e;i<o.length;i++){var s=o[i],c=t(s)
x(c,n)&&c.prefix.length>a&&(a=c.prefix.length,r=s)}return r}function x(t,n){var r=t.prefix,a=t.suffix
return n.length>=r.length+a.length&&e.startsWith(n,r)&&e.endsWith(n,a)}function D(t){e.Debug.assert(o(t))
var n=t.indexOf("*")
return-1===n?void 0:{prefix:t.substr(0,n),suffix:t.substr(n+1)}}function C(t,n,r,o){var _=e.getDirectoryPath(n),u=e.getSupportedExtensions(r),l=i(r,o),d=[],p={compilerOptions:r,host:o,traceEnabled:l,skipTsx:!1},f=g(t,_,S,d,u,p),m=!1
if(!f)if(c(t))l&&a(o,e.Diagnostics.Loading_module_0_from_node_modules_folder,t),f=R(t,_,d,p),m=void 0!==f
else{var y=e.normalizePath(e.combinePaths(_,t))
f=S(y,u,d,!1,p)}if(f&&o.realpath){var h=f
f=e.normalizePath(o.realpath(f)),l&&a(o,e.Diagnostics.Resolving_real_path_for_0_result_1,h,f)}return s(f,m,d)}function S(t,n,r,i,o){o.traceEnabled&&a(o.host,e.Diagnostics.Loading_module_as_file_Slash_folder_candidate_module_location_0,t)
var s=E(t,n,r,i,o)
return s||N(n,t,r,i,o)}function T(e,t){return!t.directoryExists||t.directoryExists(e)}function E(t,n,r,i,o){var s=w(t,n,r,i,o)
if(s)return s
if(e.hasJavaScriptFileExtension(t)){var c=e.removeFileExtension(t)
if(o.traceEnabled){var _=t.substring(c.length)
a(o.host,e.Diagnostics.File_name_0_has_a_1_extension_stripping_it,t,_)}return w(c,n,r,i,o)}}function w(t,n,r,a,i){if(!a){var o=e.getDirectoryPath(t)
o&&(a=!T(o,i.host))}return e.forEach(n,function(n){return!(i.skipTsx&&e.isJsxOrTsxExtension(n))&&A(t+n,r,a,i)})}function A(t,n,r,i){return!r&&i.host.fileExists(t)?(i.traceEnabled&&a(i.host,e.Diagnostics.File_0_exist_use_it_as_a_name_resolution_result,t),t):(i.traceEnabled&&a(i.host,e.Diagnostics.File_0_does_not_exist,t),void n.push(t))}function N(t,n,r,i,o){var s=P(n),c=!i&&T(n,o.host)
if(c&&o.host.fileExists(s)){o.traceEnabled&&a(o.host,e.Diagnostics.Found_package_json_at_0,s)
var u=_(s,n,o)
if(u){var l=!T(e.getDirectoryPath(u),o.host),d=A(u,r,l,o)||w(u,t,r,l,o)
if(d)return d}else o.traceEnabled&&a(o.host,e.Diagnostics.package_json_does_not_have_types_field)}else o.traceEnabled&&a(o.host,e.Diagnostics.File_0_does_not_exist,s),r.push(s)
return E(e.combinePaths(n,"index"),t,r,!c,o)}function P(t){return e.combinePaths(t,"package.json")}function O(t,n,r,a){var i=e.combinePaths(n,"node_modules"),o=T(i,a.host),s=e.normalizePath(e.combinePaths(i,t)),c=e.getSupportedExtensions(a.compilerOptions),_=E(s,c,r,!o,a)
return _?_:(_=N(c,s,r,!o,a),_?_:void 0)}function R(t,n,r,a){for(n=e.normalizeSlashes(n);;){var i=e.getBaseFileName(n)
if("node_modules"!==i){var o=O(t,n,r,a)
if(o&&e.hasTypeScriptFileExtension(o))return o
var s=O(e.combinePaths("@types",t),n,r,a)
if(s||o)return s||o}var c=e.getDirectoryPath(n)
if(c===n)break
n=c}}function F(t,n,r,a){var o=i(r,a),_={compilerOptions:r,host:a,traceEnabled:o,skipTsx:!r.jsx},u=[],l=e.getSupportedExtensions(r),d=e.getDirectoryPath(n),p=g(t,d,E,u,l,_)
if(p)return s(p,!1,u)
var f
if(c(t))for(;;){var m=e.normalizePath(e.combinePaths(d,t))
if(f=E(m,l,u,!1,_))break
var y=e.getDirectoryPath(d)
if(y===d)break
d=y}else{var h=e.normalizePath(e.combinePaths(d,t))
f=E(h,l,u,!1,_)}return f?{resolvedModule:{resolvedFileName:f},failedLookupLocations:u}:{resolvedModule:void 0,failedLookupLocations:u}}function I(t,n){function r(t){return e.sys.useCaseSensitiveFileNames?t:t.toLowerCase()}function a(r,a,i){var o
try{e.performance.mark("beforeIORead"),o=e.sys.readFile(r,t.charset),e.performance.mark("afterIORead"),e.performance.measure("I/O Read","beforeIORead","afterIORead")}catch(s){i&&i(s.number===d?e.createCompilerDiagnostic(e.Diagnostics.Unsupported_file_encoding).messageText:s.message),o=""}return void 0!==o?e.createSourceFile(r,o,a,n):void 0}function i(t){return t in l?!0:e.sys.directoryExists(t)?(l[t]=!0,!0):!1}function o(t){if(t.length>e.getRootLength(t)&&!i(t)){var n=e.getDirectoryPath(t)
o(n),e.sys.createDirectory(t)}}function s(t,n,r){u||(u=e.createMap())
var a=e.sys.createHash(n),i=e.sys.getModifiedTime(t)
if(i&&t in u){var o=u[t]
if(o.byteOrderMark===r&&o.hash===a&&o.mtime.getTime()===i.getTime())return}e.sys.writeFile(t,n,r)
var s=e.sys.getModifiedTime(t)
u[t]={hash:a,byteOrderMark:r,mtime:s}}function c(n,r,a,i){try{e.performance.mark("beforeIOWrite"),o(e.getDirectoryPath(e.normalizePath(n))),e.isWatchSet(t)&&e.sys.createHash&&e.sys.getModifiedTime?s(n,r,a):e.sys.writeFile(n,r,a),e.performance.mark("afterIOWrite"),e.performance.measure("I/O Write","beforeIOWrite","afterIOWrite")}catch(c){i&&i(c.message)}}function _(){return e.getDirectoryPath(e.normalizePath(e.sys.getExecutingFilePath()))}var u,l=e.createMap(),d=-2147024809,p=e.getNewLineCharacter(t),f=e.sys.realpath&&function(t){return e.sys.realpath(t)}
return{getSourceFile:a,getDefaultLibLocation:_,getDefaultLibFileName:function(t){return e.combinePaths(_(),e.getDefaultLibFileName(t))},writeFile:c,getCurrentDirectory:e.memoize(function(){return e.sys.getCurrentDirectory()}),useCaseSensitiveFileNames:function(){return e.sys.useCaseSensitiveFileNames},getCanonicalFileName:r,getNewLine:function(){return p},fileExists:function(t){return e.sys.fileExists(t)},readFile:function(t){return e.sys.readFile(t)},trace:function(t){return e.sys.write(t+p)},directoryExists:function(t){return e.sys.directoryExists(t)},getDirectories:function(t){return e.sys.getDirectories(t)},realpath:f}}function M(t,n,r){var a=t.getOptionsDiagnostics(r).concat(t.getSyntacticDiagnostics(n,r),t.getGlobalDiagnostics(r),t.getSemanticDiagnostics(n,r))
return t.getCompilerOptions().declaration&&(a=a.concat(t.getDeclarationDiagnostics(n,r))),e.sortAndDeduplicateDiagnostics(a)}function L(t,n){for(var r="",a=0,i=t;a<i.length;a++){var o=i[a]
if(o.file){var s=e.getLineAndCharacterOfPosition(o.file,o.start),c=s.line,_=s.character,u=o.file.fileName,l=e.convertToRelativePath(u,n.getCurrentDirectory(),function(e){return n.getCanonicalFileName(e)})
r+=l+"("+(c+1)+","+(_+1)+"): "}var d=e.DiagnosticCategory[o.category].toLowerCase()
r+=d+" TS"+o.code+": "+B(o.messageText,n.getNewLine())+n.getNewLine()}return r}function B(e,t){if("string"==typeof e)return e
for(var n=e,r="",a=0;n;){if(a){r+=t
for(var i=0;a>i;i++)r+="  "}r+=n.messageText,a++,n=n.next}return r}function J(t,n,r){if(0===t.length)return[]
for(var a=[],i=e.createMap(),o=0,s=t;o<s.length;o++){var c=s[o],_=c in i?i[c]:i[c]=r(c,n)
a.push(_)}return a}function K(t,n){if(t.types)return t.types
var r=[]
if(n.directoryExists&&n.getDirectories){var a=l(t,n)
if(a)for(var i=0,o=a;i<o.length;i++){var s=o[i]
if(n.directoryExists(s))for(var c=0,_=n.getDirectories(s);c<_.length;c++){var d=_[c],p=e.normalizePath(d),f=P(e.combinePaths(s,p)),g=n.fileExists(f)&&null===u(f,n).typings
g||r.push(e.getBaseFileName(p))}}}return r}function z(t,a,i,s){function c(){return void 0===re&&(re=a.rootDir&&Z(se,a.rootDir)?e.getNormalizedAbsolutePath(a.rootDir,ye):$(se),re&&re[re.length-1]!==e.directorySeparator&&(re+=e.directorySeparator)),re}function _(){if(!oe){g(),oe=e.createMap()
for(var t=0,n=se;t<n.length;t++){var r=n[t]
e.copyProperties(r.classifiableNames,oe)}}return oe}function u(){if(!s)return!1
var n=s.getCompilerOptions()
if(n.module!==a.module||n.moduleResolution!==a.moduleResolution||n.noResolve!==a.noResolve||n.target!==a.target||n.noLib!==a.noLib||n.jsx!==a.jsx||n.allowJs!==a.allowJs||n.rootDir!==a.rootDir||n.configFilePath!==a.configFilePath||n.baseUrl!==a.baseUrl||n.maxNodeModuleJsDepth!==a.maxNodeModuleJsDepth||!e.arrayIsEqualTo(n.typeRoots,n.typeRoots)||!e.arrayIsEqualTo(n.rootDirs,a.rootDirs)||!e.equalOwnProperties(n.paths,a.paths))return!1
e.Debug.assert(!s.structureIsReused)
var r=s.getRootFileNames()
if(!e.arrayIsEqualTo(r,t))return!1
if(!e.arrayIsEqualTo(a.types,n.types))return!1
for(var o=[],c=[],_=[],u=0,l=s.getSourceFiles();u<l.length;u++){var d=l[u],p=i.getSourceFileByPath?i.getSourceFileByPath(d.fileName,d.path,a.target):i.getSourceFile(d.fileName,a.target)
if(!p)return!1
if(p.path=d.path,c.push(p.path),d!==p){if(d.hasNoDefaultLib!==p.hasNoDefaultLib)return!1
if(!e.arrayIsEqualTo(d.referencedFiles,p.referencedFiles,M))return!1
if(z(p),!e.arrayIsEqualTo(d.imports,p.imports,L))return!1
if(!e.arrayIsEqualTo(d.moduleAugmentations,p.moduleAugmentations,L))return!1
if(!e.arrayIsEqualTo(d.typeReferenceDirectives,p.typeReferenceDirectives,M))return!1
var f=e.getNormalizedAbsolutePath(p.fileName,ye)
if(fe){var g=e.map(e.concatenate(p.imports,p.moduleAugmentations),B),m=fe(g,f),y=e.hasChangesInResolutions(g,m,d.resolvedModules,e.moduleResolutionIsEqualTo)
if(y)return!1}if(be){var h=e.map(p.typeReferenceDirectives,function(e){return e.fileName}),m=be(h,f),y=e.hasChangesInResolutions(h,m,d.resolvedTypeReferenceDirectiveNames,e.typeDirectiveIsEqualTo)
if(y)return!1}p.resolvedModules=d.resolvedModules,p.resolvedTypeReferenceDirectiveNames=d.resolvedTypeReferenceDirectiveNames,_.push(p)}else p=d
o.push(p)}for(var v=0,k=o.length;k>v;v++)De.set(c[v],o[v])
se=o,_e=s.getFileProcessingDiagnostics()
for(var b=0,x=_;b<x.length;b++){var D=x[b]
_e.reattachFileDiagnostics(D)}return ce=s.getResolvedTypeReferenceDirectives(),s.structureIsReused=!0,!0}function l(e){return{getCanonicalFileName:Q,getCommonSourceDirectory:ne.getCommonSourceDirectory,getCompilerOptions:ne.getCompilerOptions,getCurrentDirectory:function(){return ye},getNewLine:function(){return i.getNewLine()},getSourceFile:ne.getSourceFile,getSourceFileByPath:ne.getSourceFileByPath,getSourceFiles:ne.getSourceFiles,isSourceFileFromExternalLibrary:function(e){return!!pe[e.path]},writeFile:e||function(e,t,n,r,a){return i.writeFile(e,t,n,r,a)},isEmitBlocked:y}}function d(){return ae||(ae=e.createTypeChecker(ne,!0))}function g(){return ie||(ie=e.createTypeChecker(ne,!1))}function m(e,t,n){return T(function(){return h(ne,e,t,n)})}function y(t){return ve.contains(e.toPath(t,ye,Q))}function h(t,n,r,i){var o=[]
if(a.noEmit)return{diagnostics:o,sourceMaps:void 0,emittedFiles:void 0,emitSkipped:!0}
if(a.noEmitOnError){var s=t.getOptionsDiagnostics(i).concat(t.getSyntacticDiagnostics(n,i),t.getGlobalDiagnostics(i),t.getSemanticDiagnostics(n,i))
if(0===s.length&&t.getCompilerOptions().declaration&&(o=t.getDeclarationDiagnostics(void 0,i)),s.length>0||o.length>0)return{diagnostics:e.concatenate(s,o),sourceMaps:void 0,emittedFiles:void 0,emitSkipped:!0}}var c=d().getEmitResolver(a.outFile||a.out?void 0:n)
e.performance.mark("beforeEmit")
var _=e.emitFiles(c,l(r),n)
return e.performance.mark("afterEmit"),e.performance.measure("Emit","beforeEmit","afterEmit"),_}function v(t){return k(e.toPath(t,ye,Q))}function k(e){return De.get(e)}function b(t,n,r){if(t)return n(t,r)
var a=[]
return e.forEach(ne.getSourceFiles(),function(t){r&&r.throwIfCancellationRequested(),e.addRange(a,n(t,r))}),e.sortAndDeduplicateDiagnostics(a)}function x(e,t){return b(e,S,t)}function D(e,t){return b(e,E,t)}function C(e,t){var n=ne.getCompilerOptions()
return!e||n.out||n.outFile?A(e,t):b(e,N,t)}function S(e,t){return e.parseDiagnostics}function T(t){try{return t()}catch(n){throw n instanceof e.OperationCanceledException&&(ie=void 0,ae=void 0),n}}function E(t,n){return T(function(){var r=d()
e.Debug.assert(!!t.bindDiagnostics)
var a=t.bindDiagnostics,i=e.isSourceFileJavaScript(t)?w(t,n):r.getDiagnostics(t,n),o=_e.getDiagnostics(t.fileName),s=me.getDiagnostics(t.fileName)
return a.concat(i).concat(o).concat(s)})}function w(t,n){return T(function(){function n(c){if(!c)return!1
switch(c.kind){case 229:return s.push(e.createDiagnosticForNode(c,e.Diagnostics.import_can_only_be_used_in_a_ts_file)),!0
case 235:if(c.isExportEquals)return s.push(e.createDiagnosticForNode(c,e.Diagnostics.export_can_only_be_used_in_a_ts_file)),!0
break
case 221:var _=c
if(o(_.modifiers)||r(_.typeParameters))return!0
break
case 251:var u=c
if(106===u.token)return s.push(e.createDiagnosticForNode(c,e.Diagnostics.implements_clauses_can_only_be_used_in_a_ts_file)),!0
break
case 222:return s.push(e.createDiagnosticForNode(c,e.Diagnostics.interface_declarations_can_only_be_used_in_a_ts_file)),!0
case 225:return s.push(e.createDiagnosticForNode(c,e.Diagnostics.module_declarations_can_only_be_used_in_a_ts_file)),!0
case 223:return s.push(e.createDiagnosticForNode(c,e.Diagnostics.type_aliases_can_only_be_used_in_a_ts_file)),!0
case 147:case 146:case 148:case 149:case 150:case 179:case 220:case 180:case 220:var l=c
if(o(l.modifiers)||r(l.typeParameters)||i(l.type))return!0
break
case 200:var d=c
if(o(d.modifiers))return!0
break
case 218:var p=c
if(i(p.type))return!0
break
case 174:case 175:var f=c
if(f.typeArguments&&f.typeArguments.length>0){var g=f.typeArguments.pos
return s.push(e.createFileDiagnostic(t,g,f.typeArguments.end-g,e.Diagnostics.type_arguments_can_only_be_used_in_a_ts_file)),!0}break
case 142:var m=c
if(m.modifiers){var g=m.modifiers.pos
return s.push(e.createFileDiagnostic(t,g,m.modifiers.end-g,e.Diagnostics.parameter_modifiers_can_only_be_used_in_a_ts_file)),!0}if(m.questionToken)return s.push(e.createDiagnosticForNode(m.questionToken,e.Diagnostics._0_can_only_be_used_in_a_ts_file,"?")),!0
if(m.type)return s.push(e.createDiagnosticForNode(m.type,e.Diagnostics.types_can_only_be_used_in_a_ts_file)),!0
break
case 145:var y=c
if(y.modifiers)for(var h=0,v=y.modifiers;h<v.length;h++){var k=v[h]
if(113!==k.kind)return s.push(e.createDiagnosticForNode(k,e.Diagnostics._0_can_only_be_used_in_a_ts_file,e.tokenToString(k.kind))),!0}if(i(c.type))return!0
break
case 224:return s.push(e.createDiagnosticForNode(c,e.Diagnostics.enum_declarations_can_only_be_used_in_a_ts_file)),!0
case 177:var b=c
return s.push(e.createDiagnosticForNode(b.type,e.Diagnostics.type_assertion_expressions_can_only_be_used_in_a_ts_file)),!0
case 143:return a.experimentalDecorators||s.push(e.createDiagnosticForNode(c,e.Diagnostics.Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_the_experimentalDecorators_option_to_remove_this_warning)),!0}return e.forEachChild(c,n)}function r(n){if(n){var r=n.pos
return s.push(e.createFileDiagnostic(t,r,n.end-r,e.Diagnostics.type_parameter_declarations_can_only_be_used_in_a_ts_file)),!0}return!1}function i(t){return t?(s.push(e.createDiagnosticForNode(t,e.Diagnostics.types_can_only_be_used_in_a_ts_file)),!0):!1}function o(t){if(t)for(var n=0,r=t;n<r.length;n++){var a=r[n]
switch(a.kind){case 112:case 110:case 111:case 128:case 122:return s.push(e.createDiagnosticForNode(a,e.Diagnostics._0_can_only_be_used_in_a_ts_file,e.tokenToString(a.kind))),!0
case 113:case 82:case 74:case 77:case 115:}}return!1}var s=[]
return n(t),s})}function A(t,n){return T(function(){var r=d().getEmitResolver(t,n),a=function(){}
return e.getDeclarationDiagnostics(l(a),r,t)})}function N(t,n){return e.isDeclarationFile(t)?[]:A(t,n)}function P(){var t=[]
return e.addRange(t,_e.getGlobalDiagnostics()),e.addRange(t,me.getGlobalDiagnostics()),e.sortAndDeduplicateDiagnostics(t)}function O(){var t=[]
return e.addRange(t,d().getGlobalDiagnostics()),e.sortAndDeduplicateDiagnostics(t)}function R(t){return e.getBaseFileName(t).indexOf(".")>=0}function F(t,n){U(e.normalizePath(t),n,!0)}function M(e,t){return e.fileName===t.fileName}function L(e,t){return e.text===t.text}function B(e){return e.text}function z(t){function n(r,o){switch(r.kind){case 230:case 229:case 236:var c=e.getExternalModuleName(r)
if(!c||9!==c.kind)break
if(!c.text)break
o&&e.isExternalModuleNameRelative(c.text)||(a||(a=[])).push(c)
break
case 225:if(e.isAmbientModule(r)&&(o||2&r.flags||e.isDeclarationFile(t))){var _=r.name
if(s||o&&!e.isExternalModuleNameRelative(_.text))(i||(i=[])).push(_)
else if(!o){var u=r.body
if(u)for(var l=0,d=u.statements;l<d.length;l++){var p=d[l]
n(p,!0)}}}}}function r(t){e.isRequireCall(t,!0)?(a||(a=[])).push(t.arguments[0]):e.forEachChild(t,r)}if(!t.imports){for(var a,i,o=e.isSourceFileJavaScript(t),s=e.isExternalModule(t),c=0,_=t.statements;c<_.length;c++){var u=_[c]
n(u,!1),o&&r(u)}t.imports=a||j,t.moduleAugmentations=i||j}}function U(t,n,r,o,s,c){var _,u
if(R(t))a.allowNonTsExtensions||e.forEach(he,function(n){return e.fileExtensionIs(i.getCanonicalFileName(t),n)})?W(t,e.toPath(t,ye,Q),n,r,o,s,c)?o&&i.getCanonicalFileName(t)===i.getCanonicalFileName(o.fileName)&&(u=e.Diagnostics.A_file_cannot_have_a_reference_to_itself,_=[t]):(u=e.Diagnostics.File_0_not_found,_=[t]):(u=e.Diagnostics.File_0_has_unsupported_extension_The_only_supported_extensions_are_1,_=[t,"'"+he.join("', '")+"'"])
else{var l=a.allowNonTsExtensions&&W(t,e.toPath(t,ye,Q),n,r,o,s,c)
l||(a.allowNonTsExtensions?(u=e.Diagnostics.File_0_not_found,_=[t]):e.forEach(he,function(a){return W(t+a,e.toPath(t+a,ye,Q),n,r,o,s,c)})||(u=e.Diagnostics.File_0_not_found,t+=".ts",_=[t]))}u&&(void 0!==o&&void 0!==c&&void 0!==s?_e.add(e.createFileDiagnostic.apply(void 0,[o,s,c-s,u].concat(_))):_e.add(e.createCompilerDiagnostic.apply(void 0,[u].concat(_))))}function q(t,n,r,a,i){void 0!==r&&void 0!==a&&void 0!==i?_e.add(e.createFileDiagnostic(r,a,i-a,e.Diagnostics.File_name_0_differs_from_already_included_file_name_1_only_in_casing,t,n)):_e.add(e.createCompilerDiagnostic(e.Diagnostics.File_name_0_differs_from_already_included_file_name_1_only_in_casing,t,n))}function W(t,n,r,o,s,c,_){if(De.contains(n)){var u=De.get(n)
return u&&a.forceConsistentCasingInFileNames&&e.getNormalizedAbsolutePath(u.fileName,ye)!==e.getNormalizedAbsolutePath(t,ye)&&q(t,u.fileName,s,c,_),u&&pe[u.path]&&0==le?(pe[u.path]=!1,a.noResolve||(V(u,e.getDirectoryPath(t),r),H(u)),de[u.path]=!1,Y(u,e.getDirectoryPath(t))):u&&de[u.path]&&ue>le&&(de[u.path]=!1,Y(u,e.getDirectoryPath(t))),u}var l=i.getSourceFile(t,a.target,function(n){void 0!==s&&void 0!==c&&void 0!==_?_e.add(e.createFileDiagnostic(s,c,_-c,e.Diagnostics.Cannot_read_file_0_Colon_1,t,n)):_e.add(e.createCompilerDiagnostic(e.Diagnostics.Cannot_read_file_0_Colon_1,t,n))})
if(De.set(n,l),l){if(pe[n]=le>0,l.path=n,i.useCaseSensitiveFileNames()){var d=Ce.get(n)
d?q(t,d.fileName,s,c,_):Ce.set(n,l)}ge=ge||l.hasNoDefaultLib
var p=e.getDirectoryPath(t)
a.noResolve||(V(l,p,r),H(l)),Y(l,p),r?se.unshift(l):se.push(l)}return l}function V(t,r,a){e.forEach(t.referencedFiles,function(e){var r=n(e.fileName,t.fileName)
U(r,a,!0,t,e.pos,e.end)})}function H(t){for(var n=e.map(t.typeReferenceDirectives,function(e){return e.fileName.toLocaleLowerCase()}),r=be(n,t.fileName),a=0;a<n.length;a++){var i=t.typeReferenceDirectives[a],o=r[a],s=i.fileName.toLocaleLowerCase()
e.setResolvedTypeReferenceDirective(t,s,o),G(s,o,t,i.pos,i.end)}}function G(t,n,r,a,o){var s=ce[t]
if(!s||!s.primary){var c=!0
if(n)if(n.primary)U(n.resolvedFileName,!1,!0,r,a,o)
else if(s){var _=i.readFile(n.resolvedFileName)
_!==v(s.resolvedFileName).text&&_e.add(X(r,a,o,e.Diagnostics.Conflicting_definitions_for_0_found_at_1_and_2_Consider_installing_a_specific_version_of_this_library_to_resolve_the_conflict,t,n.resolvedFileName,s.resolvedFileName)),c=!1}else U(n.resolvedFileName,!1,!0,r,a,o)
else _e.add(X(r,a,o,e.Diagnostics.Cannot_find_type_definition_file_for_0,t))
c&&(ce[t]=n)}}function X(t,n,r,a){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o]
return void 0===t||void 0===n||void 0===r?e.createCompilerDiagnostic.apply(void 0,[a].concat(i)):e.createFileDiagnostic.apply(void 0,[t,n,r-n,a].concat(i))}function Q(e){return i.getCanonicalFileName(e)}function Y(t,n){if(z(t),t.imports.length||t.moduleAugmentations.length){t.resolvedModules=e.createMap()
for(var r=e.map(e.concatenate(t.imports,t.moduleAugmentations),B),i=fe(r,e.getNormalizedAbsolutePath(t.fileName,ye)),o=0;o<r.length;o++){var s=i[o]
e.setResolvedModule(t,r[o],s)
var c=s?e.toPath(s.resolvedFileName,ye,Q):void 0,_=s&&s.isExternalLibraryImport,u=_&&e.hasJavaScriptFileExtension(s.resolvedFileName)
_&&le++
var l=u&&le>ue,d=s&&!a.noResolve&&o<t.imports.length&&!l
l?de[t.path]=!0:d&&W(s.resolvedFileName,c,!1,!1,t,e.skipTrivia(t.text,t.imports[o].pos),t.imports[o].end),_&&le--}}else t.resolvedModules=void 0}function $(e){for(var t=[],n=0,a=e;n<a.length;n++){var i=a[n]
i.isDeclarationFile||t.push(i.fileName)}return r(t,ye,Q)}function Z(t,n){var r=!0
if(t)for(var o=i.getCanonicalFileName(e.getNormalizedAbsolutePath(n,ye)),s=0,c=t;s<c.length;s++){var _=c[s]
if(!e.isDeclarationFile(_)){var u=i.getCanonicalFileName(e.getNormalizedAbsolutePath(_.fileName,ye))
0!==u.indexOf(o)&&(me.add(e.createCompilerDiagnostic(e.Diagnostics.File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files,_.fileName,a.rootDir)),r=!1)}}return r}function ee(){function t(t,n){if(t){var r=e.toPath(t,ye,Q)
De.contains(r)&&te(t,r,e.Diagnostics.Cannot_write_file_0_because_it_would_overwrite_input_file),n.contains(r)?te(t,r,e.Diagnostics.Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files):n.set(r,!0)}}if(a.isolatedModules&&(a.declaration&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"declaration","isolatedModules")),a.noEmitOnError&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"noEmitOnError","isolatedModules")),a.out&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"out","isolatedModules")),a.outFile&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"outFile","isolatedModules"))),a.inlineSourceMap&&(a.sourceMap&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"sourceMap","inlineSourceMap")),a.mapRoot&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"mapRoot","inlineSourceMap"))),a.paths&&void 0===a.baseUrl&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_paths_cannot_be_used_without_specifying_baseUrl_option)),a.paths)for(var n in a.paths)if(e.hasProperty(a.paths,n))if(o(n)||me.add(e.createCompilerDiagnostic(e.Diagnostics.Pattern_0_can_have_at_most_one_Asterisk_character,n)),e.isArray(a.paths[n])){0===a.paths[n].length&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Substitutions_for_pattern_0_shouldn_t_be_an_empty_array,n))
for(var r=0,s=a.paths[n];r<s.length;r++){var _=s[r],u=typeof _
"string"===u?o(_)||me.add(e.createCompilerDiagnostic(e.Diagnostics.Substitution_0_in_pattern_1_in_can_have_at_most_one_Asterisk_character,_,n)):me.add(e.createCompilerDiagnostic(e.Diagnostics.Substitution_0_for_pattern_1_has_incorrect_type_expected_string_got_2,_,n,u))}}else me.add(e.createCompilerDiagnostic(e.Diagnostics.Substitutions_for_pattern_0_should_be_an_array,n))
a.sourceMap||a.inlineSourceMap||(a.inlineSources&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided,"inlineSources")),a.sourceRoot&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided,"sourceRoot"))),a.out&&a.outFile&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"out","outFile")),a.mapRoot&&!a.sourceMap&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_without_specifying_option_1,"mapRoot","sourceMap")),a.declarationDir&&(a.declaration||me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_without_specifying_option_1,"declarationDir","declaration")),(a.out||a.outFile)&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"declarationDir",a.out?"out":"outFile"))),a.lib&&a.noLib&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"lib","noLib"))
var d=a.target||0,p=a.outFile||a.out,f=e.forEach(se,function(t){return e.isExternalModule(t)&&!e.isDeclarationFile(t)?t:void 0})
if(a.isolatedModules){a.module===e.ModuleKind.None&&2>d&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES2015_or_higher))
var g=e.forEach(se,function(t){return e.isExternalModule(t)||e.isDeclarationFile(t)?void 0:t})
if(g){var m=e.getErrorSpanForNode(g,g)
me.add(e.createFileDiagnostic(g,m.start,m.length,e.Diagnostics.Cannot_compile_namespaces_when_the_isolatedModules_flag_is_provided))}}else if(f&&2>d&&a.module===e.ModuleKind.None){var m=e.getErrorSpanForNode(f,f.externalModuleIndicator)
me.add(e.createFileDiagnostic(f,m.start,m.length,e.Diagnostics.Cannot_use_imports_exports_or_module_augmentations_when_module_is_none))}if(p)if(a.module&&a.module!==e.ModuleKind.AMD&&a.module!==e.ModuleKind.System)me.add(e.createCompilerDiagnostic(e.Diagnostics.Only_amd_and_system_modules_are_supported_alongside_0,a.out?"out":"outFile"))
else if(void 0===a.module&&f){var m=e.getErrorSpanForNode(f,f.externalModuleIndicator)
me.add(e.createFileDiagnostic(f,m.start,m.length,e.Diagnostics.Cannot_compile_modules_using_option_0_unless_the_module_flag_is_amd_or_system,a.out?"out":"outFile"))}if(a.outDir||a.sourceRoot||a.mapRoot){var y=c()
a.outDir&&""===y&&e.forEach(se,function(t){return e.getRootLength(t.fileName)>1})&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Cannot_find_the_common_subdirectory_path_for_the_input_files))}if(!a.noEmit&&a.allowJs&&a.declaration&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_with_option_1,"allowJs","declaration")),a.emitDecoratorMetadata&&!a.experimentalDecorators&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Option_0_cannot_be_specified_without_specifying_option_1,"emitDecoratorMetadata","experimentalDecorators")),a.reactNamespace&&!e.isIdentifier(a.reactNamespace,d)&&me.add(e.createCompilerDiagnostic(e.Diagnostics.Invalid_value_for_reactNamespace_0_is_not_a_valid_identifier,a.reactNamespace)),!a.noEmit&&!a.suppressOutputPathCheck){var h=l(),v=e.createFileMap(i.useCaseSensitiveFileNames()?void 0:function(e){return e.toLocaleLowerCase()})
e.forEachExpectedEmitFile(h,function(e,n,r){t(e.jsFilePath,v),t(e.declarationFilePath,v)})}}function te(t,n,r){ve.set(e.toPath(t,ye,Q),!0),me.add(e.createCompilerDiagnostic(r,t))}var ne,re,ae,ie,oe,se=[],ce=e.createMap(),_e=e.createDiagnosticCollection(),ue="number"==typeof a.maxNodeModuleJsDepth?a.maxNodeModuleJsDepth:0,le=0,de=e.createMap(),pe=e.createMap()
e.performance.mark("beforeProgram"),i=i||I(a)
var fe,ge=a.noLib,me=e.createDiagnosticCollection(),ye=i.getCurrentDirectory(),he=e.getSupportedExtensions(a),ve=e.createFileMap(Q)
if(i.resolveModuleNames)fe=function(e,t){return i.resolveModuleNames(e,t)}
else{var ke=function(e,t){return f(e,t,a,i).resolvedModule}
fe=function(e,t){return J(e,t,ke)}}var be
if(i.resolveTypeReferenceDirectives)be=function(e,t){return i.resolveTypeReferenceDirectives(e,t)}
else{var xe=function(e,t){return p(e,t,a,i).resolvedTypeReferenceDirective}
be=function(e,t){return J(e,t,xe)}}var De=e.createFileMap(),Ce=i.useCaseSensitiveFileNames()?e.createFileMap(function(e){return e.toLowerCase()}):void 0
if(!u()){e.forEach(t,function(e){return F(e,!1)})
var Se=K(a,i)
if(Se)for(var Te=e.combinePaths(i.getCurrentDirectory(),"__inferred type names__.ts"),Ee=be(Se,Te),we=0;we<Se.length;we++)G(Se[we],Ee[we])
if(!ge)if(a.lib){var Ae=i.getDefaultLibLocation?i.getDefaultLibLocation():e.getDirectoryPath(i.getDefaultLibFileName(a))
e.forEach(a.lib,function(t){F(e.combinePaths(Ae,t),!0)})}else F(i.getDefaultLibFileName(a),!0)}return s=void 0,ne={getRootFileNames:function(){return t},getSourceFile:v,getSourceFileByPath:k,getSourceFiles:function(){return se},getCompilerOptions:function(){return a},getSyntacticDiagnostics:x,getOptionsDiagnostics:P,getGlobalDiagnostics:O,getSemanticDiagnostics:D,getDeclarationDiagnostics:C,getTypeChecker:g,getClassifiableNames:_,getDiagnosticsProducingTypeChecker:d,getCommonSourceDirectory:c,emit:m,getCurrentDirectory:function(){return ye},getNodeCount:function(){return d().getNodeCount()},getIdentifierCount:function(){return d().getIdentifierCount()},getSymbolCount:function(){return d().getSymbolCount()},getTypeCount:function(){return d().getTypeCount()},getFileProcessingDiagnostics:function(){return _e},getResolvedTypeReferenceDirectives:function(){return ce}},ee(),e.performance.mark("afterProgram"),e.performance.measure("Program","beforeProgram","afterProgram"),ne}e.version="2.0.3"
var j=[]
e.findConfigFile=t,e.resolveTripleslashReference=n,e.computeCommonSourceDirectoryOfFilenames=r,e.hasZeroOrOneAsteriskCharacter=o
var U=[".d.ts"],q=e.combinePaths("node_modules","@types")
e.resolveTypeReferenceDirective=p,e.resolveModuleName=f,e.findBestPatternMatch=b,e.tryParsePattern=D,e.nodeModuleNameResolver=C,e.directoryProbablyExists=T,e.classicNameResolver=F,e.createCompilerHost=I,e.getPreEmitDiagnostics=M,e.formatDiagnostics=L,e.flattenDiagnosticMessageText=B,e.getAutomaticTypeDirectiveNames=K,e.createProgram=z}(ts||(ts={}))
var ts
!function(e){function t(){if(w)return w
var t=e.createMap(),n=e.createMap()
return e.forEach(e.optionDeclarations,function(e){t[e.name.toLowerCase()]=e,e.shortName&&(n[e.shortName]=e.name)}),w={optionNameMap:t,shortOptionNames:n}}function n(t){var n=[]
for(var r in t.type)n.push(" '"+r+"'")
return e.createCompilerDiagnostic(e.Diagnostics.Argument_for_0_option_must_be_Colon_1,"--"+t.name,n)}function r(e,t,r){var a=v(t||"").toLowerCase(),i=e.type
return a in i?i[a]:void r.push(n(e))}function a(t,n,a){if(void 0===n&&(n=""),n=v(n),!e.startsWith(n,"-")){if(""===n)return[]
var i=n.split(",")
switch(t.element.type){case"number":return e.map(i,parseInt)
case"string":return e.map(i,function(e){return e||""})
default:return e.filter(e.map(i,function(e){return r(t.element,e,a)}),function(e){return!!e})}}}function i(n,i){function o(t){for(var n=0;n<t.length;){var i=t[n]
if(n++,64===i.charCodeAt(0))s(i.slice(1))
else if(45===i.charCodeAt(0))if(i=i.slice(45===i.charCodeAt(1)?2:1).toLowerCase(),i in p&&(i=p[i]),i in d){var o=d[i]
if(o.isTSConfigOnly)u.push(e.createCompilerDiagnostic(e.Diagnostics.Option_0_can_only_be_specified_in_tsconfig_json_file,o.name))
else switch(t[n]||"boolean"===o.type||u.push(e.createCompilerDiagnostic(e.Diagnostics.Compiler_option_0_expects_an_argument,o.name)),o.type){case"number":c[o.name]=parseInt(t[n]),n++
break
case"boolean":c[o.name]=!0
break
case"string":c[o.name]=t[n]||"",n++
break
case"list":var l=a(o,t[n],u)
c[o.name]=l||[],l&&n++
break
default:c[o.name]=r(o,t[n],u),n++}}else u.push(e.createCompilerDiagnostic(e.Diagnostics.Unknown_compiler_option_0,i))
else _.push(i)}}function s(t){var n=i?i(t):e.sys.readFile(t)
if(!n)return void u.push(e.createCompilerDiagnostic(e.Diagnostics.File_0_not_found,t))
for(var r=[],a=0;;){for(;a<n.length&&n.charCodeAt(a)<=32;)a++
if(a>=n.length)break
var s=a
if(34===n.charCodeAt(s)){for(a++;a<n.length&&34!==n.charCodeAt(a);)a++
a<n.length?(r.push(n.substring(s+1,a)),a++):u.push(e.createCompilerDiagnostic(e.Diagnostics.Unterminated_quoted_string_in_response_file_0,t))}else{for(;n.charCodeAt(a)>32;)a++
r.push(n.substring(s,a))}}o(r)}var c={},_=[],u=[],l=t(),d=l.optionNameMap,p=l.shortOptionNames
return o(n),{options:c,fileNames:_,errors:u}}function o(t,n){var r=""
try{r=n(t)}catch(a){return{error:e.createCompilerDiagnostic(e.Diagnostics.Cannot_read_file_0_Colon_1,t,a.message)}}return s(t,r)}function s(t,n){try{var r=_(n)
return{config:/\S/.test(r)?JSON.parse(r):{}}}catch(a){return{error:e.createCompilerDiagnostic(e.Diagnostics.Failed_to_parse_file_0_Colon_1,t,a.message)}}}function c(n,r){function a(e){return"string"===e.type||"number"===e.type||"boolean"===e.type?void 0:"list"===e.type?a(e.element):e.type}function i(e,t){for(var n in t)if(t[n]===e)return n}function o(n){var r=e.createMap(),o=t().optionNameMap
for(var s in n)if(e.hasProperty(n,s))switch(s){case"init":case"watch":case"version":case"help":case"project":break
default:var c=n[s],_=o[s.toLowerCase()]
if(_){var u=a(_)
if(u)if("list"===_.type){for(var l=[],d=0,p=c;d<p.length;d++){var f=p[d]
l.push(i(f,u))}r[s]=l}else r[s]=i(c,u)
else r[s]=c}}return r}var s=e.extend(n,e.defaultInitCompilerOptions),c={compilerOptions:o(s)}
return r&&r.length&&(c.files=r),c}function _(t){for(var n,r="",a=e.createScanner(1,!1,0,t);1!==(n=a.scan());)switch(n){case 2:case 3:r+=a.getTokenText().replace(/\S/g," ")
break
default:r+=a.getTokenText()}return r}function u(t,n,r,a,i){function o(a){var i
e.hasProperty(t,"files")&&(e.isArray(t.files)?i=t.files:a.push(e.createCompilerDiagnostic(e.Diagnostics.Compiler_option_0_requires_a_value_of_type_1,"files","Array")))
var o
e.hasProperty(t,"include")&&(e.isArray(t.include)?o=t.include:a.push(e.createCompilerDiagnostic(e.Diagnostics.Compiler_option_0_requires_a_value_of_type_1,"include","Array")))
var s
e.hasProperty(t,"exclude")?e.isArray(t.exclude)?s=t.exclude:a.push(e.createCompilerDiagnostic(e.Diagnostics.Compiler_option_0_requires_a_value_of_type_1,"exclude","Array")):e.hasProperty(t,"excludes")?a.push(e.createCompilerDiagnostic(e.Diagnostics.Unknown_option_excludes_Did_you_mean_exclude)):s=["node_modules","bower_components","jspm_packages"]
var c=t.compilerOptions&&t.compilerOptions.outDir
return c&&s.push(c),void 0===i&&void 0===o&&(o=["**/*"]),k(i,o,s,r,_,n,a)}void 0===a&&(a={})
var s=[],c=p(t.compilerOptions,r,s,i),_=e.extend(a,c),u=f(t.typingOptions,r,s,i)
_.configFilePath=i
var l=o(s),d=l.fileNames,g=l.wildcardDirectories
return{options:_,fileNames:d,typingOptions:u,raw:t,errors:s,wildcardDirectories:g}}function l(e,t,n){var r=[],a=p(e,t,r,n)
return{options:a,errors:r}}function d(e,t,n){var r=[],a=f(e,t,r,n)
return{options:a,errors:r}}function p(t,n,r,a){var i="jsconfig.json"===e.getBaseFileName(a)?{allowJs:!0,maxNodeModuleJsDepth:2}:{}
return g(e.optionDeclarations,t,n,i,e.Diagnostics.Unknown_compiler_option_0,r),i}function f(t,n,r,a){var i="jsconfig.json"===e.getBaseFileName(a)?{enableAutoDiscovery:!0,include:[],exclude:[]}:{enableAutoDiscovery:!1,include:[],exclude:[]}
return g(e.typingOptionDeclarations,t,n,i,e.Diagnostics.Unknown_typing_option_0,r),i}function g(t,n,r,a,i,o){if(n){var s=e.arrayToMap(t,function(e){return e.name})
for(var c in n)if(c in s){var _=s[c]
a[_.name]=m(_,n[c],r,o)}else o.push(e.createCompilerDiagnostic(i,c))}}function m(t,n,r,a){var i=t.type,o="string"==typeof i?i:"string"
return"list"===i&&e.isArray(n)?h(t,n,r,a):typeof n===o?"string"!=typeof i?y(t,n,a):(t.isFilePath&&(n=e.normalizePath(e.combinePaths(r,n)),""===n&&(n=".")),n):void a.push(e.createCompilerDiagnostic(e.Diagnostics.Compiler_option_0_requires_a_value_of_type_1,t.name,o))}function y(e,t,r){var a=t.toLowerCase()
return a in e.type?e.type[a]:void r.push(n(e))}function h(t,n,r,a){return e.filter(e.map(n,function(e){return m(t.element,e,r,a)}),function(e){return!!e})}function v(e){return"function"==typeof e.trim?e.trim():e.replace(/^[\s]+|[\s]+$/g,"")}function k(t,n,r,a,i,o,s){a=e.normalizePath(a)
var c=o.useCaseSensitiveFileNames?T:E,_=e.createMap(),u=e.createMap()
n&&(n=b(n,s,!1)),r&&(r=b(r,s,!0))
var l=x(n,r,a,o.useCaseSensitiveFileNames),d=e.getSupportedExtensions(i)
if(t)for(var p=0,f=t;p<f.length;p++){var g=f[p],m=e.combinePaths(a,g)
_[c(m)]=m}if(n&&n.length>0)for(var y=0,h=o.readDirectory(a,d,r,n);y<h.length;y++){var m=h[y]
if(!D(m,_,u,d,c)){C(m,u,d,c)
var v=c(m)
v in _||v in u||(u[v]=m)}}var k=e.reduceProperties(_,S,[]),w=e.reduceProperties(u,S,[])
return w.sort(o.useCaseSensitiveFileNames?e.compareStrings:e.compareStringsCaseInsensitive),{fileNames:k.concat(w),wildcardDirectories:l}}function b(t,n,r){for(var a=[],i=0,o=t;i<o.length;i++){var s=o[i]
!r&&A.test(s)?n.push(e.createCompilerDiagnostic(e.Diagnostics.File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0,s)):N.test(s)?n.push(e.createCompilerDiagnostic(e.Diagnostics.File_specification_cannot_contain_multiple_recursive_directory_wildcards_Asterisk_Asterisk_Colon_0,s)):P.test(s)?n.push(e.createCompilerDiagnostic(e.Diagnostics.File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0,s)):a.push(s)}return a}function x(t,n,r,a){var i=e.getRegularExpressionForWildcard(n,r,"exclude"),o=i&&RegExp(i,a?"":"i"),s=e.createMap()
if(void 0!==t){for(var c=[],_=0,u=t;_<u.length;_++){var l=u[_],d=e.normalizePath(e.combinePaths(r,l))
if(!o||!o.test(d)){var p=R.exec(d)
if(p){var f=a?p[0]:p[0].toLowerCase(),g=O.test(d)?1:0,m=s[f];(void 0===m||g>m)&&(s[f]=g,1===g&&c.push(f))}}}for(var f in s)for(var y=0,h=c;y<h.length;y++){var v=h[y]
f!==v&&e.containsPath(v,f,r,!a)&&delete s[f]}}return s}function D(t,n,r,a,i){for(var o=e.getExtensionPriority(t,a),s=e.adjustExtensionPriority(o),c=0;s>c;c++){var _=a[c],u=i(e.changeExtension(t,_))
if(u in n||u in r)return!0}return!1}function C(t,n,r,a){for(var i=e.getExtensionPriority(t,r),o=e.getNextLowestExtensionPriority(i),s=o;s<r.length;s++){var c=r[s],_=a(e.changeExtension(t,c))
delete n[_]}}function S(e,t){return e.push(t),e}function T(e){return e}function E(e){return e.toLowerCase()}e.optionDeclarations=[{name:"charset",type:"string"},{name:"declaration",shortName:"d",type:"boolean",description:e.Diagnostics.Generates_corresponding_d_ts_file},{name:"declarationDir",type:"string",isFilePath:!0,paramType:e.Diagnostics.DIRECTORY},{name:"diagnostics",type:"boolean"},{name:"extendedDiagnostics",type:"boolean"},{name:"emitBOM",type:"boolean"},{name:"help",shortName:"h",type:"boolean",description:e.Diagnostics.Print_this_message},{name:"help",shortName:"?",type:"boolean"},{name:"init",type:"boolean",description:e.Diagnostics.Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file},{name:"inlineSourceMap",type:"boolean"},{name:"inlineSources",type:"boolean"},{name:"jsx",type:e.createMap({preserve:1,react:2}),paramType:e.Diagnostics.KIND,description:e.Diagnostics.Specify_JSX_code_generation_Colon_preserve_or_react},{name:"reactNamespace",type:"string",description:e.Diagnostics.Specify_the_object_invoked_for_createElement_and_spread_when_targeting_react_JSX_emit},{name:"listFiles",type:"boolean"},{name:"locale",type:"string"},{name:"mapRoot",type:"string",isFilePath:!0,description:e.Diagnostics.Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations,paramType:e.Diagnostics.LOCATION},{name:"module",shortName:"m",type:e.createMap({none:e.ModuleKind.None,commonjs:e.ModuleKind.CommonJS,amd:e.ModuleKind.AMD,system:e.ModuleKind.System,umd:e.ModuleKind.UMD,es6:e.ModuleKind.ES6,es2015:e.ModuleKind.ES2015}),description:e.Diagnostics.Specify_module_code_generation_Colon_commonjs_amd_system_umd_or_es2015,paramType:e.Diagnostics.KIND},{name:"newLine",type:e.createMap({crlf:0,lf:1}),description:e.Diagnostics.Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix,paramType:e.Diagnostics.NEWLINE},{name:"noEmit",type:"boolean",description:e.Diagnostics.Do_not_emit_outputs},{name:"noEmitHelpers",type:"boolean"},{name:"noEmitOnError",type:"boolean",description:e.Diagnostics.Do_not_emit_outputs_if_any_errors_were_reported},{name:"noErrorTruncation",type:"boolean"},{name:"noImplicitAny",type:"boolean",description:e.Diagnostics.Raise_error_on_expressions_and_declarations_with_an_implied_any_type},{name:"noImplicitThis",type:"boolean",description:e.Diagnostics.Raise_error_on_this_expressions_with_an_implied_any_type},{name:"noUnusedLocals",type:"boolean",description:e.Diagnostics.Report_errors_on_unused_locals},{name:"noUnusedParameters",type:"boolean",description:e.Diagnostics.Report_errors_on_unused_parameters},{name:"noLib",type:"boolean"},{name:"noResolve",type:"boolean"},{name:"skipDefaultLibCheck",type:"boolean"},{name:"skipLibCheck",type:"boolean",description:e.Diagnostics.Skip_type_checking_of_declaration_files},{name:"out",type:"string",isFilePath:!1,paramType:e.Diagnostics.FILE},{name:"outFile",type:"string",isFilePath:!0,description:e.Diagnostics.Concatenate_and_emit_output_to_single_file,paramType:e.Diagnostics.FILE},{name:"outDir",type:"string",isFilePath:!0,description:e.Diagnostics.Redirect_output_structure_to_the_directory,paramType:e.Diagnostics.DIRECTORY},{name:"preserveConstEnums",type:"boolean",description:e.Diagnostics.Do_not_erase_const_enum_declarations_in_generated_code},{name:"pretty",description:e.Diagnostics.Stylize_errors_and_messages_using_color_and_context_experimental,type:"boolean"},{name:"project",shortName:"p",type:"string",isFilePath:!0,description:e.Diagnostics.Compile_the_project_in_the_given_directory,paramType:e.Diagnostics.DIRECTORY},{name:"removeComments",type:"boolean",description:e.Diagnostics.Do_not_emit_comments_to_output},{name:"rootDir",type:"string",isFilePath:!0,paramType:e.Diagnostics.LOCATION,description:e.Diagnostics.Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir},{name:"isolatedModules",type:"boolean"},{name:"sourceMap",type:"boolean",description:e.Diagnostics.Generates_corresponding_map_file},{name:"sourceRoot",type:"string",isFilePath:!0,description:e.Diagnostics.Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations,paramType:e.Diagnostics.LOCATION},{name:"suppressExcessPropertyErrors",type:"boolean",description:e.Diagnostics.Suppress_excess_property_checks_for_object_literals,experimental:!0},{name:"suppressImplicitAnyIndexErrors",type:"boolean",description:e.Diagnostics.Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures},{name:"stripInternal",type:"boolean",description:e.Diagnostics.Do_not_emit_declarations_for_code_that_has_an_internal_annotation,experimental:!0},{name:"target",shortName:"t",type:e.createMap({es3:0,es5:1,es6:2,es2015:2}),description:e.Diagnostics.Specify_ECMAScript_target_version_Colon_ES3_default_ES5_or_ES2015,paramType:e.Diagnostics.VERSION},{name:"version",shortName:"v",type:"boolean",description:e.Diagnostics.Print_the_compiler_s_version},{name:"watch",shortName:"w",type:"boolean",description:e.Diagnostics.Watch_input_files},{name:"experimentalDecorators",type:"boolean",description:e.Diagnostics.Enables_experimental_support_for_ES7_decorators},{name:"emitDecoratorMetadata",type:"boolean",experimental:!0,description:e.Diagnostics.Enables_experimental_support_for_emitting_type_metadata_for_decorators},{name:"moduleResolution",type:e.createMap({node:e.ModuleResolutionKind.NodeJs,classic:e.ModuleResolutionKind.Classic}),description:e.Diagnostics.Specify_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6},{name:"allowUnusedLabels",type:"boolean",description:e.Diagnostics.Do_not_report_errors_on_unused_labels},{name:"noImplicitReturns",type:"boolean",description:e.Diagnostics.Report_error_when_not_all_code_paths_in_function_return_a_value},{name:"noFallthroughCasesInSwitch",type:"boolean",description:e.Diagnostics.Report_errors_for_fallthrough_cases_in_switch_statement},{name:"allowUnreachableCode",type:"boolean",description:e.Diagnostics.Do_not_report_errors_on_unreachable_code},{name:"forceConsistentCasingInFileNames",type:"boolean",description:e.Diagnostics.Disallow_inconsistently_cased_references_to_the_same_file},{name:"baseUrl",type:"string",isFilePath:!0,description:e.Diagnostics.Base_directory_to_resolve_non_absolute_module_names},{name:"paths",type:"object",isTSConfigOnly:!0},{name:"rootDirs",type:"list",isTSConfigOnly:!0,element:{name:"rootDirs",type:"string",isFilePath:!0}},{name:"typeRoots",type:"list",element:{name:"typeRoots",type:"string",isFilePath:!0}},{name:"types",type:"list",element:{name:"types",type:"string"},description:e.Diagnostics.Type_declaration_files_to_be_included_in_compilation},{name:"traceResolution",type:"boolean",description:e.Diagnostics.Enable_tracing_of_the_name_resolution_process},{name:"allowJs",type:"boolean",description:e.Diagnostics.Allow_javascript_files_to_be_compiled},{name:"allowSyntheticDefaultImports",type:"boolean",description:e.Diagnostics.Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typechecking},{name:"noImplicitUseStrict",type:"boolean",description:e.Diagnostics.Do_not_emit_use_strict_directives_in_module_output},{name:"maxNodeModuleJsDepth",type:"number",description:e.Diagnostics.The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files},{name:"listEmittedFiles",type:"boolean"},{name:"lib",type:"list",element:{name:"lib",type:e.createMap({es5:"lib.es5.d.ts",es6:"lib.es2015.d.ts",es2015:"lib.es2015.d.ts",es7:"lib.es2016.d.ts",es2016:"lib.es2016.d.ts",es2017:"lib.es2017.d.ts",dom:"lib.dom.d.ts",webworker:"lib.webworker.d.ts",scripthost:"lib.scripthost.d.ts","es2015.core":"lib.es2015.core.d.ts","es2015.collection":"lib.es2015.collection.d.ts","es2015.generator":"lib.es2015.generator.d.ts","es2015.iterable":"lib.es2015.iterable.d.ts","es2015.promise":"lib.es2015.promise.d.ts","es2015.proxy":"lib.es2015.proxy.d.ts","es2015.reflect":"lib.es2015.reflect.d.ts","es2015.symbol":"lib.es2015.symbol.d.ts","es2015.symbol.wellknown":"lib.es2015.symbol.wellknown.d.ts","es2016.array.include":"lib.es2016.array.include.d.ts","es2017.object":"lib.es2017.object.d.ts","es2017.sharedmemory":"lib.es2017.sharedmemory.d.ts"})},description:e.Diagnostics.Specify_library_files_to_be_included_in_the_compilation_Colon},{name:"disableSizeLimit",type:"boolean"},{name:"strictNullChecks",type:"boolean",description:e.Diagnostics.Enable_strict_null_checks}],e.typingOptionDeclarations=[{name:"enableAutoDiscovery",type:"boolean"},{name:"include",type:"list",element:{name:"include",type:"string"}},{name:"exclude",type:"list",element:{name:"exclude",type:"string"}}],e.defaultInitCompilerOptions={module:e.ModuleKind.CommonJS,target:1,noImplicitAny:!1,sourceMap:!1}
var w
e.getOptionNameMap=t,e.createCompilerDiagnosticForInvalidCustomType=n,e.parseCustomTypeOption=r,e.parseListTypeOption=a,e.parseCommandLine=i,e.readConfigFile=o,e.parseConfigFileTextToJson=s,e.generateTSConfig=c,e.parseJsonConfigFileContent=u,e.convertCompilerOptionsFromJson=l,e.convertTypingOptionsFromJson=d
var A=/(^|\/)\*\*\/?$/,N=/(^|\/)\*\*\/(.*\/)?\*\*($|\/)/,P=/(^|\/)\*\*\/(.*\/)?\.\.($|\/)/,O=/\/[^\/]*?[*?][^\/]*\//,R=/^[^*?]*(?=\/[^\/]*[*?])/}(ts||(ts={}))
var ts
!function(e){var t
!function(t){function n(t){function n(t,n,r,a){if(t&&n&&r){var i={textSpan:e.createTextSpanFromBounds(n.pos,r.end),hintSpan:e.createTextSpanFromBounds(t.getStart(),t.end),bannerText:_,autoCollapse:a}
c.push(i)}}function r(t,n){if(t){var r={textSpan:e.createTextSpanFromBounds(t.pos,t.end),hintSpan:e.createTextSpanFromBounds(t.pos,t.end),bannerText:_,autoCollapse:n}
c.push(r)}}function a(n){var a=e.getLeadingCommentRangesOfNode(n,t)
if(a){for(var o=-1,s=-1,c=!0,_=0,u=0,l=a;u<l.length;u++){var d=l[u]
2===d.kind?(c&&(o=d.pos),c=!1,s=d.end,_++):3===d.kind&&(i(_,o,s),r(d,!1),_=0,s=-1,c=!0)}i(_,o,s)}}function i(e,t,n){if(e>1){var a={pos:t,end:n,kind:2}
r(a,!1)}}function o(t){return e.isFunctionBlock(t)&&180!==t.parent.kind}function s(r){if(!(u>l)){switch(e.isDeclaration(r)&&a(r),r.kind){case 199:if(!e.isFunctionBlock(r)){var i=r.parent,d=e.findChildOfKind(r,15,t),p=e.findChildOfKind(r,16,t)
if(204===i.kind||207===i.kind||208===i.kind||206===i.kind||203===i.kind||205===i.kind||212===i.kind||252===i.kind){n(i,d,p,o(r))
break}if(216===i.kind){var f=i
if(f.tryBlock===r){n(i,d,p,o(r))
break}if(f.finallyBlock===r){var g=e.findChildOfKind(f,85,t)
if(g){n(g,d,p,o(r))
break}}}var m=e.createTextSpanFromBounds(r.getStart(),r.end)
c.push({textSpan:m,hintSpan:m,bannerText:_,autoCollapse:o(r)})
break}case 226:var d=e.findChildOfKind(r,15,t),p=e.findChildOfKind(r,16,t)
n(r.parent,d,p,o(r))
break
case 221:case 222:case 224:case 171:case 227:var d=e.findChildOfKind(r,15,t),p=e.findChildOfKind(r,16,t)
n(r,d,p,o(r))
break
case 170:var y=e.findChildOfKind(r,19,t),h=e.findChildOfKind(r,20,t)
n(r,y,h,o(r))}u++,e.forEachChild(r,s),u--}}var c=[],_="...",u=0,l=20
return s(t),c}t.collectElements=n}(t=e.OutliningElementsCollector||(e.OutliningElementsCollector={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(t){function n(t,n,r,a,i){function o(t){e.Debug.assert(t.length>0)
for(var n=0,r=t;n<r.length;n++){var a=r[n]
if(!a.isCaseSensitive)return!1}return!0}function s(e){return!e||69!==e.kind&&9!==e.kind&&8!==e.kind?void 0:e.text}function c(e,t){if(e&&e.name){var n=s(e.name)
if(void 0===n)return 140===e.name.kind?_(e.name.expression,t,!0):!1
t.unshift(n)}return!0}function _(e,t,n){var r=s(e)
if(void 0!==r)return n&&t.unshift(r),!0
if(172===e.kind){var a=e
return n&&t.unshift(a.name.text),_(a.expression,t,!0)}return!1}function u(t){var n=[]
if(140!==t.name.kind||_(t.name.expression,n,!1)){for(t=e.getContainerNode(t);t;){if(!c(t,n))return
t=e.getContainerNode(t)}return n}}function l(t){e.Debug.assert(t.length>0)
for(var n=e.PatternMatchKind.camelCase,r=0,a=t;r<a.length;r++){var i=a[r],o=i.kind
n>o&&(n=o)}return n}function d(e,t){return e.matchKind-t.matchKind||e.name.localeCompare(t.name,void 0,m)||e.name.localeCompare(t.name)}function p(t){var n=t.declaration,r=e.getContainerNode(n)
return{name:t.name,kind:e.getNodeKind(n),kindModifiers:e.getNodeModifiers(n),matchKind:e.PatternMatchKind[t.matchKind],isCaseSensitive:t.isCaseSensitive,fileName:t.fileName,textSpan:e.createTextSpanFromBounds(n.getStart(),n.getEnd()),containerName:r&&r.name?r.name.text:"",containerKind:r&&r.name?e.getNodeKind(r):""}}var f=e.createPatternMatcher(a),g=[],m={sensitivity:"base"}
e.forEach(t.getSourceFiles(),function(e){r.throwIfCancellationRequested()
var t=e.getNamedDeclarations()
for(var n in t){var a=t[n]
if(a){var i=f.getMatchesForLastSegmentOfPattern(n)
if(!i)continue
for(var s=0,c=a;s<c.length;s++){var _=c[s]
if(f.patternContainsDots){var d=u(_)
if(!d)return
if(i=f.getMatches(d,n),!i)continue}var p=e.fileName,m=l(i)
g.push({name:n,fileName:p,matchKind:m,isCaseSensitive:o(i),declaration:_})}}}}),g=e.filter(g,function(e){var t=e.declaration
if(231===t.kind||234===t.kind||229===t.kind){var r=n.getSymbolAtLocation(t.name),a=n.getAliasedSymbol(r)
return r.name!==a.name}return!0}),g.sort(d),void 0!==i&&(g=g.slice(0,i))
var y=e.map(g,p)
return y}t.getNavigateToItems=n}(t=e.NavigateTo||(e.NavigateTo={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(t){function n(t){E=t
var n=e.map(v(o(t)),k)
return E=void 0,n}function r(e){return e.getText(E)}function a(e){return e.node.kind}function i(e,t){e.children?e.children.push(t):e.children=[t]}function o(t){e.Debug.assert(!A.length)
var n={node:t,additionalNodes:void 0,parent:void 0,children:void 0,indent:0}
w=n
for(var r=0,a=t.statements;r<a.length;r++){var i=a[r]
d(i)}return u(),e.Debug.assert(!w&&!A.length),n}function s(e){i(w,c(e))}function c(e){return{node:e,additionalNodes:void 0,parent:w,children:void 0,indent:w.indent+1}}function _(e){var t=c(e)
i(w,t),A.push(w),w=t}function u(){w.children&&(p(w.children),f(w.children)),w=A.pop()}function l(e,t){_(e),d(t),u()}function d(t){if(t&&!e.isToken(t))switch(t.kind){case 148:var n=t
l(n,n.body)
for(var r=0,a=n.parameters;r<a.length;r++){var i=a[r]
e.isParameterPropertyDeclaration(i)&&s(i)}break
case 147:case 149:case 150:case 146:e.hasDynamicName(t)||l(t,t.body)
break
case 145:case 144:e.hasDynamicName(t)||s(t)
break
case 231:var o=t
o.name&&s(o)
var c=o.namedBindings
if(c)if(232===c.kind)s(c)
else for(var p=0,f=c.elements;p<f.length;p++){var g=f[p]
s(g)}break
case 169:case 218:var m=t,y=m.name
e.isBindingPattern(y)?d(y):m.initializer&&T(m.initializer)?d(m.initializer):l(m,m.initializer)
break
case 180:case 220:case 179:l(t,t.body)
break
case 224:_(t)
for(var h=0,v=t.members;h<v.length;h++){var k=v[h]
D(k)||s(k)}u()
break
case 221:case 192:case 222:_(t)
for(var b=0,C=t.members;b<C.length;b++){var k=C[b]
d(k)}u()
break
case 225:l(t,x(t).body)
break
case 238:case 229:case 153:case 151:case 152:case 223:s(t)
break
default:if(t.jsDocComments)for(var S=0,E=t.jsDocComments;S<E.length;S++)for(var w=E[S],A=0,N=w.tags;A<N.length;A++){var P=N[A]
279===P.kind&&s(P)}e.forEachChild(t,d)}}function p(t){function n(e,t){function n(e,t){return e.body.kind!==t.body.kind?!1:225!==e.body.kind?!0:n(e.body,t.body)}return e.kind===t.kind&&(225!==e.kind||n(e,t))}function a(t,n){t.additionalNodes=t.additionalNodes||[],t.additionalNodes.push(n.node),n.additionalNodes&&(r=t.additionalNodes).push.apply(r,n.additionalNodes),t.children=e.concatenate(t.children,n.children),t.children&&(p(t.children),f(t.children))
var r}var i=e.createMap()
e.filterMutate(t,function(e){function t(e,t){return n(e.node,t.node)?(a(e,t),!0):!1}var o=e.node,s=o.name&&r(o.name)
if(!s)return!0
var c=i[s]
if(!c)return i[s]=e,!0
if(c instanceof Array){for(var _=0,u=c;_<u.length;_++){var l=u[_]
if(t(l,e))return!1}return c.push(e),!0}var l=c
return t(l,e)?!1:(i[s]=[l,e],!0)})}function f(e){e.sort(g)}function g(e,t){var n=m(e.node),r=m(t.node)
if(n&&r){var i=O(n,r)
return 0!==i?i:a(e)-a(t)}return n?1:r?-1:a(e)-a(t)}function m(t){if(225===t.kind)return b(t)
var n=t
if(n.name)return e.getPropertyNameForPropertyNameNode(n.name)
switch(t.kind){case 179:case 180:case 192:return S(t)
case 279:return h(t)
default:return}}function y(t){if(225===t.kind)return b(t)
var n=t.name
if(n){var a=r(n)
if(a.length>0)return a}switch(t.kind){case 256:var i=t
return e.isExternalModule(i)?'"'+e.escapeString(e.getBaseFileName(e.removeFileExtension(e.normalizePath(i.fileName))))+'"':"<global>"
case 180:case 220:case 179:case 221:case 192:return 512&t.flags?"default":S(t)
case 148:return"constructor"
case 152:return"new()"
case 151:return"()"
case 153:return"[]"
case 279:return h(t)
default:return"<unknown>"}}function h(e){if(e.name)return e.name.text
var t=e.parent&&e.parent.parent
if(t&&200===t.kind&&t.declarationList.declarations.length>0){var n=t.declarationList.declarations[0].name
if(69===n.kind)return n.text}return"<typedef>"}function v(t){function n(e){if(r(e)&&(i.push(e),e.children))for(var t=0,a=e.children;t<a.length;t++){var o=a[t]
n(o)}}function r(t){function n(e){if(!e.node.body)return!1
switch(a(e.parent)){case 226:case 256:case 147:case 148:return!0
default:return r(e)}}function r(t){return e.forEach(t.children,function(e){var t=a(e)
return 218!==t&&169!==t})}switch(a(t)){case 221:case 192:case 224:case 222:case 225:case 256:case 223:case 279:return!0
case 148:case 147:case 149:case 150:return r(t)
case 180:case 220:case 179:return n(t)
default:return!1}}var i=[]
return n(t),i}function k(t){function n(t){return{text:y(t.node),kind:e.getNodeKind(t.node),kindModifiers:e.getNodeModifiers(t.node),spans:r(t),childItems:R,indent:0,bolded:!1,grayed:!1}}function r(e){var t=[C(e.node)]
if(e.additionalNodes)for(var n=0,r=e.additionalNodes;n<r.length;n++){var a=r[n]
t.push(C(a))}return t}return{text:y(t.node),kind:e.getNodeKind(t.node),kindModifiers:e.getNodeModifiers(t.node),spans:r(t),childItems:e.map(t.children,n)||R,indent:t.indent,bolded:!1,grayed:!1}}function b(t){if(e.isAmbientModule(t))return e.getTextOfNode(t.name)
var n=[]
for(n.push(t.name.text);t.body&&225===t.body.kind;)t=t.body,n.push(t.name.text)
return n.join(".")}function x(e){return 225===e.body.kind?x(e.body):e}function D(e){return!e.name||140===e.name.kind}function C(t){return 256===t.kind?e.createTextSpanFromBounds(t.getFullStart(),t.getEnd()):e.createTextSpanFromBounds(t.getStart(E),t.getEnd())}function S(t){return t.name&&e.getFullWidth(t.name)>0?e.declarationNameToString(t.name):218===t.parent.kind?e.declarationNameToString(t.parent.name):187===t.parent.kind&&56===t.parent.operatorToken.kind?r(t.parent.left):253===t.parent.kind&&t.parent.name?r(t.parent.name):512&t.flags?"default":e.isClassLike(t)?"<class>":"<function>"}function T(e){return 179===e.kind||180===e.kind||192===e.kind}t.getNavigationBarItems=n
var E,w,A=[],N="undefined"==typeof Intl?void 0:new Intl.Collator,P=N&&N.compare("a","B")<0,O=P?N.compare:function(e,t){for(var n=0;n<Math.min(e.length,t.length);n++){var r=e.charAt(n),a=t.charAt(n)
if('"'===r&&"'"===a)return 1
if("'"===r&&'"'===a)return-1
var i=r.toLocaleLowerCase().localeCompare(a.toLocaleLowerCase())
if(0!==i)return i}return e.length-t.length},R=[]}(t=e.NavigationBar||(e.NavigationBar={}))}(ts||(ts={}))
var ts
!function(e){function t(e,t,n,r){return{kind:e,punctuationStripped:t,isCaseSensitive:n,camelCaseWeight:r}}function n(n){function o(e){return k||!e}function c(t){return o(t)?void 0:f(t,e.lastOrUndefined(v))}function u(t,n){if(!o(n)){var r=f(n,e.lastOrUndefined(v))
if(r&&(t=t||[],!(v.length-1>t.length))){for(var a=r,i=v.length-2,s=t.length-1;i>=0;i-=1,s-=1){var c=v[i],_=t[s],u=f(_,c)
if(!u)return
e.addRange(a,u)}return a}}}function l(e){return e in h||(h[e]=g(e)),h[e]}function d(n,r,a){var o=s(n,r.textLowerCase)
if(0===o)return r.text.length===n.length?t(b.exact,a,n===r.text):t(b.prefix,a,e.startsWith(n,r.text))
var c=r.isLowerCase
if(c){if(o>0)for(var _=l(n),u=0,d=_;u<d.length;u++){var p=d[u]
if(m(n,p,r.text,!0))return t(b.substring,a,m(n,p,r.text,!1))}}else if(n.indexOf(r.text)>0)return t(b.substring,a,!0)
if(!c&&r.characterSpans.length>0){var f=l(n),g=y(n,f,r,!1)
if(void 0!==g)return t(b.camelCase,a,!0,g)
if(g=y(n,f,r,!0),void 0!==g)return t(b.camelCase,a,!1,g)}return c&&r.text.length<n.length&&o>0&&i(n.charCodeAt(o))?t(b.substring,a,!1):void 0}function p(e){for(var t=0;t<e.length;t++){var n=e.charCodeAt(t)
if(32===n||42===n)return!0}return!1}function f(e,t){if(!p(t.totalTextChunk.text)){var n=d(e,t.totalTextChunk,!1)
if(n)return[n]}for(var r=t.subWordTextChunks,a=void 0,i=0,o=r;i<o.length;i++){var s=o[i],c=d(e,s,!0)
if(!c)return
a=a||[],a.push(c)}return a}function m(e,t,n,r,a){var i=a?a.start:0,o=a?a.length:n.length
if(o>t.length)return!1
if(r)for(var s=0;o>s;s++){var c=n.charCodeAt(i+s),u=e.charCodeAt(t.start+s)
if(_(c)!==_(u))return!1}else for(var s=0;o>s;s++){var c=n.charCodeAt(i+s),u=e.charCodeAt(t.start+s)
if(c!==u)return!1}return!0}function y(t,n,r,a){for(var o=r.characterSpans,s=0,c=0,_=void 0,u=void 0;;){if(c===o.length){var l=0
return u&&(l+=1),0===_&&(l+=2),l}if(s===n.length)return
for(var d=n[s],p=!1;c<o.length;c++){var f=o[c]
if(p&&(!i(r.text.charCodeAt(o[c-1].start))||!i(r.text.charCodeAt(o[c].start))))break
if(!m(t,d,r.text,a,f))break
p=!0,_=void 0===_?s:_,u=void 0===u?!0:u,d=e.createTextSpan(d.start+f.length,d.length-f.length)}p||void 0===u||(u=!1),s++}}var h=e.createMap()
n=n.trim()
var v=n.split(".").map(function(e){return r(e.trim())}),k=0===v.length||e.forEach(v,a)
return{getMatches:u,getMatchesForLastSegmentOfPattern:c,patternContainsDots:v.length>1}}function r(e){return{totalTextChunk:p(e),subWordTextChunks:d(e)}}function a(e){return 0===e.subWordTextChunks.length}function i(t){if(t>=65&&90>=t)return!0
if(127>t||!e.isUnicodeIdentifierStart(t,2))return!1
var n=String.fromCharCode(t)
return n===n.toUpperCase()}function o(t){if(t>=97&&122>=t)return!0
if(127>t||!e.isUnicodeIdentifierStart(t,2))return!1
var n=String.fromCharCode(t)
return n===n.toLowerCase()}function s(e,t){for(var n=0,r=e.length-t.length;r>=n;n++)if(c(e,t,n))return n
return-1}function c(e,t,n){for(var r=0,a=t.length;a>r;r++){var i=_(e.charCodeAt(r+n)),o=t.charCodeAt(r)
if(i!==o)return!1}return!0}function _(e){return e>=65&&90>=e?97+(e-65):127>e?e:String.fromCharCode(e).toLowerCase().charCodeAt(0)}function u(e){return e>=48&&57>=e}function l(e){return i(e)||o(e)||u(e)||95===e||36===e}function d(e){for(var t=[],n=0,r=0,a=0;a<e.length;a++){var i=e.charCodeAt(a)
l(i)?(0===r&&(n=a),r++):r>0&&(t.push(p(e.substr(n,r))),r=0)}return r>0&&t.push(p(e.substr(n,r))),t}function p(e){var t=e.toLowerCase()
return{text:e,textLowerCase:t,isLowerCase:e===t,characterSpans:f(e)}}function f(e){return m(e,!1)}function g(e){return m(e,!0)}function m(t,n){for(var r=[],a=0,i=1,o=t.length;o>i;i++){var s=u(t.charCodeAt(i-1)),c=u(t.charCodeAt(i)),_=k(t,n,i),l=v(t,n,i,a);(y(t.charCodeAt(i-1))||y(t.charCodeAt(i))||s!==c||_||l)&&(h(t,a,i)||r.push(e.createTextSpan(a,i-a)),a=i)}return h(t,a,t.length)||r.push(e.createTextSpan(a,t.length-a)),r}function y(e){switch(e){case 33:case 34:case 35:case 37:case 38:case 39:case 40:case 41:case 42:case 44:case 45:case 46:case 47:case 58:case 59:case 63:case 64:case 91:case 92:case 93:case 95:case 123:case 125:return!0}return!1}function h(e,t,n){for(var r=t;n>r;r++){var a=e.charCodeAt(r)
if(!y(a)||95===a||36===a)return!1}return!0}function v(e,t,n,r){if(t&&n!==r&&n+1<e.length){var a=i(e.charCodeAt(n)),s=o(e.charCodeAt(n+1))
if(a&&s){for(var c=r;n>c;c++)if(!i(e.charCodeAt(c)))return!1
return!0}}return!1}function k(e,t,n){var r=i(e.charCodeAt(n-1)),a=i(e.charCodeAt(n)),o=t?a&&!r:a
return o}!function(e){e[e.exact=0]="exact",e[e.prefix=1]="prefix",e[e.substring=2]="substring",e[e.camelCase=3]="camelCase"}(e.PatternMatchKind||(e.PatternMatchKind={}))
var b=e.PatternMatchKind
e.createPatternMatcher=n,e.breakIntoCharacterSpans=f,e.breakIntoWordSpans=g}(ts||(ts={}))
var ts
!function(e){var t
!function(t){function n(t,n,a,i){var o=t.getTypeChecker(),s=e.findTokenOnLeftOfPosition(n,a)
if(s){var c=l(s,a,n)
if(i.throwIfCancellationRequested(),c){var _=c.invocation,u=[],d=o.getResolvedSignature(_,u)
if(i.throwIfCancellationRequested(),u.length)return f(u,d,c,o)
if(e.isSourceFileJavaScript(n))return r(c,t)}}}function r(e,t){if(174===e.invocation.kind){var n=e.invocation,r=n.expression,a=69===r.kind?r:172===r.kind?r.name:void 0
if(a&&a.text)for(var i=t.getTypeChecker(),o=0,s=t.getSourceFiles();o<s.length;o++){var c=s[o],_=c.getNamedDeclarations(),u=_[a.text]
if(u)for(var l=0,d=u;l<d.length;l++){var p=d[l],g=p.symbol
if(g){var m=i.getTypeOfSymbolAtLocation(g,p)
if(m){var y=m.getCallSignatures()
if(y&&y.length)return f(y,y[0],e,i)}}}}}}function a(t,n,r){if(174!==t.parent.kind&&175!==t.parent.kind)if(11===t.kind&&176===t.parent.kind){if(e.isInsideTemplateLiteral(t,n))return c(t.parent,0,r)}else{if(12===t.kind&&176===t.parent.parent.kind){var a=t.parent,u=a.parent
e.Debug.assert(189===a.kind)
var l=e.isInsideTemplateLiteral(t,n)?0:1
return c(u,l,r)}if(197===t.parent.kind&&176===t.parent.parent.parent.kind){var p=t.parent,a=p.parent,u=a.parent
if(e.Debug.assert(189===a.kind),14===t.kind&&!e.isInsideTemplateLiteral(t,n))return
var f=a.templateSpans.indexOf(p),l=s(f,t,n)
return c(u,l,r)}}else{var g=t.parent
if(25===t.kind||17===t.kind){var m=d(g,t,r),y=g.typeArguments&&g.typeArguments.pos===m.pos
return e.Debug.assert(void 0!==m),{kind:y?0:1,invocation:g,argumentsSpan:_(m,r),argumentIndex:0,argumentCount:o(m)}}var h=e.findListItemInfo(t)
if(h){var m=h.list,y=g.typeArguments&&g.typeArguments.pos===m.pos,l=i(m,t),v=o(m)
return e.Debug.assert(0===l||v>l,"argumentCount < argumentIndex, "+v+" < "+l),{kind:y?0:1,invocation:g,argumentsSpan:_(m,r),argumentIndex:l,argumentCount:v}}}}function i(e,t){for(var n=0,r=e.getChildren(),a=0,i=r;a<i.length;a++){var o=i[a]
if(o===t)break
24!==o.kind&&n++}return n}function o(t){var n=t.getChildren(),r=e.countWhere(n,function(e){return 24!==e.kind})
return n.length>0&&24===e.lastOrUndefined(n).kind&&r++,r}function s(t,n,r){return e.Debug.assert(r>=n.getStart(),"Assumed 'position' could not occur before node."),e.isTemplateLiteralKind(n.kind)?e.isInsideTemplateLiteral(n,r)?0:t+2:t+1}function c(t,n,r){var a=11===t.template.kind?1:t.template.templateSpans.length+1
return e.Debug.assert(0===n||a>n,"argumentCount < argumentIndex, "+a+" < "+n),{kind:2,invocation:t,argumentsSpan:u(t,r),argumentIndex:n,argumentCount:a}}function _(t,n){var r=t.getFullStart(),a=e.skipTrivia(n.text,t.getEnd(),!1)
return e.createTextSpan(r,a-r)}function u(t,n){var r=t.template,a=r.getStart(),i=r.getEnd()
if(189===r.kind){var o=e.lastOrUndefined(r.templateSpans)
0===o.literal.getFullWidth()&&(i=e.skipTrivia(n.text,i,!1))}return e.createTextSpan(a,i-a)}function l(t,n,r){for(var i=t;256!==i.kind;i=i.parent){if(e.isFunctionBlock(i))return;(i.pos<i.parent.pos||i.end>i.parent.end)&&e.Debug.fail("Node of kind "+i.kind+" is not a subspan of its parent of kind "+i.parent.kind)
var o=a(i,n,r)
if(o)return o}}function d(t,n,r){var a=t.getChildren(r),i=a.indexOf(n)
return e.Debug.assert(i>=0&&a.length>i+1),a[i+1]}function p(e,t){for(var n=-1,r=-1,a=0;a<e.length;a++){var i=e[a]
if(i.hasRestParameter||i.parameters.length>=t)return a
i.parameters.length>r&&(r=i.parameters.length,n=a)}return n}function f(t,n,r,a){function i(t){var n=e.mapToDisplayParts(function(e){return a.getSymbolDisplayBuilder().buildParameterDisplay(t,e,_)})
return{name:t.name,documentation:t.getDocumentationComment(),displayParts:n,isOptional:a.isOptionalParameter(t.valueDeclaration)}}function o(t){var n=e.mapToDisplayParts(function(e){return a.getSymbolDisplayBuilder().buildTypeParameterDisplay(t,e,_)})
return{name:t.symbol.name,documentation:g,displayParts:n,isOptional:!1}}var s=r.argumentsSpan,c=0===r.kind,_=r.invocation,u=e.getInvokedExpression(_),l=a.getSymbolAtLocation(u),d=l&&e.symbolToDisplayParts(a,l,void 0,void 0),f=e.map(t,function(t){var n,r=[],s=[]
if(d&&e.addRange(r,d),c){r.push(e.punctuationPart(25))
var u=t.typeParameters
n=u&&u.length>0?e.map(u,o):g,s.push(e.punctuationPart(27))
var l=e.mapToDisplayParts(function(e){return a.getSymbolDisplayBuilder().buildDisplayForParametersAndDelimiters(t.thisParameter,t.parameters,e,_)})
e.addRange(s,l)}else{var p=e.mapToDisplayParts(function(e){return a.getSymbolDisplayBuilder().buildDisplayForTypeParametersAndDelimiters(t.typeParameters,e,_)})
e.addRange(r,p),r.push(e.punctuationPart(17))
var f=t.parameters
n=f.length>0?e.map(f,i):g,s.push(e.punctuationPart(18))}var m=e.mapToDisplayParts(function(e){return a.getSymbolDisplayBuilder().buildReturnTypeDisplay(t,e,_)})
return e.addRange(s,m),{isVariadic:t.hasRestParameter,prefixDisplayParts:r,suffixDisplayParts:s,separatorDisplayParts:[e.punctuationPart(24),e.spacePart()],parameters:n,documentation:t.getDocumentationComment()}}),m=r.argumentIndex,y=r.argumentCount,h=t.indexOf(n)
return 0>h&&(h=p(t,y)),e.Debug.assert(0===m||y>m,"argumentCount < argumentIndex, "+y+" < "+m),{items:f,applicableSpan:s,selectedItemIndex:h,argumentIndex:m,argumentCount:y}}var g=[]
!function(e){e[e.TypeArguments=0]="TypeArguments",e[e.CallArguments=1]="CallArguments",e[e.TaggedTemplateArguments=2]="TaggedTemplateArguments"}(t.ArgumentListKind||(t.ArgumentListKind={}))
t.ArgumentListKind
t.getSignatureHelpItems=n,t.getContainingArgumentInfo=l}(t=e.SignatureHelp||(e.SignatureHelp={}))}(ts||(ts={}))
var ts
!function(e){function t(e,t){var n=t.getLineStarts(),r=t.getLineAndCharacterOfPosition(e).line
return n[r]}function n(e,t){return r(e.pos,e.end,t)}function r(e,t,n){return e<=n.pos&&t>=n.end}function a(e,t,n){return e.pos<=t&&e.end>=n}function i(e,t,n){return o(e.pos,e.end,t,n)}function o(e,t,n,r){var a=Math.max(e,n),i=Math.min(t,r)
return i>a}function s(e,t,n){return e.end>t||!c(e,n)}function c(t,n){if(e.nodeIsMissing(t))return!1
switch(t.kind){case 221:case 222:case 224:case 171:case 167:case 159:case 199:case 226:case 227:case 233:case 237:return _(t,16,n)
case 252:return c(t.block,n)
case 175:if(!t.arguments)return!0
case 174:case 178:case 164:return _(t,18,n)
case 156:case 157:return c(t.type,n)
case 148:case 149:case 150:case 220:case 179:case 147:case 146:case 152:case 151:case 180:return t.body?c(t.body,n):t.type?c(t.type,n):l(t,18,n)
case 225:return t.body&&c(t.body,n)
case 203:return t.elseStatement?c(t.elseStatement,n):c(t.thenStatement,n)
case 202:return c(t.expression,n)||l(t,23)
case 170:case 168:case 173:case 140:case 161:return _(t,20,n)
case 153:return t.type?c(t.type,n):l(t,20,n)
case 249:case 250:return!1
case 206:case 207:case 208:case 205:return c(t.statement,n)
case 204:var r=d(t,104,n)
return r?_(t,18,n):c(t.statement,n)
case 158:return c(t.exprName,n)
case 182:case 181:case 183:case 190:case 191:var a=t
return c(a.expression,n)
case 176:return c(t.template,n)
case 189:var i=e.lastOrUndefined(t.templateSpans)
return c(i,n)
case 197:return e.nodeIsPresent(t.literal)
case 236:case 230:return e.nodeIsPresent(t.moduleSpecifier)
case 185:return c(t.operand,n)
case 187:return c(t.right,n)
case 188:return c(t.whenFalse,n)
default:return!0}}function _(t,n,r){var a=t.getChildren(r)
if(a.length){var i=e.lastOrUndefined(a)
if(i.kind===n)return!0
if(23===i.kind&&1!==a.length)return a[a.length-2].kind===n}return!1}function u(t){var n=p(t)
if(n){var r=n.getChildren(),a=e.indexOf(r,t)
return{listItemIndex:a,list:n}}}function l(e,t,n){return!!d(e,t,n)}function d(t,n,r){return e.forEach(t.getChildren(r),function(e){return e.kind===n&&e})}function p(t){var n=e.forEach(t.parent.getChildren(),function(e){return 286===e.kind&&e.pos<=t.pos&&e.end>=t.end?e:void 0})
return e.Debug.assert(!n||e.contains(n.getChildren(),t)),n}function f(e,t,n){return void 0===n&&(n=!1),m(e,t,function(e){return R(e.kind)},n)}function g(e,t,n){return void 0===n&&(n=!1),m(e,t,function(e){return F(e.kind)},n)}function m(e,t,n,r){return void 0===r&&(r=!1),h(e,t,!1,n,r)}function y(e,t,n){return void 0===n&&(n=!1),h(e,t,!0,void 0,n)}function h(t,n,r,a,i){void 0===i&&(i=!1)
var o=t
e:for(;;){if(O(o))return o
if(i)for(var s=e.filter(o.getChildren(),e.isJSDocNode),c=0,_=s;c<_.length;c++){var u=_[c],l=r?u.getFullStart():u.getStart(t,i)
if(n>=l){var d=u.getEnd()
if(d>n||n===d&&1===u.kind){o=u
continue e}if(a&&d===n){var p=b(n,t,u)
if(p&&a(p))return p}}}for(var f=0,g=o.getChildCount(t);g>f;f++){var m=o.getChildAt(f)
if(!e.isJSDocNode(m)){var l=r?m.getFullStart():m.getStart(t,i)
if(n>=l){var d=m.getEnd()
if(d>n||n===d&&1===m.kind){o=m
continue e}if(a&&d===n){var p=b(n,t,m)
if(p&&a(p))return p}}}}return o}}function v(e,t){var n=y(e,t)
return O(n)&&t>n.getStart(e)&&t<n.getEnd()?n:b(t,e)}function k(e,t){function n(t){if(O(t)&&t.pos===e.end)return t
for(var r=t.getChildren(),a=0,i=r;a<i.length;a++){var o=i[a],s=o.pos<=e.pos&&o.end>e.end||o.pos===e.end
if(s&&A(o))return n(o)}}return n(t)}function b(t,n,r){function a(e){if(O(e)||244===e.kind)return e
var t=e.getChildren(),n=o(t,t.length)
return n&&a(n)}function i(s){if(O(s)||244===s.kind)return s
for(var c=s.getChildren(),_=0,u=c.length;u>_;_++){var l=c[_]
if(t<l.end&&(A(l)||244===l.kind)){var d=l.getStart(n),p=d>=t||244===l.kind&&d===l.end
if(p){var f=o(c,_)
return f&&a(f)}return i(l)}}if(e.Debug.assert(void 0!==r||256===s.kind),c.length){var f=o(c,c.length)
return f&&a(f)}}function o(e,t){for(var n=t-1;n>=0;n--)if(A(e[n]))return e[n]}return i(r||n)}function x(e,t){var n=b(t,e)
if(n&&9===n.kind){var r=n.getStart(),a=n.getEnd()
if(t>r&&a>t)return!0
if(t===a)return!!n.isUnterminated}return!1}function D(e,t){return T(e,t,void 0)}function C(e,t){var n=y(e,t)
return n?244===n.kind?!0:25===n.kind&&244===n.parent.kind?!0:25===n.kind&&248===n.parent.kind?!0:n&&16===n.kind&&248===n.parent.kind?!0:25===n.kind&&245===n.parent.kind?!0:!1:!1}function S(t,n){var r=y(t,n)
return e.isTemplateLiteralKind(r.kind)&&n>r.getStart(t)}function T(t,n,r){var a=y(t,n)
if(a&&n<=a.getStart(t)){var i=e.getLeadingCommentRanges(t.text,a.pos)
return r?e.forEach(i,function(e){return e.pos<n&&(2==e.kind?n<=e.end:n<e.end)&&r(e)}):e.forEach(i,function(e){return e.pos<n&&(2==e.kind?n<=e.end:n<e.end)})}return!1}function E(t,n){function r(e){var n=t.text
return n.length>=e.pos+3&&"/"===n[e.pos]&&"*"===n[e.pos+1]&&"*"===n[e.pos+2]}var a=y(t,n),i=e.getLeadingCommentRanges(t.text,a.pos)
return e.forEach(i,r)}function w(t,n){var r=e.getTokenAtPosition(t,n)
if(O(r))switch(r.kind){case 102:case 108:case 74:r=void 0===r.parent?void 0:r.parent.parent
break
default:r=r.parent}if(r&&r.jsDocComments)for(var a=0,i=r.jsDocComments;a<i.length;a++)for(var o=i[a],s=0,c=o.tags;s<c.length;s++){var _=c[s]
if(_.pos<=n&&n<=_.end)return _}}function A(e){return 0!==e.getWidth()}function N(t){var n=e.getCombinedNodeFlags(t),r=[]
return 8&n&&r.push(e.ScriptElementKindModifier.privateMemberModifier),16&n&&r.push(e.ScriptElementKindModifier.protectedMemberModifier),4&n&&r.push(e.ScriptElementKindModifier.publicMemberModifier),32&n&&r.push(e.ScriptElementKindModifier.staticModifier),128&n&&r.push(e.ScriptElementKindModifier.abstractModifier),1&n&&r.push(e.ScriptElementKindModifier.exportedModifier),e.isInAmbientContext(t)&&r.push(e.ScriptElementKindModifier.ambientModifier),r.length>0?r.join(","):e.ScriptElementKindModifier.none}function P(t){return 155===t.kind||174===t.kind?t.typeArguments:e.isFunctionLike(t)||221===t.kind||222===t.kind?t.typeParameters:void 0}function O(e){return e.kind>=0&&e.kind<=138}function R(t){return 69===t||e.isKeyword(t)}function F(e){return 9===e||8===e||R(e)}function I(e){return 2===e||3===e}function M(t){return 9===t||10===t||e.isTemplateLiteralKind(t)?!0:!1}function L(e){return e>=15&&68>=e}function B(t,n){return e.isTemplateLiteralKind(t.kind)&&t.getStart()<n&&n<t.getEnd()||!!t.isUnterminated&&n===t.getEnd()}function J(e){switch(e){case 112:case 110:case 111:return!0}return!1}function K(e,t){for(var n in e)if("object"==typeof e[n]){if(!K(e[n],t[n]))return!1}else if("function"!=typeof e[n]&&e[n]!==t[n])return!1
return!0}function z(e){if(170===e.kind||171===e.kind){if(187===e.parent.kind&&e.parent.left===e&&56===e.parent.operatorToken.kind)return!0
if(208===e.parent.kind&&e.parent.initializer===e)return!0
if(z(253===e.parent.kind?e.parent.parent:e.parent))return!0}return!1}e.getLineStartPositionForPosition=t,e.rangeContainsRange=n,e.startEndContainsRange=r,e.rangeContainsStartEnd=a,e.rangeOverlapsWithStartEnd=i,e.startEndOverlapsWithStartEnd=o,e.positionBelongsToNode=s,e.isCompletedNode=c,e.findListItemInfo=u,e.hasChildOfKind=l,e.findChildOfKind=d,e.findContainingList=p,e.getTouchingWord=f,e.getTouchingPropertyName=g,e.getTouchingToken=m,e.getTokenAtPosition=y,e.findTokenOnLeftOfPosition=v,e.findNextToken=k,e.findPrecedingToken=b,e.isInString=x,e.isInComment=D,e.isInsideJsxElementOrAttribute=C,e.isInTemplateString=S,e.isInCommentHelper=T,e.hasDocComment=E,e.getJsDocTagAtPosition=w,e.getNodeModifiers=N,e.getTypeArgumentOrTypeParameterList=P,e.isToken=O,e.isWord=R,e.isComment=I,e.isStringOrRegularExpressionOrTemplateLiteral=M,e.isPunctuation=L,e.isInsideTemplateLiteral=B,e.isAccessibilityModifier=J,e.compareDataObjects=K,e.isArrayLiteralOrObjectLiteralDestructuringPattern=z}(ts||(ts={}))
var ts
!function(e){function t(e){return e.declarations&&e.declarations.length>0&&142===e.declarations[0].kind}function n(){function t(){if(_){var t=e.getIndentString(u)
t&&c.push(a(t,e.SymbolDisplayPartKind.space)),_=!1}}function n(e,n){t(),c.push(a(e,n))}function i(e,n){t(),c.push(r(e,n))}function o(){c.push(d()),_=!0}function s(){c=[],_=!0,u=0}var c,_,u
return s(),{displayParts:function(){return c},writeKeyword:function(t){return n(t,e.SymbolDisplayPartKind.keyword)},writeOperator:function(t){return n(t,e.SymbolDisplayPartKind.operator)},writePunctuation:function(t){return n(t,e.SymbolDisplayPartKind.punctuation)},writeSpace:function(t){return n(t,e.SymbolDisplayPartKind.space)},writeStringLiteral:function(t){return n(t,e.SymbolDisplayPartKind.stringLiteral)},writeParameter:function(t){return n(t,e.SymbolDisplayPartKind.parameterName)},writeSymbol:i,writeLine:o,increaseIndent:function(){u++},decreaseIndent:function(){u--},clear:s,trackSymbol:function(){},reportInaccessibleThisError:function(){}}}function r(n,r){function i(n){var r=n.flags
return 3&r?t(n)?e.SymbolDisplayPartKind.parameterName:e.SymbolDisplayPartKind.localName:4&r?e.SymbolDisplayPartKind.propertyName:32768&r?e.SymbolDisplayPartKind.propertyName:65536&r?e.SymbolDisplayPartKind.propertyName:8&r?e.SymbolDisplayPartKind.enumMemberName:16&r?e.SymbolDisplayPartKind.functionName:32&r?e.SymbolDisplayPartKind.className:64&r?e.SymbolDisplayPartKind.interfaceName:384&r?e.SymbolDisplayPartKind.enumName:1536&r?e.SymbolDisplayPartKind.moduleName:8192&r?e.SymbolDisplayPartKind.methodName:262144&r?e.SymbolDisplayPartKind.typeParameterName:524288&r?e.SymbolDisplayPartKind.aliasName:8388608&r?e.SymbolDisplayPartKind.aliasName:e.SymbolDisplayPartKind.text}return a(n,i(r),r)}function a(t,n,r){return{text:t,kind:e.SymbolDisplayPartKind[n]}}function i(){return a(" ",e.SymbolDisplayPartKind.space)}function o(t){return a(e.tokenToString(t),e.SymbolDisplayPartKind.keyword)}function s(t){return a(e.tokenToString(t),e.SymbolDisplayPartKind.punctuation)}function c(t){return a(e.tokenToString(t),e.SymbolDisplayPartKind.operator)}function _(t){var n=e.stringToToken(t)
return void 0===n?u(t):o(n)}function u(t){return a(t,e.SymbolDisplayPartKind.text)}function l(e){return e.getNewLine?e.getNewLine():C}function d(){return a("\n",e.SymbolDisplayPartKind.lineBreak)}function p(e){e(D)
var t=D.displayParts()
return D.clear(),t}function f(e,t,n,r){return p(function(a){e.getSymbolDisplayBuilder().buildTypeDisplay(t,a,n,r)})}function g(e,t,n,r,a){return p(function(i){e.getSymbolDisplayBuilder().buildSymbolDisplay(t,i,n,r,a)})}function m(e,t,n,r){return p(function(a){e.getSymbolDisplayBuilder().buildSignatureDisplay(t,a,n,r)})}function y(t,n,r){if(h(r))return r.getText()
if(e.isStringOrNumericLiteral(r.kind)&&140===r.parent.kind)return r.text
var a=e.getLocalSymbolForExportDefault(n),i=t.symbolToString(a||n)
return i}function h(e){return e.parent&&(234===e.parent.kind||238===e.parent.kind)&&e.parent.propertyName===e}function v(e){var t=e.length
return t>=2&&e.charCodeAt(0)===e.charCodeAt(t-1)&&(34===e.charCodeAt(0)||39===e.charCodeAt(0))?e.substring(1,t-1):e}function k(t,n){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a]
var i=b(t,n)
return e.forEach(r,function(e){return e===i})}function b(t,n){var r
return n&&n.getScriptKind&&(r=n.getScriptKind(t)),r||(r=e.getScriptKindFromFileName(t)),e.ensureScriptKind(t,r)}function x(t){for(var n={fileName:"config.js",compilerOptions:{target:2,removeComments:!0},reportDiagnostics:!0},r=e.transpileModule("("+t+")",n),a=r.outputText,i=r.diagnostics,o=a.trim(),s=JSON.parse(o.substring(1,o.length-2)),c=0,_=i;c<_.length;c++){var u=_[c]
u.start=u.start-1}return{configJsonObject:s,diagnostics:i}}e.isFirstDeclarationOfSymbolParameter=t
var D=n()
e.symbolPart=r,e.displayPart=a,e.spacePart=i,e.keywordPart=o,e.punctuationPart=s,e.operatorPart=c,e.textOrKeywordPart=_,e.textPart=u
var C="\r\n"
e.getNewLineOrDefaultFromHost=l,e.lineBreakPart=d,e.mapToDisplayParts=p,e.typeToDisplayParts=f,e.symbolToDisplayParts=g,e.signatureToDisplayParts=m,e.getDeclaredName=y,e.isImportOrExportSpecifierName=h,e.stripQuotes=v,e.scriptKindIs=k,e.getScriptKind=b,e.parseAndReEmitConfigJSONFile=x}(ts||(ts={}))
var ts
!function(e){var t
!function(t){function n(t,n,a,i,o,s,c){function _(e){if(e)for(var t=0,n=e;t<n.length;t++){var r=n[t]
r in p||(p[r]=void 0)}}function u(n,r){var a=e.readConfigFile(n,function(e){return t.readFile(e)})
if(a.config){var i=a.config
r.push(n),i.dependencies&&_(e.getOwnKeys(i.dependencies)),i.devDependencies&&_(e.getOwnKeys(i.devDependencies)),i.optionalDependencies&&_(e.getOwnKeys(i.optionalDependencies)),i.peerDependencies&&_(e.getOwnKeys(i.peerDependencies))}}function l(t){var n=e.filter(t,e.hasJavaScriptFileExtension),a=e.map(n,function(t){return e.removeFileExtension(e.getBaseFileName(t.toLowerCase()))}),i=e.map(a,function(e){return e.replace(/((?:\.|-)min(?=\.|$))|((?:-|\.)\d+)/g,"")})
_(void 0===r?i:e.filter(i,function(e){return e in r}))
var o=e.forEach(t,function(t){return e.scriptKindIs(t,void 0,2)})
o&&_(["react"])}function d(n){if(t.directoryExists(n)){for(var r=[],a=t.readDirectory(n,["*.json"],void 0,void 0,2),i=0,o=a;i<o.length;i++){var s=o[i],c=e.normalizePath(s)
if("package.json"===e.getBaseFileName(c)){var u=e.readConfigFile(c,function(e){return t.readFile(e)})
if(u.config){var l=u.config
if((!l._requiredBy||0!==e.filter(l._requiredBy,function(e){return"#"===e[0]||"/"===e}).length)&&l.name)if(l.typings){var d=e.getNormalizedAbsolutePath(l.typings,e.getDirectoryPath(c))
p[l.name]=d}else r.push(l.name)}}}_(r)}}var p=e.createMap()
if(!s||!s.enableAutoDiscovery)return{cachedTypingPaths:[],newTypingNames:[],filesToWatch:[]}
if(n=e.filter(e.map(n,e.normalizePath),function(t){return e.scriptKindIs(t,void 0,1,2)}),!r){var f=e.readConfigFile(i,function(e){return t.readFile(e)})
r=e.createMap(f.config)}var g=[],m=[],y=[]
_(s.include),y=s.exclude||[]
var h=e.map(n,e.getDirectoryPath)
void 0!==a&&h.push(a),m=e.deduplicate(h)
for(var v=0,k=m;v<k.length;v++){var b=k[v],x=e.combinePaths(b,"package.json")
u(x,g)
var D=e.combinePaths(b,"bower.json")
u(D,g)
var C=e.combinePaths(b,"node_modules")
d(C)}l(n)
for(var S in o)S in p&&!p[S]&&(p[S]=o[S])
for(var T=0,E=y;T<E.length;T++){var w=E[T]
delete p[w]}var A=[],N=[]
for(var P in p)void 0!==p[P]?N.push(p[P]):A.push(P)
return{cachedTypingPaths:N,newTypingNames:A,filesToWatch:g}}var r
t.discoverTypings=n}(t=e.JsTyping||(e.JsTyping={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(t){function n(t,n,a){function s(){e.Debug.assert(void 0!==r),x=void 0
var t=r.getStartPos()!==n
t&&(v?(e.Debug.assert(0!==v.length),D=4===e.lastOrUndefined(v).kind):D=!1),h=void 0,v=void 0,t||r.scan()
for(var i=r.getStartPos();a>i;){var o=r.getToken()
if(!e.isTrivia(o))break
r.scan()
var s={pos:i,end:r.getStartPos(),kind:o}
i=r.getStartPos(),h||(h=[]),h.push(s)}k=r.getStartPos()}function c(e){if(e)switch(e.kind){case 29:case 64:case 65:case 45:case 44:return!0}return!1}function _(e){if(e.parent)switch(e.parent.kind){case 246:case 243:case 245:case 242:return 69===e.kind}return!1}function u(e){return e&&244===e.kind}function l(e){return 10===e.kind}function d(e){return 13===e.kind||14===e.kind}function p(e){return 39===e||61===e}function f(t){if(e.Debug.assert(void 0!==r),!g())return{leadingTrivia:h,trailingTrivia:void 0,token:void 0}
var n=c(t)?1:l(t)?2:d(t)?3:_(t)?4:u(t)?5:0
if(x&&n===b)return m(x,t)
r.getStartPos()!==k&&(e.Debug.assert(void 0!==x),r.setTextPos(k),r.scan())
var i=r.getToken()
1===n&&27===i?(i=r.reScanGreaterToken(),e.Debug.assert(t.kind===i),b=1):2===n&&p(i)?(i=r.reScanSlashToken(),e.Debug.assert(t.kind===i),b=2):3===n&&16===i?(i=r.reScanTemplateToken(),b=3):4===n&&69===i?(i=r.scanJsxIdentifier(),b=4):5===n?(i=r.reScanJsxToken(),b=5):b=0
var o={pos:r.getStartPos(),end:r.getTextPos(),kind:i}
for(v&&(v=void 0);r.getStartPos()<a&&(i=r.scan(),e.isTrivia(i));){var s={pos:r.getStartPos(),end:r.getTextPos(),kind:i}
if(v||(v=[]),v.push(s),4===i){r.scan()
break}}return x={leadingTrivia:h,trailingTrivia:v,token:o},m(x,t)}function g(){e.Debug.assert(void 0!==r)
var t=x&&x.token.kind||r.getToken(),n=x&&x.token.pos||r.getStartPos()
return a>n&&1!==t&&!e.isTrivia(t)}function m(t,n){return e.isToken(n)&&t.token.kind!==n.kind&&(t.token.kind=n.kind),t}function y(e){r.setTextPos(e.end),k=r.getStartPos(),b=void 0,x=void 0,D=!1,h=void 0,v=void 0}e.Debug.assert(void 0===r),r=1===t.languageVariant?o:i,r.setText(t.text),r.setTextPos(n)
var h,v,k,b,x,D=!0
return{advance:s,readTokenInfo:f,isOnToken:g,getCurrentLeadingTrivia:function(){return h},lastTrailingTriviaWasNewLine:function(){return D},skipToEndOf:y,close:function(){e.Debug.assert(void 0!==r),x=void 0,r.setText(void 0),r=void 0}}}var r,a,i=e.createScanner(2,!1,0),o=e.createScanner(2,!1,1)
!function(e){e[e.Scan=0]="Scan",e[e.RescanGreaterThanToken=1]="RescanGreaterThanToken",e[e.RescanSlashToken=2]="RescanSlashToken",e[e.RescanTemplateToken=3]="RescanTemplateToken",e[e.RescanJsxIdentifier=4]="RescanJsxIdentifier",e[e.RescanJsxText=5]="RescanJsxText"}(a||(a={})),t.getFormattingScanner=n}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(t){var n=function(){function t(e,t){this.sourceFile=e,this.formattingRequestKind=t}return t.prototype.updateContext=function(t,n,r,a,i){e.Debug.assert(void 0!==t,"currentTokenSpan is null"),e.Debug.assert(void 0!==n,"currentTokenParent is null"),e.Debug.assert(void 0!==r,"nextTokenSpan is null"),e.Debug.assert(void 0!==a,"nextTokenParent is null"),e.Debug.assert(void 0!==i,"commonParent is null"),this.currentTokenSpan=t,this.currentTokenParent=n,this.nextTokenSpan=r,this.nextTokenParent=a,this.contextNode=i,this.contextNodeAllOnSameLine=void 0,this.nextNodeAllOnSameLine=void 0,this.tokensAreOnSameLine=void 0,this.contextNodeBlockIsOnOneLine=void 0,this.nextNodeBlockIsOnOneLine=void 0},t.prototype.ContextNodeAllOnSameLine=function(){return void 0===this.contextNodeAllOnSameLine&&(this.contextNodeAllOnSameLine=this.NodeIsOnOneLine(this.contextNode)),this.contextNodeAllOnSameLine},t.prototype.NextNodeAllOnSameLine=function(){return void 0===this.nextNodeAllOnSameLine&&(this.nextNodeAllOnSameLine=this.NodeIsOnOneLine(this.nextTokenParent)),this.nextNodeAllOnSameLine},t.prototype.TokensAreOnSameLine=function(){if(void 0===this.tokensAreOnSameLine){var e=this.sourceFile.getLineAndCharacterOfPosition(this.currentTokenSpan.pos).line,t=this.sourceFile.getLineAndCharacterOfPosition(this.nextTokenSpan.pos).line
this.tokensAreOnSameLine=e===t}return this.tokensAreOnSameLine},t.prototype.ContextNodeBlockIsOnOneLine=function(){return void 0===this.contextNodeBlockIsOnOneLine&&(this.contextNodeBlockIsOnOneLine=this.BlockIsOnOneLine(this.contextNode)),this.contextNodeBlockIsOnOneLine},t.prototype.NextNodeBlockIsOnOneLine=function(){return void 0===this.nextNodeBlockIsOnOneLine&&(this.nextNodeBlockIsOnOneLine=this.BlockIsOnOneLine(this.nextTokenParent)),this.nextNodeBlockIsOnOneLine},t.prototype.NodeIsOnOneLine=function(e){var t=this.sourceFile.getLineAndCharacterOfPosition(e.getStart(this.sourceFile)).line,n=this.sourceFile.getLineAndCharacterOfPosition(e.getEnd()).line
return t===n},t.prototype.BlockIsOnOneLine=function(t){var n=e.findChildOfKind(t,15,this.sourceFile),r=e.findChildOfKind(t,16,this.sourceFile)
if(n&&r){var a=this.sourceFile.getLineAndCharacterOfPosition(n.getEnd()).line,i=this.sourceFile.getLineAndCharacterOfPosition(r.getStart(this.sourceFile)).line
return a===i}return!1},t}()
t.FormattingContext=n}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(e){!function(e){e[e.FormatDocument=0]="FormatDocument",e[e.FormatSelection=1]="FormatSelection",e[e.FormatOnEnter=2]="FormatOnEnter",e[e.FormatOnSemicolon=3]="FormatOnSemicolon",e[e.FormatOnClosingCurlyBrace=4]="FormatOnClosingCurlyBrace"}(e.FormattingRequestKind||(e.FormattingRequestKind={}))
e.FormattingRequestKind}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(e){var t=function(){function e(e,t,n){void 0===n&&(n=0),this.Descriptor=e,this.Operation=t,this.Flag=n}return e.prototype.toString=function(){return"[desc="+this.Descriptor+",operation="+this.Operation+",flag="+this.Flag+"]"},e}()
e.Rule=t}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(e){!function(e){e[e.Ignore=1]="Ignore",e[e.Space=2]="Space",e[e.NewLine=4]="NewLine",e[e.Delete=8]="Delete"}(e.RuleAction||(e.RuleAction={}))
e.RuleAction}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(e){var t=function(){function t(e,t){this.LeftTokenRange=e,this.RightTokenRange=t}return t.prototype.toString=function(){return"[leftRange="+this.LeftTokenRange+",rightRange="+this.RightTokenRange+"]"},t.create1=function(n,r){return t.create4(e.Shared.TokenRange.FromToken(n),e.Shared.TokenRange.FromToken(r))},t.create2=function(n,r){return t.create4(n,e.Shared.TokenRange.FromToken(r))},t.create3=function(n,r){return t.create4(e.Shared.TokenRange.FromToken(n),r)},t.create4=function(e,n){return new t(e,n)},t}()
e.RuleDescriptor=t}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(e){!function(e){e[e.None=0]="None",e[e.CanDeleteNewLines=1]="CanDeleteNewLines"}(e.RuleFlags||(e.RuleFlags={}))
e.RuleFlags}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(e){var t=function(){function t(e,t){this.Context=e,this.Action=t}return t.prototype.toString=function(){return"[context="+this.Context+",action="+this.Action+"]"},t.create1=function(n){return t.create2(e.RuleOperationContext.Any,n)},t.create2=function(e,n){return new t(e,n)},t}()
e.RuleOperation=t}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(e){var t=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t]
this.customContextChecks=e}return e.prototype.IsAny=function(){return this===e.Any},e.prototype.InContext=function(e){if(this.IsAny())return!0
for(var t=0,n=this.customContextChecks;t<n.length;t++){var r=n[t]
if(!r(e))return!1}return!0},e.Any=new e,e}()
e.RuleOperationContext=t}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(t){var n=function(){function n(){this.IgnoreBeforeComment=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.Comments),t.RuleOperation.create1(1)),this.IgnoreAfterLineComment=new t.Rule(t.RuleDescriptor.create3(2,t.Shared.TokenRange.Any),t.RuleOperation.create1(1)),this.NoSpaceBeforeSemicolon=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,23),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceBeforeColon=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,54),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsNotBinaryOpContext),8)),this.NoSpaceBeforeQuestionMark=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,53),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsNotBinaryOpContext),8)),this.SpaceAfterColon=new t.Rule(t.RuleDescriptor.create3(54,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsNotBinaryOpContext),2)),this.SpaceAfterQuestionMarkInConditionalOperator=new t.Rule(t.RuleDescriptor.create3(53,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsConditionalOperatorContext),2)),this.NoSpaceAfterQuestionMark=new t.Rule(t.RuleDescriptor.create3(53,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.SpaceAfterSemicolon=new t.Rule(t.RuleDescriptor.create3(23,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.SpaceAfterCloseBrace=new t.Rule(t.RuleDescriptor.create3(16,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsAfterCodeBlockContext),2)),this.SpaceBetweenCloseBraceAndElse=new t.Rule(t.RuleDescriptor.create1(16,80),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.SpaceBetweenCloseBraceAndWhile=new t.Rule(t.RuleDescriptor.create1(16,104),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.NoSpaceAfterCloseBrace=new t.Rule(t.RuleDescriptor.create3(16,t.Shared.TokenRange.FromTokens([18,20,24,23])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceBeforeDot=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,21),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceAfterDot=new t.Rule(t.RuleDescriptor.create3(21,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceBeforeOpenBracket=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,19),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceAfterCloseBracket=new t.Rule(t.RuleDescriptor.create3(20,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsNotBeforeBlockInFunctionDeclarationContext),8)),this.FunctionOpenBraceLeftTokenRange=t.Shared.TokenRange.AnyIncludingMultilineComments,this.SpaceBeforeOpenBraceInFunction=new t.Rule(t.RuleDescriptor.create2(this.FunctionOpenBraceLeftTokenRange,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclContext,n.IsBeforeBlockContext,n.IsNotFormatOnEnter,n.IsSameLineTokenOrBeforeMultilineBlockContext),2),1),this.TypeScriptOpenBraceLeftTokenRange=t.Shared.TokenRange.FromTokens([69,3,73,82,89]),this.SpaceBeforeOpenBraceInTypeScriptDeclWithBlock=new t.Rule(t.RuleDescriptor.create2(this.TypeScriptOpenBraceLeftTokenRange,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsTypeScriptDeclWithBlockContext,n.IsNotFormatOnEnter,n.IsSameLineTokenOrBeforeMultilineBlockContext),2),1),this.ControlOpenBraceLeftTokenRange=t.Shared.TokenRange.FromTokens([18,3,79,100,85,80]),this.SpaceBeforeOpenBraceInControl=new t.Rule(t.RuleDescriptor.create2(this.ControlOpenBraceLeftTokenRange,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsControlDeclContext,n.IsNotFormatOnEnter,n.IsSameLineTokenOrBeforeMultilineBlockContext),2),1),this.SpaceAfterOpenBrace=new t.Rule(t.RuleDescriptor.create3(15,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSingleLineBlockContext),2)),this.SpaceBeforeCloseBrace=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,16),t.RuleOperation.create2(new t.RuleOperationContext(n.IsSingleLineBlockContext),2)),this.NoSpaceBetweenEmptyBraceBrackets=new t.Rule(t.RuleDescriptor.create1(15,16),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsObjectContext),8)),this.NewLineAfterOpenBraceInBlockContext=new t.Rule(t.RuleDescriptor.create3(15,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsMultilineBlockContext),4)),this.NewLineBeforeCloseBraceInBlockContext=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.AnyIncludingMultilineComments,16),t.RuleOperation.create2(new t.RuleOperationContext(n.IsMultilineBlockContext),4)),this.NoSpaceAfterUnaryPrefixOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.UnaryPrefixOperators,t.Shared.TokenRange.UnaryPrefixExpressions),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsNotBinaryOpContext),8)),this.NoSpaceAfterUnaryPreincrementOperator=new t.Rule(t.RuleDescriptor.create3(41,t.Shared.TokenRange.UnaryPreincrementExpressions),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceAfterUnaryPredecrementOperator=new t.Rule(t.RuleDescriptor.create3(42,t.Shared.TokenRange.UnaryPredecrementExpressions),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceBeforeUnaryPostincrementOperator=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.UnaryPostincrementExpressions,41),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceBeforeUnaryPostdecrementOperator=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.UnaryPostdecrementExpressions,42),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.SpaceAfterPostincrementWhenFollowedByAdd=new t.Rule(t.RuleDescriptor.create1(41,35),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterAddWhenFollowedByUnaryPlus=new t.Rule(t.RuleDescriptor.create1(35,35),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterAddWhenFollowedByPreincrement=new t.Rule(t.RuleDescriptor.create1(35,41),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterPostdecrementWhenFollowedBySubtract=new t.Rule(t.RuleDescriptor.create1(42,36),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterSubtractWhenFollowedByUnaryMinus=new t.Rule(t.RuleDescriptor.create1(36,36),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterSubtractWhenFollowedByPredecrement=new t.Rule(t.RuleDescriptor.create1(36,42),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsBinaryOpContext),2)),this.NoSpaceBeforeComma=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,24),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.SpaceAfterCertainKeywords=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([102,98,92,78,94,101,119]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.SpaceAfterLetConstInVariableDeclaration=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([108,74]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsStartOfVariableDeclarationList),2)),this.NoSpaceBeforeOpenParenInFuncCall=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsFunctionCallOrNewContext,n.IsPreviousTokenNotComma),8)),this.SpaceAfterFunctionInFuncDecl=new t.Rule(t.RuleDescriptor.create3(87,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclContext),2)),this.NoSpaceBeforeOpenParenInFuncDecl=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsFunctionDeclContext),8)),this.SpaceAfterVoidOperator=new t.Rule(t.RuleDescriptor.create3(103,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsVoidOpContext),2)),this.NoSpaceBetweenReturnAndSemicolon=new t.Rule(t.RuleDescriptor.create1(94,23),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.SpaceBetweenStatements=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([18,79,80,71]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsNonJsxElementContext,n.IsNotForContext),2)),this.SpaceAfterTryFinally=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.FromTokens([100,85]),15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.SpaceAfterGetSetInMember=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.FromTokens([123,131]),69),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclContext),2)),this.SpaceBeforeBinaryKeywordOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.BinaryKeywordOperators),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterBinaryKeywordOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.BinaryKeywordOperators,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsBinaryOpContext),2)),this.NoSpaceAfterConstructor=new t.Rule(t.RuleDescriptor.create1(121,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceAfterModuleImport=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.FromTokens([125,129]),17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.SpaceAfterCertainTypeScriptKeywords=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([115,73,122,77,81,82,83,123,106,89,107,125,126,110,112,111,131,113,134,136]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.SpaceBeforeCertainTypeScriptKeywords=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.FromTokens([83,106,136])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.SpaceAfterModuleName=new t.Rule(t.RuleDescriptor.create1(9,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsModuleDeclContext),2)),this.SpaceBeforeArrow=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,34),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.SpaceAfterArrow=new t.Rule(t.RuleDescriptor.create3(34,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.NoSpaceAfterEllipsis=new t.Rule(t.RuleDescriptor.create1(22,69),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceAfterOptionalParameters=new t.Rule(t.RuleDescriptor.create3(53,t.Shared.TokenRange.FromTokens([18,24])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsNotBinaryOpContext),8)),this.NoSpaceBeforeOpenAngularBracket=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.TypeNames,25),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsTypeArgumentOrParameterOrAssertionContext),8)),this.NoSpaceBetweenCloseParenAndAngularBracket=new t.Rule(t.RuleDescriptor.create1(18,25),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsTypeArgumentOrParameterOrAssertionContext),8)),this.NoSpaceAfterOpenAngularBracket=new t.Rule(t.RuleDescriptor.create3(25,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsTypeArgumentOrParameterOrAssertionContext),8)),this.NoSpaceBeforeCloseAngularBracket=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,27),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsTypeArgumentOrParameterOrAssertionContext),8)),this.NoSpaceAfterCloseAngularBracket=new t.Rule(t.RuleDescriptor.create3(27,t.Shared.TokenRange.FromTokens([17,19,27,24])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsTypeArgumentOrParameterOrAssertionContext),8)),this.NoSpaceAfterTypeAssertion=new t.Rule(t.RuleDescriptor.create3(27,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsTypeAssertionContext),8)),this.NoSpaceBetweenEmptyInterfaceBraceBrackets=new t.Rule(t.RuleDescriptor.create1(15,16),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsObjectTypeContext),8)),this.SpaceBeforeAt=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,55),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.NoSpaceAfterAt=new t.Rule(t.RuleDescriptor.create3(55,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.SpaceAfterDecorator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.FromTokens([115,69,82,77,73,113,112,110,111,123,131,19,37])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsEndOfDecoratorContextOnSameLine),2)),this.NoSpaceBetweenFunctionKeywordAndStar=new t.Rule(t.RuleDescriptor.create1(87,37),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclarationOrFunctionExpressionContext),8)),this.SpaceAfterStarInGeneratorDeclaration=new t.Rule(t.RuleDescriptor.create3(37,t.Shared.TokenRange.FromTokens([69,17])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclarationOrFunctionExpressionContext),2)),this.NoSpaceBetweenYieldKeywordAndStar=new t.Rule(t.RuleDescriptor.create1(114,37),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsYieldOrYieldStarWithOperand),8)),this.SpaceBetweenYieldOrYieldStarAndOperand=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([114,37]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsYieldOrYieldStarWithOperand),2)),this.SpaceBetweenAsyncAndOpenParen=new t.Rule(t.RuleDescriptor.create1(118,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsArrowFunctionContext,n.IsNonJsxSameLineTokenContext),2)),this.SpaceBetweenAsyncAndFunctionKeyword=new t.Rule(t.RuleDescriptor.create1(118,87),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.NoSpaceBetweenTagAndTemplateString=new t.Rule(t.RuleDescriptor.create3(69,t.Shared.TokenRange.FromTokens([11,12])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.SpaceBeforeJsxAttribute=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,69),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNextTokenParentJsxAttribute,n.IsNonJsxSameLineTokenContext),2)),this.SpaceBeforeSlashInJsxOpeningElement=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,39),t.RuleOperation.create2(new t.RuleOperationContext(n.IsJsxSelfClosingElementContext,n.IsNonJsxSameLineTokenContext),2)),this.NoSpaceBeforeGreaterThanTokenInJsxOpeningElement=new t.Rule(t.RuleDescriptor.create1(39,27),t.RuleOperation.create2(new t.RuleOperationContext(n.IsJsxSelfClosingElementContext,n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceBeforeEqualInJsxAttribute=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,56),t.RuleOperation.create2(new t.RuleOperationContext(n.IsJsxAttributeContext,n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceAfterEqualInJsxAttribute=new t.Rule(t.RuleDescriptor.create3(56,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsJsxAttributeContext,n.IsNonJsxSameLineTokenContext),8)),this.HighPriorityCommonRules=[this.IgnoreBeforeComment,this.IgnoreAfterLineComment,this.NoSpaceBeforeColon,this.SpaceAfterColon,this.NoSpaceBeforeQuestionMark,this.SpaceAfterQuestionMarkInConditionalOperator,this.NoSpaceAfterQuestionMark,this.NoSpaceBeforeDot,this.NoSpaceAfterDot,this.NoSpaceAfterUnaryPrefixOperator,this.NoSpaceAfterUnaryPreincrementOperator,this.NoSpaceAfterUnaryPredecrementOperator,this.NoSpaceBeforeUnaryPostincrementOperator,this.NoSpaceBeforeUnaryPostdecrementOperator,this.SpaceAfterPostincrementWhenFollowedByAdd,this.SpaceAfterAddWhenFollowedByUnaryPlus,this.SpaceAfterAddWhenFollowedByPreincrement,this.SpaceAfterPostdecrementWhenFollowedBySubtract,this.SpaceAfterSubtractWhenFollowedByUnaryMinus,this.SpaceAfterSubtractWhenFollowedByPredecrement,this.NoSpaceAfterCloseBrace,this.SpaceAfterOpenBrace,this.SpaceBeforeCloseBrace,this.NewLineBeforeCloseBraceInBlockContext,this.SpaceAfterCloseBrace,this.SpaceBetweenCloseBraceAndElse,this.SpaceBetweenCloseBraceAndWhile,this.NoSpaceBetweenEmptyBraceBrackets,this.NoSpaceBetweenFunctionKeywordAndStar,this.SpaceAfterStarInGeneratorDeclaration,this.SpaceAfterFunctionInFuncDecl,this.NewLineAfterOpenBraceInBlockContext,this.SpaceAfterGetSetInMember,this.NoSpaceBetweenYieldKeywordAndStar,this.SpaceBetweenYieldOrYieldStarAndOperand,this.NoSpaceBetweenReturnAndSemicolon,this.SpaceAfterCertainKeywords,this.SpaceAfterLetConstInVariableDeclaration,this.NoSpaceBeforeOpenParenInFuncCall,this.SpaceBeforeBinaryKeywordOperator,this.SpaceAfterBinaryKeywordOperator,this.SpaceAfterVoidOperator,this.SpaceBetweenAsyncAndOpenParen,this.SpaceBetweenAsyncAndFunctionKeyword,this.NoSpaceBetweenTagAndTemplateString,this.SpaceBeforeJsxAttribute,this.SpaceBeforeSlashInJsxOpeningElement,this.NoSpaceBeforeGreaterThanTokenInJsxOpeningElement,this.NoSpaceBeforeEqualInJsxAttribute,this.NoSpaceAfterEqualInJsxAttribute,this.NoSpaceAfterConstructor,this.NoSpaceAfterModuleImport,this.SpaceAfterCertainTypeScriptKeywords,this.SpaceBeforeCertainTypeScriptKeywords,this.SpaceAfterModuleName,this.SpaceBeforeArrow,this.SpaceAfterArrow,this.NoSpaceAfterEllipsis,this.NoSpaceAfterOptionalParameters,this.NoSpaceBetweenEmptyInterfaceBraceBrackets,this.NoSpaceBeforeOpenAngularBracket,this.NoSpaceBetweenCloseParenAndAngularBracket,this.NoSpaceAfterOpenAngularBracket,this.NoSpaceBeforeCloseAngularBracket,this.NoSpaceAfterCloseAngularBracket,this.NoSpaceAfterTypeAssertion,this.SpaceBeforeAt,this.NoSpaceAfterAt,this.SpaceAfterDecorator],this.LowPriorityCommonRules=[this.NoSpaceBeforeSemicolon,this.SpaceBeforeOpenBraceInControl,this.SpaceBeforeOpenBraceInFunction,this.SpaceBeforeOpenBraceInTypeScriptDeclWithBlock,this.NoSpaceBeforeComma,this.NoSpaceBeforeOpenBracket,this.NoSpaceAfterCloseBracket,this.SpaceAfterSemicolon,this.NoSpaceBeforeOpenParenInFuncDecl,this.SpaceBetweenStatements,this.SpaceAfterTryFinally],this.SpaceAfterComma=new t.Rule(t.RuleDescriptor.create3(24,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsNonJsxElementContext,n.IsNextTokenNotCloseBracket),2)),this.NoSpaceAfterComma=new t.Rule(t.RuleDescriptor.create3(24,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsNonJsxElementContext),8)),this.SpaceBeforeBinaryOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.BinaryOperators),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsBinaryOpContext),2)),this.SpaceAfterBinaryOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.BinaryOperators,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsBinaryOpContext),2)),this.NoSpaceBeforeBinaryOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.BinaryOperators),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsBinaryOpContext),8)),this.NoSpaceAfterBinaryOperator=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.BinaryOperators,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsBinaryOpContext),8)),this.SpaceAfterKeywordInControl=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Keywords,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsControlDeclContext),2)),this.NoSpaceAfterKeywordInControl=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Keywords,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsControlDeclContext),8)),this.NewLineBeforeOpenBraceInFunction=new t.Rule(t.RuleDescriptor.create2(this.FunctionOpenBraceLeftTokenRange,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclContext,n.IsBeforeMultilineBlockContext),4),1),this.NewLineBeforeOpenBraceInTypeScriptDeclWithBlock=new t.Rule(t.RuleDescriptor.create2(this.TypeScriptOpenBraceLeftTokenRange,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsTypeScriptDeclWithBlockContext,n.IsBeforeMultilineBlockContext),4),1),this.NewLineBeforeOpenBraceInControl=new t.Rule(t.RuleDescriptor.create2(this.ControlOpenBraceLeftTokenRange,15),t.RuleOperation.create2(new t.RuleOperationContext(n.IsControlDeclContext,n.IsBeforeMultilineBlockContext),4),1),this.SpaceAfterSemicolonInFor=new t.Rule(t.RuleDescriptor.create3(23,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsForContext),2)),this.NoSpaceAfterSemicolonInFor=new t.Rule(t.RuleDescriptor.create3(23,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsForContext),8)),this.SpaceAfterOpenParen=new t.Rule(t.RuleDescriptor.create3(17,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.SpaceBeforeCloseParen=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,18),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.NoSpaceBetweenParens=new t.Rule(t.RuleDescriptor.create1(17,18),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceAfterOpenParen=new t.Rule(t.RuleDescriptor.create3(17,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceBeforeCloseParen=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,18),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.SpaceAfterOpenBracket=new t.Rule(t.RuleDescriptor.create3(19,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.SpaceBeforeCloseBracket=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,20),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.NoSpaceBetweenBrackets=new t.Rule(t.RuleDescriptor.create1(19,20),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceAfterOpenBracket=new t.Rule(t.RuleDescriptor.create3(19,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceBeforeCloseBracket=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,20),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.NoSpaceAfterTemplateHeadAndMiddle=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([12,13]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.SpaceAfterTemplateHeadAndMiddle=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.FromTokens([12,13]),t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.NoSpaceBeforeTemplateMiddleAndTail=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.FromTokens([13,14])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),8)),this.SpaceBeforeTemplateMiddleAndTail=new t.Rule(t.RuleDescriptor.create4(t.Shared.TokenRange.Any,t.Shared.TokenRange.FromTokens([13,14])),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext),2)),this.NoSpaceAfterOpenBraceInJsxExpression=new t.Rule(t.RuleDescriptor.create3(15,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsJsxExpressionContext),8)),this.SpaceAfterOpenBraceInJsxExpression=new t.Rule(t.RuleDescriptor.create3(15,t.Shared.TokenRange.Any),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsJsxExpressionContext),2)),this.NoSpaceBeforeCloseBraceInJsxExpression=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,16),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsJsxExpressionContext),8)),this.SpaceBeforeCloseBraceInJsxExpression=new t.Rule(t.RuleDescriptor.create2(t.Shared.TokenRange.Any,16),t.RuleOperation.create2(new t.RuleOperationContext(n.IsNonJsxSameLineTokenContext,n.IsJsxExpressionContext),2)),this.SpaceAfterAnonymousFunctionKeyword=new t.Rule(t.RuleDescriptor.create1(87,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclContext),2)),this.NoSpaceAfterAnonymousFunctionKeyword=new t.Rule(t.RuleDescriptor.create1(87,17),t.RuleOperation.create2(new t.RuleOperationContext(n.IsFunctionDeclContext),8))}return n.prototype.getRuleName=function(e){var t=this
for(var n in t)if(t[n]===e)return n
throw Error("Unknown rule")},n.IsForContext=function(e){return 206===e.contextNode.kind},n.IsNotForContext=function(e){return!n.IsForContext(e)},n.IsBinaryOpContext=function(e){switch(e.contextNode.kind){case 187:case 188:case 195:case 238:case 234:case 154:case 162:case 163:return!0
case 169:case 223:case 229:case 218:case 142:case 255:case 145:case 144:return 56===e.currentTokenSpan.kind||56===e.nextTokenSpan.kind
case 207:return 90===e.currentTokenSpan.kind||90===e.nextTokenSpan.kind
case 208:return 138===e.currentTokenSpan.kind||138===e.nextTokenSpan.kind}return!1},n.IsNotBinaryOpContext=function(e){return!n.IsBinaryOpContext(e)},n.IsConditionalOperatorContext=function(e){return 188===e.contextNode.kind},n.IsSameLineTokenOrBeforeMultilineBlockContext=function(e){return e.TokensAreOnSameLine()||n.IsBeforeMultilineBlockContext(e)},n.IsBeforeMultilineBlockContext=function(e){return n.IsBeforeBlockContext(e)&&!(e.NextNodeAllOnSameLine()||e.NextNodeBlockIsOnOneLine())},n.IsMultilineBlockContext=function(e){return n.IsBlockContext(e)&&!(e.ContextNodeAllOnSameLine()||e.ContextNodeBlockIsOnOneLine())},n.IsSingleLineBlockContext=function(e){return n.IsBlockContext(e)&&(e.ContextNodeAllOnSameLine()||e.ContextNodeBlockIsOnOneLine())},n.IsBlockContext=function(e){return n.NodeIsBlockContext(e.contextNode)},n.IsBeforeBlockContext=function(e){return n.NodeIsBlockContext(e.nextTokenParent)},n.NodeIsBlockContext=function(e){if(n.NodeIsTypeScriptDeclWithBlockContext(e))return!0
switch(e.kind){case 199:case 227:case 171:case 226:return!0}return!1},n.IsFunctionDeclContext=function(e){switch(e.contextNode.kind){case 220:case 147:case 146:case 149:case 150:case 151:case 179:case 148:case 180:case 222:return!0}return!1},n.IsFunctionDeclarationOrFunctionExpressionContext=function(e){return 220===e.contextNode.kind||179===e.contextNode.kind},n.IsTypeScriptDeclWithBlockContext=function(e){return n.NodeIsTypeScriptDeclWithBlockContext(e.contextNode)},n.NodeIsTypeScriptDeclWithBlockContext=function(e){switch(e.kind){case 221:case 192:case 222:case 224:case 159:case 225:case 236:case 237:case 230:case 233:return!0}return!1},n.IsAfterCodeBlockContext=function(e){switch(e.currentTokenParent.kind){case 221:case 225:case 224:case 199:case 252:case 226:case 213:return!0}return!1},n.IsControlDeclContext=function(e){switch(e.contextNode.kind){case 203:case 213:case 206:case 207:case 208:case 205:case 216:case 204:case 212:case 252:return!0
default:return!1}},n.IsObjectContext=function(e){return 171===e.contextNode.kind},n.IsFunctionCallContext=function(e){return 174===e.contextNode.kind},n.IsNewContext=function(e){return 175===e.contextNode.kind},n.IsFunctionCallOrNewContext=function(e){return n.IsFunctionCallContext(e)||n.IsNewContext(e)},n.IsPreviousTokenNotComma=function(e){return 24!==e.currentTokenSpan.kind},n.IsNextTokenNotCloseBracket=function(e){return 20!==e.nextTokenSpan.kind},n.IsArrowFunctionContext=function(e){return 180===e.contextNode.kind},n.IsNonJsxSameLineTokenContext=function(e){return e.TokensAreOnSameLine()&&244!==e.contextNode.kind},n.IsNonJsxElementContext=function(e){return 241!==e.contextNode.kind},n.IsJsxExpressionContext=function(e){return 248===e.contextNode.kind},n.IsNextTokenParentJsxAttribute=function(e){return 246===e.nextTokenParent.kind},n.IsJsxAttributeContext=function(e){return 246===e.contextNode.kind},n.IsJsxSelfClosingElementContext=function(e){return 242===e.contextNode.kind},n.IsNotBeforeBlockInFunctionDeclarationContext=function(e){return!n.IsFunctionDeclContext(e)&&!n.IsBeforeBlockContext(e)},n.IsEndOfDecoratorContextOnSameLine=function(e){return e.TokensAreOnSameLine()&&e.contextNode.decorators&&n.NodeIsInDecoratorContext(e.currentTokenParent)&&!n.NodeIsInDecoratorContext(e.nextTokenParent)},n.NodeIsInDecoratorContext=function(t){for(;e.isExpression(t);)t=t.parent
return 143===t.kind},n.IsStartOfVariableDeclarationList=function(e){return 219===e.currentTokenParent.kind&&e.currentTokenParent.getStart(e.sourceFile)===e.currentTokenSpan.pos},n.IsNotFormatOnEnter=function(e){return 2!==e.formattingRequestKind},n.IsModuleDeclContext=function(e){return 225===e.contextNode.kind},n.IsObjectTypeContext=function(e){return 159===e.contextNode.kind},n.IsTypeArgumentOrParameterOrAssertion=function(e,t){if(25!==e.kind&&27!==e.kind)return!1
switch(t.kind){case 155:case 177:case 221:case 192:case 222:case 220:case 179:case 180:case 147:case 146:case 151:case 152:case 174:case 175:case 194:return!0
default:return!1}},n.IsTypeArgumentOrParameterOrAssertionContext=function(e){return n.IsTypeArgumentOrParameterOrAssertion(e.currentTokenSpan,e.currentTokenParent)||n.IsTypeArgumentOrParameterOrAssertion(e.nextTokenSpan,e.nextTokenParent)},n.IsTypeAssertionContext=function(e){return 177===e.contextNode.kind},n.IsVoidOpContext=function(e){return 103===e.currentTokenSpan.kind&&183===e.currentTokenParent.kind},n.IsYieldOrYieldStarWithOperand=function(e){return 190===e.contextNode.kind&&void 0!==e.contextNode.expression},n}()
t.Rules=n}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(t){var n=function(){function e(){this.map=[],this.mapRowLength=0}return e.create=function(t){var n=new e
return n.Initialize(t),n},e.prototype.Initialize=function(e){this.mapRowLength=139,this.map=Array(this.mapRowLength*this.mapRowLength)
var t=Array(this.map.length)
return this.FillRules(e,t),this.map},e.prototype.FillRules=function(e,t){var n=this
e.forEach(function(e){n.FillRule(e,t)})},e.prototype.GetRuleBucketIndex=function(e,t){var n=e*this.mapRowLength+t
return n},e.prototype.FillRule=function(e,n){var r=this,a=e.Descriptor.LeftTokenRange!==t.Shared.TokenRange.Any&&e.Descriptor.RightTokenRange!==t.Shared.TokenRange.Any
e.Descriptor.LeftTokenRange.GetTokens().forEach(function(t){e.Descriptor.RightTokenRange.GetTokens().forEach(function(i){var o=r.GetRuleBucketIndex(t,i),c=r.map[o]
void 0===c&&(c=r.map[o]=new s),c.AddRule(e,a,n,o)})})},e.prototype.GetRule=function(e){var t=this.GetRuleBucketIndex(e.currentTokenSpan.kind,e.nextTokenSpan.kind),n=this.map[t]
if(n)for(var r=0,a=n.Rules();r<a.length;r++){var i=a[r]
if(i.Operation.Context.InContext(e))return i}},e}()
t.RulesMap=n
var r=5,a=31
!function(e){e[e.IgnoreRulesSpecific=0]="IgnoreRulesSpecific",e[e.IgnoreRulesAny=1*r]="IgnoreRulesAny",e[e.ContextRulesSpecific=2*r]="ContextRulesSpecific",e[e.ContextRulesAny=3*r]="ContextRulesAny",e[e.NoContextRulesSpecific=4*r]="NoContextRulesSpecific",e[e.NoContextRulesAny=5*r]="NoContextRulesAny"}(t.RulesPosition||(t.RulesPosition={}))
var i=t.RulesPosition,o=function(){function t(){this.rulesInsertionIndexBitmap=0}return t.prototype.GetInsertionIndex=function(e){for(var t=0,n=0,i=this.rulesInsertionIndexBitmap;e>=n;)t+=i&a,i>>=r,n+=r
return t},t.prototype.IncreaseInsertionIndex=function(t){var n=this.rulesInsertionIndexBitmap>>t&a
n++,e.Debug.assert((n&a)===n,"Adding more rules into the sub-bucket than allowed. Maximum allowed is 32 rules.")
var r=this.rulesInsertionIndexBitmap&~(a<<t)
r|=n<<t,this.rulesInsertionIndexBitmap=r},t}()
t.RulesBucketConstructionState=o
var s=function(){function e(){this.rules=[]}return e.prototype.Rules=function(){return this.rules},e.prototype.AddRule=function(e,t,n,r){var a
a=1===e.Operation.Action?t?i.IgnoreRulesSpecific:i.IgnoreRulesAny:e.Operation.Context.IsAny()?t?i.NoContextRulesSpecific:i.NoContextRulesAny:t?i.ContextRulesSpecific:i.ContextRulesAny
var s=n[r]
void 0===s&&(s=n[r]=new o)
var c=s.GetInsertionIndex(a)
this.rules.splice(c,0,e),s.IncreaseInsertionIndex(a)},e}()
t.RulesBucket=s}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(t){var n
!function(t){var n=function(){function t(t,n,r){this.tokens=[]
for(var a=t;n>=a;a++)e.indexOf(r,a)<0&&this.tokens.push(a)}return t.prototype.GetTokens=function(){return this.tokens},t.prototype.Contains=function(e){return this.tokens.indexOf(e)>=0},t}()
t.TokenRangeAccess=n
var r=function(){function e(e){this.tokens=e&&e.length?e:[]}return e.prototype.GetTokens=function(){return this.tokens},e.prototype.Contains=function(e){return this.tokens.indexOf(e)>=0},e}()
t.TokenValuesAccess=r
var a=function(){function e(e){this.token=e}return e.prototype.GetTokens=function(){return[this.token]},e.prototype.Contains=function(e){return e===this.token},e}()
t.TokenSingleValueAccess=a
var i=function(){function e(){}return e.prototype.GetTokens=function(){for(var e=[],t=0;138>=t;t++)e.push(t)
return e},e.prototype.Contains=function(e){return!0},e.prototype.toString=function(){return"[allTokens]"},e}()
t.TokenAllAccess=i
var o=function(){function e(e){this.tokenAccess=e}return e.FromToken=function(t){return new e(new a(t))},e.FromTokens=function(t){return new e(new r(t))},e.FromRange=function(t,r,a){return void 0===a&&(a=[]),new e(new n(t,r,a))},e.AllTokens=function(){return new e(new i)},e.prototype.GetTokens=function(){return this.tokenAccess.GetTokens()},e.prototype.Contains=function(e){return this.tokenAccess.Contains(e)},e.prototype.toString=function(){return""+this.tokenAccess},e.Any=e.AllTokens(),e.AnyIncludingMultilineComments=e.FromTokens(e.Any.GetTokens().concat([3])),e.Keywords=e.FromRange(70,138),e.BinaryOperators=e.FromRange(25,68),e.BinaryKeywordOperators=e.FromTokens([90,91,138,116,124]),e.UnaryPrefixOperators=e.FromTokens([41,42,50,49]),e.UnaryPrefixExpressions=e.FromTokens([8,69,17,19,15,97,92]),e.UnaryPreincrementExpressions=e.FromTokens([69,17,97,92]),e.UnaryPostincrementExpressions=e.FromTokens([69,18,20,92]),e.UnaryPredecrementExpressions=e.FromTokens([69,17,97,92]),e.UnaryPostdecrementExpressions=e.FromTokens([69,18,20,92]),e.Comments=e.FromTokens([2,3]),e.TypeNames=e.FromTokens([69,130,132,120,133,103,117]),e}()
t.TokenRange=o}(n=t.Shared||(t.Shared={}))}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(t){var n=function(){function n(){this.globalRules=new t.Rules}return n.prototype.getRuleName=function(e){return this.globalRules.getRuleName(e)},n.prototype.getRuleByName=function(e){return this.globalRules[e]},n.prototype.getRulesMap=function(){return this.rulesMap},n.prototype.ensureUpToDate=function(n){if(!this.options||!e.compareDataObjects(this.options,n)){var r=this.createActiveRules(n),a=t.RulesMap.create(r)
this.activeRules=r,this.rulesMap=a,this.options=e.clone(n)}},n.prototype.createActiveRules=function(e){var t=this.globalRules.HighPriorityCommonRules.slice(0)
return e.InsertSpaceAfterCommaDelimiter?t.push(this.globalRules.SpaceAfterComma):t.push(this.globalRules.NoSpaceAfterComma),e.InsertSpaceAfterFunctionKeywordForAnonymousFunctions?t.push(this.globalRules.SpaceAfterAnonymousFunctionKeyword):t.push(this.globalRules.NoSpaceAfterAnonymousFunctionKeyword),e.InsertSpaceAfterKeywordsInControlFlowStatements?t.push(this.globalRules.SpaceAfterKeywordInControl):t.push(this.globalRules.NoSpaceAfterKeywordInControl),e.InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis?(t.push(this.globalRules.SpaceAfterOpenParen),t.push(this.globalRules.SpaceBeforeCloseParen),t.push(this.globalRules.NoSpaceBetweenParens)):(t.push(this.globalRules.NoSpaceAfterOpenParen),t.push(this.globalRules.NoSpaceBeforeCloseParen),t.push(this.globalRules.NoSpaceBetweenParens)),e.InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets?(t.push(this.globalRules.SpaceAfterOpenBracket),t.push(this.globalRules.SpaceBeforeCloseBracket),t.push(this.globalRules.NoSpaceBetweenBrackets)):(t.push(this.globalRules.NoSpaceAfterOpenBracket),t.push(this.globalRules.NoSpaceBeforeCloseBracket),t.push(this.globalRules.NoSpaceBetweenBrackets)),e.InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces?(t.push(this.globalRules.SpaceAfterTemplateHeadAndMiddle),t.push(this.globalRules.SpaceBeforeTemplateMiddleAndTail)):(t.push(this.globalRules.NoSpaceAfterTemplateHeadAndMiddle),t.push(this.globalRules.NoSpaceBeforeTemplateMiddleAndTail)),e.InsertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces?(t.push(this.globalRules.SpaceAfterOpenBraceInJsxExpression),t.push(this.globalRules.SpaceBeforeCloseBraceInJsxExpression)):(t.push(this.globalRules.NoSpaceAfterOpenBraceInJsxExpression),t.push(this.globalRules.NoSpaceBeforeCloseBraceInJsxExpression)),e.InsertSpaceAfterSemicolonInForStatements?t.push(this.globalRules.SpaceAfterSemicolonInFor):t.push(this.globalRules.NoSpaceAfterSemicolonInFor),e.InsertSpaceBeforeAndAfterBinaryOperators?(t.push(this.globalRules.SpaceBeforeBinaryOperator),t.push(this.globalRules.SpaceAfterBinaryOperator)):(t.push(this.globalRules.NoSpaceBeforeBinaryOperator),t.push(this.globalRules.NoSpaceAfterBinaryOperator)),e.PlaceOpenBraceOnNewLineForControlBlocks&&t.push(this.globalRules.NewLineBeforeOpenBraceInControl),e.PlaceOpenBraceOnNewLineForFunctions&&(t.push(this.globalRules.NewLineBeforeOpenBraceInFunction),t.push(this.globalRules.NewLineBeforeOpenBraceInTypeScriptDeclWithBlock)),t=t.concat(this.globalRules.LowPriorityCommonRules)},n}()
t.RulesProvider=n}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(t){function n(t,n,r,a){var i=n.getLineAndCharacterOfPosition(t).line
if(0===i)return[]
for(var o=e.getEndLinePosition(i,n);e.isWhiteSpaceSingleLine(n.text.charCodeAt(o));)o--
e.isLineBreak(n.text.charCodeAt(o))&&o--
var s={pos:e.getStartPositionOfLine(i-1,n),end:o+1}
return f(s,n,a,r,2)}function r(e,t,n,r){return s(e,23,t,r,n,3)}function a(e,t,n,r){return s(e,16,t,r,n,4)}function i(e,t,n){var r={pos:0,end:e.text.length}
return f(r,e,n,t,0)}function o(t,n,r,a,i){var o={pos:e.getLineStartPositionForPosition(t,r),end:n}
return f(o,r,i,a,1)}function s(t,n,r,a,i,o){var s=c(t,n,r)
if(!s)return[]
var _={pos:e.getLineStartPositionForPosition(s.getStart(r),r),end:s.end}
return f(_,r,a,i,o)}function c(t,n,r){var a=e.findPrecedingToken(t,r)
if(a&&a.kind===n&&t===a.getEnd()){for(var i=a;i&&i.parent&&i.parent.end===a.end&&!_(i.parent,i);)i=i.parent
return i}}function _(t,n){switch(t.kind){case 221:case 222:return e.rangeContainsRange(t.members,n)
case 225:var r=t.body
return r&&199===r.kind&&e.rangeContainsRange(r.statements,n)
case 256:case 199:case 226:return e.rangeContainsRange(t.statements,n)
case 252:return e.rangeContainsRange(t.block.statements,n)}return!1}function u(t,n){function r(a){var i=e.forEachChild(a,function(r){return e.startEndContainsRange(r.getStart(n),r.end,t)&&r})
if(i){var o=r(i)
if(o)return o}return a}return r(n)}function l(t,n){function r(e){return!1}if(!t.length)return r
var a=t.filter(function(t){return e.rangeOverlapsWithStartEnd(n,t.start,t.start+t.length)}).sort(function(e,t){return e.start-t.start})
if(!a.length)return r
var i=0
return function(t){for(;;){if(i>=a.length)return!1
var n=a[i]
if(t.end<=n.start)return!1
if(e.startEndOverlapsWithStartEnd(t.pos,t.end,n.start,n.start+n.length))return!0
i++}}}function d(t,n,r){var a=t.getStart(r)
if(a===n.pos&&t.end===n.end)return a
var i=e.findPrecedingToken(n.pos,r)
return i?i.end>=n.pos?t.pos:i.end:t.pos}function p(e,n,r){for(var a,i=-1;e;){var o=r.getLineAndCharacterOfPosition(e.getStart(r)).line
if(-1!==i&&o!==i)break
if(t.SmartIndenter.shouldIndentChildNode(e,a))return n.IndentSize
i=o,a=e,e=e.parent}return 0}function f(n,r,a,i,o){function s(n,i,o,s,c){if(e.rangeOverlapsWithStartEnd(s,n,i)||e.rangeContainsStartEnd(s,n,i)){if(-1!==c)return c}else{var _=r.getLineAndCharacterOfPosition(n).line,u=e.getLineStartPositionForPosition(n,r),l=t.SmartIndenter.findFirstNonWhitespaceColumn(u,n,r,a)
if(_!==o||n===l){var d=t.SmartIndenter.getBaseIndentation(a)
return d>l?d:l}}return-1}function c(e,n,i,o,s,c){var _=i,u=t.SmartIndenter.shouldIndentChildNode(e)?a.IndentSize:0
return c===n?(_=n===M?L:s.getIndentation(),u=Math.min(a.IndentSize,s.getDelta(e)+u)):-1===_&&(_=t.SmartIndenter.childStartsOnTheSameLineWithElseInIfStatement(o,e,n,r)?s.getIndentation():s.getIndentation()+s.getDelta(e)),{indentation:_,delta:u}}function _(e){if(e.modifiers&&e.modifiers.length)return e.modifiers[0].kind
switch(e.kind){case 221:return 73
case 222:return 107
case 220:return 87
case 224:return 224
case 149:return 123
case 150:return 131
case 147:if(e.asteriskToken)return 37
case 145:case 142:return e.name.kind}}function f(e,n,r,i){function o(n,r){return t.SmartIndenter.nodeWillIndentChild(e,r,!0)?n:0}return{getIndentationForComment:function(e,t,n){switch(e){case 16:case 20:case 18:return r+o(i,n)}return-1!==t?t:r},getIndentationForToken:function(t,a,s){if(n!==t&&e.decorators&&a===_(e))return r
switch(a){case 15:case 16:case 19:case 20:case 17:case 18:case 80:case 104:case 55:return r
default:return n!==t?r+o(i,s):r}},getIndentation:function(){return r},getDelta:function(e){return o(i,e)},recomputeIndentation:function(n){e.parent&&t.SmartIndenter.shouldIndentChildNode(e.parent,e)&&(n?r+=a.IndentSize:r-=a.IndentSize,i=t.SmartIndenter.shouldIndentChildNode(e)?a.IndentSize:0)}}}function h(t,a,i,o,_,u){function l(a,i,o,_,u,l,d,f){var g=a.getStart(r),m=r.getLineAndCharacterOfPosition(g).line,y=m
a.decorators&&(y=r.getLineAndCharacterOfPosition(e.getNonDecoratorTokenPosOfNode(a,r)).line)
var v=-1
if(d&&(v=s(g,a.end,u,n,i),-1!==v&&(i=v)),!e.rangeOverlapsWithStartEnd(n,a.pos,a.end))return a.end<n.pos&&z.skipToEndOf(a),i
if(0===a.getFullWidth())return i
for(;z.isOnToken();){var k=z.readTokenInfo(t)
if(k.token.end>g)break
p(k,t,_)}if(!z.isOnToken())return i
if(e.isToken(a)){var k=z.readTokenInfo(a)
return e.Debug.assert(k.token.end===a.end),p(k,t,_,a),i}var x=143===a.kind?m:l,D=c(a,m,v,t,_,x)
return h(a,b,m,y,D.indentation,D.delta),b=t,f&&170===o.kind&&-1===i&&(i=D.indentation),i}function d(n,a,i,o){var s=g(a,n),_=m(s),u=o,d=i
if(0!==s)for(;z.isOnToken();){var y=z.readTokenInfo(a)
if(y.token.end>n.pos)break
if(y.token.kind===s){d=r.getLineAndCharacterOfPosition(y.token.pos).line
var h=c(y.token,d,-1,a,o,i)
u=f(a,i,h.indentation,h.delta),p(y,a,u)}else p(y,a,o)}for(var v=-1,k=0;k<n.length;k++){var b=n[k]
v=l(b,v,t,u,d,d,!0,0===k)}if(0!==_&&z.isOnToken()){var y=z.readTokenInfo(a)
y.token.kind===_&&e.rangeContainsRange(a,y.token)&&p(y,a,u)}}function p(t,a,i,o){e.Debug.assert(e.rangeContainsRange(a,t.token))
var s=z.lastTrailingTriviaWasNewLine(),c=!1
t.leadingTrivia&&v(t.leadingTrivia,a,b,i)
var _,u=e.rangeContainsRange(n,t.token),l=r.getLineAndCharacterOfPosition(t.token.pos)
if(u){var d=B(t.token),p=R
if(_=k(t.token,l,a,b,i),d)c=!1
else if(void 0!==_)c=_
else{var f=p&&r.getLineAndCharacterOfPosition(p.end).line
c=s&&l.line!==f}}if(t.trailingTrivia&&v(t.trailingTrivia,a,b,i),c){var g=u&&!B(t.token)?i.getIndentationForToken(l.line,t.token.kind,o):-1,m=!0
if(t.leadingTrivia)for(var y=i.getIndentationForComment(t.token.kind,g,o),h=0,D=t.leadingTrivia;h<D.length;h++){var S=D[h],T=e.rangeContainsRange(n,S)
switch(S.kind){case 3:T&&C(S,y,!m),m=!1
break
case 2:m&&T&&x(S.pos,y,!1),m=!1
break
case 4:m=!0}}-1!==g&&m&&(x(t.token.pos,g,_),M=l.line,L=g)}z.advance(),b=a}if(e.rangeOverlapsWithStartEnd(n,t.getStart(r),t.getEnd())){var y=f(t,i,_,u),b=a
for(e.forEachChild(t,function(e){l(e,-1,t,y,i,o,!1)},function(e){d(e,t,i,y)});z.isOnToken();){var D=z.readTokenInfo(t)
if(D.token.end>t.end)break
p(D,t,y)}}}function v(t,a,i,o){for(var s=0,c=t;s<c.length;s++){var _=c[s]
if(e.isComment(_.kind)&&e.rangeContainsRange(n,_)){var u=r.getLineAndCharacterOfPosition(_.pos)
k(_,u,a,i,o)}}}function k(e,t,a,i,o){var s,c=B(e)
if(!c&&!O)if(R)s=b(e,t.line,a,R,I,F,i,o)
else{var _=r.getLineAndCharacterOfPosition(n.pos)
S(_.line,t.line)}return R=e,F=a,I=t.line,O=c,s}function b(e,t,n,a,o,s,c,_){J.updateContext(a,s,e,n,c)
var u,l,d=i.getRulesMap().GetRule(J)
return d?(P(d,a,o,e,t),10&d.Operation.Action&&t!==o?(l=!1,n.getStart(r)===e.pos&&_.recomputeIndentation(!1)):4&d.Operation.Action&&t===o&&(l=!0,n.getStart(r)===e.pos&&_.recomputeIndentation(!0)),u=!(8&d.Operation.Action)&&1!==d.Flag):u=!0,t!==o&&u&&S(o,t,a),l}function x(t,n,i){var o=y(n,a)
if(i)N(t,0,o)
else{var s=r.getLineAndCharacterOfPosition(t),c=e.getStartPositionOfLine(s.line,r);(n!==s.character||D(o,c))&&N(c,s.character,o)}}function D(e,t){return e!==r.text.substr(t,e.length)}function C(n,i,o){var s,c=r.getLineAndCharacterOfPosition(n.pos).line,_=r.getLineAndCharacterOfPosition(n.end).line
if(c===_)return void(o||x(n.pos,i,!1))
s=[]
for(var u=n.pos,l=c;_>l;l++){var d=e.getEndLinePosition(l,r)
s.push({pos:u,end:d}),u=e.getStartPositionOfLine(l+1,r)}s.push({pos:u,end:n.end})
var p=e.getStartPositionOfLine(c,r),f=t.SmartIndenter.findFirstNonWhitespaceCharacterAndColumn(p,s[0].pos,r,a)
if(i!==f.column){var g=0
o&&(g=1,c++)
for(var m=i-f.column,h=g,v=s.length;v>h;h++,c++){var k=e.getStartPositionOfLine(c,r),b=0===h?f:t.SmartIndenter.findFirstNonWhitespaceCharacterAndColumn(s[h].pos,s[h].end,r,a),D=b.column+m
if(D>0){var C=y(D,a)
N(k,b.character,C)}else A(k,b.character)}}}function S(t,n,a){for(var i=t;n>i;i++){var o=e.getStartPositionOfLine(i,r),s=e.getEndLinePosition(i,r)
if(!(a&&(e.isComment(a.kind)||e.isStringOrRegularExpressionOrTemplateLiteral(a.kind))&&a.pos<=s&&a.end>s)){var c=T(o,s);-1!==c&&(e.Debug.assert(c===o||!e.isWhiteSpaceSingleLine(r.text.charCodeAt(c-1))),A(c,s+1-c))}}}function T(t,n){for(var a=n;a>=t&&e.isWhiteSpaceSingleLine(r.text.charCodeAt(a));)a--
return a!==n?a+1:-1}function E(){var e=R?R.end:n.pos,t=r.getLineAndCharacterOfPosition(e).line,a=r.getLineAndCharacterOfPosition(n.end).line
S(t,a+1,R)}function w(t,n,r){return{span:e.createTextSpan(t,n),newText:r}}function A(e,t){t&&U.push(w(e,t,""))}function N(e,t,n){(t||n)&&U.push(w(e,t,n))}function P(e,t,n,i,o){switch(e.Operation.Action){case 1:return
case 8:t.end!==i.pos&&A(t.end,i.pos-t.end)
break
case 4:if(1!==e.Flag&&n!==o)return
var s=o-n
1!==s&&N(t.end,i.pos-t.end,a.NewLineCharacter)
break
case 2:if(1!==e.Flag&&n!==o)return
var c=i.pos-t.end;(1!==c||32!==r.text.charCodeAt(t.end))&&N(t.end,i.pos-t.end," ")}}var O,R,F,I,M,L,B=l(r.parseDiagnostics,n),J=new t.FormattingContext(r,o),K=u(n,r),z=t.getFormattingScanner(r,d(K,n,r),n.end),j=t.SmartIndenter.getIndentationForNode(K,n,r,a),U=[]
if(z.advance(),z.isOnToken()){var q=r.getLineAndCharacterOfPosition(K.getStart(r)).line,W=q
K.decorators&&(W=r.getLineAndCharacterOfPosition(e.getNonDecoratorTokenPosOfNode(K,r)).line)
var V=p(K,a,r)
h(K,K,q,W,j,V)}if(!z.isOnToken()){var H=z.getCurrentLeadingTrivia()
H&&(v(H,K,K,void 0),E())}return z.close(),U}function g(e,t){switch(e.kind){case 148:case 220:case 179:case 147:case 146:case 180:if(e.typeParameters===t)return 25
if(e.parameters===t)return 17
break
case 174:case 175:if(e.typeArguments===t)return 25
if(e.arguments===t)return 17
break
case 155:if(e.typeArguments===t)return 25}return 0}function m(e){switch(e){case 17:return 18
case 25:return 27}return 0}function y(e,t){function n(e,t){for(var n="",r=0;t>r;r++)n+=e
return n}var r=!v||v.tabSize!==t.TabSize||v.indentSize!==t.IndentSize
if(r&&(v={tabSize:t.TabSize,indentSize:t.IndentSize},k=b=void 0),t.ConvertTabsToSpaces){var a=void 0,i=Math.floor(e/t.IndentSize),o=e%t.IndentSize
return b||(b=[]),void 0===b[i]?(a=n(" ",t.IndentSize*i),b[i]=a):a=b[i],o?a+n(" ",o):a}var s=Math.floor(e/t.TabSize),c=e-s*t.TabSize,_=void 0
return k||(k=[]),void 0===k[s]?k[s]=_=n("	",s):_=k[s],c?_+n(" ",c):_}var h
!function(e){e[e.Unknown=-1]="Unknown"}(h||(h={})),t.formatOnEnter=n,t.formatOnSemicolon=r,t.formatOnClosingCurly=a,t.formatDocument=i,t.formatSelection=o
var v,k,b
t.getIndentationString=y}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){var t
!function(t){var n
!function(t){function n(n,a,o){if(n>a.text.length)return r(o)
if(o.IndentStyle===e.IndentStyle.None)return 0
var c=e.findPrecedingToken(n,a)
if(!c)return r(o)
var l=e.isStringOrRegularExpressionOrTemplateLiteral(c.kind)
if(l&&c.getStart(a)<=n&&c.end>n)return 0
var d=a.getLineAndCharacterOfPosition(n).line
if(o.IndentStyle===e.IndentStyle.Block){for(var g=n;g>0;){var m=a.text.charCodeAt(g)
if(!e.isWhiteSpace(m))break
g--}var y=e.getLineStartPositionForPosition(g,a)
return t.findFirstNonWhitespaceColumn(y,g,a,o)}if(24===c.kind&&187!==c.parent.kind){var h=s(c,a,o)
if(-1!==h)return h}for(var v,k,x,D=c;D;){if(e.positionBelongsToNode(D,n,a)&&b(D,v)){k=u(D,a),x=_(c,D,d,a)?0:d!==k.line?o.IndentSize:0
break}var h=p(D,a,o)
if(-1!==h)return h
if(h=f(D,a,o),-1!==h)return h+o.IndentSize
v=D,D=D.parent}return D?i(D,k,void 0,x,a,o):r(o)}function r(e){return e.BaseIndentSize||0}function a(e,t,n,r){var a=n.getLineAndCharacterOfPosition(e.getStart(n))
return i(e,a,t,0,n,r)}function i(e,t,n,a,i,s){for(var _,u=e.parent;u;){var d=!0
if(n){var g=e.getStart(i)
d=g<n.pos||g>n.end}if(d){var m=p(e,i,s)
if(-1!==m)return m+a}_=o(u,e,i)
var y=_.line===t.line||l(u,e,t.line,i)
if(d){var m=c(e,u,t,y,i,s)
if(-1!==m)return m+a
if(m=f(e,i,s),-1!==m)return m+a}b(u,e)&&!y&&(a+=s.IndentSize),e=u,t=_,u=e.parent}return a+r(s)}function o(e,t,n){var r=d(t,n)
return r?n.getLineAndCharacterOfPosition(r.pos):n.getLineAndCharacterOfPosition(e.getStart(n))}function s(t,n,r){var a=e.findListItemInfo(t)
return a&&a.listItemIndex>0?g(a.list.getChildren(),a.listItemIndex-1,n,r):-1}function c(t,n,r,a,i,o){var s=(e.isDeclaration(t)||e.isStatement(t))&&(256===n.kind||!a)
return s?m(r,i,o):-1}function _(t,n,r,a){var i=e.findNextToken(t,n)
if(!i)return!1
if(15===i.kind)return!0
if(16===i.kind){var o=u(i,a).line
return r===o}return!1}function u(e,t){return t.getLineAndCharacterOfPosition(e.getStart(t))}function l(t,n,r,a){if(203===t.kind&&t.elseStatement===n){var i=e.findChildOfKind(t,80,a)
e.Debug.assert(void 0!==i)
var o=u(i,a).line
return o===r}return!1}function d(t,n){if(t.parent)switch(t.parent.kind){case 155:if(t.parent.typeArguments&&e.rangeContainsStartEnd(t.parent.typeArguments,t.getStart(n),t.getEnd()))return t.parent.typeArguments
break
case 171:return t.parent.properties
case 170:return t.parent.elements
case 220:case 179:case 180:case 147:case 146:case 151:case 152:var r=t.getStart(n)
if(t.parent.typeParameters&&e.rangeContainsStartEnd(t.parent.typeParameters,r,t.getEnd()))return t.parent.typeParameters
if(e.rangeContainsStartEnd(t.parent.parameters,r,t.getEnd()))return t.parent.parameters
break
case 175:case 174:var r=t.getStart(n)
if(t.parent.typeArguments&&e.rangeContainsStartEnd(t.parent.typeArguments,r,t.getEnd()))return t.parent.typeArguments
if(t.parent.arguments&&e.rangeContainsStartEnd(t.parent.arguments,r,t.getEnd()))return t.parent.arguments}}function p(t,n,r){function a(a){var i=e.indexOf(a,t)
return-1!==i?g(a,i,n,r):-1}var i=d(t,n)
return i?a(i):-1}function f(e,t,n){function r(e){for(;;)switch(e.kind){case 174:case 175:case 172:case 173:e=e.expression
break
default:return e}}if(18===e.kind)return-1
if(e.parent&&(174===e.parent.kind||175===e.parent.kind)&&e.parent.expression!==e){var a=e.parent.expression,i=r(a)
if(a===i)return-1
var o=t.getLineAndCharacterOfPosition(a.end),s=t.getLineAndCharacterOfPosition(i.end)
return o.line===s.line?-1:m(o,t,n)}return-1}function g(t,n,r,a){e.Debug.assert(n>=0&&n<t.length)
for(var i=t[n],o=u(i,r),s=n-1;s>=0;s--)if(24!==t[s].kind){var c=r.getLineAndCharacterOfPosition(t[s].end).line
if(c!==o.line)return m(o,r,a)
o=u(t[s],r)}return-1}function m(e,t,n){var r=t.getPositionOfLineAndCharacter(e.line,0)
return h(r,r+e.character,t,n)}function y(t,n,r,a){for(var i=0,o=0,s=t;n>s;s++){var c=r.text.charCodeAt(s)
if(!e.isWhiteSpaceSingleLine(c))break
9===c?o+=a.TabSize+o%a.TabSize:o++,i++}return{column:o,character:i}}function h(e,t,n,r){return y(e,t,n,r).column}function v(e){switch(e){case 202:case 221:case 192:case 222:case 224:case 223:case 170:case 199:case 226:case 171:case 159:case 161:case 227:case 250:case 249:case 178:case 172:case 174:case 175:case 200:case 218:case 235:case 211:case 188:case 168:case 167:case 243:case 242:case 248:case 146:case 151:case 152:case 142:case 156:case 157:case 164:case 176:case 184:case 237:case 233:case 238:case 234:return!0}return!1}function k(e,t,n){var r=t?t.kind:0
switch(e.kind){case 204:case 205:case 207:case 208:case 206:case 203:case 220:case 179:case 147:case 180:case 148:case 149:case 150:return 199!==r
case 236:return 237!==r
case 230:return 231!==r||t.namedBindings&&233!==t.namedBindings.kind
case 241:return 245!==r}return n}function b(e,t){return v(e.kind)||k(e,t,!1)}var x
!function(e){e[e.Unknown=-1]="Unknown"}(x||(x={})),t.getIndentation=n,t.getBaseIndentation=r,t.getIndentationForNode=a,t.childStartsOnTheSameLineWithElseInIfStatement=l,t.findFirstNonWhitespaceCharacterAndColumn=y,t.findFirstNonWhitespaceColumn=h,t.nodeWillIndentChild=k,t.shouldIndentChildNode=b}(n=t.SmartIndenter||(t.SmartIndenter={}))}(t=e.formatting||(e.formatting={}))}(ts||(ts={}))
var ts
!function(e){function t(e,t,n,r){var a=e>=139?new q(e,t,n):69===e?new H(e,t,n):new V(e,t,n)
return a.parent=r,a}function n(t,n,r){function a(){function a(t,n,r){var a=i(t,n)
e.forEach(a,function(t){var a=r(t.pos,t.end,n)
a&&e.addRange(f,a)})}function i(t,n){return e.map(e.getJsDocComments(t,n),function(e){return{pos:e.pos+2,end:e.end-2}})}function o(t,n,r,a){for(void 0!==a&&(n=Math.min(n,t+a));n>t;t++){var i=r.text.charCodeAt(t)
if(!e.isWhiteSpaceSingleLine(i))return t}return n}function s(t,n,r){for(;n>t&&e.isLineBreak(r.text.charCodeAt(t));)t++
return t}function c(t,n,r,a){return t+a.length<n&&r.text.substr(t,a.length)===a&&e.isWhiteSpace(r.text.charCodeAt(t+a.length))}function _(e,t,n){return c(e,t,n,p)}function u(t,n,r){for(;r;)r--,t.push(e.textPart(""))
t.push(e.textPart(n))}function l(t,n,r){for(var a,i=[],c=0,l=!1;n>t;){var d=""
if(t=o(t,n,r),n>t&&42===r.text.charCodeAt(t)){var f=t+1
t=o(t+1,n,r,a),void 0===a&&n>t&&!e.isLineBreak(r.text.charCodeAt(t))&&(a=t-f)}else void 0===a&&(a=0)
for(;n>t&&!e.isLineBreak(r.text.charCodeAt(t));){var g=r.text.charAt(t)
if("@"===g){if(_(t,n,r)){l=!0,t+=p.length
continue}l=!1}l||(d+=g),t++}t=s(t,n,r),d?(u(i,d,c),c=0):!l&&i.length&&c++}return i}function d(t,r,a){function i(t){for(;r>t&&e.isWhiteSpaceSingleLine(a.text.charCodeAt(t));)t++
return t}function l(e){if(t=s(t,r,a),!(t>=r)){void 0===d&&(d=a.getLineAndCharacterOfPosition(e).character)
var n=t
if(t=o(t,r,a,d),!(t>=r)){var i=t-n
if(d>i){var c=a.text.charCodeAt(t)
42===c&&(t=o(t+1,r,a,d-i-1))}}}}for(var d,f=[];r>t;){if(_(t,r,a)){var g=0,m=!1
if(t=i(t+p.length),t>=r)break
if(123===a.text.charCodeAt(t)){t++
for(var y=1;r>t;t++){var h=a.text.charCodeAt(t)
if(123!==h){if(125!==h){if(64===h)break}else if(y--,0===y){t++
break}}else y++}if(t=i(t),t>=r)break}if(c(t,r,a,n)){if(t=i(t+n.length),t>=r)break
for(var v="",k=t;r>t;){var b=a.text.charCodeAt(t)
if(e.isLineBreak(b))v?(u(f,v,g),v="",g=0,m=!0):m&&g++,l(k)
else{if(64===b)break
v+=a.text.charAt(t),t++}}v&&u(f,v,g),d=void 0}if(64===a.text.charCodeAt(t))continue}t++}return f}var p="@param",f=[]
return e.forEach(t,function(n,i){if(e.indexOf(t,n)===i){var o=e.getSourceFileOfNode(n)
if(r&&142===n.kind&&(179!==n.parent.kind&&180!==n.parent.kind||218!==n.parent.parent.kind||a(n.parent.parent.parent,o,d),a(n.parent,o,d)),225===n.kind&&n.body&&225===n.body.kind)return
for(179!==n.kind&&180!==n.kind||218!==n.parent.kind||a(n.parent.parent,o,l);225===n.kind&&225===n.parent.kind;)n=n.parent
if(a(218===n.kind?n.parent.parent:n,o,l),218===n.kind){var s=n.initializer
!s||179!==s.kind&&180!==s.kind||a(s,o,l)}}}),f}var i=[],o=a()
return e.forEach(o,function(t){i.length&&i.push(e.lineBreakPart()),i.push(t)}),i}function r(t){return t?e.map(t,function(e){return e.text}).join(""):""}function a(t){return t.parent?!1:e.forEach(t.declarations,function(t){if(179===t.kind)return!0
if(218!==t.kind&&220!==t.kind)return!1
for(var n=t.parent;!e.isFunctionBlock(n);n=n.parent)if(256===n.kind||226===n.kind)return!1
return!0})}function i(){return{target:1,jsx:1}}function o(e,t,n){e.version=n,e.scriptSnapshot=t}function s(t,n){ie=ie||e.filter(e.optionDeclarations,function(t){return"object"==typeof t.type&&!e.forEachProperty(t.type,function(e){return"number"!=typeof e})}),t=e.clone(t)
for(var r=function(r){if(!e.hasProperty(t,r.name))return"continue"
var a=t[r.name]
"string"==typeof a?t[r.name]=e.parseCustomTypeOption(r,a,n):e.forEachProperty(r.type,function(e){return e===a})||n.push(e.createCompilerDiagnosticForInvalidCustomType(r))},a=0,i=ie;a<i.length;a++){var o=i[a]
r(o)}return t}function c(t,n){var r=[],a=n.compilerOptions?s(n.compilerOptions,r):i()
a.isolatedModules=!0,a.suppressOutputPathCheck=!0,a.allowNonTsExtensions=!0,a.noLib=!0,a.lib=void 0,a.types=void 0,a.noEmit=void 0,a.noEmitOnError=void 0,a.paths=void 0,a.rootDirs=void 0,a.declaration=void 0,a.declarationDir=void 0,a.out=void 0,a.outFile=void 0,a.noResolve=!0
var o=n.fileName||(a.jsx?"module.tsx":"module.ts"),c=e.createSourceFile(o,t,a.target)
n.moduleName&&(c.moduleName=n.moduleName),n.renamedDependencies&&(c.renamedDependencies=e.createMap(n.renamedDependencies))
var _,u,l=e.getNewLineCharacter(a),d={getSourceFile:function(t,n){return t===e.normalizePath(o)?c:void 0},writeFile:function(t,n,r){e.fileExtensionIs(t,".map")?(e.Debug.assert(void 0===u,"Unexpected multiple source map outputs for the file '"+t+"'"),u=n):(e.Debug.assert(void 0===_,"Unexpected multiple outputs for the file: '"+t+"'"),_=n)},getDefaultLibFileName:function(){return"lib.d.ts"},useCaseSensitiveFileNames:function(){return!1},getCanonicalFileName:function(e){return e},getCurrentDirectory:function(){return""},getNewLine:function(){return l},fileExists:function(e){return e===o},readFile:function(e){return""},directoryExists:function(e){return!0},getDirectories:function(e){return[]}},p=e.createProgram([o],a,d)
return n.reportDiagnostics&&(e.addRange(r,p.getSyntacticDiagnostics(c)),e.addRange(r,p.getOptionsDiagnostics())),p.emit(),e.Debug.assert(void 0!==_,"Output generation failed"),{outputText:_,diagnostics:r,sourceMapText:u}}function _(t,n,r,a,i){var o=c(t,{compilerOptions:n,fileName:r,reportDiagnostics:!!a,moduleName:i})
return e.addRange(a,o.diagnostics),o.outputText}function u(t,n,r,a,i,s){var c=n.getText(0,n.getLength()),_=e.createSourceFile(t,c,r,i,s)
return o(_,n,a),_}function l(t,n,r,a,i){if(a&&r!==t.version&&!e.disableIncrementalParsing){var s=void 0,c=0!==a.span.start?t.text.substr(0,a.span.start):"",_=e.textSpanEnd(a.span)!==t.text.length?t.text.substr(e.textSpanEnd(a.span)):""
if(0===a.newLength)s=c&&_?c+_:c||_
else{var l=n.getText(a.span.start,a.span.start+a.newLength)
s=c&&_?c+l+_:c?c+l:l+_}var d=e.updateSourceFile(t,s,a,i)
return o(d,n,r),d.nameTable=void 0,t!==d&&t.scriptSnapshot&&(t.scriptSnapshot.dispose&&t.scriptSnapshot.dispose(),t.scriptSnapshot=void 0),d}return u(t.fileName,n,t.languageVersion,r,!0,t.scriptKind)}function d(t,n){function r(e){return"_"+e.target+"|"+e.module+"|"+e.noResolve+"|"+e.jsx+"|"+e.allowJs+"|"+e.baseUrl+"|"+JSON.stringify(e.typeRoots)+"|"+JSON.stringify(e.rootDirs)+"|"+JSON.stringify(e.paths)}function a(t,n){var r=g[t]
return!r&&n&&(g[t]=r=e.createFileMap()),r}function i(){var e=Object.keys(g).filter(function(e){return e&&"_"===e.charAt(0)}).map(function(e){var t=g[e],n=[]
return t.forEachValue(function(e,t){n.push({name:e,refCount:t.languageServiceRefCount,references:t.owners.slice(0)})}),n.sort(function(e,t){return t.refCount-e.refCount}),{bucket:e,sourceFiles:n}})
return JSON.stringify(e,void 0,2)}function o(t,a,i,o,c){var _=e.toPath(t,n,m),u=r(a)
return s(t,_,a,u,i,o,c)}function s(e,t,n,r,a,i,o){return d(e,t,n,r,a,i,!0,o)}function c(t,a,i,o,s){var c=e.toPath(t,n,m),u=r(a)
return _(t,c,a,u,i,o,s)}function _(e,t,n,r,a,i,o){return d(e,t,n,r,a,i,!1,o)}function d(t,n,r,i,o,s,c,_){var d=a(i,!0),p=d.get(n)
if(p)p.sourceFile.version!==s&&(p.sourceFile=l(p.sourceFile,o,s,o.getChangeRange(p.sourceFile.scriptSnapshot)))
else{e.Debug.assert(c,"How could we be trying to update a document that the registry doesn't have?")
var f=u(t,o,r.target,s,!1,_)
p={sourceFile:f,languageServiceRefCount:0,owners:[]},d.set(n,p)}return c&&p.languageServiceRefCount++,p.sourceFile}function p(t,a){var i=e.toPath(t,n,m),o=r(a)
return f(i,o)}function f(t,n){var r=a(n,!1)
e.Debug.assert(void 0!==r)
var i=r.get(t)
i.languageServiceRefCount--,e.Debug.assert(i.languageServiceRefCount>=0),0===i.languageServiceRefCount&&r.remove(t)}void 0===n&&(n="")
var g=e.createMap(),m=e.createGetCanonicalFileName(!!t)
return{acquireDocument:o,acquireDocumentWithKey:s,updateDocument:c,updateDocumentWithKey:_,releaseDocument:p,releaseDocumentWithKey:f,reportStats:i,getKeyForCompilationSettings:r}}function p(t,n,r){function a(){var e=z.scan()
return 15===e?b++:16===e&&b--,e}function i(){var n=e.getLeadingCommentRanges(t,0)
e.forEach(n,function(n){var r=t.substring(n.pos,n.end),a=e.getFileReferenceFromReferencePath(r,n)
if(a){k=a.isNoDefaultLib
var i=a.fileReference
if(i){var o=a.isTypeReferenceDirective?h:y
o.push(i)}}})}function o(){var e=z.getTokenValue(),t=z.getTokenPos()
return{fileName:e,pos:t,end:t+e.length}}function s(){m||(m=[]),m.push({ref:o(),depth:b})}function c(){v.push(o()),_()}function _(){0===b&&(x=!0)}function u(){var e=z.getToken()
return 122===e?(e=a(),125===e&&(e=a(),9===e&&s()),!0):!1}function l(){var t=z.getToken()
if(89===t){if(t=a(),9===t)return c(),!0
if(69===t||e.isKeyword(t))if(t=a(),136===t){if(t=a(),9===t)return c(),!0}else if(56===t){if(p(!0))return!0}else{if(24!==t)return!0
t=a()}if(15===t){for(t=a();16!==t&&1!==t;)t=a()
16===t&&(t=a(),136===t&&(t=a(),9===t&&c()))}else 37===t&&(t=a(),116===t&&(t=a(),(69===t||e.isKeyword(t))&&(t=a(),136===t&&(t=a(),9===t&&c()))))
return!0}return!1}function d(){var t=z.getToken()
if(82===t){if(_(),t=a(),15===t){for(t=a();16!==t&&1!==t;)t=a()
16===t&&(t=a(),136===t&&(t=a(),9===t&&c()))}else if(37===t)t=a(),136===t&&(t=a(),9===t&&c())
else if(89===t&&(t=a(),(69===t||e.isKeyword(t))&&(t=a(),56===t&&p(!0))))return!0
return!0}return!1}function p(e){var t=e?a():z.getToken()
return 129===t?(t=a(),17===t&&(t=a(),9===t&&c()),!0):!1}function f(){var e=z.getToken()
if(69===e&&"define"===z.getTokenValue()){if(e=a(),17!==e)return!0
if(e=a(),9===e){if(e=a(),24!==e)return!0
e=a()}if(19!==e)return!0
e=a()
for(var t=0;20!==e&&1!==e;)9===e&&(c(),t++),e=a()
return!0}return!1}function g(){for(z.setText(t),a();;){if(1===z.getToken())break
u()||l()||d()||r&&(p(!1)||f())||a()}z.setText(void 0)}void 0===n&&(n=!0),void 0===r&&(r=!1)
var m,y=[],h=[],v=[],k=!1,b=0,x=!1
if(n&&g(),i(),x){if(m)for(var D=0,C=m;D<C.length;D++){var S=C[D]
v.push(S.ref)}return{referencedFiles:y,typeReferenceDirectives:h,importedFiles:v,isLibFile:k,ambientExternalModules:void 0}}var T=void 0
if(m)for(var E=0,w=m;E<w.length;E++){var S=w[E]
0===S.depth?(T||(T=[]),T.push(S.ref.fileName)):v.push(S.ref)}return{referencedFiles:y,typeReferenceDirectives:h,importedFiles:v,isLibFile:k,ambientExternalModules:T}}function f(e,t){for(;e;){if(214===e.kind&&e.label.text===t)return e.label
e=e.parent}}function g(e){return 69===e.kind&&(210===e.parent.kind||209===e.parent.kind)&&e.parent.label===e}function m(e){return 69===e.kind&&214===e.parent.kind&&e.parent.label===e}function y(e,t){for(var n=e.parent;214===n.kind;n=n.parent)if(n.label.text===t)return!0
return!1}function h(e){return m(e)||g(e)}function v(e){return 139===e.parent.kind&&e.parent.right===e}function k(e){return e&&e.parent&&172===e.parent.kind&&e.parent.name===e}function b(e){return k(e)&&(e=e.parent),e&&e.parent&&174===e.parent.kind&&e.parent.expression===e}function x(e){return k(e)&&(e=e.parent),e&&e.parent&&175===e.parent.kind&&e.parent.expression===e}function D(e){return 225===e.parent.kind&&e.parent.name===e}function C(t){return 69===t.kind&&e.isFunctionLike(t.parent)&&t.parent.name===t}function S(e){switch(e.kind){case 253:case 254:case 147:case 149:case 150:return!0}return!1}function T(e){switch(e.kind){case 9:case 8:if(140===e.parent.kind)return S(e.parent.parent)?e.parent.parent:void 0
case 69:return S(e.parent)&&e.parent.name===e?e.parent:void 0}}function E(e){if(9===e.kind||8===e.kind)switch(e.parent.kind){case 145:case 144:case 253:case 255:case 147:case 146:case 149:case 150:case 225:return e.parent.name===e
case 173:return e.parent.argumentExpression===e
case 140:return!0}return!1}function w(t){return 9===t.kind?D(t)||e.isExternalModuleImportEqualsDeclaration(t.parent.parent)&&e.getExternalModuleImportEqualsDeclarationExpression(t.parent.parent)===t:!1}function A(t,n,r){function a(n){return e.forEach(n,function(e){if(e.pos<r&&r<e.end)return!0
if(r===e.end){var n=t.text,a=e.end-e.pos
return 2>=a||47===n.charCodeAt(e.pos+1)?!0:!(47===n.charCodeAt(e.end-1)&&42===n.charCodeAt(e.end-2))}return!1})}return r<=n.getStart(t)&&(a(e.getTrailingCommentRanges(t.text,n.getFullStart()))||a(e.getLeadingCommentRanges(t.text,n.getFullStart())))}function N(e){for(;;){if(e=e.parent,!e)return
switch(e.kind){case 256:case 147:case 146:case 220:case 179:case 149:case 150:case 221:case 222:case 224:case 225:return e}}}function P(t){function n(t){return e.isConst(t)?te.constElement:e.isLet(t)?te.letElement:te.variableElement}switch(t.kind){case 256:return e.isExternalModule(t)?te.moduleElement:te.scriptElement
case 225:return te.moduleElement
case 221:case 192:return te.classElement
case 222:return te.interfaceElement
case 223:return te.typeElement
case 224:return te.enumElement
case 218:return n(t)
case 169:return n(e.getRootDeclaration(t))
case 180:case 220:case 179:return te.functionElement
case 149:return te.memberGetAccessorElement
case 150:return te.memberSetAccessorElement
case 147:case 146:return te.memberFunctionElement
case 145:case 144:return te.memberVariableElement
case 153:return te.indexSignatureElement
case 152:return te.constructSignatureElement
case 151:return te.callSignatureElement
case 148:return te.constructorImplementationElement
case 141:return te.typeParameterElement
case 255:return te.enumMemberElement
case 142:return 92&t.flags?te.memberVariableElement:te.parameterElement
case 229:case 234:case 231:case 238:case 232:return te.alias
case 279:return te.typeElement
default:return te.unknown}}function O(t,n){function r(e){t.log&&t.log(e)}function i(e){var t=Ze.getSourceFile(e)
if(!t)throw Error("Could not find file: '"+e+"'.")
return t}function o(t){return $e||($e=new e.formatting.RulesProvider),$e.ensureUpToDate(t),$e}function s(){function r(t){return a(t,e.toPath(t,at,it))}function a(t,r){e.Debug.assert(void 0!==c)
var a=c.getOrCreateEntryByPath(t,r)
if(a){if(!l){var i=Ze&&Ze.getSourceFileByPath(r)
if(i)return e.Debug.assert(a.scriptKind===i.scriptKind,"Registered script kind ("+i.scriptKind+") should match new script kind ("+a.scriptKind+") for file: "+r),n.updateDocumentWithKey(t,r,u,p,a.scriptSnapshot,a.version,a.scriptKind)}return n.acquireDocumentWithKey(t,r,u,p,a.scriptSnapshot,a.version,a.scriptKind)}}function i(t){if(!t)return!1
var n=t.path||e.toPath(t.fileName,at,it)
return t.version===c.getVersion(n)}function o(){if(!Ze)return!1
var t=c.getRootFileNames()
if(Ze.getSourceFiles().length!==t.length)return!1
for(var n=0,r=t;n<r.length;n++){var a=r[n]
if(!i(Ze.getSourceFile(a)))return!1}return e.compareDataObjects(Ze.getCompilerOptions(),c.compilationSettings())}if(t.getProjectVersion){var s=t.getProjectVersion()
if(s){if(et===s)return
et=s}}var c=new oe(t,it)
if(!o()){var _=Ze&&Ze.getCompilerOptions(),u=c.compilationSettings(),l=_&&(_.target!==u.target||_.module!==u.module||_.moduleResolution!==u.moduleResolution||_.noResolve!==u.noResolve||_.jsx!==u.jsx||_.allowJs!==u.allowJs||_.disableSizeLimit!==_.disableSizeLimit||_.baseUrl!==u.baseUrl||!e.equalOwnProperties(_.paths,u.paths)),d={getSourceFile:r,getSourceFileByPath:a,getCancellationToken:function(){return rt},getCanonicalFileName:it,useCaseSensitiveFileNames:function(){return nt},getNewLine:function(){return e.getNewLineOrDefaultFromHost(t)},getDefaultLibFileName:function(e){return t.getDefaultLibFileName(e)},writeFile:function(e,t,n){},getCurrentDirectory:function(){return at},fileExists:function(e){return void 0!==c.getOrCreateEntry(e)},readFile:function(e){var t=c.getOrCreateEntry(e)
return t&&t.scriptSnapshot.getText(0,t.scriptSnapshot.getLength())},directoryExists:function(n){return e.directoryProbablyExists(n,t)},getDirectories:function(e){return t.getDirectories?t.getDirectories(e):[]}}
t.trace&&(d.trace=function(e){return t.trace(e)}),t.resolveModuleNames&&(d.resolveModuleNames=function(e,n){return t.resolveModuleNames(e,n)}),t.resolveTypeReferenceDirectives&&(d.resolveTypeReferenceDirectives=function(e,n){return t.resolveTypeReferenceDirectives(e,n)})
var p=n.getKeyForCompilationSettings(u),f=e.createProgram(c.getRootFileNames(),u,d,Ze)
if(Ze)for(var g=Ze.getSourceFiles(),m=n.getKeyForCompilationSettings(_),y=0,h=g;y<h.length;y++){var v=h[y];(!f.getSourceFile(v.fileName)||l)&&n.releaseDocumentWithKey(v.path,m)}c=void 0,Ze=f,Ze.getTypeChecker()}}function c(){return s(),Ze}function _(){}function u(){Ze&&e.forEach(Ze.getSourceFiles(),function(e){return n.releaseDocument(e.fileName,Ze.getCompilerOptions())})}function l(e){return s(),Ze.getSyntacticDiagnostics(i(e),rt)}function p(t){s()
var n=i(t),r=Ze.getSemanticDiagnostics(n,rt)
if(!Ze.getCompilerOptions().declaration)return r
var a=Ze.getDeclarationDiagnostics(n,rt)
return e.concatenate(r,a)}function m(){return s(),Ze.getOptionsDiagnostics(rt).concat(Ze.getGlobalDiagnostics(rt))}function S(t,n,r,a){var i=e.getDeclaredName(Ze.getTypeChecker(),t,a)
if(i){var o=i.charCodeAt(0)
if(1920&t.flags&&(39===o||34===o))return}return P(i,n,r)}function P(t,n,r){return t&&(t=e.stripQuotes(t),t&&(!r||e.isIdentifier(t,n)))?t:void 0}function O(t,n){function a(){if(V=!0,H=!1,69===B.kind||139===B.kind||172===B.kind){var t=C.getSymbolAtLocation(B)
if(t&&8388608&t.flags&&(t=C.getAliasedSymbol(t)),t&&1952&t.flags){var n=C.getExportsOfModule(t)
e.forEach(n,function(e){C.isValidPropertyAccess(B.parent,e.name)&&X.push(e)})}}var r=C.getTypeAtLocation(B)
o(r)}function o(e){if(e){for(var t=0,n=e.getApparentProperties();t<n.length;t++){var r=n[t]
C.isValidPropertyAccess(B.parent,r.name)&&X.push(r)}if(T&&524288&e.flags)for(var a=e,i=0,s=a.types;i<s.length;i++){var c=s[i]
o(c)}}}function s(){var t,r,a
if(t=g(M))return p(t)
if(r=m(M))return f(r)
if(a=y(M)){var i=void 0
if((242===a.kind||243===a.kind)&&(i=C.getJsxElementAttributesType(a)))return X=D(C.getPropertiesOfType(i),a.attributes),V=!0,H=!1,!0}V=!1,H=l(M),I!==M&&e.Debug.assert(!!I,"Expected 'contextToken' to be defined when different from 'previousToken'.")
var o=I!==M?I.getStart():n,s=c(M,o,S)||S,_=9289727
return X=C.getSymbolsInScope(s,_),!0}function c(t,n,r){for(var a=t;a&&!e.positionBelongsToNode(a,n,r);)a=a.parent
return a}function _(t){var n=e.timestamp(),a=d(t)||v(t)||k(t)||u(t)
return r("getCompletionsAtPosition: isCompletionListBlocker: "+(e.timestamp()-n)),a}function u(e){if(244===e.kind)return!0
if(27===e.kind&&e.parent){if(243===e.parent.kind)return!0
if(245===e.parent.kind||242===e.parent.kind)return e.parent.parent&&241===e.parent.parent.kind}return!1}function l(e){if(e){var t=e.parent.kind
switch(e.kind){case 24:return 174===t||148===t||175===t||170===t||187===t||156===t
case 17:return 174===t||148===t||175===t||178===t||164===t
case 19:return 170===t||153===t||140===t
case 125:case 126:return!0
case 21:return 225===t
case 15:return 221===t
case 56:return 218===t||187===t
case 12:return 189===t
case 13:return 197===t
case 112:case 110:case 111:return 145===t}switch(e.getText()){case"public":case"protected":case"private":return!0}}return!1}function d(t){if(9===t.kind||10===t.kind||e.isTemplateLiteralKind(t.kind)){var r=t.getStart(),a=t.getEnd()
if(n>r&&a>n)return!0
if(n===a)return!!t.isUnterminated||10===t.kind}return!1}function p(t){V=!0
var n,r
if(171===t.kind)H=!0,n=C.getContextualType(t),n=n&&n.getNonNullableType(),r=t.properties
else if(167===t.kind){H=!1
var a=e.getRootDeclaration(t.parent)
if(e.isVariableLike(a)){var i=!(!a.initializer&&!a.type)
i||142!==a.kind||(e.isExpression(a.parent)?i=!!C.getContextualType(a.parent):(147===a.parent.kind||150===a.parent.kind)&&(i=e.isExpression(a.parent.parent)&&!!C.getContextualType(a.parent.parent))),i&&(n=C.getTypeAtLocation(t),r=t.elements)}else e.Debug.fail("Root declaration is not variable-like.")}else e.Debug.fail("Expected object literal or binding pattern, got "+t.kind)
if(!n)return!1
var o=C.getPropertiesOfType(n)
return o&&o.length>0&&(X=x(o,r)),!0}function f(t){var n=233===t.kind?230:236,r=e.getAncestor(t,n),a=r.moduleSpecifier
if(!a)return!1
V=!0,H=!1
var i,o=C.getSymbolAtLocation(r.moduleSpecifier)
return o&&(i=C.getExportsOfModule(o)),X=i?b(i,t.elements):j,!0}function g(e){if(e)switch(e.kind){case 15:case 24:var t=e.parent
if(t&&(171===t.kind||167===t.kind))return t}}function m(e){if(e)switch(e.kind){case 15:case 24:switch(e.parent.kind){case 233:case 237:return e.parent}}}function y(e){if(e){var t=e.parent
switch(e.kind){case 26:case 39:case 69:case 246:case 247:if(t&&(242===t.kind||243===t.kind))return t
if(246===t.kind)return t.parent
break
case 9:if(t&&(246===t.kind||247===t.kind))return t.parent
break
case 16:if(t&&248===t.kind&&t.parent&&246===t.parent.kind)return t.parent.parent
if(t&&247===t.kind)return t.parent}}}function h(e){switch(e){case 179:case 180:case 220:case 147:case 146:case 149:case 150:case 151:case 152:case 153:return!0}return!1}function v(e){var t=e.parent.kind
switch(e.kind){case 24:return 218===t||219===t||200===t||224===t||h(t)||221===t||192===t||222===t||168===t||223===t
case 21:return 168===t
case 54:return 169===t
case 19:return 168===t
case 17:return 252===t||h(t)
case 15:return 224===t||222===t||159===t
case 23:return 144===t&&e.parent&&e.parent.parent&&(222===e.parent.parent.kind||159===e.parent.parent.kind)
case 25:return 221===t||192===t||222===t||223===t||h(t)
case 113:return 145===t
case 22:return 142===t||e.parent&&e.parent.parent&&168===e.parent.parent.kind
case 112:case 110:case 111:return 142===t
case 116:return 234===t||238===t||232===t
case 73:case 81:case 107:case 87:case 102:case 123:case 131:case 89:case 108:case 74:case 114:case 134:return!0}switch(e.getText()){case"abstract":case"async":case"class":case"const":case"declare":case"enum":case"function":case"interface":case"let":case"private":case"protected":case"public":case"static":case"var":case"yield":return!0}return!1}function k(e){if(8===e.kind){var t=e.getFullText()
return"."===t.charAt(t.length-1)}return!1}function b(t,r){for(var a=e.createMap(),i=0,o=r;i<o.length;i++){var s=o[i]
if(!(s.getStart()<=n&&n<=s.getEnd())){var c=s.propertyName||s.name
a[c.text]=!0}}return e.someProperties(a)?e.filter(t,function(e){return"default"!==e.name&&!a[e.name]}):e.filter(t,function(e){return"default"!==e.name})}function x(t,r){if(!r||0===r.length)return t
for(var a=e.createMap(),i=0,o=r;i<o.length;i++){var s=o[i]
if(!(253!==s.kind&&254!==s.kind&&169!==s.kind&&147!==s.kind||s.getStart()<=n&&n<=s.getEnd())){var c=void 0
169===s.kind&&s.propertyName?69===s.propertyName.kind&&(c=s.propertyName.text):c=s.name.text,a[c]=!0}}return e.filter(t,function(e){return!a[e.name]})}function D(t,r){for(var a=e.createMap(),i=0,o=r;i<o.length;i++){var s=o[i]
s.getStart()<=n&&n<=s.getEnd()||246===s.kind&&(a[s.name.text]=!0)}return e.filter(t,function(e){return!a[e.name]})}var C=Ze.getTypeChecker(),S=i(t),T=e.isSourceFileJavaScript(S),E=!1,w=e.timestamp(),N=e.getTokenAtPosition(S,n)
r("getCompletionData: Get current token: "+(e.timestamp()-w)),w=e.timestamp()
var P=A(S,N,n)
if(r("getCompletionData: Is inside comment: "+(e.timestamp()-w)),P){e.hasDocComment(S,n)&&64===S.text.charCodeAt(n-1)&&(E=!0)
var O=!1,R=e.getJsDocTagAtPosition(S,n)
if(R)switch(R.tagName.pos<=n&&n<=R.tagName.end&&(E=!0),R.kind){case 277:case 275:case 276:var F=R
F.typeExpression&&(O=F.typeExpression.pos<n&&n<F.typeExpression.end)}if(E)return{symbols:void 0,isMemberCompletion:!1,isNewIdentifierLocation:!1,location:void 0,isRightOfDot:!1,isJsDocTagName:E}
if(!O)return void r("Returning an empty list because completion was inside a regular comment or plain text part of a JsDoc comment.")}w=e.timestamp()
var I=e.findPrecedingToken(n,S)
r("getCompletionData: Get previous token 1: "+(e.timestamp()-w))
var M=I
if(M&&n<=M.end&&e.isWord(M.kind)){var L=e.timestamp()
M=e.findPrecedingToken(M.getFullStart(),S),r("getCompletionData: Get previous token 2: "+(e.timestamp()-L))}var B=N,J=!1,K=!1,z=!1,U=e.getTouchingPropertyName(S,n)
if(M){if(_(M))return void r("Returning an empty list because completion was requested in an invalid position.")
var q=M.parent,W=M.kind
if(21===W)if(172===q.kind)B=M.parent.expression,J=!0
else{if(139!==q.kind)return
B=M.parent.left,J=!0}else 1===S.languageVariant&&(25===W?(K=!0,U=M):39===W&&245===M.parent.kind&&(z=!0,U=M))}var V,H,G=e.timestamp(),X=[]
if(J)a()
else if(K){var Q=C.getJsxIntrinsicTagNames()
X=s()?Q.concat(X.filter(function(e){return!!(8496063&e.flags)})):Q,V=!0,H=!1}else if(z){var Y=M.parent.parent.openingElement.tagName,$=C.getSymbolAtLocation(Y)
C.isUnknownSymbol($)||(X=[$]),V=!0,H=!1}else if(!s())return
return r("getCompletionData: Semantic work: "+(e.timestamp()-G)),{symbols:X,isMemberCompletion:V,isNewIdentifierLocation:H,location:U,isRightOfDot:J||K,isJsDocTagName:E}}function F(t,n){function a(t,n,r){var a=[],i=Ze.getCompilerOptions().target,o=R(t)
for(var s in o)if(o[s]!==n&&!r[s]){r[s]=s
var c=P(e.unescapeIdentifier(s),i,!0)
if(c){var _={name:c,kind:te.warning,kindModifiers:"",sortText:"1"}
a.push(_)}}return a}function o(){return K||(K=e.map(U,function(e){return{name:e,kind:te.keyword,kindModifiers:"",sortText:"0"}}))}function c(e,t,n){var r=S(e,Ze.getCompilerOptions().target,n,t)
if(r)return{name:r,kind:M(e,t),kindModifiers:B(e),sortText:"0"}}function _(t,n,a,i){var o=e.timestamp(),s=e.createMap()
if(t)for(var _=0,u=t;_<u.length;_++){var l=u[_],d=c(l,a,i)
if(d){var p=e.escapeIdentifier(d.name)
s[p]||(n.push(d),s[p]=p)}}return r("getCompletionsAtPosition: getCompletionEntriesFromSymbols: "+(e.timestamp()-o)),s}function u(t,n){var r=e.findPrecedingToken(n,t)
if(r&&9===r.kind){if(253===r.parent.kind&&171===r.parent.parent.kind)return l(r.parent)
if(e.isElementAccessExpression(r.parent)&&r.parent.argumentExpression===r)return p(r.parent)
var a=e.SignatureHelp.getContainingArgumentInfo(r,n,t)
return a?d(a,r):f(r)}}function l(e){var t=Ze.getTypeChecker(),n=t.getContextualType(e.parent),r=[]
return n&&(_(n.getApparentProperties(),r,e,!1),r.length)?{isMemberCompletion:!0,isNewIdentifierLocation:!0,entries:r}:void 0}function d(e,t){var n=Ze.getTypeChecker(),r=[],a=[]
n.getResolvedSignature(e.invocation,r)
for(var i=0,o=r;i<o.length;i++){var s=o[i]
if(s.parameters.length>e.argumentIndex){var c=s.parameters[e.argumentIndex]
g(n.getTypeAtLocation(c.valueDeclaration),a)}}return a.length?{isMemberCompletion:!1,isNewIdentifierLocation:!0,entries:a}:void 0}function p(e){var t=Ze.getTypeChecker(),n=t.getTypeAtLocation(e.expression),r=[]
return n&&(_(n.getApparentProperties(),r,e,!1),r.length)?{isMemberCompletion:!0,isNewIdentifierLocation:!0,entries:r}:void 0}function f(e){var t=Ze.getTypeChecker(),n=t.getContextualType(e)
if(n){var r=[]
if(g(n,r),r.length)return{isMemberCompletion:!1,isNewIdentifierLocation:!1,entries:r}}}function g(t,n){t&&(524288&t.flags?e.forEach(t.types,function(e){return g(e,n)}):32&t.flags&&n.push({name:t.text,kindModifiers:re.none,kind:te.variableElement,sortText:"0"}))}s()
var m=i(t)
if(e.isInString(m,n))return u(m,n)
var y=O(t,n)
if(y){var h=y.symbols,v=y.isMemberCompletion,k=y.isNewIdentifierLocation,b=y.location,x=y.isJsDocTagName
if(x)return{isMemberCompletion:!1,isNewIdentifierLocation:!1,entries:o()}
var D=[]
if(e.isSourceFileJavaScript(m)){var C=_(h,D,b,!1)
e.addRange(D,a(m,b.pos,C))}else{if(!h||0===h.length){if(1!==m.languageVariant||!b.parent||245!==b.parent.kind)return
var T=b.parent.parent.openingElement.tagName
D.push({name:T.text,kind:void 0,kindModifiers:void 0,sortText:"0"})}_(h,D,b,!0)}return v||x||e.addRange(D,ue),{isMemberCompletion:v,isNewIdentifierLocation:k||e.isSourceFileJavaScript(m),entries:D}}}function I(t,n,r){s()
var a=O(t,n)
if(a){var o=a.symbols,c=a.location,_=Ze.getCompilerOptions().target,u=e.forEach(o,function(e){return S(e,_,!1,c)===r?e:void 0})
if(u){var l=J(u,i(t),c,c,7),d=l.displayParts,p=l.documentation,f=l.symbolKind
return{name:r,kindModifiers:B(u),kind:f,displayParts:d,documentation:p}}}var g=e.forEach(ue,function(e){return e.name===r})
return g?{name:r,kind:te.keyword,kindModifiers:re.none,displayParts:[e.displayPart(r,ee.keyword)],documentation:void 0}:void 0}function M(t,n){var r=t.getFlags()
if(32&r)return e.getDeclarationOfKind(t,192)?te.localClassElement:te.classElement
if(384&r)return te.enumElement
if(524288&r)return te.typeElement
if(64&r)return te.interfaceElement
if(262144&r)return te.typeParameterElement
var a=L(t,r,n)
if(a===te.unknown){if(262144&r)return te.typeParameterElement
if(8&r)return te.variableElement
if(8388608&r)return te.alias
if(1536&r)return te.moduleElement}return a}function L(t,n,r){var i=Ze.getTypeChecker()
if(i.isUndefinedSymbol(t))return te.variableElement
if(i.isArgumentsSymbol(t))return te.localVariableElement
if(97===r.kind&&e.isExpression(r))return te.parameterElement
if(3&n)return e.isFirstDeclarationOfSymbolParameter(t)?te.parameterElement:t.valueDeclaration&&e.isConst(t.valueDeclaration)?te.constElement:e.forEach(t.declarations,e.isLet)?te.letElement:a(t)?te.localVariableElement:te.variableElement
if(16&n)return a(t)?te.localFunctionElement:te.functionElement
if(32768&n)return te.memberGetAccessorElement
if(65536&n)return te.memberSetAccessorElement
if(8192&n)return te.memberFunctionElement
if(16384&n)return te.constructorImplementationElement
if(4&n){if(268435456&n){var o=e.forEach(i.getRootSymbols(t),function(t){var n=t.getFlags()
return 98311&n?te.memberVariableElement:void e.Debug.assert(!!(8192&n))})
if(!o){var s=i.getTypeOfSymbolAtLocation(t,r)
return s.getCallSignatures().length?te.memberFunctionElement:te.memberVariableElement}return o}return te.memberVariableElement}return te.unknown}function B(t){return t&&t.declarations&&t.declarations.length>0?e.getNodeModifiers(t.declarations[0]):re.none}function J(t,n,r,a,i){function o(){m.length&&m.push(e.lineBreakPart())}function s(t,r){var a=e.symbolToDisplayParts(g,t,r||n,void 0,3)
e.addRange(m,a)}function c(t,n){o(),n&&(_(n),m.push(e.spacePart()),s(t))}function _(t){switch(t){case te.variableElement:case te.functionElement:case te.letElement:case te.constElement:case te.constructorImplementationElement:return void m.push(e.textOrKeywordPart(t))
default:return m.push(e.punctuationPart(17)),m.push(e.textOrKeywordPart(t)),void m.push(e.punctuationPart(18))}}function u(t,n,a){e.addRange(m,e.signatureToDisplayParts(g,t,r,32|a)),n.length>1&&(m.push(e.spacePart()),m.push(e.punctuationPart(17)),m.push(e.operatorPart(35)),m.push(e.displayPart(""+(n.length-1),ee.numericLiteral)),m.push(e.spacePart()),m.push(e.textPart(2===n.length?"overload":"overloads")),m.push(e.punctuationPart(18))),d=t.getDocumentationComment()}function l(t,n){var r=e.mapToDisplayParts(function(e){g.getSymbolDisplayBuilder().buildTypeParameterDisplayFromSymbol(t,e,n)})
e.addRange(m,r)}void 0===i&&(i=Te(a))
var d,p,f,g=Ze.getTypeChecker(),m=[],y=t.flags,h=L(t,y,a),v=97===a.kind&&e.isExpression(a)
if(h!==te.unknown||32&y||8388608&y){(h===te.memberGetAccessorElement||h===te.memberSetAccessorElement)&&(h=te.memberVariableElement)
var k=void 0
if(f=v?g.getTypeAtLocation(a):g.getTypeOfSymbolAtLocation(t,a)){if(a.parent&&172===a.parent.kind){var D=a.parent.name;(D===a||D&&0===D.getFullWidth())&&(a=a.parent)}var S=void 0
if(174===a.kind||175===a.kind?S=a:(b(a)||x(a))&&(S=a.parent),S){var T=[]
k=g.getResolvedSignature(S,T),!k&&T.length&&(k=T[0])
var E=175===S.kind||95===S.expression.kind,w=E?f.getConstructSignatures():f.getCallSignatures()
if(e.contains(w,k.target)||e.contains(w,k)||(k=w.length?w[0]:void 0),k){switch(E&&32&y?(h=te.constructorImplementationElement,c(f.symbol,h)):8388608&y?(h=te.alias,_(h),m.push(e.spacePart()),E&&(m.push(e.keywordPart(92)),m.push(e.spacePart())),s(t)):c(t,h),h){case te.memberVariableElement:case te.variableElement:case te.constElement:case te.letElement:case te.parameterElement:case te.localVariableElement:m.push(e.punctuationPart(54)),m.push(e.spacePart()),E&&(m.push(e.keywordPart(92)),m.push(e.spacePart())),2097152&f.flags||!f.symbol||e.addRange(m,e.symbolToDisplayParts(g,f.symbol,r,void 0,1)),u(k,w,8)
break
default:u(k,w)}p=!0}}else if(C(a)&&!(98304&t.flags)||121===a.kind&&148===a.parent.kind){var A=a.parent,w=148===A.kind?f.getNonNullableType().getConstructSignatures():f.getNonNullableType().getCallSignatures()
k=g.isImplementationOfOverload(A)?w[0]:g.getSignatureFromDeclaration(A),148===A.kind?(h=te.constructorImplementationElement,c(f.symbol,h)):c(151!==A.kind||2048&f.symbol.flags||4096&f.symbol.flags?t:f.symbol,h),u(k,w),p=!0}}}if(32&y&&!p&&!v&&(e.getDeclarationOfKind(t,192)?_(te.localClassElement):m.push(e.keywordPart(73)),m.push(e.spacePart()),s(t),l(t,n)),64&y&&2&i&&(o(),m.push(e.keywordPart(107)),m.push(e.spacePart()),s(t),l(t,n)),524288&y&&(o(),m.push(e.keywordPart(134)),m.push(e.spacePart()),s(t),l(t,n),m.push(e.spacePart()),m.push(e.operatorPart(56)),m.push(e.spacePart()),e.addRange(m,e.typeToDisplayParts(g,g.getDeclaredTypeOfSymbol(t),r,512))),384&y&&(o(),e.forEach(t.declarations,e.isConstEnumDeclaration)&&(m.push(e.keywordPart(74)),m.push(e.spacePart())),m.push(e.keywordPart(81)),m.push(e.spacePart()),s(t)),1536&y){o()
var N=e.getDeclarationOfKind(t,225),P=N&&N.name&&69===N.name.kind
m.push(e.keywordPart(P?126:125)),m.push(e.spacePart()),s(t)}if(262144&y&&2&i)if(o(),m.push(e.punctuationPart(17)),m.push(e.textPart("type parameter")),m.push(e.punctuationPart(18)),m.push(e.spacePart()),s(t),m.push(e.spacePart()),m.push(e.keywordPart(90)),m.push(e.spacePart()),t.parent)s(t.parent,r),l(t.parent,r)
else{var N=e.getDeclarationOfKind(t,141)
if(e.Debug.assert(void 0!==N),N=N.parent)if(e.isFunctionLikeKind(N.kind)){var k=g.getSignatureFromDeclaration(N)
152===N.kind?(m.push(e.keywordPart(92)),m.push(e.spacePart())):151!==N.kind&&N.name&&s(N.symbol),e.addRange(m,e.signatureToDisplayParts(g,k,n,32))}else m.push(e.keywordPart(134)),m.push(e.spacePart()),s(N.symbol),l(N.symbol,n)}if(8&y){c(t,"enum member")
var N=t.declarations[0]
if(255===N.kind){var O=g.getConstantValue(N)
void 0!==O&&(m.push(e.spacePart()),m.push(e.operatorPart(56)),m.push(e.spacePart()),m.push(e.displayPart(""+O,ee.numericLiteral)))}}if(8388608&y&&(o(),228===t.declarations[0].kind?(m.push(e.keywordPart(82)),m.push(e.spacePart()),m.push(e.keywordPart(126))):m.push(e.keywordPart(89)),m.push(e.spacePart()),s(t),e.forEach(t.declarations,function(t){if(229===t.kind){var n=t
if(e.isExternalModuleImportEqualsDeclaration(n))m.push(e.spacePart()),m.push(e.operatorPart(56)),m.push(e.spacePart()),m.push(e.keywordPart(129)),m.push(e.punctuationPart(17)),m.push(e.displayPart(e.getTextOfNode(e.getExternalModuleImportEqualsDeclarationExpression(n)),ee.stringLiteral)),m.push(e.punctuationPart(18))
else{var a=g.getSymbolAtLocation(n.moduleReference)
a&&(m.push(e.spacePart()),m.push(e.operatorPart(56)),m.push(e.spacePart()),s(a,r))}return!0}})),!p)if(h!==te.unknown){if(f)if(v?(o(),m.push(e.keywordPart(97))):c(t,h),h===te.memberVariableElement||3&y||h===te.localVariableElement||v)if(m.push(e.punctuationPart(54)),m.push(e.spacePart()),f.symbol&&262144&f.symbol.flags){var R=e.mapToDisplayParts(function(e){g.getSymbolDisplayBuilder().buildTypeParameterDisplay(f,e,r)})
e.addRange(m,R)}else e.addRange(m,e.typeToDisplayParts(g,f,r))
else if(16&y||8192&y||16384&y||131072&y||98304&y||h===te.memberFunctionElement){var w=f.getNonNullableType().getCallSignatures()
u(w[0],w)}}else h=M(t,a)
if(!d&&(d=t.getDocumentationComment(),0===d.length&&4&t.flags&&t.parent&&e.forEach(t.parent.declarations,function(e){return 256===e.kind})))for(var F=0,I=t.declarations;F<I.length;F++){var N=I[F]
if(N.parent&&187===N.parent.kind){var B=Ze.getTypeChecker().getSymbolAtLocation(N.parent.right)
if(B&&(d=B.getDocumentationComment(),d.length>0))break}}return{displayParts:m,documentation:d,symbolKind:h}}function z(t,n){s()
var r=i(t),a=e.getTouchingPropertyName(r,n)
if(a!==r&&!h(a)){var o=Ze.getTypeChecker(),c=o.getSymbolAtLocation(a)
if(c&&!o.isUnknownSymbol(c)){var _=J(c,r,N(a),a)
return{kind:_.symbolKind,kindModifiers:B(c),textSpan:e.createTextSpan(a.getStart(),a.getWidth()),displayParts:_.displayParts,documentation:_.documentation}}switch(a.kind){case 69:case 172:case 139:case 97:case 165:case 95:var u=o.getTypeAtLocation(a)
if(u)return{kind:te.unknown,kindModifiers:re.none,textSpan:e.createTextSpan(a.getStart(),a.getWidth()),displayParts:e.typeToDisplayParts(o,u,N(a)),documentation:u.symbol?u.symbol.getDocumentationComment():void 0}}}}function q(t,n,r,a){return{fileName:t.getSourceFile().fileName,textSpan:e.createTextSpanFromBounds(t.getStart(),t.getEnd()),kind:n,name:r,containerKind:void 0,containerName:a}}function W(t,n){function r(t,n,r,a,o,s){if((x(n)||121===n.kind)&&32&t.flags){for(var c=0,_=t.getDeclarations();c<_.length;c++){var u=_[c]
if(e.isClassLike(u))return i(u.members,!0,r,a,o,s)}e.Debug.fail("Expected declaration to have at least one class-like declaration")}return!1}function a(e,t,n,r,a,o){return b(t)||x(t)||C(t)?i(e.declarations,!1,n,r,a,o):!1}function i(t,n,r,a,i,o){var s,c=[]
return e.forEach(t,function(e){(n&&148===e.kind||!n&&(220===e.kind||147===e.kind||146===e.kind))&&(c.push(e),e.body&&(s=e))}),s?(o.push(q(s,r,a,i)),!0):c.length?(o.push(q(e.lastOrUndefined(c),r,a,i)),!0):!1}var o=Ze.getTypeChecker(),s=[],c=t.getDeclarations(),_=o.symbolToString(t),u=M(t,n),l=t.parent,d=l?o.symbolToString(l,n):""
return r(t,n,u,_,d,s)||a(t,n,u,_,d,s)||e.forEach(c,function(e){s.push(q(e,u,_,d))}),s}function V(e,t){for(var n=0,r=e;n<r.length;n++){var a=r[n]
if(a.pos<=t&&t<a.end)return a}}function H(t,n){return{fileName:n,textSpan:e.createTextSpanFromBounds(0,0),kind:te.scriptElement,name:t,containerName:void 0,containerKind:void 0}}function G(t,n){s()
var r=i(t),a=V(r.referencedFiles,n)
if(a){var o=e.tryResolveScriptReference(Ze,r,a)
if(o)return[H(a.fileName,o.fileName)]}else{var c=V(r.typeReferenceDirectives,n)
if(c){var o=Ze.getResolvedTypeReferenceDirectives()[c.fileName]
if(o&&o.resolvedFileName)return[H(c.fileName,o.resolvedFileName)]}else{var _=e.getTouchingPropertyName(r,n)
if(_!==r){if(g(_)){var u=_.text,l=f(_.parent,_.text)
return l?[q(l,te.label,u,void 0)]:void 0}var d=Ze.getTypeChecker(),p=d.getSymbolAtLocation(_)
if(p){if(8388608&p.flags){var m=p.declarations[0]
69===_.kind&&(_.parent===m||234===m.kind&&m.parent&&233===m.parent.kind)&&(p=d.getAliasedSymbol(p))}if(254===_.parent.kind){var y=d.getShorthandAssignmentValueSymbol(p.valueDeclaration)
if(!y)return[]
var h=y.getDeclarations(),v=M(y,_),k=d.symbolToString(y),b=d.symbolToString(p.parent,_)
return e.map(h,function(e){return q(e,v,k,b)})}return W(p,_)}}}}}function X(t,n){s()
var r=i(t),a=e.getTouchingPropertyName(r,n)
if(a!==r){var o=Ze.getTypeChecker(),c=o.getSymbolAtLocation(a)
if(c){var _=o.getTypeOfSymbolAtLocation(c,a)
if(_){if(524288&_.flags&&!(16&_.flags)){var u=[]
return e.forEach(_.types,function(t){t.symbol&&e.addRange(u,W(t.symbol,a))}),u}if(_.symbol)return W(_.symbol,a)}}}}function Q(t,n){var r=$(t,n)
if(r){var a=it(e.normalizeSlashes(t))
r=e.filter(r,function(t){return it(e.normalizeSlashes(t.fileName))===a})}return r}function Y(t,n,r){function a(t){var n=t.getStart(),r=t.getEnd()
return{fileName:u.fileName,textSpan:e.createTextSpanFromBounds(n,r),kind:Z.none}}function o(t){function n(t){if(t){for(var n=e.createMap(),r=[],a=0,i=t;a<i.length;a++)for(var o=i[a],s=0,c=o.references;s<c.length;s++){var _=c[s],u=_.fileName,l=n[u]
l||(l={fileName:u,highlightSpans:[]},n[u]=l,r.push(l)),l.highlightSpans.push({textSpan:_.textSpan,kind:_.isWriteAccess?Z.writtenReference:Z.reference})}return r}}if(69===t.kind||97===t.kind||165===t.kind||95===t.kind||9===t.kind||E(t)){var r=fe(t,_,!1,!1)
return n(r)}}function c(t){function n(e,t){return void 0!==e&&e.kind===t}function r(e){return e&&e.parent}function i(t){if(t)switch(t.kind){case 88:case 80:if(n(t.parent,203))return D(t.parent)
break
case 94:if(n(t.parent,211))return x(t.parent)
break
case 98:if(n(t.parent,215))return b(t.parent)
break
case 72:if(n(r(r(t)),216))return k(t.parent.parent)
break
case 100:case 85:if(n(r(t),216))return k(t.parent)
break
case 96:if(n(t.parent,213))return v(t.parent)
break
case 71:case 77:if(n(r(r(r(t))),213))return v(t.parent.parent.parent)
break
case 70:case 75:if(n(t.parent,210)||n(t.parent,209))return h(t.parent)
break
case 86:if(n(t.parent,206)||n(t.parent,207)||n(t.parent,208))return m(t.parent)
break
case 104:case 79:if(n(t.parent,205)||n(t.parent,204))return m(t.parent)
break
case 121:if(n(t.parent,148))return g(t.parent)
break
case 123:case 131:if(n(t.parent,149)||n(t.parent,150))return f(t.parent)
break
default:if(e.isModifierKind(t.kind)&&t.parent&&(e.isDeclaration(t.parent)||200===t.parent.kind))return d(t.kind,t.parent)}}function o(t){function n(t){if(215===t.kind)r.push(t)
else if(216===t.kind){var a=t
n(a.catchClause?a.catchClause:a.tryBlock),a.finallyBlock&&n(a.finallyBlock)}else e.isFunctionLike(t)||e.forEachChild(t,n)}var r=[]
return n(t),r}function s(t){for(var n=t;n.parent;){var r=n.parent
if(e.isFunctionBlock(r)||256===r.kind)return r
if(216===r.kind){var a=r
if(a.tryBlock===n&&a.catchClause)return n}n=r}}function c(t){function n(t){210===t.kind||209===t.kind?r.push(t):e.isFunctionLike(t)||e.forEachChild(t,n)}var r=[]
return n(t),r}function _(e,t){var n=l(t)
return n&&n===e}function l(t){for(var n=t.parent;n;n=n.parent)switch(n.kind){case 213:if(209===t.kind)continue
case 206:case 207:case 208:case 205:case 204:if(!t.label||y(n,t.label.text))return n
break
default:if(e.isFunctionLike(n))return}}function d(t,r){function i(t){switch(t){case 112:return 4
case 110:return 8
case 111:return 16
case 113:return 32
case 82:return 1
case 122:return 2
case 115:return 128
default:e.Debug.fail()}}var o=r.parent
if(e.isAccessibilityModifier(t)){if(!(221===o.kind||192===o.kind||142===r.kind&&n(o,148)))return}else if(113===t){if(221!==o.kind&&192!==o.kind)return}else if(82===t||122===t){if(226!==o.kind&&256!==o.kind)return}else{if(115!==t)return
if(221!==o.kind&&221!==r.kind)return}var s,c=[],_=i(t)
switch(o.kind){case 226:case 256:s=128&_?r.members.concat(r):o.statements
break
case 148:s=o.parameters.concat(o.parent.members)
break
case 221:case 192:if(s=o.members,28&_){var u=e.forEach(o.members,function(e){return 148===e.kind&&e})
u&&(s=s.concat(u.parameters))}else 128&_&&(s=s.concat(o))
break
default:e.Debug.fail("Invalid container kind.")}return e.forEach(s,function(n){n.modifiers&&n.flags&_&&e.forEach(n.modifiers,function(e){return p(c,e,t)})}),e.map(c,a)}function p(t,n){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a]
return n&&e.contains(r,n.kind)?(t.push(n),!0):!1}function f(t){function n(t,n){var a=e.getDeclarationOfKind(t,n)
a&&e.forEach(a.getChildren(),function(e){return p(r,e,123,131)})}var r=[]
return n(t.symbol,149),n(t.symbol,150),e.map(r,a)}function g(t){var n=t.symbol.getDeclarations(),r=[]
return e.forEach(n,function(t){e.forEach(t.getChildren(),function(e){return p(r,e,121)})}),e.map(r,a)}function m(t){var n=[]
if(p(n,t.getFirstToken(),86,104,79)&&204===t.kind)for(var r=t.getChildren(),i=r.length-1;i>=0&&!p(n,r[i],104);i--);var o=c(t.statement)
return e.forEach(o,function(e){_(t,e)&&p(n,e.getFirstToken(),70,75)}),e.map(n,a)}function h(e){var t=l(e)
if(t)switch(t.kind){case 206:case 207:case 208:case 204:case 205:return m(t)
case 213:return v(t)}}function v(t){var n=[]
return p(n,t.getFirstToken(),96),e.forEach(t.caseBlock.clauses,function(r){p(n,r.getFirstToken(),71,77)
var a=c(r)
e.forEach(a,function(e){_(t,e)&&p(n,e.getFirstToken(),70)})}),e.map(n,a)}function k(t){var n=[]
if(p(n,t.getFirstToken(),100),t.catchClause&&p(n,t.catchClause.getFirstToken(),72),t.finallyBlock){var r=e.findChildOfKind(t,85,u)
p(n,r,85)}return e.map(n,a)}function b(t){var n=s(t)
if(n){var r=[]
return e.forEach(o(n),function(e){p(r,e.getFirstToken(),98)}),e.isFunctionBlock(n)&&e.forEachReturnStatement(n,function(e){p(r,e.getFirstToken(),94)}),e.map(r,a)}}function x(t){var r=e.getContainingFunction(t)
if(r&&n(r.body,199)){var i=[]
return e.forEachReturnStatement(r.body,function(e){p(i,e.getFirstToken(),94)}),e.forEach(o(r.body),function(e){p(i,e.getFirstToken(),98)}),e.map(i,a)}}function D(t){for(var r=[];n(t.parent,203)&&t.parent.elseStatement===t;)t=t.parent
for(;t;){var i=t.getChildren()
p(r,i[0],88)
for(var o=i.length-1;o>=0&&!p(r,i[o],80);o--);if(!n(t.elseStatement,203))break
t=t.elseStatement}for(var s=[],o=0;o<r.length;o++){if(80===r[o].kind&&o<r.length-1){for(var c=r[o],_=r[o+1],l=!0,d=_.getStart()-1;d>=c.end;d--)if(!e.isWhiteSpaceSingleLine(u.text.charCodeAt(d))){l=!1
break}if(l){s.push({fileName:C,textSpan:e.createTextSpanFromBounds(c.getStart(),_.end),kind:Z.reference}),o++
continue}}s.push(a(r[o]))}return s}var C=u.fileName,S=i(t)
return S&&0!==S.length?[{fileName:C,highlightSpans:S}]:void 0}s()
var _=e.map(r,function(e){return Ze.getSourceFile(e)}),u=i(t),l=e.getTouchingWord(u,n)
return l?o(l)||c(l):void 0}function $(e,t){function n(e){if(e){for(var t=[],n=0,r=e;n<r.length;n++)for(var a=r[n],i=0,o=a.highlightSpans;i<o.length;i++){var s=o[i]
t.push({fileName:a.fileName,textSpan:s.textSpan,isWriteAccess:s.kind===Z.writtenReference,isDefinition:!1})}return t}}return s(),n(Y(e,t,[e]))}function ne(t){if(t){for(var n=[],r=0,a=t;r<a.length;r++){var i=a[r]
e.addRange(n,i.references)}return n}}function ie(e,t,n,r){var a=le(e,t,n,r)
return ne(a)}function ce(e,t){var n=le(e,t,!1,!1)
return ne(n)}function _e(t,n){var r=le(t,n,!1,!1)
return e.filter(r,function(e){return!!e.definition})}function le(t,n,r,a){s()
var o=i(t),c=e.getTouchingPropertyName(o,n,!0)
if(c!==o)switch(c.kind){case 8:if(!E(c))break
case 69:case 97:case 9:return fe(c,Ze.getSourceFiles(),r,a)}}function pe(e){switch(e.kind){case 97:return!0
case 69:return 97===e.originalKeywordKind&&142===e.parent.kind
default:return!1}}function fe(t,n,r,a){function i(n){var r=J(n,t.getSourceFile(),N(t),t),a=e.map(r.displayParts,function(e){return e.text}).join(""),i=n.declarations
return i&&0!==i.length?{containerKind:"",containerName:"",name:a,kind:r.symbolKind,fileName:i[0].getSourceFile().fileName,textSpan:e.createTextSpan(i[0].getStart(),0)}:void 0}function o(t,n){if(8388608&t.flags){var r=e.getDeclarationOfKind(t,231)
if(r)return O.getAliasedSymbol(t)
var a=e.forEach(t.declarations,function(e){return 234===e.kind||238===e.kind?e:void 0})
if(a&&(!a.propertyName||a.propertyName===n))return 234===a.kind?O.getAliasedSymbol(t):O.getExportSpecifierLocalTargetSymbol(a)}}function s(t){return e.isArrayLiteralOrObjectLiteralDestructuringPattern(t.parent.parent)&&O.getPropertySymbolOfDestructuringAssignment(t)}function c(t){var n=e.getDeclarationOfKind(t,169)
return n&&167===n.parent.kind&&!n.propertyName}function _(t){if(c(t)){var n=e.getDeclarationOfKind(t,169),r=O.getTypeAtLocation(n.parent)
return r&&O.getPropertyOfType(r,n.name.text)}}function u(t,n,r){if(e.isImportOrExportSpecifierName(n))return n.getText()
var a=e.getLocalSymbolForExportDefault(t)
return t=a||t,e.stripQuotes(t.name)}function l(t){var n=t.valueDeclaration
if(n&&(179===n.kind||192===n.kind))return n
if(8196&t.flags){var r=e.forEach(t.getDeclarations(),function(e){return 8&e.flags?e:void 0})
if(r)return e.getAncestor(r,221)}if(!(8388608&t.flags||c(t)||t.parent||268435456&t.flags)){var a,i=t.getDeclarations()
if(i)for(var o=0,s=i;o<s.length;o++){var _=s[o],u=N(_)
if(!u)return
if(a&&a!==u)return
if(256===u.kind&&!e.isExternalModule(u))return
a=u}return a}}function d(t,n,r,a){var i=[]
if(!n||!n.length)return i
for(var o=t.text,s=o.length,c=n.length,_=o.indexOf(n,r);_>=0&&(rt.throwIfCancellationRequested(),!(_>a));){var u=_+c
0!==_&&e.isIdentifierPart(o.charCodeAt(_-1),2)||u!==s&&e.isIdentifierPart(o.charCodeAt(u),2)||i.push(_),_=o.indexOf(n,_+c+1)}return i}function p(t,n){var r=[],a=t.getSourceFile(),i=n.text,o=d(a,i,t.getStart(),t.getEnd())
e.forEach(o,function(t){rt.throwIfCancellationRequested()
var o=e.getTouchingWord(a,t)
o&&o.getWidth()===i.length&&(o===n||g(o)&&f(o,i)===n)&&r.push(ge(o))})
var s={containerKind:"",containerName:"",fileName:n.getSourceFile().fileName,kind:te.label,name:i,textSpan:e.createTextSpanFromBounds(n.getStart(),n.getEnd())}
return[{definition:s,references:r}]}function m(e,t){if(e)switch(e.kind){case 69:return e.getWidth()===t.length
case 9:if(E(e)||w(e))return e.getWidth()===t.length+2
break
case 8:if(E(e))return e.getWidth()===t.length}return!1}function y(t,n,r,a,o,s,c,_,u){function l(t){var n=e.getSymbolId(t),r=u[n]
return void 0===r&&(r=_.length,u[n]=r,_.push({definition:i(t),references:[]})),_[r]}function p(t,n){function r(e){var n=t.text.substring(e.pos,e.end)
return!g.test(n)}return e.isInCommentHelper(t,n,r)}var f=t.getSourceFile(),g=/^\/\/\/\s*</,y=c?t.getFullStart():t.getStart(),h=d(f,r,y,t.getEnd())
if(h.length){var v=x(n,a)
e.forEach(h,function(t){rt.throwIfCancellationRequested()
var n=e.getTouchingPropertyName(f,t)
if(!m(n,r))return void((s&&e.isInString(f,t)||c&&p(f,t))&&_.push({definition:void 0,references:[{fileName:f.fileName,textSpan:e.createTextSpan(t,r.length),isWriteAccess:!1,isDefinition:!1}]}))
if(Te(n)&o){var a=O.getSymbolAtLocation(n)
if(a){var i=a.valueDeclaration,u=O.getShorthandAssignmentValueSymbol(i),d=C(v,a,n)
if(d){var g=l(d)
g.references.push(ge(n))}else if(!(67108864&a.flags)&&v.indexOf(u)>=0){var g=l(u)
g.references.push(ge(i.name))}}}})}}function v(t){var n=e.getSuperContainer(t,!1)
if(n){var r=32
switch(n.kind){case 145:case 144:case 147:case 146:case 148:case 149:case 150:r&=n.flags,n=n.parent
break
default:return}var a=[],o=n.getSourceFile(),s=d(o,"super",n.getStart(),n.getEnd())
e.forEach(s,function(t){rt.throwIfCancellationRequested()
var i=e.getTouchingWord(o,t)
if(i&&95===i.kind){var s=e.getSuperContainer(i,!1)
s&&(32&s.flags)===r&&s.parent.symbol===n.symbol&&a.push(ge(i))}})
var c=i(n.symbol)
return[{definition:c,references:a}]}}function k(n,r){function a(t,n,r,a){e.forEach(r,function(r){rt.throwIfCancellationRequested()
var i=e.getTouchingWord(t,r)
if(i&&pe(i)){var s=e.getThisContainer(i,!1)
switch(n.kind){case 179:case 220:n.symbol===s.symbol&&a.push(ge(i))
break
case 147:case 146:e.isObjectLiteralMethod(n)&&n.symbol===s.symbol&&a.push(ge(i))
break
case 192:case 221:s.parent&&n.symbol===s.parent.symbol&&(32&s.flags)===o&&a.push(ge(i))
break
case 256:256!==s.kind||e.isExternalModule(s)||a.push(ge(i))}}})}var i=e.getThisContainer(n,!1),o=32
switch(i.kind){case 147:case 146:if(e.isObjectLiteralMethod(i))break
case 145:case 144:case 148:case 149:case 150:o&=i.flags,i=i.parent
break
case 256:if(e.isExternalModule(i))return
case 220:case 179:break
default:return}var s,c=[]
if(256===i.kind)e.forEach(r,function(e){s=d(e,"this",e.getStart(),e.getEnd()),a(e,e,s,c)})
else{var _=i.getSourceFile()
s=d(_,"this",i.getStart(),i.getEnd()),a(_,i,s,c)}return[{definition:{containerKind:"",containerName:"",fileName:t.getSourceFile().fileName,kind:te.variableElement,name:"this",textSpan:e.createTextSpanFromBounds(t.getStart(),t.getEnd())},references:c}]}function b(t,n){function r(t,n,r,i){for(var o=0,s=r;o<s.length;o++){var c=s[o]
rt.throwIfCancellationRequested()
var _=e.getTouchingWord(t,c)
if(!_||9!==_.kind)return
var u=Qe(_,a)
u===n&&i.push(ge(_))}}var a=Ze.getTypeChecker(),i=Qe(t,a)
if(i){for(var o=[],s=0,c=n;s<c.length;s++){var _=c[s],u=d(_,i.text,_.getStart(),_.getEnd())
r(_,i,u,o)}return[{definition:{containerKind:"",containerName:"",fileName:t.getSourceFile().fileName,kind:te.variableElement,name:i.text,textSpan:e.createTextSpanFromBounds(t.getStart(),t.getEnd())},references:o}]}}function x(t,n){var r=[t],a=T(n)
if(a&&254!==a.kind){var i=s(n)
i&&r.push(i)}var c=o(t,n)
if(c&&(r=r.concat(x(c,n))),a){e.forEach(A(a),function(t){e.addRange(r,O.getRootSymbols(t))})
var u=O.getShorthandAssignmentValueSymbol(n.parent)
u&&r.push(u)}t.valueDeclaration&&142===t.valueDeclaration.kind&&e.isParameterPropertyDeclaration(t.valueDeclaration)&&(r=r.concat(O.getSymbolsOfParameterPropertyDeclaration(t.valueDeclaration,t.name)))
var l=_(t)
return l&&r.push(l),e.forEach(O.getRootSymbols(t),function(n){n!==t&&r.push(n),n.parent&&96&n.parent.flags&&D(n.parent,n.getName(),r,e.createMap())}),r}function D(t,n,r,a){function i(e){if(e){var i=O.getTypeAtLocation(e)
if(i){var o=O.getPropertyOfType(i,n)
o&&r.push.apply(r,O.getRootSymbols(o)),a[t.name]=t,D(i.symbol,n,r,a)}}}t&&(t.name in a||96&t.flags&&e.forEach(t.getDeclarations(),function(t){e.isClassLike(t)?(i(e.getClassExtendsHeritageClauseElement(t)),e.forEach(e.getClassImplementsHeritageClauseElements(t),i)):222===t.kind&&e.forEach(e.getInterfaceBaseTypeNodes(t),i)}))}function C(t,n,r){if(t.indexOf(n)>=0)return n
var a=o(n,r)
if(a)return C(t,a,r)
var i=T(r)
if(i){var c=e.forEach(A(i),function(n){return e.forEach(O.getRootSymbols(n),function(e){return t.indexOf(e)>=0?e:void 0})})
if(c)return c
var u=s(r)
if(u&&t.indexOf(u)>=0)return u}var l=_(n)
return l&&t.indexOf(l)>=0?l:e.forEach(O.getRootSymbols(n),function(n){if(t.indexOf(n)>=0)return n
if(n.parent&&96&n.parent.flags){var r=[]
return D(n.parent,n.getName(),r,e.createMap()),e.forEach(r,function(e){return t.indexOf(e)>=0?e:void 0})}})}function S(t){if(140!==t.name.kind)return t.name.text
var n=t.name.expression
return e.isStringOrNumericLiteral(n.kind)?n.text:void 0}function A(t){var n=t.parent,r=O.getContextualType(n),a=S(t)
if(a&&r){var i=[],o=r.getProperty(a)
return o&&i.push(o),524288&r.flags&&e.forEach(r.types,function(e){var t=e.getProperty(a)
t&&i.push(t)}),i}}function P(e,t){if(t){var n=void 0
do{n=e
for(var r=0,a=t;r<a.length;r++){var i=a[r],o=ve(i)
o&e&&(e|=o)}}while(e!==n)}return e}var O=Ze.getTypeChecker()
if(h(t)){if(g(t)){var F=f(t.parent,t.text)
return F?p(F.parent,F):void 0}return p(t.parent,t)}if(pe(t))return k(t,n)
if(95===t.kind)return v(t)
var I=O.getSymbolAtLocation(t)
if(!I&&9===t.kind)return b(t,n)
if(I){var M=I.declarations
if(M&&M.length){var L,B=P(Te(t),M),K=e.stripQuotes(e.getDeclaredName(O,I,t)),z=l(I),j=[]
if(z)L=[],y(z,I,K,t,B,r,a,L,j)
else for(var U=u(I,t,M),q=0,W=n;q<W.length;q++){var V=W[q]
rt.throwIfCancellationRequested()
var H=R(V)
void 0!==H[U]&&(L=L||[],y(V,I,K,t,B,r,a,L,j))}return L}}}function ge(t){var n=t.getStart(),r=t.getEnd()
return 9===t.kind&&(n+=1,r-=1),{fileName:t.getSourceFile().fileName,textSpan:e.createTextSpanFromBounds(n,r),isWriteAccess:me(t),isDefinition:e.isDeclarationName(t)||e.isLiteralComputedPropertyDeclarationName(t)}}function me(t){if(69===t.kind&&e.isDeclarationName(t))return!0
var n=t.parent
if(n){if(186===n.kind||185===n.kind)return!0
if(187===n.kind&&n.left===t){var r=n.operatorToken.kind
return r>=56&&68>=r}}return!1}function ye(t,n){s()
var r=c().getTypeChecker()
return e.NavigateTo.getNavigateToItems(Ze,r,rt,t,n)}function he(e){function t(e,t,n){r.push({name:e,writeByteOrderMark:n,text:t})}s()
var n=i(e),r=[],a=Ze.emit(n,t,rt)
return{outputFiles:r,emitSkipped:a.emitSkipped}}function ve(t){switch(t.kind){case 142:case 218:case 169:case 145:case 144:case 253:case 254:case 255:case 147:case 146:case 148:case 149:case 150:case 220:case 179:case 180:case 252:return 1
case 141:case 222:case 223:case 159:return 2
case 221:case 224:return 3
case 225:return e.isAmbientModule(t)?5:1===e.getModuleInstanceState(t)?5:4
case 233:case 234:case 229:case 230:case 235:case 236:return 7
case 256:return 5}return 7}function ke(t){return e.isRightSideOfQualifiedNameOrPropertyAccess(t)&&(t=t.parent),155===t.parent.kind||194===t.parent.kind&&!e.isExpressionWithTypeArgumentsInClassExtendsClause(t.parent)||97===t.kind&&!e.isExpression(t)||165===t.kind}function be(e){return De(e)||xe(e)}function xe(e){var t=e,n=!0
if(172===t.parent.kind){for(;t.parent&&172===t.parent.kind;)t=t.parent
n=t.name===e}if(!n&&194===t.parent.kind&&251===t.parent.parent.kind){var r=t.parent.parent.parent
return 221===r.kind&&106===t.parent.parent.token||222===r.kind&&83===t.parent.parent.token}return!1}function De(e){var t=e,n=!0
if(139===t.parent.kind){for(;t.parent&&139===t.parent.kind;)t=t.parent
n=t.right===e}return 155===t.parent.kind&&!n}function Ce(t){for(;139===t.parent.kind;)t=t.parent
return e.isInternalModuleImportEqualsDeclaration(t.parent)&&t.parent.moduleReference===t}function Se(t){return e.Debug.assert(69===t.kind),139===t.parent.kind&&t.parent.right===t&&229===t.parent.parent.kind?7:4}function Te(t){return 235===t.parent.kind?7:Ce(t)?Se(t):e.isDeclarationName(t)?ve(t.parent):ke(t)?2:be(t)?4:1}function Ee(t,n){s()
var r=i(t)
return e.SignatureHelp.getSignatureHelpItems(Ze,r,n,rt)}function we(e){return tt.getCurrentSourceFile(e)}function Ae(t,n,r){var a=tt.getCurrentSourceFile(t),i=e.getTouchingPropertyName(a,n)
if(i!==a){switch(i.kind){case 172:case 139:case 9:case 84:case 99:case 93:case 95:case 97:case 165:case 69:break
default:return}for(var o=i;;)if(k(o)||v(o))o=o.parent
else{if(!D(o))break
if(225!==o.parent.parent.kind||o.parent.parent.body!==o.parent)break
o=o.parent.parent.name}return e.createTextSpanFromBounds(o.getStart(),i.getEnd())}}function Ne(t,n){var r=tt.getCurrentSourceFile(t)
return e.BreakpointResolver.spanInSourceFileAtLocation(r,n)}function Pe(t){var n=tt.getCurrentSourceFile(t)
return e.NavigationBar.getNavigationBarItems(n)}function Oe(e,t){return Me(Fe(e,t))}function Re(e){switch(e){case 225:case 221:case 222:case 220:rt.throwIfCancellationRequested()}}function Fe(t,n){function r(e,t,n){u.push(e),u.push(t),u.push(n)}function a(t,n){function r(t){return e.forEach(t.declarations,function(t){return 225===t.kind&&1===e.getModuleInstanceState(t)})}var a=t.getFlags()
if(0!==(788448&a)){if(32&a)return 11
if(384&a)return 12
if(524288&a)return 16
if(2&n){if(64&a)return 13
if(262144&a)return 15}else if(1536&a&&(4&n||1&n&&r(t)))return 14}}function o(t){if(t&&e.textSpanIntersectsWith(n,t.getFullStart(),t.getFullWidth())){var i=t.kind
if(Re(i),69===i&&!e.nodeIsMissing(t)){var s=t
if(l[s.text]){var c=_.getSymbolAtLocation(t)
if(c){var u=a(c,Te(t))
u&&r(t.getStart(),t.getWidth(),u)}}}e.forEachChild(t,o)}}s()
var c=i(t),_=Ze.getTypeChecker(),u=[],l=Ze.getClassifiableNames()
return o(c),{spans:u,endOfLineState:0}}function Ie(e){switch(e){case 1:return ae.comment
case 2:return ae.identifier
case 3:return ae.keyword
case 4:return ae.numericLiteral
case 5:return ae.operator
case 6:return ae.stringLiteral
case 8:return ae.whiteSpace
case 9:return ae.text
case 10:return ae.punctuation
case 11:return ae.className
case 12:return ae.enumName
case 13:return ae.interfaceName
case 14:return ae.moduleName
case 15:return ae.typeParameterName
case 16:return ae.typeAliasName
case 17:return ae.parameterName
case 18:return ae.docCommentTagName
case 19:return ae.jsxOpenTagName
case 20:return ae.jsxCloseTagName
case 21:return ae.jsxSelfClosingTagName
case 22:return ae.jsxAttribute
case 23:return ae.jsxText
case 24:return ae.jsxAttributeStringLiteralValue}}function Me(t){e.Debug.assert(t.spans.length%3===0)
for(var n=t.spans,r=[],a=0,i=n.length;i>a;a+=3)r.push({textSpan:e.createTextSpan(n[a],n[a+1]),classificationType:Ie(n[a+2])})
return r}function Le(e,t){return Me(Be(e,t))}function Be(t,n){function r(e,t,n){k.push(e),k.push(t),k.push(n)}function a(t){for(h.setTextPos(t.pos);;){var n=h.getTextPos()
if(!e.couldStartTrivia(g.text,n))return n
var a=h.scan(),o=h.getTextPos(),s=o-n
if(!e.isTrivia(a))return n
if(4!==a&&5!==a)if(e.isComment(a))i(t,a,n,s),h.setTextPos(o)
else if(7===a){var c=g.text,u=c.charCodeAt(n)
if(60===u||62===u){r(n,s,1)
continue}e.Debug.assert(61===u),_(c,n,o)}}}function i(t,n,r,a){if(3===n){var i=e.parseIsolatedJSDocComment(g.text,r,a)
if(i&&i.jsDocComment)return i.jsDocComment.parent=t,void s(i.jsDocComment)}o(r,a)}function o(e,t){r(e,t,1)}function s(e){function t(e){e.preParameterName&&(o(n,e.preParameterName.pos-n),r(e.preParameterName.pos,e.preParameterName.end-e.preParameterName.pos,17),n=e.preParameterName.end),e.typeExpression&&(o(n,e.typeExpression.pos-n),f(e.typeExpression),n=e.typeExpression.end),e.postParameterName&&(o(n,e.postParameterName.pos-n),r(e.postParameterName.pos,e.postParameterName.end-e.postParameterName.pos,17),n=e.postParameterName.end)}for(var n=e.pos,a=0,i=e.tags;a<i.length;a++){var s=i[a]
switch(s.pos!==n&&o(n,s.pos-n),r(s.atToken.pos,s.atToken.end-s.atToken.pos,10),r(s.tagName.pos,s.tagName.end-s.tagName.pos,18),n=s.tagName.end,s.kind){case 275:t(s)
break
case 278:c(s)
break
case 277:f(s.typeExpression)
break
case 276:f(s.typeExpression)}n=s.end}n!==e.end&&o(n,e.end-n)}function c(e){for(var t=0,n=e.getChildren();t<n.length;t++){var r=n[t]
f(r)}}function _(t,n,a){var i
for(i=n;a>i&&!e.isLineBreak(t.charCodeAt(i));i++);for(r(n,i-n,1),v.setTextPos(i);v.getTextPos()<a;)u()}function u(){var e=v.getTextPos(),t=v.scan(),n=v.getTextPos(),a=p(t)
a&&r(e,n-e,a)}function l(t){if(e.isJSDocTag(t))return!0
if(e.nodeIsMissing(t))return!0
var n=d(t)
if(!e.isToken(t)&&244!==t.kind&&void 0===n)return!1
var i=244===t.kind?t.pos:a(t),o=t.end-i
if(e.Debug.assert(o>=0),o>0){var s=n||p(t.kind,t)
s&&r(i,o,s)}return!0}function d(e){switch(e.parent&&e.parent.kind){case 243:if(e.parent.tagName===e)return 19
break
case 245:if(e.parent.tagName===e)return 20
break
case 242:if(e.parent.tagName===e)return 21
break
case 246:if(e.parent.name===e)return 22}}function p(t,n){if(e.isKeyword(t))return 3
if((25===t||27===t)&&n&&e.getTypeArgumentOrTypeParameterList(n.parent))return 10
if(e.isPunctuation(t)){if(n){if(56===t&&(218===n.parent.kind||145===n.parent.kind||142===n.parent.kind||246===n.parent.kind))return 5
if(187===n.parent.kind||185===n.parent.kind||186===n.parent.kind||188===n.parent.kind)return 5}return 10}if(8===t)return 4
if(9===t)return 246===n.parent.kind?24:6
if(10===t)return 6
if(e.isTemplateLiteralKind(t))return 6
if(244===t)return 23
if(69===t){if(n)switch(n.parent.kind){case 221:if(n.parent.name===n)return 11
return
case 141:if(n.parent.name===n)return 15
return
case 222:if(n.parent.name===n)return 13
return
case 224:if(n.parent.name===n)return 12
return
case 225:if(n.parent.name===n)return 14
return
case 142:if(n.parent.name===n){var r=69===n.kind&&97===n.originalKeywordKind
return r?3:17}return}return 2}}function f(t){if(t&&e.decodedTextSpanIntersectsWith(m,y,t.pos,t.getFullWidth())){Re(t.kind)
for(var n=t.getChildren(g),r=0,a=n.length;a>r;r++){var i=n[r]
l(i)||f(i)}}}var g=tt.getCurrentSourceFile(t),m=n.start,y=n.length,h=e.createScanner(2,!1,g.languageVariant,g.text),v=e.createScanner(2,!1,g.languageVariant,g.text),k=[]
return f(g),{spans:k,endOfLineState:0}}function Je(t){var n=tt.getCurrentSourceFile(t)
return e.OutliningElementsCollector.collectElements(n)}function Ke(t,n){function r(e){switch(e.kind){case 15:return 16
case 17:return 18
case 19:return 20
case 25:return 27
case 16:return 15
case 18:return 17
case 20:return 19
case 27:return 25}}var a=tt.getCurrentSourceFile(t),i=[],o=e.getTouchingToken(a,n)
if(o.getStart(a)===n){var s=r(o)
if(s)for(var c=o.parent,_=c.getChildren(a),u=0,l=_;u<l.length;u++){var d=l[u]
if(d.kind===s){var p=e.createTextSpan(o.getStart(a),o.getWidth(a)),f=e.createTextSpan(d.getStart(a),d.getWidth(a))
p.start<f.start?i.push(p,f):i.push(f,p)
break}}}return i}function ze(t,n,a){var i=e.timestamp(),o=tt.getCurrentSourceFile(t)
r("getIndentationAtPosition: getCurrentSourceFile: "+(e.timestamp()-i)),i=e.timestamp()
var s=e.formatting.SmartIndenter.getIndentation(n,o,a)
return r("getIndentationAtPosition: computeIndentation  : "+(e.timestamp()-i)),s}function je(t,n,r,a){var i=tt.getCurrentSourceFile(t)
return e.formatting.formatSelection(n,r,i,o(a),a)}function Ue(t,n){var r=tt.getCurrentSourceFile(t)
return e.formatting.formatDocument(r,o(n),n)}function qe(t,n,r,a){var i=tt.getCurrentSourceFile(t)
return"}"===r?e.formatting.formatOnClosingCurly(n,i,o(a),a):";"===r?e.formatting.formatOnSemicolon(n,i,o(a),a):"\n"===r?e.formatting.formatOnEnter(n,i,o(a),a):[]}function We(n,r){var a=tt.getCurrentSourceFile(n)
if(!(e.isInString(a,r)||e.isInComment(a,r)||e.hasDocComment(a,r))){var i=e.getTokenAtPosition(a,r),o=i.getStart()
if(i&&!(r>o)){var s
e:for(s=i;s;s=s.parent)switch(s.kind){case 220:case 147:case 148:case 221:case 200:break e
case 256:return
case 225:if(225===s.parent.kind)return
break e}if(s&&!(s.getStart()<r)){for(var c=He(s),_=a.getLineAndCharacterOfPosition(r),u=a.getLineStarts()[_.line],l=a.text.substr(u,_.character),d=e.getNewLineOrDefaultFromHost(t),p="",f=0,g=c.length;g>f;f++){var m=c[f].name,y=69===m.kind?m.text:"param"+f
p+=l+" * @param "+y+d}var h="/**"+d+l+" * ",v=h+d+p+l+" */"+(o===r?d+l:"")
return{newText:v,caretOffset:h.length}}}}}function Ve(t,n,r){if(60===r)return!1
var a=tt.getCurrentSourceFile(t)
return e.isInString(a,n)||e.isInComment(a,n)?!1:e.isInsideJsxElementOrAttribute(a,n)?123===r:e.isInTemplateString(a,n)?!1:!0}function He(t){if(e.isFunctionLike(t))return t.parameters
if(200===t.kind){var n=t,r=n.declarationList.declarations
if(1===r.length&&r[0].initializer)return Ge(r[0].initializer)}return j}function Ge(e){for(;178===e.kind;)e=e.expression
switch(e.kind){case 179:case 180:return e.parameters
case 192:for(var t=0,n=e.members;t<n.length;t++){var r=n[t]
if(148===r.kind)return r.parameters}}return j}function Xe(t,n){function r(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function a(){var t=/(?:\/\/+\s*)/.source,a=/(?:\/\*+\s*)/.source,i=/(?:^(?:\s|\*)*)/.source,o="("+i+"|"+t+"|"+a+")",s="(?:"+e.map(n,function(e){return"("+r(e.text)+")"}).join("|")+")",c=/(?:$|\*\/)/.source,_=/(?:.*?)/.source,u="("+s+_+")",l=o+u+c
return RegExp(l,"gim")}function o(e){return e>=97&&122>=e||e>=65&&90>=e||e>=48&&57>=e}s()
var c=i(t)
rt.throwIfCancellationRequested()
var _=c.text,u=[]
if(n.length>0)for(var l=a(),d=void 0;d=l.exec(_);){rt.throwIfCancellationRequested()
var p=3
e.Debug.assert(d.length===n.length+p)
var f=d[1],g=d.index+f.length,m=e.getTokenAtPosition(c,g)
if(A(c,m,g)){for(var y=void 0,h=0,v=n.length;v>h;h++)d[h+p]&&(y=n[h])
if(e.Debug.assert(void 0!==y),!o(_.charCodeAt(g+y.text.length))){var k=d[2]
u.push({descriptor:y,message:k,position:g})}}}return u}function Qe(e,t){var n=166===e.parent.kind?e.parent:e,r=t.getTypeAtLocation(n)
return r&&32&r.flags?r:void 0}function Ye(n,r){function a(e){return{canRename:!1,localizedErrorMessage:e,displayName:void 0,fullDisplayName:void 0,kind:void 0,kindModifiers:void 0,triggerSpan:void 0}}function o(t){if(l){var n=t.getSourceFile(),r=it(e.normalizePath(n.fileName))
if(r===d)return!0}return!1}function c(t,n){var r=t.getStart(n),a=t.getWidth(n)
return 9===t.kind&&(r+=1,a-=2),e.createTextSpan(r,a)}s()
var _=i(n),u=Ze.getTypeChecker(),l=t.getDefaultLibFileName(t.getCompilationSettings()),d=it(e.normalizePath(l)),p=e.getTouchingWord(_,r,!0)
if(p&&(69===p.kind||9===p.kind||E(p)||pe(p))){var f=u.getSymbolAtLocation(p)
if(f){var g=f.getDeclarations()
if(g&&g.length>0){if(e.forEach(g,o))return a(e.getLocaleSpecificMessage(e.Diagnostics.You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library))
var m=e.stripQuotes(e.getDeclaredName(u,f,p)),y=M(f,p)
if(y)return{canRename:!0,kind:y,displayName:m,localizedErrorMessage:void 0,fullDisplayName:u.getFullyQualifiedName(f),kindModifiers:B(f),triggerSpan:c(p,_)}}}else if(9===p.kind){var h=Qe(p,u)
if(h){if(o(p))return a(e.getLocaleSpecificMessage(e.Diagnostics.You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library))
var m=e.stripQuotes(h.text)
return{canRename:!0,kind:te.variableElement,displayName:m,localizedErrorMessage:void 0,fullDisplayName:m,kindModifiers:re.none,triggerSpan:c(p,_)}}}}return a(e.getLocaleSpecificMessage(e.Diagnostics.You_cannot_rename_this_element))}void 0===n&&(n=d(t.useCaseSensitiveFileNames&&t.useCaseSensitiveFileNames(),t.getCurrentDirectory()))
var $e,Ze,et,tt=new se(t),nt=!1,rt=new de(t.getCancellationToken&&t.getCancellationToken()),at=t.getCurrentDirectory()
!e.localizedDiagnosticMessages&&t.getLocalizedDiagnosticMessages&&(e.localizedDiagnosticMessages=t.getLocalizedDiagnosticMessages())
var it=e.createGetCanonicalFileName(nt)
return{dispose:u,cleanupSemanticCache:_,getSyntacticDiagnostics:l,getSemanticDiagnostics:p,getCompilerOptionsDiagnostics:m,getSyntacticClassifications:Le,getSemanticClassifications:Oe,getEncodedSyntacticClassifications:Be,getEncodedSemanticClassifications:Fe,getCompletionsAtPosition:F,getCompletionEntryDetails:I,getSignatureHelpItems:Ee,getQuickInfoAtPosition:z,getDefinitionAtPosition:G,getTypeDefinitionAtPosition:X,getReferencesAtPosition:ce,findReferences:_e,getOccurrencesAtPosition:Q,getDocumentHighlights:Y,getNameOrDottedNameSpan:Ae,getBreakpointStatementAtPosition:Ne,getNavigateToItems:ye,getRenameInfo:Ye,findRenameLocations:ie,getNavigationBarItems:Pe,getOutliningSpans:Je,getTodoComments:Xe,getBraceMatchingAtPosition:Ke,getIndentationAtPosition:ze,getFormattingEditsForRange:je,getFormattingEditsForDocument:Ue,getFormattingEditsAfterKeystroke:qe,getDocCommentTemplateAtPosition:We,isValidBraceCompletionAtPosition:Ve,getEmitOutput:he,getNonBoundSourceFile:we,getProgram:c}}function R(e){return e.nameTable||F(e),e.nameTable}function F(t){function n(t){switch(t.kind){case 69:r[t.text]=void 0===r[t.text]?t.pos:-1
break
case 9:case 8:(e.isDeclarationName(t)||240===t.parent.kind||I(t)||e.isLiteralComputedPropertyDeclarationName(t))&&(r[t.text]=void 0===r[t.text]?t.pos:-1)
break
default:if(e.forEachChild(t,n),t.jsDocComments)for(var a=0,i=t.jsDocComments;a<i.length;a++){var o=i[a]
e.forEachChild(o,n)}}}var r=e.createMap()
n(t),t.nameTable=r}function I(e){return e&&e.parent&&173===e.parent.kind&&e.parent.argumentExpression===e}function M(){function t(t,n){return e.isAccessibilityModifier(t)?123===n||131===n||121===n||113===n?!0:!1:!0}function n(e,t){for(var n=[],a=e.spans,i=0,o=0,s=a.length;s>o;o+=3){var c=a[o],_=a[o+1],u=a[o+2]
if(i>=0){var l=c-i
l>0&&n.push({length:l,classification:ne.Whitespace})}n.push({length:_,classification:r(u)}),i=c+_}var d=t.length-i
return d>0&&n.push({length:d,classification:ne.Whitespace}),{entries:n,finalLexState:e.endOfLineState}}function r(e){switch(e){case 1:return ne.Comment
case 3:return ne.Keyword
case 4:return ne.NumberLiteral
case 5:return ne.Operator
case 6:return ne.StringLiteral
case 8:return ne.Whitespace
case 10:return ne.Punctuation
case 2:case 11:case 12:case 13:case 14:case 15:case 16:case 9:case 17:default:return ne.Identifier}}function a(e,t,r){return n(i(e,t,r),e)}function i(n,r,a){function i(){var t=u.getTokenPos(),r=u.getTextPos()
if(o(t,r,_(p)),r>=n.length)if(9===p){var a=u.getTokenText()
if(u.isUnterminated()){for(var i=a.length-1,s=0;92===a.charCodeAt(i-s);)s++
if(1&s){var c=a.charCodeAt(0)
g.endOfLineState=34===c?3:2}}}else 3===p?u.isUnterminated()&&(g.endOfLineState=1):e.isTemplateLiteralKind(p)?u.isUnterminated()&&(14===p?g.endOfLineState=5:11===p?g.endOfLineState=4:e.Debug.fail("Only 'NoSubstitutionTemplateLiteral's and 'TemplateTail's can be unterminated; got SyntaxKind #"+p)):d.length>0&&12===e.lastOrUndefined(d)&&(g.endOfLineState=6)}function o(e,t,n){if(8!==n){0===e&&s>0&&(e+=s),e-=s,t-=s
var r=t-e
r>0&&(g.spans.push(e),g.spans.push(r),g.spans.push(n))}}for(var s=0,p=0,f=0;d.length>0;)d.pop()
switch(r){case 3:n='"\\\n'+n,s=3
break
case 2:n="'\\\n"+n,s=3
break
case 1:n="/*\n"+n,s=3
break
case 4:n="`\n"+n,s=2
break
case 5:n="}\n"+n,s=2
case 6:d.push(12)}u.setText(n)
var g={endOfLineState:0,spans:[]},m=0
do{if(p=u.scan(),!e.isTrivia(p)){if(39!==p&&61!==p||l[f]){if(21===f&&c(p))p=69
else if(c(f)&&c(p)&&!t(f,p))p=69
else if(69===f&&25===p)m++
else if(27===p&&m>0)m--
else if(117===p||132===p||130===p||120===p||133===p)m>0&&!a&&(p=69)
else if(12===p)d.push(p)
else if(15===p)d.length>0&&d.push(p)
else if(16===p&&d.length>0){var y=e.lastOrUndefined(d)
12===y?(p=u.reScanTemplateToken(),14===p?d.pop():e.Debug.assert(13===p,"Should have been a template middle. Was "+p)):(e.Debug.assert(15===y,"Should have been an open brace. Was: "+p),d.pop())}}else 10===u.reScanSlashToken()&&(p=10)
f=p}i()}while(1!==p)
return g}function o(e){switch(e){case 37:case 39:case 40:case 35:case 36:case 43:case 44:case 45:case 25:case 27:case 28:case 29:case 91:case 90:case 116:case 30:case 31:case 32:case 33:case 46:case 48:case 47:case 51:case 52:case 67:case 66:case 68:case 63:case 64:case 65:case 57:case 58:case 59:case 61:case 62:case 56:case 24:return!0
default:return!1}}function s(e){switch(e){case 35:case 36:case 50:case 49:case 41:case 42:return!0
default:return!1}}function c(e){return e>=70&&138>=e}function _(t){if(c(t))return 3
if(o(t)||s(t))return 5
if(t>=15&&68>=t)return 10
switch(t){case 8:return 4
case 9:return 6
case 10:return 7
case 7:case 3:case 2:return 1
case 5:case 4:return 8
case 69:default:return e.isTemplateLiteralKind(t)?6:2}}var u=e.createScanner(2,!1),l=[]
l[69]=!0,l[9]=!0,l[8]=!0,l[10]=!0,l[97]=!0,l[41]=!0,l[42]=!0,l[18]=!0,l[20]=!0,l[16]=!0,l[99]=!0,l[84]=!0
var d=[]
return{getClassificationsForLine:a,getEncodedLexicalClassifications:i}}function L(t){if("undefined"!=typeof __dirname)return __dirname+e.directorySeparator+e.getDefaultLibFileName(t)
throw Error("getDefaultLibFilePath is only supported when consumed as a node module. ")}function B(){e.objectAllocator={getNodeConstructor:function(){return q},getTokenConstructor:function(){return V},getIdentifierConstructor:function(){return H},getSourceFileConstructor:function(){return Y},getSymbolConstructor:function(){return G},getTypeConstructor:function(){return X},getSignatureConstructor:function(){return Q}}}e.servicesVersion="0.5"
var J
!function(e){function t(e){return new n(e)}var n=function(){function e(e){this.text=e}return e.prototype.getText=function(e,t){return this.text.substring(e,t)},e.prototype.getLength=function(){return this.text.length},e.prototype.getChangeRange=function(e){},e}()
e.fromString=t}(J=e.ScriptSnapshot||(e.ScriptSnapshot={}))
var K,z=e.createScanner(2,!0),j=[],U=["augments","author","argument","borrows","class","constant","constructor","constructs","default","deprecated","description","event","example","extends","field","fileOverview","function","ignore","inner","lends","link","memberOf","name","namespace","param","private","property","public","requires","returns","see","since","static","throws","type","typedef","property","prop","version"],q=function(){function n(e,t,n){this.pos=t,this.end=n,this.flags=0,this.parent=void 0,this.kind=e}return n.prototype.getSourceFile=function(){return e.getSourceFileOfNode(this)},n.prototype.getStart=function(t,n){return e.getTokenPosOfNode(this,t,n)},n.prototype.getFullStart=function(){return this.pos},n.prototype.getEnd=function(){return this.end},n.prototype.getWidth=function(e){return this.getEnd()-this.getStart(e)},n.prototype.getFullWidth=function(){return this.end-this.pos},n.prototype.getLeadingTriviaWidth=function(e){return this.getStart(e)-this.pos},n.prototype.getFullText=function(e){return(e||this.getSourceFile()).text.substring(this.pos,this.end)},n.prototype.getText=function(e){return(e||this.getSourceFile()).text.substring(this.getStart(),this.getEnd())},n.prototype.addSyntheticNodes=function(e,n,r,a){for(z.setTextPos(n);r>n;){var i=a?z.scanJSDocToken():z.scan(),o=z.getTextPos()
r>=o&&e.push(t(i,n,o,this)),n=o}return n},n.prototype.createSyntaxList=function(e){var n=t(286,e.pos,e.end,this)
n._children=[]
for(var r=e.pos,a=0,i=e;a<i.length;a++){var o=i[a]
r<o.pos&&(r=this.addSyntheticNodes(n._children,r,o.pos)),n._children.push(o),r=o.end}return r<e.end&&this.addSyntheticNodes(n._children,r,e.end),n},n.prototype.createChildren=function(t){var n,r=this
if(this.kind>=139){z.setText((t||this.getSourceFile()).text),n=[]
var a=this.pos,i=this.kind>=273&&this.kind<=285,o=function(t){var o=e.isJSDocTag(t)
!o&&a<t.pos&&(a=r.addSyntheticNodes(n,a,t.pos,i)),n.push(t),o||(a=t.end)},s=function(e){a<e.pos&&(a=r.addSyntheticNodes(n,a,e.pos,i)),n.push(r.createSyntaxList(e)),a=e.end}
if(this.jsDocComments)for(var c=0,_=this.jsDocComments;c<_.length;c++){var u=_[c]
o(u)}e.forEachChild(this,o,s),a<this.end&&this.addSyntheticNodes(n,a,this.end),z.setText(void 0)}this._children=n||j},n.prototype.getChildCount=function(e){return this._children||this.createChildren(e),this._children.length},n.prototype.getChildAt=function(e,t){return this._children||this.createChildren(t),this._children[e]},n.prototype.getChildren=function(e){return this._children||this.createChildren(e),this._children},n.prototype.getFirstToken=function(e){var t=this.getChildren(e)
if(t.length){var n=t[0]
return n.kind<139?n:n.getFirstToken(e)}},n.prototype.getLastToken=function(t){var n=this.getChildren(t),r=e.lastOrUndefined(n)
return r?r.kind<139?r:r.getLastToken(t):void 0},n}(),W=function(){function t(e,t){this.pos=e,this.end=t,this.flags=0,this.parent=void 0}return t.prototype.getSourceFile=function(){return e.getSourceFileOfNode(this)},t.prototype.getStart=function(t,n){return e.getTokenPosOfNode(this,t,n)},t.prototype.getFullStart=function(){return this.pos},t.prototype.getEnd=function(){return this.end},t.prototype.getWidth=function(e){return this.getEnd()-this.getStart(e)},t.prototype.getFullWidth=function(){return this.end-this.pos},t.prototype.getLeadingTriviaWidth=function(e){return this.getStart(e)-this.pos},t.prototype.getFullText=function(e){return(e||this.getSourceFile()).text.substring(this.pos,this.end)},t.prototype.getText=function(e){return(e||this.getSourceFile()).text.substring(this.getStart(),this.getEnd())},t.prototype.getChildCount=function(e){return 0},t.prototype.getChildAt=function(e,t){},t.prototype.getChildren=function(e){return j},t.prototype.getFirstToken=function(e){},t.prototype.getLastToken=function(e){},t}(),V=function(e){function t(t,n,r){e.call(this,n,r),this.kind=t}return __extends(t,e),t}(W),H=function(e){function t(t,n,r){e.call(this,n,r)}return __extends(t,e),t}(W)
H.prototype.kind=69
var G=function(){function e(e,t){this.flags=e,this.name=t}return e.prototype.getFlags=function(){return this.flags},e.prototype.getName=function(){return this.name},e.prototype.getDeclarations=function(){return this.declarations},e.prototype.getDocumentationComment=function(){return void 0===this.documentationComment&&(this.documentationComment=n(this.declarations,this.name,!(4&this.flags))),this.documentationComment},e}(),X=function(){function e(e,t){this.checker=e,this.flags=t}return e.prototype.getFlags=function(){return this.flags},e.prototype.getSymbol=function(){return this.symbol},e.prototype.getProperties=function(){return this.checker.getPropertiesOfType(this)},e.prototype.getProperty=function(e){return this.checker.getPropertyOfType(this,e)},e.prototype.getApparentProperties=function(){return this.checker.getAugmentedPropertiesOfType(this)},e.prototype.getCallSignatures=function(){return this.checker.getSignaturesOfType(this,0)},e.prototype.getConstructSignatures=function(){return this.checker.getSignaturesOfType(this,1)},e.prototype.getStringIndexType=function(){return this.checker.getIndexTypeOfType(this,0)},e.prototype.getNumberIndexType=function(){return this.checker.getIndexTypeOfType(this,1)},e.prototype.getBaseTypes=function(){return 98304&this.flags?this.checker.getBaseTypes(this):void 0},e.prototype.getNonNullableType=function(){return this.checker.getNonNullableType(this)},e}(),Q=function(){function e(e){this.checker=e}return e.prototype.getDeclaration=function(){return this.declaration},e.prototype.getTypeParameters=function(){return this.typeParameters},e.prototype.getParameters=function(){return this.parameters},e.prototype.getReturnType=function(){return this.checker.getReturnTypeOfSignature(this)},e.prototype.getDocumentationComment=function(){return void 0===this.documentationComment&&(this.documentationComment=this.declaration?n([this.declaration],void 0,!1):[]),this.documentationComment},e}(),Y=function(t){function n(e,n,r){t.call(this,e,n,r)}return __extends(n,t),n.prototype.update=function(t,n){return e.updateSourceFile(this,t,n)},n.prototype.getLineAndCharacterOfPosition=function(t){return e.getLineAndCharacterOfPosition(this,t)},n.prototype.getLineStarts=function(){return e.getLineStarts(this)},n.prototype.getPositionOfLineAndCharacter=function(t,n){return e.getPositionOfLineAndCharacter(this,t,n)},n.prototype.getNamedDeclarations=function(){return this.namedDeclarations||(this.namedDeclarations=this.computeNamedDeclarations()),this.namedDeclarations},n.prototype.computeNamedDeclarations=function(){function t(e){var t=r(e)
if(t){var a=n(t)
a.push(e)}}function n(e){return o[e]||(o[e]=[])}function r(e){if(e.name){var t=a(e.name)
if(void 0!==t)return t
if(140===e.name.kind){var n=e.name.expression
return 172===n.kind?n.name.text:a(n)}}}function a(e){return!e||69!==e.kind&&9!==e.kind&&8!==e.kind?void 0:e.text}function i(a){switch(a.kind){case 220:case 179:case 147:case 146:var o=a,s=r(o)
if(s){var c=n(s),_=e.lastOrUndefined(c)
_&&o.parent===_.parent&&o.symbol===_.symbol?o.body&&!_.body&&(c[c.length-1]=o):c.push(o),e.forEachChild(a,i)}break
case 221:case 192:case 222:case 223:case 224:case 225:case 229:case 238:case 234:case 229:case 231:case 232:case 149:case 150:case 159:t(a),e.forEachChild(a,i)
break
case 142:if(!(92&a.flags))break
case 218:case 169:var u=a
if(e.isBindingPattern(u.name)){e.forEachChild(u.name,i)
break}u.initializer&&i(u.initializer)
case 255:case 145:case 144:t(a)
break
case 236:a.exportClause&&e.forEach(a.exportClause.elements,i)
break
case 230:var l=a.importClause
l&&(l.name&&t(l),l.namedBindings&&(232===l.namedBindings.kind?t(l.namedBindings):e.forEach(l.namedBindings.elements,i)))
break
default:e.forEachChild(a,i)}}var o=e.createMap()
return e.forEachChild(this,i),o},n}(q),$=function(){function e(){}return e}()
e.TextChange=$
var Z
!function(e){e.none="none",e.definition="definition",e.reference="reference",e.writtenReference="writtenReference"}(Z=e.HighlightSpanKind||(e.HighlightSpanKind={})),function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(e.IndentStyle||(e.IndentStyle={}))
e.IndentStyle
!function(e){e[e.aliasName=0]="aliasName",e[e.className=1]="className",e[e.enumName=2]="enumName",e[e.fieldName=3]="fieldName",e[e.interfaceName=4]="interfaceName",e[e.keyword=5]="keyword",e[e.lineBreak=6]="lineBreak",e[e.numericLiteral=7]="numericLiteral",e[e.stringLiteral=8]="stringLiteral",e[e.localName=9]="localName",e[e.methodName=10]="methodName",e[e.moduleName=11]="moduleName",e[e.operator=12]="operator",e[e.parameterName=13]="parameterName",e[e.propertyName=14]="propertyName",e[e.punctuation=15]="punctuation",e[e.space=16]="space",e[e.text=17]="text",e[e.typeParameterName=18]="typeParameterName",e[e.enumMemberName=19]="enumMemberName",e[e.functionName=20]="functionName",e[e.regularExpressionLiteral=21]="regularExpressionLiteral"}(e.SymbolDisplayPartKind||(e.SymbolDisplayPartKind={}))
var ee=e.SymbolDisplayPartKind
!function(e){e[e.JavaScript=0]="JavaScript",e[e.SourceMap=1]="SourceMap",e[e.Declaration=2]="Declaration"}(e.OutputFileType||(e.OutputFileType={}))
e.OutputFileType
!function(e){e[e.None=0]="None",e[e.InMultiLineCommentTrivia=1]="InMultiLineCommentTrivia",e[e.InSingleQuoteStringLiteral=2]="InSingleQuoteStringLiteral",e[e.InDoubleQuoteStringLiteral=3]="InDoubleQuoteStringLiteral",e[e.InTemplateHeadOrNoSubstitutionTemplate=4]="InTemplateHeadOrNoSubstitutionTemplate",e[e.InTemplateMiddleOrTail=5]="InTemplateMiddleOrTail",e[e.InTemplateSubstitutionPosition=6]="InTemplateSubstitutionPosition"}(e.EndOfLineState||(e.EndOfLineState={}))
e.EndOfLineState
!function(e){e[e.Punctuation=0]="Punctuation",e[e.Keyword=1]="Keyword",e[e.Operator=2]="Operator",e[e.Comment=3]="Comment",e[e.Whitespace=4]="Whitespace",e[e.Identifier=5]="Identifier",e[e.NumberLiteral=6]="NumberLiteral",e[e.StringLiteral=7]="StringLiteral",e[e.RegExpLiteral=8]="RegExpLiteral"}(e.TokenClass||(e.TokenClass={}))
var te,ne=e.TokenClass
!function(e){e.unknown="",e.warning="warning",e.keyword="keyword",e.scriptElement="script",e.moduleElement="module",e.classElement="class",e.localClassElement="local class",e.interfaceElement="interface",e.typeElement="type",e.enumElement="enum",e.enumMemberElement="const",e.variableElement="var",e.localVariableElement="local var",e.functionElement="function",e.localFunctionElement="local function",e.memberFunctionElement="method",e.memberGetAccessorElement="getter",e.memberSetAccessorElement="setter",e.memberVariableElement="property",e.constructorImplementationElement="constructor",e.callSignatureElement="call",e.indexSignatureElement="index",e.constructSignatureElement="construct",e.parameterElement="parameter",e.typeParameterElement="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.constElement="const",e.letElement="let"}(te=e.ScriptElementKind||(e.ScriptElementKind={}))
var re
!function(e){e.none="",e.publicMemberModifier="public",e.privateMemberModifier="private",e.protectedMemberModifier="protected",e.exportedModifier="export",e.ambientModifier="declare",e.staticModifier="static",e.abstractModifier="abstract"}(re=e.ScriptElementKindModifier||(e.ScriptElementKindModifier={}))
var ae=function(){function e(){}return e.comment="comment",e.identifier="identifier",e.keyword="keyword",e.numericLiteral="number",e.operator="operator",e.stringLiteral="string",e.whiteSpace="whitespace",e.text="text",e.punctuation="punctuation",e.className="class name",e.enumName="enum name",e.interfaceName="interface name",e.moduleName="module name",e.typeParameterName="type parameter name",e.typeAliasName="type alias name",e.parameterName="parameter name",e.docCommentTagName="doc comment tag name",e.jsxOpenTagName="jsx open tag name",e.jsxCloseTagName="jsx close tag name",e.jsxSelfClosingTagName="jsx self closing tag name",e.jsxAttribute="jsx attribute",e.jsxText="jsx text",e.jsxAttributeStringLiteralValue="jsx attribute string literal value",e}()
e.ClassificationTypeNames=ae,function(e){e[e.comment=1]="comment",e[e.identifier=2]="identifier",e[e.keyword=3]="keyword",e[e.numericLiteral=4]="numericLiteral",e[e.operator=5]="operator",e[e.stringLiteral=6]="stringLiteral",e[e.regularExpressionLiteral=7]="regularExpressionLiteral",e[e.whiteSpace=8]="whiteSpace",e[e.text=9]="text",e[e.punctuation=10]="punctuation",e[e.className=11]="className",e[e.enumName=12]="enumName",e[e.interfaceName=13]="interfaceName",e[e.moduleName=14]="moduleName",e[e.typeParameterName=15]="typeParameterName",e[e.typeAliasName=16]="typeAliasName",e[e.parameterName=17]="parameterName",e[e.docCommentTagName=18]="docCommentTagName",e[e.jsxOpenTagName=19]="jsxOpenTagName",e[e.jsxCloseTagName=20]="jsxCloseTagName",e[e.jsxSelfClosingTagName=21]="jsxSelfClosingTagName",e[e.jsxAttribute=22]="jsxAttribute",e[e.jsxText=23]="jsxText",e[e.jsxAttributeStringLiteralValue=24]="jsxAttributeStringLiteralValue"}(e.ClassificationType||(e.ClassificationType={}))
e.ClassificationType
e.displayPartsToString=r,e.getDefaultCompilerOptions=i
var ie,oe=function(){function t(t,n){this.host=t,this.getCanonicalFileName=n,this.currentDirectory=t.getCurrentDirectory(),this.fileNameToEntry=e.createFileMap()
for(var r=t.getScriptFileNames(),a=0,o=r;a<o.length;a++){var s=o[a]
this.createEntry(s,e.toPath(s,this.currentDirectory,n))}this._compilationSettings=t.getCompilationSettings()||i()}return t.prototype.compilationSettings=function(){return this._compilationSettings},t.prototype.createEntry=function(t,n){var r,a=this.host.getScriptSnapshot(t)
return a&&(r={hostFileName:t,version:this.host.getScriptVersion(t),scriptSnapshot:a,scriptKind:e.getScriptKind(t,this.host)}),this.fileNameToEntry.set(n,r),r},t.prototype.getEntry=function(e){return this.fileNameToEntry.get(e)},t.prototype.contains=function(e){return this.fileNameToEntry.contains(e)},t.prototype.getOrCreateEntry=function(t){var n=e.toPath(t,this.currentDirectory,this.getCanonicalFileName)
return this.getOrCreateEntryByPath(t,n)},t.prototype.getOrCreateEntryByPath=function(e,t){return this.contains(t)?this.getEntry(t):this.createEntry(e,t)},t.prototype.getRootFileNames=function(){var e=[]
return this.fileNameToEntry.forEachValue(function(t,n){n&&e.push(n.hostFileName)}),e},t.prototype.getVersion=function(e){var t=this.getEntry(e)
return t&&t.version},t.prototype.getScriptSnapshot=function(e){var t=this.getEntry(e)
return t&&t.scriptSnapshot},t}(),se=function(){function t(e){this.host=e}return t.prototype.getCurrentSourceFile=function(t){var n=this.host.getScriptSnapshot(t)
if(!n)throw Error("Could not find file: '"+t+"'.")
var r,a=e.getScriptKind(t,this.host),i=this.host.getScriptVersion(t)
if(this.currentFileName!==t)r=u(t,n,2,i,!0,a)
else if(this.currentFileVersion!==i){var o=n.getChangeRange(this.currentFileScriptSnapshot)
r=l(this.currentSourceFile,n,i,o)}return r&&(this.currentFileVersion=i,this.currentFileName=t,this.currentFileScriptSnapshot=n,this.currentSourceFile=r),this.currentSourceFile},t}()
e.transpileModule=c,e.transpile=_,e.createLanguageServiceSourceFile=u,e.disableIncrementalParsing=!1,e.updateLanguageServiceSourceFile=l,e.createDocumentRegistry=d,e.preProcessFile=p
var ce
!function(e){e[e.None=0]="None",e[e.Value=1]="Value",e[e.Type=2]="Type",e[e.Namespace=4]="Namespace",e[e.All=7]="All"}(ce||(ce={}))
var _e
!function(e){e[e.None=0]="None",e[e.Unlabeled=1]="Unlabeled",e[e.Labeled=2]="Labeled",e[e.All=3]="All"}(_e||(_e={}))
for(var ue=[],le=70;138>=le;le++)ue.push({name:e.tokenToString(le),kind:te.keyword,kindModifiers:re.none,sortText:"0"})
e.getContainerNode=N,e.getNodeKind=P
var de=function(){function t(e){this.cancellationToken=e}return t.prototype.isCancellationRequested=function(){return this.cancellationToken&&this.cancellationToken.isCancellationRequested()},t.prototype.throwIfCancellationRequested=function(){if(this.isCancellationRequested())throw new e.OperationCanceledException},t}()
e.createLanguageService=O,e.getNameTable=R,e.createClassifier=M,e.getDefaultLibFilePath=L,B()}(ts||(ts={}))
var ts
!function(e){var t
!function(t){function n(t,n){function r(n,r){var a=n.decorators?e.skipTrivia(t.text,n.decorators.end):n.getStart(t)
return e.createTextSpanFromBounds(a,(r||n).getEnd())}function a(t,n){return r(t,e.findNextToken(n,n.parent))}function i(e,n){return _(e&&l===t.getLineAndCharacterOfPosition(e.getStart(t)).line?e:n)}function o(n){return e.createTextSpanFromBounds(e.skipTrivia(t.text,n.pos),n.end)}function s(n){return _(e.findPrecedingToken(n.pos,t))}function c(t){return _(e.findNextToken(t,t.parent))}function _(n){function u(n){var a=n.parent.declarations
return a&&a[0]===n?r(e.findPrecedingToken(n.pos,t,n.parent),n):r(n)}function l(n){if(207===n.parent.parent.kind)return _(n.parent.parent)
if(e.isBindingPattern(n.name))return k(n.name)
if(n.initializer||1&n.flags||208===n.parent.parent.kind)return u(n)
var r=n.parent.declarations
return r&&r[0]!==n?_(e.findPrecedingToken(n.pos,t,n.parent)):void 0}function d(e){return!!e.initializer||void 0!==e.dotDotDotToken||!!(4&e.flags)||!!(8&e.flags)}function p(t){if(e.isBindingPattern(t.name))return k(t.name)
if(d(t))return r(t)
var n=t.parent,a=e.indexOf(n.parameters,t)
return a?p(n.parameters[a-1]):_(n.body)}function f(e){return!!(1&e.flags)||221===e.parent.kind&&148!==e.kind}function g(e){return e.body?f(e)?r(e):_(e.body):void 0}function m(e){var t=e.statements.length?e.statements[0]:e.getLastToken()
return f(e.parent)?i(e.parent,t):_(t)}function y(n){switch(n.parent.kind){case 225:if(1!==e.getModuleInstanceState(n.parent))return
case 205:case 203:case 207:return i(n.parent,n.statements[0])
case 206:case 208:return i(e.findPrecedingToken(n.pos,t,n.parent),n.statements[0])}return _(n.statements[0])}function h(e){if(219!==e.initializer.kind)return _(e.initializer)
var t=e.initializer
return t.declarations.length>0?_(t.declarations[0]):void 0}function v(e){return e.initializer?h(e):e.condition?r(e.condition):e.incrementor?r(e.incrementor):void 0}function k(t){var n=e.forEach(t.elements,function(e){return 193!==e.kind?e:void 0})
return n?_(n):169===t.parent.kind?r(t.parent):u(t.parent)}function b(t){e.Debug.assert(168!==t.kind&&167!==t.kind)
var n=170===t.kind?t.elements:t.properties,a=e.forEach(n,function(e){return 193!==e.kind?e:void 0})
return a?_(a):r(187===t.parent.kind?t.parent:t)}function x(n){switch(n.parent.kind){case 224:var r=n.parent
return i(e.findPrecedingToken(n.pos,t,n.parent),r.members.length?r.members[0]:r.getLastToken(t))
case 221:var a=n.parent
return i(e.findPrecedingToken(n.pos,t,n.parent),a.members.length?a.members[0]:a.getLastToken(t))
case 227:return i(n.parent.parent,n.parent.clauses[0])}return _(n.parent)}function D(t){switch(t.parent.kind){case 226:if(1!==e.getModuleInstanceState(t.parent.parent))return
case 224:case 221:return r(t)
case 199:if(e.isFunctionBlock(t.parent))return r(t)
case 252:return _(e.lastOrUndefined(t.parent.statements))
case 227:var n=t.parent,a=e.lastOrUndefined(n.clauses)
if(a)return _(e.lastOrUndefined(a.statements))
return
case 167:var i=t.parent
return _(e.lastOrUndefined(i.elements)||i)
default:if(e.isArrayLiteralOrObjectLiteralDestructuringPattern(t.parent)){var o=t.parent
return r(e.lastOrUndefined(o.properties)||o)}return _(t.parent)}}function C(t){switch(t.parent.kind){case 168:var n=t.parent
return r(e.lastOrUndefined(n.elements)||n)
default:if(e.isArrayLiteralOrObjectLiteralDestructuringPattern(t.parent)){var a=t.parent
return r(e.lastOrUndefined(a.elements)||a)}return _(t.parent)}}function S(e){return 204===e.parent.kind||174===e.parent.kind||175===e.parent.kind?s(e):178===e.parent.kind?c(e):_(e.parent)}function T(e){switch(e.parent.kind){case 179:case 220:case 180:case 147:case 146:case 149:case 150:case 148:case 205:case 204:case 206:case 208:case 174:case 175:case 178:return s(e)
default:return _(e.parent)}}function E(t){return e.isFunctionLike(t.parent)||253===t.parent.kind||142===t.parent.kind?s(t):_(t.parent)}function w(e){return 177===e.parent.kind?c(e):_(e.parent)}function A(e){return 204===e.parent.kind?a(e,e.parent.expression):_(e.parent)}function N(e){return 208===e.parent.kind?c(e):_(e.parent)}if(n)switch(n.kind){case 200:return l(n.declarationList.declarations[0])
case 218:case 145:case 144:return l(n)
case 142:return p(n)
case 220:case 147:case 146:case 149:case 150:case 148:case 179:case 180:return g(n)
case 199:if(e.isFunctionBlock(n))return m(n)
case 226:return y(n)
case 252:return y(n.block)
case 202:return r(n.expression)
case 211:return r(n.getChildAt(0),n.expression)
case 205:return a(n,n.expression)
case 204:return _(n.statement)
case 217:return r(n.getChildAt(0))
case 203:return a(n,n.expression)
case 214:return _(n.statement)
case 210:case 209:return r(n.getChildAt(0),n.label)
case 206:return v(n)
case 207:return a(n,n.expression)
case 208:return h(n)
case 213:return a(n,n.expression)
case 249:case 250:return _(n.statements[0])
case 216:return y(n.tryBlock)
case 215:return r(n,n.expression)
case 235:return r(n,n.expression)
case 229:return r(n,n.moduleReference)
case 230:return r(n,n.moduleSpecifier)
case 236:return r(n,n.moduleSpecifier)
case 225:if(1!==e.getModuleInstanceState(n))return
case 221:case 224:case 255:case 169:return r(n)
case 212:return _(n.statement)
case 143:return o(n.parent.decorators)
case 167:case 168:return k(n)
case 222:case 223:return
case 23:case 1:return i(e.findPrecedingToken(n.pos,t))
case 24:return s(n)
case 15:return x(n)
case 16:return D(n)
case 20:return C(n)
case 17:return S(n)
case 18:return T(n)
case 54:return E(n)
case 27:case 25:return w(n)
case 104:return A(n)
case 80:case 72:case 85:return c(n)
case 138:return N(n)
default:if(e.isArrayLiteralOrObjectLiteralDestructuringPattern(n))return b(n)
if((69===n.kind||191==n.kind||253===n.kind||254===n.kind)&&e.isArrayLiteralOrObjectLiteralDestructuringPattern(n.parent))return r(n)
if(187===n.kind){var P=n
if(e.isArrayLiteralOrObjectLiteralDestructuringPattern(P.left))return b(P.left)
if(56===P.operatorToken.kind&&e.isArrayLiteralOrObjectLiteralDestructuringPattern(P.parent))return r(n)
if(24===P.operatorToken.kind)return _(P.left)}if(e.isExpression(n))switch(n.parent.kind){case 204:return s(n)
case 143:return _(n.parent)
case 206:case 208:return r(n)
case 187:if(24===n.parent.operatorToken.kind)return r(n)
break
case 180:if(n.parent.body===n)return r(n)}if(253===n.parent.kind&&n.parent.name===n&&!e.isArrayLiteralOrObjectLiteralDestructuringPattern(n.parent.parent))return _(n.parent.initializer)
if(177===n.parent.kind&&n.parent.type===n)return c(n.parent.type)
if(e.isFunctionLike(n.parent)&&n.parent.type===n)return s(n)
if(218===n.parent.kind||142===n.parent.kind){var O=n.parent
if(O.initializer===n||O.type===n||e.isAssignmentOperator(n.kind))return s(n)}if(187===n.parent.kind){var P=n.parent
if(e.isArrayLiteralOrObjectLiteralDestructuringPattern(P.left)&&(P.right===n||P.operatorToken===n))return s(n)}return _(n.parent)}}if(!t.isDeclarationFile){var u=e.getTokenAtPosition(t,n),l=t.getLineAndCharacterOfPosition(n).line
if((!(t.getLineAndCharacterOfPosition(u.getStart(t)).line>l)||(u=e.findPrecedingToken(u.pos,t),u&&t.getLineAndCharacterOfPosition(u.getEnd()).line===l))&&!e.isInAmbientContext(u))return _(u)}}t.spanInSourceFileAtLocation=n}(t=e.BreakpointResolver||(e.BreakpointResolver={}))}(ts||(ts={}))
var debugObjectHost=Function("return this")(),ts
!function(e){function t(e,t){e&&e.log("*INTERNAL ERROR* - Exception in typescript services: "+t.message)}function n(t,n,r,a){var i
a&&(t.log(n),i=e.timestamp())
var o=r()
if(a){var s=e.timestamp()
if(t.log(n+" completed in "+(s-i)+" msec"),"string"==typeof o){var c=o
c.length>128&&(c=c.substring(0,128)+"..."),t.log("  result.length="+c.length+", result='"+JSON.stringify(c)+"'")}}return o}function r(e,t,n,r){return a(e,t,!0,n,r)}function a(r,a,i,o,s){try{var c=n(r,a,o,s)
return i?JSON.stringify({result:c}):c}catch(_){return _ instanceof e.OperationCanceledException?JSON.stringify({canceled:!0}):(t(r,_),_.description=a,JSON.stringify({error:_}))}}function i(e,t){return e.map(function(e){return o(e,t)})}function o(t,n){return{message:e.flattenDiagnosticMessageText(t.messageText,n),start:t.start,length:t.length,category:e.DiagnosticCategory[t.category].toLowerCase(),code:t.code}}function s(e){return{spans:e.spans.join(","),endOfLineState:e.endOfLineState}}var c=function(){function t(e){this.scriptSnapshotShim=e}return t.prototype.getText=function(e,t){return this.scriptSnapshotShim.getText(e,t)},t.prototype.getLength=function(){return this.scriptSnapshotShim.getLength()},t.prototype.getChangeRange=function(t){var n=t,r=this.scriptSnapshotShim.getChangeRange(n.scriptSnapshotShim)
if(null==r)return null
var a=JSON.parse(r)
return e.createTextChangeRange(e.createTextSpan(a.span.start,a.span.length),a.newLength)},t.prototype.dispose=function(){"dispose"in this.scriptSnapshotShim&&this.scriptSnapshotShim.dispose()},t}(),_=function(){function t(t){var n=this
this.shimHost=t,this.loggingEnabled=!1,this.tracingEnabled=!1,"getModuleResolutionsForFile"in this.shimHost&&(this.resolveModuleNames=function(t,r){var a=JSON.parse(n.shimHost.getModuleResolutionsForFile(r))
return e.map(t,function(t){var n=e.getProperty(a,t)
return n?{resolvedFileName:n}:void 0})}),"directoryExists"in this.shimHost&&(this.directoryExists=function(e){return n.shimHost.directoryExists(e)}),"getTypeReferenceDirectiveResolutionsForFile"in this.shimHost&&(this.resolveTypeReferenceDirectives=function(t,r){var a=JSON.parse(n.shimHost.getTypeReferenceDirectiveResolutionsForFile(r))
return e.map(t,function(t){return e.getProperty(a,t)})})}return t.prototype.log=function(e){this.loggingEnabled&&this.shimHost.log(e)},t.prototype.trace=function(e){this.tracingEnabled&&this.shimHost.trace(e)},t.prototype.error=function(e){this.shimHost.error(e)},t.prototype.getProjectVersion=function(){return this.shimHost.getProjectVersion?this.shimHost.getProjectVersion():void 0},t.prototype.useCaseSensitiveFileNames=function(){return this.shimHost.useCaseSensitiveFileNames?this.shimHost.useCaseSensitiveFileNames():!1},t.prototype.getCompilationSettings=function(){var e=this.shimHost.getCompilationSettings()
if(null==e||""==e)throw Error("LanguageServiceShimHostAdapter.getCompilationSettings: empty compilationSettings")
return JSON.parse(e)},t.prototype.getScriptFileNames=function(){var e=this.shimHost.getScriptFileNames()
return this.files=JSON.parse(e)},t.prototype.getScriptSnapshot=function(e){var t=this.shimHost.getScriptSnapshot(e)
return t&&new c(t)},t.prototype.getScriptKind=function(e){return"getScriptKind"in this.shimHost?this.shimHost.getScriptKind(e):0},t.prototype.getScriptVersion=function(e){return this.shimHost.getScriptVersion(e)},t.prototype.getLocalizedDiagnosticMessages=function(){var e=this.shimHost.getLocalizedDiagnosticMessages()
if(null==e||""==e)return null
try{return JSON.parse(e)}catch(t){return this.log(t.description||"diagnosticMessages.generated.json has invalid JSON format"),null}},t.prototype.getCancellationToken=function(){var e=this.shimHost.getCancellationToken()
return new u(e)},t.prototype.getCurrentDirectory=function(){return this.shimHost.getCurrentDirectory()},t.prototype.getDirectories=function(e){return JSON.parse(this.shimHost.getDirectories(e))},t.prototype.getDefaultLibFileName=function(e){return this.shimHost.getDefaultLibFileName(JSON.stringify(e))},t}()
e.LanguageServiceShimHostAdapter=_
var u=function(){function t(e){this.hostCancellationToken=e,this.lastCancellationCheckTime=0}return t.prototype.isCancellationRequested=function(){var t=e.timestamp(),n=Math.abs(t-this.lastCancellationCheckTime)
return n>10?(this.lastCancellationCheckTime=t,this.hostCancellationToken.isCancellationRequested()):!1},t}(),l=function(){function t(e){var t=this
this.shimHost=e,this.useCaseSensitiveFileNames=this.shimHost.useCaseSensitiveFileNames?this.shimHost.useCaseSensitiveFileNames():!1,"directoryExists"in this.shimHost&&(this.directoryExists=function(e){return t.shimHost.directoryExists(e)}),"realpath"in this.shimHost&&(this.realpath=function(e){return t.shimHost.realpath(e)})}return t.prototype.readDirectory=function(t,n,r,a,i){try{var o=e.getFileMatcherPatterns(t,n,r,a,this.shimHost.useCaseSensitiveFileNames(),this.shimHost.getCurrentDirectory())
return JSON.parse(this.shimHost.readDirectory(t,JSON.stringify(n),JSON.stringify(o.basePaths),o.excludePattern,o.includeFilePattern,o.includeDirectoryPattern,i))}catch(s){for(var c=[],_=0,u=n;_<u.length;_++)for(var l=u[_],d=0,p=this.readDirectoryFallback(t,l,r);d<p.length;d++){var f=p[d]
e.contains(c,f)||c.push(f)}return c}},t.prototype.fileExists=function(e){return this.shimHost.fileExists(e)},t.prototype.readFile=function(e){return this.shimHost.readFile(e)},t.prototype.readDirectoryFallback=function(e,t,n){return JSON.parse(this.shimHost.readDirectory(e,t,JSON.stringify(n)))},t.prototype.getDirectories=function(e){return JSON.parse(this.shimHost.getDirectories(e))},t}()
e.CoreServicesShimHostAdapter=l
var d=function(){function e(e){this.factory=e,e.registerShim(this)}return e.prototype.dispose=function(e){this.factory.unregisterShim(this)},e}()
e.realizeDiagnostics=i
var p=function(t){function n(e,n,r){t.call(this,e),this.host=n,this.languageService=r,this.logPerformance=!1,this.logger=this.host}return __extends(n,t),n.prototype.forwardJSONCall=function(e,t){return r(this.logger,e,t,this.logPerformance)},n.prototype.dispose=function(e){this.logger.log("dispose()"),this.languageService.dispose(),this.languageService=null,debugObjectHost&&debugObjectHost.CollectGarbage&&(debugObjectHost.CollectGarbage(),this.logger.log("CollectGarbage()")),this.logger=null,t.prototype.dispose.call(this,e)},n.prototype.refresh=function(e){this.forwardJSONCall("refresh("+e+")",function(){return null})},n.prototype.cleanupSemanticCache=function(){var e=this
this.forwardJSONCall("cleanupSemanticCache()",function(){return e.languageService.cleanupSemanticCache(),null})},n.prototype.realizeDiagnostics=function(t){var n=e.getNewLineOrDefaultFromHost(this.host)
return e.realizeDiagnostics(t,n)},n.prototype.getSyntacticClassifications=function(t,n,r){var a=this
return this.forwardJSONCall("getSyntacticClassifications('"+t+"', "+n+", "+r+")",function(){return a.languageService.getSyntacticClassifications(t,e.createTextSpan(n,r))})},n.prototype.getSemanticClassifications=function(t,n,r){var a=this
return this.forwardJSONCall("getSemanticClassifications('"+t+"', "+n+", "+r+")",function(){return a.languageService.getSemanticClassifications(t,e.createTextSpan(n,r))})},n.prototype.getEncodedSyntacticClassifications=function(t,n,r){var a=this
return this.forwardJSONCall("getEncodedSyntacticClassifications('"+t+"', "+n+", "+r+")",function(){return s(a.languageService.getEncodedSyntacticClassifications(t,e.createTextSpan(n,r)))})},n.prototype.getEncodedSemanticClassifications=function(t,n,r){var a=this
return this.forwardJSONCall("getEncodedSemanticClassifications('"+t+"', "+n+", "+r+")",function(){return s(a.languageService.getEncodedSemanticClassifications(t,e.createTextSpan(n,r)))})},n.prototype.getSyntacticDiagnostics=function(e){var t=this
return this.forwardJSONCall("getSyntacticDiagnostics('"+e+"')",function(){var n=t.languageService.getSyntacticDiagnostics(e)
return t.realizeDiagnostics(n)})},n.prototype.getSemanticDiagnostics=function(e){var t=this
return this.forwardJSONCall("getSemanticDiagnostics('"+e+"')",function(){var n=t.languageService.getSemanticDiagnostics(e)
return t.realizeDiagnostics(n)})},n.prototype.getCompilerOptionsDiagnostics=function(){var e=this
return this.forwardJSONCall("getCompilerOptionsDiagnostics()",function(){var t=e.languageService.getCompilerOptionsDiagnostics()
return e.realizeDiagnostics(t)})},n.prototype.getQuickInfoAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getQuickInfoAtPosition('"+e+"', "+t+")",function(){return n.languageService.getQuickInfoAtPosition(e,t)})},n.prototype.getNameOrDottedNameSpan=function(e,t,n){var r=this
return this.forwardJSONCall("getNameOrDottedNameSpan('"+e+"', "+t+", "+n+")",function(){return r.languageService.getNameOrDottedNameSpan(e,t,n)})},n.prototype.getBreakpointStatementAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getBreakpointStatementAtPosition('"+e+"', "+t+")",function(){return n.languageService.getBreakpointStatementAtPosition(e,t)})},n.prototype.getSignatureHelpItems=function(e,t){var n=this
return this.forwardJSONCall("getSignatureHelpItems('"+e+"', "+t+")",function(){return n.languageService.getSignatureHelpItems(e,t)})},n.prototype.getDefinitionAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getDefinitionAtPosition('"+e+"', "+t+")",function(){return n.languageService.getDefinitionAtPosition(e,t)})},n.prototype.getTypeDefinitionAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getTypeDefinitionAtPosition('"+e+"', "+t+")",function(){return n.languageService.getTypeDefinitionAtPosition(e,t)})},n.prototype.getRenameInfo=function(e,t){var n=this
return this.forwardJSONCall("getRenameInfo('"+e+"', "+t+")",function(){return n.languageService.getRenameInfo(e,t)})},n.prototype.findRenameLocations=function(e,t,n,r){var a=this
return this.forwardJSONCall("findRenameLocations('"+e+"', "+t+", "+n+", "+r+")",function(){return a.languageService.findRenameLocations(e,t,n,r)})},n.prototype.getBraceMatchingAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getBraceMatchingAtPosition('"+e+"', "+t+")",function(){return n.languageService.getBraceMatchingAtPosition(e,t)})},n.prototype.isValidBraceCompletionAtPosition=function(e,t,n){var r=this
return this.forwardJSONCall("isValidBraceCompletionAtPosition('"+e+"', "+t+", "+n+")",function(){return r.languageService.isValidBraceCompletionAtPosition(e,t,n)})},n.prototype.getIndentationAtPosition=function(e,t,n){var r=this
return this.forwardJSONCall("getIndentationAtPosition('"+e+"', "+t+")",function(){var a=JSON.parse(n)
return r.languageService.getIndentationAtPosition(e,t,a)})},n.prototype.getReferencesAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getReferencesAtPosition('"+e+"', "+t+")",function(){return n.languageService.getReferencesAtPosition(e,t)})},n.prototype.findReferences=function(e,t){var n=this
return this.forwardJSONCall("findReferences('"+e+"', "+t+")",function(){return n.languageService.findReferences(e,t)})},n.prototype.getOccurrencesAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getOccurrencesAtPosition('"+e+"', "+t+")",function(){return n.languageService.getOccurrencesAtPosition(e,t)})},n.prototype.getDocumentHighlights=function(t,n,r){var a=this
return this.forwardJSONCall("getDocumentHighlights('"+t+"', "+n+")",function(){var i=a.languageService.getDocumentHighlights(t,n,JSON.parse(r)),o=e.normalizeSlashes(t).toLowerCase()
return e.filter(i,function(t){return e.normalizeSlashes(t.fileName).toLowerCase()===o})})},n.prototype.getCompletionsAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getCompletionsAtPosition('"+e+"', "+t+")",function(){return n.languageService.getCompletionsAtPosition(e,t)})},n.prototype.getCompletionEntryDetails=function(e,t,n){var r=this
return this.forwardJSONCall("getCompletionEntryDetails('"+e+"', "+t+", '"+n+"')",function(){return r.languageService.getCompletionEntryDetails(e,t,n)})},n.prototype.getFormattingEditsForRange=function(e,t,n,r){var a=this
return this.forwardJSONCall("getFormattingEditsForRange('"+e+"', "+t+", "+n+")",function(){var i=JSON.parse(r)
return a.languageService.getFormattingEditsForRange(e,t,n,i)})},n.prototype.getFormattingEditsForDocument=function(e,t){var n=this
return this.forwardJSONCall("getFormattingEditsForDocument('"+e+"')",function(){var r=JSON.parse(t)
return n.languageService.getFormattingEditsForDocument(e,r)})},n.prototype.getFormattingEditsAfterKeystroke=function(e,t,n,r){var a=this
return this.forwardJSONCall("getFormattingEditsAfterKeystroke('"+e+"', "+t+", '"+n+"')",function(){var i=JSON.parse(r)
return a.languageService.getFormattingEditsAfterKeystroke(e,t,n,i)})},n.prototype.getDocCommentTemplateAtPosition=function(e,t){var n=this
return this.forwardJSONCall("getDocCommentTemplateAtPosition('"+e+"', "+t+")",function(){return n.languageService.getDocCommentTemplateAtPosition(e,t)})},n.prototype.getNavigateToItems=function(e,t){var n=this
return this.forwardJSONCall("getNavigateToItems('"+e+"', "+t+")",function(){return n.languageService.getNavigateToItems(e,t)})},n.prototype.getNavigationBarItems=function(e){var t=this
return this.forwardJSONCall("getNavigationBarItems('"+e+"')",function(){return t.languageService.getNavigationBarItems(e)})},n.prototype.getOutliningSpans=function(e){var t=this
return this.forwardJSONCall("getOutliningSpans('"+e+"')",function(){return t.languageService.getOutliningSpans(e)})},n.prototype.getTodoComments=function(e,t){var n=this
return this.forwardJSONCall("getTodoComments('"+e+"')",function(){return n.languageService.getTodoComments(e,JSON.parse(t))})},n.prototype.getEmitOutput=function(e){var t=this
return this.forwardJSONCall("getEmitOutput('"+e+"')",function(){return t.languageService.getEmitOutput(e)})},n.prototype.getEmitOutputObject=function(e){var t=this
return a(this.logger,"getEmitOutput('"+e+"')",!1,function(){return t.languageService.getEmitOutput(e)},this.logPerformance)},n}(d),f=function(t){function n(n,r){t.call(this,n),this.logger=r,this.logPerformance=!1,this.classifier=e.createClassifier()}return __extends(n,t),n.prototype.getEncodedLexicalClassifications=function(e,t,n){var a=this
return r(this.logger,"getEncodedLexicalClassifications",function(){return s(a.classifier.getEncodedLexicalClassifications(e,t,n))},this.logPerformance)},n.prototype.getClassificationsForLine=function(e,t,n){for(var r=this.classifier.getClassificationsForLine(e,t,n),a="",i=0,o=r.entries;i<o.length;i++){var s=o[i]
a+=s.length+"\n",a+=s.classification+"\n"}return a+=r.finalLexState},n}(d),g=function(t){function n(e,n,r){t.call(this,e),this.logger=n,this.host=r,this.logPerformance=!1}return __extends(n,t),n.prototype.forwardJSONCall=function(e,t){return r(this.logger,e,t,this.logPerformance)},n.prototype.resolveModuleName=function(t,n,r){var a=this
return this.forwardJSONCall("resolveModuleName('"+t+"')",function(){var i=JSON.parse(r),o=e.resolveModuleName(n,e.normalizeSlashes(t),i,a.host)
return{resolvedFileName:o.resolvedModule?o.resolvedModule.resolvedFileName:void 0,failedLookupLocations:o.failedLookupLocations}})},n.prototype.resolveTypeReferenceDirective=function(t,n,r){var a=this
return this.forwardJSONCall("resolveTypeReferenceDirective("+t+")",function(){var i=JSON.parse(r),o=e.resolveTypeReferenceDirective(n,e.normalizeSlashes(t),i,a.host)
return{resolvedFileName:o.resolvedTypeReferenceDirective?o.resolvedTypeReferenceDirective.resolvedFileName:void 0,primary:o.resolvedTypeReferenceDirective?o.resolvedTypeReferenceDirective.primary:!0,failedLookupLocations:o.failedLookupLocations}})},n.prototype.getPreProcessedFileInfo=function(t,n){var r=this
return this.forwardJSONCall("getPreProcessedFileInfo('"+t+"')",function(){var t=e.preProcessFile(n.getText(0,n.getLength()),!0,!0)
return{referencedFiles:r.convertFileReferences(t.referencedFiles),importedFiles:r.convertFileReferences(t.importedFiles),ambientExternalModules:t.ambientExternalModules,isLibFile:t.isLibFile,typeReferenceDirectives:r.convertFileReferences(t.typeReferenceDirectives)}})},n.prototype.getAutomaticTypeDirectiveNames=function(t){var n=this
return this.forwardJSONCall("getAutomaticTypeDirectiveNames('"+t+"')",function(){var r=JSON.parse(t)
return e.getAutomaticTypeDirectiveNames(r,n.host)})},n.prototype.convertFileReferences=function(t){if(t){for(var n=[],r=0,a=t;r<a.length;r++){var i=a[r]
n.push({path:e.normalizeSlashes(i.fileName),position:i.pos,length:i.end-i.pos})}return n}},n.prototype.getTSConfigFileInfo=function(t,n){var r=this
return this.forwardJSONCall("getTSConfigFileInfo('"+t+"')",function(){var a=n.getText(0,n.getLength()),s=e.parseConfigFileTextToJson(t,a)
if(s.error)return{options:{},typingOptions:{},files:[],raw:{},errors:[o(s.error,"\r\n")]}
var c=e.normalizeSlashes(t),_=e.parseJsonConfigFileContent(s.config,r.host,e.getDirectoryPath(c),{},c)
return{options:_.options,typingOptions:_.typingOptions,files:_.fileNames,raw:_.raw,errors:i(_.errors,"\r\n")}})},n.prototype.getDefaultCompilationSettings=function(){return this.forwardJSONCall("getDefaultCompilationSettings()",function(){return e.getDefaultCompilerOptions()})},n.prototype.discoverTypings=function(t){var n=this,r=e.createGetCanonicalFileName(!1)
return this.forwardJSONCall("discoverTypings()",function(){var a=JSON.parse(t)
return e.JsTyping.discoverTypings(n.host,a.fileNames,e.toPath(a.projectRootPath,a.projectRootPath,r),e.toPath(a.safeListPath,a.safeListPath,r),a.packageNameToTypingLocation,a.typingOptions,a.compilerOptions)})},n}(d),m=function(){function n(){this._shims=[]}return n.prototype.getServicesVersion=function(){return e.servicesVersion},n.prototype.createLanguageServiceShim=function(n){try{void 0===this.documentRegistry&&(this.documentRegistry=e.createDocumentRegistry(n.useCaseSensitiveFileNames&&n.useCaseSensitiveFileNames(),n.getCurrentDirectory()))
var r=new _(n),a=e.createLanguageService(r,this.documentRegistry)
return new p(this,n,a)}catch(i){throw t(n,i),i}},n.prototype.createClassifierShim=function(e){try{return new f(this,e)}catch(n){throw t(e,n),n}},n.prototype.createCoreServicesShim=function(e){try{var n=new l(e)
return new g(this,e,n)}catch(r){throw t(e,r),r}},n.prototype.close=function(){this._shims=[],this.documentRegistry=void 0},n.prototype.registerShim=function(e){this._shims.push(e)},n.prototype.unregisterShim=function(e){for(var t=0,n=this._shims.length;n>t;t++)if(this._shims[t]===e)return void delete this._shims[t]
throw Error("Invalid operation")},n}()
e.TypeScriptServicesFactory=m,"undefined"!=typeof module&&module.exports&&(module.exports=e)}(ts||(ts={}))
var TypeScript
!function(e){var t
!function(e){e.TypeScriptServicesFactory=ts.TypeScriptServicesFactory}(t=e.Services||(e.Services={}))}(TypeScript||(TypeScript={}))
var toolsVersion="2.0"