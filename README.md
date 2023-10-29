<h1> How to Run Project locally</h1>
<h3> open any terminal or command promt</h3>
<h5> run few command</h5>
<h4>initialize git </h4>
git init
<h4> clone project from url</h4>
 git clone https://github.com/shoyebmd424/Backend-Developper-Challange 
<h4> go to the project folder</h4>
cd backendNodeJsChallage
<h4> install all dependencies</h4>
npm i 
<h4> then go to client folder for frontend</h4>
cd client
<h4> install all dependencies</h4>
npm i 
<h4> go to  previous folder</h4>
cd ..
<h4> run  backend of the project</h4>
npm start 
then project run on port 8888 and test it <br> <a href="https://localhost:8888/book" target="blank">https://localhost:8888/test</a>
<h4> open another command promp for frontend and run project</h4>
npm start
<br>
<h2>
API endpoints and their usage
</h2>
<h5> Get All Books with get reuqest Method</h5>
<a href="https://localhost:8888/book" target="blank">https://localhost:8888/book" </a>
<p> <b>Respose:</b> <br>
{
    <br>
    success:true,<br>
    message:[{id, title,auther ,message}];
    <br>
}
</p>
<h5> Get one Boook with Get Request by id</h5>
<a href="https://localhost:8888/book/653df051ef9295d83822ca4e" target="blank">https://localhost:8888/:653df051ef9295d83822ca4e </a>
<p>

<b>Request: passing params: book id</b>
<b>Respose:</b><br>
{<br>
success:true,<br>
message:{id, title,auther ,message};<br>
}<br>
--if id not exist<br>
{<br>
success:false,<br>
message:This book id is not found;<br>
}<br>

</p>
<h5> Update Book by id with put Mathod</h5>
<a href="https://localhost:8888/book/653df051ef9295d83822ca4e" target="blank">https://localhost:8888/:653df051ef9295d83822ca4e </a>

<b>Request: passing params- book id</b><br>
{body:{<br>
title,author,summary<br>
}}<br>
<b>Respose:</b><br>
{<br>
success:true,<br>
message: Book update successfully...;<br>
}<br>
--if id not exist<br>
{<br>
success:false,<br>
message:Book updating problem please try again...;<br>
}<br>

<h5> Delete Book by id with delete Mathod</h5>
<a href="https://localhost:8888/book/653df051ef9295d83822ca4e" target="blank">https://localhost:8888/book/:id </a>

<b>Request: passing params- book id</b><br>
<b>Respose:</b><br>
{<br>
success:true,<br>
message: Book deleted successfully;<br>
}
--if id not exist<br>
{<br>
success:false,<br>
message:Book id is not found.;<br>
}<br>

<h5> Add Book  with Post Mathod</h5>
<a href="https://localhost:8888/book" target="blank">https://localhost:8888/book</a>
<br>
<b>Request: </b><br>
 {body:{<br>
    title,author,summary<br>
 }}<br>
 <b>Respose:</b><br>
{<br>
    success:true,<br>
    message: Your book details successfully  saved ;<br>
}<br>
--if title already exist <br>
{<br>
    success:false,<br>
    message:This book already added please add another book;<br>
}
<br>
<h3>all common errors</h3>
respose:<br>
{<br> success: false, message: "something went wrong..." <br>}
