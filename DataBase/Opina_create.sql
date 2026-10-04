-- ============================================================
-- BANCO DE DADOS: Salotti Opina
-- ============================================================

CREATE DATABASE IF NOT EXISTS opinadb;

USE opinadb;


-- ============================================================
-- 1. TABELA DE USUÁRIOS
-- ============================================================

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL,

    email VARCHAR(100) UNIQUE,

    senha VARCHAR(255) NOT NULL,

    cargo VARCHAR(100) NOT NULL,

    ra VARCHAR(15) UNIQUE,

    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);


-- ============================================================
-- 2. TABELA DE ALUNOS
-- ============================================================

CREATE TABLE alunos (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100),

    email VARCHAR(256) UNIQUE,

    senha VARCHAR(256),

    turma VARCHAR(10),

    ra VARCHAR(20) NOT NULL UNIQUE,

    descricao LONGTEXT,

    CONSTRAINT nome_turma_unique
        UNIQUE(nome, turma)
);


-- ============================================================
-- 3. TABELA DE NOTAS DOS ALUNOS
-- ============================================================

CREATE TABLE notasAlunos (
    id INT PRIMARY KEY AUTO_INCREMENT,

    id_aluno INT,

    nota_1 INT,

    nota_2 INT,

    nota_3 INT,

    nota_4 INT,

    nota_final INT
        GENERATED ALWAYS AS
        ((nota_1 + nota_2 + nota_3 + nota_4) / 4)
        STORED,

    CONSTRAINT fk_id_alunos
        FOREIGN KEY (id_aluno)
        REFERENCES alunos(id_aluno)
);


-- ============================================================
-- 4. TABELA DE PROFESSORES
-- ============================================================

CREATE TABLE professores (
    id_professor INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100),

    email VARCHAR(256) NOT NULL UNIQUE,

    senha VARCHAR(256),

    area VARCHAR(100),

    descricao LONGTEXT
);


-- ============================================================
-- 5. TABELA DE CATEGORIAS
-- ============================================================

CREATE TABLE categorias (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL,

    setor VARCHAR(100),

    localizacao VARCHAR(100),

    email VARCHAR(255),

    descricao TEXT
);


-- ============================================================
-- 6. TABELA DE AVALIAÇÕES
-- ============================================================

CREATE TABLE avaliacoes (
    id INT PRIMARY KEY AUTO_INCREMENT,

    id_usuario INT NOT NULL,

    id_professor INT NULL,

    id_categoria INT NULL,

    estrelas INT NOT NULL,

    comentario LONGTEXT,

    tipo VARCHAR(30) NOT NULL,

    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_avaliacao_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuarios(id),

    CONSTRAINT fk_avaliacao_professor
        FOREIGN KEY (id_professor)
        REFERENCES professores(id_professor),

    CONSTRAINT fk_avaliacao_categoria
        FOREIGN KEY (id_categoria)
        REFERENCES categorias(id_categoria),

    CONSTRAINT chk_tipo_avaliacao
        CHECK (
            (tipo = 'professor'
             AND id_professor IS NOT NULL
             AND id_categoria IS NULL)

            OR

            (tipo = 'categoria'
             AND id_professor IS NULL
             AND id_categoria IS NOT NULL)
        )
);


-- ============================================================
-- CATEGORIAS INICIAIS
-- ============================================================

INSERT INTO categorias
(nome, setor, localizacao, email, descricao)
VALUES

(
    'Secretaria',
    'Administração',
    'Bloco A, Sala 101',
    'Secretaria@gmail.com',
    'Responsável pelo atendimento aos alunos, organização de documentos, matrículas e informações acadêmicas da escola.'
),

(
    'Cantina',
    'Cozinha',
    'Pátio principal',
    'Cantina@gmail.com',
    'Espaço destinado à venda de alimentos e bebidas para alunos e funcionários durante o horário do intervalo.'
),

(
    'Coordenação Pedagógica',
    'Administração',
    'Bloco B, Sala 205',
    'Cordenação@gmail.com',
    'Setor que acompanha o desempenho escolar, auxilia professores e organiza atividades pedagógicas da instituição.'
),

(
    'Biblioteca',
    'Cultura',
    'Bloco C, Térreo',
    'Biblioteca@gmail.com',
    'Ambiente voltado ao estudo e pesquisa, com livros, materiais educativos e apoio ao aprendizado dos alunos.'
),

(
    'Orientação Educacional',
    'Administração',
    'Bloco A, Sala 103',
    'Administração@gmail.com',
    'Oferece apoio aos estudantes em questões escolares, pessoais e de convivência, ajudando no desenvolvimento educacional.'
),

(
    'Manutenção e Limpeza',
    'Administração',
    'Anexo de Serviços',
    'limpeza@gmail.com',
    'Responsável pela conservação, limpeza e bom funcionamento dos espaços da escola, garantindo um ambiente organizado e seguro.'
);


-- ============================================================
-- PROFESSORES DE EXEMPLO
-- ============================================================

INSERT INTO professores
(nome, email, senha, area, descricao)
VALUES

(
    'Romario',
    'romario@escola.com',
    'senha',
    'Matematica Avançada',
    'Professor da instituição.'
),

(
    'Luan',
    'luan@escola.com',
    'senha',
    'FrontEnd',
    'Professora da instituição.'
),

(
    'Karen',
    'karen@escola.com',
    'senha',
    'Educação Fisica',
    'Professora da instituição.'
),

(
    'João',
    'joao@escola.com',
    'senha',
    'Técnico em Banco de Dados',
    'Professor da instituição.'
),

(
    'Sidney',
    'sidney@escola.com',
    'senha',
    'Técnico Back-End e Mobile',
    'Professor da instituição.'
),

(
    'Gabriel',
    'gabriel@escola.com',
    'senha',
    'Versionamento de Código e Projetos',
    'Professor da instituição.'
);


-- ============================================================
-- VERIFICAR TABELAS
-- ============================================================

SHOW TABLES;


-- ============================================================
-- VERIFICAR DADOS
-- ============================================================

SELECT * FROM usuarios;

SELECT * FROM alunos;

SELECT * FROM notasAlunos;

SELECT * FROM professores;

SELECT * FROM categorias;

SELECT * FROM avaliacoes;


-- ============================================================
-- TESTAR AVALIAÇÕES
-- ============================================================

SELECT
    a.id,
    a.estrelas,
    a.comentario,
    a.tipo,
    a.data_criacao,

    u.nome AS usuario,

    p.nome AS professor,

    c.nome AS categoria

FROM avaliacoes a

LEFT JOIN usuarios u
    ON a.id_usuario = u.id

LEFT JOIN professores p
    ON a.id_professor = p.id_professor

LEFT JOIN categorias c
    ON a.id_categoria = c.id_categoria

ORDER BY a.data_criacao DESC;