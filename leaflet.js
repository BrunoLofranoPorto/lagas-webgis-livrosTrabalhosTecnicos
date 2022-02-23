var map = L.map('map', {
    center: [16.65, -11.38],
    zoom: 3
})
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © OpenStreetMap contributors',
maxZoom: 19
}).addTo(map);

const data = [
    {"title": 'Dossiê aplicações em geografia, saúde e meio ambiente', "author": 'Helen Gurgel e Anne-Elizabeth Laques', "type": 'Livro', "accessLink": 'https://journals.openedition.org/confins/22710', "year": '2019' ,"lat": 49.026818, "lng": 2.332051, "complement": 'Confins (Paris)'},
    {"title": 'Geografia e Saúde: Teoría e Método na Atualidade', "author": 'Helen Gurgel e Nayara Belle', "type": 'e-Book', "accessLink": 'https://livros.unb.br/index.php/portal/catalog/book/161', "year": '2019', "lat": -15.782458, "lng": -47.892158, "complement": 'Brasília-DF: Universidade de Brasília'},
    {"title": 'Clima, Saúde e Cidadania', "author": 'Monteiro, Corvalan, Freitas, Barcellos, Silva, Gurgel, Galvão, Porto, Barata, Feitosa, Barrocas, Gracie, Hacon, Portela e Carmo', "type": 'Livro', "accessLink": 'https://www.arca.fiocruz.br/bitstream/icict/46279/2/04_clima.pdf', "year": '2018', "lat": -22.897921, "lng": -43.173241, "complement": 'Rio de Janeiro: FIOCRUZ'},
    {"title": 'Dossiê Geografia, Saúde e Ambiente: uma abordagem da complexidade dos problemas atuais na saúde', "author": 'Helen Gurgel e Anne-Elizabeth Laques', "type": 'Livro', "accessLink": 'https://www.researchgate.net/publication/329556992_Dossie_Geografia_saude_e_ambiente_uma_abordagem_da_complexidade_dos_problemas_atuais_na_saude_Dossier_Geographie_sante_et_environnement_une_approche_de_la_complexite_des_questionnements_actuels_en_san', "year": '2018', "lat": 49.026818, "lng": 2.332051, "complement": 'Confins (Paris)'},
    {"title": 'Anais do 7º Simpósio Nacional de Geografia da Saúde', "author": 'Gurgel, Barcellos, Laques, Mota e Reis Junior', "type": 'Anais de congresso (Orgs.)', "accessLink": 'https://repositorio.unb.br/handle/10482/23614', "year": '2015', "lat": -15.782458, "lng": -47.892158, "complement": 'Brasília-DF: Universidade de Brasília'},
    {"title": 'Brasília-DF: Distribuição espacial, clima urbano e dengue na capital do Brasil', "author": 'Ercília Steinke, Valdir Steinke e Helen Gurgel', "type": 'Capítulo de Livro', "accessLink": 'https://www.researchgate.net/publication/355470105_BrasiliaDF_Distribuicao_espacial_clima_urbano_e_dengue_na_capital_do_Brasil', "year": '2021', "lat": -15.782458, "lng": -47.892158, "complement": 'A Dengue no Brasil: uma perspectiva geográfica (editora CRV)'},
    {"title": 'intersetorialidade nas atividades de estimulação precoce de crianças com síndrome congênita por Zika no Distrito Federal', "author": 'Bezerra, Rudy, Gurgel e Araujo', "type": 'Capítulo de livro', "accessLink": 'https://www.researchgate.net/publication/336220408_Intersetorialidade_nas_atividades_de_estimulacao_precoce_de_criancas_com_sindrome_congenita_por_Zika_no_Distrito_Federal_Intersectionality_in_activities_of_early_stimulation_of_children_with_congenita', "year": '2019', "lat": -15.782458, "lng": -47.892158, "complement": 'Regionalização e Gestão dos Serviços de Saúde (Instituto Federal Catarinense)'},
    {"title": 'Avaliação da implantação de geotecnologias aplicadas à saúde: uma proposta metodológica', "author": 'Santana, Machado, Gurgel, Oliveira e Andreev', "type": 'Capítulo de livro', "accessLink": 'https://www.researchgate.net/publication/335985195_Avaliacao_de_implantacao_de_geotecnologias_aplicadas_a_saude_uma_proposta_metodologica_Evaluation_of_implementation_of_geotechnologies_applied_to_health_a_methodological_proposal', "year": '2019', "lat": -26.903692, "lng": -49.072761, "complement": 'Regionalização e Gestão dos Serviços de Saúde (Instituto Federal Catarinense)'},
    {"title": 'Avaliação da morbidade por neoplasias após o desastre da Samarco em Mariana-MG', "author": 'Silva, Rudy, Matos, Silva e Gurgel', "type": 'Capítulo de livro', "accessLink": "https://www.researchgate.net/publication/335841031_Avaliacao_da_morbidade_por_neoplasias_apos_o_desastre_da_Samarco_em_Mariana_-_MG_Evoluation_of_morbidity_by_neoplasms_after_the_Samarco's_disaster_in_Mariana_-_MG", "year": '2019', "lat": -20.370965, "lng": -43.416283, "complement": 'Mudanças ambientais, desastres e vulnerabilidade social (Instituto Federal Catarinense)'},
    {"title": 'Existe relação direta e temporal entre a persistência de incêndios e as internações por doenças respiratórias? Análise do cenário do município de Palmas e da APA do Lajeado, Tocantins, entre os anos de 2012 e 2018', "author": 'Andrade, Leite, Rudy, Rodrigues, Daldegan, Gurgel e Libonati', "type": 'Capítulo de livro', "accessLink": 'https://www.researchgate.net/publication/335840930_Existe_relacao_direta_e_temporal_entre_a_persistencia_de_incendios_e_as_internacoes_por_doencas_respiratorias_Analise_do_cenario_do_municipio_de_Palmas_e_da_APA_do_Lajeado_Tocantins_entre_os_anos_de_2?_sg=Jpm-TodnN3tguPhjTKU9E5T0coA88_Cw7b2IwDY3m2g0Rp5Th08uL0VHQ6JouEmiYOXU3BngisqHk1pt578txpi6e1lLIFyxL7KaRdTk.RDFYosjOcgZPFnylTjjPwujcDUkTGRThRWKMJ0Qe1jh3M2kX29B15XVvI5wObK8ClqCEFrwwuawEugx0Hcf7yw', "year": '2019', "lat": -10.241662, "lng": -48.324666, "complement": 'Abordagens Geográficas da vigilância, prevenção e promoção da saúde (Instituto Federal Catarinense)'},
    {"title": 'Migração e Saúde: um estudo exploratório a partir dos registros administrativos do Brasil', "author": 'Nayara Belle, Karina Matos e Helen Gurgel', "type": 'Capítulo de livro', "accessLink": 'https://www.researchgate.net/publication/335680127_Migracao_e_saude_um_estudo_exploratorio_a_partir_dos_registros_administrativos_no_Brasil_Migration_and_health_an_exploratory_study_by_administrative_data_in_Brazil?_sg=Jpm-TodnN3tguPhjTKU9E5T0coA88_Cw7b2IwDY3m2g0Rp5Th08uL0VHQ6JouEmiYOXU3BngisqHk1pt578txpi6e1lLIFyxL7KaRdTk.RDFYosjOcgZPFnylTjjPwujcDUkTGRThRWKMJ0Qe1jh3M2kX29B15XVvI5wObK8ClqCEFrwwuawEugx0Hcf7yw', "year": '2019', "lat": -26.903692, "lng": -49.072761, "complement": 'Abordagens Geográficas da vigilância, prevenção e promoção da saúde (Instituto Federal Catarinense)'},
    {"title": 'Análise espacial das ondas epidêmicas de dengue por SIG no Distrito Federal entre 2007 e 2014', "author": 'Gregorio, Gergel, Dessay, Sousa, Catão, Ramalho e Araujo', "type": 'Capítulo de livro', "accessLink": 'https://www.researchgate.net/publication/335680032_Analise_espacial_das_ondas_epidemicas_de_dengue_por_SIG_no_Distrito_Federal_entre_2007_e_2014_Spatial_analysis_of_dengue_epidemic_waves_by_GIS_in_Federal_District_between_2007_and_2014?_sg=Jpm-TodnN3tguPhjTKU9E5T0coA88_Cw7b2IwDY3m2g0Rp5Th08uL0VHQ6JouEmiYOXU3BngisqHk1pt578txpi6e1lLIFyxL7KaRdTk.RDFYosjOcgZPFnylTjjPwujcDUkTGRThRWKMJ0Qe1jh3M2kX29B15XVvI5wObK8ClqCEFrwwuawEugx0Hcf7yw', "year": '2019', "lat": -15.782458, "lng": -47.892158, "complement": 'Abordagens Geográficas da vigilância, prevenção e promoção da saúde (Instituto Federal Catarinense)'},
    {"title": 'Dinâmica espacial dos crimes violentos em mulheres no município de São Luiz, MA', "author": 'Masullo, Melo, Gurgel e Silva', "type": 'Caítulo de livro', "accessLink": 'https://www.researchgate.net/publication/336262639_Dinamica_espacial_dos_crimes_violentos_em_mulheres_no_municipio_de_Sao_Luis_MA_Space_dynamics_of_violent_crimes_on_women_in_the_municipality_of_Sao_Luis_MA', "year": '2019', "lat": -2.522356, "lng": -44.299304, "complement": 'Abordagens Geográficas da vigilância, prevenção e promoção da saúde (Instituto Federal Catarinense)'},
    {"title": 'Gestão e conflitos na unidade de conservação do parque estadual do Bacanga, São Luiz, Maranhão', "author": 'Masullo, Araujo Sobrinho, Gurgel, Laques e Soares', "type": 'Capítulos de livro', "accessLink": 'https://www.researchgate.net/publication/329755682_Gestao_e_Conflitos_na_Unidade_de_Conservacao_do_Parque_Estadual_do_Bacanga_Sao_Luis_Maranhao?_sg=Jpm-TodnN3tguPhjTKU9E5T0coA88_Cw7b2IwDY3m2g0Rp5Th08uL0VHQ6JouEmiYOXU3BngisqHk1pt578txpi6e1lLIFyxL7KaRdTk.RDFYosjOcgZPFnylTjjPwujcDUkTGRThRWKMJ0Qe1jh3M2kX29B15XVvI5wObK8ClqCEFrwwuawEugx0Hcf7yw', "year": '2018', "lat": -2.522356, "lng": -44.299304, "complement": 'Geografia: Trabalho, Sociedade e Meio Ambiente (Editora Uema)'},
    {"title": 'Evolução do processo de uso e ocupação do solo das unidades de conservação do estado do Maranhão', "author": 'Silva, Masullo e Gurgel', "type": 'Capítulo de livro', "accessLink": 'https://www.researchgate.net/publication/326398653_Evolucao_do_processo_de_uso_e_ocupacao_do_solo_das_unidades_de_conservacao_do_estado_do_Maranhao', "year": '2017', "lat": -4.570658, "lng": -45.641926, "complement": 'Educação ambiental: biomas, paisagens e o saber ambiental (editora barlavento)'},
    {"title": 'A paisagem como ferramenta de analise de politicas públicas de conservação ambiental: o caso da fronteira Brasil-França', "author": 'Peres, Laques e Gurgel', "type": 'Capítulo de livro', "accessLink": 'https://www.researchgate.net/publication/310796944_A_paisagem_como_ferramenta_de_analise_de_politicas_publicas_de_conservacao_ambiental_O_caso_da_fronteira_Brasil_-_Franca', "year": '2016', "lat": 2.171361, "lng": -52.969122, "complement": 'Gestão ambiental: uma diversificada ferramenta na consolidação de paradigma ecológico inovador (Editora Uema)'},
    {"title": 'Desastres climáticos e saúde humana: riscos e vulnerabilidades', "author": 'Helen Gurgel, Christovam Barcellos e Diego Xavier', "type": 'Capítulo de livro', "accessLink": 'https://www.researchgate.net/publication/270904966_Desastres_climaticos_e_saude_humana_riscos_e_vulnerabilidades', "year": '2014', "lat": -23.178069, "lng": -46.889497, "complement": 'Riscos Climáticos: vulnerabilidades e resiliência associados (Jundiaí: Paco Editorial)'},
    {"title": '1ª Plenária Nacional sobre Saúde e Migração | Saúde e Migração em tempos de Covid-19 | Documento Final.', "author": 'Associação Brasileira de Estudos Populacionais', "type": 'Trabalho Técnico', "accessLink": 'https://unbbr-my.sharepoint.com/:b:/g/personal/lagas_unb_br/EeEho1rMQ5VAmXsc0QklE7wBcNDvzE6H4tdd-dSlCGcvKw?e=QphMgD', "year": '2021', "lat": -23.527296, "lng": -46.639783, "complement": ''},
    {"title": '1ª Plenária Nacional sobre Saúde e Migração | Saúde e Migração em tempos de Covid-19 | Etapa Regional Centro-Oeste', "author": 'Associação Brasileira de Estudos Populacionais', "type": 'Trabalho Técnico', "accessLink": 'https://unbbr-my.sharepoint.com/personal/lagas_unb_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Flagas%5Funb%5Fbr%2FDocuments%2FSiteWeb%2FPublica%C3%A7%C3%A3o%2FTrabalho%20T%C3%A9cnico%2FDocumento%20Final%20%2D%20ETAPA%20REGIONAL%20CENTRO%2DOESTE%20I%20Plenaria%20Nacional%20Sa%C3%BAde%20e%20Migra%C3%A7%C3%A3o%2Epdf&parent=%2Fpersonal%2Flagas%5Funb%5Fbr%2FDocuments%2FSiteWeb%2FPublica%C3%A7%C3%A3o%2FTrabalho%20T%C3%A9cnico', "year": '2021', "lat": -14.643224, "lng": -52.736579, "complement": ''},
]

var markers = L.markerClusterGroup();

for (item of data) {
        var marker = L.marker([item.lat, item.lng])

        let text = `${item.title} <br> Por: ${item.author} <br> Tipo de publicação: ${item.type} <br> Publicado em: ${item.complement}, ${item.year} <br> Para acessar <a href="${item.accessLink}">clique aqui!</a>`

        marker.bindPopup(text)

        markers.addLayer(marker)
    }

map.addLayer(markers)
/*
// template for the items in the data variable
{"title": '', "author": '', "type": '', "accessLink": '', "year": '', "lat": null, "lng": null, "complement": ''},
*/

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h1>Distribuição espacial das <br><br> publicações de <br><br> livros, capítulos de livros <br><br> e trabalhos técnicos do LAGAS</h1>';
};

info.addTo(map)

var logo = L.control();

logo.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'logo'); // create a div with a class "logo"
    this.update();
    return this._div;
};

logo.update = function (props) {
    this._div.innerHTML = '<a href="http://lagas.unb.br/"><img src="images/lagasLogo.png" alt="logo do laboratório lagas"></a>';
};

logo.addTo(map)
logo.setPosition('bottomright')