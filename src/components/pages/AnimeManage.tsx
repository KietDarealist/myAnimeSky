import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaSortAlphaDown } from 'react-icons/fa';
import { useState } from 'react';
import animes from '../../store/animesInfo';
import Lock from "../../images/lock.svg";
import Delete from "../../images/delete.svg";
import ReSearch from "../../images/userdetailsearch.svg"
import FirstImg from "../../images/1.jpg";
import SecondImg from "../../images/2.jpg"
import {Button} from "@material-ui/core";
import CardImg from "../../images/CardImg.jpg";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { Card } from '@material-ui/core';

interface Props{
    Id: number;
    Name: string;
    japaneseName: string;
    Description: string;
    Thumbnail: string;
    Status: boolean,
    Wallpaper: string;
    Author: string;
    Episodes: number;
    amoutEpisodes: number;
    Ratings:number;
    Comments: number;
    Views: Number;
    createBy:string;
    updateBy: string;
    createAt: string;
    updateAt: string;
}

const AnimeManage = () => {

    const [animeBars, setAnimeBar]=useState(animes);
    const [proper, setProper]=useState<Props>();
    const [show,setShow]=useState(false);
    const [showConfirmBoard,setShowConfirmBoard]=useState(false);
    const [showConfirmLockBoard,  setShowConfirmLockBoard]=useState(false);
    const [keyword, setKeyword] = useState("");
    const filterNames=animes.filter(
        (anime)=>
        anime.Name.toLowerCase().includes(keyword))
        
        const onInputChange = (e:React.FormEvent<HTMLInputElement>)=>{
            e.preventDefault();
            setKeyword(e.currentTarget.value.toLowerCase());
            if (e.currentTarget.value.toLowerCase())
                setAnimeBar([...filterNames]);
            else
                setAnimeBar(animes);
        }
        const searchClick = ()=>{

            console.log(animeBars);
        }
const handleOpenConfirmBoard = () => {
        setShowConfirmBoard(true);
        };
const handleClosingConfirmBoard = () => {
        setShowConfirmBoard(false);
        };
const handleOpenConfirmLockBoard = () => {
        setShowConfirmLockBoard(true);
        };
const handleClosingConfirmLockBoard = () => {
        setShowConfirmLockBoard(false);
        };
const handleOpen = () => {
        setShow(true);
        };
const handleClosing = () => {
        setShow(false);
        };


    const Animecard:React.FC<Props> = (proper) => { 
        return (
            <div>
              <Dialog
                open={show}
                onClose={handleClosing}
                fullWidth
                maxWidth="xs"
              >
                <DialogTitle style={{ cursor: 'move', textAlign:'center' }} id="draggable-dialog-title">
                  Th??ng tin chi ti???t
                </DialogTitle>
                <DialogContent>
                    <h2 className="font-bold text-left text-lg">Avatar</h2>
                        <img className="cardimage" src={CardImg} alt="/" />
                    <h2 className="font-bold text-left text-lg mt-4">Th??ng tin Anime</h2>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">T??n Anime: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.Name as string}</h3>
                    </div>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">Th??? lo???i: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.Description as string}</h3>
                    </div>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">Ng??y t???o: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.createAt as string}</h3>
                    </div>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">Tr???ng th??i: </h3>
                        <h3 className={`${proper.Status===true ? "text-left font-semibold mt-2 text-md text-green-500" : "text-left font-semibold mt-2 text-md text-yellow-500"}`}
                        >{`${proper.Status===true ? "???? ho??n th??nh" : "??ang c???p nh???t"}`}</h3>
                    </div>

                    <h2 className="font-bold text-left text-lg mt-6">Chi ti???t</h2>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">S??? comment: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.Comments as number}</h3>
                    </div>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">S??? l?????t xem: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.Views as number}</h3>
                    </div>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">Ng?????i t???o: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.createBy as string}</h3>
                    </div>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">Ng?????i c???p nh???t: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.updateBy as string}</h3>
                    </div>
                </DialogContent>
                <div className="mt-6">
                <DialogActions>
                <div className="mr-24 pr-2">
                <Button autoFocus onClick={()=>{deleteBar(proper?.Id as number); handleClosing()}}color="secondary" variant="contained">
                   X??a Amime
                  </Button>
                  </div>
                    
                  <Button autoFocus onClick={handleClosing} color="default" variant="contained">
                    ????ng
                  </Button>
                  <Button onClick={()=>{lockUser(proper?.Id as number, proper?.Status); handleClosing()}}  color="default" variant="contained">
                    Kh??a Anime
                  </Button>
                </DialogActions>
                </div>
              </Dialog>
            </div>
          );
    }

    const  ConfirmBoard:React.FC<Props> = (proper) => {
        return (
          <div>
            <Dialog
              open={showConfirmBoard}
              onClose={handleClosingConfirmLockBoard}
              fullWidth
            >
              <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                X??c nh???n x??a Anime
              </DialogTitle>
              <DialogContent>
                <DialogContentText className="text-sm text-gray-500">
                  B???n c?? ch???c r???ng mu???n x??a anime {proper?.Name} ?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClosingConfirmBoard} color="default" variant="contained">
                  H???y b???
                </Button>
                <Button onClick={()=>{deleteBar(proper?.Id as number); handleClosingConfirmBoard()}} color="secondary" variant="contained">
                  ?????ng ??
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }

      const ConfirmLockBoard:React.FC<Props> = (proper)=>{
        return (
            <div>
              <Dialog
                open={showConfirmLockBoard}
                onClose={handleClosingConfirmBoard}
                fullWidth
              >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                  X??c nh???n kh??a
                </DialogTitle>
                <DialogContent>
                  <DialogContentText className="text-sm text-gray-500">
                    B???n c?? ch???c r???ng mu???n {`${proper?.Status===true ? "kh??a " : "g??? kh??a "}`} anime {proper?.Name} ?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClosingConfirmLockBoard} color="default" variant="contained">
                    H???y b???
                  </Button>
                  <Button onClick={()=>{lockUser(proper?.Id as number, proper?.Status); handleClosingConfirmLockBoard()}} color="secondary" variant="contained">
                    ?????ng ??
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          );
    }



    function deleteBar(Id:number){
        let returnIndex:number;
        animes.map((anime) => {
            if (anime.Id===Id)
            {
                returnIndex=animes.indexOf(anime);
                animes.splice(returnIndex, 1);
            }
        })
        setAnimeBar([...animes]);
    }

    function lockUser(Id:number, Status:boolean)
    {
        let returnIndexOfLock:number;
        animes.map((anime)=>{
            if (anime.Id===Id){
                anime.Status=(!Status);
            }
        })
        setAnimeBar([...animes]);
    }


    function sorted(){
        animes.sort((a,b)=>(a.Name > b.Name) ? 1 : -1);
        setAnimeBar([...animes]);
      }





    return (
        <>
        <Animecard Id={ proper?.Id as number } Thumbnail={proper?.Thumbnail as string} 
        japaneseName={proper?.japaneseName as string} Description={proper?.Description as string} 
        Status={proper?.Status as boolean} Comments={proper?.Comments as number}
        Views={proper?.Views as number} amoutEpisodes={proper?.amoutEpisodes as number}
        Episodes={proper?.Episodes as number} createAt={proper?.createAt as string}
        createBy={proper?.createBy as string} updateAt={proper?.updateAt as string} updateBy={proper?.updateBy as string}
        Ratings={proper?.Ratings as number} Name={proper?.Name as string} Author={proper?.Author as string} Wallpaper={proper?.Wallpaper as string} 
                    />
        <ConfirmBoard Id={ proper?.Id as number } Thumbnail={proper?.Thumbnail as string} 
        japaneseName={proper?.japaneseName as string} Description={proper?.Description as string} 
        Status={proper?.Status as boolean} Comments={proper?.Comments as number}
        Views={proper?.Views as number} amoutEpisodes={proper?.amoutEpisodes as number}
        Episodes={proper?.Episodes as number} createAt={proper?.createAt as string}
        createBy={proper?.createBy as string} updateAt={proper?.updateAt as string} updateBy={proper?.updateBy as string}
        Ratings={proper?.Ratings as number} Name={proper?.Name as string} Author={proper?.Author as string} Wallpaper={proper?.Wallpaper as string} 
         />

        <ConfirmLockBoard Id={ proper?.Id as number } Thumbnail={proper?.Thumbnail as string}
        japaneseName={proper?.japaneseName as string} Description={proper?.Description as string} 
        Status={proper?.Status as boolean} Comments={proper?.Comments as number}
        Views={proper?.Views as number} amoutEpisodes={proper?.amoutEpisodes as number}
        Episodes={proper?.Episodes as number} createAt={proper?.createAt as string}
        createBy={proper?.createBy as string} updateAt={proper?.updateAt as string} updateBy={proper?.updateBy as string}
        Ratings={proper?.Ratings as number} Name={proper?.Name as string} Author={proper?.Author as string} Wallpaper={proper?.Wallpaper as string}
        />


        <section className="px-10">
            <div className="flex justify-between items-center mt-16">
                <h1 className="text-3xl font-semibold">Danh s??ch Anime</h1>
                <div className="flex items-center justify-center">
                    <input className="search-bar" placeholder="T??m ki???m theo t??n Anime" type="text" onChange={onInputChange}></input>
                    <FaSearch className="search-icon" />
                </div>
            </div>

            <div className="mt-10">
                <button className="flex items-center bg-gray-100 pl-2 pr-20 py-2 rounded" onClick={()=>sorted()}>
                    <FaSortAlphaDown className="text-lg" />
                    <h3 className="font-semibold text-lg ml-5">S???p x???p</h3>
                </button>
            </div>


            <div className="mt-10 shadow-box">
                <header className="flex items-center justify-between bg-gray-900 px-6 py-5 rounded-b-none rounded-t-xl">
                    <h3 className="text-white">Thumbnail</h3>
                    <h3 className="text-white">T??n</h3>
                    <h3 className="text-white">S??? t???p</h3>
                    <h3 className="text-white">Tr???ng th??i</h3>
                    <h3 className="text-white">H??nh ?????ng</h3>
                </header>

                {animeBars.map((animeBar)=>{
                    return (
                        <div key={animeBar.Id}  className="flex justify-between mt-5
                        py-3 px-6 bg-white rounded-xl">
                            <img src={animeBar.Thumbnail} alt="#" width={45} height={45} />
                            <h3 className="mt-4 text-left w-56 ml-4 text-sm">{animeBar.Name}</h3>
                            <h3 className="mt-4 text-center w-48 mr-12 text-sm">{animeBar.Episodes}/{animeBar.amoutEpisodes}</h3>
                            <h3  className={`
                            mt-4 text-sm
                            ${animeBar.Status===false
                            ? "text-yellow-500 font-semibold w-32 mr-24 pr-2"
                            : "text-green-500 font-semibold w-32 mr-24 pr-4"
                            }`}>
                            {`???
                             ${animeBar.Status===false
                            ?"??ang c???p nh???t"
                            :"Ho??n th??nh"
                             }
                            `}
                            </h3>
                            <div className="flex items-center relative right-0">
                                <img className="cursor-pointer" src={ReSearch} alt ="/" onClick={()=>{
                                setShow(true);
                                setProper(animeBar);
                                }}  />
                                <img className="cursor-pointer" src={Lock} alt ="/" 
                                 onClick={()=>{
                                    setShowConfirmLockBoard(true);
                                    setProper(animeBar);}}
                                />
                                <img className="cursor-pointer" src={Delete} alt="/"
                                 onClick={()=>{
                                    setShowConfirmBoard(true);
                                    setProper(animeBar);
                                    }} 
                                 /> 
                            </div>
                        </div>
                    )
                })}



            </div>

            <div className="flex float-right mt-20">
            <button className="slideButton ml-4 px-4 py-3 rounded-xl">1</button>
            <button className="slideButton ml-4 px-4 py-3 rounded-xl">2</button>
            <button className="slideButton ml-4 px-4 py-3 rounded-xl">3</button>
            </div>

            </section>
            </>
    )
}

export default AnimeManage
