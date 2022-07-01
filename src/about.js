import './App.css';
import Header from './components/header'
import Footer from './components/footer'
function about() {
  return (
   
    <div className='features'>
      <Header />
    <p>  Every crafter knows the pain of not being able to find something and spending the money on a duplicate even though they “know it’s here somewhere”. To reduce duplication of patterns, notions, fabric and other supplies for sewing & crafts, the Crafting Project Manager was born.
</p>
<p>
The focus for this project is as follows:</p>
<ul>
    <li>Projects</li>
    <li>Stash (future)</li>
    <li>Shopping (future)</li>
    <li>Budget (future)</li>
</ul>
      <Footer />
    </div>
  );
}

export default about;