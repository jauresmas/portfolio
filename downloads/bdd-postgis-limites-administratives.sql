-- Création de l'extension PostGIS
CREATE EXTENSION IF NOT EXISTS postgis;

-- Mise à jour des tables avec filtrage
CREATE TABLE region_mise_a_jour AS
SELECT * FROM region WHERE insee_reg = '24';

CREATE TABLE departement_mise_a_jour AS
SELECT * FROM departement WHERE insee_dep IN ('18', '28', '36', '37', '41', '45');

CREATE TABLE arrondissement_mise_a_jour AS
SELECT * FROM arrondissement WHERE insee_reg = '24';

CREATE TABLE collectivite_mise_a_jour AS
SELECT * FROM collectivite_territoriale WHERE insee_reg = '24';

CREATE TABLE commune_mise_a_jour AS
SELECT * FROM commune WHERE insee_reg = '24';

CREATE TABLE commune_associee_mise_a_jour AS
WHERE insee_cad IN ('18023', '28002', '28011', '28015', '28018', '28020', '28043', '28063', '28112', '28125', '28145', '28165', '28174', '28179', '28199', '28228', '28307', '28311', '28320', '28331', '28338', '28361', '28376', '28381', '28399', '28406', '28412', '28413', '28416', '28420', '28422', '36151', '36183', '36201', '36229', '36244', '36245', '37021', '37102', '37135', '37209', '41011', '41015', '41033', '41055', '41056', '41059', '41064', '41070', '41076', '41021', '41023', '41082', '41092', '41133', '41142', '41151', '41165', '41167', '41169', '41170', '41171', '41173', '41183', '41197', '41202', '41210', '41227', '41240', '41244', '41248', '41257', '41263', '41264', '41270', '41272', '45003', '45007', '45048', '45057', '45090', '45106', '45140', '45163', '45172', '45190', '45191', '45192', '45221', '45295', '45236', '45304', '45318', '45319', '45349', '28236', '28238', '28258', '36039', '36072', '41005');

CREATE TABLE epci_mise_a_jour AS
SELECT * FROM epci
WHERE nom IN ('CA Agglo du Pays de Dreux', 'CA Bourges Plus', 'CA Chartres Métropole', 'CA Châteauroux Métropole', 'CA de Blois "Agglopolys"', 'CA Montargoise et Rives du Loing (AME)', 'CA Territoires Vendômois', 'CC Arnon Boischaut Cher', 'CC Autour de Chenonceaux Bléré-Val de Cher', 'CC Beauce Val de Loire', 'CC Berry Grand Sud', 'CC Berry Loire Puisaye', 'CC Berry-Loire-Vauvise', 'CC Brenne - Val de Creuse', 'CC Canaux et Forêts en Gâtinais', 'CC Champagne Boischauts', 'CC Chinon, Vienne et Loire', 'CC Cœur de Beauce', 'CC Cœur de Berry', 'CC Cœur de Brenne', 'CC Cœur de France', 'CC Cœur de Sologne', 'CC de Gâtine-Racan', 'CC de la Beauce Loirétaine', 'CC de la Châtre et Sainte-Sévère', 'CC de la Cléry, du Betz et de l''Ouanne', 'CC de la Forêt', 'CC de la Marche Berrichonne', 'CC de la Plaine du Nord Loiret', 'CC de la Sologne des Rivières', 'CC de la Sologne des Étangs', 'CC des Collines du Perche', 'CC des Forêts du Perche', 'CC des Loges', 'CC des Portes de Sologne', 'CC des Portes Euréliennes d''Île-de-France', 'CC des Quatre Vallées', 'CC des Terres du Val de Loire', 'CC du Bonnevalais', 'CC du Castelrenaudais', 'CC du Châtillonnais en Berry', 'CC du Dunois', 'CC du Grand Chambord', 'CC du Pays d''Issoudun', 'CC du Pays Houdanais (CCPH)', 'CC du Perche', 'CC du Perche et Haut Vendômois', 'CC du Pithiverais', 'CC du Pithiverais-Gâtinais', 'CC du Romorantinais et du Monestois', 'CC du Val d''Amboise', 'CC du Val de Bouzanne', 'CC du Val de Sully', 'CC entre Beauce et Perche', 'CC FerCher', 'CC Giennoises', 'CC Les Bertranges', 'CC La Septaine', 'CC Les Trois Provinces', 'CC Levroux Boischaut Champagne', 'CC Loches Sud Touraine', 'CC Marche Occitane - Val d''Anglin', 'CC Pays de Nérondes', 'CC Pays Fort Sancerrois Val de Loire', 'CC Portes du Berry entre Loire et Val d''Aubois', 'CC Sauldre et Sologne', 'CC Terres de Perche', 'CC Terres du Haut Berry', 'CC Touraine Ouest Val de Loire', 'CC Touraine Val de Vienne', 'CC Touraine Vallée de l''Indre', 'CC Touraine-Est Vallées', 'CC Val de l''Indre - Brenne', 'CC Val-de-Cher-Controis', 'CC Vierzon-Sologne-Berry', 'CC Écueillé-Valençay', 'CC Éguzon - Argenton - Vallée de la Creuse', 'Orléans Métropole', 'Tours Métropole Val de Loire');

-- Suppression et renommage des tables
DROP TABLE IF EXISTS public.region;
ALTER TABLE public.region_mise_a_jour RENAME TO region;

DROP TABLE IF EXISTS public.departement;
ALTER TABLE public.departement_mise_a_jour RENAME TO departement;

DROP TABLE IF EXISTS public.arrondissement;
ALTER TABLE public.arrondissement_mise_a_jour RENAME TO arrondissement;

DROP TABLE IF EXISTS public.collectivite_territoriale;
ALTER TABLE public.collectivite_mise_a_jour RENAME TO collectivite_territoriale;

DROP TABLE IF EXISTS public.commune;
ALTER TABLE public.commune_mise_a_jour RENAME TO commune;

DROP TABLE IF EXISTS public.commune_associee_ou_deleguee;
ALTER TABLE public.commune_associee_mise_a_jour RENAME TO commune_associee;

DROP TABLE IF EXISTS public.epci;
ALTER TABLE public.epci_mise_a_jour RENAME TO epci;

-- Table région
ALTER TABLE public.region
    RENAME COLUMN id TO reg_id;

ALTER TABLE public.region
    ALTER COLUMN reg_id SET NOT NULL;

ALTER TABLE public.region
    ALTER COLUMN reg_id TYPE VARCHAR USING reg_id::VARCHAR;

ALTER TABLE public.region
    ADD CONSTRAINT pk_region PRIMARY KEY (reg_id);

ALTER TABLE public.region
    ADD CONSTRAINT uq_region_id UNIQUE (reg_id);

-- Table département
ALTER TABLE public.departement
    RENAME COLUMN id TO dep_id;

ALTER TABLE public.departement
    ALTER COLUMN dep_id SET NOT NULL;

ALTER TABLE public.departement
    ALTER COLUMN dep_id TYPE VARCHAR USING dep_id::VARCHAR;

ALTER TABLE public.departement
    ADD COLUMN reg_id VARCHAR;

ALTER TABLE public.departement
    ADD CONSTRAINT pk_departement PRIMARY KEY (dep_id);

ALTER TABLE public.departement
    ADD CONSTRAINT uq_departement_id UNIQUE (dep_id);

ALTER TABLE public.departement
    ADD CONSTRAINT fk_departement_region FOREIGN KEY (reg_id) REFERENCES public.region(reg_id);

UPDATE public.departement AS d
SET reg_id = r.reg_id
FROM public.region AS r
WHERE d.insee_reg = r.insee_reg;

-- Table arrondissement
ALTER TABLE public.arrondissement
    RENAME COLUMN id TO arr_id;

ALTER TABLE public.arrondissement
    ALTER COLUMN arr_id SET NOT NULL;

ALTER TABLE public.arrondissement
    ALTER COLUMN arr_id TYPE VARCHAR USING arr_id::VARCHAR;

ALTER TABLE public.arrondissement
    ADD COLUMN dep_id VARCHAR;

ALTER TABLE public.arrondissement
    ADD CONSTRAINT pk_arrondissement PRIMARY KEY (arr_id);

ALTER TABLE public.arrondissement
    ADD CONSTRAINT uq_arrondissement_id UNIQUE (arr_id);

ALTER TABLE public.arrondissement
    ADD CONSTRAINT fk_arrondissement_departement FOREIGN KEY (dep_id) REFERENCES public.departement(dep_id);

UPDATE public.arrondissement AS a
SET dep_id = d.dep_id
FROM public.departement AS d
WHERE a.insee_dep = d.insee_dep;

-- Table collectivité territoriale
ALTER TABLE public.collectivite_territoriale
    RENAME COLUMN id TO coll_id;

ALTER TABLE public.collectivite_territoriale
    ALTER COLUMN coll_id SET NOT NULL;

ALTER TABLE public.collectivite_territoriale
    ALTER COLUMN coll_id TYPE VARCHAR USING coll_id::VARCHAR;

ALTER TABLE public.collectivite_territoriale
    ADD COLUMN reg_id VARCHAR;

ALTER TABLE public.collectivite_territoriale
    ADD CONSTRAINT pk_collectivite PRIMARY KEY (coll_id);

ALTER TABLE public.collectivite_territoriale
    ADD CONSTRAINT uq_collectivite_territoriale UNIQUE (coll_id);

ALTER TABLE public.collectivite_territoriale
    ADD CONSTRAINT fk_collectivite_region FOREIGN KEY (reg_id) REFERENCES public.region(reg_id);

UPDATE public.collectivite_territoriale AS c
SET reg_id = r.reg_id
FROM public.region AS r
WHERE c.insee_reg = r.insee_reg;

-- Table commune
ALTER TABLE public.commune
    RENAME COLUMN id TO com_id;

ALTER TABLE public.commune
    ALTER COLUMN com_id SET NOT NULL;

ALTER TABLE public.commune
    ALTER COLUMN com_id TYPE VARCHAR USING com_id::VARCHAR;

ALTER TABLE public.commune
    ADD COLUMN arr_id VARCHAR;

ALTER TABLE public.commune
    ADD COLUMN dep_id VARCHAR;

ALTER TABLE public.commune
    ADD CONSTRAINT pk_commune PRIMARY KEY (com_id);

ALTER TABLE public.commune
    ADD CONSTRAINT uq_commune_id UNIQUE (com_id);

ALTER TABLE public.commune
    ADD CONSTRAINT fk_commune_arrondissement FOREIGN KEY (arr_id) REFERENCES public.arrondissement(arr_id);

ALTER TABLE public.commune
    ADD CONSTRAINT fk_commune_departement FOREIGN KEY (dep_id) REFERENCES public.departement(dep_id);

UPDATE public.commune AS c
SET arr_id = a.arr_id
FROM public.arrondissement AS a
WHERE c.insee_arr = a.insee_arr;

UPDATE public.commune AS c
SET dep_id = d.dep_id
FROM public.departement AS d
WHERE c.insee_dep = d.insee_dep;

-- Table commune associée
ALTER TABLE public.commune_associee
    RENAME COLUMN id TO com_associee_id;

ALTER TABLE public.commune_associee
    ALTER COLUMN com_associee_id SET NOT NULL;

ALTER TABLE public.commune_associee
    ALTER COLUMN com_associee_id TYPE VARCHAR USING com_associee_id::VARCHAR;

ALTER TABLE public.commune_associee
    ADD COLUMN com_id VARCHAR;

ALTER TABLE public.commune_associee
    ADD CONSTRAINT pk_commune_associee PRIMARY KEY (com_associee_id);

ALTER TABLE public.commune_associee
    ADD CONSTRAINT uq_commune_associee_id UNIQUE (com_associee_id);

ALTER TABLE public.commune_associee
    ADD CONSTRAINT fk_commune_associee_commune FOREIGN KEY (com_id) REFERENCES public.commune(com_id);

UPDATE public.commune_associee AS ca
SET com_id = c.com_id
FROM public.commune AS c
WHERE ca.insee_com = c.insee_com;

-- Table EPCI
ALTER TABLE public.epci
    RENAME COLUMN id TO epci_id;

ALTER TABLE public.epci
    ALTER COLUMN epci_id SET NOT NULL;

ALTER TABLE public.epci
    ALTER COLUMN epci_id TYPE VARCHAR USING epci_id::VARCHAR;

ALTER TABLE public.epci
    ADD COLUMN com_id VARCHAR;

ALTER TABLE public.epci
    ADD CONSTRAINT pk_epci PRIMARY KEY (epci_id);

ALTER TABLE public.epci
    ADD CONSTRAINT uq_epci_id UNIQUE (epci_id);

ALTER TABLE public.epci
    ADD CONSTRAINT fk_epci_commune FOREIGN KEY (com_id) REFERENCES public.commune(com_id);

UPDATE public.epci AS e
SET com_id = c.com_id
FROM public.commune AS c
WHERE e.code_siren = c.siren_epci;

--PARTIE ADMINISTRATION DE LA BASE DE DONNEE

-- Création des rôles individuels
-- Remplacer CHANGE_ME_* par des mots de passe robustes avant exécution.
CREATE ROLE admin_role WITH LOGIN CREATEDB CREATEROLE NOINHERIT PASSWORD 'CHANGE_ME_ADMIN_ROLE_PASSWORD';
CREATE ROLE regional_observer_role WITH NOLOGIN;
CREATE ROLE regional_technician_role WITH NOLOGIN;

-- Création des groupes
CREATE ROLE admin_group NOLOGIN;
GRANT admin_role TO admin_group;

CREATE ROLE observer_group NOLOGIN;
GRANT regional_observer_role TO observer_group;

CREATE ROLE technician_group NOLOGIN;
GRANT regional_technician_role TO technician_group;

-- Création des utilisateurs et assignation des rôles
CREATE USER admin_user WITH PASSWORD 'CHANGE_ME_ADMIN_USER_PASSWORD';
GRANT admin_group TO admin_user;

CREATE USER observer_user WITH PASSWORD 'CHANGE_ME_OBSERVER_USER_PASSWORD';
GRANT observer_group TO observer_user;

CREATE USER technician_user WITH PASSWORD 'CHANGE_ME_TECHNICIAN_USER_PASSWORD';
GRANT technician_group TO technician_user;

-- Permissions pour les groupes
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin_group;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO admin_group;

GRANT SELECT ON ALL TABLES IN SCHEMA public TO observer_group;

GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES,
TRIGGER ON ALL TABLES IN SCHEMA public TO technician_group;

-- Permissions par défaut pour les futures tables et séquences
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT
ALL PRIVILEGES ON TABLES TO admin_group;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT
ALL PRIVILEGES ON SEQUENCES TO admin_group;

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT
SELECT ON TABLES TO observer_group;

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT
SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES,
TRIGGER ON TABLES TO technician_group;

-- Limiter l'accès de l'Observateur régional jusqu'au 19 janvier 2024
ALTER ROLE regional_observer_role VALID UNTIL '2026-01-19';
ALTER ROLE regional_technician_role VALID UNTIL '2025-06-30';

-- Révoquer l'accès d'un utilisateur spécifique
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM observer_user;
