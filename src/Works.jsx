import React from "react";
import thumb1 from './images/cv-website-education.png';
import thumb2 from './images/look-website.png';
import skyshot1 from './images/sky-september-2020.jpg';
import skyshot2 from './images/sky-palm-shot-november-2020.jpg';
import skyshot3 from './images/sky-palm-march-2021.jpg';
import skyshot4 from './images/sky-palm-july2021.jpg';

const Works = () => {

    return (
        <div className="works-container">
            <h1 id="works-title">Works</h1>
            <p id="work-description">
                While I enjoy certain hobbies, such as taking photos in the outdoors, I am mostly proud
                of creating software projects. These projects have allowed me to develop my programming
                skills, and I am going to try to improve as much as I can.
            </p>
            <div className="works-1">
                <h3><i>Curriculum Vitae (CV) Website</i></h3>
                <img src={thumb1} alt="work-1"></img>
                <div className="works-description">
                    <p>
                        I created this website on July 2021. This website is based on my official resume,
                        except that the only difference is that it is a curriculum vitae, more commonly
                        known as a CV. Like the "Software Projects" of that page states, the website was made
                        using HTML, CSS, and JavaScript. There is not much there, as it is only a page containing
                        coursework I have done so far during my time in college and projects I made for school
                        and outside of it as well. If there is any update to my resume or relevant courses for my
                        future job, I will include them on my curriculum vitae website.
                    </p>
                    <p>
                        I might recreate this website using React.js, just like how I did for this website.
                        I am going to decide whether to recreate this website during the winter break or
                        later in 2022.
                    </p>
                </div>
            </div>
            <div className="works-2">
                <h3><i>Look Video and Photography Website</i></h3>
                <img src={thumb2} alt="work-2"></img>
                <div className="works-description">
                    <p>
                        This website was created on July 2020, during the early months of the pandemic. Since I was
                        bored and had nothing to do at the time (due to quarantine), I decided to make a website for
                        my parent's business. It was originally a good idea to help promote my parent's local photography
                        business. Unfortunately, due to the massive spike in COVID-19 cases at the time, it was very
                        unlikely that I was going to release it to the public in an undetermined time, or ever. However,
                        I continued to work on it, improving my skills on HTML, CSS, and JavaScript to keep the website
                        up to date. Due to school and other family obligations, I am probably not going to keep working
                        on the website anymore. Despite the setbacks, this remains one of my few works that I am proud of, as I
                        enhanced my web development abilities, programming skills, and creativity as a result.
                    </p>
                </div>
            </div>
            <div className="works-3">
                <h3><i>A Sky and Palm Background</i></h3>
                <img src={skyshot1} alt="work-3"></img>
                <div className="works-description">
                    <p>
                        I took this photo in September 2020. This day was actually one of the best days I have had
                        in my entire life, due to the fact that it was nice and warm and the sky was nice
                        (though I don't mind a cool and clear day either). Since the sky was clear,
                        I thought, why wouldn't it be a good idea to take a picture?
                    </p>
                    <p>
                        So that's what I did. I used my image as a cover photo for my social media profiles, including
                        my LinkedIn. I took another image for my social media wallpaper that I liked even more,
                        because during that time, I just got done going through 4 stressful days due to the
                        heavy school workload the same college semester I took this photo.
                    </p>
                </div>
            </div>
            <div className="works-4">
                <h3><i>Clear Sky with a Palm Background</i></h3>
                <img src={skyshot2} alt="work-4"></img>
                <div className="works-description">
                    <p>
                        This is a photo I took on November 2020. On this day, it was clear, sunny, and
                        pretty warm, and not as hot as I hoped. I figured during this time that it would
                        be nice to take a photo of the sky as a background with the palm on my house
                        accompanying it. I went outside, and I took the photo as shown on your left
                        (or above in the mobile version of this website). I compared with the other
                        photo above this one, and I realized that it was even better. I thought it would
                        look good to use as a theme wallpaper, which I eventually did. I might have said
                        this multiple times, but this is one of the few photos I like the most. Some photos
                        I took in the outdoors may have been good or terrible, but this one, in my personal
                        opinion, is my favorite.
                    </p>
                </div>
            </div>
            <div className="works-5">
                <h3><i>Clear Sky with a Palm Background (March 2021)</i></h3>
                <img src={skyshot3} alt="work-5"></img>
                <div className="works-description">
                    <p>
                        This photo was taken on March 2021. I don't recall exactly what happened before
                        that, but I remember coming off of a stressful time that month. A family problem
                        arose, and I am not going to go into depth as to what happened. The only thing I
                        can say is that, it was not pleasant, as not only did I have to take care of some
                        homework assignments that I had to finish, but I also had to take care of a personal
                        issue that was affecting a loved one at home. I had enough time one day and I decided
                        to take a photo of the palm trees in my home. And I know it's the same image of palms
                        like my other photos displayed on this page, but I can't help myself! I think palm
                        trees really make an area of a town look really modern and decorative. The next
                        photo will be another image of...you guessed it, a palm tree. I have really got
                        to go to my town's convention center since they have a wonderful waterfall fountain
                        that most people go to so that they can take photos of memorable events, such
                        as quincañeras and prom.
                    </p>
                </div>
            </div>
            <div className="works-6">
                <h3><i>Clear Sky with a Palm Background (AGAIN) (July 2021)</i></h3>
                <img src={skyshot4} alt="work-5"></img>
                <div className="works-description">
                    <p>
                        Like I said in the previous photo, this is YET another photo of a palm tree (I have
                        got to switch my image style and expand it to take photos of other pieces of nature.)
                        I took this photo 4 months after the previous photo above, mostly because I felt like
                        doing it and I needed to use it as my new cover photo and profile picture for one of
                        my accounts. This will probably be the last palm photo that I will be taking for a
                        while, as I intend to take photos of other pieces of nature, such as the beach,
                        the waterfall at my local convention center, or a forest. However, if I have time,
                        I will be taking the opportunity to take these photos. For now, at the time of writing
                        this post, I am currently pummeled with a lot of college assignments as well as other
                        obligations, such as finding an internship for my major to gain experience in my field,
                        as well as considering where I am going to work full-time. Again, if time permits,
                        I will be updating this section regularly when I take photos of something else other
                        than palm trees, even though they are nice and appealing to look at.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Works;