/*
 * COPYRIGHT (C) 2024 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Navigate } from "react-router-dom";

interface IChatNavigation {
  url: string;
}

/**
 * Component for navigating for a chat navigation message
 */
export const ChatNavigation = ({ url }: IChatNavigation) => {
  return <Navigate to={url} />;
};
