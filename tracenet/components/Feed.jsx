"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AddLostCase from "./AddLostCase";

const Feed = () => {
  const [showAddLostCase, setShowAddLostCase] = useState(false);
  const handleLostButtonClick = () => {
    setShowAddLostCase(true);
  };
  return (
    <section className='feed'>
     <div className='flex justify-center gap-8 mt-8'>
        <Link
          href="/add-case"
          className = "square_btn lost"
          onClick = {handleLostButtonClick} 
        >
          Lost
        </Link>
        <Link
          href="/add-case"
          className = "square_btn found" >
            Found
        </Link>
      </div>
      {showAddLostCase && <AddLostCase onClose={() => setShowAddLostCase(false)} />}
    </section>
  );
  };

export default Feed;