import Feed from "@components/Feed";
const Home = () => {
  return (
    <div className="head_container">
    <section className="w-full felx-center felx-col">
      <h1 className="head_text blue_gradient text-center" style={{ WebkitTextStroke: '2px white', textStroke: '2px white' }}>
      TRACENET
        <br className="max-md:hiddden" />
      </h1>
      <p className="desc" >
        The Elite Lost and Found - Lost Today, Found Tomorrow
      </p>

      <Feed />

    </section>
    </div>
      )
}

export default Home