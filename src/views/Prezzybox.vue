<template>

<div class="space-y-3 w-2/3 mx-auto">
<div class="space-y-3 my-12">
<h1 class="text-5xl">Harry Higgins @ Prezzybox</h1>
<p>
    Where to start?! I've been at Prezzybox for nearly 5 years, starting off as an <span class="text-blue-500 font-bold">S</span><span class="text-red-600 font-bold">E</span><span class="text-yellow-600 font-bold">O</span> executive in the marketing team.
</p>
<p>While working as an SEO, I became more and more interested in the more technical side of things: how does the website work? why did what I just do break the website? You know, those kinds of things.</p>
<p>So when the opportunity came up to officially join the technical team, I jumped at it. That was in 2020 (arguably one of the only decent things to happen in 2020).</p>
<p>Currently, I'm Product Lead. Which is a fancy way of saying that I'm always on the look-out for ways to improve Prezzybox.com as a product: new features, places where we're not as good as we could be, even new routes to market.</p>
<p>Being a software engineer too, that means that I am sometimes seeing projects through from inception all the way through to deployment.</p>
</div>

<div class="tech">
    <h1 class="text-5xl my-3">Tech</h1>
    <div class="intro space-y-3">
            <p>Moving into tech was a big change, but I was excited to get started on some big projects to help make Prezzybox a better website, and better operationally, too.</p>
            <p>I've outlined some of my favourite projects below, hopefully you'll find them interesting. If nothing else, it helps me to remember😅</p>
    </div>
    <div class="flex flex-row">
        <div class="">

            <div class="screaming-frog flex flex-row flex-wrap items-center justify-center mt-12" >
                <div class="md:w-2/3 w-full space-y-3 mb-3 md:pr-12">
                    <h2 class="text-xl font-bold w-full">Screaming Frog Runner (weird name, I know)</h2>
                    <p>I feel like I should address this first: Screaming Frog is a program used widely by SEOs to crawl their website to diagnose issues with rankings, indexability, and more... it's nothing to do with actual frogs, nor making them scream. No idea where the name came from.</p>
                    <p>This was my first real task as part of the technical team, and it's something that I loved working on as it melded my SEO experience and gave me exposure to a lot of different areas of tech!</p>
                    <p>I used Docker to build a container which... well, contained, an application to run a Screaming Frog crawl against prezzybox.com every day.</p> 
                    <p>The application would then upload the resulting reports to S3.</p> 
                    <p>I also configured an AWS Lambda Function to watch for "put" events on the S3 bucket, which then parsed the report and sent an overview and a file attachment to a slack channel.</p>
                    <p>Automating this task saved roughly half an hour to an hour per day, and also gave us automated alerts on any costly issues that could otherwise have been missed (e.g. if someone accidentally no-indexed the site, essentially removing it from Google).</p>
                </div>
                <figure class="md:w-1/3 w-full">
                <img class="cursor-pointer" src="@/assets/Screaming_Frog_Audits.png" alt="An Example output of the Screaming Frog Runner"  @click="openLightBox('/src/assets/Screaming_Frog_Audits.png')"/>
                <figcaption>An example output of the Screaming Frog Runner.</figcaption>
                </figure>
            </div>

              <div class="prezzybox-migration flex flex-row flex-wrap items-center justify-center mt-12" >
                <div class="md:w-2/3 w-full space-y-3 mb-3 md:pr-12">
                    <h2 class="text-xl font-bold w-full">Prezzybox.com Progressive Migration from AngularJS to Vue</h2>
                    <p>In July 2018, AngularJS  entered a 3-year period of Long Term Support, with a view to phasing support for the framework out entirely.</p>
                    <p>Prezzybox.com's entire front-end was built using AngularJS.</p>
                    <p>This was obviously a problem - not only would we suffer brain drain and recruitment struggles by using an outdated framework, there are performance and security implications for our customer too.</p>
                    <p>Vue was the obvious choice. We're only a small dev team - we couldn't spend massive amounts of time retraining - angularJS to Vue was the closest thing to a "straight swap" we were going to get. Its syntax is very similar to AngularJS, the framework we all knew <s>and loved</s>, due to it being created by a former AngularJS Dev.</p>
                    <p>Ultimately the risk of <em>not</em> dropping AngularJS outweighed the risks involved with migrating (no new features while moving, bug fixes essentially having to be applied twice).</p>
                    <p>Truth be told, I had had my eyes on this project from before I even joined the technical team, and its completion is one of my biggest achievements at Prezzybox.</p>
                    <p>Work started in April 2021 - we opted for a progressive migration - it made no sense to try and move everything at once, instead, we would do one section of the site at a time, learning and improving as we went.</p>
                    <p>First up was the product page, then category pages, the home page, search pages, and finally checkout (this is still in progress - it felt too risky to change this just before Christmas!).</p>
                    <p>In migrating away from AngularJS we had a faster, more modern framework - one that was still supported and we would have less trouble finding new talent for!</p>
                    <p>It's quicker too, meaning a better shopping experience for our customers.</p>
                </div>
                <figure class="md:w-1/3 w-full h-full">
                <img class="cursor-pointer" src="/src/assets/Prezzybox_Product_Page.png" alt="An Example of a Prezzybox.com Product Page" @click="openLightBox('/src/assets/Prezzybox_Product_Page.png')"/>
                <figcaption>An example Prezzybox.com Product Page</figcaption>
                </figure>
            </div>
        </div>  
    </div>
</div>


<div class="marketing mt-12">
<h1>Marketing</h1>
<p class="">During this time we managed to achieve and maintain sustained high-profile positions on search engine result pages - personal highlights include being in position 1 for "Christmas Gifts", leading to a huge volume of orders & revenue, as well as a marked increase in brand visibility and recognition.</p>

<p>In 2020 I spoke at the Spring Fair at the NEC about gifting trends, utilising data gathered from various internal and external sources.</p>
</div>
</div>
</template>
<script setup>

import { useGlobalStore } from "@/stores/global"

const global = useGlobalStore();
const openLightBox = function(imageSource) { 
global.isLightBoxOpen = true;
global.lightBoxSource = imageSource;
}

</script>