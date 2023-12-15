// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ThreatAnalysis/nls/strings":{_widgetLabel:"An\u00e1lise de Camada",threatAnalysisMainPageTitle:"Baseado no Guia de Contraterrorismo do JCAT",jcatURL:"https://www.dni.gov/nctc/jcat/references.html",inputLocation:"Local de Entrada",interactive:"Interativo",fromCoord:"Coordenada Fixa",existingFeature:"Das Fei\u00e7\u00f5es Existentes",threatAnalysisCoordInputLabel:"Localiza\u00e7\u00e3o da Camada",enterCoords:"Inserir Coordenadas",threatAddPointToolTip:"Adicionar Localiza\u00e7\u00e3o da Camada",
threatDrawPointToolTip:"Clique para adicionar localiza\u00e7\u00e3o da camada",threatType:"Tipo de Camada",threatPlaceholder:"Inicie digitando para procurar por uma camada",zoneTypeLabel:"Tipo de Zona",feetLabel:"P\u00e9s",metersLabel:"Metros",unitsLabel:"Unidades",threatGraphicLayer:"Amea\u00e7a-Gr\u00e1fico",style:"Estilo",settingsTitle:"Configura\u00e7\u00f5es",colorPicker:"colorPicker",lineStyles:{esriSLSDash:"Tra\u00e7o",esriSLSDashDot:"Tra\u00e7o Ponto",esriSLSDashDotDot:"Tra\u00e7o Ponto Ponto",
esriSLSDot:"Ponto",esriSLSLongDash:"Tra\u00e7o Longo",esriSLSLongDashDot:"Tra\u00e7o Longo Ponto",esriSLSNull:"Nulo",esriSLSShortDash:"Tra\u00e7o Curto",esriSLSShortDashDot:"Ponto Tra\u00e7o Curto",esriSLSShortDashDotDot:"Ponto Ponto Tra\u00e7o Curto",esriSLSShortDot:"Ponto Curto",esriSLSSolid:"S\u00f3lido"},fillStyles:{esriSFSBackwardDiagonal:"Para Tr\u00e1s",esriSFSCross:"Transversal",esriSFSDiagonalCross:"Diagonal",esriSFSForwardDiagonal:"Para Frente",esriSFSHorizontal:"Horizontal",esriSFSNull:"Nulo",
esriSFSSolid:"S\u00f3lido",esriSFSVertical:"Vertical"},resultsTitle:"Resultados",publishTABtn:"Publicar",layerName:"Nome da Camada Publicada",invalidLayerName:"O nome da camada deve conter somente caracteres alfanum\u00e9ricos e underscores",missingLayerNameMessage:"Voc\u00ea deve inserir um nome de camada v\u00e1lida antes de poder publicar",publishingFailedLayerExists:"Falha na Publica\u00e7\u00e3o: Voc\u00ea j\u00e1 tem um servi\u00e7o de fei\u00e7\u00e3o denominado {0}. Escolha outro nome da camada.",
checkService:"Verificar Servi\u00e7o: {0}",createService:"Criar Servi\u00e7o: {0}",unableToCreate:"N\u00e3o foi poss\u00edvel criar: {0}",addToDefinition:"Adicionar \u00e0 defini\u00e7\u00e3o: {0}",successfullyPublished:"Camada da web publicada com sucesso",successfullyAppended:"Novas fei\u00e7\u00f5es anexadas com sucesso na camada da web",manageWebLayerText:"Gerenciar a camada de web",userRole:"N\u00e3o foi poss\u00edvel criar servi\u00e7o pois o usu\u00e1rio n\u00e3o tem permiss\u00f5es",retrieveExistingLayerError:"N\u00e3o foi poss\u00edvel recuperar {0}. Publique utilizando outro nome da camada",
publishToNewLayer:"Publicar resultados para uma nova camada de fei\u00e7\u00e3o",layerNameExists:"A camada j\u00e1 existe. Utilize um nome de camada diferente.",pipeBombLabel:"Bomba Caseira",suicideBombLabel:"Ataque Suicida",briefcaseLabel:"Porta-arquivos",carLabel:"Carro",suvVanLabel:"SUV/VAN",smallDeliveryTruckLabel:"Caminh\u00e3o de entrega pequeno",containerWaterTruckLabel:"Cont\u00eainer/Caminh\u00e3o Pipa",semiTrailerLabel:"Semi-Trailer",transparencyLabel:"Transpar\u00eancia",outline:"Contorno",
fill:"Preencher (a cor somente se aplica quando o estilo \u00e9 definido para s\u00f3lido)",createBtn:"Criar Zonas",clearBtn:"Apagar",invalidNumberMessage:"Os valores inseridos n\u00e3o s\u00e3o v\u00e1lidos",invalidRangeMessage:"O valor deve ser maior que 0",parseCoordinatesError:"N\u00e3o \u00e9 poss\u00edvel analisar coordenadas. Verifique sua entrada.",selectDrawModeLabel:"Selecionar Modo de Desenho",selectFeatureLabel:"Selecionar Fei\u00e7\u00e3o Desta Camada",smallLPGTank:"Tanque LPG Pequeno",
largeLPGTank:"Tanque LPG Grande",commercialResidentialLPGTank:"Tanque LPG Comercial/Residencial",smallLPGTruck:"Caminh\u00e3o LPG Pequeno",semiTankerLPG:"Semi-petroleiro LPG",zoneDescriptionColLabel:"Descri\u00e7\u00e3o da zona",distanceColLabel:"Dist\u00e2ncia",zoneDescColLabel:"Descri\u00e7\u00e3o da zona",descriptionLabel:"Descri\u00e7\u00e3o",editThreatZonePopupLabel:"Editar sibologia da zona de amea\u00e7a",symbologyColLabel:"Simbologia",actions:"A\u00e7\u00f5es",threatTypeSelectLabel:"Selecione um tipo de amea\u00e7a:",
distanceLabel:"Dist\u00e2ncia (${unitAbbr})",layerCountHint:"Dica: Uma camada da web com ${layerCount} camada de fei\u00e7\u00e3o ser\u00e1 publicada.",selectLabel:"Selecionar",mandatoryLabel:"Dist\u00e2ncia Obrigat\u00f3ria de Evacua\u00e7\u00e3o",safeLabel:"Dist\u00e2ncia de Evacua\u00e7\u00e3o Segura",fireBallDiameterLable:"Di\u00e2metro da Bola de Fogo",lpgSafeDistanceLable:"Dist\u00e2ncia Segura",_localized:{}}});