create table usuarios(
	id int primary key auto_increment,
	nome varchar(100),
	email varchar(256) not null unique,
	senha varchar(256),
	telefone varchar(20) unique
);

create table alunos(
	id int primary key auto_increment,
	nome varchar(100),
	turma varchar(10),
	ra varchar(20) not null unique,
	descricao longtext,
	constraint nome_turma_unique unique(nome,turma)
);

create table notasAlunos(
	id int primary key auto_increment,
	id_aluno int,
	nota_1 int,
	nota_2 int,
	nota_3 int,
	nota_4 int,
	nota_final int generated always as ((nota_1+nota_2+nota_3+nota_4)/4) stored,
	constraint fk_id_alunos foreign key(id_aluno) references alunos(id)
);

create table professores(
	id int primary key auto_increment,
	nome varchar(100),
	area varchar(100),
	email varchar(256) not null unique,
	descricao longtext
);

create table avaliacoes(
	id int primary key auto_increment,
	id_professor int,
	id_usuario int,
	avaliacao longtext,
	constraint fk_id_professor foreign key (id_professor) references professores(id),
	constraint fk_id_usuario foreign key (id_usuario) references usuarios(id)
);
