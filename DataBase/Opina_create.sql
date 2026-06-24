create table usuarios(
	id int primary key auto_increment,
	nome varchar(100),
	email varchar(256),
	senha varchar(256)
)

create table alunos(
	id int primary key auto_increment,
	nome varchar(100),
	turma varchar(10),
	ra varchar(20) not null,
	descricao longtext,
	constraint nome_turma_unique unique(nome,turma)
)

create table notasAlunos(
	id int primary key auto_increment,
	id_aluno int,
	nota_1 int,
	nota_2 int,
	nota_3 int,
	nota_4 int,
	nota_final int generated always as ((nota_1+nota_2+nota_3+nota_4)/4) stored,
	constraint fk_id_alunos foreign key(id_aluno) references alunos(id)
)
