create table alunos(
	id_aluno int primary key auto_increment,
	nome varchar(100),
	email varchar(256) not null unique,
	senha varchar(256),
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
	constraint fk_id_alunos foreign key(id_aluno) references alunos(id_aluno)
);

create table professores(
	id_professor int primary key auto_increment,
	nome varchar(100),
	email varchar(256) not null unique,
	senha varchar(256),
	area varchar(100),
	descricao longtext
);

create table avaliacoes(
	id int primary key auto_increment,
	id_professor int,
	id_usuario int,
	avaliacao longtext,
	constraint fk_id_professor foreign key (id_professor) references professores(id),
	constraint fk_id_usuario foreign key (id_aluno) references alunos(id)
);
