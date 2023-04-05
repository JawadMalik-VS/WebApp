import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Logout from "./Logout";

function Friends() {
  return (
    <>
      {" "}
      <Logout />
      <div style={{ position: "absolute", marginLeft: "700px" }}>
        <Card sx={{ width: "500px", margin: "30px" }}>
          <h1 style={{ textAlign: "center" }}>
            YOU ARE IN FRIENDS
            <img src="https://www.unco.edu/college-bound-colorado/images/group-friends-jumping.jpg" />
          </h1>

          <Typography paragraph>
            Many of us have friends in our lives over the years. Some friends we
            make as children and then lose contact as we grow older. Other
            friends we make as adults and stay in touch with as long as we are
            in close proximity to and it is convenient to keep in touch but then
            over time one moves away or busy schedules slowly pull us apart and
            we start to lose touch. Those friendships fall into the “good
            friends” or “close friends” as the opening quote cites. But then
            there is that last group of friends – those we call true friends –
            they are those we have a mutual caring about, and we understand each
            other’s hearts, and where bonds are formed between us that span any
            distance in proximity and where the bonds run so deep that no amount
            of time apart or lack of words will change the way we feel about
            that friend.
          </Typography>
          <Typography paragraph>
            These are our true friends, and when one comes into your life
            cherish it! As a child our family moved often and so I was
            constantly making new friends each place we moved. Often the contact
            was lost with friends in past locations, although my memories of
            them were treasured. As an adult it is often harder to find the time
            to form those deep friendships outside your immediate family members
            because we are all trying to juggle a million balls in the air with
            work and church and service and community all while trying to give
            our greatest attention to our own children and spouses where it
            rightfully belongs. And as a single mother for many years of my life
            it was even more difficult to make time for friends because playing
            the role of two parents by yourself while also being the sole
            support of your family was overwhelming to say the least. But even
            during those challenging years there were individuals during that
            time who came into my life that I consider my truest of friends.
            They are individuals who saw me through tough times and who always
            saw the best in me despite any of my shortcomings. They picked me up
            at times I was down. They stood by me when I felt alone. They taught
            me things about life and about myself with patience and
            understanding. They lifted my children’s spirits and made them laugh
            when they were going through tough times of their own. They forgave
            at times when I was grumpy or obstinate. They loved me without
            judgment and without expectations. They gave me hugs, even at times
            that I may not have deserved one.
          </Typography>
          <Typography paragraph>
            These true friends were individuals who were there for me maybe not
            always in person or in word every time, but always in heart… and
            knowing that helped me through incredible challenges throughout the
            years. True friends just do that – they help us grow and change for
            the better. They support us in good times and bad. They can make us
            laugh when all we want to do is cry. And no matter how far apart
            time and distance may cause us to grow from one another, and even if
            death takes one of them from this world to the next, we always have
            the comfort of knowing that these true friends are still there for
            us, even if only in spirit, cheering us on and wishing us the best,
            because that is what true friends do for each other.
          </Typography>
        </Card>
      </div>
    </>
  );
}

export default Friends;
