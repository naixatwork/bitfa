'use server'

import {redirect} from "next/navigation";

function Home() {
    redirect('/wallet')
}

export default Home;
