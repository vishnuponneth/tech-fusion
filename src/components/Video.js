import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getSectionsAndVideosByCourseId } from "../functions/firestore";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRight from "@mui/icons-material/ChevronRight";


const drawerWidth = 240;

const Content = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: "-10px",
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Video() {
    const params = useParams();
    const [drawerOpen, setDrawerOpen] = useState(true);
    const navigate = useNavigate();
    const [sections, setSections] = useState([]);
    const [contentData, setContentData] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    useEffect(() => {
        const id = searchParams.get("id");
        if (id) {
            getSectionsAndVideosByCourseId(id).then(sections => {
                console.log(sections)
                setSections(sections);
            })

        }
    }, []);

    return (
        <div style={{ display: "flex", width: "100%" }}>
            <Content style={{ flex: 1, height: "100%", minWidth: 0 }} open={drawerOpen}>
                {/* Button to open the drawer if it's closed */}
                {!drawerOpen && (
                    <IconButton
                        onClick={handleDrawerOpen}
                        style={{ position: 'absolute', right: 16, top: 16 }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                {contentData && (
                    <div style={{ padding: "16px" }}>
                        <Typography variant="h5">{contentData.title}</Typography>
                        <Typography variant="subtitle1" gutterBottom>{contentData.description}</Typography>
                        <div style={{ marginTop: "16px" }}>
                            <iframe
                                width="100%"
                                height="400"
                                src={`https://www.youtube.com/embed/${new URL(contentData.videoUrl).pathname.split("/").pop()}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}
            </Content>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="right"
                open={drawerOpen}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRight />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {sections && sections.map((section, sectionIndex) => (
                    <Accordion key={sectionIndex}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={"section-" + sectionIndex}
                            id={"section-" + sectionIndex}
                        >
                            <Typography>{section.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="nav" aria-label={"section " + sectionIndex + " videos"}>
                                {section.videos && section.videos.map((video, videoIndex) => (
                                    <ListItemButton
                                        key={videoIndex}
                                        selected={selectedIndex === `${sectionIndex}-${videoIndex}`}
                                        onClick={() => {
                                            setSelectedIndex(`${sectionIndex}-${videoIndex}`);
                                            setContentData({
                                                title: video.title,
                                                description: video.description,
                                                videoUrl: video.url,
                                            });
                                        }}
                                    >
                                        <ListItemText primary={video.title} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                ))}
                <Divider />
            </Drawer>
        </div>

    );
}
