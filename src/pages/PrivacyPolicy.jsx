import React from "react";
import Header from "../components/Header";
import Clients from "./Clients";
import HomeClients from "../components/HomeClients";

const persons = [
  {
    image: "/assets/arnab.jpg",
    name: "Arnab Paul",
    designation: "Founder and Chief Executive",
    country: "India",
    linkedin: "#", // Add LinkedIn URL here
  },
  {
    image: "/assets/prasun.jpg",
    name: "Prasun Das",
    designation: "Consultant",
    country: "Canada",
    linkedin: "#", // Add LinkedIn URL here
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="pb-20">
      <div className="pt-40 px-10 lg:px-20">
        <section className="p-8 flex flex-col gap-6 lg:p-4 lg:py-8 animate-fade-in-later border rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-4">
            Privacy Policy
          </h1>
          <p className="text-lg leading-relaxed px-4 text-justify">
            We value the trust you place in us. That's why we insist upon the
            highest standards for secure transactions and customer information
            privacy. Please read the following statement to learn about our
            information gathering and dissemination practices.
            <br /> Note: Our privacy policy is subject to change at any time
            without notice. To make sure you are aware of any changes, please
            review this policy periodically. By visiting this Website you agree
            to be bound by the terms and conditions of this Privacy Policy. If
            you do not agree please do not use or access our Website. By mere
            use of the Website, you expressly consent to our use and disclosure
            of your personal information in accordance with this Privacy Policy.
            This Privacy Policy is incorporated into and subject to the Terms of
            Use.
          </p>
        </section>
      </div>

      <div className="pt-10 px-10 lg:px-20 relative">
        <section className="p-8 flex flex-col gap-6 lg:p-4 lg:py-8 animate-fade-in-later border rounded-xl backdrop-blur-lg">
          <h1 className="text-4xl font-bold text-center mt-4">
            Privacy and Security
          </h1>
          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
              Collection of Personally Identifiable Information and Other
              Information
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
              When you use our Website, we collect and store your personal
              information which is provided by you from time to time. Our
              primary goal in doing so is to provide you a safe, efficient,
              smooth and customized experience. This allows us to provide
              services and features that most likely meet your needs, and to
              customize our Website to make your experience safer and easier.
              More importantly, while doing so we collect personal information
              from you that we consider necessary for achieving this purpose.
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
              In general, you can browse the Website without telling us who you
              are or revealing any personal information about yourself. Once you
              give us your personal information, you are not anonymous to us.
              Where possible, we indicate which fields are required and which
              fields are optional. You always have the option to not provide
              information by choosing not to use a particular service or feature
              on the Website. We may automatically track certain information
              about you based upon your behaviour on our Website. We use this
              information to do internal research on our users' demographics,
              interests, and behaviour to better understand, protect and serve
              our users. This information is compiled and analysed on an
              aggregated basis. This information may include the URL that you
              just came from (whether this URL is on our Website or not), which
              URL you next go to (whether this URL is on our Website or not),
              your computer browser information, and your IP address.
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
              We use data collection devices such as "cookies" on certain pages
              of the Website to help analyse our web page flow, measure
              promotional effectiveness, and promote trust and safety. "Cookies"
              are small files placed on your hard drive that assist us in
              providing our services. We offer certain features that are only
              available through the use of a "cookie".
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
              We also use cookies to allow you to enter your password less
              frequently during a session. Cookies can also help us provide
              information that is targeted to your interests. Most cookies are
              "session cookies," meaning that they are automatically deleted
              from your hard drive at the end of a session. You are always free
              to decline our cookies if your browser permits, although in that
              case you may not be able to use certain features on the Website
              and you may be required to re-enter your password more frequently
              during a session.
            </p>

            <p className="text-justify text-lg leading-relaxed px-4">
              Additionally, you may encounter "cookies" or other similar devices
              on certain pages of the Website that are placed by third parties.
              We do not control the use of cookies by third parties.
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
              If you choose to buy on the Website, we collect information about
              your buying behaviour.
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
              If you transact with us, we collect some additional information,
              If you transact with us, we collect some additional information,
              such as a billing address, a credit / debit card number and a
              credit / debit card expiration date and/ or other payment
              instrument details and tracking information from cheques or money
              orders.
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
              If you choose to post messages on our message boards, chat rooms
              If you choose to post messages on our message boards, chat rooms
              or other message areas or leave feedback, we will collect that
              information you provide to us. We retain this information as
              necessary to resolve disputes, provide customer support and
              troubleshoot problems as permitted by law.
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
              If you send us personal correspondence, such as emails or letters,
              If you send us personal correspondence, such as emails or letters,
              or if other users or third parties send us correspondence about
              your activities or postings on the Website, we may collect such
              information into a file specific to you.
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
              We collect personally identifiable information (email address, We
              collect personally identifiable information (email address, name,
              phone number, credit card / debit card / other payment instrument
              details, etc.) from you when you set up a free account with us.
              While you can browse some sections of our Website without being a
              registered member, certain activities (such as placing an order)
              do require registration. We do use your contact information to
              send you offers based on your previous orders and your interests.
            </p>
          </div>

          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
              Use of Demographic/ Profile Data/ Your Information
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
              We use personal information to provide the services you request.
              To the extent we use your personal information to market to you,
              we will provide you the ability to opt-out of such uses. We use
              your personal information to resolve disputes; troubleshoot
              problems; help promote a safe service; collect money; measure
              consumer interest in our products and services, inform you about
              online and offline offers, products, services, and updates;
              customize your experience; detect and protect us against error,
              fraud and other criminal activity; enforce our terms and
              conditions; and as otherwise described to you at the time of
              collection.
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
              In our efforts to continually improve our product and service
              offerings, we collect and analyse demographic and profile data
              about our users' activity on our Website.
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
              We identify and use your IP address to help diagnose problems with
              our server, and to administer our Website. Your IP address is also
              used to help identify you and to gather broad demographic
              information.
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
              We will occasionally ask you to complete optional online surveys.
              These surveys may ask you for contact information and demographic
              information (like zip code, age, or income level). We use this
              data to tailor your experience at our Website, providing you with
              content that we think you might be interested in and to display
              content according to your preferences.
            </p>
          </div>

          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
              Cookies
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
              A "cookie" is a small piece of information stored by a web server
              on a web browser so it can be later read back from that browser.
              Cookies are useful for enabling the browser to remember
              information specific to a given user. We place both permanent and
              temporary cookies in your computer's hard drive. The cookies do
              not contain any of your personally identifiable information.
            </p>
            <br />
          </div>

          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
              Sharing of Personal Information
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
              We may share personal information with our other corporate
              entities and affiliates to help detect and prevent identity theft,
              fraud and other potentially illegal acts; correlate related or
              multiple accounts to prevent abuse of our services; and to
              facilitate joint or co-branded services that you request where
              such services are provided by more than one corporate entity.
              Those entities and affiliates may not market to you as a result of
              such sharing unless you explicitly opt-in.
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
              We may disclose personal information if required to do so by law
              or in the good faith belief that such disclosure is reasonably
              necessary to respond to subpoenas, court
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
              We use data collection devices such as "cookies" on certain pages
              of the Website to help analyse our web page flow, measure
              promotional effectiveness, and promote trust and safety. "Cookies"
              are small files placed on your hard drive that assist us in
              providing our services. We offer certain features that are only
              available through the use of a "cookie".
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
              Orders, or other legal process. We may disclose personal
              information to law enforcement offices, third party rights owners,
              or others in the good faith belief that such disclosure is
              reasonably necessary to: enforce our Terms or Privacy Policy;
              respond to claims that an advertisement, posting or other content
              violates the rights of a third party; or protect the rights,
              property or personal safety of our users or the general public.
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
              We and our affiliates will share / sell some or all of your
              personal information with another business entity should we (or
              our assets) plan to merge with, or be acquired by that business
              entity, or re-organization, amalgamation, restructuring of
              business. Should such a transaction occur that other business
              entity (or the new combined entity) will be required to follow
              this privacy policy with respect to your personal information.
            </p>
            <br />
          </div>
        </section>
        <img
          src="assets/For developer/Red_Dot.png"
          className="absolute top-8 ml-16 opacity-40 "
        />
      </div>

      <div className="pt-10 px-10 lg:px-20 relative">
        <section className="p-8 flex flex-col gap-6 lg:p-4 lg:py-8 animate-fade-in-later border rounded-xl backdrop-blur-lg">
          <h1 className="text-4xl font-bold text-center mt-4">
            Links to Other Sites
          </h1>
          <p className="text-lg leading-relaxed px-4 text-justify">
            Our Website links to other websites that may collect personally
            identifiable information about you. www.orpaxqualtra.com is not
            responsible for the privacy practices or the content of those linked
            websites.
          </p>
          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
              Security Precautions
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
              Our Website has stringent security measures in place to protect
              the loss, misuse, and alteration of the information under our
              control. Whenever you change or access your account information,
              we offer the use of a secure server. Once your information is in
              our possession we adhere to strict security guidelines, protecting
              it against unauthorized access.
            </p>
            <br />
          </div>

          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
              Choice / Opt Out
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
              We provide all users with the opportunity to opt-out of receiving
              non-essential (promotional, marketing-related) communications from
              us on behalf of our partners, and from us in general, after
              setting up an account.
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
              If you want to remove your contact information from all
              Orpaxqualtra.com lists and newsletters, please visit{" "}
              <a
                href="www.orpaxqualtra.com"
                target="_blank"
                className="text-blue-500"
              >
                www.orpaxqualtra.com
              </a>
              .
            </p>
          </div>

          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
              Advertisement on Orpaxqualtra.com
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
              We use third-party advertising companies to serve ads when you
              visit our Website. These companies may use information (not
              including your name, address, email address, or telephone number)
              about your visits to this and other websites in order to provide
              advertisements about goods and services of interest to you.
            </p>
          </div>

          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
              Your Consent
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
              By using the Website and/ or by providing your information, you
              consent to the collection and use of the information you disclose
              on the Website in accordance with this Privacy Policy, including
              but not limited to Your consent for sharing your information as
              per this privacy policy.
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
              If we decide to change our privacy policy, we will post those
              changes on this page so that you are always aware of what
              information we collect, how we use it, and under what
              circumstances we disclose it.
            </p>
          </div>
        </section>
        <img
          src="assets/For developer/Red_Dot.png"
          className="absolute top-8 ml-16 opacity-40 "
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
