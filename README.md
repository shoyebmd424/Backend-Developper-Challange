<h1> How to Run Project locally</h1>
<h3> open any terminal or command promt</h3>
<h5> run few command</h5>
<p>initialize git </p>
git init
<p> clone project from url</p>
 git clone https://github.com/shoyebmd424/Backend-Developper-Challange 
<p> go to the project folder</p>
cd backendNodeJsChallage
<p> install all dependencies</p>
npm i 
<p> then go to the client folder for frontend</p>
cd client
<p> install all dependencies</p>
npm i 
<p> got to the previous folder</p>
cd ..
<p> run  backend of the project</p>
npm start 
then project run on port 8888 and test it <a href="https://localhost:8888/book" target="blank">https://localhost:8888/test</a>
<p> open another command promp for frontend and run project</p>
npm start
<br>
<h2>
API endpoints and their usage
</h2>
<h5> Get All Books with get reuqest Method</h5>
<a href="https://localhost:8888/book" target="blank">Get all books </a>
<p> <b>Respose:</b>
{
    success:true,
    message:[{id, title,auther ,message}];
}
</p>
<h5> Get one Boook with Get Request by id</h5>
<a href="https://localhost:8888/book/653df051ef9295d83822ca4e" target="blank">https://localhost:8888/:653df051ef9295d83822ca4e </a>
<p>

<b>Request: passing params: book id</b>
<b>Respose:</b>
{
success:true,
message:{id, title,auther ,message};
}
--if id not exist
{
success:false,
message:This book id is not found;
}

</p>
<h5> Update Book by id with put Mathod</h5>
<a href="https://localhost:8888/book/653df051ef9295d83822ca4e" target="blank">https://localhost:8888/:653df051ef9295d83822ca4e </a>

<b>Request: passing params- book id</b>
{body:{
title,author,summary
}}
<b>Respose:</b>
{
success:true,
message: Book update successfully...;
}
--if id not exist
{
success:false,
message:Book updating problem please try again...;
}

<h5> Delete Book by id with delete Mathod</h5>
<a href="https://localhost:8888/book/653df051ef9295d83822ca4e" target="blank">https://localhost:8888/book/:id </a>

<b>Request: passing params- book id</b>
<b>Respose:</b>
{
success:true,
message: Book deleted successfully;
}
--if id not exist
{
success:false,
message:Book id is not found.;
}

<h5> Add Book  with Post Mathod</h5>
<a href="https://localhost:8888/book" target="blank">https://localhost:8888/book</a>
<b>Request: </b>
 {body:{
    title,author,summary
 }}
 <b>Respose:</b>
{
    success:true,
    message: Your book details successfully  saved ;
}
--if title already exist 
{
    success:false,
    message:This book already added please add another book;
}

all common errors
respose:
{ success: false, message: "something went wrong..." }
