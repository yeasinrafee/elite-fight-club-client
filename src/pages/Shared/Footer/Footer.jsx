import { Footer as FlowbiteFooter } from 'flowbite-react'; // Rename imported Footer to FlowbiteFooter
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <FlowbiteFooter className='bg-gray-200 mt-20' container>
      <div className='w-11/12 mx-auto mt-10 '>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
          <div className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-800 lg:ml-2'>
              EliteFight <br /> C L U B
            </h2>
          </div>
          <div className='grid grid-cols-2 gap-20   '>
            <div>
              <FlowbiteFooter.Title title='about' />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href='#'>
                  Elite Fight Club
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href='#'>Classes</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title='Follow us' />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href='#'>Github</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href='#'>Discord</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <FlowbiteFooter.Copyright href='#' by='Flowbite™' year={2022} />
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <FlowbiteFooter.Icon href='#' icon={BsFacebook} />
            <FlowbiteFooter.Icon href='#' icon={BsInstagram} />
            <FlowbiteFooter.Icon href='#' icon={BsTwitter} />
            <FlowbiteFooter.Icon href='#' icon={BsGithub} />
            <FlowbiteFooter.Icon href='#' icon={BsDribbble} />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
